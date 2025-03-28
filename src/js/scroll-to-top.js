/**
 * @fileoverview Модуль кнопки прокрутки вверх страницы
 * @description Создает и управляет кнопкой скролла вверх, появляющейся при прокрутке страницы
 */

/**
 * Инициализирует функционал кнопки прокрутки вверх
 * @returns {Function} Функция очистки для удаления обработчиков событий
 */
export function initScrollToTop() {
  console.log('Инициализация кнопки прокрутки вверх');

  // Создаем элемент кнопки
  const scrollButton = document.createElement('button');
  scrollButton.className = 'scroll-to-top';
  scrollButton.setAttribute('aria-label', 'Прокрутить вверх страницы');
  scrollButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;

  // Добавляем кнопку в DOM
  document.body.appendChild(scrollButton);

  // Флаг для отслеживания видимости кнопки
  let isButtonVisible = false;

  // Используем throttle для уменьшения количества вызовов обработчика скролла
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Обработчик события прокрутки страницы
   * Показывает/скрывает кнопку в зависимости от позиции скролла
   */
  const handleScroll = throttle(function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldBeVisible = scrollTop > 300; // Показать после прокрутки на 300px вниз

    // Меняем состояние только при необходимости
    if (shouldBeVisible !== isButtonVisible) {
      if (shouldBeVisible) {
        // Устанавливаем видимость перед добавлением класса для анимации
        scrollButton.style.visibility = 'visible';
        // Используем setTimeout с минимальной задержкой для того, чтобы
        // transition для opacity сработал после изменения видимости
        setTimeout(() => {
          scrollButton.classList.add('visible');
        }, 10);
      } else {
        // Сначала убираем класс для анимации opacity
        scrollButton.classList.remove('visible');
        // После завершения анимации скрываем элемент
        setTimeout(() => {
          // Проверяем, что элемент все еще должен быть скрыт
          if (!isButtonVisible) {
            scrollButton.style.visibility = 'hidden';
          }
        }, 300); // 300ms соответствует длительности transition в CSS
      }
      isButtonVisible = shouldBeVisible;
    }
  }, 100); // Ограничиваем вызовы до одного раза в 100ms

  /**
   * Обработчик клика по кнопке
   * Плавно прокручивает страницу вверх
   * @param {Event} e - Событие клика
   */
  function handleButtonClick(e) {
    e.preventDefault();

    // Эффект нажатия кнопки
    scrollButton.classList.add('active');
    setTimeout(() => {
      scrollButton.classList.remove('active');
    }, 200);

    // Плавная прокрутка наверх страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Назначаем обработчики событий
  window.addEventListener('scroll', handleScroll, { passive: true });
  scrollButton.addEventListener('click', handleButtonClick);

  // Инициализируем начальное состояние кнопки
  handleScroll();

  /**
   * Функция очистки обработчиков событий и удаления кнопки
   * @returns {void}
   */
  return function cleanup() {
    console.log('Очистка кнопки прокрутки вверх');
    window.removeEventListener('scroll', handleScroll);
    scrollButton.removeEventListener('click', handleButtonClick);

    // Удаляем кнопку из DOM при очистке
    if (scrollButton && scrollButton.parentNode) {
      scrollButton.parentNode.removeChild(scrollButton);
    }
  };
}
