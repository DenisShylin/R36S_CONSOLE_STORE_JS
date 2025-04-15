// Articles.js - Инициализатор секции Articles с поддержкой i18n и SEO-оптимизацией
import { initFaqAccordion } from './accordion.js';
import i18next from 'i18next'; // Импортируем i18next для доступа к переводам

// Флаг для отслеживания состояния инициализации
let isInitialized = false;

export function initArticles(forceReinitialize = false) {
  // В App.js элементы загружаются со строчной первой буквой в id
  const articlesSection = document.getElementById('articles');

  console.log('Инициализация Articles:', {
    forceReinitialize,
    isInitialized,
    sectionExists: !!articlesSection,
  });

  if (!articlesSection) {
    console.warn('Секция Articles не найдена в DOM, пробуем найти с другим id');
    // Пробуем альтернативные варианты id
    const alternativeId =
      document.querySelector('.articles') ||
      document.querySelector('section[id^="articles"]') ||
      document.querySelector('section.articles');

    if (!alternativeId) {
      console.error('Не удалось найти секцию Articles в DOM никаким способом');
      // Выводим структуру DOM для отладки
      console.debug('Структура DOM:', document.body.innerHTML);
      return;
    }

    // Если нашли элемент, но у него нет id="articles", добавляем его
    if (!alternativeId.id) {
      alternativeId.id = 'articles';
    }

    console.log(
      'Найден альтернативный элемент для секции Articles:',
      alternativeId
    );
  }

  console.log(
    'Инициализация секции Articles с SEO-оптимизацией и поддержкой i18n'
  );

  // Функция для получения локализованных текстов с запасными вариантами
  const getLocalizedContent = (key, defaultText) => {
    const translation = i18next.t(key, { defaultValue: defaultText });
    return translation !== key ? translation : defaultText;
  };

  // Объявление структуры статей перенесено в отдельный файл paste.txt
  const articles = [
    {
      id: 1,
      title: getLocalizedContent(
        'articles.article.1.title',
        'R36S Retro Gaming'
      ),
      sections: [
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.1.subtitle',
            'R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.1.content',
            `Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.2.subtitle',
            'Comprehensive R36S Review: Performance That Exceeds Expectations'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.2.content',
            `After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.3.subtitle',
            'How to Install Games on R36S: Simple Setup for Maximum Fun'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.3.content',
            `Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.4.subtitle',
            'R36S Specifications: Hardware That Delivers Premium Gaming Experience'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.4.content',
            `The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.5.subtitle',
            'Best Games for R36S: Thousands of Classics at Your Fingertips'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.5.content',
            `The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.1.sections.6.subtitle',
            'A Unique Gaming Experience with R36S'
          ),
          content: getLocalizedContent(
            'articles.article.1.sections.6.content',
            `The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`
          ),
        },
      ],
    },
    {
      id: 2,
      title: getLocalizedContent(
        'articles.article.2.title',
        'R36S Official Website'
      ),
      sections: [
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.1.subtitle',
            'R36S Official Website - The Ultimate Gaming Experience at Your Fingertips'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.1.content',
            `Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.2.subtitle',
            'Discover the Revolutionary R36S Handheld Gaming Experience'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.2.content',
            `The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.3.subtitle',
            'Unmatched Performance in the R36S Game Console'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.3.content',
            `The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.4.subtitle',
            "Enhanced Gaming Experience with the R36S Handheld's Exclusive Features"
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.4.content',
            `The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.5.subtitle',
            'Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.5.content',
            `The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.6.subtitle',
            'The Future of Gaming with the R36S Official Website and Upcoming Innovations'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.6.content',
            `The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation.`
          ),
        },
        {
          subtitle: getLocalizedContent(
            'articles.article.2.sections.7.subtitle',
            'Welcome to the R36S Official Store'
          ),
          content: getLocalizedContent(
            'articles.article.2.sections.7.content',
            `Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`
          ),
        },
      ],
    },
  ];
  // Создаем HTML структуру для статей с учетом SEO-оптимизации
  const articlesGrid = articlesSection.querySelector('.articles__grid');

  if (!articlesGrid) {
    console.error('Элемент .articles__grid не найден в секции Articles');
    return;
  }

  // Если это принудительная реинициализация или первичная инициализация,
  // очищаем сетку и обновляем все элементы
  if (forceReinitialize || !isInitialized) {
    console.log('Очистка и пересоздание контента Articles');
    // Очищаем текущее содержимое сетки перед добавлением новых элементов
    articlesGrid.innerHTML = '';
  } else {
    console.log('Обновление существующего контента Articles');
    // Обновляем только текстовый контент без полной перестройки DOM
    updateArticlesText();
    return;
  }

  // Добавляем метатеги для SEO
  const addMetaTags = () => {
    // Добавляем метатег description, если его еще нет
    if (!document.querySelector('meta[name="description"]')) {
      const metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = getLocalizedContent(
        'articles.meta.description',
        'R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.'
      );
      document.head.appendChild(metaDesc);
    }

    // Добавляем метатег keywords, если его еще нет
    if (!document.querySelector('meta[name="keywords"]')) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content =
        'R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device';
      document.head.appendChild(metaKeywords);
    }
  };

  // Вызываем функцию добавления метатегов
  addMetaTags();

  // Создаем статьи и добавляем их в контейнер с улучшенной семантической разметкой
  articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.className = 'article';
    articleElement.id = `article-${article.id}`;
    articleElement.dataset.articleId = article.id;

    // Добавляем микроразметку Schema.org для статьи
    articleElement.setAttribute('itemscope', '');
    articleElement.setAttribute('itemtype', 'http://schema.org/Article');

    // Добавляем заголовок статьи с микроразметкой
    const titleElement = document.createElement('h2');
    titleElement.className = 'article__title';
    titleElement.setAttribute('itemprop', 'headline');
    // Добавляем data-i18n атрибут для динамического обновления при смене языка
    titleElement.setAttribute(
      'data-i18n',
      `articles.article.${article.id}.title`
    );
    titleElement.innerHTML = article.title;
    articleElement.appendChild(titleElement);

    // Создаем контейнер для контента с микроразметкой
    const contentContainer = document.createElement('div');
    contentContainer.className = 'article__content-wrapper';
    contentContainer.setAttribute('itemprop', 'articleBody');

    // Добавляем секции статьи с улучшенной SEO-разметкой
    article.sections.forEach((section, index) => {
      const sectionContainer = document.createElement('section');
      sectionContainer.className = 'article__section';
      sectionContainer.id = `section-${article.id}-${index + 1}`;

      // Добавляем подзаголовок только если это не первый раздел или подзаголовок отличается от заголовка
      if (index !== 0 || section.subtitle !== article.title) {
        const subtitleElement = document.createElement('h3');
        subtitleElement.className = 'article__subtitle';
        // Добавляем data-i18n атрибут для динамического обновления
        subtitleElement.setAttribute(
          'data-i18n',
          `articles.article.${article.id}.sections.${index + 1}.subtitle`
        );
        subtitleElement.innerHTML = section.subtitle;
        sectionContainer.appendChild(subtitleElement);
      }

      const contentElement = document.createElement('div');
      contentElement.className = 'article__content';

      // Добавляем data-i18n атрибут для контента секции
      // Для HTML-контента используем специальный формат, чтобы i18next не отбрасывал HTML-теги
      contentElement.setAttribute(
        'data-i18n-html',
        `articles.article.${article.id}.sections.${index + 1}.content`
      );

      // Добавляем содержимое с HTML-тегами для SEO
      contentElement.innerHTML = section.content;

      sectionContainer.appendChild(contentElement);
      contentContainer.appendChild(sectionContainer);
    });

    articleElement.appendChild(contentContainer);

    // Добавляем структурированные данные для поисковых роботов
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.sections[0].content.substring(0, 150) + '...',
      keywords: 'R36S, retro gaming, handheld console, portable gaming',
      author: {
        '@type': 'Organization',
        name: getLocalizedContent('articles.schema.org.name', 'R36S Official'),
      },
      publisher: {
        '@type': 'Organization',
        name: getLocalizedContent('articles.schema.org.name', 'R36S'),
        logo: {
          '@type': 'ImageObject',
          url: '/assets/images/r36s-logo.png',
        },
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    };
    structuredDataScript.textContent = JSON.stringify(structuredData);
    articleElement.appendChild(structuredDataScript);

    // Добавляем семантическую разметку footer для статьи
    const articleFooter = document.createElement('footer');
    articleFooter.className = 'article__footer';

    // Добавляем CTA с микроразметкой
    const ctaButton = document.createElement('a');
    ctaButton.href =
      'https://rzekl.com/g/1e8d114494b6ff021d0c16525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F1005007171465465.html';
    ctaButton.className = 'article__cta';
    ctaButton.textContent = getLocalizedContent(
      'articles.cta.button.text',
      'Order R36S Now'
    );
    ctaButton.setAttribute('data-i18n', 'articles.cta.button.text');
    ctaButton.setAttribute('itemprop', 'url');
    ctaButton.setAttribute(
      'title',
      getLocalizedContent(
        'articles.cta.button.title',
        'Order R36S Gaming Console'
      )
    );
    ctaButton.setAttribute('data-i18n-title', 'articles.cta.button.title');
    ctaButton.setAttribute('rel', 'nofollow');
    ctaButton.setAttribute('target', '_blank');
    articleFooter.appendChild(ctaButton);

    articleElement.appendChild(articleFooter);

    articlesGrid.appendChild(articleElement);
  });

  // Добавляем заголовок секции для SEO
  const addSectionHeading = () => {
    // Проверяем, существует ли уже заголовок
    let sectionHeading = articlesSection.querySelector('.articles__heading');

    if (!sectionHeading) {
      sectionHeading = document.createElement('h1');
      sectionHeading.className = 'articles__heading';
      sectionHeading.setAttribute('data-i18n', 'articles.heading');
      sectionHeading.textContent = getLocalizedContent(
        'articles.heading',
        'R36S Gaming Console - Official Information'
      );

      // Добавляем заголовок в начало контейнера
      articlesSection
        .querySelector('.articles__container')
        .insertBefore(
          sectionHeading,
          articlesSection.querySelector('.articles__grid')
        );
    } else {
      // Обновляем текст существующего заголовка
      sectionHeading.textContent = getLocalizedContent(
        'articles.heading',
        'R36S Gaming Console - Official Information'
      );
    }
  };

  // Вызываем функцию добавления заголовка
  addSectionHeading();

  // Инициализируем аккордеон FAQ с небольшой задержкой для уверенности, что DOM загружен
  setTimeout(() => {
    try {
      console.log('Инициализация аккордеона...');

      // Важное изменение: используем единую точку для управления аккордеоном
      // и проверяем существование аккордеона, прежде чем уничтожать его
      if (
        window.faqAccordeon &&
        typeof window.faqAccordeon.destroy === 'function'
      ) {
        console.log(
          'Уничтожение существующего аккордеона перед реинициализацией'
        );
        window.faqAccordeon.destroy();
        window.faqAccordeon = null;
      }

      // Важно! Даем DOM обновиться после уничтожения предыдущего аккордеона
      setTimeout(() => {
        window.faqAccordeon = initFaqAccordion();
        console.log('Аккордеон успешно инициализирован:', window.faqAccordeon);
      }, 100);
    } catch (error) {
      console.error('Ошибка при инициализации аккордеона:', error);
    }
  }, 300);
  // Устанавливаем флаг инициализации
  isInitialized = true;

  // Обработчик смены языка для динамического обновления контента
  const handleLanguageChange = event => {
    console.log('Обработчик languageChanged вызван в Articles:', event);

    // Обновляем метатеги
    addMetaTags();

    // Обновляем заголовок раздела
    addSectionHeading();

    // Обновляем RTL поддержку
    updateRTLSupport();

    // Обновляем текстовое содержимое
    updateArticlesText();

    // ВАЖНОЕ ИЗМЕНЕНИЕ: Теперь вместо реинициализации всей секции Articles,
    // мы только обновляем аккордеон с небольшой задержкой
    setTimeout(() => {
      if (
        window.faqAccordeon &&
        typeof window.faqAccordeon.updateContent === 'function'
      ) {
        console.log('Обновление содержимого аккордеона после смены языка');
        window.faqAccordeon.updateContent();
      } else {
        console.log(
          'Переинициализация аккордеона после смены языка (API не найден)'
        );
        if (
          window.faqAccordeon &&
          typeof window.faqAccordeon.destroy === 'function'
        ) {
          window.faqAccordeon.destroy();
        }
        window.faqAccordeon = initFaqAccordion();
      }
    }, 100);
  };

  // Функция для обновления текстового содержимого без перестроения DOM
  function updateArticlesText() {
    try {
      console.log(
        'Обновление текстового содержимого статей без перестроения DOM'
      );

      // Обновляем заголовок секции
      const sectionHeading =
        articlesSection.querySelector('.articles__heading');
      if (sectionHeading) {
        const headingKey = sectionHeading.getAttribute('data-i18n');
        if (headingKey) {
          const translation = i18next.t(headingKey);
          if (translation && translation !== headingKey) {
            sectionHeading.textContent = translation;
          }
        }
      }

      // Обновляем заголовки статей
      document.querySelectorAll('.article__title').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.textContent = translation;
          }
        }
      });

      // Обновляем подзаголовки статей
      document.querySelectorAll('.article__subtitle').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.textContent = translation;
          }
        }
      });

      // Обновляем контент статей, сохраняя HTML-разметку
      document.querySelectorAll('.article__content').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.innerHTML = translation;
          }
        }
      });

      // Обновляем кнопки
      document.querySelectorAll('.article__cta').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.textContent = translation;
          }
        }

        // Также обновляем атрибут title
        const titleKey = element.getAttribute('data-i18n-title');
        if (titleKey) {
          const titleTranslation = i18next.t(titleKey);
          if (titleTranslation && titleTranslation !== titleKey) {
            element.setAttribute('title', titleTranslation);
          }
        }
      });

      // Обновляем FAQ вопросы и ответы
      document.querySelectorAll('.articles__faq-question').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.textContent = translation;
          }
        }
      });

      document.querySelectorAll('.articles__faq-answer p').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = i18next.t(key);
          if (translation && translation !== key) {
            element.textContent = translation;
          }
        }
      });

      // Обновляем связанные ссылки
      document
        .querySelectorAll('.articles__related-list a')
        .forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (key) {
            const translation = i18next.t(key);
            if (translation && translation !== key) {
              element.textContent = translation;
            }
          }

          // Также обновляем атрибут title
          const titleKey = element.getAttribute('data-i18n-title');
          if (titleKey) {
            const titleTranslation = i18next.t(titleKey);
            if (titleTranslation && titleTranslation !== titleKey) {
              element.setAttribute('title', titleTranslation);
            }
          }
        });

      console.log('Текстовое содержимое статей успешно обновлено');
    } catch (error) {
      console.error('Ошибка при обновлении текстового содержимого:', error);
    }
  }

  // Функция для обновления поддержки RTL языков
  const updateRTLSupport = () => {
    try {
      const rtlLanguages = ['ar'];
      const currentLanguage = i18next.language;
      const isRTL = rtlLanguages.includes(currentLanguage);

      // Добавляем или удаляем класс rtl для секции Articles
      if (isRTL) {
        articlesSection.classList.add('rtl');
        // Корректируем выравнивание текста для RTL
        const articleContentElements =
          articlesSection.querySelectorAll('.article__content');
        articleContentElements.forEach(element => {
          element.style.textAlign = 'right';
          element.style.direction = 'rtl';
        });

        // Также корректируем заголовки и подзаголовки
        const headings = articlesSection.querySelectorAll(
          '.article__title, .article__subtitle, .articles__heading'
        );
        headings.forEach(heading => {
          heading.style.textAlign = 'right';
        });

        // Аккордеон FAQ
        const faqQuestions = articlesSection.querySelectorAll(
          '.articles__faq-question'
        );
        faqQuestions.forEach(question => {
          question.style.textAlign = 'right';
        });

        const faqAnswers = articlesSection.querySelectorAll(
          '.articles__faq-answer'
        );
        faqAnswers.forEach(answer => {
          answer.style.textAlign = 'right';
          answer.style.direction = 'rtl';
        });
      } else {
        articlesSection.classList.remove('rtl');
        // Сбрасываем стили для LTR
        const elements = articlesSection.querySelectorAll(
          '.article__content, .article__title, .article__subtitle, .articles__heading, .articles__faq-question, .articles__faq-answer'
        );
        elements.forEach(element => {
          element.style.textAlign = '';
          element.style.direction = '';
        });
      }
    } catch (error) {
      console.error('Ошибка при обновлении RTL поддержки:', error);
    }
  };

  // Удаляем предыдущий обработчик события, если он существует
  if (window._articlesLanguageChangeHandler) {
    window.removeEventListener(
      'languageChanged',
      window._articlesLanguageChangeHandler
    );
  }

  // Сохраняем ссылку на обработчик, чтобы можно было удалить его позже
  window._articlesLanguageChangeHandler = handleLanguageChange;

  // Подписываемся на событие смены языка
  window.addEventListener(
    'languageChanged',
    window._articlesLanguageChangeHandler
  );

  // Применяем RTL стили если нужно
  updateRTLSupport();

  // Экспортируем функцию в глобальную область видимости для доступа из других модулей
  window.initArticles = initArticles;

  // Проверяем состояние аккордеона для логирования
  setTimeout(() => {
    console.log('Проверка наличия элементов аккордеона после инициализации:');
    const items = document.querySelectorAll('.accordion__item');
    console.log(`Найдено ${items.length} элементов аккордеона`);

    if (items.length > 0) {
      console.log('Структура первого элемента:');
      console.log('- Заголовок:', items[0].querySelector('.accordion__header'));
      console.log('- Кнопка:', items[0].querySelector('.accordion__toggle'));
      console.log('- Контент:', items[0].querySelector('.accordion__content'));
    }
  }, 1000);

  console.log('Инициализация секции Articles завершена успешно');

  // Возвращаем функцию очистки для использования в глобальной системе очистки
  return () => {
    if (window._articlesLanguageChangeHandler) {
      window.removeEventListener(
        'languageChanged',
        window._articlesLanguageChangeHandler
      );
      window._articlesLanguageChangeHandler = null;
    }
    console.log('Очистка ресурсов секции Articles');
  };
}
