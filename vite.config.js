import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import htmlMinifier from 'vite-plugin-html-minifier'; // Добавляем импорт
import path from 'path';
import sortMediaQueries from 'postcss-sort-media-queries';
import fs from 'fs-extra'; // Будем использовать fs-extra для работы с файлами

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

      // Создаем директории для каждого языка и копируем в них index.html
      for (const lang of supportedLanguages) {
        if (lang === 'en') continue; // Для английского оставляем корневой index.html

        const langDir = path.join(distDir, lang);
        fs.ensureDirSync(langDir);

        let langContent = indexContent;
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
    const baseUrl = '${path.relative(process.cwd(), distDir)}';
    
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

      console.log('Created language versions and 404.html');
    },
  };
}

export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production';
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    // Явно указываем папку public как источник статических файлов
    publicDir: '../public',
    build: {
      sourcemap: !isProd, // Отключаем sourcemap в продакшене
      minify: isProd ? 'terser' : false, // Включаем минификацию только для продакшена
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true, // Удаление console.log в продакшене
              drop_debugger: true, // Удаление debugger statements
              pure_funcs: ['console.log', 'console.info', 'console.debug'], // Удаление указанных функций
              sequences: true,
              dead_code: true,
            },
            mangle: true, // Сокращение имен переменных
            format: {
              comments: false, // Удаление всех комментариев
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
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return isProd ? '[name]-[hash].js' : '[name].js'; // Хеширование имен файлов в продакшене
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return isProd
              ? 'assets/[name]-[hash][extname]'
              : 'assets/[name][extname]';
          },
          chunkFileNames: isProd
            ? 'chunks/[name]-[hash].js'
            : 'chunks/[name].js',
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
      cssMinify: isProd, // Минификация CSS только в продакшене
    },
    css: {
      postcss: {
        plugins: [
          sortMediaQueries({
            sort: 'mobile-first',
          }),
        ],
      },
      // Минификация CSS для продакшена
      devSourcemap: !isProd,
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      createLanguageVersions(), // Наш плагин для языковых версий
      // Добавляем плагин минификации HTML только для продакшена
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
    ].filter(Boolean), // Убираем false из массива плагинов
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
