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
        <div class="media-placeholder" data-type="image">
          <div class="placeholder-spinner"></div>
        </div>
        <img
          src="${feature.colorImages[currentImageIndex]}"
          alt="R36S Color Variant ${currentImageIndex + 1}"
          class="modal-about-image hidden"
          loading="lazy"
          width="400" 
          height="400"
        />
      `;
    }

    // Обработка видео
    if (feature.videoUrl) {
      return `
        <div class="media-placeholder" data-type="video">
          <div class="placeholder-spinner"></div>
        </div>
        <video
          class="modal-about-video hidden"
          autoplay
          muted
          loop
          playsInline
          preload="metadata"
          width="640" 
          height="360"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${feature.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `;
    }

    // Обработка статичного изображения (включая GIF)
    return feature.imageUrl
      ? `
      <div class="media-placeholder" data-type="image">
        <div class="placeholder-spinner"></div>
      </div>
      <img
        src="${feature.imageUrl}${
          feature.imageUrl.includes('.gif') ? '?' + new Date().getTime() : ''
        }"
        alt="${feature.imageAlt || 'Feature image'}"
        class="modal-about-image hidden"
        loading="lazy"
        width="400" 
        height="400"
      />
    `
      : `
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
          // Добавляем временную метку для GIF, чтобы избежать кеширования
          const timestamp = new Date().getTime();
          const newSrc = feature.colorImages[currentImageIndex].includes('.gif')
            ? `${feature.colorImages[currentImageIndex]}?${timestamp}`
            : feature.colorImages[currentImageIndex];

          // Сначала добавляем класс hidden
          imageElement.classList.add('hidden');

          // Обновляем источник и alt текст
          imageElement.src = newSrc;
          imageElement.alt = `R36S Color Variant ${currentImageIndex + 1}`;
        }
      }, 1000);
    }
  }

  // Функция для настройки обработчиков событий медиафайлов
  function setupMediaHandlers() {
    console.log('Настройка обработчиков медиафайлов');

    try {
      // Обработчики для изображений
      const images = modalElement.querySelectorAll('.modal-about-image');
      console.log('Найдено изображений:', images.length);

      images.forEach((img, index) => {
        console.log(`Настройка обработчика для изображения ${index}`);

        // Если изображение уже загружено (например, из кеша)
        if (img.complete && img.naturalWidth !== 0) {
          console.log(`Изображение ${index} уже загружено из кеша`);
          img.classList.remove('hidden');
          const placeholder = img.previousElementSibling;
          if (
            placeholder &&
            placeholder.classList.contains('media-placeholder')
          ) {
            placeholder.remove();
          }
        } else {
          // Добавляем обработчик для события загрузки
          img.addEventListener('load', function () {
            console.log('Изображение загружено:', this.src);
            this.classList.remove('hidden');
            const placeholder = this.previousElementSibling;
            if (
              placeholder &&
              placeholder.classList.contains('media-placeholder')
            ) {
              placeholder.remove();
            }
          });

          // Добавляем обработчик ошибок загрузки
          img.addEventListener('error', function () {
            console.error('Ошибка загрузки изображения:', this.src);
            // Показываем плейсхолдер ошибки вместо изображения
            this.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+RXJyb3IgbG9hZGluZyBpbWFnZTwvdGV4dD48L3N2Zz4=';
            this.classList.remove('hidden');
            const placeholder = this.previousElementSibling;
            if (
              placeholder &&
              placeholder.classList.contains('media-placeholder')
            ) {
              placeholder.remove();
            }
          });
        }
      });

      // Обработчики для видео
      const videos = modalElement.querySelectorAll('.modal-about-video');
      console.log('Найдено видео:', videos.length);

      videos.forEach((video, index) => {
        console.log(`Настройка обработчика для видео ${index}`);

        // Проверяем, если видео уже готово к воспроизведению
        if (video.readyState >= 2) {
          // HAVE_CURRENT_DATA или выше
          console.log(`Видео ${index} уже загружено из кеша`);
          video.classList.remove('hidden');
          const placeholder = video.previousElementSibling;
          if (
            placeholder &&
            placeholder.classList.contains('media-placeholder')
          ) {
            placeholder.remove();
          }
        } else {
          // Добавляем обработчик для события загрузки данных видео
          video.addEventListener('loadeddata', function () {
            console.log('Видео загружено:', this.querySelector('source')?.src);
            this.classList.remove('hidden');
            const placeholder = this.previousElementSibling;
            if (
              placeholder &&
              placeholder.classList.contains('media-placeholder')
            ) {
              placeholder.remove();
            }
          });

          // Добавляем обработчик ошибок загрузки
          video.addEventListener('error', function () {
            console.error(
              'Ошибка загрузки видео:',
              this.querySelector('source')?.src
            );
            // Показываем плейсхолдер ошибки вместо видео
            const errorPlaceholder = document.createElement('div');
            errorPlaceholder.className = 'modal-about-video-error';
            errorPlaceholder.innerHTML = 'Error loading video';
            errorPlaceholder.style.cssText =
              'background-color: #ff3333; color: white; padding: 20px; text-align: center; border-radius: 8px;';

            this.parentNode.replaceChild(errorPlaceholder, this);
            const placeholder = errorPlaceholder.previousElementSibling;
            if (
              placeholder &&
              placeholder.classList.contains('media-placeholder')
            ) {
              placeholder.remove();
            }
          });
        }
      });
    } catch (error) {
      console.error('Ошибка при настройке обработчиков медиафайлов:', error);
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

    // Настраиваем обработчики событий для медиафайлов
    setupMediaHandlers();
  }

  // Открытие модального окна с поддержкой истории браузера
  function open(featureData) {
    console.log('Открытие модального окна для:', featureData.title);
    feature = featureData;

    if (!modalElement) {
      console.log('Создание нового модального элемента');
      modalElement = createModalElement();
    }

    // Обновление содержимого модального окна
    console.log('Обновление содержимого модального окна');
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

    console.log('Закрытие модального окна');
    isOpen = false;
    modalElement.style.display = 'none';

    // Удаление обработчиков событий
    window.removeEventListener('keydown', handleEscPress);
    window.removeEventListener('popstate', handlePopState);
    document.body.style.overflow = 'visible';

    // Очистка интервала смены изображений
    if (colorImagesInterval) {
      console.log('Очистка интервала смены изображений');
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
