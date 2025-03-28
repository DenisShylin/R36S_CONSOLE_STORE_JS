// /**
//  * Получает код языка из URL
//  * @param {string[]} supportedLanguages - Список поддерживаемых языков
//  * @returns {string|null} - Код языка или null, если не найден
//  */
// export function getLanguageFromURL(supportedLanguages) {
//   try {
//     // Проверяем входные параметры
//     if (!Array.isArray(supportedLanguages) || supportedLanguages.length === 0) {
//       console.warn(
//         'Invalid supportedLanguages array passed to getLanguageFromURL'
//       );
//       return null;
//     }

//     // Получаем текущий путь
//     const path = window.location.pathname;

//     // Получаем базовый URL
//     const baseUrl = import.meta.env.BASE_URL || '/';
//     console.log('Current path for language detection:', path);
//     console.log('Base URL for language detection:', baseUrl);

//     // Обработка пустого пути
//     if (!path || path === '/') {
//       console.log('Empty path, no language prefix');
//       return null;
//     }

//     // Удаляем базовый URL из пути, если он присутствует
//     let pathWithoutBase = path;
//     if (baseUrl !== '/' && path.startsWith(baseUrl)) {
//       pathWithoutBase = path.substring(baseUrl.length) || '/';
//     }
//     console.log('Path without base for language detection:', pathWithoutBase);

//     // Разбиваем путь на части
//     const pathParts = pathWithoutBase
//       .split('/')
//       .filter(part => part.trim() !== '');
//     console.log('Path parts for language detection:', pathParts);

//     // Проверяем, является ли первая часть пути языковым кодом
//     if (pathParts.length > 0) {
//       const possibleLang = pathParts[0].toLowerCase();
//       if (supportedLanguages.includes(possibleLang)) {
//         console.log(`Found language in URL: ${possibleLang}`);
//         return possibleLang;
//       }
//     }

//     return null;
//   } catch (error) {
//     console.error('Error getting language from URL:', error);
//     return null;
//   }
// }

// /**
//  * Обновляет URL с учетом текущего языка
//  * @param {string} language - Код языка
//  */
// export function updateLanguageURL(language) {
//   try {
//     if (!language) {
//       console.warn('No language provided to updateLanguageURL');
//       return;
//     }

//     // Проверка на некорректные значения language
//     if (typeof language !== 'string' || language.trim() === '') {
//       console.warn('Invalid language value provided to updateLanguageURL');
//       return;
//     }

//     // Добавлено сравнение с текущим языком в URL
//     const currentUrlLanguage = getLanguageFromURL([
//       'en',
//       'ru',
//       'ar',
//       'be',
//       'de',
//       'es',
//       'fr',
//       'it',
//       'ja',
//       'ko',
//       'nl',
//       'pt',
//       'tr',
//       'uk',
//     ]);

//     // Если текущий язык в URL совпадает с запрашиваемым, ничего не делаем
//     if (currentUrlLanguage === language) {
//       console.log(
//         'URL already has the correct language prefix, no update needed'
//       );
//       return;
//     }

//     console.log(
//       'Current localStorage userLanguage before URL update:',
//       localStorage.getItem('userLanguage')
//     );

//     console.log(
//       'Before language URL update, current URL:',
//       window.location.href
//     );
//     console.log('Updating URL for language:', language);

//     try {
//       // Если выбран английский язык, перенаправляем на корневой URL
//       if (language === 'en') {
//         const baseUrl = import.meta.env.BASE_URL || '/';
//         console.log(`Updating URL to base URL for English: ${baseUrl}`);
//         window.history.pushState({}, '', baseUrl);
//         return;
//       }

//       // Получаем текущий URL
//       const currentUrl = new URL(window.location.href);
//       const path = currentUrl.pathname;

//       // Не меняем URL для favicon и других ресурсов
//       if (path.includes('.') && !path.endsWith('index.html')) {
//         console.log('Skipping URL update for resource file');
//         return;
//       }

//       // Базовый URL сайта
//       const baseUrl = import.meta.env.BASE_URL || '/';

//       // Обеспечиваем, что baseUrl всегда имеет правильный формат
//       const normBaseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

//       // Создаем новый URL с языковым префиксом
//       let newPath = `${normBaseUrl}${language}/`;

//       console.log('New path with language:', newPath);

//       // Проверяем, отличается ли новый путь от текущего
//       if (newPath === path) {
//         console.log('No URL change needed, paths are identical');
//         return;
//       }

//       // Обновляем URL без перезагрузки страницы
//       window.history.pushState({}, '', newPath);
//       console.log('URL updated successfully');
//     } catch (error) {
//       console.error('Error updating URL with language:', error);
//     }
//   } catch (error) {
//     console.error('Error updating URL with language:', error);
//   }
// }
