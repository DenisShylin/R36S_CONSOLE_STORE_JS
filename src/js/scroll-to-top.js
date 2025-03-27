/**
 * @fileoverview Модуль кнопки прокрутки вверх страницы
 * @description Создает и управляет кнопкой скролла вверх, появляющейся при прокрутке страницы
 */

/**
 * Инициализирует функционал кнопки прокрутки вверх
 * @returns {Function} Функция очистки для удаления обработчиков событий
 */
export function initScrollToTop() {
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

  /**
   * Обработчик события прокрутки страницы
   * Показывает/скрывает кнопку в зависимости от позиции скролла
   */
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldBeVisible = scrollTop > 300; // Показать после прокрутки на 300px вниз

    // Меняем состояние только при необходимости, чтобы избежать лишних операций с DOM
    if (shouldBeVisible !== isButtonVisible) {
      scrollButton.classList.toggle('visible', shouldBeVisible);
      isButtonVisible = shouldBeVisible;
    }
  }

  /**
   * Обработчик клика по кнопке
   * Плавно прокручивает страницу вверх
   * @param {Event} e - Событие клика
   */
  function handleButtonClick(e) {
    e.preventDefault();

    // Плавная прокрутка наверх страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Назначаем обработчики событий
  window.addEventListener('scroll', handleScroll);
  scrollButton.addEventListener('click', handleButtonClick);

  // Инициализируем начальное состояние кнопки
  handleScroll();

  /**
   * Функция очистки обработчиков событий и удаления кнопки
   * @returns {void}
   */
  return function cleanup() {
    window.removeEventListener('scroll', handleScroll);
    scrollButton.removeEventListener('click', handleButtonClick);

    // Удаляем кнопку из DOM при очистке
    if (scrollButton && scrollButton.parentNode) {
      scrollButton.parentNode.removeChild(scrollButton);
    }
  };
}
