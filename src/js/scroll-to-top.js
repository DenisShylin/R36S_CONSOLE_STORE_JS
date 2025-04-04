/**
 * @fileoverview Модуль кнопки прокрутки вверх страницы и селектора языка
 * @description Создает и управляет кнопкой скролла вверх и селектором языка в правом нижнем углу
 */

/**
 * Инициализирует функционал кнопки прокрутки вверх и селектора языка
 * @returns {Function} Функция очистки для удаления обработчиков событий
 */
export function initScrollToTop() {
  console.log('Инициализация кнопки прокрутки вверх и селектора языка');

  // Объект с SVG-кодом флагов для поддерживаемых языков
  const flagsSVG = {
    en: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
        </svg>`,
    ru: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#fff"/>
          <rect width="60" height="10" y="10" fill="#0039A6"/>
          <rect width="60" height="10" y="20" fill="#D52B1E"/>
        </svg>`,
    ar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#006C35"/>
          <rect width="60" height="10" y="10" fill="#FFFFFF"/>
          <rect width="60" height="10" y="20" fill="#000000"/>
        </svg>`,
    be: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="20" fill="#D22730"/>
          <rect width="60" height="10" y="20" fill="#00840f"/>
          <path d="M0,0 H10 V30 H0 Z" fill="#FFFFFF"/>
        </svg>`,
    de: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#000"/>
          <rect width="60" height="10" y="10" fill="#DD0000"/>
          <rect width="60" height="10" y="20" fill="#FFCE00"/>
        </svg>`,
    es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#c60b1e"/>
          <rect width="60" height="15" y="7.5" fill="#ffc400"/>
        </svg>`,
    fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="20" height="30" fill="#002395"/>
          <rect width="20" height="30" x="20" fill="#FFFFFF"/>
          <rect width="20" height="30" x="40" fill="#ED2939"/>
        </svg>`,
    it: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="20" height="30" fill="#009246"/>
          <rect width="20" height="30" x="20" fill="#FFFFFF"/>
          <rect width="20" height="30" x="40" fill="#CE2B37"/>
        </svg>`,
    ja: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#FFFFFF"/>
          <circle cx="30" cy="15" r="9" fill="#BC002D"/>
        </svg>`,
    ko: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#FFFFFF"/>
          <circle cx="30" cy="15" r="6" fill="#C60C30"/>
          <path d="M25,9 A 6,6 0 0 1 35,9" fill="#003478"/>
          <path d="M25,21 A 6,6 0 0 0 35,21" fill="#003478"/>
        </svg>`,
    nl: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#AE1C28"/>
          <rect width="60" height="10" y="10" fill="#FFFFFF"/>
          <rect width="60" height="10" y="20" fill="#21468B"/>
        </svg>`,
    pt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#006600"/>
          <rect width="20" height="30" fill="#FF0000"/>
          <circle cx="20" cy="15" r="4" fill="#FFFF00"/>
        </svg>`,
    tr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#E30A17"/>
          <circle cx="22.5" cy="15" r="6" fill="#FFFFFF"/>
          <circle cx="25.2" cy="15" r="5" fill="#E30A17"/>
          <polygon fill="#FFFFFF" points="30,15 32.5,19 28.5,16.5 31.5,16.5 27.5,19"/>
        </svg>`,
    uk: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="15" fill="#005BBB"/>
          <rect width="60" height="15" y="15" fill="#FFD500"/>
        </svg>`,
  };

  // Определяем поддерживаемые языки и их имена
  const supportedLanguages = [
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

  const languageNames = {
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

  // Создаем контейнер для кнопок
  const cornerButtonsContainer = document.createElement('div');
  cornerButtonsContainer.className = 'corner-buttons-container';

  // Создаем элемент селектора языка
  const languageSelectorContainer = document.createElement('div');
  languageSelectorContainer.className = 'language-selector';
  languageSelectorContainer.id = 'corner-language-selector';

  // Создаем кнопку языка
  const languageButton = document.createElement('button');
  languageButton.className = 'language-button';
  languageButton.setAttribute('aria-label', 'Выбрать язык');

  // Создаем элемент для отображения флага текущего языка
  const currentLangFlag = document.createElement('div');
  currentLangFlag.className = 'language-button__flag';
  currentLangFlag.id = 'current-language-flag';

  // Создаем контейнер для выпадающего списка языков
  const languageDropdown = document.createElement('div');
  languageDropdown.className = 'language-dropdown';
  languageDropdown.id = 'language-dropdown';

  // Создаем элемент кнопки прокрутки вверх
  const scrollButton = document.createElement('button');
  scrollButton.className = 'scroll-to-top';
  scrollButton.setAttribute('aria-label', 'Прокрутить вверх страницы');
  scrollButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;

  // Добавляем элементы в DOM
  languageButton.appendChild(currentLangFlag);
  languageSelectorContainer.appendChild(languageButton);
  languageSelectorContainer.appendChild(languageDropdown);

  // Добавляем все в контейнер и затем в DOM
  cornerButtonsContainer.appendChild(languageSelectorContainer);
  cornerButtonsContainer.appendChild(scrollButton);
  document.body.appendChild(cornerButtonsContainer);

  // Инициализируем селектор языка
  initLanguageSelector();

  // Используем throttle для уменьшения количества вызовов обработчика скролла
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Обработчик события прокрутки страницы
   * Показывает/скрывает кнопку скролла в зависимости от позиции скролла
   */
  const handleScroll = throttle(function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldBeVisible = scrollTop > 300; // Показать после прокрутки на 300px вниз

    // Обновляем видимость кнопки скролла
    if (shouldBeVisible) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  }, 100); // Ограничиваем вызовы до одного раза в 100ms

  /**
   * Обработчик клика по кнопке прокрутки вверх
   * Плавно прокручивает страницу вверх
   * @param {Event} e - Событие клика
   */
  function handleScrollButtonClick(e) {
    e.preventDefault();

    // Эффект нажатия кнопки
    scrollButton.classList.add('active');
    setTimeout(() => {
      scrollButton.classList.remove('active');
    }, 200);

    // Плавная прокрутка наверх страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Инициализирует функционал селектора языка
   */
  function initLanguageSelector() {
    try {
      // Проверяем наличие скрытого селектора или создаем его
      let originalSelector = document.getElementById('language-selector');
      if (!originalSelector) {
        originalSelector = document.createElement('select');
        originalSelector.id = 'language-selector';
        originalSelector.style.display = 'none';
        document.body.appendChild(originalSelector);

        // Заполняем options в селекторе
        supportedLanguages.forEach(lang => {
          const option = document.createElement('option');
          option.value = lang;
          option.textContent = languageNames[lang] || lang;
          originalSelector.appendChild(option);
        });
      }

      // Получаем текущий язык
      const currentLang = localStorage.getItem('userLanguage') || 'en';
      if (originalSelector) {
        originalSelector.value = currentLang;
      }

      // Обновляем внешний вид кнопки языка
      updateLanguageButtonAppearance(currentLang);

      // Создаем элементы выпадающего списка
      createLanguageDropdownItems();

      // Добавляем обработчик клика на кнопку языка
      languageButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        languageSelectorContainer.classList.toggle('active');
        // Не возвращайте true здесь
      });

      // Закрываем dropdown при клике вне элемента
      document.addEventListener('click', e => {
        if (!languageSelectorContainer.contains(e.target)) {
          languageSelectorContainer.classList.remove('active');
        }
      });

      // Функция для обновления внешнего вида кнопки языка
      function updateLanguageButtonAppearance(langCode) {
        currentLangFlag.innerHTML = flagsSVG[langCode] || '';
      }

      // Функция для создания элементов выпадающего списка
      function createLanguageDropdownItems() {
        // Очищаем контейнер
        languageDropdown.innerHTML = '';

        // Создаем элементы для каждого языка
        supportedLanguages.forEach(code => {
          const item = document.createElement('div');
          item.className = `language-dropdown__item ${
            code === currentLang ? 'active' : ''
          }`;
          item.dataset.lang = code;

          // Создаем элемент флага
          const flag = document.createElement('div');
          flag.className = 'language-dropdown__flag';
          flag.innerHTML = flagsSVG[code] || '';

          // Создаем элемент названия языка
          const name = document.createElement('div');
          name.className = 'language-dropdown__name';
          name.textContent = languageNames[code] || code;

          // Добавляем элементы в контейнер
          item.appendChild(flag);
          item.appendChild(name);
          languageDropdown.appendChild(item);

          // Добавляем обработчик клика
          item.addEventListener('click', () => {
            // Эмулируем выбор в оригинальном селекторе для совместимости
            if (originalSelector) {
              originalSelector.value = code;
              // Вызываем событие change для запуска обработчика в i18n.js
              originalSelector.dispatchEvent(new Event('change'));
            }

            // Закрываем dropdown
            languageSelectorContainer.classList.remove('active');

            // Обновляем активный элемент
            document
              .querySelectorAll('.language-dropdown__item')
              .forEach(el => {
                el.classList.toggle('active', el.dataset.lang === code);
              });

            // Обновляем внешний вид кнопки
            updateLanguageButtonAppearance(code);
          });
        });
      }

      // Добавляем слушатель события изменения языка
      window.addEventListener('languageChanged', event => {
        if (event.detail && event.detail.language) {
          updateLanguageButtonAppearance(event.detail.language);

          // Обновляем активный элемент в dropdown
          document.querySelectorAll('.language-dropdown__item').forEach(el => {
            el.classList.toggle(
              'active',
              el.dataset.lang === event.detail.language
            );
          });
        }
      });
    } catch (error) {
      console.error('Ошибка при инициализации селектора языка:', error);
    }
  }

  // Назначаем обработчики событий
  window.addEventListener('scroll', handleScroll, { passive: true });
  scrollButton.addEventListener('click', handleScrollButtonClick);

  // Инициализируем начальное состояние
  handleScroll();

  /**
   * Функция очистки обработчиков событий и удаления элементов
   * @returns {void}
   */
  return function cleanup() {
    console.log('Очистка кнопки прокрутки вверх и селектора языка');
    window.removeEventListener('scroll', handleScroll);
    scrollButton.removeEventListener('click', handleScrollButtonClick);

    // Удаляем все обработчики событий для языкового селектора
    languageButton.removeEventListener('click', () => {});
    document.querySelectorAll('.language-dropdown__item').forEach(item => {
      item.removeEventListener('click', () => {});
    });

    // Удаляем контейнер из DOM
    if (cornerButtonsContainer && cornerButtonsContainer.parentNode) {
      cornerButtonsContainer.parentNode.removeChild(cornerButtonsContainer);
    }
  };
}
