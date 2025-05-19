export function detectUserLanguage(supportedLanguages, defaultLanguage) {
  try {
    const cachedDetection = sessionStorage.getItem('detectedBrowserLanguage');
    if (cachedDetection && supportedLanguages.includes(cachedDetection)) {
      console.log('Using cached browser language detection:', cachedDetection);
      return cachedDetection;
    }

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

    const isLanguageSupported = language => {
      if (!language) return false;
      const languageCode = language.split('-')[0].toLowerCase();
      return supportedLanguages.includes(languageCode) ? languageCode : null;
    };

    const savedLanguage = localStorage.getItem('userLanguage');
    console.log('Saved language in localStorage:', savedLanguage);

    const supportedSavedLanguage =
      savedLanguage &&
      savedLanguage.trim() !== '' &&
      isLanguageSupported(savedLanguage);
    if (supportedSavedLanguage) {
      console.log('Using saved language preference:', supportedSavedLanguage);
      return supportedSavedLanguage;
    }

    let browserLanguages = [];

    if (navigator.languages && navigator.languages.length) {
      browserLanguages = [...navigator.languages];
    } else if (navigator.language) {
      browserLanguages = [navigator.language];
    } else if (navigator.userLanguage) {
      browserLanguages = [navigator.userLanguage];
    } else if (navigator.browserLanguage) {
      browserLanguages = [navigator.browserLanguage];
    } else if (navigator.systemLanguage) {
      browserLanguages = [navigator.systemLanguage];
    }

    console.log('Browser language preferences:', browserLanguages);

    for (const language of browserLanguages) {
      const supportedBrowserLanguage = isLanguageSupported(language);
      if (supportedBrowserLanguage) {
        console.log(
          'Found supported browser language:',
          supportedBrowserLanguage
        );
        sessionStorage.setItem(
          'detectedBrowserLanguage',
          supportedBrowserLanguage
        );
        return supportedBrowserLanguage;
      }
    }

    console.log('No matching language found, using default:', defaultLanguage);
    return defaultLanguage;
  } catch (error) {
    console.error('Error in detectUserLanguage:', error);
    console.error('Stack trace:', error.stack);
    return defaultLanguage;
  }
}

export function getLanguageFromURL(supportedLanguages) {
  try {
    if (!Array.isArray(supportedLanguages) || supportedLanguages.length === 0) {
      console.warn(
        'Invalid supportedLanguages array passed to getLanguageFromURL'
      );
      return null;
    }

    const path = window.location.pathname;
    console.log('Current path for language detection:', path);

    const baseUrl = import.meta.env.BASE_URL || '/';
    console.log('Base URL for language detection:', baseUrl);

    if (!path || path === '/') {
      console.log('Empty path, no language prefix');

      const savedLanguage = localStorage.getItem('userLanguage');
      const isExplicitEnglishChoice =
        localStorage.getItem('explicitEnglishChoice') === 'true';

      if (!isExplicitEnglishChoice) {
        if (
          savedLanguage &&
          savedLanguage !== 'en' &&
          supportedLanguages.includes(savedLanguage)
        ) {
          console.log(`Redirecting to saved language URL: ${savedLanguage}`);
          if (
            typeof window !== 'undefined' &&
            window.location &&
            !window.isRedirecting
          ) {
            window.isRedirecting = true;
            window.location.href = `${baseUrl}${savedLanguage}/`;
            return savedLanguage;
          }
        } else {
          const browserLang = detectBrowserLanguage(supportedLanguages);
          if (browserLang && browserLang !== 'en') {
            console.log(
              `Redirecting to browser preferred language URL: ${browserLang}`
            );
            if (
              typeof window !== 'undefined' &&
              window.location &&
              !window.isRedirecting
            ) {
              window.isRedirecting = true;
              localStorage.setItem('userLanguage', browserLang);
              window.location.href = `${baseUrl}${browserLang}/`;
              return browserLang;
            }
          }
        }
      } else {
        console.log(
          'User explicitly chose English, skipping browser language redirect'
        );
      }

      return 'en';
    }

    let pathWithoutBase = path;
    if (baseUrl !== '/' && path.startsWith(baseUrl)) {
      pathWithoutBase = path.substring(baseUrl.length) || '/';
    }
    console.log('Path without base for language detection:', pathWithoutBase);

    const pathParts = pathWithoutBase
      .split('/')
      .filter(part => part.trim() !== '');
    console.log('Path parts for language detection:', pathParts);

    if (pathParts.length > 0) {
      const possibleLang = pathParts[0].toLowerCase();

      if (possibleLang === 'en') {
        console.log('Обнаружен /en/ в URL, перенаправляем на корневой URL');
        if (
          typeof window !== 'undefined' &&
          window.location &&
          !window.isRedirecting
        ) {
          window.isRedirecting = true;
          localStorage.setItem('explicitEnglishChoice', 'true');
          window.location.href = '/';
          return 'en';
        }
      }

      if (supportedLanguages.includes(possibleLang)) {
        console.log(`Found language in URL: ${possibleLang}`);
        return possibleLang;
      }
    }

    console.log('No language found in URL, defaulting to "en"');
    return 'en';
  } catch (error) {
    console.error('Error getting language from URL:', error);
    return 'en';
  }
}

