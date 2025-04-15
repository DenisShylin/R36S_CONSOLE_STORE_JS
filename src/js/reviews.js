// Reviews.js - Модифицированный скрипт для секции отзывов с поддержкой i18n и изображений 2х

// Импортируем i18next для доступа к переводам
import i18next from 'i18next';

// Импортируем изображения отзывов (1x)
import review1Webp from '/img/reviews/imm1_1x.webp';
import review1Jpg from '/img/reviews/imm1_1x.jpg';
import review2Webp from '/img/reviews/imm2_1x.webp';
import review2Jpg from '/img/reviews/imm2_1x.jpg';
import review3Webp from '/img/reviews/imm3_1x.webp';
import review3Jpg from '/img/reviews/imm3_1x.jpg';
import review4Webp from '/img/reviews/imm4_1x.webp';
import review4Jpg from '/img/reviews/imm4_1x.jpg';

// Добавляем импорт изображений высокого разрешения (2x)
import review1Webp2x from '/img/reviews/imm1_2x.webp';
import review1Jpg2x from '/img/reviews/imm1_2x.jpg';
import review2Webp2x from '/img/reviews/imm2_2x.webp';
import review2Jpg2x from '/img/reviews/imm2_2x.jpg';
import review3Webp2x from '/img/reviews/imm3_2x.webp';
import review3Jpg2x from '/img/reviews/imm3_2x.jpg';
import review4Webp2x from '/img/reviews/imm4_2x.webp';
import review4Jpg2x from '/img/reviews/imm4_2x.jpg';

