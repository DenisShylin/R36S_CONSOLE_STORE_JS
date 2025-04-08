// Функция для инициализации элегантного аккордеона FAQ с поддержкой i18n
import i18next from 'i18next'; // Импортируем i18next для доступа к переводам

// Сохраняем глобальную ссылку на текущий инстанс аккордеона
let currentAccordionInstance = null;

function initFaqAccordion() {
  console.log('Инициализация аккордеона FAQ начата');

  // Если у нас уже есть активный аккордеон, сначала очистим его
  if (
    currentAccordionInstance &&
    typeof currentAccordionInstance.destroy === 'function'
  ) {
    console.log(
      'Уничтожение предыдущего аккордеона перед новой инициализацией'
    );
    currentAccordionInstance.destroy();
    currentAccordionInstance = null;
  }

  // Находим все элементы аккордеона
  const accordionItems = document.querySelectorAll('.accordion__item');

  if (accordionItems.length === 0) {
    console.warn('FAQ аккордеон: элементы не найдены');
    return null;
  }

  console.log(`FAQ аккордеон: найдено ${accordionItems.length} вопросов`);

  // Сохраняем ссылки на обработчики для каждого элемента
  const clickHandlers = new Map();

  // Функция для плавного закрытия всех элементов аккордеона
  const closeAllItems = (exceptItem = null) => {
    accordionItems.forEach(item => {
      if (item !== exceptItem && item.classList.contains('active')) {
        item.classList.remove('active');

        // Обновляем ARIA-атрибуты при закрытии
        const header = item.querySelector('.accordion__header');
        const content = item.querySelector('.accordion__content');

        if (header) {
          header.setAttribute('aria-expanded', 'false');
        }

        if (content) {
          // Добавляем небольшую задержку перед скрытием для анимации
          setTimeout(() => {
            if (!item.classList.contains('active')) {
              content.setAttribute('hidden', 'true');
            }
          }, 500);
        }
      }
    });
  };

  // Проверка поддержки RTL
  const checkAndApplyRTL = () => {
    const rtlLanguages = ['ar'];
    const isRTL = rtlLanguages.includes(i18next.language);
    console.log(
      `Применение RTL стилей для аккордеона: ${isRTL ? 'да' : 'нет'}`
    );

    // Применяем RTL стили для аккордеона если язык арабский
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion__header');
      const content = item.querySelector('.accordion__content');

      if (isRTL) {
        // Отзеркаливаем заголовок аккордеона для RTL
        if (header) {
          header.style.flexDirection = 'row-reverse';
        }

        // Настраиваем текстовое выравнивание для RTL
        if (content) {
          content.style.textAlign = 'right';
          content.style.direction = 'rtl';
        }
      } else {
        // Возвращаем стандартные LTR стили
        if (header) {
          header.style.flexDirection = '';
        }

        if (content) {
          content.style.textAlign = '';
          content.style.direction = '';
        }
      }
    });
  };

  // Вызываем проверку RTL при инициализации
  checkAndApplyRTL();

  // Добавляем обработчики событий для каждого заголовка аккордеона
  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion__header');
    const toggleBtn = item.querySelector('.accordion__toggle');
    const content = item.querySelector('.accordion__content');

    if (!header || !toggleBtn || !content) {
      console.warn('FAQ аккордеон: структура элемента неполная', item);
      return;
    }

    // Добавляем эффект пульсации к первому элементу для привлечения внимания
    if (index === 0) {
      setTimeout(() => {
        toggleBtn.classList.add('pulse');
        setTimeout(() => {
          toggleBtn.classList.remove('pulse');
        }, 1500);
      }, 1000);
    }

    // Улучшаем кликабельность - устанавливаем курсор pointer для всего header
    header.style.cursor = 'pointer';

    // Обработчик клика по заголовку или кнопке - используем замыкание для сохранения ссылки на элементы
    const handleClick = (function (
      itemElement,
      headerElement,
      toggleBtnElement,
      contentElement
    ) {
      return function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('Клик по элементу аккордеона:', itemElement);

        // Анимируем кнопку
        toggleBtnElement.classList.add('clicked');
        setTimeout(() => toggleBtnElement.classList.remove('clicked'), 300);

        // Если элемент уже активен, просто закрываем его с анимацией
        if (itemElement.classList.contains('active')) {
          console.log('Закрытие активного элемента аккордеона');
          itemElement.classList.remove('active');
          headerElement.setAttribute('aria-expanded', 'false');

          // Используем setTimeout для добавления hidden после завершения анимации
          setTimeout(() => {
            if (!itemElement.classList.contains('active')) {
              contentElement.setAttribute('hidden', 'true');
            }
          }, 500);

          return;
        }

        // Закрываем все элементы перед открытием нового
        closeAllItems(itemElement);

        // Открываем текущий элемент
        itemElement.classList.add('active');
        headerElement.setAttribute('aria-expanded', 'true');
        contentElement.removeAttribute('hidden');

        console.log('Открытие элемента аккордеона:', itemElement);

        // Плавно прокручиваем к открытому элементу, если он не полностью видим
        const headerRect = headerElement.getBoundingClientRect();
        const isHeaderVisible =
          headerRect.top >= 10 && headerRect.bottom <= window.innerHeight - 10;

        if (!isHeaderVisible) {
          setTimeout(() => {
            window.scrollTo({
              top: window.scrollY + headerRect.top - 100,
              behavior: 'smooth',
            });
          }, 100); // небольшая задержка для анимации
        }
      };
    })(item, header, toggleBtn, content);

    // Сохраняем ссылку на обработчик для дальнейшего удаления
    clickHandlers.set(item, handleClick);

    // Удаляем существующие обработчики событий перед добавлением новых
    header.removeEventListener('click', clickHandlers.get(item));
    toggleBtn.removeEventListener('click', clickHandlers.get(item));
    header.removeEventListener('keydown', clickHandlers.get(item));

    // Устанавливаем обработчики для всего заголовка
    header.addEventListener('click', handleClick);

    // Убеждаемся что все дочерние элементы заголовка не перехватывают клики
    // (кроме кнопки toggle, у которой есть свой обработчик)
    const headerChildren = header.querySelectorAll('*:not(.accordion__toggle)');
    headerChildren.forEach(child => {
      child.style.pointerEvents = 'none';
    });

    // Отдельно обрабатываем клик по кнопке toggle, чтобы не было конфликтов
    toggleBtn.style.pointerEvents = 'auto';
    toggleBtn.addEventListener('click', e => {
      e.stopPropagation(); // Предотвращаем всплытие, чтобы не вызвать обработчик header
      handleClick(e);
    });

    // Для доступности добавляем атрибуты ARIA если их ещё нет
    const questionId =
      header.id || `faq-question-${Math.random().toString(36).substring(2, 9)}`;
    const answerId =
      content.id || `faq-answer-${Math.random().toString(36).substring(2, 9)}`;

    header.setAttribute('id', questionId);
    header.setAttribute(
      'aria-expanded',
      item.classList.contains('active') ? 'true' : 'false'
    );
    header.setAttribute('aria-controls', answerId);
    header.setAttribute('role', 'button'); // Добавляем роль кнопки
    header.setAttribute('tabindex', '0'); // Делаем доступным через Tab

    content.setAttribute('id', answerId);
    content.setAttribute('aria-labelledby', questionId);
    content.setAttribute('role', 'region');
    if (!item.classList.contains('active')) {
      content.setAttribute('hidden', 'true');
    } else {
      content.removeAttribute('hidden');
    }

    // Добавляем возможность активации через клавишу Enter и пробел
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e);
      }
    });
  });

  // Улучшенная отзывчивость на клавиатуру для доступности
  const handleKeyboardNavigation = e => {
    if (e.key === 'Escape') {
      // Закрыть все элементы при нажатии Escape
      closeAllItems();
      return;
    }

    // Получаем активный элемент
    const activeItem = document.activeElement.closest('.accordion__item');
    if (!activeItem) return;

    const items = Array.from(accordionItems);
    const currentIndex = items.indexOf(activeItem);

    if (currentIndex === -1) return;

    let targetIndex;

    // Учитываем направление текста (RTL/LTR) при навигации с клавиатуры
    const isRTL = document.documentElement.dir === 'rtl';

    switch (e.key) {
      case 'ArrowDown':
        targetIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        targetIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case 'ArrowRight':
        // В RTL режиме стрелка вправо работает в обратном направлении
        targetIndex = isRTL
          ? (currentIndex - 1 + items.length) % items.length
          : (currentIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
        // В RTL режиме стрелка влево работает в обратном направлении
        targetIndex = isRTL
          ? (currentIndex + 1) % items.length
          : (currentIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = items.length - 1;
        break;
      default:
        return;
    }

    const targetHeader = items[targetIndex].querySelector('.accordion__header');
    if (targetHeader) {
      targetHeader.focus();
      e.preventDefault();
    }
  };

  // Удаляем прежний обработчик для клавиатурной навигации если он есть
  document.removeEventListener('keydown', handleKeyboardNavigation);

  // Добавляем обработчик для навигации с клавиатуры
  document.addEventListener('keydown', handleKeyboardNavigation);

  // Удаляем прежний обработчик события смены языка
  window.removeEventListener('languageChanged', checkAndApplyRTL);

  // Слушаем событие смены языка для обновления RTL стилей
  window.addEventListener('languageChanged', checkAndApplyRTL);

  console.log('FAQ аккордеон успешно инициализирован');

  // Создаем API для внешнего взаимодействия с аккордеоном
  const accordionAPI = {
    openItem: index => {
      if (index >= 0 && index < accordionItems.length) {
        closeAllItems(accordionItems[index]);
        accordionItems[index].classList.add('active');

        const header =
          accordionItems[index].querySelector('.accordion__header');
        const content = accordionItems[index].querySelector(
          '.accordion__content'
        );

        if (header) header.setAttribute('aria-expanded', 'true');
        if (content) content.removeAttribute('hidden');
      }
    },
    closeAll: () => closeAllItems(),
    // Функция для обновления аккордеона при смене языка
    updateContent: () => {
      checkAndApplyRTL();
      console.log('Аккордеон обновлен после смены языка');
    },
    // Функция очистки при уничтожении
    destroy: () => {
      try {
        console.log('Начало уничтожения аккордеона');

        window.removeEventListener('languageChanged', checkAndApplyRTL);
        document.removeEventListener('keydown', handleKeyboardNavigation);

        // Правильно удаляем обработчики событий для всех элементов
        accordionItems.forEach(item => {
          const header = item.querySelector('.accordion__header');
          const toggleBtn = item.querySelector('.accordion__toggle');
          const handler = clickHandlers.get(item);

          if (header && handler) {
            header.removeEventListener('click', handler);
            header.removeEventListener('keydown', handler);
          }

          if (toggleBtn && handler) {
            toggleBtn.removeEventListener('click', handler);
          }

          // Восстанавливаем pointer-events для дочерних элементов
          if (header) {
            const headerChildren = header.querySelectorAll(
              '*:not(.accordion__toggle)'
            );
            headerChildren.forEach(child => {
              child.style.pointerEvents = '';
            });
          }
        });

        // Очищаем Map с обработчиками
        clickHandlers.clear();

        console.log('Аккордеон успешно уничтожен');
        return true;
      } catch (error) {
        console.error('Ошибка при удалении аккордеона:', error);
        return false;
      }
    },
  };

  // Сохраняем текущий инстанс
  currentAccordionInstance = accordionAPI;

  return accordionAPI;
}

// Экспортируем функцию инициализации
export { initFaqAccordion };

// Если скрипт подключается напрямую без модульной системы
if (typeof window !== 'undefined') {
  // Инициализируем аккордеон при загрузке DOM
  document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, существует ли уже аккордеон
    if (!window.faqAccordeon) {
      window.faqAccordeon = initFaqAccordion();
    }

    // Подписываемся на событие смены языка
    window.addEventListener('languageChanged', event => {
      console.log('Обработчик события languageChanged вызван в accordion.js');
      if (
        window.faqAccordeon &&
        typeof window.faqAccordeon.updateContent === 'function'
      ) {
        window.faqAccordeon.updateContent();
      } else {
        console.log('Переинициализация аккордеона после смены языка');
        window.faqAccordeon = initFaqAccordion();
      }
    });
  });

  // Для совместимости с существующей структурой проекта
  window.initFaqAccordion = initFaqAccordion;
}
