import i18next from 'i18next';
import { detectUserLanguage } from './languageDetector';
import { updateLanguageURL } from '../utils/urlManager';
import { clearPriceCache } from '../utils/priceFormatter';

// Кэш для переводов
const translationsCache = {};

// Список всех поддерживаемых языков
export const supportedLanguages = [
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

// Маппинг языковых кодов к их названиям
export const languageNames = {
  en: 'English',
  ru: 'Русский',
  ar: 'العربية',
  be: 'Беларуская',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  pt: 'Português',
  tr: 'Türkçe',
  uk: 'Українська',
};

// Список секций с переводами
const translationSections = [
  // 'common',
  'about',
  // 'articles',
  // 'categories',
  // 'contact',
  'features',
  // 'footer',
  'header',
  'hero',
  'mobilemenu',
  // 'button',
  // 'modal',
  // 'products',
  // 'reviews',
];

// Создаем CustomEvent для обновления языка
const LANGUAGE_CHANGE_EVENT = 'languageChanged';

// Получение пути к файлам переводов
const getTranslationPath = (language, section) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}locales/${language}/${section}.json`;
};

// Загрузка переводов для конкретной секции с улучшенной обработкой ошибок
const loadSectionTranslation = async (language, section) => {
  // Создаем уникальный ключ для кэша
  const cacheKey = `${language}_${section}`;

  // Проверяем кэш перед загрузкой
  if (translationsCache[cacheKey]) {
    return translationsCache[cacheKey];
  }

  // Добавляем счетчик попыток для предотвращения бесконечных рекурсий
  let attemptCount = 0;
  const maxAttempts = 2; // Максимальное количество попыток

  const attemptLoad = async (lang, sect, attempts) => {
    if (attempts >= maxAttempts) {
      console.error(
        `Превышено максимальное количество попыток загрузки ${lang}/${sect}`
      );
      return {};
    }

    try {
      const path = getTranslationPath(lang, sect);
      console.log(`Загрузка перевода: ${path}`);

      // Добавляем таймаут для предотвращения зависания запроса
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 секунд таймаут

      const response = await fetch(path, {
        // Добавляем кеш-контроль для обхода кеширования
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
        signal: controller.signal,
      });

      // Очищаем таймаут
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(
          `Не удалось загрузить перевод ${lang}/${sect}: ${response.status}`
        );

        // Если основной язык не загрузился, пробуем запасной вариант
        if (lang !== 'en') {
          console.log(`Пробуем загрузить запасной перевод (en) для ${sect}`);
          return attemptLoad('en', sect, attempts + 1);
        }

        // Возвращаем пустой объект для обработки ошибки
        return {};
      }

      const data = await response.json();

      // Проверяем валидность данных JSON
      if (!data || typeof data !== 'object') {
        throw new Error(`Invalid translation data format for ${lang}/${sect}`);
      }

      // Сохраняем в кэш
      translationsCache[cacheKey] = data;
      return data;
    } catch (error) {
      // Проверяем, является ли ошибка таймаутом
      if (error.name === 'AbortError') {
        console.error(`Таймаут загрузки ${lang}/${sect} переводов`);
      } else {
        console.error(`Ошибка загрузки ${lang}/${sect} переводов:`, error);
      }

      // Если основной язык не загрузился, пробуем запасной вариант
      if (lang !== 'en') {
        console.log(
          `Пробуем загрузить запасной перевод (en) для ${sect} после ошибки`
        );
        return attemptLoad('en', sect, attempts + 1);
      }

      return {};
    }
  };

  // Начинаем попытки загрузки
  return attemptLoad(language, section, 0);
};

// Загрузка всех переводов для языка
const loadAllTranslations = async language => {
  try {
    // Счетчик успешных загрузок для логирования
    let successCount = 0;
    let failCount = 0;

    // Используем Promise.allSettled для надежной загрузки всех секций
    const results = await Promise.allSettled(
      translationSections.map(section =>
        loadSectionTranslation(language, section)
      )
    );

    // Объединяем все полученные переводы в один объект
    const translations = {};

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const sectionData = result.value;
        const sectionName = translationSections[index];

        // Проверяем, что получили валидные данные (не пустой объект)
        if (sectionData && Object.keys(sectionData).length > 0) {
          // Добавляем как вложенный объект
          translations[sectionName] = sectionData;
          successCount++;
        } else {
          console.warn(
            `Получен пустой или недействительный перевод для секции: ${sectionName}`
          );
          failCount++;
        }
      } else {
        console.warn(
          `Не удалось загрузить секцию: ${translationSections[index]}, ошибка:`,
          result.reason
        );
        failCount++;
      }
    });

    console.log(
      `Загрузка переводов для ${language}: успешно ${successCount}, не удалось ${failCount}`
    );

    return translations;
  } catch (error) {
    console.error(`Ошибка загрузки переводов для ${language}:`, error);
    return {};
  }
};

// Функции обновления контента
const updateTextElements = () => {
  try {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Обновление ${elements.length} текстовых элементов`);

    // Если не нашли элементов с data-i18n, просто выходим
    if (elements.length === 0) {
      console.log('Не найдено элементов с атрибутом data-i18n');
      return;
    }

    elements.forEach(element => {
      try {
        const key = element.getAttribute('data-i18n');
        if (!key) return;

        if (key.startsWith('[')) {
          const matches = key.match(/^\[(.*)\](.*)$/);
          if (matches) {
            const [, attr, translationKey] = matches;
            const translation = i18next.t(translationKey);
            // Проверяем наличие перевода и используем атрибут только если перевод найден
            if (translation && translation !== translationKey) {
              element.setAttribute(attr, translation);
            }
          }
        } else {
          const translation = i18next.t(key);
          // Проверяем, что перевод не равен ключу (если ключ не найден, i18next вернет ключ)
          if (translation && translation !== key) {
            if (element.hasAttribute('content')) {
              element.setAttribute('content', translation);
            } else {
              // Сохраняем оригинальный текст для английского языка
              if (!element.dataset.originalText && i18next.language !== 'en') {
                element.dataset.originalText = element.textContent;
              }
              element.textContent = translation;
            }
          } else if (
            element.dataset.originalText &&
            i18next.language === 'en'
          ) {
            // Восстанавливаем оригинальный текст для английского языка
            element.textContent = element.dataset.originalText;
          }
        }
      } catch (elementError) {
        console.warn('Ошибка при обновлении элемента:', elementError, element);
        // Продолжаем обновление других элементов
      }
    });
  } catch (error) {
    console.error('Ошибка обновления текстовых элементов:', error);
  }
};

