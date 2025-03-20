/**
 * @fileoverview Hero section initialization module
 * @description Contains functions for hero section setup, image management,
 * responsiveness, and event handlers for buttons.
 */

/**
 * Initializes the Hero section on the page.
 * Sets up images, handles load events, configures responsiveness and animations.
 * @returns {void}
 */
export function initHero() {
  console.log('Hero section initialized');

  // DOM elements
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

  // Хранение ссылок на обсерверы для корректного удаления
  let contentObserver = null;

  /**
   * Sets up hero section images.
   * Establishes event handlers for the main image.
   * @private
   */
  function setupHeroImage() {
    if (!heroImage) {
      console.error('Hero image element not found');
      return;
    }

    console.log('Setting up hero image');

    // Event handlers
    heroImage.onerror = () => {
      console.error('Failed to load hero image:', heroImage.src);

      try {
        // Получаем первый элемент из srcset как запасной вариант
        const srcsetParts = heroImage.getAttribute('srcset');
        if (srcsetParts) {
          const parts = srcsetParts.split(',');
          if (parts && parts.length > 0) {
            const fallbackSrc = parts[0].split(' ')[0]; // Берем первый источник из srcset
            console.log('Using fallback image:', fallbackSrc);
            heroImage.src = fallbackSrc;
          }
        }
      } catch (error) {
        console.error('Error setting fallback image:', error);
      }

      heroSection?.classList.add('hero--loaded'); // Still show the section
    };

    heroImage.onload = () => {
      console.log('Hero image loaded successfully');
      heroSection?.classList.add('hero--loaded');
    };

    // Add decoding attribute for better performance
    heroImage.decoding = 'async';

    // If the image is already loaded (from cache)
    if (heroImage.complete) {
      console.log('Hero image already loaded (from cache)');
      heroSection?.classList.add('hero--loaded');
    }
  }

  /**
   * Adapts content for different screen sizes.
   * Toggles between mobile and desktop versions of the description.
   * @private
   */
  function adjustForViewport() {
    const isDesktop = window.innerWidth > 992;

    if (desktopDescription && mobileDescription && heroPricing) {
      if (isDesktop) {
        desktopDescription.style.display = 'block';
        mobileDescription.style.display = 'none';
      } else {
        desktopDescription.style.display = 'none';
        mobileDescription.style.display = 'block';
      }
    }
  }

  /**
   * Sets up content appearance animation on scroll.
   * Uses IntersectionObserver to determine element visibility.
   * @private
   */
  function setupContentAnimation() {
    if (!heroContent) return;

    // Удаляем предыдущий observer если он существует
    if (contentObserver) {
      contentObserver.disconnect();
    }

    contentObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Отключаем наблюдение после анимации
            contentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    contentObserver.observe(heroContent);
  }

  /**
   * Sets up event handlers for section buttons.
   * @private
   */
  function setupButtonHandlers() {
    // Handler for buy button
    if (buyButton) {
      // Удаляем предыдущие обработчики, чтобы избежать дублирования
      buyButton.removeEventListener('click', handleBuyButtonClick);
      buyButton.addEventListener('click', handleBuyButtonClick);
    }

    // Handler for "More details" button
    if (moreDetailsButton) {
      // Удаляем предыдущие обработчики, чтобы избежать дублирования
      moreDetailsButton.removeEventListener('click', handleMoreDetailsClick);
      moreDetailsButton.addEventListener('click', handleMoreDetailsClick);
    }
  }

  /**
   * Обработчик клика по кнопке Buy
   * @private
   */
  function handleBuyButtonClick() {
    try {
      // Open product link in new tab
      window.open(
        'https://www.aliexpress.com/item/1005007171465465.html',
        '_blank',
        'noopener,noreferrer'
      );
    } catch (error) {
      console.error('Error opening product link:', error);
    }
  }

  /**
   * Handles click on "More details" button.
   * Performs smooth scrolling to features section.
   * @param {Event} e - Click event
   * @private
   */
  function handleMoreDetailsClick(e) {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    const header = document.querySelector('.header');

    if (featuresSection && header) {
      try {
        // Account for fixed header height when scrolling
        const headerHeight = header.offsetHeight;
        const elementPosition = featuresSection.getBoundingClientRect().top;
        const currentScrollY = window.scrollY || window.pageYOffset;
        const offsetPosition = elementPosition + currentScrollY - headerHeight;

        // Smooth scroll to features section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update URL without page reload
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}#features`
        );
      } catch (error) {
        console.error('Error scrolling to features:', error);

        // Запасной вариант - обычный переход по якорю
        window.location.hash = 'features';
      }
    }
  }

  /**
   * Функция очистки слушателей и наблюдателей
   * @private
   */
  function cleanup() {
    // Отключаем IntersectionObserver
    if (contentObserver) {
      contentObserver.disconnect();
      contentObserver = null;
    }

    // Удаляем слушатель событий resize
    window.removeEventListener('resize', adjustForViewport);

    // Удаляем обработчики кнопок
    if (buyButton) {
      buyButton.removeEventListener('click', handleBuyButtonClick);
    }

    if (moreDetailsButton) {
      moreDetailsButton.removeEventListener('click', handleMoreDetailsClick);
    }
  }

  // Component initialization
  setupHeroImage();
  adjustForViewport();
  setupContentAnimation();
  setupButtonHandlers();

  // Listen for window resize event
  window.removeEventListener('resize', adjustForViewport); // Удаляем предыдущие
  window.addEventListener('resize', adjustForViewport);

  // Добавляем обработчик для очистки при уничтожении секции
  if (typeof window !== 'undefined') {
    window.addEventListener('unload', cleanup);
  }

  // Возвращаем функцию очистки
  return cleanup;
}
