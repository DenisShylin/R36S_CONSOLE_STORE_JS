// Импортируем функции для обработки смены языка
import { supportedLanguages } from './i18n/i18n.js';

/**
 * Инициализация функциональности футера
 * @returns {Function|undefined} Функция очистки (если необходимо)
 */
export function initFooter() {
  console.log('Инициализация Footer');

  // Получаем элемент footer
  const footer = document.querySelector('.footer');

  if (!footer) {
    console.error('Элемент footer не найден');
    return;
  }

  // Находим кнопку Partnership и добавляем обработчик события
  const partnershipButton = footer.querySelector('.partnership-button');

  if (partnershipButton) {
    partnershipButton.addEventListener('click', () => {
      // Находим модальное окно
      const modalOverlay = document.querySelector('.partnership-modal-overlay');

      if (modalOverlay) {
        // Добавляем класс active для отображения модального окна
        modalOverlay.classList.add('active');

        // Находим контент модального окна и делаем его активным
        const modalContent = modalOverlay.querySelector(
          '.partnership-modal-content'
        );
        if (modalContent) {
          modalContent.classList.add('active');
        }

        // Запрещаем прокрутку body
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Инициализируем обработчики для модального окна
  initPartnershipModal();

  // Регистрируем обработчик события смены языка
  window.addEventListener('languageChanged', handleLanguageChange);

  // Возвращаем функцию очистки
  return function cleanup() {
    // Удаляем обработчик события при выгрузке компонента
    window.removeEventListener('languageChanged', handleLanguageChange);

    // Если есть ссылки на DOM-элементы или слушатели, очищаем их здесь
    if (partnershipButton) {
      partnershipButton.removeEventListener('click', openModal);
    }
  };
}

/**
 * Обработчик события смены языка
 * @param {CustomEvent} event - Событие смены языка
 */
function handleLanguageChange(event) {
  // Если есть детали события и язык в них
  if (event.detail && event.detail.language) {
    const newLanguage = event.detail.language;
    console.log(`Footer: Язык изменен на ${newLanguage}`);

    // Проверяем, является ли язык RTL
    const rtlLanguages = ['ar'];
    const isRTL = rtlLanguages.includes(newLanguage);

    // Получаем footer
    const footer = document.querySelector('.footer');
    if (footer) {
      // Обновляем направление текста для футера
      if (isRTL) {
        footer.classList.add('rtl');
        footer.style.direction = 'rtl';
      } else {
        footer.classList.remove('rtl');
        footer.style.direction = 'ltr';
      }
    }

    // Также можем обновить модальное окно
    const modal = document.querySelector('.partnership-modal-content');
    if (modal) {
      if (isRTL) {
        modal.classList.add('rtl');
        modal.style.direction = 'rtl';
      } else {
        modal.classList.remove('rtl');
        modal.style.direction = 'ltr';
      }
    }
  }
}

/**
 * Инициализация модального окна партнерства
 */
function initPartnershipModal() {
  // Находим модальное окно и кнопку закрытия
  const modalOverlay = document.querySelector('.partnership-modal-overlay');

  if (!modalOverlay) {
    console.warn('Модальное окно не найдено');
    return;
  }

  // Находим кнопку закрытия
  const closeButton = modalOverlay.querySelector('.partnership-modal-close');

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  // Закрытие модального окна по клику на оверлей
  modalOverlay.addEventListener('click', event => {
    // Если клик был по оверлею, а не по контенту, закрываем модальное окно
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  // Закрытие модального окна по нажатию Escape
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Функция открытия модального окна
 */
function openModal() {
  const modalOverlay = document.querySelector('.partnership-modal-overlay');
  if (modalOverlay) {
    // Добавляем класс active для отображения модального окна
    modalOverlay.classList.add('active');

    // Находим контент модального окна и делаем его активным
    const modalContent = modalOverlay.querySelector(
      '.partnership-modal-content'
    );
    if (modalContent) {
      modalContent.classList.add('active');
    }

    // Запрещаем прокрутку body
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Функция закрытия модального окна
 */
function closeModal() {
  const modalOverlay = document.querySelector('.partnership-modal-overlay');
  if (!modalOverlay) return;

  const modalContent = modalOverlay.querySelector('.partnership-modal-content');

  // Убираем классы active
  modalOverlay.classList.remove('active');

  if (modalContent) {
    modalContent.classList.remove('active');
  }

  // Возвращаем прокрутку body
  document.body.style.overflow = '';
}
