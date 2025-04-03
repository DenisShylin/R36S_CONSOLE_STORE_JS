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
  // 'about',
  // 'articles',
  // 'categories',
  // 'contact',
  // 'features',
  // 'footer',
  // 'header',
  'hero',
  // 'mobilemenu',
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

// Загрузка переводов для конкретной секции
const loadSectionTranslation = async (language, section) => {
  // Создаем уникальный ключ для кэша
  const cacheKey = `${language}_${section}`;

  // Проверяем кэш перед загрузкой
  if (translationsCache[cacheKey]) {
    return translationsCache[cacheKey];
  }

  try {
    const path = getTranslationPath(language, section);
    console.log(`Загрузка перевода: ${path}`);

    const response = await fetch(path, {
      // Добавляем кеш-контроль для обхода кеширования
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      console.warn(
        `Не удалось загрузить перевод ${language}/${section}: ${response.status}`
      );

      // Если основной язык не загрузился, пробуем запасной вариант
      if (language !== 'en') {
        console.log(`Пробуем загрузить запасной перевод (en) для ${section}`);
        return loadSectionTranslation('en', section);
      }

      // Возвращаем пустой объект для обработки ошибки
      return {};
    }

    const data = await response.json();

    // Сохраняем в кэш
    translationsCache[cacheKey] = data;
    return data;
  } catch (error) {
    console.error(`Ошибка загрузки ${language}/${section} переводов:`, error);

    // Если основной язык не загрузился, пробуем запасной вариант
    if (language !== 'en') {
      console.log(
        `Пробуем загрузить запасной перевод (en) для ${section} после ошибки`
      );
      return loadSectionTranslation('en', section);
    }

    return {};
  }
};

// Загрузка всех переводов для языка
const loadAllTranslations = async language => {
  try {
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

        // Добавляем как вложенный объект
        translations[sectionName] = sectionData;
      } else {
        console.warn(
          `Не удалось загрузить секцию: ${translationSections[index]}`
        );
      }
    });

    return translations;
  } catch (error) {
    console.error(`Ошибка загрузки переводов для ${language}:`, error);
    return {};
  }
};

// Функции обновления контента
const updateTextElements = () => {
  try {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;

      if (key.startsWith('[')) {
        const matches = key.match(/^\[(.*)\](.*)$/);
        if (matches) {
          const [, attr, translationKey] = matches;
          const translation = i18next.t(translationKey);
          if (translation) {
            element.setAttribute(attr, translation);
          }
        }
      } else {
        const translation = i18next.t(key);
        if (translation) {
          if (element.hasAttribute('content')) {
            element.setAttribute('content', translation);
          } else {
            element.textContent = translation;
          }
        }
      }
    });
  } catch (error) {
    console.error('Ошибка обновления текстовых элементов:', error);
  }
};

const updateRTLSupport = () => {
  try {
    const rtlLanguages = ['ar'];
    document.documentElement.dir = rtlLanguages.includes(i18next.language)
      ? 'rtl'
      : 'ltr';
    document.documentElement.setAttribute('lang', i18next.language);
  } catch (error) {
    console.error('Ошибка обновления поддержки RTL:', error);
  }
};

// Основная функция обновления контента
const updateAllContent = async () => {
  try {
    // Вызываем отдельные функции обновления
    updateTextElements();
    updateRTLSupport();

    // Вызываем пользовательское событие для компонентов
    window.dispatchEvent(
      new CustomEvent(LANGUAGE_CHANGE_EVENT, {
        detail: { language: i18next.language },
      })
    );
  } catch (error) {
    console.error('Ошибка в updateAllContent:', error);
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

    // Загружаем переводы
    const translations = await loadAllTranslations(userLanguage);
    console.log(`Загруженные переводы для ${userLanguage}:`, translations);

    const fallbackTranslations =
      userLanguage !== 'en' ? await loadAllTranslations('en') : null;

    const resources = {
      [userLanguage]: { translation: translations },
    };

    if (fallbackTranslations) {
      resources.en = { translation: fallbackTranslations };
    }

    // Инициализируем i18next с расширенным обнаружением ошибок
    await i18next.init({
      lng: userLanguage,
      fallbackLng: 'en',
      resources,
      interpolation: { escapeValue: false },
      debug: true, // Включаем дебаг для отслеживания проблем
      load: 'languageOnly',
      returnNull: false,
      returnEmptyString: false,
      missingKeyHandler: (lng, ns, key) => {
        console.warn(
          `Отсутствует ключ перевода: ${key} для языка ${lng} в пространстве ${ns}`
        );
      },
    });

    // Сохраняем выбранный язык
    localStorage.setItem('userLanguage', userLanguage);

    // Привязываем обновление контента к смене языка
    i18next.on('languageChanged', language => {
      console.log('Language changed to:', language);
      localStorage.setItem('userLanguage', language);
      updateLanguageURL(language);
      if (typeof clearPriceCache === 'function') {
        clearPriceCache();
      }
      updateAllContent();
    });

    // Экспортируем функцию обновления в window
    window.updateContent = updateAllContent;

    // Вызываем обновление контента сразу после инициализации
    await updateAllContent();

    return i18next;
  } catch (error) {
    console.error('Error in setupI18n:', error);
    throw error;
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
    selector.addEventListener('change', async event => {
      try {
        const newLanguage = event.target.value;
        console.log(`Language selector changed to: ${newLanguage}`);

        // Проверка, что селектор все еще в DOM
        if (!document.contains(selector)) {
          console.log('Language selector no longer in DOM, aborting');
          return;
        }

        // Загружаем переводы если их еще нет
        if (!i18next.hasResourceBundle(newLanguage, 'translation')) {
          const translations = await loadAllTranslations(newLanguage);

          // Повторная проверка после асинхронной операции
          if (!document.contains(selector)) {
            console.log(
              'Language selector no longer in DOM after loading translations, aborting'
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
        }

        // Сохраняем выбор в localStorage
        localStorage.setItem('userLanguage', newLanguage);

        // Меняем язык
        await i18next.changeLanguage(newLanguage);

        // Обновляем URL с языковым префиксом
        updateLanguageURL(newLanguage);

        // Дополнительно обновляем контент
        if (typeof window.updateContent === 'function') {
          window.updateContent();
        }
      } catch (error) {
        console.error('Error changing language:', error);
        // В случае ошибки возвращаем старый язык
        selector.value = i18next.language;
      }
    });
  } catch (error) {
    console.error('Error setting up language selector:', error);
  }
}
