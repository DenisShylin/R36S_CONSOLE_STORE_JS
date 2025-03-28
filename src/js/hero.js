/**
 * @fileoverview Hero section initialization module
 * @description Содержит функции для инициализации секции Hero, управления изображениями,
 * адаптивности и обработки событий кнопок.
 */

/**
 * Инициализирует секцию Hero на странице.
 * Настраивает изображения, обработку событий загрузки, адаптивность и анимации.
 * @returns {Function} Функция очистки для удаления обработчиков событий и наблюдателей
 */
export function initHero() {
  // DOM-элементы
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__console-img');
  const heroContent = document.querySelector('.hero__content');
  const desktopDescription = document.querySelector(
    '.hero__description--desktop'
  );
  const mobileDescription = document.querySelector(
    '.hero__description--mobile'
  );
  const heroPricing = document.querySelector('.hero__pricing');
  const buyButton = document.getElementById('buy-button');
  const moreDetailsButton = document.getElementById('more-details-button');

  // Хранение ссылки на обсервер для корректного удаления
  let contentObserver = null;
  let resizeTimeout;
  let languageChangeListener = null;

  /**
   * Настраивает изображение секции Hero.
   * Устанавливает обработчики событий для основного изображения.
   * @private
   */
  function setupHeroImage() {
    if (!heroImage || !heroSection) return;

    // Обработчики событий
    heroImage.onload = () => heroSection.classList.add('hero--loaded');
    heroImage.onerror = () => {
      console.error('Не удалось загрузить изображение:', heroImage.src);
      // В любом случае показываем секцию
      heroSection.classList.add('hero--loaded');
    };

    // Если изображение уже загружено (из кэша)
    if (heroImage.complete) {
      heroSection.classList.add('hero--loaded');
    }
  }

  /**
   * Адаптирует контент для разных размеров экрана.
   * Переключает между мобильной и десктопной версиями описания.
   * @private
   */
  function adjustForViewport() {
    if (!desktopDescription || !mobileDescription) return;

    const isDesktop = window.innerWidth > 992;

    desktopDescription.style.display = isDesktop ? 'block' : 'none';
    mobileDescription.style.display = isDesktop ? 'none' : 'block';
  }

  /**
   * Настраивает анимацию появления контента при прокрутке.
   * Использует IntersectionObserver для определения видимости элемента.
   * @private
   */
  function setupContentAnimation() {
    if (!heroContent) return;

    // Удаляем предыдущий observer если он существует
    if (contentObserver) {
      contentObserver.disconnect();
      contentObserver = null;
    }

    contentObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target?.isConnected) {
            entry.target.classList.add('animate-in');
            // Отключаем наблюдение после анимации
            contentObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Наблюдаем за элементом контента
    if (heroContent.isConnected) {
      contentObserver.observe(heroContent);
    }
  }

  /**
   * Настраивает обработчики событий для кнопок секции.
   * @private
   */
  function setupButtonHandlers() {
    // Обработчик для кнопки покупки
    if (buyButton) {
      buyButton.addEventListener('click', handleBuyButtonClick);
    }

    // Обработчик для кнопки "More details"
    if (moreDetailsButton) {
      moreDetailsButton.addEventListener('click', handleMoreDetailsClick);
    }
  }

  /**
   * Обработчик клика по кнопке Buy
   * @private
   */
  function handleBuyButtonClick() {
    window.open(
      'https://www.aliexpress.com/item/1005007171465465.html',
      '_blank',
      'noopener,noreferrer'
    );
  }

  /**
   * Обрабатывает клик по кнопке "More details".
   * Выполняет плавную прокрутку к секции features.
   * @param {Event} e - Событие клика
   * @private
   */
  function handleMoreDetailsClick(e) {
    e.preventDefault();
    const featuresSection = document.getElementById('features');

    if (!featuresSection) {
      window.location.hash = 'features';
      return;
    }

    // Получаем позицию секции без учета высоты хедера
    const elementPosition = featuresSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY;

    // Плавная прокрутка к секции features
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Обновляем URL без перезагрузки страницы
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}#features`
    );
  }

  /**
   * Настройка обработчика события изменения языка
   * @private
   */
  function setupLanguageChangeListener() {
    // Функция обработчик события изменения языка
    const handleLanguageChange = event => {
      console.log('Language changed in Hero section:', event.detail.language);

      // Здесь можно дополнительно обновить динамические элементы,
      // которые не обновляются автоматически через data-i18n атрибуты

      // Например, обновить специфические для языка стили
      if (event.detail.language === 'ar') {
        // Специальные настройки для арабского языка (RTL)
        if (heroContent) heroContent.classList.add('rtl-content');
      } else {
        // Удаляем специальные настройки для RTL
        if (heroContent) heroContent.classList.remove('rtl-content');
      }
    };

    // Добавляем слушатель события изменения языка
    window.addEventListener('languageChanged', handleLanguageChange);

    // Сохраняем ссылку на функцию для последующего удаления
    languageChangeListener = handleLanguageChange;
  }

  /**
   * Функция очистки слушателей и наблюдателей
   * @private
   */
  function cleanup() {
    // Отключаем IntersectionObserver
    if (contentObserver) {
      contentObserver.disconnect();
    }

    // Очищаем таймаут resize
    clearTimeout(resizeTimeout);
    window.removeEventListener('resize', handleResize);

    // Удаляем обработчики кнопок
    if (buyButton) {
      buyButton.removeEventListener('click', handleBuyButtonClick);
    }

    if (moreDetailsButton) {
      moreDetailsButton.removeEventListener('click', handleMoreDetailsClick);
    }

    // Удаляем обработчик изменения языка
    if (languageChangeListener) {
      window.removeEventListener('languageChanged', languageChangeListener);
    }
  }

  // Обработчик resize с дебаунсингом
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustForViewport, 200);
  }

  // Инициализация компонента
  setupHeroImage();
  adjustForViewport();
  setupContentAnimation();
  setupButtonHandlers();
  setupLanguageChangeListener();

  // Слушаем событие изменения размера окна
  window.addEventListener('resize', handleResize);

  // Возвращаем функцию очистки
  return cleanup;
}
