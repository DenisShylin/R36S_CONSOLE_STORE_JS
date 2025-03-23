// modalabout.js
// Фабричная функция для создания модального окна
export function createModalAbout(parentElement) {
  let modalElement = null;
  let feature = null;
  let isOpen = false;
  let currentImageIndex = 0;
  let colorImagesInterval = null;

  // Получаем базовый путь приложения (для корректных путей на GitHub Pages)
  const basePath = window.appVersion?.basePath || '/';

  // Функция для безопасного кодирования строк в base64 (включая Unicode)
  function safeBase64Encode(str) {
    // Сначала преобразуем Unicode-строку в UTF-8
    const utf8Str = encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      (_, p1) => String.fromCharCode('0x' + p1)
    );
    // Затем конвертируем в base64
    return btoa(utf8Str);
  }

  // Плейсхолдер для изображений (только ASCII символы)
  const imagePlaceholderSvg =
    '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#333"/><text x="50%" y="50%" font-size="24" text-anchor="middle" alignment-baseline="middle" fill="#fff">Image</text></svg>';

  // Плейсхолдер для видео (только ASCII символы)
  const videoPlaceholderSvg =
    '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#333"/><text x="50%" y="50%" font-size="24" text-anchor="middle" alignment-baseline="middle" fill="#fff">Loading Video...</text></svg>';

  // Кодируем плейсхолдеры с помощью нашей безопасной функции
  const encodedImagePlaceholder = safeBase64Encode(imagePlaceholderSvg);
  const encodedVideoPlaceholder = safeBase64Encode(videoPlaceholderSvg);

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

  // Предзагрузка изображения
  function preloadImage(url) {
    if (!url) return Promise.reject(new Error('URL not provided'));

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url.startsWith('/') ? `${basePath}${url.slice(1)}` : url;
    });
  }

  // Рендер медиа-контента (изображение, видео или карусель)
  function renderMedia() {
    if (!feature) return '';

    // Обработка карусели цветов
    if (
      feature.title === 'Extensive color selection' &&
      Array.isArray(feature.colorImages) &&
      feature.colorImages.length > 0
    ) {
      // Предзагрузка первого изображения
      if (feature.colorImages[0]) {
        preloadImage(feature.colorImages[0]).catch(err =>
          console.warn('Error preloading image:', err)
        );
      }

      const imageUrl = feature.colorImages[currentImageIndex] || '';
      const formattedUrl = imageUrl.startsWith('/')
        ? `${basePath}${imageUrl.slice(1)}`
        : imageUrl;

      return `
        <img
          src="${formattedUrl}"
          alt="R36S Color Variant ${currentImageIndex + 1}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,${encodedImagePlaceholder}';"
        />
      `;
    }

    // Обработка видео
    if (feature.videoUrl) {
      const videoUrl = feature.videoUrl.startsWith('/')
        ? `${basePath}${feature.videoUrl.slice(1)}`
        : feature.videoUrl;

      return `
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="metadata"
          width="640" 
          height="360"
          poster="data:image/svg+xml;base64,${encodedVideoPlaceholder}"
        >
          <source src="${videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `;
    }

    // Обработка статичного изображения
    if (feature.imageUrl) {
      const imageUrl = feature.imageUrl.startsWith('/')
        ? `${basePath}${feature.imageUrl.slice(1)}`
        : feature.imageUrl;

      // Предзагрузка изображения
      preloadImage(imageUrl).catch(err =>
        console.warn('Error preloading image:', err)
      );

      return `
        <img
          src="${imageUrl}"
          alt="${feature.imageAlt || 'Feature image'}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,${encodedImagePlaceholder}';"
        />
      `;
    }

    // Плейсхолдер если нет медиа-контента
    return `
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${feature.imageAlt || 'Feature Image'}
      </div>
    `;
  }

  // Настройка автоматической смены изображений цветов
  function setupColorImagesRotation() {
    if (
      feature?.title === 'Extensive color selection' &&
      Array.isArray(feature.colorImages) &&
      feature.colorImages.length > 0
    ) {
      // Очистка существующего интервала
      if (colorImagesInterval) {
        clearInterval(colorImagesInterval);
        colorImagesInterval = null;
      }

      // Настройка нового интервала для смены изображений
      colorImagesInterval = setInterval(() => {
        // Безопасная смена индекса с проверкой массива
        currentImageIndex =
          (currentImageIndex + 1) % feature.colorImages.length;

        // Обновление источника изображения
        const imageElement = modalElement?.querySelector('.modal-about-image');
        if (imageElement && feature.colorImages[currentImageIndex]) {
          const imageUrl = feature.colorImages[currentImageIndex];
          const formattedUrl = imageUrl.startsWith('/')
            ? `${basePath}${imageUrl.slice(1)}`
            : imageUrl;

          // Предзагрузка следующего изображения
          const nextIndex =
            (currentImageIndex + 1) % feature.colorImages.length;
          if (feature.colorImages[nextIndex]) {
            preloadImage(feature.colorImages[nextIndex]).catch(() => {});
          }

          imageElement.src = formattedUrl;
          imageElement.alt = `R36S Color Variant ${currentImageIndex + 1}`;
        }
      }, 1000);
    }
  }

  // Генерация структурированных данных для JSON-LD
  function generateStructuredData(feature) {
    if (!feature) return null;

    // Базовый объект структурированных данных
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
            name: 'How many games are included in the R36S console?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The R36S console includes over 15,000 classic retro games from various platforms.',
            },
          },
        ],
      };
    }

    return structuredData;
  }

  // Обновление содержимого модального окна с добавлением структурированных данных
  function updateModalContent() {
    if (!modalElement || !feature) return;

    // Создаем структурированные данные для текущей функции
    const structuredData = generateStructuredData(feature);

    // JSON-LD для структурированных данных
    const structuredDataScript = structuredData
      ? `<script type="application/ld+json">${JSON.stringify(
          structuredData
        )}</script>`
      : '';

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
          
          <button class="modal-about-close" aria-label="Close modal">
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
          
          <div class="modal-about-header">
            <div class="modal-about-icon-wrapper" aria-hidden="true">${
              feature.icon
            }</div>
            <h3 class="modal-about-title" itemprop="name">${feature.title}</h3>
          </div>

          <div class="modal-about-body">
            <div class="modal-about-media-container" itemprop="image">
              ${renderMedia()}
            </div>
            
            <div class="modal-about-content-container">
              <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <div class="modal-about-price-wrapper">
                  <span class="modal-about-original-price">US $108.06</span>
                  <span class="modal-about-current-price" itemprop="price" content="35.48">
                    $35.48
                    <span style="font-size: 24px" itemprop="priceCurrency" content="USD">US</span>
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
                  <span class="modal-about-button-pulse"></span>
                  <span class="modal-about-button-text">BUY NOW -68%</span>
                  <span class="modal-about-button-shine"></span>
                </a>
              </div>

              <div class="modal-about-description" itemprop="description">
                ${feature.fullDescription}
              </div>
            </div>
          </div>
        </div>
    `;

    // Настройка кнопки закрытия
    const closeButton = modalElement.querySelector('.modal-about-close');
    if (closeButton) {
      closeButton.addEventListener('click', event => {
        event.stopPropagation();
        close();
      });
    }

    // Обработка всплытия событий для контента модального окна
    const modalContent = modalElement.querySelector('.modal-about-content');
    if (modalContent) {
      modalContent.addEventListener('click', e => e.stopPropagation());
    }
  }

  // Открытие модального окна с поддержкой истории браузера
  function open(featureData) {
    feature = featureData;

    if (!feature) {
      console.error(
        'Не удалось открыть модальное окно: данные функции не предоставлены'
      );
      return { close };
    }

    // Создаем модальный элемент если его еще нет
    if (!modalElement) {
      modalElement = createModalElement();
    }

    // Обновление содержимого модального окна
    updateModalContent();

    // Сохраняем текущий URL для возврата при закрытии
    const currentUrl = window.location.href;

    // Добавляем параметр в URL для поддержки истории
    try {
      const newUrl = new URL(currentUrl);
      newUrl.searchParams.set('feature', feature.id);
      window.history.pushState({ featureId: feature.id }, '', newUrl);
    } catch (error) {
      console.warn('Ошибка при обновлении URL:', error);
    }

    // Отображение модального окна
    requestAnimationFrame(() => {
      if (modalElement) {
        modalElement.style.display = 'flex';

        // Добавляем класс для анимации появления
        setTimeout(() => {
          modalElement.classList.add('active');
        }, 10);

        isOpen = true;

        // Фокус на модальном окне для клавиатурной навигации
        modalElement.focus();
      }
    });

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

    // Удаление класса активности для анимации
    modalElement.classList.remove('active');

    // Задержка перед скрытием модального окна для анимации
    setTimeout(() => {
      isOpen = false;
      if (modalElement) {
        modalElement.style.display = 'none';
      }

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
      try {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete('feature');
        window.history.pushState({}, '', currentUrl);
      } catch (error) {
        console.warn('Ошибка при обновлении URL:', error);
      }
    }, 300); // 300ms для анимации закрытия
  }

  // Уничтожение и очистка модального окна
  function destroy() {
    close();

    // Удаляем элемент модального окна после задержки (для анимации)
    setTimeout(() => {
      if (modalElement && parentElement.contains(modalElement)) {
        parentElement.removeChild(modalElement);
      }

      modalElement = null;
      feature = null;
    }, 350);
  }

  // Возвращаем публичные методы
  return {
    open,
    close,
    destroy,
  };
}

// Экспорт функции
export default { createModalAbout };
