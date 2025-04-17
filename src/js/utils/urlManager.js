/**
 * Получает код языка из URL (из пути)
 * @param {string[]} supportedLanguages - Список поддерживаемых языков
 * @returns {string|null} - Код языка или null, если не найден
 */
export function getLanguageFromURL(supportedLanguages) {
  try {
    // Проверяем входные параметры
    if (!Array.isArray(supportedLanguages) || supportedLanguages.length === 0) {
      console.warn(
        'Invalid supportedLanguages array passed to getLanguageFromURL'
      );
      return null;
    }

    // Получаем текущий путь
    const path = window.location.pathname;
    console.log('Current path for language detection:', path);

    // Получаем базовый URL
    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log('Base URL for language detection:', baseUrl);

    // Обработка пустого пути
    if (!path || path === '/') {
      console.log('Empty path, no language prefix');

      // НОВЫЙ КОД: Проверка сохраненного языка и редирект если нужно
      // Этот код выполняется только если мы находимся на корневом URL без языкового префикса
      const savedLanguage = localStorage.getItem('userLanguage');

      // Если есть сохраненный язык и он не английский, перенаправляем на языковую версию
      if (
        savedLanguage &&
        savedLanguage !== 'en' &&
        supportedLanguages.includes(savedLanguage)
      ) {
        console.log(`Redirecting to saved language URL: ${savedLanguage}`);
        // Проверяем, что мы не в процессе сборки/рендеринга
        if (
          typeof window !== 'undefined' &&
          window.location &&
          !window.isRedirecting
        ) {
          window.isRedirecting = true; // Предотвращаем зацикливание
          window.location.href = `${baseUrl}${savedLanguage}/`;
          return savedLanguage;
        }
      } else {
        // Проверяем предпочтительный язык браузера, если нет сохраненного
        const browserLang = detectBrowserLanguage(supportedLanguages);
        if (browserLang && browserLang !== 'en') {
          console.log(
            `Redirecting to browser preferred language URL: ${browserLang}`
          );
          // Проверяем, что мы не в процессе сборки/рендеринга
          if (
            typeof window !== 'undefined' &&
            window.location &&
            !window.isRedirecting
          ) {
            window.isRedirecting = true; // Предотвращаем зацикливание
            localStorage.setItem('userLanguage', browserLang); // Сохраняем выбор
            window.location.href = `${baseUrl}${browserLang}/`;
            return browserLang;
          }
        }
      }

      // Если нет редиректа или мы не можем его выполнить, возвращаем 'en'
      return 'en';
    }

    // Удаляем базовый URL из пути, если он присутствует
    let pathWithoutBase = path;
    if (baseUrl !== '/' && path.startsWith(baseUrl)) {
      pathWithoutBase = path.substring(baseUrl.length) || '/';
    }
    console.log('Path without base for language detection:', pathWithoutBase);

    // Разбиваем путь на части
    const pathParts = pathWithoutBase
      .split('/')
      .filter(part => part.trim() !== '');
    console.log('Path parts for language detection:', pathParts);

    // Проверяем, является ли первая часть пути языковым кодом
    if (pathParts.length > 0) {
      const possibleLang = pathParts[0].toLowerCase();
      if (supportedLanguages.includes(possibleLang)) {
        console.log(`Found language in URL: ${possibleLang}`);
        return possibleLang;
      }
    }

    // НОВЫЙ КОД: Если в URL нет языкового кода, перенаправляем на английскую версию
    console.log('No language found in URL, defaulting to "en"');
    return 'en';
  } catch (error) {
    console.error('Error getting language from URL:', error);
    return 'en'; // В случае ошибки используем английский язык
  }
}

/**
 * Обновляет URL с учетом текущего языка
 * @param {string} language - Код языка
 */
export function updateLanguageURL(language) {
  try {
    if (!language) {
      console.warn('No language provided to updateLanguageURL');
      return;
    }

    // Проверка на некорректные значения language
    if (typeof language !== 'string' || language.trim() === '') {
      console.warn('Invalid language value provided to updateLanguageURL');
      return;
    }

    console.log(
      'Current localStorage userLanguage before URL update:',
      localStorage.getItem('userLanguage')
    );

    console.log(
      'Before language URL update, current URL:',
      window.location.href
    );
    console.log('Updating URL for language:', language);

    // Сохраняем выбранный язык перед редиректом
    localStorage.setItem('userLanguage', language);

    try {
      // Предотвращаем зацикливание редиректов
      if (window.isRedirecting) {
        console.log(
          'Redirect already in progress, aborting additional redirect'
        );
        return;
      }

      window.isRedirecting = true;

      // Базовый URL сайта
      const baseUrl = import.meta.env.BASE_URL || '/';

      // Получаем текущий язык из URL
      const currentUrlLanguage = getLanguageFromURL(
        JSON.parse(localStorage.getItem('supportedLanguages') || '["en"]')
      );

      // Если текущий язык URL совпадает с выбранным, ничего не делаем
      if (currentUrlLanguage === language) {
        console.log(
          'URL already matches selected language, no redirect needed'
        );
        window.isRedirecting = false;
        return;
      }

      // Если выбран английский язык, перенаправляем на корневой URL
      if (language === 'en') {
        window.location.href = baseUrl;
        return;
      }

      // Для других языков перенаправляем на языковую директорию
      window.location.href = `${baseUrl}${language}/`;
    } catch (error) {
      window.isRedirecting = false;
      console.error('Error updating URL with language:', error);
    }
  } catch (error) {
    console.error('Error updating URL with language:', error);
  }
}

/**
 * Вспомогательная функция для определения языка браузера
 * @param {string[]} supportedLanguages - Список поддерживаемых языков
 * @returns {string|null} - Предпочтительный язык браузера или null
 */
function detectBrowserLanguage(supportedLanguages) {
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

  // Функция для проверки поддержки языка
  const isLanguageSupported = language => {
    if (!language) return false;
    const languageCode = language.split('-')[0].toLowerCase();
    return supportedLanguages.includes(languageCode) ? languageCode : null;
  };

  // Ищем первый поддерживаемый язык из списка предпочтений браузера
  for (const language of browserLanguages) {
    const supportedBrowserLanguage = isLanguageSupported(language);
    if (supportedBrowserLanguage) {
      return supportedBrowserLanguage;
    }
  }

  return null;
}

/**
 * Создает canonical URL для текущей языковой версии
 * @param {string} language - Текущий язык
 * @returns {string} - Канонический URL
 */
export function createCanonicalURL(language) {
  const domain = 'https://r36s.pro';

  if (!language || language === 'en') {
    return `${domain}/`;
  }

  return `${domain}/${language}/`;
}

// Сохраняем список поддерживаемых языков для использования в других функциях
export function storeLanguageList(supportedLanguages) {
  if (Array.isArray(supportedLanguages) && supportedLanguages.length > 0) {
    localStorage.setItem(
      'supportedLanguages',
      JSON.stringify(supportedLanguages)
    );
    return true;
  }
  return false;
}
