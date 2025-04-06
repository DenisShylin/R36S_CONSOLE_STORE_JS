// about.js с интеграцией i18n
import i18next from 'i18next';
import { createModalAbout } from './modalabout.js';

// Прямые импорты медиафайлов с адаптированными путями
import displayControls from '/video/about/video_1_.webp';
import videoGif from '/video/about/video_2_.webp';
import untitled1 from '/img/about/Untitled_1_1x.jpg';
import untitled2 from '/img/about/Untitled_2_1x.jpg';
import untitled3 from '/img/about/Untitled_3_1x.jpg';
import untitled4 from '/img/about/Untitled_4_1x.jpg';

import videoBattery from '/video/about/video_3_batrey_.mp4';
import videoModa6 from '/video/about/video_6_.mp4';
import videoOption2 from '/video/about/video_4_.mp4';

// Глобальная переменная для хранения модального окна
let globalModalInstance = null;

// Функция для получения локализованного текста с поддержкой fallback
const getLocalizedText = (key, defaultText) => {
  try {
    const translation = i18next.t(key);
    // Если перевод совпадает с ключом, значит перевод не найден
    if (translation === key) {
      return defaultText;
    }
    return translation;
  } catch (error) {
    console.warn(`Error getting translation for ${key}:`, error);
    return defaultText;
  }
};

// ОПТИМИЗАЦИЯ 1: Предзагрузка изображений для улучшения производительности
function preloadImages() {
  console.log('Начинаем предзагрузку изображений...');
  // Создаем массив изображений для предзагрузки
  const imagesToPreload = [
    displayControls, // Изображение первой карточки
    videoGif,
    untitled1,
    untitled2,
  ];

  // Запускаем предзагрузку изображений
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Предзагрузка видео для первой карточки
  if ('HTMLVideoElement' in window) {
    const videoPreload = document.createElement('video');
    videoPreload.preload = 'metadata';
    videoPreload.src = videoBattery;
  }

  console.log('Предзагрузка изображений завершена');
}

