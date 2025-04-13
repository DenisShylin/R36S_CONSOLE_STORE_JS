import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';
import sortMediaQueries from 'postcss-sort-media-queries';
import fs from 'fs-extra';

// Список поддерживаемых языков
const supportedLanguages = [
  'en',
  'ru',
  'ar',
  'be',
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'pt',
  'tr',
  'uk',
];

// Плагин для преобразования имен файлов в нижний регистр на этапе сборки
function lowercaseAssetsPlugin() {
  return {
    name: 'lowercase-assets-plugin',
    generateBundle(options, bundle) {
      // На этом этапе файлы уже сгенерированы, но ещё не записаны на диск
      const newBundle = {};

      for (const fileName in bundle) {
        const lowercaseName = fileName.toLowerCase();
        newBundle[lowercaseName] = bundle[fileName];

        // Обновляем имя файла в соответствующем объекте
        if (bundle[fileName].fileName) {
          bundle[fileName].fileName = bundle[fileName].fileName.toLowerCase();
        }

        // Если это sourcemap, обновляем ссылку на исходный файл
        if (
          bundle[fileName].source &&
          typeof bundle[fileName].source === 'string' &&
          fileName.endsWith('.map')
        ) {
          try {
            const mapContent = JSON.parse(bundle[fileName].source);
            if (
              mapContent.file &&
              mapContent.file !== mapContent.file.toLowerCase()
            ) {
              mapContent.file = mapContent.file.toLowerCase();
              bundle[fileName].source = JSON.stringify(mapContent);
            }
          } catch (e) {
            console.error(
              `Ошибка при обработке карты исходников: ${e.message}`
            );
          }
        }
      }

      // Заменяем bundle новым объектом с именами файлов в нижнем регистре
      Object.keys(bundle).forEach(key => {
        if (key !== key.toLowerCase()) {
          delete bundle[key];
        }
      });

      Object.keys(newBundle).forEach(key => {
        bundle[key] = newBundle[key];
      });
    },
  };
}

// Плагин для исправления путей в HTML-файлах (только нижний регистр)
function fixHtmlPathsPlugin() {
  return {
    name: 'fix-html-paths-plugin',
    transformIndexHtml(html) {
      // Преобразуем все имена файлов в нижний регистр
      let result = html.replace(
        /(href|src)=["']([^"']+)["']/gi,
        (match, attr, url) => {
          // Игнорируем внешние ссылки
          if (
            url.startsWith('http') ||
            url.startsWith('data:') ||
            url.startsWith('//')
          ) {
            return match;
          }

          // Разделяем URL на части
          let [path, query] = url.split('?');
          let hash = '';

          if (path.includes('#')) {
            [path, hash] = path.split('#');
          } else if (!query && url.includes('#')) {
            [path, hash] = url.split('#');
          }

          // Преобразуем сегменты пути в нижний регистр
          const segments = path.split('/');
          let modified = false;

          for (let i = 0; i < segments.length; i++) {
            if (segments[i] && segments[i] !== segments[i].toLowerCase()) {
              segments[i] = segments[i].toLowerCase();
              modified = true;
            }
          }

          if (modified) {
            let newUrl = segments.join('/');

            // Восстанавливаем хэш и параметры запроса
            if (hash) newUrl += '#' + hash;
            if (query) newUrl += '?' + query;

            return `${attr}="${newUrl}"`;
          }

          return match;
        }
      );

      return result;
    },
  };
}

