/**
 * Определяет язык пользователя на основе предпочтений и доступных языков
 * @param {string[]} supportedLanguages - Массив поддерживаемых языковых кодов
 * @param {string} defaultLanguage - Язык по умолчанию
 * @returns {string} Выбранный языковой код
 */
export function detectUserLanguage(supportedLanguages, defaultLanguage) {
  try {
    // Проверка кэшированного результата
    const cachedDetection = sessionStorage.getItem('detectedBrowserLanguage');
    if (cachedDetection && supportedLanguages.includes(cachedDetection)) {
      console.log('Using cached browser language detection:', cachedDetection);
      return cachedDetection;
    }

    // Проверка входных параметров
    if (!Array.isArray(supportedLanguages) || supportedLanguages.length === 0) {
      console.warn('Invalid supportedLanguages array, using default language');
      return defaultLanguage;
    }

    if (!defaultLanguage || typeof defaultLanguage !== 'string') {
      console.warn('Invalid defaultLanguage, using first supported language');
      return supportedLanguages[0];
    }

    console.log('Detecting user language with:', {
      supportedLanguages,
      defaultLanguage,
    });

    // Функция для проверки поддержки языка
    const isLanguageSupported = language => {
      if (!language) return false;
      const languageCode = language.split('-')[0].toLowerCase();
      return supportedLanguages.includes(languageCode) ? languageCode : null;
    };

    // Проверяем сохраненный выбор пользователя в localStorage
    const savedLanguage = localStorage.getItem('userLanguage');
    console.log('Saved language in localStorage:', savedLanguage);

    // Проверка savedLanguage
    const supportedSavedLanguage =
      savedLanguage &&
      savedLanguage.trim() !== '' &&
      isLanguageSupported(savedLanguage);
    if (supportedSavedLanguage) {
      console.log('Using saved language preference:', supportedSavedLanguage);
      return supportedSavedLanguage;
    }

    // Получаем языковые предпочтения браузера
    let browserLanguages = [];

    // Проверяем navigator.languages (современные браузеры)
    if (navigator.languages && navigator.languages.length) {
      browserLanguages = [...navigator.languages];
    }
    // Проверяем navigator.language (резервный вариант)
    else if (navigator.language) {
      browserLanguages = [navigator.language];
    }
    // Проверяем устаревшие свойства для максимальной совместимости
    else if (navigator.userLanguage) {
      browserLanguages = [navigator.userLanguage];
    } else if (navigator.browserLanguage) {
      browserLanguages = [navigator.browserLanguage];
    } else if (navigator.systemLanguage) {
      browserLanguages = [navigator.systemLanguage];
    }

    console.log('Browser language preferences:', browserLanguages);

    // Ищем первый поддерживаемый язык из списка предпочтений браузера
    for (const language of browserLanguages) {
      const supportedBrowserLanguage = isLanguageSupported(language);
      if (supportedBrowserLanguage) {
        console.log(
          'Found supported browser language:',
          supportedBrowserLanguage
        );
        // Сохраняем обнаруженный язык в sessionStorage
        sessionStorage.setItem(
          'detectedBrowserLanguage',
          supportedBrowserLanguage
        );
        return supportedBrowserLanguage;
      }
    }

    // Возвращаем язык по умолчанию
    console.log('No matching language found, using default:', defaultLanguage);
    return defaultLanguage;
  } catch (error) {
    console.error('Error in detectUserLanguage:', error);
    console.error('Stack trace:', error.stack);
    return defaultLanguage;
  }
}
