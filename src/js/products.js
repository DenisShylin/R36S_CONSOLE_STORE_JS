// Инициализатор секции Products
import i18next from 'i18next';

export function initProducts() {
  console.log('Products секция инициализирована');

  // Определяем базовый путь с учетом режима разработки/продакшн
  const isDevelopment = import.meta.env
    ? import.meta.env.MODE === 'development'
    : true;
  const basename = isDevelopment ? '/' : '/R36S_STORE_JS/';

  // Данные из constants/productData.js с исправленными путями
  const productImages = {
    i0_0: {
      jpg: `${basename}img/products/i_0_0x.jpg`,
      webp: `${basename}img/products/i_0_0x.webp`,
    },
    i1: {
      jpg: `${basename}img/products/i_1_1x.jpg`,
      webp: `${basename}img/products/i_1_1x.webp`,
    },
    i2: {
      jpg: `${basename}img/products/i_2_1x.jpg`,
      webp: `${basename}img/products/i_2_1x.webp`,
    },
    i3: {
      jpg: `${basename}img/products/i_3_1x.jpg`,
      webp: `${basename}img/products/i_3_1x.webp`,
    },
    i4: {
      jpg: `${basename}img/products/i_4_1x.jpg`,
      webp: `${basename}img/products/i_4_1x.webp`,
    },
    i5: {
      jpg: `${basename}img/products/i_5_1x.jpg`,
      webp: `${basename}img/products/i_5_1x.webp`,
    },
    i6: {
      jpg: `${basename}img/products/i_6_1x.jpg`,
      webp: `${basename}img/products/i_6_1x.webp`,
    },
    i7: {
      jpg: `${basename}img/products/i_7_1x.jpg`,
      webp: `${basename}img/products/i_7_1x.webp`,
    },
    i8: {
      jpg: `${basename}img/products/i_8_1x.jpg`,
      webp: `${basename}img/products/i_8_1x.webp`,
    },
    i9: {
      jpg: `${basename}img/products/i_9_1x.jpg`,
      webp: `${basename}img/products/i_9_1x.webp`,
    },
    i10: {
      jpg: `${basename}img/products/i_10_1x.jpg`,
      webp: `${basename}img/products/i_10_1x.webp`,
    },
  };

  // Структура данных секций
  // Теперь используем ключи i18n вместо жестко заданных текстов
  const sections = [
    {
      id: 'getting-started',
      title: 'products.start_guide.title',
      content: {
        text: 'products.start_guide.text',
        images: {
          jpg: productImages.i0_0.jpg,
          webp: productImages.i0_0.webp,
        },
      },
    },
    {
      id: 'original-backup',
      title: 'products.original_backup.title',
      content: {
        text: 'products.original_backup.text',
        subsections: [
          {
            id: 'backup-procedure',
            title:
              'products.original_backup.subsections.backup_procedure.title',
            content: {
              text: 'products.original_backup.subsections.backup_procedure.text',
              images: {
                jpg: productImages.i1.jpg,
                webp: productImages.i1.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'custom-installation',
      title: 'products.custom_installation.title',
      content: {
        text: 'products.custom_installation.text',
        subsections: [
          {
            id: 'method-balena',
            title:
              'products.custom_installation.subsections.method_balena.title',
            content: {
              text: 'products.custom_installation.subsections.method_balena.text',
              images: {
                jpg: productImages.i2.jpg,
                webp: productImages.i2.webp,
              },
            },
          },
          {
            id: 'method-win32',
            title:
              'products.custom_installation.subsections.method_win32.title',
            content: {
              text: 'products.custom_installation.subsections.method_win32.text',
              images: {
                jpg: productImages.i3.jpg,
                webp: productImages.i3.webp,
              },
            },
          },
          {
            id: 'method-raspberry',
            title:
              'products.custom_installation.subsections.method_raspberry.title',
            content: {
              text: 'products.custom_installation.subsections.method_raspberry.text',
              images: {
                jpg: productImages.i4.jpg,
                webp: productImages.i4.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'firmware-options',
      title: 'products.firmware_options.title',
      content: {
        text: 'products.firmware_options.text',
        subsections: [
          {
            id: 'option-arkos',
            title: 'products.firmware_options.subsections.option_arkos.title',
            content: {
              text: 'products.firmware_options.subsections.option_arkos.text',
              images: {
                jpg: productImages.i5.jpg,
                webp: productImages.i5.webp,
              },
            },
          },
          {
            id: 'option-rocknix',
            title: 'products.firmware_options.subsections.option_rocknix.title',
            content: {
              text: 'products.firmware_options.subsections.option_rocknix.text',
              images: {
                jpg: productImages.i6.jpg,
                webp: productImages.i6.webp,
              },
            },
          },
          {
            id: 'option-amber',
            title: 'products.firmware_options.subsections.option_amber.title',
            content: {
              text: 'products.firmware_options.subsections.option_amber.text',
              images: {
                jpg: productImages.i7.jpg,
                webp: productImages.i7.webp,
              },
            },
          },
        ],
      },
    },
    {
      id: 'game-setup',
      title: 'products.game_setup.title',
      content: {
        text: 'products.game_setup.text',
        images: {
          jpg: productImages.i8.jpg,
          webp: productImages.i8.webp,
        },
      },
    },
    {
      id: 'helpful-tips',
      title: 'products.helpful_tips.title',
      content: {
        text: 'products.helpful_tips.text',
        images: {
          jpg: productImages.i9.jpg,
          webp: productImages.i9.webp,
        },
      },
    },
    {
      id: 'downloads',
      title: 'products.downloads.title',
      content: {
        downloads: [
          {
            file: 'Firmware v1.0.4 2024',
            link: 'https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit',
            date: '2024.04.13',
            version: 'v1.0.4',
          },
          {
            file: 'ArkOS_K36_v2.2025',
            link: 'https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view',
            date: '2023.12.22',
            version: 'v1.0.3',
          },
          {
            file: 'ArkOS_R35S-R36S_v2',
            link: 'https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view',
            date: '2023.11.16',
            version: 'v1.0.2',
          },
          {
            file: 'ArkOS_R35S-R36S_v2_P4',
            link: 'https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view',
            date: '2023.11.05',
            version: 'v1.0.0',
          },
        ],
      },
    },
  ];

  let activeSection = 'downloads';
  let isMobile = false;

  // Получение DOM элементов
  const productsNavList = document.getElementById('products-nav-list');
  const productsSections = document.getElementById('products-sections');
  const nav = document.getElementById('products-nav');

  // Проверка на мобильное устройство
  function checkMobile() {
    isMobile = window.innerWidth <= 1024;
    if (nav) {
      if (isMobile) {
        nav.classList.add('nav-mobile');
      } else {
        nav.classList.remove('nav-mobile');
      }
    }
  }

  // Обработчик переключения между секциями
  function handleSectionClick(sectionId) {
    activeSection = sectionId;

    // Обновление активных классов в навигации
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      if (item.dataset.sectionId === sectionId) {
        item.classList.add('nav-item-active');
      } else {
        item.classList.remove('nav-item-active');
      }
    });

    // Обновление видимости секций
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('section-active');
      } else {
        section.classList.remove('section-active');
      }
    });

    // Прокрутка к активной секции с учетом мобильного устройства
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = isMobile ? 80 : 20; // Больший отступ для мобильных
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  // Формирование HTML для меню навигации с поддержкой i18n
  function renderNavigation() {
    productsNavList.innerHTML = '';

    sections.forEach(section => {
      const navItem = document.createElement('button');
      navItem.className = `nav-item ${
        activeSection === section.id ? 'nav-item-active' : ''
      }`;
      navItem.dataset.sectionId = section.id;

      // Добавление поддержки i18n
      navItem.innerHTML = `
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span data-i18n="${section.title}">${i18next.t(section.title)}</span>
        `;

      navItem.addEventListener('click', () => handleSectionClick(section.id));
      productsNavList.appendChild(navItem);
    });
  }

  // Функция для разбиения текста на параграфы с поддержкой i18n
  function translateAndSplitToParagraphs(i18nKey) {
    const translatedText = i18next.t(i18nKey);
    return translatedText
      .split('\n')
      .filter(paragraph => paragraph.trim() !== '');
  }

  // В функции renderSectionContent для секции downloads
  function renderSectionContent(section) {
    if (section.id === 'downloads') {
      let html = '<div class="download-list">';

      section.content.downloads.forEach(item => {
        html += `
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${item.file}</div>
                <div class="download-meta">
                  <span class="update-label" data-i18n="products.downloads.update_label">${i18next.t(
                    'products.downloads.update_label'
                  )}</span>: ${item.date} • ${item.version}
                </div>
              </div>
            </div>
            <a href="${item.link}" class="download-button" target="_blank" 
              data-i18n-aria="products.downloads.download_aria"
              aria-label="${i18next.t('products.downloads.download_aria')}">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `;
      });

      html += '</div>';
      return html;
    }

    let html = '<div class="section-content"><div class="text-content">';

    // Добавление текста с разбивкой на параграфы с переводом
    const paragraphs = translateAndSplitToParagraphs(section.content.text);
    paragraphs.forEach(paragraph => {
      html += `<p>${paragraph.trim()}</p>`;
    });

    html += '</div>';

    // Добавление изображений если они есть
    if (section.content.images) {
      html += `
          <div class="image-container">
            <picture>
              <source srcset="${section.content.images.webp}" type="image/webp">
              <img src="${section.content.images.jpg}" alt="${i18next.t(
        section.title
      )}" class="section-image" loading="lazy">
            </picture>
          </div>
        `;
    }

    // Добавление подразделов если они есть
    if (section.content.subsections) {
      html += '<div class="subsections">';

      section.content.subsections.forEach(subsection => {
        html += `
            <div class="subsection">
              <h3 class="subsection-title" data-i18n="${
                subsection.title
              }">${i18next.t(subsection.title)}</h3>
              <div class="subsection-content">
                <div class="text-content">
          `;

        // Добавление текста подраздела с переводом
        const subParagraphs = translateAndSplitToParagraphs(
          subsection.content.text
        );
        subParagraphs.forEach(paragraph => {
          html += `<p>${paragraph.trim()}</p>`;
        });

        html += '</div>';

        // Добавление изображений подраздела
        if (subsection.content.images) {
          html += `
              <div class="image-container">
                <picture>
                  <source srcset="${
                    subsection.content.images.webp
                  }" type="image/webp">
                  <img src="${subsection.content.images.jpg}" alt="${i18next.t(
            subsection.title
          )}" class="subsection-image" loading="lazy">
                </picture>
              </div>
            `;
        }

        html += '</div></div>';
      });

      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  // Формирование HTML для всех секций с поддержкой i18n
  function renderSections() {
    productsSections.innerHTML = '';

    sections.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.id = section.id;
      sectionElement.className = `section ${
        activeSection === section.id ? 'section-active' : ''
      }`;

      sectionElement.innerHTML = `
          <h2 class="section-title" data-i18n="${section.title}">${i18next.t(
        section.title
      )}</h2>
          ${renderSectionContent(section)}
        `;

      productsSections.appendChild(sectionElement);
    });
  }

  function updateContent() {
    renderNavigation();
    renderSections();

    // Обновление элементов секции загрузок после рендеринга
    document.querySelectorAll('.update-label').forEach(el => {
      if (el.hasAttribute('data-i18n')) {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18next.t(key);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', i18next.t(key));
    });
  }

  // Инициализация компонента
  function initialize() {
    checkMobile();
    renderNavigation();
    renderSections();

    // Обновляем навигационный заголовок для поддержки i18n
    const navTitle = document.querySelector('.nav-title');
    if (navTitle) {
      navTitle.setAttribute('data-i18n', 'products.guide_nav_title');
      navTitle.textContent = i18next.t('products.guide_nav_title', 'Guide');
    }

    // Обновляем заголовок секции
    const sectionTitle = document.querySelector('.section-label');
    if (sectionTitle) {
      sectionTitle.setAttribute('data-i18n', 'products.section_label');
      sectionTitle.textContent = i18next.t(
        'products.section_label',
        'FIRMWARE'
      );
    }

    // Обновляем основной заголовок руководства
    const guideTitle = document.querySelector('.title');
    if (guideTitle) {
      guideTitle.setAttribute('data-i18n', 'products.guide_title');
      guideTitle.textContent = i18next.t(
        'products.guide_title',
        'R36S Console Firmware Installation & Customization Guide'
      );
    }

    // Обновляем введение
    const guideIntro = document.querySelector('.guide-intro p');
    if (guideIntro) {
      guideIntro.setAttribute('data-i18n', 'products.guide_intro');
      guideIntro.textContent = i18next.t('products.guide_intro');
    }

    // Обновляем заголовок связанных ресурсов
    const relatedResourcesTitle = document.querySelector(
      '.related-resources h2'
    );
    if (relatedResourcesTitle) {
      relatedResourcesTitle.setAttribute(
        'data-i18n',
        'products.related_resources_title'
      );
      relatedResourcesTitle.textContent = i18next.t(
        'products.related_resources_title',
        'Related Resources'
      );
    }

    // Обновляем список связанных ресурсов
    const relatedLinks = document.querySelectorAll('.related-resources a');
    const relatedLinkIds = [
      'products.related_resources.custom_installation',
      'products.related_resources.firmware_options',
      'products.related_resources.game_setup',
      'products.related_resources.downloads',
    ];

    relatedLinks.forEach((link, index) => {
      if (index < relatedLinkIds.length) {
        link.setAttribute('data-i18n', relatedLinkIds[index]);
        link.textContent = i18next.t(relatedLinkIds[index]);
      }
    });

    // Добавление слушателя для изменения размера окна
    window.addEventListener('resize', checkMobile);

    // Добавляем слушатель события изменения языка
    window.addEventListener('languageChanged', updateContent);

    console.log('Products: Инициализация завершена с поддержкой i18n');
  }

  // Запуск инициализации, если DOM элементы найдены
  if (productsNavList && productsSections && nav) {
    initialize();
  } else {
    console.error('Не найдены необходимые DOM элементы для секции Products');
  }

  // Функция очистки при уничтожении компонента
  function cleanup() {
    // Удаляем слушатели событий
    window.removeEventListener('resize', checkMobile);
    window.removeEventListener('languageChanged', updateContent);
    console.log('Products: Слушатели событий удалены');
  }

  // Возвращаем методы, которые могут быть полезны для внешнего использования
  return cleanup;
}
