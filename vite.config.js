import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';
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
      },
    },
    // Настройка сервера разработки
    server: {
      watch: {
        usePolling: true,
      },
      // Автоматически открываем браузер при запуске
      open: true,
      // Опция для обработки 404 ошибок в режиме разработки
      historyApiFallback: true,
    },
  };
});
