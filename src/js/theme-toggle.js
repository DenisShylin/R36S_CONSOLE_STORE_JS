// text-brightness-toggle.js - Компонент переключения яркости текста для секции Articles

export function initThemeToggle() {
  console.log('Инициализация переключателей яркости текста в блоках');

  const articlesSection =
    document.getElementById('articles') || document.querySelector('.articles');

  if (!articlesSection) {
    console.error(
      'Секция Articles не найдена для добавления переключателей яркости текста'
    );
    return;
  }

  // Проверяем, было ли состояние яркости уже установлено
  // При индивидуальном переключении блоков это не используется
  // const savedBrightness = localStorage.getItem('r36s-articles-text-brightness');
  // const initialBrightState = savedBrightness === 'bright';

  // if (initialBrightState) {
  //   articlesSection.classList.add('bright-text');
  // }

  // Находим все блоки с текстом в секции Articles
  const articleBlocks = articlesSection.querySelectorAll('.article');

  // Массив для хранения всех созданных кнопок
  const createdButtons = [];

  // Добавляем кнопку переключения в каждый блок с текстом
  articleBlocks.forEach((articleBlock, index) => {
    // Выбираем стиль и положение кнопки - это можно изменять для разных вариантов отображения
    const buttonStyle = index % 3; // Циклически меняем стиль (0, 1, 2, 0, 1, 2...)

    // Создаем кнопку переключения
    const brightnessToggle = document.createElement('button');

    switch (buttonStyle) {
      case 0: // Стандартный вариант - рядом с заголовком
        brightnessToggle.className = 'brightness-toggle';

        // Добавляем SVG иконку лампочки
        brightnessToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `;

        // Находим заголовок блока для размещения кнопки рядом с ним
        const titleElement = articleBlock.querySelector('.article__title');

        if (titleElement) {
          // Создаем контейнер для заголовка и кнопки
          const titleContainer = document.createElement('div');
          titleContainer.className = 'article__title-container';

          // Копируем заголовок в контейнер
          const clonedTitle = titleElement.cloneNode(true);
          titleContainer.appendChild(clonedTitle);
          titleContainer.appendChild(brightnessToggle);

          // Заменяем оригинальный заголовок на контейнер с заголовком и кнопкой
          titleElement.parentNode.replaceChild(titleContainer, titleElement);
        } else {
          // Если заголовок не найден, добавляем кнопку в начало блока
          articleBlock.insertBefore(brightnessToggle, articleBlock.firstChild);
        }
        break;

      case 1: // Вариант в углу блока
        brightnessToggle.className =
          'brightness-toggle brightness-toggle-corner';

        // Добавляем SVG иконку лампочки
        brightnessToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `;

        // Добавляем кнопку в блок статьи (она будет позиционироваться абсолютно)
        articleBlock.appendChild(brightnessToggle);
        break;

      case 2: // Вариант с текстовой подписью
        brightnessToggle.className = 'brightness-toggle-with-label';

        // Добавляем лейбл и иконку
        brightnessToggle.innerHTML = `
          <span class="brightness-toggle-label">Ярче</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `;

        // Находим заголовок блока для размещения кнопки рядом с ним
        const titleEl = articleBlock.querySelector('.article__title');

        if (titleEl) {
          // Создаем контейнер для заголовка и кнопки
          const titleContainer = document.createElement('div');
          titleContainer.className = 'article__title-container';

          // Копируем заголовок в контейнер
          const clonedTitle = titleEl.cloneNode(true);
          titleContainer.appendChild(clonedTitle);
          titleContainer.appendChild(brightnessToggle);

          // Заменяем оригинальный заголовок на контейнер с заголовком и кнопкой
          titleEl.parentNode.replaceChild(titleContainer, titleEl);
        } else {
          // Если заголовок не найден, добавляем кнопку в начало блока
          articleBlock.insertBefore(brightnessToggle, articleBlock.firstChild);
        }
        break;
    }

    // Сохраняем кнопку в массив
    createdButtons.push(brightnessToggle);
  });

  // Добавляем обработчик события клика для всех кнопок - теперь каждая кнопка работает только со своим блоком
  createdButtons.forEach(brightnessToggle => {
    // Находим родительский блок статьи для кнопки
    const articleBlock = brightnessToggle.closest('.article');

    if (!articleBlock) return; // Если блок не найден, пропускаем

    brightnessToggle.addEventListener('click', function () {
      // Переключаем класс для этого конкретного блока
      articleBlock.classList.toggle('bright-text');

      // Переключаем класс активности для этой конкретной кнопки
      brightnessToggle.classList.toggle('active');

      // Для кнопки с лейблом меняем текст
      if (brightnessToggle.classList.contains('brightness-toggle-with-label')) {
        const label = brightnessToggle.querySelector(
          '.brightness-toggle-label'
        );
        if (label) {
          label.textContent = articleBlock.classList.contains('bright-text')
            ? 'Тусклее'
            : 'Ярче';
        }
      }

      // Сохраняем выбор пользователя для каждого блока индивидуально
      const blockId =
        articleBlock.getAttribute('data-article-id') ||
        articleBlock.id ||
        Array.from(articleBlocks).indexOf(articleBlock);

      const currentBrightness = articleBlock.classList.contains('bright-text')
        ? 'bright'
        : 'normal';
      localStorage.setItem(
        `r36s-article-brightness-${blockId}`,
        currentBrightness
      );

      console.log(
        `Яркость текста в блоке ${blockId} изменена на: ${currentBrightness}`
      );
    });

    // Устанавливаем начальное состояние для каждого блока индивидуально
    const blockId =
      articleBlock.getAttribute('data-article-id') ||
      articleBlock.id ||
      Array.from(articleBlocks).indexOf(articleBlock);

    const savedBlockBrightness = localStorage.getItem(
      `r36s-article-brightness-${blockId}`
    );

    // Если есть сохраненное состояние для этого блока, применяем его
    if (savedBlockBrightness === 'bright') {
      articleBlock.classList.add('bright-text');
      brightnessToggle.classList.add('active');

      // Для кнопки с лейблом меняем текст
      if (buttonStyle === 2) {
        const label = brightnessToggle.querySelector(
          '.brightness-toggle-label'
        );
        if (label) {
          label.textContent = 'Тусклее';
        }
      }
    }
  });

  // Добавляем стили для переключателя и эффектов яркости
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Контейнер для заголовка и кнопки */
    .article__title-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      position: relative;
      gap: 15px;
    }
    
    .article__title-container .article__title {
      margin-bottom: 0;
      flex: 1;
    }
    
    /* Стили для переключателя яркости */
    .brightness-toggle {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(59, 130, 246, 0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1), 
                  0 3px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.25s ease;
      padding: 0;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    
    .brightness-toggle:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), transparent);
      opacity: 0.5;
      transition: opacity 0.3s ease;
      border-radius: 12px;
    }
    
    .brightness-toggle:hover {
      transform: translateY(-2px);
      box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.2), 
                  0 4px 8px rgba(15, 23, 42, 0.3);
      border-color: rgba(59, 130, 246, 0.5);
    }
    
    .brightness-toggle:active {
      transform: translateY(1px);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    
    .brightness-toggle__icon {
      width: 20px;
      height: 20px;
      stroke: rgba(255, 255, 255, 0.8);
      transition: all 0.25s ease;
    }
    
    .brightness-toggle.active {
      background: rgba(59, 130, 246, 0.3);
      border-color: rgba(96, 165, 250, 0.4);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
                  0 3px 8px rgba(59, 130, 246, 0.25);
    }
    
    .brightness-toggle.active .brightness-toggle__icon {
      stroke: rgba(255, 255, 255, 1);
      transform: scale(1.1);
    }
    
    /* Стили для изменения яркости текста */
    .article.bright-text .article__content {
      color: #FFFFFF;
    }
    
    .article.bright-text .article__content strong {
      color: #90CAF9;
    }
    
    .article.bright-text .article__content em {
      color: #FFFFFF;
    }
    
    .article.bright-text .article__content mark {
      color: #F8BBD0;
    }
    
    .article.bright-text .article__content a {
      color: #90CAF9;
    }
    
    .article.bright-text .article__content ul li {
      color: #FFFFFF;
    }
    
    /* Яркий текст для FAQ */
    .articles.bright-text .articles__faq-answer {
      color: #FFFFFF;
    }
    
    .articles.bright-text .articles__faq-answer p {
      color: #FFFFFF;
    }
    
    /* Создаем альтернативное положение кнопки - в правом верхнем углу блока статьи */
    .article {
      position: relative;
    }
    
    .brightness-toggle-corner {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 5;
    }
    
    /* Адаптивные стили для кнопки */
    @media (max-width: 768px) {
      .brightness-toggle {
        width: 32px;
        height: 32px;
      }
      
      .brightness-toggle__icon {
        width: 18px;
        height: 18px;
      }
      
      .article__title-container {
        flex-wrap: wrap;
      }
      
      /* На мобильных устройствах можно переместить кнопку вниз под заголовок */
      .brightness-toggle-corner {
        top: 10px;
        right: 10px;
      }
    }
    
    @media (max-width: 480px) {
      .brightness-toggle {
        width: 28px;
        height: 28px;
        border-radius: 8px;
      }
      
      .brightness-toggle__icon {
        width: 16px;
        height: 16px;
        
      }
    }
    
    /* Вариант с лейблом для кнопки */
    .brightness-toggle-with-label {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.4);
      padding: 4px 8px 4px 12px;
      border-radius: 24px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      transition: all 0.25s ease;
      cursor: pointer;
      user-select: none;
    }
    
    .brightness-toggle-with-label:hover {
      background: rgba(15, 23, 42, 0.5);
      border-color: rgba(59, 130, 246, 0.3);
    }
    
    .brightness-toggle-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
    }
    
    .brightness-toggle-with-label.active {
      background: rgba(59, 130, 246, 0.2);
      border-color: rgba(59, 130, 246, 0.4);
    }
    
    .brightness-toggle-with-label.active .brightness-toggle-label {
      color: rgba(255, 255, 255, 0.9);
    }
    
    /* Плавные переходы для текста */
    .article__content, 
    .article__content strong, 
    .article__content em, 
    .article__content mark, 
    .article__content a,
    .articles__faq-answer,
    .articles__faq-answer p {
      transition: color 0.4s ease, text-shadow 0.4s ease;
    }
  `;

  document.head.appendChild(styleElement);

  // Возвращаем функцию очистки
  return function cleanup() {
    // Удаляем все созданные кнопки
    createdButtons.forEach(button => {
      if (button && button.parentNode) {
        const titleContainer = button.closest('.article__title-container');
        if (titleContainer) {
          // Если кнопка находится в контейнере с заголовком, восстанавливаем исходную структуру
          const title = titleContainer.querySelector('.article__title');
          if (title && titleContainer.parentNode) {
            titleContainer.parentNode.replaceChild(title, titleContainer);
          }
        } else {
          // Иначе просто удаляем кнопку
          button.parentNode.removeChild(button);
        }
      }
    });

    // Удаляем стили
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement);
    }
  };
}
