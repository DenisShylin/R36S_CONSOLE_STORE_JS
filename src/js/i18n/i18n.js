import i18next from 'i18next';
import { detectUserLanguage } from './languageDetector';
import { updateLanguageURL, createCanonicalURL } from '../utils/urlManager';

const translationsCache = {};

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

const translationSections = [
  'about',
  'articles',
  'categories',
  'contact',
  'features',
  'footer',
  'header',
  'hero',
  'mobilemenu',
  'products',
  'reviews',
  'meta',
];

const LANGUAGE_CHANGE_EVENT = 'languageChanged';

const getTranslationPath = (language, section) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}locales/${language}/${section}.json`;
};

const loadSectionTranslation = async (language, section) => {
  const cacheKey = `${language}_${section}`;

  if (translationsCache[cacheKey]) {
    return translationsCache[cacheKey];
  }

  let attemptCount = 0;
  const maxAttempts = 2;

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

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(path, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(
          `Не удалось загрузить перевод ${lang}/${sect}: ${response.status}`
        );

        if (lang !== 'en') {
          console.log(`Пробуем загрузить запасной перевод (en) для ${sect}`);
          return attemptLoad('en', sect, attempts + 1);
        }

        return {};
      }

      const data = await response.json();

      if (!data || typeof data !== 'object') {
        throw new Error(`Invalid translation data format for ${lang}/${sect}`);
      }

      translationsCache[cacheKey] = data;
      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error(`Таймаут загрузки ${lang}/${sect} переводов`);
      } else {
        console.error(`Ошибка загрузки ${lang}/${sect} переводов:`, error);
      }

      if (lang !== 'en') {
        console.log(
          `Пробуем загрузить запасной перевод (en) для ${sect} после ошибки`
        );
        return attemptLoad('en', sect, attempts + 1);
      }

      return {};
    }
  };

  return attemptLoad(language, section, 0);
};

const loadAllTranslations = async language => {
  try {
    let successCount = 0;
    let failCount = 0;

    const results = await Promise.allSettled(
      translationSections.map(section =>
        loadSectionTranslation(language, section)
      )
    );

    const translations = {};

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const sectionData = result.value;
        const sectionName = translationSections[index];

        if (sectionData && Object.keys(sectionData).length > 0) {
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

const updateTextElements = () => {
  try {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`Обновление ${elements.length} текстовых элементов`);

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
            if (translation && translation !== translationKey) {
              element.setAttribute(attr, translation);
            }
          }
        } else {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            if (element.hasAttribute('content')) {
              element.setAttribute('content', translation);
            } else {
              if (!element.dataset.originalText && i18next.language !== 'en') {
                element.dataset.originalText = element.textContent;
              }
              element.textContent = translation;
            }
          } else if (
            element.dataset.originalText &&
            i18next.language === 'en'
          ) {
            element.textContent = element.dataset.originalText;
          }
        }
      } catch (elementError) {
        console.warn('Ошибка при обновлении элемента:', elementError, element);
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

    document.documentElement.dir = direction;
    document.documentElement.setAttribute('lang', i18next.language);

    if (direction === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

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

const updateMetadata = language => {
  try {
    const titleElement = document.querySelector('title');
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const languageMeta = document.querySelector('meta[name="language"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!titleElement || !descriptionMeta) {
      console.warn('Метатеги title или description не найдены');
      return;
    }

    // Сначала пробуем получить перевод через i18next
    const translatedTitle = i18next.t('meta.title');
    const translatedDescription = i18next.t('meta.description');

    // Если перевод существует, используем его
    if (translatedTitle && translatedTitle !== 'meta.title') {
      titleElement.innerHTML = translatedTitle;
    } else {
      // Если нет перевода, используем запасные варианты
      switch (language) {
        case 'ru':
          titleElement.innerHTML =
            'R36S Портативная Игровая Консоль 🎮️ Ретро Гейминг';
          break;
        case 'ar':
          titleElement.innerHTML = 'R36S جهاز ألعاب محمول 🎮️ ألعاب ريترو';
          break;
        case 'be':
          titleElement.innerHTML =
            'R36S Партатыўная Гульнявая Кансоль 🎮️ Рэтра Гейминг';
          break;
        case 'de':
          titleElement.innerHTML =
            'R36S Handheld-Spielekonsole 🎮️ Retro-Gaming';
          break;
        case 'es':
          titleElement.innerHTML =
            'R36S Consola de Juegos Portátil 🎮️ Retro Gaming';
          break;
        case 'fr':
          titleElement.innerHTML =
            'R36S Console de Jeu Portable 🎮️ Retro Gaming';
          break;
        case 'it':
          titleElement.innerHTML =
            'R36S Console di Gioco Portatile 🎮️ Retro Gaming';
          break;
        case 'ja':
          titleElement.innerHTML = 'R36S ハンドヘルドゲーム機 🎮️ レトロゲーム';
          break;
        case 'ko':
          titleElement.innerHTML = 'R36S 휴대용 게임 콘솔 🎮️ 레트로 게임';
          break;
        case 'nl':
          titleElement.innerHTML =
            'R36S Draagbare Spelcomputer 🎮️ Retro Gaming';
          break;
        case 'pt':
          titleElement.innerHTML =
            'R36S Console de Jogos Portátil 🎮️ Retro Gaming';
          break;
        case 'tr':
          titleElement.innerHTML =
            'R36S Taşınabilir Oyun Konsolu 🎮️ Retro Oyun';
          break;
        case 'uk':
          titleElement.innerHTML =
            'R36S Портативна Ігрова Консоль 🎮️ Ретро Геймінг';
          break;
        default:
          titleElement.innerHTML =
            'R36S Handheld Game Console 🎮️ Retro Gaming';
          break;
      }
    }

    // Аналогично для description
    if (translatedDescription && translatedDescription !== 'meta.description') {
      descriptionMeta.setAttribute('content', translatedDescription);
    } else {
      switch (language) {
        case 'ru':
          descriptionMeta.setAttribute(
            'content',
            'R36S Премиальная Портативная Ретро Игровая Консоль • Портативный игровой опыт • Расширенная производительность ArkOS'
          );
          break;
        case 'ar':
          descriptionMeta.setAttribute(
            'content',
            'R36S حلول ألعاب ريترو محمولة متميزة • تجربة وحدة تحكم محمولة • أداء ArkOS متقدم • إعادة تصور الألعاب الكلاسيكية'
          );
          break;
        case 'be':
          descriptionMeta.setAttribute(
            'content',
            'R36S Прэміум Партатыўныя Рэтра Гульнявыя Рашэнні • Партатыўны гульнявы досвед • Пашыраная прадукцыйнасць ArkOS'
          );
          break;
        case 'de':
          descriptionMeta.setAttribute(
            'content',
            'R36S Premium Handheld Retro-Gaming-Lösungen • Portable Konsolenerfahrung • Erweiterte ArkOS-Leistung • Neu interpretierte Klassiker'
          );
          break;
        case 'es':
          descriptionMeta.setAttribute(
            'content',
            'R36S Soluciones Premium de Juegos Retro Portátiles • Experiencia de Consola Portátil • Rendimiento Avanzado de ArkOS'
          );
          break;
        case 'fr':
          descriptionMeta.setAttribute(
            'content',
            'R36S Solutions Premium de Retro Gaming Portable • Expérience de Console Portable • Performance ArkOS Avancée'
          );
          break;
        case 'it':
          descriptionMeta.setAttribute(
            'content',
            'R36S Soluzioni Premium per Retro Gaming Portatile • Esperienza di Console Portatile • Prestazioni ArkOS Avanzate'
          );
          break;
        case 'ja':
          descriptionMeta.setAttribute(
            'content',
            'R36S プレミアムハンドヘルドレトロゲームソリューション • ポータブルコンソール体験 • 高度なArkOSパフォーマンス'
          );
          break;
        case 'ko':
          descriptionMeta.setAttribute(
            'content',
            'R36S 프리미엄 휴대용 레트로 게임 솔루션 • 휴대용 콘솔 경험 • 고급 ArkOS 성능 • 클래식 게임의 재해석'
          );
          break;
        case 'nl':
          descriptionMeta.setAttribute(
            'content',
            'R36S Premium Draagbare Retro Gaming Oplossingen • Draagbare Console-ervaring • Geavanceerde ArkOS Prestaties'
          );
          break;
        case 'pt':
          descriptionMeta.setAttribute(
            'content',
            'R36S Soluções Premium de Jogos Retro Portáteis • Experiência de Console Portátil • Desempenho Avançado ArkOS'
          );
          break;
        case 'tr':
          descriptionMeta.setAttribute(
            'content',
            'R36S Premium Taşınabilir Retro Oyun Çözümleri • Taşınabilir Konsol Deneyimi • Gelişmiş ArkOS Performansı'
          );
          break;
        case 'uk':
          descriptionMeta.setAttribute(
            'content',
            'R36S Преміум Портативні Ретро Ігрові Рішення • Портативний ігровий досвід • Розширена продуктивність ArkOS'
          );
          break;
        default:
          descriptionMeta.setAttribute(
            'content',
            'R36S Premium Handheld Pro Retro Gaming Solutions • Portable Console Experience • Advanced ArkOS Performance • Classic Games Reimagined'
          );
          break;
      }
    }

    // Устанавливаем язык метатега
    if (languageMeta) {
      languageMeta.setAttribute('content', language);
    }

    // Обновляем канонический URL
    if (canonicalLink) {
      canonicalLink.setAttribute('href', createCanonicalURL(language));
    }

    console.log('Метаданные обновлены для языка:', language);
  } catch (error) {
    console.error('Ошибка обновления метаданных:', error);
  }
};

const updateAllContent = async () => {
  try {
    const updatePromises = [];

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

    updatePromises.push(
      (async () => {
        try {
          updateMetadata(i18next.language);
        } catch (e) {
          console.error('Failed to update metadata:', e);
        }
      })()
    );

    await Promise.allSettled(updatePromises);

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
    throw error;
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

    const { forcedLanguage } = options;

    const savedLanguage = localStorage.getItem('userLanguage');
    const savedValid =
      savedLanguage && supportedLanguages.includes(savedLanguage);

    const userLanguage =
      forcedLanguage ||
      (savedValid ? savedLanguage : null) ||
      detectUserLanguage(supportedLanguages, 'en');

    console.log('Selected user language:', userLanguage);

    let translations = {};
    try {
      translations = await loadAllTranslations(userLanguage);
      console.log(`Загруженные переводы для ${userLanguage}:`, translations);
    } catch (loadError) {
      console.error(
        `Ошибка загрузки переводов для ${userLanguage}:`,
        loadError
      );
    }

    let fallbackTranslations = null;
    if (userLanguage !== 'en') {
      try {
        fallbackTranslations = await loadAllTranslations('en');
      } catch (fallbackError) {
        console.error('Ошибка загрузки запасных переводов:', fallbackError);
      }
    }

    const resources = {
      [userLanguage]: { translation: translations },
    };

    if (fallbackTranslations) {
      resources.en = { translation: fallbackTranslations };
    }

    await i18next.init({
      lng: userLanguage,
      fallbackLng: 'en',
      resources,
      interpolation: { escapeValue: false },
      debug: import.meta.env.DEV,
      load: 'languageOnly',
      returnNull: false,
      returnEmptyString: false,
      saveMissing: false,
      keySeparator: '.',
      nsSeparator: ':',
      missingKeyHandler: (lng, ns, key, fallbackValue) => {
        console.warn(
          `Отсутствует ключ перевода: ${key} для языка ${lng} в пространстве ${ns}. Используется HTML-текст.`
        );
      },
      parseMissingKeyHandler: key => {
        return null;
      },
    });

    localStorage.setItem('userLanguage', userLanguage);

    updateMetadata(userLanguage);

    const safeLanguageChangeHandler = async language => {
      try {
        console.log('Language changed to:', language);
        localStorage.setItem('userLanguage', language);
        updateLanguageURL(language);

        await updateAllContent();
      } catch (error) {
        console.error('Error in language change handler:', error);
        try {
          updateTextElements();
          updateRTLSupport();
          updateMetadata(language);
        } catch (innerError) {
          console.error('Failed to update basic content:', innerError);
        }
      }
    };

    i18next.on('languageChanged', safeLanguageChangeHandler);

    window.updateContent = async () => {
      try {
        await updateAllContent();
      } catch (error) {
        console.error('Error in window.updateContent:', error);
        try {
          updateTextElements();
          updateRTLSupport();
          updateMetadata(i18next.language);
        } catch (innerError) {
          console.error('Failed to recover content update:', innerError);
        }
      }
    };

    try {
      await updateAllContent();
    } catch (contentError) {
      console.error('Error in initial content update:', contentError);
      try {
        updateTextElements();
        updateRTLSupport();
        updateMetadata(userLanguage);
      } catch (basicError) {
        console.error('Failed to perform basic content update:', basicError);
      }
    }

    return i18next;
  } catch (error) {
    console.error('Fatal error in setupI18n:', error);
    try {
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

    selector.value = i18next.language;

    selector.addEventListener('change', async function (event) {
      event.preventDefault();

      try {
        const newLanguage = event.target.value;
        console.log(`Language selector changed to: ${newLanguage}`);

        if (!document.contains(selector)) {
          console.log('Language selector no longer in DOM, aborting');
          return;
        }

        localStorage.setItem('userLanguage', newLanguage);

        updateLanguageURL(newLanguage);
      } catch (error) {
        console.error('Error changing language:', error);
        if (document.contains(selector)) {
          selector.value = i18next.language;
        }
      }
    });
  } catch (error) {
    console.error('Error setting up language selector:', error);
  }
}
