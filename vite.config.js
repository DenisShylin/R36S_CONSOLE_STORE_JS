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

// Плагин для исправления путей в HTML-файлах
function fixHtmlPathsPlugin() {
  return {
    name: 'fix-html-paths-plugin',
    transformIndexHtml(html) {
      // Преобразуем все имена файлов в нижний регистр, НЕ добавляя базовый путь
      let result = html.replace(
        /(href|src)=["']([^"']+)["']/gi,
        (match, attr, url) => {
          // Игнорируем внешние ссылки
          if (
            (url.startsWith('http') && !url.includes('r36s.pro')) ||
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

          // Удаляем r36s.pro из пути, если он есть
          path = path.replace(
            /\/r36s\.pro\/|r36s\.pro\/|\/r36s\.pro|r36s\.pro/,
            ''
          );

          // Преобразуем сегменты пути в нижний регистр
          const segments = path.split('/');
          let modified = false;

          for (let i = 0; i < segments.length; i++) {
            if (segments[i] && segments[i] !== segments[i].toLowerCase()) {
              segments[i] = segments[i].toLowerCase();
              modified = true;
            }
          }

          // Собираем путь обратно
          let newUrl = segments.join('/');

          // Если путь должен начинаться с /, но его нет
          if (url.startsWith('/') && !newUrl.startsWith('/') && newUrl) {
            newUrl = '/' + newUrl;
          }

          // Восстанавливаем хэш и параметры запроса
          if (hash) newUrl += '#' + hash;
          if (query) newUrl += '?' + query;

          return `${attr}="${newUrl}"`;
        }
      );

      return result;
    },
  };
}

// Плагин для постобработки файлов после сборки
function postProcessPlugin() {
  return {
    name: 'post-process-plugin',
    closeBundle: async () => {
      // Путь к директории сборки - используем путь относительно корня проекта
      const outDir = 'dist';
      const distDir = path.resolve(process.cwd(), outDir);

      console.log(`Post-processing files in: ${distDir}`);

      if (!fs.existsSync(distDir)) {
        console.error(`Error: Build directory ${distDir} does not exist!`);
        return;
      }

      // Обновляем содержимое .map файлов
      const mapFiles = globSync(path.join(distDir, '**/*.map'));
      console.log(`Found ${mapFiles.length} map files to process`);

      for (const mapFile of mapFiles) {
        try {
          let content = fs.readFileSync(mapFile, 'utf-8');
          let mapData = JSON.parse(content);

          // Исправляем поле file если оно есть
          if (mapData.file && mapData.file !== mapData.file.toLowerCase()) {
            mapData.file = mapData.file.toLowerCase();

            // Записываем обновленное содержимое
            fs.writeFileSync(mapFile, JSON.stringify(mapData));
            console.log(`Updated references in map file: ${mapFile}`);
          }
        } catch (error) {
          console.error(`Error processing map file ${mapFile}:`, error);
        }
      }

      // Рекурсивная функция для обработки всех файлов и папок
      function processDirectory(dir) {
        const items = fs.readdirSync(dir);

        // Сначала изменяем имена файлов в текущей директории
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stats = fs.statSync(fullPath);

          if (stats.isDirectory()) {
            // Рекурсивно обрабатываем поддиректории
            processDirectory(fullPath);
          } else if (stats.isFile()) {
            // Преобразуем имя файла в нижний регистр
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

      // Начинаем с корневой директории сборки
      console.log(`Processing directory structure in: ${distDir}`);
      processDirectory(distDir);

      // Обновляем ссылки в HTML-файлах
      const htmlFiles = globSync(path.join(distDir, '**/*.html'));
      console.log(`Found ${htmlFiles.length} HTML files to process`);

      for (const htmlFile of htmlFiles) {
        let content = fs.readFileSync(htmlFile, 'utf-8');
        let updated = false;

        // Более агрессивный поиск ссылок
        content = content.replace(
          /(href|src|srcset)=["']([^"']+)["']/gi,
          (match, attr, url) => {
            // Если это внешняя ссылка или data URL, оставляем как есть
            if (
              (url.startsWith('http') && !url.includes('r36s.pro')) ||
              url.startsWith('data:') ||
              url.startsWith('//')
            ) {
              return match;
            }

            // Исходная ссылка для логирования
            const originalUrl = url;

            // Разделяем URL на путь и хэш/параметры запроса
            let [path, query] = url.split('?');
            let hash = '';

            if (path.includes('#')) {
              [path, hash] = path.split('#');
            } else if (!query && url.includes('#')) {
              [path, hash] = url.split('#');
            }

            // Удаляем r36s.pro из пути, если он есть
            path = path.replace(
              /\/r36s\.pro\/|r36s\.pro\/|\/r36s\.pro|r36s\.pro/,
              ''
            );

            // Разбиваем путь на сегменты
            const segments = path.split('/');
            let modified = false;

            // Преобразуем все сегменты пути (не только последний)
            for (let i = 0; i < segments.length; i++) {
              if (segments[i] && segments[i] !== segments[i].toLowerCase()) {
                segments[i] = segments[i].toLowerCase();
                modified = true;
              }
            }

            // Собираем путь обратно
            let newUrl = segments.filter(segment => segment !== '').join('/');

            // Если путь должен начинаться с /, но его нет
            if (
              originalUrl.startsWith('/') &&
              !newUrl.startsWith('/') &&
              newUrl
            ) {
              newUrl = '/' + newUrl;
            }

            // Восстанавливаем хэш и параметры запроса
            if (hash) newUrl += '#' + hash;
            if (query) newUrl += '?' + query;

            if (newUrl !== originalUrl) {
              updated = true;
              console.log(
                `URL update in ${htmlFile}: ${originalUrl} -> ${newUrl}`
              );
              return `${attr}="${newUrl}"`;
            }

            return match;
          }
        );

        // Исправляем фоновые изображения в инлайн-стилях
        content = content.replace(
          /style=["']([^"']*)url\(['"]?([^'")]+)['"]?\)([^"']*)['"]/gi,
          (match, beforeUrl, url, afterUrl) => {
            if (url.includes('r36s.pro')) {
              const newUrl = url.replace(
                /\/r36s\.pro\/|r36s\.pro\/|\/r36s\.pro|r36s\.pro/,
                ''
              );
              updated = true;
              return `style="${beforeUrl}url('${newUrl}')${afterUrl}"`;
            }
            return match;
          }
        );

        if (updated) {
          fs.writeFileSync(htmlFile, content);
          console.log(`Updated references in ${htmlFile}`);
        }
      }

      // Исправляем ссылки на ресурсы в JavaScript файлах
      const jsFiles = globSync(path.join(distDir, '**/*.js'));
      console.log(`Found ${jsFiles.length} JS files to process`);

      for (const jsFile of jsFiles) {
        let content = fs.readFileSync(jsFile, 'utf-8');
        let updated = false;

        // Исправляем ссылки r36s.pro в JS файлах
        content = content.replace(
          /["'](\/r36s\.pro\/|r36s\.pro\/|\/r36s\.pro|r36s\.pro)([^"']*)['"]/g,
          (match, prefix, path) => {
            updated = true;
            return `"${path}"`;
          }
        );

        // Исправляем все URL с r36s.pro внутри кавычек
        content = content.replace(
          /["'](https?:\/\/)?r36s\.pro\/([^"']*)['"]/g,
          (match, protocol, path) => {
            updated = true;
            return `"/${path}"`;
          }
        );

        if (updated) {
          fs.writeFileSync(jsFile, content);
          console.log(`Updated references in JS file: ${jsFile}`);
        }
      }

      // Исправляем ссылки на ресурсы в CSS файлах
      const cssFiles = globSync(path.join(distDir, '**/*.css'));
      console.log(`Found ${cssFiles.length} CSS files to process`);

      for (const cssFile of cssFiles) {
        let content = fs.readFileSync(cssFile, 'utf-8');
        let updated = false;

        // Исправляем URL в CSS файлах
        content = content.replace(
          /url\(['"]?(\/r36s\.pro\/|r36s\.pro\/|\/r36s\.pro|r36s\.pro)([^'")]+)['"]?\)/g,
          (match, prefix, path) => {
            updated = true;
            return `url('/${path}')`;
          }
        );

        // Исправляем все URL с r36s.pro
        content = content.replace(
          /url\(['"]?(https?:\/\/)?r36s\.pro\/([^'")]+)['"]?\)/g,
          (match, protocol, path) => {
            updated = true;
            return `url('/${path}')`;
          }
        );

        if (updated) {
          fs.writeFileSync(cssFile, content);
          console.log(`Updated references in CSS file: ${cssFile}`);
        }
      }

      // Создаем версии для разных языков
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

      // Исправляем атрибут lang для основного (английского) языка тоже
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

export default defineConfig(({ command, mode }) => {
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  // Устанавливаем корневой путь вместо '/r36s.pro/'
  const base = '/';

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    // Устанавливаем путь базы
    base: base,
    root: 'src',
    // Явно указываем папку public как источник статических файлов
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
          // Модифицированный assetFileNames для принудительно нижнего регистра
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            // Используем шаблон с принудительным нижним регистром
            return 'assets/[name]-[hash:8][extname]'.toLowerCase();
          },
          // Добавленный chunkFileNames для принудительно нижнего регистра
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
      // Добавляем плагин для нижнего регистра имен файлов
      lowercaseAssetsPlugin(),
      // Добавляем плагин для исправления путей в HTML (без базового пути)
      fixHtmlPathsPlugin(),
      // Добавляем плагин для постобработки
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
