// Модуль инициализации мобильного меню
import i18next from 'i18next';

export function initMobileMenu() {
  // Находим существующее мобильное меню
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) {
    console.error('Мобильное меню не найдено в DOM');
    return;
  }

  // Находим кнопку закрытия в меню
  const closeButton = mobileMenu.querySelector('.close-button');
  if (!closeButton) {
    console.error('Кнопка закрытия не найдена в мобильном меню');
    return;
  }

  // Добавляем обработчик события для кнопки закрытия
  closeButton.addEventListener('click', () => {
    closeMobileMenu();
  });

  // Функция закрытия мобильного меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    // Сбрасываем состояние кнопки бургера
    const burgerLine = document.querySelector('.burger-line');
    if (burgerLine) burgerLine.classList.remove('open');
    // Восстанавливаем прокрутку
    document.body.style.overflow = 'unset';
    // Обновляем состояние хедера
    const header = document.querySelector('.header');
    if (header) header.classList.remove('menu-open');
    // Установим атрибут aria-expanded в false для кнопки бургера
    const burgerBtn = document.querySelector('.burger-btn');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
  }

  // Добавляем обработчики для всех ссылок меню для закрытия меню при клике
  const menuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Небольшая задержка перед закрытием, чтобы пользователь видел эффект нажатия
      setTimeout(() => {
        closeMobileMenu();
      }, 150);
    });
  });

  // Добавляем обработчик клика на фон меню для закрытия
  const menuBackground = mobileMenu.querySelector('.mobile-menu__background');
  if (menuBackground) {
    menuBackground.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Добавляем анимацию появления иконок при открытии меню
  function setupIconAnimations() {
    const icons = mobileMenu.querySelectorAll('.mobile-menu__icon');
    icons.forEach((icon, index) => {
      // Устанавливаем начальную прозрачность и смещение
      icon.style.opacity = '0';
      icon.style.transform = 'translateX(-20px)';

      // Добавляем обработчик для анимации при открытии меню
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
              // Анимируем появление иконок с задержкой для каждой следующей
              setTimeout(() => {
                icon.style.transition = 'all 0.4s ease';
                icon.style.opacity = '1';
                icon.style.transform = 'translateX(0)';
              }, 100 + index * 70);
            } else {
              // Сбрасываем стили при закрытии
              icon.style.opacity = '0';
              icon.style.transform = 'translateX(-20px)';
            }
          }
        });
      });

      observer.observe(mobileMenu, { attributes: true });
    });
  }

  // Обработчик события смены языка
  function handleLanguageChange(event) {
    try {
      // Проверка, что мобильное меню все еще в DOM
      const mobileMenu = document.querySelector('.mobile-menu');
      if (!mobileMenu) {
        console.log(
          'Mobile menu no longer in DOM, skipping language change handling'
        );
        return;
      }

      // Обновляем направление текста для языков с RTL
      const rtlLanguages = ['ar'];
      const currentLang = event?.detail?.language || i18next.language;

      if (rtlLanguages.includes(currentLang)) {
        mobileMenu.classList.add('rtl');

        // Дополнительные настройки для RTL, если требуются
        const menuItems = mobileMenu.querySelectorAll('.mobile-menu__item');
        menuItems.forEach(item => {
          item.classList.add('rtl');
        });
      } else {
        mobileMenu.classList.remove('rtl');

        // Удаление RTL классов с элементов меню
        const menuItems = mobileMenu.querySelectorAll('.mobile-menu__item');
        menuItems.forEach(item => {
          item.classList.remove('rtl');
        });
      }

      console.log('Language changed in mobile menu to:', currentLang);

      // Добавляем дополнительные классы для разных языков
      // Удаляем все языковые классы
      const supportedLanguages = [
        'en',
        'ru',
        'ar',
        'be',
        'de',
        'es',
        'fr',
        'it',
        'ja',
        'ko',
        'nl',
        'pt',
        'tr',
        'uk',
      ];
      supportedLanguages.forEach(lang => {
        mobileMenu.classList.remove(`lang-${lang}`);
      });

      // Добавляем класс для текущего языка
      mobileMenu.classList.add(`lang-${currentLang}`);

      // Обновляем атрибуты доступности
      const closeButton = mobileMenu.querySelector('.close-button');
      if (closeButton) {
        const translatedLabel = i18next.t('mobilemenu.close');
        if (translatedLabel && translatedLabel !== 'mobilemenu.close') {
          closeButton.setAttribute('aria-label', translatedLabel);
        }
      }
    } catch (error) {
      console.error('Error handling language change in mobile menu:', error);
    }
  }

  // Добавляем обработчик для события смены языка
  window.addEventListener('languageChanged', handleLanguageChange);

  // Запускаем настройку анимации
  setupIconAnimations();

  // Проверяем текущий язык при инициализации
  handleLanguageChange();

  console.log('Мобильное меню с иконками инициализировано');

  // Возвращаем функцию очистки
  return function cleanup() {
    if (closeButton) {
      closeButton.removeEventListener('click', closeMobileMenu);
    }

    menuLinks.forEach(link => {
      link.removeEventListener('click', () => {});
    });

    if (menuBackground) {
      menuBackground.removeEventListener('click', closeMobileMenu);
    }

    window.removeEventListener('languageChanged', handleLanguageChange);
  };
}
