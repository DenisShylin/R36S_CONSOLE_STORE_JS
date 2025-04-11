// modalabout.js с поддержкой i18n и оптимизированной загрузкой видео
import i18next from 'i18next';
// Удаляем импорт getLocalizedPrice
// import { getLocalizedPrice } from './utils/priceFormatter.js';

// Фабричная функция для создания модального окна
export function createModalAbout(parentElement) {
  let modalElement = null;
  let feature = null;
  let isOpen = false;
  let currentImageIndex = 0;
  let colorImagesInterval = null;
  let videoElements = []; // Массив для хранения ссылок на видеоэлементы

  // Функция для получения локализованного текста
  const getLocalizedText = (key, defaultText) => {
    try {
      const translation = i18next.t(key);
      return translation !== key ? translation : defaultText;
    } catch (error) {
      console.warn(`Error getting translation for ${key}:`, error);
      return defaultText;
    }
  };

  // Создаем функцию, которая возвращает статический текст с поддержкой переводов
  const getStaticDiscountText = type => {
    try {
      const currentLang = i18next.language;

      // Словарь с переводами слова "Скидка" для разных языков
      const discountTranslations = {
        en: 'Discount',
        ru: 'Скидка',
        ar: 'خصم',
        be: 'Зніжка',
        de: 'Rabatt',
        es: 'Descuento',
        fr: 'Réduction',
        it: 'Sconto',
        ja: '割引',
        ko: '할인',
        nl: 'Korting',
        pt: 'Desconto',
        tr: 'İndirim',
        uk: 'Знижка',
      };

      // Проверяем наличие перевода в i18next
      if (type === 'current') {
        // Пытаемся найти перевод для текущего языка
        const translation = i18next.t('hero.pricing.current', {
          defaultValue: null,
        });
        // Если перевод найден, используем его
        if (translation && translation !== 'hero.pricing.current') {
          return translation;
        }

        // Если перевод не найден в i18next, используем наш словарь переводов
        return discountTranslations[currentLang] || discountTranslations.en; // Возвращаем английский вариант, если язык не найден
      }

      return '';
    } catch (error) {
      console.warn('Error getting static discount text:', error);

      // Запасные значения в случае ошибки
      if (type === 'current') return 'Discount';
      if (type === 'original') return 'Discount -29%';
      if (type === 'discount') return '-68%';
      return '';
    }
  };

  // Функция для проверки RTL направления
  function isRTL() {
    return document.documentElement.dir === 'rtl';
  }

  // Добавляем базовые стили для модального окна
  const addStyles = () => {
    const styleId = 'modal-about-styles';
    if (document.getElementById(styleId)) return;

    // В модификации удалены встроенные стили - они перенесены в отдельный CSS файл
    // Поэтому нет необходимости здесь добавлять стили динамически
    console.log('Проверка стилей модального окна');
  };

  // Добавляем стили
  addStyles();

  // Обработчик клавиши Escape
  function handleEscPress(e) {
    if (e.key === 'Escape' && isOpen) {
      close();
    }
  }

  // Создание DOM элемента модального окна
  function createModalElement() {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal-about-overlay';
    modalDiv.setAttribute('role', 'dialog');
    modalDiv.setAttribute('aria-modal', 'true');
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.style.display = 'none';

    modalDiv.addEventListener('click', close);

    parentElement.appendChild(modalDiv);
    return modalDiv;
  }

  // Функция updateModalRTLStyles тоже должна быть обновлена
  function updateModalRTLStyles() {
    if (!modalElement) return;

    const rtlDirection = isRTL();

    if (rtlDirection) {
      // Находим и настраиваем заголовок
      const header = modalElement.querySelector('.modal-about-header');
      if (header) {
        // Переместить заголовок в правый угол
        header.style.flexDirection = 'row-reverse';
        header.style.justifyContent = 'flex-end'; // Выравнивание по правому краю
        header.style.paddingRight = '16px';
        header.style.paddingLeft = '50px'; // Отступ для крестика

        // Настраиваем иконку
        const iconWrapper = header.querySelector('.modal-about-icon-wrapper');
        if (iconWrapper) {
          iconWrapper.style.marginLeft = '0';
          iconWrapper.style.marginRight = '0';
        }

        // Настраиваем заголовок
        const title = header.querySelector('.modal-about-title');
        if (title) {
          title.style.textAlign = 'right';
          title.style.marginRight = '17px'; // Отступ между иконкой и текстом
        }
      }

      // Кнопка закрытия (крестик)
      const closeButton = modalElement.querySelector('.modal-about-close');
      if (closeButton) {
        closeButton.style.right = 'auto';
        closeButton.style.left = '16px';
      }
    }
  }

  // Рендер медиа-контента (изображение, видео или карусель)
  function renderMedia() {
    if (!feature) return '';

    // Обработка карусели цветов
    if (
      feature.title ===
        getLocalizedText('about.cards.4.title', 'Extensive color selection') &&
      feature.colorImages
    ) {
      return `
        <img
          src="${feature.colorImages[currentImageIndex]}"
          alt="${getLocalizedText(
            `about.cards.4.imageAlt.${currentImageIndex + 1}`,
            `R36S Color Variant ${currentImageIndex + 1}`
          )}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `;
    }

    // Обработка видео или GIF в videoUrl
    if (feature.videoUrl) {
      const fileUrl = feature.videoUrl.toString().toLowerCase();
      const isMp4 = fileUrl.endsWith('.mp4');

      // Название для видео из заголовка фичи
      const videoTitle = feature.title || 'Видео';

      // Обработка MP4 (отображаем как видео без элементов управления и без автовоспроизведения)
      if (isMp4) {
        return `
        <div class="gif-container">
          <div class="video-placeholder" data-title="${videoTitle}">
            <svg class="video-placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <polygon points="7 2 17 12 7 22 7 2"></polygon>
            </svg>
            <div class="video-placeholder-text">${videoTitle}</div>
          </div>
          <video
            class="modal-about-image video-lazy"
            muted
            loop
            playsInline
            preload="none"
            width="400" 
            height="400"
            data-src="${feature.videoUrl}"
            style="display: none;"
          >
            <source data-src="${feature.videoUrl}" type="video/mp4" />
            <p>${getLocalizedText(
              'about.modal.videoNotSupported',
              'Your browser does not support the video tag.'
            )}</p>
          </video>
          <div class="video-play-button">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
        </div>
        `;
      }

      // Обработка GIF
      return `
        <img
          src="${feature.videoUrl}"
          alt="${
            feature.imageAlt ||
            getLocalizedText(
              'about.modal.imageAlt.default',
              'Feature animation'
            )
          }"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
        />
      `;
    }

    // Обработка статичного изображения или MP4 в imageUrl
    if (feature.imageUrl) {
      const fileUrl = feature.imageUrl.toString().toLowerCase();
      const isMp4 = fileUrl.endsWith('.mp4');

      // Название для видео из заголовка фичи
      const videoTitle = feature.title || 'Видео';

      // Обработка MP4 в imageUrl (отображаем как видео без элементов управления и без автовоспроизведения)
      if (isMp4) {
        return `
        <div class="gif-container">
          <div class="video-placeholder" data-title="${videoTitle}">
            <svg class="video-placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <polygon points="7 2 17 12 7 22 7 2"></polygon>
            </svg>
            <div class="video-placeholder-text">${videoTitle}</div>
          </div>
          <video
            class="modal-about-image video-lazy"
            muted
            loop
            playsInline
            preload="none"
            width="400" 
            height="400"
            data-src="${feature.imageUrl}"
            style="display: none;"
          >
            <source data-src="${feature.imageUrl}" type="video/mp4" />
            <p>${getLocalizedText(
              'about.modal.videoNotSupported',
              'Your browser does not support the video tag.'
            )}</p>
          </video>
          <div class="video-play-button">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
        </div>
        `;
      }

      // Обработка обычного изображения
      return `
        <img
          src="${feature.imageUrl}"
          alt="${
            feature.imageAlt ||
            getLocalizedText('about.modal.imageAlt.default', 'Feature image')
          }"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
        />
      `;
    }

    // Запасной вариант если ни imageUrl, ни videoUrl не указаны
    return `
      <div class="modal-about-image" style="background-color: #0F172A; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; border-radius: 12px; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);">
        ${
          feature.imageAlt ||
          getLocalizedText('about.modal.imageAlt.default', 'Feature Image')
        }
      </div>
    `;
  }

  // Настройка автоматической смены изображений цветов
  function setupColorImagesRotation() {
    if (
      feature?.title ===
        getLocalizedText('about.cards.4.title', 'Extensive color selection') &&
      feature.colorImages
    ) {
      // Очистка существующего интервала
      if (colorImagesInterval) {
        clearInterval(colorImagesInterval);
      }

      // Настройка нового интервала для смены изображений
      colorImagesInterval = setInterval(() => {
        currentImageIndex =
          currentImageIndex === feature.colorImages.length - 1
            ? 0
            : currentImageIndex + 1;

        // Обновление источника изображения
        const imageElement = modalElement.querySelector('.modal-about-image');
        if (imageElement) {
          imageElement.src = feature.colorImages[currentImageIndex];
          imageElement.alt = getLocalizedText(
            `about.cards.4.imageAlt.${currentImageIndex + 1}`,
            `R36S Color Variant ${currentImageIndex + 1}`
          );
        }
      }, 1000);
    }
  }

  // Функция для настройки ленивой загрузки и воспроизведения видео
  function setupLazyVideos() {
    // Очищаем предыдущие ссылки на видео
    videoElements = [];

    // Получаем все видео с классом video-lazy
    const videos = modalElement.querySelectorAll('.video-lazy');
    if (!videos || videos.length === 0) return;

    // Сохраняем ссылки на видео
    videos.forEach(video => {
      videoElements.push(video);

      // Находим соответствующую кнопку воспроизведения и плейсхолдер
      const container = video.parentElement;
      if (!container) return;

      const playButton = container.querySelector('.video-play-button');
      const placeholder = container.querySelector('.video-placeholder');

      if (!playButton || !placeholder) return;

      // Добавляем обработчик клика для кнопки воспроизведения и плейсхолдера
      const startVideoPlayback = e => {
        e.stopPropagation();

        // Загружаем и воспроизводим видео при клике
        const actualSrc = video.getAttribute('data-src');
        if (actualSrc) {
          // Скрываем плейсхолдер
          placeholder.style.display = 'none';

          // Показываем видео
          video.style.display = 'block';

          // Устанавливаем фактический src для видео
          video.setAttribute('src', actualSrc);

          // Устанавливаем атрибут src для тега source
          const sourceElement = video.querySelector('source');
          if (sourceElement) {
            sourceElement.setAttribute('src', actualSrc);
          }

          // Загружаем видео и воспроизводим
          video.load();
          video
            .play()
            .then(() => {
              // После успешного старта воспроизведения скрываем кнопку
              playButton.style.display = 'none';
            })
            .catch(error => {
              console.error('Ошибка воспроизведения видео:', error);

              // В случае ошибки возвращаем плейсхолдер
              placeholder.style.display = 'flex';
              video.style.display = 'none';
            });
        }
      };

      // Добавляем обработчики клика для кнопки и плейсхолдера
      playButton.addEventListener('click', startVideoPlayback);
      placeholder.addEventListener('click', startVideoPlayback);
    });
  }

  // Обновление содержимого модального окна с добавлением структурированных данных
  function updateModalContent() {
    if (!modalElement || !feature) return;

    // Создаем структурированные данные для текущей функции
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      mainEntity: {
        '@type': 'Product',
        name: 'R36S Handheld Game Console',
        description: feature.fullDescription,
        image:
          feature.imageUrl ||
          (feature.colorImages ? feature.colorImages[0] : ''),
        offers: {
          '@type': 'Offer',
          price: '35.48',
          priceCurrency: 'USD',
          url: 'https://www.aliexpress.com/item/1005007171465465.html',
        },
        category: 'Video Game Console',
        feature: feature.title,
      },
    };

    // Добавляем FAQ (если есть вопросы)
    if (feature.id === 1) {
      // Для демонстрации добавляем FAQ только для первого элемента
      structuredData.mainEntity.faqPage = {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: getLocalizedText(
              'about.faq.question',
              'How many games are included in the R36S console?'
            ),
            acceptedAnswer: {
              '@type': 'Answer',
              text: getLocalizedText(
                'about.faq.answer',
                'The R36S console includes over 15,000 classic retro games from various platforms.'
              ),
            },
          },
        ],
      };
    }

    // JSON-LD для структурированных данных
    const structuredDataScript = `
          <script type="application/ld+json">
            ${JSON.stringify(structuredData)}
          </script>
        `;

    // Получаем локализованные тексты для модального окна
    const buyNowText = getLocalizedText('about.modal.buyNow', 'BUY NOW');
    const discountText = getLocalizedText('about.modal.discount', '-68%');

    // Проверяем направление текста для RTL-поддержки
    const rtlDirection = isRTL();

    // Адаптируем текст кнопки в зависимости от направления
    const buttonContent = rtlDirection
      ? `<span class="modal-about-button-shine"></span>
        <span class="modal-about-button-text">${discountText} ${buyNowText}</span>
        <span class="modal-about-button-pulse"></span>`
      : `<span class="modal-about-button-pulse"></span>
        <span class="modal-about-button-text">${buyNowText} ${discountText}</span>
        <span class="modal-about-button-shine"></span>`;

    // Заменяем локализованные цены на статический текст о скидках
    const currentPrice = getStaticDiscountText('current');
    const originalPrice = getStaticDiscountText('original');

    // КЛЮЧЕВАЯ МОДИФИКАЦИЯ: Изменяем структуру заголовка для RTL версии
    const headerContent = rtlDirection
      ? `<div class="modal-about-header" style="flex-direction: row-reverse; justify-content: flex-start; padding-left: 50px;">
       <h3 class="modal-about-title" itemprop="name" data-i18n="${feature.i18nKey}.title" style="text-align: right; margin-right: 17px;">${feature.title}</h3>
       <div class="modal-about-icon-wrapper" aria-hidden="true">${feature.icon}</div>
     </div>`
      : `<div class="modal-about-header">
       <div class="modal-about-icon-wrapper" aria-hidden="true">${feature.icon}</div>
       <h3 class="modal-about-title" itemprop="name" data-i18n="${feature.i18nKey}.title">${feature.title}</h3>
     </div>`;

    modalElement.innerHTML = `
          ${structuredDataScript}
          <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="name" content="R36S Handheld Game Console" />
            <meta itemprop="description" content="${
              feature.title
            } for R36S console" />
            <meta itemprop="sku" content="R36S-${feature.id}" />
            <meta itemprop="brand" content="R36S" />
            <meta itemprop="productID" content="R36S-F${feature.id}" />
            
            <button class="modal-about-close" aria-label="${getLocalizedText(
              'about.modal.close',
              'Close modal'
            )}">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            ${headerContent}

            <div class="modal-about-body">
              <div class="modal-about-media-container" itemprop="image">
                ${renderMedia()}
              </div>
              
              <div class="modal-about-content-container">
                <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                  <div class="modal-about-price-wrapper">
                    <span class="modal-about-original-price" data-i18n="hero.pricing.original">${originalPrice}</span>
                    <span class="modal-about-current-price" data-i18n="hero.pricing.current" itemprop="price" content="35.48">
                      ${currentPrice}
                      <meta itemprop="priceCurrency" content="USD" />
                    </span>
                    <meta itemprop="availability" content="https://schema.org/InStock" />
                    <meta itemprop="url" content="https://www.aliexpress.com/item/1005007171465465.html" />
                  </div>

                  <a
                    href="https://www.aliexpress.com/item/1005007171465465.html"
                    class="modal-about-button modal-about-button--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    itemprop="url"
                  >
                    ${buttonContent}
                  </a>
                </div>

                <div class="modal-about-description" itemprop="description" data-i18n="${
                  feature.i18nKey
                }.fullDescription">
                  ${feature.fullDescription}
                </div>
              </div>
            </div>
          </div>
        `;

    // Применяем дополнительные стили для RTL режима
    updateModalRTLStyles();

    // Добавляем CSS для кнопки воспроизведения видео
    const styleElement = document.getElementById('modal-video-styles');
    if (!styleElement) {
      const style = document.createElement('style');
      style.id = 'modal-video-styles';
      style.textContent = `
        .gif-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #60A5FA;
          z-index: 1;
          cursor: pointer;
        }
        
        .video-placeholder-icon {
          margin-bottom: 16px;
          opacity: 0.8;
          color: #60A5FA;
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3));
        }
        
        .video-placeholder-text {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          max-width: 80%;
          color: #fff;
        }
        
        .video-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s ease;
          border: 2px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
        }
        
        .video-play-button:hover {
          background-color: rgba(15, 23, 42, 0.8);
          transform: translate(-50%, -50%) scale(1.1);
          border-color: rgba(96, 165, 250, 0.6);
        }
        
        .video-play-button svg {
          color: white;
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
        }
        
        .modal-about-image {
          border-radius: 12px;
          object-fit: cover;
          max-width: 100%;
          height: auto;
        }
      `;
      document.head.appendChild(style);
    }

    // Настройка кнопки закрытия
    const closeButton = modalElement.querySelector('.modal-about-close');
    if (closeButton) {
      closeButton.addEventListener('click', close);
    }

    // Обработка всплытия событий для контента модального окна
    const modalContent = modalElement.querySelector('.modal-about-content');
    if (modalContent) {
      modalContent.addEventListener('click', e => e.stopPropagation());
    }

    // Настройка ленивой загрузки видео
    setupLazyVideos();
  }

  // Открытие модального окна с поддержкой истории браузера
  function open(featureData) {
    feature = featureData;
    // Предзагрузка медиа файла для открываемой функции
    // Добавьте атрибут type для изображений
    if (!modalElement) {
      modalElement = createModalElement();
    }

    // Обновление содержимого модального окна
    updateModalContent();

    // Сохраняем текущий URL для возврата при закрытии
    const currentUrl = window.location.href;

    // Добавляем параметр в URL для поддержки истории
    const newUrl = new URL(currentUrl);
    newUrl.searchParams.set('feature', feature.id);
    window.history.pushState({ featureId: feature.id }, '', newUrl);

    // Отображение модального окна
    modalElement.style.display = 'flex';
    isOpen = true;

    // Фокус на модальном окне для клавиатурной навигации
    modalElement.focus();

    // Добавление обработчиков событий
    window.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = 'hidden';

    // Настройка смены изображений цветов при необходимости
    setupColorImagesRotation();

    // Отслеживание события навигации назад
    window.addEventListener('popstate', handlePopState);

    return { close };
  }

  // Обработчик события popstate для поддержки истории браузера
  function handlePopState(event) {
    if (isOpen && (!event.state || !event.state.featureId)) {
      close();
    }
  }

  // Закрытие модального окна с поддержкой истории браузера
  function close() {
    if (!isOpen || !modalElement) return;

    isOpen = false;
    modalElement.style.display = 'none';

    // Останавливаем все воспроизводящиеся видео
    stopAllVideos();

    // Удаление обработчиков событий
    window.removeEventListener('keydown', handleEscPress);
    window.removeEventListener('popstate', handlePopState);
    document.body.style.overflow = 'visible';

    // Очистка интервала смены изображений
    if (colorImagesInterval) {
      clearInterval(colorImagesInterval);
      colorImagesInterval = null;
    }

    // Удаляем параметр из URL
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('feature');
    window.history.pushState({}, '', currentUrl);
  }

  // Функция для остановки всех видео при закрытии модального окна
  function stopAllVideos() {
    if (!videoElements || videoElements.length === 0) return;

    videoElements.forEach(video => {
      try {
        // Сбрасываем атрибуты видео, заставляя его выгрузиться
        if (video) {
          // Пауза видео
          if (!video.paused) {
            video.pause();
          }

          // Сброс источника видео для освобождения памяти
          video.removeAttribute('src');

          // Сброс источников для тегов source
          const sources = video.querySelectorAll('source');
          if (sources && sources.length > 0) {
            sources.forEach(source => {
              source.removeAttribute('src');
            });
          }

          // Принудительная выгрузка ресурсов
          video.load();

          // Скрываем видео и показываем плейсхолдер
          video.style.display = 'none';
          const container = video.parentElement;
          if (container) {
            const placeholder = container.querySelector('.video-placeholder');
            const playButton = container.querySelector('.video-play-button');

            if (placeholder) {
              placeholder.style.display = 'flex';
            }

            if (playButton) {
              playButton.style.display = 'flex';
            }
          }
        }
      } catch (error) {
        console.error('Ошибка при остановке видео:', error);
      }
    });

    // Очищаем массив видео
    videoElements = [];
  }

  // Уничтожение и очистка модального окна
  function destroy() {
    close();

    if (modalElement && parentElement.contains(modalElement)) {
      parentElement.removeChild(modalElement);
    }

    modalElement = null;
    feature = null;
  }

  // Возвращаем публичные методы
  return {
    open,
    close,
    destroy,
  };
}

// Экспорт по умолчанию для поддержки импорта
export default { createModalAbout };
