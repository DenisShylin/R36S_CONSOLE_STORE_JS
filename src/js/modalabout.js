// modalabout.js
// Фабричная функция для создания модального окна
export function createModalAbout(parentElement) {
  let modalElement = null;
  let feature = null;
  let isOpen = false;
  let currentImageIndex = 0;
  let colorImagesInterval = null;

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

  // Рендер медиа-контента (изображение, видео или карусель)
  function renderMedia() {
    if (!feature) return '';

    // Обработка карусели цветов
    if (feature.title === 'Extensive color selection' && feature.colorImages) {
      return `
      <img
        src="${feature.colorImages[currentImageIndex]}"
        alt="R36S Color Variant ${currentImageIndex + 1}"
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

      // Обработка MP4 (отображаем как видео без элементов управления)
      if (isMp4) {
        return `
      <div class="gif-container">
        <video
          class="modal-about-image"
          autoplay
          muted
          loop
          playsInline
          width="400" 
          height="400"
        >
          <source src="${feature.videoUrl}" type="video/mp4" />
        </video>
      </div>
      `;
      }

      // Обработка GIF
      return `
      <img
        src="${feature.videoUrl}"
        alt="${feature.imageAlt || 'Feature animation'}"
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

      // Обработка MP4 в imageUrl (отображаем как видео без элементов управления)
      if (isMp4) {
        return `
      <div class="gif-container">
        <video
          class="modal-about-image"
          autoplay
          muted
          loop
          playsInline
          width="400" 
          height="400"
        >
          <source src="${feature.imageUrl}" type="video/mp4" />
        </video>
      </div>
      `;
      }

      // Обработка обычного изображения
      return `
      <img
        src="${feature.imageUrl}"
        alt="${feature.imageAlt || 'Feature image'}"
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
    <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
      ${feature.imageAlt || 'Feature Image'}
    </div>
  `;
  }
  // Настройка автоматической смены изображений цветов
  function setupColorImagesRotation() {
    if (feature?.title === 'Extensive color selection' && feature.colorImages) {
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
          imageElement.alt = `R36S Color Variant ${currentImageIndex + 1}`;
        }
      }, 1000);
    }
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
            name: 'How many games are included in the R36S console?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The R36S console includes over 15,000 classic retro games from various platforms.',
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
      closeButton.addEventListener('click', close);
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
