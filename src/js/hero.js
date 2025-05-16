import { getLocalizedPrice } from './utils/priceFormatter';

export function initHero() {
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
  let buyButtonHandler;
  let moreDetailsButtonHandler;
  let buttonsWrapperHandler;

  const isValidContext = () => {
    return (
      selectors.heroSection && document.body.contains(selectors.heroSection)
    );
  };

  function updatePrices() {
    if (!isValidContext()) return;

    try {
      const { currentPrice, originalPrice, discountBadge } = selectors;

      const priceData = {
        current: currentPrice ? getLocalizedPrice('current') : null,
        original: originalPrice ? getLocalizedPrice('original') : null,
        discount: discountBadge ? getLocalizedPrice('discount') : null,
      };

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

  function setupHeroImage() {
    const { heroImage, heroSection, placeholder } = selectors;
    if (!heroImage || !heroSection) return;

    try {
      const updateImageState = isLoaded => {
        if (!isValidContext()) return;

        requestAnimationFrame(() => {
          heroSection.classList.toggle('hero--loading', !isLoaded);
          heroSection.classList.toggle('hero--loaded', isLoaded);

          if (placeholder && isLoaded) {
            placeholder.style.opacity = '0';
          }
        });
      };

      updateImageState(heroImage.complete);

      if (!heroImage.complete) {
        heroImage.onload = () => updateImageState(true);
        heroImage.onerror = () => {
          console.error('Не удалось загрузить изображение:', heroImage.src);
          updateImageState(true);
        };
      }
    } catch (error) {
      console.error('Ошибка при настройке изображения:', error);
      if (isValidContext()) {
        heroSection.classList.remove('hero--loading');
        heroSection.classList.add('hero--loaded');
      }
    }
  }

  function adjustForViewport() {
    if (!isValidContext()) return;

    const { desktopDesc, mobileDesc } = selectors;
    if (!desktopDesc || !mobileDesc) return;

    const isDesktop = window.innerWidth > 992;

    requestAnimationFrame(() => {
      desktopDesc.style.display = isDesktop ? 'block' : 'none';
      mobileDesc.style.display = isDesktop ? 'none' : 'block';
    });
  }

  function setupContentAnimation() {
    const { heroContent } = selectors;
    if (!heroContent || !isValidContext()) return;

    if (!heroContent.classList.contains('animate-in')) {
      requestAnimationFrame(() => {
        heroContent.classList.add('animate-in');
      });
    }

    const nonCriticalElements = document.querySelectorAll('.animate-on-scroll');
    if (nonCriticalElements.length > 0 && 'IntersectionObserver' in window) {
      if (contentObserver) contentObserver.disconnect();

      contentObserver = new IntersectionObserver(
        entries => {
          const elementsToAnimate = entries
            .filter(entry => entry.isIntersecting && entry.target?.isConnected)
            .map(entry => {
              contentObserver.unobserve(entry.target);
              return entry.target;
            });

          if (elementsToAnimate.length) {
            requestAnimationFrame(() => {
              elementsToAnimate.forEach(el => el.classList.add('animate-in'));
            });
          }
        },
        { threshold: 0.1 }
      );

      nonCriticalElements.forEach(element => {
        if (element.isConnected) {
          contentObserver.observe(element);
        }
      });
    }
  }

  function setupButtonHandlers() {
    const { buyButton, moreDetailsButton } = selectors;
    const heroButtonsWrapper = document.querySelector('.hero__buttons');

    const scrollToFeatures = e => {
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
    };

    const openBuyLink = e => {
      e.preventDefault();
      const url =
        buyButton?.getAttribute('data-href') ||
        'https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html';

      window.location.href = url;
    };

    if (heroButtonsWrapper) {
      buttonsWrapperHandler = e => {
        e.stopPropagation();

        const buyButtonClicked = e.target.closest('#buy-button');
        const detailsButtonClicked = e.target.closest('#more-details-button');

        if (buyButtonClicked) {
          openBuyLink(e);
        } else if (detailsButtonClicked) {
          scrollToFeatures(e);
        }
      };

      heroButtonsWrapper.addEventListener('click', buttonsWrapperHandler);
      heroButtonsWrapper.addEventListener('touchend', buttonsWrapperHandler);
    } else {
      if (buyButton) {
        buyButtonHandler = e => openBuyLink(e);
        buyButton.addEventListener('click', buyButtonHandler);
        buyButton.addEventListener('touchend', buyButtonHandler);
      }

      if (moreDetailsButton) {
        moreDetailsButtonHandler = e => scrollToFeatures(e);
        moreDetailsButton.addEventListener('click', moreDetailsButtonHandler);
        moreDetailsButton.addEventListener(
          'touchend',
          moreDetailsButtonHandler
        );
      }
    }

    const buttons = document.querySelectorAll('.hero__button');
    buttons.forEach(button => {
      button.addEventListener('touchstart', function () {
        this.classList.add('touch-active');
      });

      button.addEventListener('touchend', function () {
        this.classList.remove('touch-active');
      });

      button.addEventListener('touchcancel', function () {
        this.classList.remove('touch-active');
      });
    });
  }

  function setupLanguageChangeListener() {
    if (!isValidContext()) return;

    languageChangeHandler = event => {
      if (!isValidContext()) return;

      updatePrices();

      const rtlLanguages = ['ar'];
      const currentLang = event?.detail?.language || 'en';
      const isRTL = rtlLanguages.includes(currentLang);

      requestAnimationFrame(() => {
        selectors.heroSection.classList.toggle('rtl', isRTL);
      });
    };

    window.addEventListener('languageChanged', languageChangeHandler);
  }

  function handleResize() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      adjustForViewport();
    }, 250);
  }

  function cleanup() {
    if (contentObserver) {
      contentObserver.disconnect();
      contentObserver = null;
    }

    clearTimeout(resizeTimeout);
    window.removeEventListener('resize', handleResize);

    if (languageChangeHandler) {
      window.removeEventListener('languageChanged', languageChangeHandler);
    }

    const heroButtonsWrapper = document.querySelector('.hero__buttons');

    if (heroButtonsWrapper && buttonsWrapperHandler) {
      heroButtonsWrapper.removeEventListener('click', buttonsWrapperHandler);
      heroButtonsWrapper.removeEventListener('touchend', buttonsWrapperHandler);
    }

    const { buyButton, moreDetailsButton } = selectors;

    if (buyButton && buyButtonHandler) {
      buyButton.removeEventListener('click', buyButtonHandler);
      buyButton.removeEventListener('touchend', buyButtonHandler);
    }

    if (moreDetailsButton && moreDetailsButtonHandler) {
      moreDetailsButton.removeEventListener('click', moreDetailsButtonHandler);
      moreDetailsButton.removeEventListener(
        'touchend',
        moreDetailsButtonHandler
      );
    }

    const buttons = document.querySelectorAll('.hero__button');
    buttons.forEach(button => {
      button.removeEventListener('touchstart', null);
      button.removeEventListener('touchend', null);
      button.removeEventListener('touchcancel', null);
    });
  }

  try {
    setupHeroImage();

    requestAnimationFrame(() => {
      setupContentAnimation();
      adjustForViewport();
      updatePrices();
      setupButtonHandlers();

      requestIdleCallback
        ? requestIdleCallback(() => {
            setupLanguageChangeListener();
          })
        : setTimeout(() => {
            setupLanguageChangeListener();
          }, 50);
    });

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

  return cleanup;
}
