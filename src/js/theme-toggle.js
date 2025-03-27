// text-brightness-toggle.js - Компонент переключения яркости текста для секций Articles и R36S Official Website

export function initThemeToggle() {
  console.log('Инициализация переключателей яркости текста в блоках - НАЧАЛО');

  // Проверка, была ли уже инициализирована функция
  if (window._themeToggleInitialized) {
    console.warn(
      'Обнаружена повторная инициализация переключателей яркости. Пропускаем...'
    );
    return window._themeToggleCleanup;
  }

  // Устанавливаем флаг инициализации
  window._themeToggleInitialized = true;

  // Находим секции, в которых будем добавлять переключатели
  const articlesSection =
    document.getElementById('articles') || document.querySelector('.articles');
  const officialWebsiteSection =
    document.getElementById('official-website') ||
    document.querySelector('.official-website');
  const retroGamingSection =
    document.getElementById('retro-gaming') ||
    document.querySelector('.retro-gaming');

  if (!articlesSection && !officialWebsiteSection && !retroGamingSection) {
    console.error(
      'Секции для добавления переключателей яркости текста не найдены'
    );
    return;
  }

  // Массив для хранения всех созданных кнопок
  const createdButtons = [];

  // Функция для добавления переключателей в указанную секцию с заданным стилем
  function addTogglesToSection(section, preferredStyle) {
    if (!section) return;

    console.log(
      `Добавление переключателей в секцию ${section.id || section.className}`
    );

    // Находим все блоки с текстом в секции
    const blocks = section.querySelectorAll('.article');
    console.log(
      `Найдено ${blocks.length} блоков для добавления переключателей в секции ${
        section.id || section.className
      }`
    );

    // Добавляем кнопку переключения в каждый блок с текстом
    blocks.forEach((block, index) => {
      // Используем предпочтительный стиль, если указан, или циклически меняем стили
      const buttonStyle =
        preferredStyle !== undefined ? preferredStyle : index % 3;

      // Проверка, есть ли уже кнопка в блоке
      const existingButton = block.querySelector(
        '.brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label'
      );
      if (existingButton) {
        console.warn(
          `Блок #${index} уже содержит кнопку переключения. Пропускаем создание.`
        );
        return;
      }

      // Создаем кнопку переключения
      const brightnessToggle = document.createElement('button');
      brightnessToggle.setAttribute('type', 'button'); // Добавляем type="button" чтобы избежать поведения по умолчанию

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
          const titleElement = block.querySelector('.article__title');

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
            block.insertBefore(brightnessToggle, block.firstChild);
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
          block.appendChild(brightnessToggle);
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
          const titleEl = block.querySelector('.article__title');

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
            block.insertBefore(brightnessToggle, block.firstChild);
          }
          break;
      }

      // Сохраняем кнопку в массив
      createdButtons.push(brightnessToggle);
    });
  }

  // Добавляем переключатели в секцию Articles (с циклическими стилями как было раньше)
  if (articlesSection) {
    addTogglesToSection(articlesSection);
  }

  // Определяем, какой стиль используется в секции R36S Retro Gaming
  let retroGamingStyle;
  if (retroGamingSection) {
    const retroGamingBlocks = retroGamingSection.querySelectorAll('.article');
    if (retroGamingBlocks.length > 0) {
      const retroButton = retroGamingBlocks[0].querySelector(
        '.brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label'
      );

      if (retroButton) {
        // Определяем стиль по классам кнопки
        if (retroButton.classList.contains('brightness-toggle-corner')) {
          retroGamingStyle = 1;
        } else if (
          retroButton.classList.contains('brightness-toggle-with-label')
        ) {
          retroGamingStyle = 2;
        } else {
          retroGamingStyle = 0;
        }
        console.log(
          `Обнаружен стиль кнопки в секции R36S Retro Gaming: ${retroGamingStyle}`
        );
      }
    }
  }

  // Добавляем переключатели в секцию R36S Official Website с тем же стилем, что и в Retro Gaming
  if (officialWebsiteSection) {
    addTogglesToSection(
      officialWebsiteSection,
      retroGamingStyle !== undefined ? retroGamingStyle : 1
    );
  }

  // Добавляем отладочную информацию о созданных кнопках
  console.log(`Создано ${createdButtons.length} кнопок переключения`);

  // Удаляем все существующие обработчики перед добавлением новых
  createdButtons.forEach(button => {
    const clonedButton = button.cloneNode(true);
    if (button.parentNode) {
      button.parentNode.replaceChild(clonedButton, button);
    }
    // Заменяем кнопку в массиве
    const index = createdButtons.indexOf(button);
    if (index !== -1) {
      createdButtons[index] = clonedButton;
    }
  });

  // Добавляем обработчик события клика для всех кнопок
  createdButtons.forEach(brightnessToggle => {
    // Находим родительский блок статьи для кнопки
    const articleBlock = brightnessToggle.closest('.article');

    if (!articleBlock) {
      console.error(
        'Не найден родительский блок .article для кнопки переключения'
      );
      return;
    }

    brightnessToggle.addEventListener('click', function (event) {
      // Предотвращаем всплытие события
      event.preventDefault();
      event.stopPropagation();

      console.log('Клик по кнопке переключения яркости');
      console.log(
        'Состояние до переключения:',
        articleBlock.classList.contains('bright-text') ? 'яркий' : 'обычный'
      );

      // Переключаем класс для этого конкретного блока
      articleBlock.classList.toggle('bright-text');

      // Переключаем класс активности для этой конкретной кнопки
      brightnessToggle.classList.toggle('active');

      console.log(
        'Состояние после переключения:',
        articleBlock.classList.contains('bright-text') ? 'яркий' : 'обычный'
      );

      // Для кнопки с лейблом меняем текст
      if (brightnessToggle.classList.contains('brightness-toggle-with-label')) {
        const label = brightnessToggle.querySelector(
          '.brightness-toggle-label'
        );
        if (label) {
          label.textContent = articleBlock.classList.contains('bright-text')
            ? 'Тусклее'
            : 'Ярче';
          console.log('Изменен текст лейбла на:', label.textContent);
        }
      }

      // Сохраняем выбор пользователя для каждого блока индивидуально
      const blockId =
        articleBlock.getAttribute('data-article-id') ||
        articleBlock.id ||
        Array.from(
          articleBlock.closest('section').querySelectorAll('.article')
        ).indexOf(articleBlock);

      // Добавляем идентификатор секции к ключу хранилища для избежания конфликтов между секциями
      const sectionId = articleBlock.closest('section')
        ? articleBlock.closest('section').id ||
          articleBlock.closest('section').className.split(' ')[0]
        : 'unknown';

      const currentBrightness = articleBlock.classList.contains('bright-text')
        ? 'bright'
        : 'normal';
      localStorage.setItem(
        `r36s-${sectionId}-article-brightness-${blockId}`,
        currentBrightness
      );

      console.log(
        `Яркость текста в блоке ${blockId} секции ${sectionId} изменена на: ${currentBrightness}`
      );
    });

    // Устанавливаем начальное состояние для каждого блока индивидуально
    const blockId =
      articleBlock.getAttribute('data-article-id') ||
      articleBlock.id ||
      Array.from(
        articleBlock.closest('section').querySelectorAll('.article')
      ).indexOf(articleBlock);

    // Добавляем идентификатор секции к ключу хранилища
    const sectionId = articleBlock.closest('section')
      ? articleBlock.closest('section').id ||
        articleBlock.closest('section').className.split(' ')[0]
      : 'unknown';

    const savedBlockBrightness = localStorage.getItem(
      `r36s-${sectionId}-article-brightness-${blockId}`
    );

    // Если есть сохраненное состояние для этого блока, применяем его
    if (savedBlockBrightness === 'bright') {
      articleBlock.classList.add('bright-text');
      brightnessToggle.classList.add('active');

      // Для кнопки с лейблом меняем текст
      if (brightnessToggle.classList.contains('brightness-toggle-with-label')) {
        const label = brightnessToggle.querySelector(
          '.brightness-toggle-label'
        );
        if (label) {
          label.textContent = 'Тусклее';
        }
      }
      console.log(
        `Восстановлено состояние для блока ${blockId} в секции ${sectionId}: яркий`
      );
    } else {
      console.log(`Блок ${blockId} в секции ${sectionId} в обычном режиме`);
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

  // Сохраняем функцию очистки
  const cleanup = function () {
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

    // Сбрасываем флаг инициализации
    window._themeToggleInitialized = false;

    console.log('Очистка переключателей яркости выполнена');
  };

  // Сохраняем функцию очистки в глобальный объект
  window._themeToggleCleanup = cleanup;

  console.log(
    'Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА'
  );

  return cleanup;
}