// Функция инициализации секции About
export function initAbout() {
  console.log('Инициализация секции About');

  // Диагностика и исправление эффекта свечения
  function fixGlowEffect() {
    console.log('Запуск диагностики эффекта свечения...');

    // Получаем контейнер для карточек
    const cardsContainer = document.querySelector('.about__cards');
    if (!cardsContainer) {
      console.error('Контейнер для карточек не найден!');

      // Пробуем найти контейнер по другим селекторам
      const alternativeContainers = [
        document.querySelector('.about .cards'),
        document.querySelector('[data-section="about"] .cards'),
        document.querySelector('#features-r36s .about__cards'),
      ];

      const foundContainer = alternativeContainers.find(
        container => container !== null
      );
      if (foundContainer) {
        console.log('Найден альтернативный контейнер:', foundContainer);
        setTimeout(() => setupGlowEffect(foundContainer), 500);
      } else {
        console.error('Не удалось найти контейнер с карточками');
      }

      return;
    }

    setTimeout(() => setupGlowEffect(cardsContainer), 500);
  }

  function setupGlowEffect(container) {
    // Ищем карточки внутри контейнера
    const cards = container.querySelectorAll('.about-card');
    console.log(`Найдено ${cards.length} карточек`);

    if (cards.length === 0) {
      console.error('Карточки не найдены в контейнере!');

      // Пробуем альтернативные селекторы
      const alternativeCards = container.querySelectorAll(
        '.card, .feature-card, [data-card]'
      );
      if (alternativeCards.length > 0) {
        console.log(
          `Найдено ${alternativeCards.length} карточек по альтернативному селектору`
        );
        setupMouseEffects(alternativeCards);
      } else {
        console.error('Не удалось найти карточки ни по одному селектору');
      }

      return;
    }

    setupMouseEffects(cards);
  }

  function setupMouseEffects(cards) {
    cards.forEach((card, index) => {
      console.log(`Настройка карточки ${index + 1}`);

      // Проверяем наличие элемента подсветки
      let glowElement = card.querySelector('.card-glow');
      if (!glowElement) {
        console.log(`Создаем элемент подсветки для карточки ${index + 1}`);
        glowElement = document.createElement('div');
        glowElement.className = 'card-glow';
        card.prepend(glowElement);
      }

      // Устанавливаем начальные значения переменных
      card.style.setProperty('--mouse-x', '0px');
      card.style.setProperty('--mouse-y', '0px');

      // Добавляем прямой обработчик mousemove
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      console.log(
        `Обработчик события mousemove добавлен к карточке ${index + 1}`
      );
    });
  }

  // Вызов функции диагностики в начале initAbout()
  fixGlowEffect();
  // ОПТИМИЗАЦИЯ 2: Начинаем предзагрузку изображений сразу
  preloadImages();

  // Получаем контейнер для карточек
  const cardsContainer = document.querySelector('.about__cards');
  if (!cardsContainer) {
    console.error('Контейнер для карточек не найден');
    return null; // Возвращаем null чтобы показать, что инициализация не удалась
  }

  let activeCard = null;
  let mousePosition = { x: 0, y: 0 };
  let selectedFeature = null;

  // ОПТИМИЗАЦИЯ 3: Создаем модальное окно сразу при инициализации, а не при первом клике
  // Используем глобальную переменную для хранения модального окна
  if (!globalModalInstance) {
    console.log('Создаем модальное окно...');
    globalModalInstance = createModalAbout(document.body);
    console.log('Модальное окно создано');
  }

  let modalInstance = globalModalInstance;

  // ОПТИМИЗАЦИЯ 4: Выносим структурированные данные из основного потока
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    mainEntity: {
      '@type': 'Product',
      name: 'R36S Handheld Game Console',
      faqPage: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many games are included in the R36S console?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The R36S console includes over 15,000 classic retro games from various platforms.',
            },
          },
        ],
      },
    },
  };

  const features = [
    {
      id: 1,
      i18nKey: 'about.cards.1',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      `,
      title: 'Retro Game Collection',
      description: 'Get into the game with the r36s portable gaming console.',
      number: '15K+',
      detail: 'classic games',
      fullDescription: `Discover a rich collection of classic games, including over 15,000 titles from different eras. From iconic arcade games to beloved console games, our library spans every significant platform of the past.

The collection includes:
• Classic arcade games from the 80s and 90s
• Complete libraries of NES, SNES, Sega and other consoles
• Exclusive ports and rare releases
• Optimized versions for modern hardware`,
      imageUrl: displayControls,
      imageAlt: 'Коллекция ретро-игр',
      // ОПТИМИЗАЦИЯ 5: Добавляем ссылку на предзагруженные структурированные данные
      structuredData: structuredData,
    },
    {
      id: 2,
      i18nKey: 'about.cards.2',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      `,
      title: 'Vibrant Display Technologies',
      description:
        'Enjoy vivid games on the 3.5* LCD display with crisp 640x480 resolution.',
      number: '3.5"',
      detail: 'IPS display',
      fullDescription: `R36S Console Display Specifications:
• 3.5-inch IPS display
• 640x480 resolution
• High brightness and contrast
• Wide viewing angles
• Anti-glare coating
• Energy-efficient backlight
• Scratch-resistant surface`,
      imageUrl: videoGif,
      imageAlt: 'Display Technologies',
    },
    {
      id: 3,
      i18nKey: 'about.cards.3',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      `,
      title: 'Powerful battery',
      description: 'Enjoy up to 7-8 hours of continuous gaming with the R36S.',
      number: '7-8',
      detail: 'hours of play',
      fullDescription: `Powerful 3200 mAh Battery

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display`,
      videoUrl: videoBattery,
      imageAlt: 'Battery Life',
    },
    {
      id: 4,
      i18nKey: 'about.cards.4',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      `,
      title: 'Extensive color selection',
      description: 'Experience our wide selection of stunning console colors.',
      number: '10+',
      detail: 'COLORS',
      fullDescription: `Experience the R36S Collection:
The R36S console delivers 12+ captivating color variations in 2024, including our signature Midnight Black and eye-catching Galactic Purple. Each R36S model features recycled plastic finish and scratch-resistant coating.

Available Colors:
- Classic Black
- Vibrant Orange
- Mesmerizing Purple ...`,
      colorImages: [untitled1, untitled2, untitled3, untitled4],
      imageAlt: 'R36S Color Variants',
    },
    {
      id: 5,
      i18nKey: 'about.cards.5',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      `,
      title: 'Extensive settings',
      description:
        'Customize controls, brightness, sound and settings for maximum comfort',
      number: '30+',
      detail: 'settings',
      fullDescription: `Features & Connectivity:
- Connect to external displays via OTG for large-screen gaming
- Compatible with modern gaming controllers and gamepads
- Multi-language interface support
- Customizable control schemes and button mapping
- Advanced display settings with adjustable brightness and contrast
- Audio optimization with multiple sound profiles
- Screen mirroring capability
- Low latency connection for seamless gameplay`,
      videoUrl: videoOption2,
      imageAlt: 'R36S Settings',
    },
    {
      id: 6,
      i18nKey: 'about.cards.6',
      icon: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `,
      title: 'Maximum portability',
      description:
        'Portable console with removable battery for gaming on the go.',
      number: 'Ultra',
      detail: 'Portable',
      fullDescription: `Whether commuting, traveling, or taking a quick break, the R36S is ready for instant entertainment. Its durable design and protected screen ensure worry-free portability, while the long-lasting battery keeps you gaming on the go.

Features:
• Pocket-sized dimensions for ultimate portability
• Rugged construction for daily carry
• Ergonomic grip for extended gaming sessions
• Quick startup for instant gaming access`,
      videoUrl: videoModa6,
      imageAlt: 'R36S Portability',
    },
  ];

  // Получение локализованных данных для фичи
  const getLocalizedFeature = feature => {
    const basePath = feature.i18nKey;
    return {
      ...feature,
      title: getLocalizedText(`${basePath}.title`, feature.title),
      description: getLocalizedText(
        `${basePath}.description`,
        feature.description
      ),
      detail: getLocalizedText(`${basePath}.detail`, feature.detail),
      number: getLocalizedText(`${basePath}.number`, feature.number),
      fullDescription: getLocalizedText(
        `${basePath}.fullDescription`,
        feature.fullDescription
      ),
      imageAlt: getLocalizedText(`${basePath}.imageAlt`, feature.imageAlt),
    };
  };

  // Функция для явного обновления текста кнопок
  function updateButtonsText() {
    try {
      const buttonText = getLocalizedText(
        'about.button.details',
        'More details'
      );
      const buttons = document.querySelectorAll(
        '.about-card__button .button-text'
      );

      console.log(
        `Обновление текста ${buttons.length} кнопок на: "${buttonText}"`
      );

      buttons.forEach(button => {
        button.textContent = buttonText;
      });
    } catch (error) {
      console.error('Ошибка при обновлении текста кнопок:', error);
    }
  }
  // Функция для проверки RTL направления
  function isRTL() {
    return document.documentElement.dir === 'rtl';
  }
  // ОПТИМИЗАЦИЯ 6: Разделение рендеринга карточек
  // Сначала рендерим разметку карточек без обработчиков событий
  function renderCards() {
    console.log('Начинаем рендеринг карточек...');
    // Очищаем контейнер перед добавлением карточек для предотвращения дублирования
    cardsContainer.innerHTML = '';

    // Получаем перевод для кнопки
    const buttonText = getLocalizedText('about.button.details', 'More details');

    // Проверяем направление текста
    const rtlDirection = isRTL();

    // Создаем HTML для всех 6 карточек
    const cardsHTML = features
      .map(feature => {
        // Получаем локализованные данные
        const localizedFeature = getLocalizedFeature(feature);

        // Определяем содержимое кнопки в зависимости от направления текста
        const buttonContent = rtlDirection
          ? `<span class="button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
        <span class="button-text" data-i18n="about.button.details">${buttonText}</span>`
          : `<span class="button-text" data-i18n="about.button.details">${buttonText}</span>
        <span class="button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>`;

        return `
      <div class="about-card" data-id="${feature.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${feature.icon}</div>
          <h3 class="about-card__title" data-i18n="${feature.i18nKey}.title">${localizedFeature.title}</h3>
          <p class="about-card__description" data-i18n="${feature.i18nKey}.description">${localizedFeature.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number" data-i18n="${feature.i18nKey}.number">${localizedFeature.number}</span>
            <span class="about-card__detail" data-i18n="${feature.i18nKey}.detail">${localizedFeature.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${feature.id}">
            ${buttonContent}
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `;
      })
      .join('');

    // Добавляем все карточки в контейнер
    cardsContainer.innerHTML = cardsHTML;

    // Проверка на количество карточек
    const renderedCards = cardsContainer.querySelectorAll('.about-card');
    console.log(
      `Отрендерено ${renderedCards.length} карточек из ${features.length} необходимых`
    );

    // Проверяем, что отрендерено правильное количество карточек
    if (renderedCards.length !== features.length) {
      console.warn(
        `Ошибка рендеринга: отрендерено ${renderedCards.length} карточек вместо ${features.length}`
      );
    } else {
      console.log('Рендеринг карточек успешно завершен');
    }
  }

  // Обработчик движения мыши (оптимизирован с использованием throttle)
  // ОПТИМИЗАЦИЯ 8: Используем throttle для уменьшения количества вызовов обработчика
  const handleMouseMove = throttle(function (e) {
    // Проверка на существование события
    if (!e || !e.currentTarget) {
      return;
    }

    const card = e.currentTarget;

    // Проверка на существование элемента перед получением его размеров
    if (!card || !card.getBoundingClientRect) {
      console.warn(
        'handleMouseMove: элемент карточки не существует или недоступен'
      );
      return;
    }

    try {
      const rect = card.getBoundingClientRect();

      mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      card.style.setProperty('--mouse-x', `${mousePosition.x}px`);
      card.style.setProperty('--mouse-y', `${mousePosition.y}px`);
    } catch (err) {
      console.error('Ошибка при обработке движения мыши:', err);
    }
  }, 16); // 60fps (1000ms / 60 = ~16ms)

  // Функция throttle для ограничения количества вызовов функции
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  // Обработчик клика на кнопку "More details"
  function handleButtonClick(e) {
    if (!e || !e.currentTarget) {
      console.warn('handleButtonClick: событие или цель события не существует');
      return;
    }

    e.stopPropagation(); // Останавливаем всплытие, чтобы избежать двойного открытия

    try {
      const featureId = parseInt(e.currentTarget.dataset.featureId);
      console.log('Клик по кнопке карточки ID:', featureId);

      const feature = features.find(f => f.id === featureId);
      if (!feature) {
        console.error('Данные для карточки не найдены');
        return;
      }

      // Локализуем данные перед открытием модального окна
      const localizedFeature = getLocalizedFeature(feature);

      // Открываем модальное окно (уже создано при инициализации)
      if (modalInstance) {
        modalInstance.open(localizedFeature);
      }
    } catch (err) {
      console.error('Ошибка при обработке клика по кнопке:', err);
    }
  }

  // Вспомогательная функция debounce для оптимизации обработки resize
  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  // Функция очистки обработчиков событий карточек
  function cleanupCardEvents() {
    console.log('Очистка обработчиков событий карточек...');
    try {
      const cards = document.querySelectorAll('.about-card');
      if (cards && cards.length > 0) {
        cards.forEach(card => {
          if (card) {
            card.removeEventListener('mouseenter', () => {});
            card.removeEventListener('mouseleave', () => {});
            card.removeEventListener('mousemove', handleMouseMove);
          }
        });
      }

      const buttons = document.querySelectorAll('.about-card__button');
      if (buttons && buttons.length > 0) {
        buttons.forEach(button => {
          if (button) {
            button.removeEventListener('click', handleButtonClick);
          }
        });
      }

      if (cardsContainer) {
        cardsContainer.removeEventListener('click', () => {});
      }

      console.log('Очистка обработчиков завершена');
    } catch (err) {
      console.error('Ошибка при очистке обработчиков событий:', err);
    }
  }

  // ОПТИМИЗАЦИЯ 9: Асинхронная установка обработчиков событий для карточек
  function setupCardEvents() {
    console.log('Настройка обработчиков событий для карточек...');
    // Используем DOMContentLoaded или timeout для уверенности, что DOM загружен
    const setupEvents = () => {
      console.log('Проверяем наличие карточек для установки обработчиков...');
      const cards = document.querySelectorAll('.about-card');
      if (!cards || cards.length === 0) {
        console.warn('Не найдены карточки для установки обработчиков событий');
        // Попробуем снова через небольшую задержку
        setTimeout(setupEvents, 200);
        return;
      }

      console.log(
        `Устанавливаем обработчики событий для ${cards.length} карточек`
      );
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      // ОПТИМИЗАЦИЯ 10: Используем делегирование событий вместо множества обработчиков
      // Устанавливаем один обработчик на контейнер для всех карточек
      if (!isMobile && cardsContainer) {
        cardsContainer.addEventListener('click', function (e) {
          const card = e.target.closest('.about-card');
          if (card && !e.target.closest('.about-card__button')) {
            const featureId = parseInt(card.dataset.id);
            console.log('Клик по карточке ID:', featureId);
            const feature = features.find(f => f.id === featureId);
            if (!feature) {
              console.error('Данные для карточки не найдены');
              return;
            }

            // Локализуем данные перед открытием модального окна
            const localizedFeature = getLocalizedFeature(feature);

            // Открываем модальное окно
            if (modalInstance) {
              modalInstance.open(localizedFeature);
            }
          }
        });
      }

      // Добавляем обработчики для визуальных эффектов на карточках
      cards.forEach(card => {
        if (!card) return; // Проверка на null

        // Используем делегирование событий для mouseenter/mouseleave
        card.addEventListener('mouseenter', function () {
          if (!card) return;
          activeCard = parseInt(card.dataset.id);
          card.classList.add('active');
        });

        card.addEventListener('mouseleave', function () {
          if (!card) return;
          activeCard = null;
          card.classList.remove('active');
        });

        // Используем throttle для mousemove
        card.addEventListener('mousemove', handleMouseMove);
      });

      // Оптимизированная обработка кликов по кнопкам
      const buttons = document.querySelectorAll('.about-card__button');
      if (buttons && buttons.length > 0) {
        buttons.forEach(button => {
          if (!button) return; // Проверка на null
          button.addEventListener('click', handleButtonClick);
        });
        console.log(`Установлены обработчики для ${buttons.length} кнопок`);
      } else {
        console.warn('Не найдены кнопки карточек');
      }

      // Оптимизированный обработчик изменения размера окна
      window.addEventListener(
        'resize',
        debounce(() => {
          const wasDesktop = !isMobile;
          const isDesktopNow = !window.matchMedia('(max-width: 768px)').matches;

          if (wasDesktop !== isDesktopNow) {
            cleanupCardEvents();
            setupCardEvents();
          }
        }, 250)
      );

      console.log('Настройка обработчиков событий успешно завершена');
    };

    // Запускаем настройку событий, когда DOM гарантированно загружен
    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      setTimeout(setupEvents, 10);
    } else {
      document.addEventListener('DOMContentLoaded', setupEvents);
    }
  }

  // Обработчик изменения языка
  function setupLanguageChangeListener() {
    window.addEventListener('languageChanged', function (event) {
      try {
        console.log('Обработка события смены языка в секции About');

        // Перерендерим карточки с новыми переводами
        renderCards();

        // Дополнительно обновим текст кнопок напрямую, чтобы гарантировать их перевод
        updateButtonsText();

        // Повторно устанавливаем обработчики событий
        setupCardEvents();
      } catch (error) {
        console.error(
          'Ошибка при обновлении секции About после смены языка:',
          error
        );
      }
    });
  }

  // Очистка всех обработчиков событий
  function cleanupEvents() {
    console.log('Очистка всех обработчиков событий...');
    cleanupCardEvents();
    window.removeEventListener('resize', debounce);
    window.removeEventListener('languageChanged', function () {});

    // Сохраняем модальное окно в глобальной переменной, но очищаем локальную ссылку
    modalInstance = null;
    console.log('Очистка обработчиков событий завершена');
  }

  // ОПТИМИЗАЦИЯ 11: Асинхронная инициализация для предотвращения блокировки основного потока
  function asyncInit() {
    // Устанавливаем слушатель изменения языка
    setupLanguageChangeListener();

    // Возвращаем функцию очистки
    return function cleanup() {
      console.log('Запуск функции очистки секции About');
      cleanupEvents();
    };
  }

  // Инициализация секции
  try {
    console.log('Начинаем инициализацию секции About...');
    console.log('Рендерим карточки...');
    renderCards();
    console.log('Устанавливаем обработчики событий...');
    setupCardEvents();
    console.log('Инициализация About завершена успешно');
    return asyncInit();
  } catch (error) {
    console.error('Ошибка при инициализации About:', error);
    return null;
  }
}

// Экспортируем инициализатор по умолчанию для поддержки импорта
export default { initAbout };