// Функция инициализации секции отзывов
export function initReviews() {
  // Получаем базовый путь для корректных URL
  const basename = import.meta.env?.BASE_URL || '/';

  // Константа для определения мобильного устройства
  const MOBILE_BREAKPOINT = 1200;

  // Пути к изображениям отзывов (используем импортированные изображения)
  const reviewImages = {
    review1: {
      webp: review1Webp,
      jpg: review1Jpg,
      webp2x: review1Webp2x, // добавляем 2x версии
      jpg2x: review1Jpg2x,
    },
    review2: {
      webp: review2Webp,
      jpg: review2Jpg,
      webp2x: review2Webp2x, // добавляем 2x версии
      jpg2x: review2Jpg2x,
    },
    review3: {
      webp: review3Webp,
      jpg: review3Jpg,
      webp2x: review3Webp2x, // добавляем 2x версии
      jpg2x: review3Jpg2x,
    },
    review4: {
      webp: review4Webp,
      jpg: review4Jpg,
      webp2x: review4Webp2x, // добавляем 2x версии
      jpg2x: review4Jpg2x,
    },
  };

  // Данные отзывов с ключами для переводов
  const reviews = [
    {
      id: 1,
      rating: 5,
      colorKey: 'reviews.reviewItems.1.color',
      color: 'Purple 64GB', // Fallback текст
      authorKey: 'reviews.reviewItems.1.author',
      author: 'AliExpress Shopper', // Fallback текст
      dateKey: 'reviews.reviewItems.1.date',
      date: '21 Aug 2024', // Fallback текст
      textKey: 'reviews.reviewItems.1.text',
      text: "I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...", // Fallback текст
      images: {
        webp: reviewImages.review1.webp,
        jpeg: reviewImages.review1.jpg,
        webp2x: reviewImages.review1.webp2x,
        jpeg2x: reviewImages.review1.jpg2x,
      },
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      rating: 5,
      colorKey: 'reviews.reviewItems.2.color',
      color: 'Yellow 128G', // Fallback текст
      authorKey: 'reviews.reviewItems.2.author',
      author: 'V***h', // Fallback текст
      dateKey: 'reviews.reviewItems.2.date',
      date: '26 Aug 2024', // Fallback текст
      textKey: 'reviews.reviewItems.2.text',
      text: "After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.", // Fallback текст
      images: {
        webp: reviewImages.review4.webp,
        jpeg: reviewImages.review4.jpg,
        webp2x: reviewImages.review4.webp2x,
        jpeg2x: reviewImages.review4.jpg2x,
      },
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      colorKey: 'reviews.reviewItems.3.color',
      color: 'White 64GB', // Fallback текст
      authorKey: 'reviews.reviewItems.3.author',
      author: 'M***z', // Fallback текст
      dateKey: 'reviews.reviewItems.3.date',
      date: '22 Aug 2024', // Fallback текст
      textKey: 'reviews.reviewItems.3.text',
      text: "The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.", // Fallback текст
      images: {
        webp: reviewImages.review3.webp,
        jpeg: reviewImages.review3.jpg,
        webp2x: reviewImages.review3.webp2x,
        jpeg2x: reviewImages.review3.jpg2x,
      },
      helpful: 15,
      verified: true,
    },
    {
      id: 4,
      rating: 5,
      colorKey: 'reviews.reviewItems.4.color',
      color: 'Black 128GB', // Fallback текст
      authorKey: 'reviews.reviewItems.4.author',
      author: 'K***r', // Fallback текст
      dateKey: 'reviews.reviewItems.4.date',
      date: '22 Aug 2024', // Fallback текст
      textKey: 'reviews.reviewItems.4.text',
      text: "I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.", // Fallback текст
      images: {
        webp: reviewImages.review2.webp,
        jpeg: reviewImages.review2.jpg,
        webp2x: reviewImages.review2.webp2x,
        jpeg2x: reviewImages.review2.jpg2x,
      },
      helpful: 10,
      verified: true,
      mobileOnly: true,
    },
  ];

  // Отслеживаем карточки, которые уже были анимированы
  const animatedCards = new Set();

  // Переменная для отслеживания текущего hoveredCard
  let hoveredCardId = null;

  // Отслеживаем ширину экрана для проверки мобильных устройств
  let isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  // Функция создания иконки звезды для рейтинга
  function createStarIcon(filled = false) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('review-card__star');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', filled ? 'currentColor' : 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');

    const polygon = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polygon'
    );
    polygon.setAttribute(
      'points',
      '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
    );
    svg.appendChild(polygon);

    return svg;
  }

  // Функция создания иконки "verified"
  function createVerifiedIcon() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('review-card__verified');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20 6L9 17l-5-5');
    svg.appendChild(path);

    return svg;
  }

  // Функция для получения перевода с fallback на исходный текст
  function getTranslation(key, fallback) {
    if (!key) return fallback;
    const translation = i18next.t(key);
    // Если перевод не найден или равен ключу, используем fallback
    return translation && translation !== key ? translation : fallback;
  }

  // Создаем карточку отзыва из шаблона
  function createReviewCard(review) {
    const template = document.getElementById('reviewCardTemplate');
    if (!template) {
      console.error('Шаблон карточки отзыва не найден');
      return null;
    }

    const card = template.content.cloneNode(true).querySelector('.review-card');

    // Устанавливаем ID
    card.dataset.id = review.id;

    // Добавляем класс для мобильных устройств, если нужно
    if (review.mobileOnly) {
      card.classList.add('mobile-only');
      if (!isMobile) {
        card.style.display = 'none';
      }
    }

    // Рейтинг
    const ratingContainer = card.querySelector('.review-card__rating');
    for (let i = 0; i < 5; i++) {
      ratingContainer.appendChild(createStarIcon(i < review.rating));
    }

    // Цвет/вариант с поддержкой i18n
    const colorText = getTranslation(review.colorKey, review.color);
    card.querySelector('.review-card__variant').textContent = colorText;

    // Текст отзыва с поддержкой i18n
    const reviewText = getTranslation(review.textKey, review.text);
    card.querySelector('.review-card__text').textContent = reviewText;

    // Изображения с поддержкой 2x версий
    const picture = card.querySelector('picture');

    // Добавляем отладочную информацию
    console.log('Setting image paths for review #' + review.id + ':', {
      webp: review.images.webp,
      webp2x: review.images.webp2x,
      jpeg: review.images.jpeg,
      jpeg2x: review.images.jpeg2x,
    });

    // Устанавливаем srcset для webp с поддержкой 1x и 2x разрешений
    const webpSource = picture.querySelector('source');
    webpSource.setAttribute(
      'srcset',
      `${review.images.webp} 1x, ${review.images.webp2x} 2x`
    );

    // Устанавливаем src и srcset для jpeg изображения
    const img = picture.querySelector('img');
    img.setAttribute('src', review.images.jpeg);
    img.setAttribute(
      'srcset',
      `${review.images.jpeg} 1x, ${review.images.jpeg2x} 2x`
    );
    img.setAttribute('alt', `Review ${review.id}`);

    // Информация об авторе с поддержкой i18n
    const nameElement = card.querySelector('.review-card__name');
    if (review.verified) {
      nameElement.prepend(createVerifiedIcon());
    }
    const authorText = getTranslation(review.authorKey, review.author);
    nameElement.appendChild(document.createTextNode(authorText));

    // Дата с поддержкой i18n
    const dateText = getTranslation(review.dateKey, review.date);
    card.querySelector('.review-card__date').textContent = dateText;

    // Счетчик "Helpful" с поддержкой i18n
    // Используем формат template string с подстановкой значения
    const helpfulTemplate = getTranslation(
      'reviews.helpful',
      'Helpful ({{count}})'
    );
    const helpfulText = helpfulTemplate.replace('{{count}}', review.helpful);
    card.querySelector('.review-card__helpful-count').textContent = helpfulText;

    // Обработчики событий
    card.addEventListener('click', handleReviewClick);
    card.addEventListener('mouseenter', () => handleMouseEnter(review.id));
    card.addEventListener('mouseleave', handleMouseLeave);

    // Обработчики для кнопки "Helpful"
    const helpfulButton = card.querySelector('.review-card__helpful');
    helpfulButton.addEventListener('mouseenter', () => {
      helpfulButton.querySelector('svg').setAttribute('fill', 'currentColor');
      helpfulButton.querySelector('svg').classList.add('scale-125');
      helpfulButton.querySelector('svg').classList.remove('scale-100');
    });

    helpfulButton.addEventListener('mouseleave', () => {
      helpfulButton.querySelector('svg').setAttribute('fill', 'none');
      helpfulButton.querySelector('svg').classList.remove('scale-125');
      helpfulButton.querySelector('svg').classList.add('scale-100');
    });

    return card;
  }

  // Обработчик клика по карточке отзыва
  function handleReviewClick() {
    window.open(
      'https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html',
      '_blank',
      'noopener,noreferrer'
    );
  }

  // Обработчик наведения на карточку
  function handleMouseEnter(id) {
    hoveredCardId = id;
    const card = document.querySelector(`.review-card[data-id="${id}"]`);
    if (card) {
      const arrow = card.querySelector('.review-card__arrow-wrapper');
      if (arrow) {
        arrow.style.display = 'flex';
      }
    }
  }

  // Обработчик ухода курсора с карточки
  function handleMouseLeave() {
    const card = document.querySelector(
      `.review-card[data-id="${hoveredCardId}"]`
    );
    if (card) {
      const arrow = card.querySelector('.review-card__arrow-wrapper');
      if (arrow) {
        arrow.style.display = 'none';
      }
    }
    hoveredCardId = null;
  }

  // Отображение карточек отзывов
  function renderReviewCards() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) {
      console.error('Контейнер для отзывов не найден');
      return;
    }

    // Сохраняем шаблон перед манипуляциями
    const template = document.getElementById('reviewCardTemplate');

    // Вместо полной очистки, обновляем только необходимое
    // Проверяем, какие карточки уже существуют
    const existingCards = {};
    grid.querySelectorAll('.review-card').forEach(card => {
      if (card.dataset.id) {
        existingCards[card.dataset.id] = card;
      }
    });

    // Фильтруем отзывы для текущего размера экрана
    const displayedReviews = reviews.filter(
      review => !review.mobileOnly || (review.mobileOnly && isMobile)
    );

    // Создаем массив для хранения порядка карточек
    const cardsToDisplay = [];

    // Обрабатываем каждый отзыв
    displayedReviews.forEach(review => {
      // Проверяем, существует ли уже карточка
      if (existingCards[review.id]) {
        // Если карточка существует, обновляем ее видимость
        const card = existingCards[review.id];
        card.style.display = 'block';

        // Обновляем текстовые элементы с учетом текущего языка
        updateCardTexts(card, review);

        cardsToDisplay.push(card);
        delete existingCards[review.id]; // Удаляем из списка существующих
      } else {
        // Если карточки нет, создаем новую
        const card = createReviewCard(review);
        if (card) {
          cardsToDisplay.push(card);
        }
      }
    });

    // Скрываем карточки, которые больше не нужны (например, мобильные при переходе на десктоп)
    Object.values(existingCards).forEach(card => {
      if (card !== template) {
        card.style.display = 'none';
      }
    });

    // Очищаем сетку, сохраняя шаблон
    grid.innerHTML = '';
    grid.appendChild(template);

    // Добавляем все карточки в правильном порядке
    cardsToDisplay.forEach(card => {
      grid.appendChild(card);
    });

    // Запускаем наблюдение за видимостью карточек
    observeReviewCards();
  }

  // Функция для обновления текстов карточки при смене языка
  function updateCardTexts(card, review) {
    if (!card || !review) return;

    // Обновляем цвет/вариант
    const colorElement = card.querySelector('.review-card__variant');
    if (colorElement) {
      colorElement.textContent = getTranslation(review.colorKey, review.color);
    }

    // Обновляем текст отзыва
    const textElement = card.querySelector('.review-card__text');
    if (textElement) {
      textElement.textContent = getTranslation(review.textKey, review.text);
    }

    // Обновляем имя автора
    const nameElement = card.querySelector('.review-card__name');
    if (nameElement) {
      // Сохраняем иконку verified если она есть
      const verifiedIcon = nameElement.querySelector('.review-card__verified');

      // Очищаем элемент
      nameElement.textContent = '';

      // Восстанавливаем иконку
      if (verifiedIcon) {
        nameElement.appendChild(verifiedIcon);
      }

      // Добавляем переведенное имя автора
      nameElement.appendChild(
        document.createTextNode(getTranslation(review.authorKey, review.author))
      );
    }

    // Обновляем дату
    const dateElement = card.querySelector('.review-card__date');
    if (dateElement) {
      dateElement.textContent = getTranslation(review.dateKey, review.date);
    }

    // Обновляем текст "Helpful"
    const helpfulElement = card.querySelector('.review-card__helpful-count');
    if (helpfulElement) {
      const helpfulTemplate = getTranslation(
        'reviews.helpful',
        'Helpful ({{count}})'
      );
      helpfulElement.textContent = helpfulTemplate.replace(
        '{{count}}',
        review.helpful
      );
    }
  }

  // Наблюдение за видимостью карточек для анимации
  function observeReviewCards() {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver не поддерживается в этом браузере');
      document.querySelectorAll('.review-card').forEach(card => {
        card.classList.add('animate-in');
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            if (!animatedCards.has(id)) {
              entry.target.classList.add('animate-in');
              animatedCards.add(id);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.review-card').forEach(card => {
      observer.observe(card);
    });
  }

  // Обработка изменения размера окна
  function handleResize() {
    const newIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    // Обновляем значение флага мобильного устройства
    isMobile = newIsMobile;

    // Обновляем отображение карточек (всегда вызываем для стабильности)
    renderReviewCards();

    // Обновляем видимость мобильных карточек напрямую для большей стабильности
    document.querySelectorAll('.review-card').forEach(card => {
      if (card.classList.contains('mobile-only')) {
        card.style.display = isMobile ? 'block' : 'none';
      }
    });
  }

  // Обработчик события смены языка
  function handleLanguageChange(event) {
    console.log('Язык изменился, обновляем отзывы:', event?.detail?.language);

    // Перерисовываем все карточки с учетом нового языка
    renderReviewCards();

    // Устанавливаем направление текста в зависимости от языка
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      const rtlLanguages = ['ar']; // Список языков с RTL направлением
      const currentLang = event?.detail?.language || i18next.language;

      if (rtlLanguages.includes(currentLang)) {
        reviewsSection.classList.add('rtl');
      } else {
        reviewsSection.classList.remove('rtl');
      }
    }
  }

  // Инициализация
  function init() {
    // Добавляем обработчик смены языка
    window.addEventListener('languageChanged', handleLanguageChange);

    // Вызываем первичный рендеринг
    renderReviewCards();

    // Устанавливаем правильное направление текста при инициализации
    handleLanguageChange({ detail: { language: i18next.language } });

    // Добавляем обработчик изменения размера окна с задержкой (debounce)
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener('resize', debouncedResize);

    // Добавляем стили для анимации появления карточек
    const style = document.createElement('style');
    style.textContent = `
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Запускаем обработчик сразу после загрузки для правильной инициализации
    setTimeout(handleResize, 100);

    // Добавляем базовую микроразметку для SEO (минимальное добавление)
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection && !reviewsSection.hasAttribute('itemscope')) {
      reviewsSection.setAttribute('itemscope', '');
      reviewsSection.setAttribute('itemtype', 'http://schema.org/Product');

      // Добавляем только основные метатеги с поддержкой i18n
      const metaName = document.createElement('meta');
      metaName.setAttribute('itemprop', 'name');
      metaName.setAttribute('data-i18n', 'reviews.meta.productName');
      metaName.setAttribute('content', 'R36S Handheld Game Console');
      reviewsSection.prepend(metaName);

      const metaDesc = document.createElement('meta');
      metaDesc.setAttribute('itemprop', 'description');
      metaDesc.setAttribute('data-i18n', 'reviews.meta.productDescription');
      metaDesc.setAttribute(
        'content',
        'R36S Handheld Game Console with 3.5-inch IPS screen and retro games'
      );
      reviewsSection.prepend(metaDesc);
    }
  }

  // Запускаем инициализацию
  init();

  // Функция очистки (удаление слушателей событий, наблюдателей и т.д.)
  function cleanup() {
    // Удаляем обработчик изменения размера окна
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('resize', () => {}); // Удаляем также debounced версию

    // Удаляем обработчик смены языка
    window.removeEventListener('languageChanged', handleLanguageChange);

    // Если есть активный IntersectionObserver, отключаем его
    if ('IntersectionObserver' in window) {
      const observers = [];
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
      observers.forEach(obs => obs.disconnect());
    }

    // Удаляем обработчики событий с карточек
    document.querySelectorAll('.review-card').forEach(card => {
      card.removeEventListener('click', handleReviewClick);
      card.removeEventListener('mouseenter', () => {}); // Общий обработчик
      card.removeEventListener('mouseleave', handleMouseLeave);

      // Удаляем персональные обработчики mouseenter
      reviews.forEach(review => {
        card.removeEventListener('mouseenter', () =>
          handleMouseEnter(review.id)
        );
      });

      const helpfulButton = card.querySelector('.review-card__helpful');
      if (helpfulButton) {
        helpfulButton.removeEventListener('mouseenter', () => {});
        helpfulButton.removeEventListener('mouseleave', () => {});
      }
    });

    // Сообщаем о завершении очистки
    console.log('Reviews section cleanup completed');
  }

  // Возвращаем методы, которые могут понадобиться снаружи
  return {
    cleanup,
    renderReviewCards,
    // Добавляем метод для принудительного обновления текстов при смене языка
    updateTexts: () =>
      handleLanguageChange({ detail: { language: i18next.language } }),
  };
}
