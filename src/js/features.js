/**
 * Features Section
 * Реализация секции Features для проекта R36S_CONSOLE_STORE_JS
 * с поддержкой i18n, но без изменений логики видео и звука
 */

import i18next from 'i18next';

/**
 * Инициализация секции Features
 * @returns {Function|undefined} Функция очистки для этого компонента или undefined
 */
function initFeatures() {
  // Получаем необходимые элементы
  const featuresSection = document.getElementById('features');
  const featuresVideo = document.getElementById('featuresVideo');
  const soundToggleButton = document.getElementById('soundToggleButton');
  const volumeOffIcon = document.getElementById('volumeOffIcon');
  const volumeOnIcon = document.getElementById('volumeOnIcon');
  const buyButton = document.getElementById('buyButton');
  const moreInfoButton = document.getElementById('moreInfoButton');

  // Проверяем, существуют ли элементы перед добавлением обработчиков
  if (!featuresSection) {
    console.warn('Features section not found');
    return;
  }

  // Состояние звука
  let isMuted = true;

  // Устанавливаем начальную громкость видео
  if (featuresVideo) {
    featuresVideo.volume = 0.5;
    featuresVideo.play().catch(error => {
      console.log('Автовоспроизведение не удалось:', error);
    });
  }

  // Обработчик клика для кнопки Buy now
  const buyButtonHandler = buyButton
    ? buyButton.addEventListener('click', handleBuyClick)
    : null;

  // Обработчик клика для кнопки Show Details
  const moreInfoButtonHandler = moreInfoButton
    ? moreInfoButton.addEventListener('click', handleMoreInfoClick)
    : null;

  // Обработчик клика для кнопки включения/выключения звука
  const soundToggleHandler = soundToggleButton
    ? soundToggleButton.addEventListener('click', () =>
        toggleMute(featuresVideo, volumeOffIcon, volumeOnIcon)
      )
    : null;

  // Обработчик для автоматического отключения звука при скролле
  const scrollHandler = () => {
    handleScroll(featuresSection, featuresVideo, volumeOffIcon, volumeOnIcon);
  };

  window.addEventListener('scroll', scrollHandler);

  // Обработчик события изменения языка
  const languageChangedHandler = () => {
    // Обновление атрибутов aria-label в зависимости от текущего состояния
    if (soundToggleButton) {
      const key =
        featuresVideo && !featuresVideo.muted
          ? 'features.sound.toggle.disable'
          : 'features.sound.toggle.enable';
      soundToggleButton.setAttribute('aria-label', i18next.t(key));
    }
  };

  // Регистрируем обработчик изменения языка
  window.addEventListener('languageChanged', languageChangedHandler);

  // Функция очистки для удаления всех обработчиков событий
  return function cleanup() {
    if (buyButton) buyButton.removeEventListener('click', handleBuyClick);
    if (moreInfoButton)
      moreInfoButton.removeEventListener('click', handleMoreInfoClick);
    if (soundToggleButton) {
      soundToggleButton.removeEventListener('click', () =>
        toggleMute(featuresVideo, volumeOffIcon, volumeOnIcon)
      );
    }
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('languageChanged', languageChangedHandler);

    console.log('Features component cleaned up');
  };
}

/**
 * Функция для переключения звука видео
 * @param {HTMLVideoElement} videoElement - видео элемент
 * @param {HTMLElement} volumeOffIcon - иконка выключенного звука
 * @param {HTMLElement} volumeOnIcon - иконка включенного звука
 */
function toggleMute(videoElement, volumeOffIcon, volumeOnIcon) {
  if (!videoElement) return;

  videoElement.muted = !videoElement.muted;

  if (!videoElement.muted) {
    videoElement.volume = 0.5;
    volumeOffIcon.style.display = 'none';
    volumeOnIcon.style.display = 'block';

    // Обновляем aria-label
    const soundToggle = document.getElementById('soundToggleButton');
    if (soundToggle) {
      soundToggle.setAttribute(
        'aria-label',
        i18next.t('features.sound.toggle.disable')
      );
    }
  } else {
    volumeOffIcon.style.display = 'block';
    volumeOnIcon.style.display = 'none';

    // Обновляем aria-label
    const soundToggle = document.getElementById('soundToggleButton');
    if (soundToggle) {
      soundToggle.setAttribute(
        'aria-label',
        i18next.t('features.sound.toggle.enable')
      );
    }
  }
}

/**
 * Функция для обработки скролла (отключение звука при выходе из видимой области)
 * @param {HTMLElement} sectionElement - секция Features
 * @param {HTMLVideoElement} videoElement - видео элемент
 * @param {HTMLElement} volumeOffIcon - иконка выключенного звука
 * @param {HTMLElement} volumeOnIcon - иконка включенного звука
 */
function handleScroll(
  sectionElement,
  videoElement,
  volumeOffIcon,
  volumeOnIcon
) {
  if (!sectionElement || !videoElement || videoElement.muted) return;

  const rect = sectionElement.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  if (!isVisible) {
    videoElement.muted = true;
    volumeOffIcon.style.display = 'block';
    volumeOnIcon.style.display = 'none';

    // Обновляем aria-label
    const soundToggle = document.getElementById('soundToggleButton');
    if (soundToggle) {
      soundToggle.setAttribute(
        'aria-label',
        i18next.t('features.sound.toggle.enable')
      );
    }
  }
}

/**
 * Функция для обработки клика на кнопку Buy now
 */
function handleBuyClick() {
  window.open(
    'https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X',
    '_blank',
    'noopener,noreferrer'
  );
}

/**
 * Функция для обработки клика на кнопку Show Details
 */
function handleMoreInfoClick() {
  const aboutSection = document.getElementById('features-r36s');

  if (aboutSection) {
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const currentScrollY = window.scrollY || window.pageYOffset;
    const offsetPosition = elementPosition + currentScrollY;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}#features-r36s`
    );
  }
}

// Экспортируем функцию для использования в main.js
export { initFeatures };
