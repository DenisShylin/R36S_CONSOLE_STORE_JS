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
function fixHtmlPathsPlugin(basePath) {
  return {
    name: 'fix-html-paths-plugin',
    transformIndexHtml(html) {
      // Преобразуем все имена файлов в нижний регистр, НЕ добавляя базовый путь
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

// Улучшенная функция для переименования файлов в нижний регистр и обновления путей в HTML
function renameFilesToLowercase(distDir, config) {
  console.log('Converting filenames to lowercase and updating references...');

  // Обновляем содержимое .map файлов
  const mapFiles = globSync(path.join(distDir, '**/*.map'));
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
            console.error(`Error renaming ${fullPath} to ${newPath}:`, error);
          }
        }
      }
    }
  }

  // Начинаем с корневой директории сборки
  processDirectory(distDir);

  // Обновляем ссылки в HTML-файлах
  const htmlFiles = globSync(path.join(distDir, '**/*.html'));

  for (const htmlFile of htmlFiles) {
    let content = fs.readFileSync(htmlFile, 'utf-8');
    let updated = false;

    // Более агрессивный поиск ссылок
    content = content.replace(
      /(href|src)=["']([^"']+)["']/gi,
      (match, attr, url) => {
        // Если это внешняя ссылка или data URL, оставляем как есть
        if (
          url.startsWith('http') ||
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

        if (modified) {
          let newUrl = segments.join('/');

          // Восстанавливаем хэш и параметры запроса
          if (hash) newUrl += '#' + hash;
          if (query) newUrl += '?' + query;

          updated = true;
          console.log(`URL update in ${htmlFile}: ${originalUrl} -> ${newUrl}`);
          return `${attr}="${newUrl}"`;
        }

        return match;
      }
    );

    // Также проверяем наличие абсолютных путей, если указан базовый путь
    if (config && config.base && config.base !== '/') {
      const basePath = config.base.replace(/^\/|\/$/g, '');

      // Проверяем ссылки, которые должны начинаться с базового пути
      content = content.replace(
        /(href|src)=["']\/([^"'/][^"']+)["']/gi,
        (match, attr, path) => {
          updated = true;
          return `${attr}="/${basePath}/${path}"`;
        }
      );
    }

    if (updated) {
      fs.writeFileSync(htmlFile, content);
      console.log(`Updated references in ${htmlFile}`);
    }
  }
}

// Плагин для создания языковых версий
function createLanguageVersions(config) {
  return {
    name: 'create-language-versions',
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.error('Cannot find index.html in build output');
        return;
      }

      // Сначала переименовываем файлы в нижний регистр
      renameFilesToLowercase(distDir, config);

      const indexContent = fs.readFileSync(indexPath, 'utf-8');

      // Определяем, какие пути искать и заменять
      const absoluteBasePath = '/r36s.pro/';

      // Функция для замены путей в HTML-файле
      function processHtmlPaths(html) {
        let result = html;

        // 1. Заменяем относительные пути на абсолютные
        result = result.replace(
          /(src|href)=("|')((?!http|\/\/|\/)[^"']+)("|')/g,
          `$1=$2${absoluteBasePath}$3$4`
        );

        // 2. Заменяем пути, начинающиеся с /assets/assets/ на /assets/
        result = result.replace(/\/assets\/assets\//g, '/assets/');

        // 3. Исправляем дублированные слеши в URL
        result = result.replace(/([^:])\/\/+/g, '$1/');

        return result;
      }

      // Обрабатываем основной index.html
      let processedContent = processHtmlPaths(indexContent);

      console.log('Processing paths in HTML files...');

      // Создаем директории для каждого языка и копируем в них index.html
      for (const lang of supportedLanguages) {
        if (lang === 'en') continue; // Для английского оставляем корневой index.html

        const langDir = path.join(distDir, lang);
        fs.ensureDirSync(langDir);

        let langContent = processedContent;

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
      processedContent = processedContent.replace(
        /<html lang="[^"]*">/,
        '<html lang="en">'
      );

      // Записываем обратно основной index.html с абсолютными путями
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
    const basePath = "/r36s.pro/";
    
    // Проверяем, может ли первый сегмент пути быть языком
    const segments = path.split('/').filter(Boolean);
    const supportedLanguages = ${JSON.stringify(supportedLanguages)};
    
    if (segments.length > 0 && supportedLanguages.includes(segments[0])) {
      // Это языковой путь, но файл не найден
      window.location.href = basePath + segments[0] + '/';
    } else {
      // Неизвестный путь - редирект на главную
      window.location.href = basePath;
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

      // Проверяем, есть ли основные файлы CSS/JS
      const cssFiles = globSync(path.join(distDir, 'assets', '*.css'));
      const jsFiles = globSync(path.join(distDir, 'assets', '*.js'));

      console.log(
        `Found ${cssFiles.length} CSS files and ${jsFiles.length} JS files`
      );
      console.log('Language versions and redirects created successfully!');
    },
  };
}

export default defineConfig(({ command }) => {
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  // Определяем базовый путь
  const base = '/r36s.pro/';

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
      outDir: '../dist',
      emptyOutDir: true,
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
      // Добавляем плагин для исправления путей в HTML
      fixHtmlPathsPlugin(base),
      // Затем идет плагин для создания языковых версий
      createLanguageVersions({ base: base }),
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