const updateRTLSupport = () => {
  try {
    const rtlLanguages = ['ar'];
    const direction = rtlLanguages.includes(i18next.language) ? 'rtl' : 'ltr';

    // Устанавливаем направление текста на уровне документа
    document.documentElement.dir = direction;
    document.documentElement.setAttribute('lang', i18next.language);

    // Добавляем/удаляем класс RTL для корневого элемента
    if (direction === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

    // Обновляем кастомные классы на основных контейнерах, если они существуют
    const mainContainers = [
      '.header',
      '.footer',
      '.mobile-menu',
      '.hero',
      '.features',
      '.about',
      '.contact',
      'main',
    ];

    mainContainers.forEach(selector => {
      const container = document.querySelector(selector);
      if (container) {
        if (direction === 'rtl') {
          container.classList.add('rtl');
        } else {
          container.classList.remove('rtl');
        }
      }
    });
  } catch (error) {
    console.error('Ошибка обновления поддержки RTL:', error);
  }
};

// Основная функция обновления контента
const updateAllContent = async () => {
  try {
    // Создаем массив промисов для параллельного выполнения
    const updatePromises = [];

    // Добавляем задачи обновления в очередь
    updatePromises.push(
      (async () => {
        try {
          updateTextElements();
        } catch (e) {
          console.error('Failed to update text elements:', e);
        }
      })()
    );

    updatePromises.push(
      (async () => {
        try {
          updateRTLSupport();
        } catch (e) {
          console.error('Failed to update RTL support:', e);
        }
      })()
    );

    // Ожидаем завершения всех задач
    await Promise.allSettled(updatePromises);

    // Вызываем пользовательское событие для компонентов
    try {
      window.dispatchEvent(
        new CustomEvent('languageChanged', {
          detail: { language: i18next.language },
        })
      );
    } catch (eventError) {
      console.error('Error dispatching languageChanged event:', eventError);
    }

    console.log('Content update completed for language:', i18next.language);
  } catch (error) {
    console.error('Error in updateAllContent:', error);
    throw error; // Передаем ошибку выше для обработки
  }
};

export async function setupI18n(options = {}) {
  try {
    console.log('Setting up i18n with options:', options);
    console.log(
      'Current localStorage userLanguage:',
      localStorage.getItem('userLanguage')
    );
    console.log('Current BASE_URL:', import.meta.env.BASE_URL);

    // Принимаем forcedLanguage из options
    const { forcedLanguage } = options;

    // Определяем сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('userLanguage');
    const savedValid =
      savedLanguage && supportedLanguages.includes(savedLanguage);

    // Определяем язык пользователя
    const userLanguage =
      forcedLanguage ||
      (savedValid ? savedLanguage : null) ||
      detectUserLanguage(supportedLanguages, 'en');

    console.log('Selected user language:', userLanguage);

    // Загружаем переводы с обработкой ошибок
    let translations = {};
    try {
      translations = await loadAllTranslations(userLanguage);
      console.log(`Загруженные переводы для ${userLanguage}:`, translations);
    } catch (loadError) {
      console.error(
        `Ошибка загрузки переводов для ${userLanguage}:`,
        loadError
      );
      // Продолжаем работу с пустыми переводами
    }

    // Загружаем запасные переводы с обработкой ошибок
    let fallbackTranslations = null;
    if (userLanguage !== 'en') {
      try {
        fallbackTranslations = await loadAllTranslations('en');
      } catch (fallbackError) {
        console.error('Ошибка загрузки запасных переводов:', fallbackError);
        // Продолжаем работу без запасных переводов
      }
    }

    const resources = {
      [userLanguage]: { translation: translations },
    };

    if (fallbackTranslations) {
      resources.en = { translation: fallbackTranslations };
    }

    // Инициализируем i18next с расширенным обнаружением ошибок и улучшенным fallback
    await i18next.init({
      lng: userLanguage,
      fallbackLng: 'en',
      resources,
      interpolation: { escapeValue: false },
      debug: import.meta.env.DEV, // Включаем дебаг только в режиме разработки
      load: 'languageOnly',
      returnNull: false, // Не возвращать null, если перевод не найден
      returnEmptyString: false, // Не возвращать пустую строку, если перевод не найден
      saveMissing: false, // Не сохранять отсутствующие ключи (на продакшене должно быть false)
      keySeparator: '.', // Использовать точку как разделитель вложенности в ключах
      nsSeparator: ':', // Использовать двоеточие как разделитель пространств имен
      missingKeyHandler: (lng, ns, key, fallbackValue) => {
        console.warn(
          `Отсутствует ключ перевода: ${key} для языка ${lng} в пространстве ${ns}. Используется HTML-текст.`
        );
      },
      parseMissingKeyHandler: key => {
        // Возвращаем null вместо ключа, чтобы сохранить HTML-текст
        return null;
      },
    });

    // Сохраняем выбранный язык
    localStorage.setItem('userLanguage', userLanguage);

    // Создаем функцию обработки изменения языка, которая защищена от неожиданных ошибок
    const safeLanguageChangeHandler = async language => {
      try {
        console.log('Language changed to:', language);
        localStorage.setItem('userLanguage', language);
        updateLanguageURL(language);
        if (typeof clearPriceCache === 'function') {
          clearPriceCache();
        }
        await updateAllContent();
      } catch (error) {
        console.error('Error in language change handler:', error);
        // Пытаемся выполнить хотя бы базовое обновление контента
        try {
          updateTextElements();
          updateRTLSupport();
        } catch (innerError) {
          console.error('Failed to update basic content:', innerError);
        }
      }
    };

    // Привязываем обновление контента к смене языка с защитой от ошибок
    i18next.on('languageChanged', safeLanguageChangeHandler);

    // Экспортируем функцию обновления в window с обработкой ошибок
    window.updateContent = async () => {
      try {
        await updateAllContent();
      } catch (error) {
        console.error('Error in window.updateContent:', error);
        // Попытка восстановления
        try {
          updateTextElements();
          updateRTLSupport();
        } catch (innerError) {
          console.error('Failed to recover content update:', innerError);
        }
      }
    };

    // Вызываем обновление контента сразу после инициализации
    try {
      await updateAllContent();
    } catch (contentError) {
      console.error('Error in initial content update:', contentError);
      // Базовое обновление контента
      try {
        updateTextElements();
        updateRTLSupport();
      } catch (basicError) {
        console.error('Failed to perform basic content update:', basicError);
      }
    }

    return i18next;
  } catch (error) {
    console.error('Fatal error in setupI18n:', error);
    // Создаем мини-версию i18next для защиты от сбоев
    try {
      // Если i18next не инициализирован, создадим базовую функциональность
      if (!i18next.isInitialized) {
        await i18next.init({
          lng: 'en',
          resources: {},
          interpolation: { escapeValue: false },
        });
      }
    } catch (fallbackError) {
      console.error(
        'Failed to create fallback i18next instance:',
        fallbackError
      );
    }
    return i18next;
  }
}

export function setupLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (!selector) return;

  try {
    // Создаем опции для селектора языков
    if (selector.childElementCount === 0) {
      const fragment = document.createDocumentFragment();

      supportedLanguages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = languageNames[lang] || lang;
        fragment.appendChild(option);
      });

      selector.appendChild(fragment);
    }

    // Устанавливаем текущий язык
    selector.value = i18next.language;

    // Обработчик изменения языка
    // Добавляем AbortController для возможности отмены запроса
    let currentAbortController = null;

    selector.addEventListener('change', async function (event) {
      event.preventDefault(); // Предотвращаем действие по умолчанию

      try {
        // Отменяем предыдущую операцию, если она еще не завершена
        if (currentAbortController) {
          currentAbortController.abort();
        }

        // Создаем новый AbortController
        currentAbortController = new AbortController();
        const signal = currentAbortController.signal;

        const newLanguage = event.target.value;
        console.log(`Language selector changed to: ${newLanguage}`);

        // Проверка, что селектор все еще в DOM
        if (!document.contains(selector)) {
          console.log('Language selector no longer in DOM, aborting');
          return;
        }

        // Загружаем переводы если их еще нет
        if (!i18next.hasResourceBundle(newLanguage, 'translation')) {
          try {
            // Оборачиваем асинхронную операцию в try-catch
            const translations = await loadAllTranslations(newLanguage);

            // Проверяем signal на случай отмены и селектор на наличие в DOM
            if (signal.aborted || !document.contains(selector)) {
              console.log(
                'Operation aborted or language selector no longer in DOM after loading translations'
              );
              return;
            }

            i18next.addResourceBundle(
              newLanguage,
              'translation',
              translations,
              true,
              true
            );
          } catch (loadError) {
            console.error('Error loading translations:', loadError);
            // Продолжаем выполнение, чтобы хотя бы обновить языковые настройки
          }
        }

        // Сохраняем выбор в localStorage
        localStorage.setItem('userLanguage', newLanguage);

        // Меняем язык
        await i18next.changeLanguage(newLanguage);

        // Проверяем, что элемент все еще в DOM перед обновлением URL
        if (document.contains(selector) && !signal.aborted) {
          // Обновляем URL с языковым префиксом
          updateLanguageURL(newLanguage);

          // Дополнительно обновляем контент
          if (typeof window.updateContent === 'function') {
            window.updateContent();
          }
        }
      } catch (error) {
        console.error('Error changing language:', error);
        // В случае ошибки возвращаем старый язык, если селектор еще существует
        if (document.contains(selector)) {
          selector.value = i18next.language;
        }
      } finally {
        // Сбрасываем AbortController
        currentAbortController = null;
      }
    });
  } catch (error) {
    console.error('Error setting up language selector:', error);
  }
}
