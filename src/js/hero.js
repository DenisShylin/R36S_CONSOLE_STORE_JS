/**
 * @fileoverview Hero section initialization module
 * @description Содержит функции для инициализации секции Hero, управления изображениями,
 * адаптивности и обработки событий кнопок.
 */

import { getLocalizedPrice } from './utils/priceFormatter';

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
  const currentPrice = document.querySelector('.hero__current-price');
  const originalPrice = document.querySelector('.hero__original-price');
  const discountBadge = document.querySelector('.hero__discount-badge');

  // Хранение ссылки на обсервер для корректного удаления
  let contentObserver = null;
  let resizeTimeout;
  let languageChangeHandler;

  /**
   * Обновляет цены на основе текущего языка
   * @private
   */
  function updatePrices() {
    try {
      if (!document.body.contains(heroSection)) {
        console.warn('Hero section removed from DOM, skipping price update');
        return;
      }

      if (currentPrice) {
        const formattedCurrentPrice = getLocalizedPrice('current');
        if (formattedCurrentPrice) {
          currentPrice.innerHTML = formattedCurrentPrice;
        }
      }

      if (originalPrice) {
        const formattedOriginalPrice = getLocalizedPrice('original');
        if (formattedOriginalPrice) {
          originalPrice.textContent = formattedOriginalPrice;
        }
      }

      if (discountBadge) {
        const formattedDiscount = getLocalizedPrice('discount');
        if (formattedDiscount) {
          discountBadge.textContent = formattedDiscount;
        }
      }
    } catch (error) {
      console.error('Ошибка при обновлении цен:', error);
    }
  }

  /**
   * Настраивает изображение секции Hero.
   * Устанавливает обработчики событий для основного изображения.
   * @private
   */
  function setupHeroImage() {
    if (!heroImage || !heroSection) return;

    try {
      // Обработчики событий
      heroImage.onload = () => {
        if (document.body.contains(heroSection)) {
          heroSection.classList.add('hero--loaded');
        }
      };
      heroImage.onerror = () => {
        console.error('Не удалось загрузить изображение:', heroImage.src);
        // В любом случае показываем секцию
        if (document.body.contains(heroSection)) {
          heroSection.classList.add('hero--loaded');
        }
      };

      // Если изображение уже загружено (из кэша)
      if (heroImage.complete && document.body.contains(heroSection)) {
        heroSection.classList.add('hero--loaded');
      }
    } catch (error) {
      console.error('Ошибка при настройке изображения в Hero секции:', error);
    }
  }

  /**
   * Адаптирует контент для разных размеров экрана.
   * Переключает между мобильной и десктопной версиями описания.
   * @private
   */
  function adjustForViewport() {
    try {
      if (
        !desktopDescription ||
        !mobileDescription ||
        !document.body.contains(desktopDescription) ||
        !document.body.contains(mobileDescription)
      ) {
        return;
      }

      const isDesktop = window.innerWidth > 992;

      desktopDescription.style.display = isDesktop ? 'block' : 'none';
      mobileDescription.style.display = isDesktop ? 'none' : 'block';
    } catch (error) {
      console.error('Ошибка при адаптации контента для разных экранов:', error);
    }
  }

  /**
   * Настраивает анимацию появления контента при прокрутке.
   * Использует IntersectionObserver для определения видимости элемента.
   * @private
   */
  function setupContentAnimation() {
    if (!heroContent) return;

    try {
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
    } catch (error) {
      console.error('Ошибка при настройке анимации контента:', error);
    }
  }

  /**
   * Настраивает обработчики событий для кнопок секции.
   * @private
   */
  function setupButtonHandlers() {
    try {
      // Обработчик для кнопки покупки
      if (buyButton) {
        buyButton.addEventListener('click', handleBuyButtonClick);
      }

      // Обработчик для кнопки "More details"
      if (moreDetailsButton) {
        moreDetailsButton.addEventListener('click', handleMoreDetailsClick);
      }
    } catch (error) {
      console.error('Ошибка при настройке обработчиков кнопок:', error);
    }
  }

  /**
   * Настраивает обработчики событий для смены языка
   * @private
   */
  function setupLanguageChangeListener() {
    try {
      // Обработчик изменения языка
      languageChangeHandler = event => {
        try {
          // Проверяем, что секция все еще в DOM
          if (!document.body.contains(heroSection)) {
            console.warn(
              'Hero section removed from DOM, skipping language change handling'
            );
            return;
          }

          console.log(
            'Hero секция получила событие изменения языка:',
            event.detail
          );
          updatePrices();

          // Если язык является RTL, добавляем соответствующий класс
          const rtlLanguages = ['ar'];
          const currentLang = event?.detail?.language || 'en';

          if (rtlLanguages.includes(currentLang)) {
            heroSection.classList.add('rtl');
          } else {
            heroSection.classList.remove('rtl');
          }
        } catch (error) {
          console.error('Error in hero language change handler:', error);
        }
      };

      // Слушаем событие смены языка
      window.addEventListener('languageChanged', languageChangeHandler);
    } catch (error) {
      console.error('Ошибка при настройке слушателя смены языка:', error);
    }
  }

  /**
   * Обработчик клика по кнопке Buy
   * @private
   */
  function handleBuyButtonClick() {
    try {
      window.open(
        'https://www.aliexpress.com/item/1005007171465465.html',
        '_blank',
        'noopener,noreferrer'
      );
    } catch (error) {
      console.error('Ошибка при обработке клика по кнопке Buy:', error);
    }
  }

  /**
   * Обрабатывает клик по кнопке "More details".
   * Выполняет плавную прокрутку к секции features.
   * @param {Event} e - Событие клика
   * @private
   */
  function handleMoreDetailsClick(e) {
    try {
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
    } catch (error) {
      console.error(
        'Ошибка при обработке клика по кнопке More Details:',
        error
      );
    }
  }

  /**
   * Функция очистки слушателей и наблюдателей
   * @private
   */
  function cleanup() {
    try {
      // Отключаем IntersectionObserver
      if (contentObserver) {
        contentObserver.disconnect();
      }

      // Очищаем таймаут resize
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);

      // Удаляем обработчик смены языка
      if (languageChangeHandler) {
        window.removeEventListener('languageChanged', languageChangeHandler);
      }

      // Удаляем обработчики кнопок
      if (buyButton) {
        buyButton.removeEventListener('click', handleBuyButtonClick);
      }

      if (moreDetailsButton) {
        moreDetailsButton.removeEventListener('click', handleMoreDetailsClick);
      }
    } catch (error) {
      console.error('Ошибка при очистке ресурсов Hero секции:', error);
    }
  }

  // Обработчик resize с дебаунсингом
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustForViewport, 200);
  }

  // Инициализация компонента
  try {
    setupHeroImage();
    adjustForViewport();
    setupContentAnimation();
    setupButtonHandlers();
    setupLanguageChangeListener();
    updatePrices(); // Обновляем цены при первой загрузке

    // Слушаем событие изменения размера окна
    window.addEventListener('resize', handleResize);
  } catch (error) {
    console.error('Ошибка при инициализации Hero секции:', error);
  }

  // Возвращаем функцию очистки
  return cleanup;
}
