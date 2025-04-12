import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import htmlMinifier from 'vite-plugin-html-minifier';
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

// Плагин для создания языковых версий
function createLanguageVersions() {
  return {
    name: 'create-language-versions',
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        console.error('Cannot find index.html in build output');
        return;
      }

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

        // 2. Заменяем пути, начинающиеся с /assets/ на /r36s.pro/assets/
        result = result.replace(
          /(src|href)=("|')(\/assets\/[^"']+)("|')/g,
          `$1=$2${absoluteBasePath}assets/$3$4`
        );

        // 3. Заменяем любые другие абсолютные пути
        result = result.replace(
          /(src|href)=("|')(\/[^"']+)("|')/g,
          (match, attr, quote, path, endQuote) => {
            // Не заменяем, если путь уже начинается с /r36s.pro/
            if (path.startsWith('/r36s.pro/')) {
              return match;
            }
            return `${attr}=${quote}${absoluteBasePath}${path.substring(
              1
            )}${endQuote}`;
          }
        );

        // 4. Исправляем дублированные слеши в URL
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
    const basePath = "${absoluteBasePath}";
    
    // Проверяем, может ли первый сегмент пути быть языком
    const pathWithoutBase = path.replace(basePath, '');
    const segments = pathWithoutBase.split('/').filter(Boolean);
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

export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production';
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  return {
    base: isProd ? '/r36s.pro/' : '/', // Базовый путь
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    publicDir: '../public',
    build: {
      sourcemap: !isProd,
      minify: isProd ? 'terser' : false,
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', 'console.info', 'console.debug'],
              sequences: true,
              dead_code: true,
            },
            mangle: true,
            format: {
              comments: false,
            },
          }
        : {},
      rollupOptions: {
        input: Object.fromEntries(
          htmlFiles.map(file => [
            file.replace(/\.html$/, ''),
            path.resolve(__dirname, 'src', file),
          ])
        ),
        output: {
          format: 'iife', // Используем формат IIFE
          inlineDynamicImports: true,
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: assetInfo => {
            // Для HTML-файлов сохраняем оригинальное имя
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            // Для всех остальных файлов используем хэш
            return 'assets/[name]-[hash][extname]';
          },
          chunkFileNames: 'assets/chunks/[name]-[hash].js',
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
      cssMinify: isProd,
    },
    css: {
      postcss: {
        plugins: [
          sortMediaQueries({
            sort: 'mobile-first',
          }),
        ],
      },
      devSourcemap: !isProd,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      createLanguageVersions(),
      isProd &&
        htmlMinifier({
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
            minifyJS: true,
          },
        }),
    ].filter(Boolean),
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