// Плагин для постобработки файлов и создания языковых версий
function postProcessPlugin() {
  return {
    name: 'post-process-plugin',
    closeBundle: async () => {
      // Путь к директории сборки
      const distDir = path.resolve(process.cwd(), 'dist');

      console.log(`Post-processing files in: ${distDir}`);

      if (!fs.existsSync(distDir)) {
        console.error(`Error: Build directory ${distDir} does not exist!`);
        return;
      }

      // Рекурсивная функция для переименования файлов в нижний регистр
      function processDirectory(dir) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            processDirectory(fullPath);
          } else if (stats.isFile()) {
            const lowercase = item.toLowerCase();
            if (item !== lowercase) {
              const newPath = path.join(dir, lowercase);
              try {
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed: ${fullPath} -> ${newPath}`);
              } catch (error) {
                console.error(
                  `Error renaming ${fullPath} to ${newPath}:`,
                  error
                );
              }
            }
          }
        }
      }

      // Переименовываем файлы в нижний регистр
      console.log('Converting filenames to lowercase...');
      processDirectory(distDir);

      // Создаем языковые версии сайта
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) {
        console.error('Cannot find index.html in build output');
        return;
      }

      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      console.log('Creating language versions...');

      // Создаем директории для каждого языка и копируем в них index.html
      for (const lang of supportedLanguages) {
        if (lang === 'en') continue; // Для английского оставляем корневой index.html

        const langDir = path.join(distDir, lang);
        fs.ensureDirSync(langDir);

        let langContent = indexContent;

        // Исправляем атрибут lang в HTML
        langContent = langContent.replace(
          /<html lang="[^"]*">/,
          `<html lang="${lang}">`
        );

        // Добавляем мета-тег с языком и скрипт для переключения на этот язык
        langContent = langContent.replace(
          '</head>',
          `<meta name="language" content="${lang}">
          <script>
            window.initialLanguage = "${lang}";
          </script>
          </head>`
        );

        fs.writeFileSync(path.join(langDir, 'index.html'), langContent);
        console.log(`Created language version for: ${lang}`);
      }

      // Исправляем атрибут lang для основного (английского) языка
      let processedContent = indexContent.replace(
        /<html lang="[^"]*">/,
        '<html lang="en">'
      );

      // Записываем обратно основной index.html
      fs.writeFileSync(indexPath, processedContent);

      // Создаем файл 404.html для обработки неизвестных URL
      const notFoundContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Извлекаем путь из URL
    const path = window.location.pathname;
    
    // Проверяем, может ли первый сегмент пути быть языком
    const segments = path.split('/').filter(Boolean);
    const supportedLanguages = ${JSON.stringify(supportedLanguages)};
    
    if (segments.length > 0 && supportedLanguages.includes(segments[0])) {
      // Это языковой путь, но файл не найден
      window.location.href = '/' + segments[0] + '/';
    } else {
      // Неизвестный путь - редирект на главную
      window.location.href = '/';
    }
  </script>
</head>
<body>
  <p>Page not found. Redirecting...</p>
</body>
</html>
      `;

      fs.writeFileSync(path.join(distDir, '404.html'), notFoundContent);
      console.log('Created 404.html with redirect logic');
      console.log('Post-processing completed successfully!');
    },
  };
}

export default defineConfig(({ command }) => {
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  // Устанавливаем корневой путь
  const base = '/';

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    // Базовый путь для всех ресурсов
    base: base,
    root: 'src',
    // Папка public
    publicDir: '../public',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: Object.fromEntries(
          htmlFiles.map(file => [
            file.replace(/\.html$/, ''),
            path.resolve(__dirname, 'src', file),
          ])
        ),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          // Имена файлов ресурсов в нижнем регистре
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash:8][extname]'.toLowerCase();
          },
          // Имена чанков в нижнем регистре
          chunkFileNames: 'assets/[name]-[hash:8].js'.toLowerCase(),
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          sortMediaQueries({
            sort: 'mobile-first',
          }),
        ],
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      // Плагин для преобразования имен файлов в нижний регистр
      lowercaseAssetsPlugin(),
      // Плагин для исправления путей в HTML
      fixHtmlPathsPlugin(),
      // Плагин для постобработки и создания языковых версий
      postProcessPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      open: true,
      historyApiFallback: true,
    },
  };
});
