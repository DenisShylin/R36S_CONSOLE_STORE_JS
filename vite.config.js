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

// Плагин для создания robots.txt если его нет
function createRobotsPlugin() {
  return {
    name: 'create-robots-plugin',
    closeBundle: async () => {
      const distDir = path.resolve(process.cwd(), 'dist');
      const robotsPath = path.join(distDir, 'robots.txt');

      // Если robots.txt не существует после сборки, создадим его
      if (!fs.existsSync(robotsPath)) {
        console.log('Creating default robots.txt file...');
        const robotsContent = `User-agent: *
Allow: /
Sitemap: https://r36s.pro/sitemap.xml

# Allow all bots to access all content
User-agent: *
Disallow: 

# Specify language-specific patterns
User-agent: *
Allow: /en/
Allow: /ru/
Allow: /ar/
Allow: /be/
Allow: /de/
Allow: /es/
Allow: /fr/
Allow: /it/
Allow: /ja/
Allow: /ko/
Allow: /nl/
Allow: /pt/
Allow: /tr/
Allow: /uk/
`;
        fs.writeFileSync(robotsPath, robotsContent);
        console.log('Default robots.txt created');
      }

      // Проверяем, существует ли sitemap.xml
      const sitemapPath = path.join(distDir, 'sitemap.xml');
      if (!fs.existsSync(sitemapPath)) {
        console.log('Creating default sitemap.xml file...');
        const today = new Date().toISOString().split('T')[0]; // Форматируем дату как YYYY-MM-DD

        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Главная страница (английская версия - основная) -->
  <url>
    <loc>https://r36s.pro/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
`;

        // Добавляем альтернативные языковые версии
        for (const lang of supportedLanguages) {
          sitemapContent += `    <xhtml:link rel="alternate" hreflang="${lang}" href="https://r36s.pro/${
            lang === 'en' ? '' : lang + '/'
          }"/>\n`;
        }

        sitemapContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="https://r36s.pro/"/>\n  </url>\n`;

        // Добавляем URL для каждого языка
        for (const lang of supportedLanguages) {
          if (lang === 'en') continue; // Английский уже добавлен выше

          sitemapContent += `\n  <!-- ${lang} версия -->\n  <url>\n    <loc>https://r36s.pro/${lang}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n`;

          // Добавляем альтернативные языковые версии для каждого URL
          for (const altLang of supportedLanguages) {
            sitemapContent += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="https://r36s.pro/${
              altLang === 'en' ? '' : altLang + '/'
            }"/>\n`;
          }

          sitemapContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="https://r36s.pro/"/>\n  </url>\n`;
        }

        sitemapContent += `</urlset>`;

        fs.writeFileSync(sitemapPath, sitemapContent);
        console.log('Default sitemap.xml created');
      }
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

      // Обновляем мета-теги для канонических ссылок
      let processedContent = indexContent;

      // Добавляем канонический URL, если его нет
      if (!processedContent.includes('<link rel="canonical"')) {
        processedContent = processedContent.replace(
          '</head>',
          `  <link rel="canonical" href="https://r36s.pro/" />\n</head>`
        );
      }

      // Добавляем языковые альтернативы, если их нет
      let alternateLinks = '';
      if (!processedContent.includes('<link rel="alternate" hreflang=')) {
        for (const lang of supportedLanguages) {
          const href = lang === 'en' ? '/' : `/${lang}/`;
          alternateLinks += `  <link rel="alternate" hreflang="${lang}" href="https://r36s.pro${href}" />\n`;
        }
        alternateLinks += `  <link rel="alternate" hreflang="x-default" href="https://r36s.pro/" />\n`;

        processedContent = processedContent.replace(
          '</head>',
          `${alternateLinks}</head>`
        );
      }

      // Записываем обновленный index.html
      fs.writeFileSync(indexPath, processedContent);

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

        // Обновляем канонический URL для языковой версии
        langContent = langContent.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="https://r36s.pro/${lang}/" />`
        );

        // Добавляем мета-тег с языком и скрипт для переключения на этот язык
        langContent = langContent.replace(
          '</head>',
          `  <meta name="language" content="${lang}">
  <script>
    window.initialLanguage = "${lang}";
  </script>
  </head>`
        );

        fs.writeFileSync(path.join(langDir, 'index.html'), langContent);
        console.log(`Created language version for: ${lang}`);
      }

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

  // Копируем robots.txt и sitemap.xml при сборке
  if (command === 'build') {
    // Проверяем наличие robots.txt и sitemap.xml в корне
    const robotsPath = path.resolve(__dirname, 'public', 'robots.txt');
    const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');

    if (!fs.existsSync(robotsPath)) {
      console.warn(
        'Warning: robots.txt not found in public directory! A default one will be created after build.'
      );
    }

    if (!fs.existsSync(sitemapPath)) {
      console.warn(
        'Warning: sitemap.xml not found in public directory! A default one will be created after build.'
      );
    }
  }

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
      // Плагин для создания robots.txt и sitemap.xml если их нет
      createRobotsPlugin(),
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
