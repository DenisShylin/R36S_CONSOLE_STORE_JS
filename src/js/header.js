// Инициализация событий для хедера
import i18next from 'i18next';

export function initHeader() {
  let isMenuOpen = false;
  let isScrolled = false;
  let isVisible = true;
  let prevScrollPos = window.scrollY;
  let scrollTimeout = null;

  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerLine = document.querySelector('.burger-line');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll(
    '.our-menu-link, .mobile-menu__link'
  );

  // Обработчик прокрутки страницы
  function handleScroll() {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos < currentScrollPos;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    if (currentScrollPos > 100) {
      setHeaderVisibility(!isScrolledDown);
    } else {
      setHeaderVisibility(true);
    }

    prevScrollPos = currentScrollPos;
    setHeaderScrolled(currentScrollPos > 0);

    scrollTimeout = setTimeout(() => {
      // Дополнительная логика при остановке прокрутки
    }, 150);
  }

  // Открытие/закрытие мобильного меню
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    updateMenuState();
  }

  // Обновление состояния меню
  function updateMenuState() {
    if (isMenuOpen) {
      header.classList.add('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'true');
      burgerLine.classList.add('open');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      header.classList.remove('menu-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerLine.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = 'unset';
    }
  }

  // Установка состояния прокрутки хедера
  function setHeaderScrolled(scrolled) {
    isScrolled = scrolled;
    if (scrolled) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Установка видимости хедера
  function setHeaderVisibility(visible) {
    isVisible = visible;
    if (visible) {
      header.classList.add('visible');
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
      header.classList.remove('visible');
    }
  }

  // Плавная прокрутка к секции
  function smoothScrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setHeaderVisibility(true);

      setTimeout(() => {
        const headerHeight = header.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        if (isMenuOpen) {
          isMenuOpen = false;
          updateMenuState();
        }

        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${href}`
        );

        setTimeout(() => {
          prevScrollPos = window.scrollY;
        }, 100);
      }, 50);
    }
  }

  // Обработка хэша в URL при загрузке
  function handleInitialHash() {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          const headerHeight = header.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }

  // Обработчик события смены языка
  function handleLanguageChange(event) {
    try {
      // Проверка, что хедер все еще в DOM
      const header = document.querySelector('.header');
      if (!header) {
        console.log(
          'Header no longer in DOM, skipping language change handling'
        );
        return;
      }

      // Обновляем направление текста для языков с RTL
      const rtlLanguages = ['ar'];
      const currentLang = event?.detail?.language || i18next.language;

      if (rtlLanguages.includes(currentLang)) {
        header.classList.add('rtl');
      } else {
        header.classList.remove('rtl');
      }

      // Дополнительная логика при смене языка, если необходимо
      console.log('Language changed in header to:', currentLang);

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
        header.classList.remove(`lang-${lang}`);
      });

      // Добавляем класс для текущего языка
      header.classList.add(`lang-${currentLang}`);

      // Обновляем атрибуты доступности
      const ariaLabel = header.querySelector('[aria-label]');
      if (ariaLabel) {
        const translatedLabel = i18next.t('header.aria-label.navigation');
        if (
          translatedLabel &&
          translatedLabel !== 'header.aria-label.navigation'
        ) {
          ariaLabel.setAttribute('aria-label', translatedLabel);
        }
      }
    } catch (error) {
      console.error('Error handling language change in header:', error);
    }
  }

  // Установка обработчиков событий
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile && isMenuOpen) {
      isMenuOpen = false;
      updateMenuState();
    }
  });

  // Добавляем обработчик для события смены языка
  window.addEventListener('languageChanged', handleLanguageChange);

  // Обработчики для кнопки бургера
  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }

  // Обработчики для ссылок в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
  });

  // Обработка хэша при загрузке
  handleInitialHash();

  // Проверяем текущий язык при инициализации
  handleLanguageChange();

  // Возвращаем функцию очистки
  return function cleanup() {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('languageChanged', handleLanguageChange);
    window.removeEventListener('resize', () => {});
    if (burgerBtn) {
      burgerBtn.removeEventListener('click', toggleMenu);
    }
    menuLinks.forEach(link => {
      link.removeEventListener('click', smoothScrollToSection);
    });
  };
}
