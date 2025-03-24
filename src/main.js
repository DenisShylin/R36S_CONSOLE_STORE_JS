// main.js - Точка входа в приложение
// Импорт всех стилей
import './css/styles.css';

// Импорт компонентов js
import { initHeader } from './js/header.js';
import { initMobileMenu } from './js/mobilemenu.js';
import { initHero } from './js/hero.js';
import { initAbout } from './js/about.js';
import { initFeatures } from './js/features.js';

console.log('Main.js инициализирован');

// Хранение функций очистки для компонентов
let cleanupFunctions = [];

// Добавить инициализацию в событие DOMContentLoaded
const headerCleanup = initHeader();
if (typeof headerCleanup === 'function') {
  cleanupFunctions.push(headerCleanup);
}

const mobileMenuCleanup = initMobileMenu();
if (typeof mobileMenuCleanup === 'function') {
  cleanupFunctions.push(mobileMenuCleanup);
}

// Вспомогательная функция для определения поддержки браузером
function checkBrowserCompatibility() {
  // Проверка поддержки IntersectionObserver (для анимаций при скролле)
  const hasIntersectionObserver = 'IntersectionObserver' in window;
  // Проверка поддержки Flexbox
  const hasFlexbox = (function () {
    const el = document.createElement('div');
    el.style.display = 'flex';
    return el.style.display === 'flex';
  })();
  // Проверка поддержки CSS Grid
  const hasGrid = (function () {
    const el = document.createElement('div');
    el.style.display = 'grid';
    return el.style.display === 'grid';
  })();
  // Логирование результатов проверок
  console.log('Поддержка браузера:');
  console.log('- IntersectionObserver:', hasIntersectionObserver);
  console.log('- Flexbox:', hasFlexbox);
  console.log('- CSS Grid:', hasGrid);
  // Добавление классов к body для условного стилизования
  if (!hasIntersectionObserver)
    document.body.classList.add('no-intersection-observer');
  if (!hasFlexbox) document.body.classList.add('no-flexbox');
  if (!hasGrid) document.body.classList.add('no-grid');
  return {
    hasIntersectionObserver,
    hasFlexbox,
    hasGrid,
  };
}

// Глобальная функция очистки
function globalCleanup() {
  try {
    // Вызываем все функции очистки
    cleanupFunctions.forEach(cleanupFn => {
      if (typeof cleanupFn === 'function') {
        cleanupFn();
      }
    });
    // Очищаем массив
    cleanupFunctions = [];
  } catch (error) {
    console.warn('Error during global cleanup:', error);
  }
}

// Инициализация страницы после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM загружен');

  try {
    // Проверка совместимости браузера
    const compatibility = checkBrowserCompatibility();

    // Инициализация компонентов и сохранение функций очистки
    const heroCleanup = initHero();
    if (typeof heroCleanup === 'function') {
      cleanupFunctions.push(heroCleanup);
    }

    // Инициализация секции About
    const aboutCleanup = initAbout();
    if (typeof aboutCleanup === 'function') {
      cleanupFunctions.push(aboutCleanup);
    }

    // Инициализация секции Features
    const featuresCleanup = initFeatures();
    if (typeof featuresCleanup === 'function') {
      cleanupFunctions.push(featuresCleanup);
    }

    // Добавим информацию о загрузке страницы в консоль для отладки
    const loadTime = performance.now();
    console.log(`Страница загружена за ${loadTime.toFixed(2)}ms`);

    // Регистрируем обработчик для очистки при закрытии/перезагрузке
    window.addEventListener('beforeunload', globalCleanup);
  } catch (error) {
    console.error('Ошибка при инициализации страницы:', error);
  }
});

// Обработка ошибок на уровне window
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Глобальная ошибка:', {
    message,
    source,
    lineno,
    colno,
    error,
  });
  return false; // Пусть браузер также показывает ошибки в консоли
};

// Обработка непойманных промисов
window.addEventListener('unhandledrejection', function (event) {
  console.warn(
    'Непойманное отклонение промиса (unhandled promise rejection):',
    event.reason
  );
});

// Экспорт версии приложения для отладки
window.appVersion = {
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  environment: import.meta.env.MODE,
  basePath: import.meta.env.DEV ? '/' : '/R36S_CONSOLE_STORE_JS/',
};

// Регистрация обработчика cleanup при выгрузке модуля (для hot-reload)
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    globalCleanup();
  });
}

console.log('Main.js выполнение завершено');
