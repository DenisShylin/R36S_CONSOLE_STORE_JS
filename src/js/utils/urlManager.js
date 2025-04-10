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
      return null;
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

    return null;
  } catch (error) {
    console.error('Error getting language from URL:', error);
    return null;
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

    try {
      // Базовый URL сайта
      const baseUrl = import.meta.env.BASE_URL || '/';

      // Если выбран английский язык, перенаправляем на корневой URL
      if (language === 'en') {
        window.location.href = baseUrl;
        return;
      }

      // Для других языков перенаправляем на языковую директорию
      window.location.href = `${baseUrl}${language}/`;
    } catch (error) {
      console.error('Error updating URL with language:', error);
    }
  } catch (error) {
    console.error('Error updating URL with language:', error);
  }
}
