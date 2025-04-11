// Categories.js - Версия с поддержкой i18n и без автовоспроизведения
import i18next from 'i18next';

export function initCategories() {
  try {
    console.log('Инициализация секции Categories');

    // Получаем необходимые элементы
    const videoElement = document.querySelector('.categories__video');
    const sectionRef = document.getElementById('categories');
    const contentRef = document.querySelector('.categories__content');
    const playButton = document.querySelector('.categories__video-play');
    const muteButton = document.querySelector('.categories__video-mute');
    const videoSlider = document.querySelector('.categories__video-slider');
    const videoContainer = document.querySelector(
      '.categories__video-container'
    );
    const currentTimeElement = document.querySelector(
      '.categories__video-time span:first-child'
    );
    const durationElement = document.querySelector(
      '.categories__video-time span:last-child'
    );

    // Константа для события смены языка (чтобы не зависеть от внешних модулей)
    const LANGUAGE_CHANGE_EVENT = 'languageChanged';

    // Проверка наличия секции
    if (!sectionRef) {
      console.error('Секция Categories не найдена в DOM');
      return {};
    }

    // Добавляем класс animate-in для анимации
    if (contentRef) {
      contentRef.classList.add('animate-in');
    }

    // Для работы без видеоэлемента
    if (!videoElement) {
      console.error('Видео элемент не найден в DOM');
      createVideoFallback();
      return {};
    }

    // Состояния
    let isPlaying = false;
    let isMuted = true;
    let videoLoaded = false;
    let videoError = false;

    // Функция форматирования времени
    const formatTime = time => {
      if (isNaN(time) || time < 0) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Функция обновления иконки кнопки воспроизведения
    function updatePlayButtonIcon() {
      if (!playButton) return;

      playButton.innerHTML = isPlaying
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`;

      // Обновляем aria-label в зависимости от состояния
      if (playButton.hasAttribute('data-i18n')) {
        const i18nKey = isPlaying
          ? 'categories.controls.pause'
          : 'categories.controls.play';

        const translation = i18next.t(i18nKey);
        if (translation && translation !== i18nKey) {
          playButton.setAttribute('aria-label', translation);
        }
      }
    }

    // Функция обновления иконки кнопки включения/выключения звука
    function updateMuteButtonIcon() {
      if (!muteButton) return;

      muteButton.innerHTML = isMuted
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`;

      // Обновляем aria-label в зависимости от состояния
      if (muteButton.hasAttribute('data-i18n')) {
        const i18nKey = isMuted
          ? 'categories.controls.unmute'
          : 'categories.controls.mute';

        const translation = i18next.t(i18nKey);
        if (translation && translation !== i18nKey) {
          muteButton.setAttribute('aria-label', translation);
        }
      }
    }

    // Функция переключения воспроизведения
    function togglePlay() {
      if (!videoElement || videoError) return;

      if (isPlaying) {
        videoElement.pause();
        isPlaying = false;
        updatePlayButtonIcon();
      } else {
        // Проверяем, есть ли у видео источник
        if (
          !videoElement.getAttribute('src') &&
          videoElement.querySelector('source')
        ) {
          // Если видео еще не инициализировано, инициализируем его
          const source = videoElement.querySelector('source');
          videoElement.setAttribute('src', source.getAttribute('src'));
        }

        // Используем Promise для обработки ошибок воспроизведения
        const playPromise = videoElement.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              isPlaying = true;
              updatePlayButtonIcon();
            })
            .catch(err => {
              console.warn('Не удалось воспроизвести видео:', err);
              isPlaying = false;
              updatePlayButtonIcon();
            });
        } else {
          isPlaying = true;
          updatePlayButtonIcon();
        }
      }
    }

    // Создание запасного варианта для видео
    function createVideoFallback() {
      if (!videoContainer) return;

      videoError = true;

      if (videoElement) {
        videoElement.style.display = 'none';
      }

      // Получаем перевод для текста ошибки
      const fallbackText = i18next.t('categories.fallback.videoUnavailable', {
        defaultValue: 'Видео временно недоступно',
      });

      videoContainer.innerHTML = `
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">${fallbackText}</p>
          </div>
        </div>
      `;
    }

    // Обработчик изменения языка
    const handleLanguageChange = () => {
      try {
        // Обновляем тексты, которые могут меняться динамически
        updatePlayButtonIcon();
        updateMuteButtonIcon();

        // Если видео недоступно, обновляем fallback сообщение
        if (videoError) {
          createVideoFallback();
        }
      } catch (langError) {
        console.error('Ошибка при обновлении языка в видео секции:', langError);
      }
    };

    // Подписываемся на событие смены языка
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);

    // Инициализация видео с ленивой загрузкой
    if (videoElement) {
      // Базовые настройки видео
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.playsInline = true;

      // Отключаем предварительную загрузку видео
      videoElement.preload = 'none';

      // Временно удаляем src для предотвращения автозагрузки
      const sourceTags = videoElement.querySelectorAll('source');
      let videoSrc = '';
      if (sourceTags.length > 0) {
        videoSrc = sourceTags[0].getAttribute('src');
        // Не устанавливаем src пока пользователь не нажмет кнопку воспроизведения
        videoElement.removeAttribute('src');
      }

      // Стили видимости
      videoElement.style.display = 'block';
      videoElement.style.visibility = 'visible';
      videoElement.style.opacity = '1';
      videoElement.style.width = '100%';
      videoElement.style.borderRadius = '24px';

      if (videoContainer) {
        videoContainer.style.minHeight = '200px';
      }

      // Обработчики событий видео
      videoElement.addEventListener('loadedmetadata', () => {
        try {
          console.log('Метаданные видео загружены');
          videoLoaded = true;

          // Настраиваем ползунок времени
          if (videoSlider && !isNaN(videoElement.duration)) {
            videoSlider.max = videoElement.duration;

            if (durationElement) {
              durationElement.textContent = formatTime(videoElement.duration);
            }
          }
        } catch (err) {
          console.error('Ошибка при обработке метаданных видео:', err);
        }
      });

      // Обработчик обновления времени видео
      videoElement.addEventListener('timeupdate', () => {
        try {
          if (videoSlider && !isNaN(videoElement.currentTime)) {
            videoSlider.value = videoElement.currentTime;

            if (currentTimeElement) {
              currentTimeElement.textContent = formatTime(
                videoElement.currentTime
              );
            }
          }
        } catch (err) {
          console.error('Ошибка при обновлении времени видео:', err);
        }
      });

      // Обработчик ошибок загрузки видео
      videoElement.addEventListener('error', () => {
        console.error('Ошибка при загрузке видео');
        createVideoFallback();
      });

      // Реализуем ленивую загрузку через Intersection Observer
      if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // Если элемент видим в зоне просмотра, подготавливаем видео
              if (entry.isIntersecting) {
                // Подготавливаем видео, но не воспроизводим его
                if (
                  !videoLoaded &&
                  !videoElement.getAttribute('src') &&
                  videoSrc
                ) {
                  // Устанавливаем preload="metadata" для загрузки только метаданных
                  videoElement.preload = 'metadata';
                  // videoElement.setAttribute('src', videoSrc);
                  // Не устанавливаем src здесь, только когда пользователь нажмет play
                }

                // Отключаем наблюдатель после подготовки
                videoObserver.unobserve(videoElement);
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
          }
        );

        // Начинаем наблюдение за видео элементом
        videoObserver.observe(videoElement);
      }
    }

    // Назначаем обработчики событий для элементов управления
    if (playButton) {
      playButton.addEventListener('click', e => {
        e.stopPropagation();
        togglePlay();
      });
    }

    if (muteButton) {
      muteButton.addEventListener('click', e => {
        e.stopPropagation();

        if (videoElement) {
          isMuted = !isMuted;
          videoElement.muted = isMuted;
          updateMuteButtonIcon();
        }
      });
    }

    if (videoSlider) {
      videoSlider.addEventListener('input', e => {
        if (videoElement) {
          try {
            const time = parseFloat(e.target.value);
            if (!isNaN(time)) {
              videoElement.currentTime = time;
            }
          } catch (err) {
            console.error('Ошибка при изменении времени видео:', err);
          }
        }
      });
    }

    if (videoContainer) {
      videoContainer.addEventListener('click', e => {
        if (!e.target.closest('.categories__video-controls')) {
          togglePlay();
        }
      });
    }

    // Обновляем начальное состояние кнопок
    updatePlayButtonIcon();
    updateMuteButtonIcon();

    // Добавляем класс, указывающий, что инициализация завершена
    sectionRef.classList.add('initialized');

    // Обеспечиваем поддержку RTL языков
    const handleRTLChange = () => {
      try {
        // Проверяем, является ли текущий язык RTL-языком
        const isRTL = document.documentElement.dir === 'rtl';

        if (isRTL) {
          sectionRef.classList.add('rtl');
          if (contentRef) {
            contentRef.classList.add('rtl');
          }
        } else {
          sectionRef.classList.remove('rtl');
          if (contentRef) {
            contentRef.classList.remove('rtl');
          }
        }
      } catch (rtlError) {
        console.error('Ошибка при обработке RTL в видео секции:', rtlError);
      }
    };

    // Сразу вызываем для текущего состояния
    handleRTLChange();

    // Подписываемся на событие изменения языка для RTL поддержки
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleRTLChange);

    // Показываем секцию даже при ошибке
    if (sectionRef) {
      sectionRef.style.display = 'block';
    }

    return {
      togglePlay,
      cleanup: () => {
        if (videoElement) {
          videoElement.pause();
          videoElement.removeAttribute('src');
          videoElement.load();
        }

        // Удаляем обработчики событий
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleRTLChange);
      },
    };
  } catch (error) {
    console.error('Критическая ошибка в initCategories:', error);

    // Показываем секцию даже при ошибке
    const sectionRef = document.getElementById('categories');
    if (sectionRef) {
      sectionRef.style.display = 'block';
    }

    return {};
  }
}
