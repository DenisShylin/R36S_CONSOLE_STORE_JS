import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';
import sortMediaQueries from 'postcss-sort-media-queries';
import fs from 'fs-extra';
import * as cheerio from 'cheerio'; // Убедитесь, что пакет cheerio установлен

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

      // Функция для загрузки JSON-файлов с переводами
      async function loadTranslations(language) {
        const translationsPath = path.resolve(
          process.cwd(),
          'public',
          'locales',
          language
        );
        const result = {};

        try {
          // Проверяем существование директории переводов
          if (!fs.existsSync(translationsPath)) {
            console.warn(
              `Translations directory for language "${language}" not found at: ${translationsPath}`
            );
            return result;
          }

          // Получаем список JSON-файлов в директории
          const files = fs
            .readdirSync(translationsPath)
            .filter(file => file.endsWith('.json'));

          // Загружаем каждый файл и объединяем переводы
          for (const file of files) {
            const filePath = path.join(translationsPath, file);
            const section = path.basename(file, '.json');
            const content = await fs.readJSON(filePath);
            result[section] = content;
          }

          console.log(
            `Loaded translations for "${language}": ${
              Object.keys(result).length
            } sections`
          );
        } catch (error) {
          console.error(`Error loading translations for "${language}":`, error);
        }

        return result;
      }

      // Функция для получения значения по вложенному ключу
      function getNestedValue(obj, key) {
        if (!key || !obj) return null;

        const parts = key.split('.');
        let value = obj;

        for (const part of parts) {
          if (
            value === null ||
            value === undefined ||
            typeof value !== 'object'
          ) {
            return null;
          }
          value = value[part];
        }

        return value;
      }

      // Функция для обновления HTML-контента с переводами
      function updateHtmlContent(html, translations, langCode) {
        try {
          const $ = cheerio.load(html);

          // Обрабатываем элементы с атрибутом data-translate
          $('[data-translate]').each((i, el) => {
            const $el = $(el);
            const key = $el.attr('data-translate');

            // Проверяем, является ли значение атрибута ссылкой на другой атрибут
            if (key.startsWith('[')) {
              const matches = key.match(/^\[(.*)\](.*)$/);
              if (matches) {
                const [, attr, translationKey] = matches;
                const value = getNestedValue(translations, translationKey);

                if (value && typeof value === 'string') {
                  $el.attr(attr, value);
                }
              }
            } else {
              // Обычный текстовый перевод
              const value = getNestedValue(translations, key);

              if (value && typeof value === 'string') {
                $el.text(value);
              }
            }
          });

          // Обрабатываем элементы с атрибутом data-i18n (для совместимости с вашей системой)
          $('[data-i18n]').each((i, el) => {
            const $el = $(el);
            const attrValue = $el.attr('data-i18n');

            // Проверяем, является ли значение атрибута ссылкой на другой атрибут
            if (attrValue.startsWith('[')) {
              const matches = attrValue.match(/^\[(.*)\](.*)$/);
              if (matches) {
                const [, attr, translationKey] = matches;
                const value = getNestedValue(translations, translationKey);

                if (value && typeof value === 'string') {
                  $el.attr(attr, value);
                }
              }
            } else {
              // Обычный текстовый перевод
              const value = getNestedValue(translations, attrValue);

              if (value && typeof value === 'string') {
                $el.text(value);
              }
            }
          });

          // Обновляем title если есть соответствующий перевод
          if (translations.meta && translations.meta.title) {
            $('title').text(translations.meta.title);
          }

          // Обновляем meta description если есть соответствующий перевод
          if (translations.meta && translations.meta.description) {
            $('meta[name="description"]').attr(
              'content',
              translations.meta.description
            );
          }

          // Добавляем meta для языка
          if (!$('meta[name="language"]').length) {
            $('head').append(`<meta name="language" content="${langCode}">`);
          } else {
            $('meta[name="language"]').attr('content', langCode);
          }

          // Обработка JSON-LD в script тегах
          $('script[type="application/ld+json"][data-translate]').each(
            (i, el) => {
              const $el = $(el);
              const key = $el.attr('data-translate');
              const translationData = getNestedValue(translations, key);

              if (translationData && typeof translationData === 'object') {
                try {
                  // Парсим текущий JSON
                  const jsonData = JSON.parse($el.html());

                  // Рекурсивная функция для обновления значений
                  function updateJsonValues(original, translations) {
                    if (
                      !original ||
                      !translations ||
                      typeof original !== 'object' ||
                      typeof translations !== 'object'
                    ) {
                      return original;
                    }

                    // Создаем копию оригинала
                    const result = Array.isArray(original)
                      ? [...original]
                      : { ...original };

                    // Обновляем значения
                    for (const key in translations) {
                      if (key in result) {
                        if (
                          typeof translations[key] === 'object' &&
                          translations[key] !== null
                        ) {
                          result[key] = updateJsonValues(
                            result[key],
                            translations[key]
                          );
                        } else {
                          result[key] = translations[key];
                        }
                      }
                    }

                    return result;
                  }

                  // Обновляем JSON с переводами
                  const updatedJson = updateJsonValues(
                    jsonData,
                    translationData
                  );

                  // Обновляем содержимое скрипта
                  $el.html(JSON.stringify(updatedJson, null, 2));
                } catch (error) {
                  console.error(
                    `Error updating JSON-LD with key ${key}:`,
                    error
                  );
                }
              }
            }
          );

          return $.html();
        } catch (error) {
          console.error(
            'Error updating HTML content with translations:',
            error
          );
          return html; // Возвращаем оригинальный HTML в случае ошибки
        }
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

      // Загружаем оригинальный index.html
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

      // Загружаем переводы для английского языка (основной)
      const enTranslations = await loadTranslations('en');

      // Обновляем английскую версию с переводами (если они есть)
      if (Object.keys(enTranslations).length > 0) {
        const updatedEnContent = updateHtmlContent(
          processedContent,
          enTranslations,
          'en'
        );
        fs.writeFileSync(indexPath, updatedEnContent);
        console.log('Updated main index.html with English translations');
      } else {
        // Если переводы не найдены, оставляем оригинальную версию
        fs.writeFileSync(indexPath, processedContent);
        console.log(
          'Keeping original index.html (English translations not found)'
        );
      }

      // Создаем директории для каждого языка и копируем в них index.html с переводами
      for (const langCode of supportedLanguages) {
        if (langCode === 'en') continue; // Для английского оставляем корневой index.html

        const langDir = path.join(distDir, langCode);
        fs.ensureDirSync(langDir);

        // Загружаем переводы для текущего языка
        const translations = await loadTranslations(langCode);

        // Если переводы не загружены, используем английские или оставляем оригинальное содержимое
        const translationsToUse =
          Object.keys(translations).length > 0
            ? translations
            : Object.keys(enTranslations).length > 0
            ? enTranslations
            : {};

        // Начинаем с базового контента
        let langContent = processedContent;

        // Обновляем HTML-контент с переводами, если они есть
        if (Object.keys(translationsToUse).length > 0) {
          langContent = updateHtmlContent(
            processedContent,
            translationsToUse,
            langCode
          );
        }

        // Исправляем атрибут lang в HTML
        langContent = langContent.replace(
          /<html lang="[^"]*">/,
          `<html lang="${langCode}">`
        );

        // Обновляем канонический URL для языковой версии
        langContent = langContent.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="https://r36s.pro/${langCode}/" />`
        );

        // Добавляем мета-тег с языком и скрипт для переключения на этот язык
        langContent = langContent.replace(
          '</head>',
          `  <meta name="language" content="${langCode}">
  <script>
    window.initialLanguage = "${langCode}";
  </script>
  </head>`
        );

        fs.writeFileSync(path.join(langDir, 'index.html'), langContent);
        console.log(`Created language version for: ${langCode}`);
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

    // Проверяем наличие директории с переводами
    const localesPath = path.resolve(__dirname, 'public', 'locales');
    if (!fs.existsSync(localesPath)) {
      console.warn(
        'Warning: locales directory not found in public directory! Static translations will not work properly.'
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
      // Плагин для постобработки и создания языковых версий с переводами
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
