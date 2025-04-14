/**
 * @fileoverview Hero section initialization module - оптимизированная версия
 * @description Содержит функции для инициализации секции Hero с фокусом на производительности
 */

import { getLocalizedPrice } from './utils/priceFormatter';

/**
 * Инициализирует секцию Hero на странице.
 * @returns {Function} Функция очистки для удаления обработчиков событий
 */
export function initHero() {
  // Кэшируем селекторы в одном месте для повышения производительности
  const selectors = {
    heroSection: document.querySelector('.hero'),
    heroImage: document.querySelector('.hero__console-img'),
    heroContent: document.querySelector('.hero__content'),
    desktopDesc: document.querySelector('.hero__description--desktop'),
    mobileDesc: document.querySelector('.hero__description--mobile'),
    heroPricing: document.querySelector('.hero__pricing'),
    buyButton: document.getElementById('buy-button'),
    moreDetailsButton: document.getElementById('more-details-button'),
    currentPrice: document.querySelector('.hero__current-price'),
    originalPrice: document.querySelector('.hero__original-price'),
    discountBadge: document.querySelector('.hero__discount-badge'),
    placeholder: document.querySelector('.hero__placeholder'),
  };

  let contentObserver = null;
  let resizeTimeout;
  let languageChangeHandler;

  // Избегаем повторную обработку для удаленных из DOM элементов
  const isValidContext = () => {
    return (
      selectors.heroSection && document.body.contains(selectors.heroSection)
    );
  };

  /**
   * Обновляет цены на основе текущего языка - оптимизированная версия
   */
  function updatePrices() {
    if (!isValidContext()) return;

    try {
      const { currentPrice, originalPrice, discountBadge } = selectors;

      // Используем одну проверку вместо трех отдельных
      const priceData = {
        current: currentPrice ? getLocalizedPrice('current') : null,
        original: originalPrice ? getLocalizedPrice('original') : null,
        discount: discountBadge ? getLocalizedPrice('discount') : null,
      };

      // Применяем все изменения в одной операции requestAnimationFrame
      if (Object.values(priceData).some(Boolean)) {
        requestAnimationFrame(() => {
          if (priceData.current && currentPrice)
            currentPrice.innerHTML = priceData.current;
          if (priceData.original && originalPrice)
            originalPrice.textContent = priceData.original;
          if (priceData.discount && discountBadge)
            discountBadge.textContent = priceData.discount;
        });
      }
    } catch (error) {
      console.error('Ошибка при обновлении цен:', error);
    }
  }

  /**
   * Оптимизированная настройка изображения секции Hero.
   */
  function setupHeroImage() {
    const { heroImage, heroSection, placeholder } = selectors;
    if (!heroImage || !heroSection) return;

    try {
      // Упрощаем управление классами для улучшения производительности
      const updateImageState = isLoaded => {
        if (!isValidContext()) return;

        requestAnimationFrame(() => {
          heroSection.classList.toggle('hero--loading', !isLoaded);
          heroSection.classList.toggle('hero--loaded', isLoaded);

          // Обработка placeholder если он существует
          if (placeholder && isLoaded) {
            placeholder.style.opacity = '0';
          }
        });
      };

      // Устанавливаем начальное состояние
      updateImageState(heroImage.complete);

      // Обработка загрузки только если изображение еще не загружено
      if (!heroImage.complete) {
        heroImage.onload = () => updateImageState(true);
        heroImage.onerror = () => {
          console.error('Не удалось загрузить изображение:', heroImage.src);
          updateImageState(true); // Все равно отображаем секцию
        };
      }
    } catch (error) {
      console.error('Ошибка при настройке изображения в Hero секции:', error);
      if (isValidContext()) {
        heroSection.classList.remove('hero--loading');
        heroSection.classList.add('hero--loaded');
      }
    }
  }

  /**
   * Адаптирует контент для разных размеров экрана - оптимизированная версия.
   */
  function adjustForViewport() {
    if (!isValidContext()) return;

    const { desktopDesc, mobileDesc } = selectors;
    if (!desktopDesc || !mobileDesc) return;

    const isDesktop = window.innerWidth > 992;

    // Делаем одну операцию обновления DOM вместо двух отдельных
    requestAnimationFrame(() => {
      desktopDesc.style.display = isDesktop ? 'block' : 'none';
      mobileDesc.style.display = isDesktop ? 'none' : 'block';
    });
  }

  /**
   * Настраивает анимацию появления контента - оптимизированная версия.
   */
  function setupContentAnimation() {
    const { heroContent } = selectors;
    if (!heroContent || !isValidContext()) return;

    // Избегаем ненужных проверок для классов
    if (!heroContent.classList.contains('animate-in')) {
      // Используем прямую анимацию вместо таймаута для ускорения LCP
      requestAnimationFrame(() => {
        heroContent.classList.add('animate-in');
      });
    }

    // Оптимизированная обработка анимации для других элементов
    const nonCriticalElements = document.querySelectorAll('.animate-on-scroll');
    if (nonCriticalElements.length > 0 && 'IntersectionObserver' in window) {
      // Инициализируем observer только если есть элементы для наблюдения
      if (contentObserver) contentObserver.disconnect();

      contentObserver = new IntersectionObserver(
        entries => {
          // Обрабатываем всю пачку элементов в одном цикле
          const elementsToAnimate = entries
            .filter(entry => entry.isIntersecting && entry.target?.isConnected)
            .map(entry => {
              contentObserver.unobserve(entry.target);
              return entry.target;
            });

          // Анимируем все элементы в одном requestAnimationFrame
          if (elementsToAnimate.length) {
            requestAnimationFrame(() => {
              elementsToAnimate.forEach(el => el.classList.add('animate-in'));
            });
          }
        },
        { threshold: 0.1 }
      );

      // Наблюдаем только за подключенными элементами
      nonCriticalElements.forEach(element => {
        if (element.isConnected) {
          contentObserver.observe(element);
        }
      });
    }
  }

  /**
   * Настраивает обработчики событий для кнопок секции - оптимизированная версия.
   */
  function setupButtonHandlers() {
    const { buyButton, moreDetailsButton } = selectors;

    // Делегируем обработку событий родительскому элементу для уменьшения количества обработчиков
    const heroButtonsWrapper = document.querySelector('.hero__buttons');
    if (heroButtonsWrapper) {
      heroButtonsWrapper.addEventListener('click', e => {
        if (e.target.closest('#buy-button')) {
          e.preventDefault();
          window.open(
            'https://www.aliexpress.com/item/1005007171465465.html',
            '_blank',
            'noopener,noreferrer'
          );
        } else if (e.target.closest('#more-details-button')) {
          e.preventDefault();
          const featuresSection = document.getElementById('features');

          if (featuresSection) {
            const elementPosition = featuresSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY;

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
          } else {
            window.location.hash = 'features';
          }
        }
      });
    } else {
      // Резервный вариант, если делегирование невозможно
      if (buyButton) {
        buyButton.addEventListener('click', e => {
          e.preventDefault();
          window.open(
            'https://www.aliexpress.com/item/1005007171465465.html',
            '_blank',
            'noopener,noreferrer'
          );
        });
      }

      if (moreDetailsButton) {
        moreDetailsButton.addEventListener('click', e => {
          e.preventDefault();
          const featuresSection = document.getElementById('features');

          if (featuresSection) {
            const elementPosition = featuresSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });

            window.history.replaceState(
              null,
              '',
              `${window.location.pathname}#features`
            );
          } else {
            window.location.hash = 'features';
          }
        });
      }
    }
  }

  /**
   * Настраивает обработчики событий для смены языка - оптимизированная версия
   */
  function setupLanguageChangeListener() {
    if (!isValidContext()) return;

    languageChangeHandler = event => {
      if (!isValidContext()) return;

      updatePrices();

      // Оптимизация обработки RTL языков
      const rtlLanguages = ['ar'];
      const currentLang = event?.detail?.language || 'en';
      const isRTL = rtlLanguages.includes(currentLang);

      requestAnimationFrame(() => {
        selectors.heroSection.classList.toggle('rtl', isRTL);
      });
    };

    // Слушаем событие смены языка
    window.addEventListener('languageChanged', languageChangeHandler);
  }

  // Оптимизированный обработчик resize с дебаунсингом и throttling
  function handleResize() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    // Увеличиваем задержку для уменьшения количества вызовов функции
    resizeTimeout = setTimeout(() => {
      adjustForViewport();
    }, 250);
  }

  /**
   * Функция очистки слушателей и наблюдателей - оптимизированная версия
   */
  function cleanup() {
    // Оптимизированная очистка ресурсов
    if (contentObserver) {
      contentObserver.disconnect();
      contentObserver = null;
    }

    clearTimeout(resizeTimeout);
    window.removeEventListener('resize', handleResize);

    if (languageChangeHandler) {
      window.removeEventListener('languageChanged', languageChangeHandler);
    }

    // Очищаем обработчики с учетом делегирования событий
    const heroButtonsWrapper = document.querySelector('.hero__buttons');
    if (heroButtonsWrapper) {
      heroButtonsWrapper.removeEventListener('click', null);
    } else {
      // Резервный вариант
      const { buyButton, moreDetailsButton } = selectors;
      if (buyButton) buyButton.removeEventListener('click', null);
      if (moreDetailsButton)
        moreDetailsButton.removeEventListener('click', null);
    }
  }

  // Инициализация компонента с приоритетами - оптимизированная версия
  try {
    // Запускаем критические операции сразу
    setupHeroImage();

    // Используем единый requestAnimationFrame для группировки неприоритетных операций
    requestAnimationFrame(() => {
      // Высокоприоритетные операции обновления DOM
      setupContentAnimation();
      adjustForViewport();
      updatePrices();

      // Операции с низким приоритетом в следующем цикле
      requestIdleCallback
        ? requestIdleCallback(() => {
            setupButtonHandlers();
            setupLanguageChangeListener();
          })
        : setTimeout(() => {
            setupButtonHandlers();
            setupLanguageChangeListener();
          }, 50);
    });

    // Отложенная настройка обработчика resize
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        window.addEventListener('resize', handleResize);
      });
    } else {
      setTimeout(() => {
        window.addEventListener('resize', handleResize);
      }, 100);
    }
  } catch (error) {
    console.error('Ошибка при инициализации Hero секции:', error);
  }

  // Возвращаем функцию очистки
  return cleanup;
}