export function updateLanguageURL(language) {
  try {
    if (language === 'en') {
      console.log(
        'updateLanguageURL: Обнаружен английский язык, перенаправляем на корневой URL'
      );
      if (window.isRedirecting) {
        console.log(
          'Redirect already in progress, aborting additional redirect'
        );
        return;
      }

      window.isRedirecting = true;
      localStorage.setItem('explicitEnglishChoice', 'true');
      localStorage.setItem('userLanguage', 'en');
      window.location.href = '/';

      setTimeout(() => {
        window.isRedirecting = false;
      }, 100);

      return;
    }

    if (!language) {
      console.warn('No language provided to updateLanguageURL');
      return;
    }

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

    localStorage.setItem('userLanguage', language);
    if (language !== 'en') {
      localStorage.setItem('explicitEnglishChoice', 'false');
    }

    try {
      if (window.isRedirecting) {
        console.log(
          'Redirect already in progress, aborting additional redirect'
        );
        return;
      }

      window.isRedirecting = true;

      const baseUrl = import.meta.env.BASE_URL || '/';

      const currentUrlLanguage = getLanguageFromURL(
        JSON.parse(localStorage.getItem('supportedLanguages') || '["en"]')
      );

      if (currentUrlLanguage === language) {
        console.log(
          'URL already matches selected language, no redirect needed'
        );
        window.isRedirecting = false;
        return;
      }

      console.log(
        `Non-English language (${language}) selected, redirecting to language directory`
      );
      window.location.href = `${baseUrl}${language}/`;

      setTimeout(() => {
        window.isRedirecting = false;
      }, 100);
    } catch (error) {
      window.isRedirecting = false;
      console.error('Error updating URL with language:', error);
    }
  } catch (error) {
    console.error('Error updating URL with language:', error);
  }
}

function detectBrowserLanguage(supportedLanguages) {
  if (localStorage.getItem('explicitEnglishChoice') === 'true') {
    console.log(
      'User has explicitly chosen English, skipping browser language detection'
    );
    return 'en';
  }

  let browserLanguages = [];

  if (navigator.languages && navigator.languages.length) {
    browserLanguages = [...navigator.languages];
  } else if (navigator.language) {
    browserLanguages = [navigator.language];
  } else if (navigator.userLanguage) {
    browserLanguages = [navigator.userLanguage];
  } else if (navigator.browserLanguage) {
    browserLanguages = [navigator.browserLanguage];
  } else if (navigator.systemLanguage) {
    browserLanguages = [navigator.systemLanguage];
  }

  console.log('Browser language preferences:', browserLanguages);

  const isLanguageSupported = language => {
    if (!language) return false;
    const languageCode = language.split('-')[0].toLowerCase();
    return supportedLanguages.includes(languageCode) ? languageCode : null;
  };

  for (const language of browserLanguages) {
    const supportedBrowserLanguage = isLanguageSupported(language);
    if (supportedBrowserLanguage) {
      return supportedBrowserLanguage;
    }
  }

  return null;
}

export function createCanonicalURL(language) {
  const domain = 'https://r36s.pro';

  if (!language || language === 'en') {
    return `${domain}/`;
  }

  return `${domain}/${language}/`;
}

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

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    window.isRedirecting = false;
  });
}
