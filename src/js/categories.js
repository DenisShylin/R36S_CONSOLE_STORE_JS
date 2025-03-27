// Categories.js - Максимально упрощенная версия

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
    }

    // Функция переключения воспроизведения
    function togglePlay() {
      if (!videoElement || videoError) return;

      if (isPlaying) {
        videoElement.pause();
        isPlaying = false;
        updatePlayButtonIcon();
      } else {
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

      videoContainer.innerHTML = `
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
          </div>
        </div>
      `;
    }

    // Инициализация видео
    if (videoElement) {
      // Базовые настройки видео
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.playsInline = true;

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

      // Автоматическое воспроизведение с задержкой
      setTimeout(() => {
        if (videoElement && !videoError) {
          const playPromise = videoElement.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('Автовоспроизведение видео успешно');
                isPlaying = true;
                updatePlayButtonIcon();
              })
              .catch(err => {
                console.warn('Не удалось автовоспроизвести видео:', err);
              });
          }
        }
      }, 1000);
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

    return {
      togglePlay,
      cleanup: () => {
        if (videoElement) {
          videoElement.pause();
          videoElement.removeAttribute('src');
          videoElement.load();
        }
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
