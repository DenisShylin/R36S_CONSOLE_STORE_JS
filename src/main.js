// main.js - Точка входа в приложение
// Импорт всех стилей
import './css/styles.css';
import { initScrollToTop } from './js/scroll-to-top.js'; // Импортируем модуль кнопки скролла вверх
// Импорт i18n системы
import {
  setupI18n,
  setupLanguageSelector,
  supportedLanguages,
} from './js/i18n/i18n.js';
import { getLanguageFromURL } from './js/utils/urlManager.js';

// Импорт компонентов js
import { initHeader } from './js/header.js';
import { initMobileMenu } from './js/mobilemenu.js';
import { initHero } from './js/hero.js';
import { initAbout } from './js/about.js';
import { initFeatures } from './js/features.js';
import { initCategories } from './js/categories.js';
import { initArticles } from './js/articles.js';
import { initThemeToggle } from './js/theme-toggle.js';
import { initContact } from './js/contact.js';
import { initIcons } from './js/iconscontact.js';
import { initReviews } from './js/reviews.js';
import { initProducts } from './js/products.js';
import { initFooter } from './js/footer.js';

console.log('Main.js инициализирован');

// Хранение функций очистки для компонентов
let cleanupFunctions = [];

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

// Инициализация i18n системы перед загрузкой DOM
async function initializeI18n() {
  try {
    // Получаем язык из URL с новым методом (query-параметр)
    const urlLanguage = getLanguageFromURL(supportedLanguages);
    console.log('Language from URL:', urlLanguage);

    // Установка атрибутов lang и dir перед инициализацией i18n
    // для предотвращения мигания контента
    const savedLanguage =
      localStorage.getItem('userLanguage') || urlLanguage || 'en';
    const rtlLanguages = ['ar'];
    document.documentElement.setAttribute('lang', savedLanguage);
    document.documentElement.dir = rtlLanguages.includes(savedLanguage)
      ? 'rtl'
      : 'ltr';

    // Инициализируем i18n с тайм-аутом для защиты от зависания
    const i18nInitPromise = setupI18n({ forcedLanguage: urlLanguage });

    // Создаем таймаут для защиты от бесконечного ожидания
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('i18n initialization timed out after 5 seconds'));
      }, 5000);
    });

    // Используем Promise.race для ограничения времени ожидания
    await Promise.race([i18nInitPromise, timeoutPromise]);

    // Настраиваем селектор языка
    setupLanguageSelector();

    // Добавляем класс для указания, что i18n инициализирован
    document.documentElement.classList.add('i18n-initialized');

    return true;
  } catch (error) {
    console.error('Error initializing i18n:', error);

    // В случае ошибки все равно пытаемся установить базовый язык
    try {
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.dir = 'ltr';

      // Добавляем класс для индикации сбоя i18n
      document.documentElement.classList.add('i18n-failed');
    } catch (fallbackError) {
      console.error(
        'Failed to set fallback language attributes:',
        fallbackError
      );
    }

    return false;
  }
}

// Инициализация страницы после загрузки DOM
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM загружен');

  try {
    // Добавляем класс для индикации загрузки
    document.documentElement.classList.add('loading-i18n');

    // Сначала инициализируем i18n
    const i18nSuccess = await initializeI18n();

    // Убираем класс загрузки
    document.documentElement.classList.remove('loading-i18n');

    // Если i18n не удалось инициализировать, все равно продолжаем загрузку страницы
    if (!i18nSuccess) {
      console.warn('Continuing page initialization with failed i18n');
    }

    // Создаем массив промисов для всех инициализаций компонентов
    // чтобы обработать случай, когда один из них вызывает ошибку
    const componentInitPromises = [];

    // Добавляем инициализацию header
    componentInitPromises.push(
      (async () => {
        try {
          const headerCleanup = initHeader();
          if (typeof headerCleanup === 'function') {
            cleanupFunctions.push(headerCleanup);
          }
          return true;
        } catch (error) {
          console.error('Failed to initialize header:', error);
          return false;
        }
      })()
    );

    // Аналогично для мобильного меню
    componentInitPromises.push(
      (async () => {
        try {
          const mobileMenuCleanup = initMobileMenu();
          if (typeof mobileMenuCleanup === 'function') {
            cleanupFunctions.push(mobileMenuCleanup);
          }
          return true;
        } catch (error) {
          console.error('Failed to initialize mobile menu:', error);
          return false;
        }
      })()
    );

    // Инициализация иконок
    componentInitPromises.push(
      (async () => {
        try {
          initIcons();
          return true;
        } catch (error) {
          console.error('Failed to initialize icons:', error);
          return false;
        }
      })()
    );

    // Проверка совместимости браузера
    componentInitPromises.push(
      (async () => {
        try {
          const compatibility = checkBrowserCompatibility();
          return true;
        } catch (error) {
          console.error('Failed to check browser compatibility:', error);
          return false;
        }
      })()
    );

    // Добавляем все остальные компоненты в массив промисов
    const components = [
      { name: 'hero', init: initHero },
      { name: 'about', init: initAbout },
      { name: 'features', init: initFeatures },
      { name: 'categories', init: initCategories },
      { name: 'articles', init: initArticles },
      { name: 'themeToggle', init: initThemeToggle },
      { name: 'contact', init: initContact },
      { name: 'reviews', init: initReviews },
      { name: 'products', init: initProducts },
      { name: 'footer', init: initFooter },
      { name: 'scrollToTop', init: initScrollToTop },
    ];

    // Инициализируем все компоненты с обработкой ошибок
    components.forEach(component => {
      componentInitPromises.push(
        (async () => {
          try {
            const cleanup = component.init();
            if (typeof cleanup === 'function') {
              cleanupFunctions.push(cleanup);
            }
            return true;
          } catch (error) {
            console.error(`Failed to initialize ${component.name}:`, error);
            return false;
          }
        })()
      );
    });

    // Ждем завершения всех инициализаций
    const results = await Promise.allSettled(componentInitPromises);

    // Проверяем результаты инициализации
    const totalComponents = results.length;
    const successfulComponents = results.filter(
      result => result.status === 'fulfilled' && result.value === true
    ).length;

    console.log(
      `Инициализация завершена: ${successfulComponents}/${totalComponents} компонентов успешно загружены`
    );

    // Добавим информацию о загрузке страницы в консоль для отладки
    const loadTime = performance.now();
    console.log(`Страница загружена за ${loadTime.toFixed(2)}ms`);

    // Удаляем класс загрузки с документа
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');

    // Регистрируем обработчик для очистки при закрытии/перезагрузке
    window.addEventListener('beforeunload', globalCleanup);
  } catch (error) {
    console.error('Критическая ошибка при инициализации страницы:', error);

    // Удаляем класс загрузки даже при ошибке
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('error');

    // Показываем сообщение об ошибке для пользователя только в режиме разработки
    if (import.meta.env.DEV) {
      const errorElement = document.createElement('div');
      errorElement.className = 'critical-error';
      errorElement.innerHTML = `
        <div class="critical-error__content">
          <h2>Ошибка инициализации</h2>
          <p>Произошла ошибка при загрузке страницы. Пожалуйста, обновите страницу или свяжитесь с администратором.</p>
          <button onclick="window.location.reload()">Обновить страницу</button>
        </div>
      `;
      document.body.appendChild(errorElement);
    }
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
