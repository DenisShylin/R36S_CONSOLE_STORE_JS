import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';
import { resolve } from 'path';
import sortMediaQueries from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  const htmlFiles = globSync('./src/*.html').map(file =>
    path.relative('./src', file)
  );

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    // Публичная директория относительно корня проекта, не корня src
    publicDir: resolve(__dirname, './public'),

    // Включаем различные типы ресурсов
    assetsInclude: [
      '**/*.MP4',
      '**/*.mp4',
      '**/*.webm',
      '**/*.gif',
      '**/*.ico',
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.svg',
      '**/*.html', // Включаем HTML-фрагменты
    ],

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
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
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
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],

    // Добавляем разрешение для проблемных импортов
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // Добавляем алиасы для доступа к ресурсам
        '/video': resolve(__dirname, './public/video'),
        '/img': resolve(__dirname, './public/img'),
      },
    },

    // Настройка сервера разработки
    server: {
      port: 5173,
      open: true,
      host: true,
      watch: {
        usePolling: true,
      },
      // Разрешаем доступ к файлам вне корневой директории src
      fs: {
        allow: ['.', '..'],
      },
      // Опция для обработки 404 ошибок в режиме разработки
      historyApiFallback: true,
    },
  };
});
