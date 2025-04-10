/**
 * Получает код языка из URL (из query-параметра lang)
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

    // Получаем текущий URL
    const url = new URL(window.location.href);

    // Получаем параметр lang из URL
    const langParam = url.searchParams.get('lang');
    console.log('Language param from URL:', langParam);

    // Проверяем, является ли параметр поддерживаемым языковым кодом
    if (langParam && supportedLanguages.includes(langParam.toLowerCase())) {
      console.log(`Found language in URL query params: ${langParam}`);
      return langParam.toLowerCase();
    }

    return null;
  } catch (error) {
    console.error('Error getting language from URL:', error);
    return null;
  }
}

/**
 * Обновляет URL с учетом текущего языка (добавляет query-параметр lang)
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
      // Получаем текущий URL
      const url = new URL(window.location.href);

      // Если выбран английский язык (по умолчанию), удаляем параметр lang
      if (language === 'en') {
        url.searchParams.delete('lang');
      } else {
        // Иначе устанавливаем параметр lang
        url.searchParams.set('lang', language);
      }

      // Обновляем URL без перезагрузки страницы
      window.history.pushState({}, '', url.toString());
      console.log('URL updated successfully');
    } catch (error) {
      console.error('Error updating URL with language:', error);
    }
  } catch (error) {
    console.error('Error updating URL with language:', error);
  }
}
