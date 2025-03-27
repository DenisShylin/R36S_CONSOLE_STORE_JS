(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function H(){let r=!1,i=window.scrollY,e=null;const a=document.querySelector(".header"),t=document.querySelector(".burger-btn"),o=document.querySelector(".burger-line"),c=document.querySelector(".mobile-menu"),d=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function g(){const l=window.scrollY,s=i<l;e&&clearTimeout(e),l>100?b(!s):b(!0),i=l,y(l>0),e=setTimeout(()=>{},150)}function v(){r=!r,h()}function h(){r?(a.classList.add("menu-open"),t.setAttribute("aria-expanded","true"),o.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"):(a.classList.remove("menu-open"),t.setAttribute("aria-expanded","false"),o.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow="unset")}function y(l){l?a.classList.add("scrolled"):a.classList.remove("scrolled")}function b(l){l?(a.classList.add("visible"),a.classList.remove("hidden")):(a.classList.add("hidden"),a.classList.remove("visible"))}function w(l){l.preventDefault();const s=l.currentTarget.getAttribute("href"),f=s.replace("#",""),n=document.getElementById(f);n&&(b(!0),setTimeout(()=>{a.offsetHeight;const p=n.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:p,behavior:"smooth"}),r&&(r=!1,h()),window.history.replaceState(null,"",`${window.location.pathname}${s}`),setTimeout(()=>{i=window.scrollY},100)},50))}function m(){if(window.location.hash){const l=window.location.hash.replace("#",""),s=document.getElementById(l);s&&setTimeout(()=>{const f=a.offsetHeight,u=s.getBoundingClientRect().top+window.scrollY-f;window.scrollTo({top:u,behavior:"smooth"})},100)}}window.addEventListener("scroll",g),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&r&&(r=!1,h())}),t&&t.addEventListener("click",v),d.forEach(l=>{l.addEventListener("click",w)}),m()}function z(){const r=document.querySelector(".mobile-menu");if(!r){console.error("Мобильное меню не найдено в DOM");return}const i=r.querySelector(".close-button");if(!i){console.error("Кнопка закрытия не найдена в мобильном меню");return}i.addEventListener("click",()=>{e()});function e(){r.classList.remove("open");const c=document.querySelector(".burger-line");c&&c.classList.remove("open"),document.body.style.overflow="unset";const d=document.querySelector(".header");d&&d.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}r.querySelectorAll(".mobile-menu__link").forEach(c=>{c.addEventListener("click",()=>{setTimeout(()=>{e()},150)})});const t=r.querySelector(".mobile-menu__background");t&&t.addEventListener("click",()=>{e()});function o(){r.querySelectorAll(".mobile-menu__icon").forEach((d,g)=>{d.style.opacity="0",d.style.transform="translateX(-20px)",new MutationObserver(h=>{h.forEach(y=>{y.attributeName==="class"&&(r.classList.contains("open")?setTimeout(()=>{d.style.transition="all 0.4s ease",d.style.opacity="1",d.style.transform="translateX(0)"},100+g*70):(d.style.opacity="0",d.style.transform="translateX(-20px)"))})}).observe(r,{attributes:!0})})}o(),console.log("Мобильное меню с иконками инициализировано")}function G(){const r=document.querySelector(".hero"),i=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),a=document.querySelector(".hero__description--desktop"),t=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const o=document.getElementById("buy-button"),c=document.getElementById("more-details-button");let d=null,g;function v(){!i||!r||(i.onload=()=>r.classList.add("hero--loaded"),i.onerror=()=>{console.error("Не удалось загрузить изображение:",i.src),r.classList.add("hero--loaded")},i.complete&&r.classList.add("hero--loaded"))}function h(){if(!a||!t)return;const f=window.innerWidth>992;a.style.display=f?"block":"none",t.style.display=f?"none":"block"}function y(){e&&(d&&(d.disconnect(),d=null),d=new IntersectionObserver(f=>{f.forEach(n=>{var u;n.isIntersecting&&((u=n.target)!=null&&u.isConnected)&&(n.target.classList.add("animate-in"),d==null||d.unobserve(n.target))})},{threshold:.1}),e.isConnected&&d.observe(e))}function b(){o&&o.addEventListener("click",w),c&&c.addEventListener("click",m)}function w(){window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}function m(f){f.preventDefault();const n=document.getElementById("features"),u=document.querySelector(".header");if(!n||!u){window.location.hash="features";return}const p=u.offsetHeight,S=n.getBoundingClientRect().top+window.scrollY-p;window.scrollTo({top:S,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}function l(){d&&d.disconnect(),clearTimeout(g),window.removeEventListener("resize",s),o&&o.removeEventListener("click",w),c&&c.removeEventListener("click",m)}function s(){clearTimeout(g),g=setTimeout(h,200)}return v(),h(),y(),b(),window.addEventListener("resize",s),l}function W(r){let i=null,e=null,a=!1,t=0,o=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function d(s){s.key==="Escape"&&a&&m()}function g(){const s=document.createElement("div");return s.className="modal-about-overlay",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("tabindex","-1"),s.style.display="none",s.addEventListener("click",m),r.appendChild(s),s}function v(){return e?e.title==="Extensive color selection"&&e.colorImages?`
      <img
        src="${e.colorImages[t]}"
        alt="R36S Color Variant ${t+1}"
        class="modal-about-image"
        loading="lazy"
        width="400" 
        height="400"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
      />
    `:e.videoUrl?e.videoUrl.toString().toLowerCase().endsWith(".mp4")?`
      <div class="gif-container">
        <video
          class="modal-about-image"
          autoplay
          muted
          loop
          playsInline
          width="400" 
          height="400"
        >
          <source src="${e.videoUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${e.videoUrl}"
        alt="${e.imageAlt||"Feature animation"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
      />
    `:e.imageUrl?e.imageUrl.toString().toLowerCase().endsWith(".mp4")?`
      <div class="gif-container">
        <video
          class="modal-about-image"
          autoplay
          muted
          loop
          playsInline
          width="400" 
          height="400"
        >
          <source src="${e.imageUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${e.imageUrl}"
        alt="${e.imageAlt||"Feature image"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
      />
    `:`
    <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
      ${e.imageAlt||"Feature Image"}
    </div>
  `:""}function h(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(o&&clearInterval(o),o=setInterval(()=>{t=t===e.colorImages.length-1?0:t+1;const s=i.querySelector(".modal-about-image");s&&(s.src=e.colorImages[t],s.alt=`R36S Color Variant ${t+1}`)},1e3))}function y(){if(!i||!e)return;const s={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(s.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const f=`
        <script type="application/ld+json">
          ${JSON.stringify(s)}
        <\/script>
      `;i.innerHTML=`
        ${f}
        <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
          <meta itemprop="name" content="R36S Handheld Game Console" />
          <meta itemprop="description" content="${e.title} for R36S console" />
          <meta itemprop="sku" content="R36S-${e.id}" />
          <meta itemprop="brand" content="R36S" />
          <meta itemprop="productID" content="R36S-F${e.id}" />
          
          <button class="modal-about-close" aria-label="Close modal">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="modal-about-header">
            <div class="modal-about-icon-wrapper" aria-hidden="true">${e.icon}</div>
            <h3 class="modal-about-title" itemprop="name">${e.title}</h3>
          </div>

          <div class="modal-about-body">
            <div class="modal-about-media-container" itemprop="image">
              ${v()}
            </div>
            
            <div class="modal-about-content-container">
              <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <div class="modal-about-price-wrapper">
                  <span class="modal-about-original-price">US $108.06</span>
                  <span class="modal-about-current-price" itemprop="price" content="35.48">
                    $35.48
                    <span style="font-size: 24px" itemprop="priceCurrency" content="USD">US</span>
                  </span>
                  <meta itemprop="availability" content="https://schema.org/InStock" />
                  <meta itemprop="url" content="https://www.aliexpress.com/item/1005007171465465.html" />
                </div>

                <a
                  href="https://www.aliexpress.com/item/1005007171465465.html"
                  class="modal-about-button modal-about-button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemprop="url"
                >
                  <span class="modal-about-button-pulse"></span>
                  <span class="modal-about-button-text">BUY NOW -68%</span>
                  <span class="modal-about-button-shine"></span>
                </a>
              </div>

              <div class="modal-about-description" itemprop="description">
                ${e.fullDescription}
              </div>
            </div>
          </div>
        </div>
      `;const n=i.querySelector(".modal-about-close");n&&n.addEventListener("click",m);const u=i.querySelector(".modal-about-content");u&&u.addEventListener("click",p=>p.stopPropagation())}function b(s){e=s,i||(i=g()),y();const f=window.location.href,n=new URL(f);return n.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",n),i.style.display="flex",a=!0,i.focus(),window.addEventListener("keydown",d),document.body.style.overflow="hidden",h(),window.addEventListener("popstate",w),{close:m}}function w(s){a&&(!s.state||!s.state.featureId)&&m()}function m(){if(!a||!i)return;a=!1,i.style.display="none",window.removeEventListener("keydown",d),window.removeEventListener("popstate",w),document.body.style.overflow="visible",o&&(clearInterval(o),o=null);const s=new URL(window.location.href);s.searchParams.delete("feature"),window.history.pushState({},"",s)}function l(){m(),i&&r.contains(i)&&r.removeChild(i),i=null,e=null}return{open:b,close:m,destroy:l}}const D="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",P="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",F="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",N="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",U="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",Z="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",$="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",V="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",Y="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let A=null;function J(){if(console.log("Начинаем предзагрузку изображений..."),[D,P,F,N].forEach(i=>{const e=new Image;e.src=i}),"HTMLVideoElement"in window){const i=document.createElement("video");i.preload="metadata",i.src=$}console.log("Предзагрузка изображений завершена")}function Q(){console.log("Инициализация секции About"),J();const r=document.querySelector(".about__cards");if(!r)return console.error("Контейнер для карточек не найден"),null;let i={x:0,y:0};A||(console.log("Создаем модальное окно..."),A=W(document.body),console.log("Модальное окно создано"));let e=A;const t=[{id:1,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      `,title:"Retro Game Collection",description:"Get into the game with the r36s portable gaming console.",number:"15K+",detail:"classic games",fullDescription:`Discover a rich collection of classic games, including over 15,000 titles from different eras. From iconic arcade games to beloved console games, our library spans every significant platform of the past.

The collection includes:
• Classic arcade games from the 80s and 90s
• Complete libraries of NES, SNES, Sega and other consoles
• Exclusive ports and rare releases
• Optimized versions for modern hardware`,imageUrl:D,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      `,title:"Vibrant Display Technologies",description:"Enjoy vivid games on the 3.5* LCD display with crisp 640x480 resolution.",number:'3.5"',detail:"IPS display",fullDescription:`R36S Console Display Specifications:
• 3.5-inch IPS display
• 640x480 resolution
• High brightness and contrast
• Wide viewing angles
• Anti-glare coating
• Energy-efficient backlight
• Scratch-resistant surface`,imageUrl:P,imageAlt:"Display Technologies"},{id:3,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      `,title:"Powerful battery",description:"Enjoy up to 7-8 hours of continuous gaming with the R36S.",number:"7-8",detail:"hours of play",fullDescription:`Powerful 3200 mAh Battery

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display`,videoUrl:$,imageAlt:"Battery Life"},{id:4,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      `,title:"Extensive color selection",description:"Experience our wide selection of stunning console colors.",number:"10+",detail:"COLORS",fullDescription:`Experience the R36S Collection:
The R36S console delivers 12+ captivating color variations in 2024, including our signature Midnight Black and eye-catching Galactic Purple. Each R36S model features recycled plastic finish and scratch-resistant coating.

Available Colors:
- Classic Black
- Vibrant Orange
- Mesmerizing Purple ...`,colorImages:[F,N,U,Z],imageAlt:"R36S Color Variants"},{id:5,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      `,title:"Extensive settings",description:"Customize controls, brightness, sound and settings for maximum comfort",number:"30+",detail:"settings",fullDescription:`Features & Connectivity:
- Connect to external displays via OTG for large-screen gaming
- Compatible with modern gaming controllers and gamepads
- Multi-language interface support
- Customizable control schemes and button mapping
- Advanced display settings with adjustable brightness and contrast
- Audio optimization with multiple sound profiles
- Screen mirroring capability
- Low latency connection for seamless gameplay`,videoUrl:Y,imageAlt:"R36S Settings"},{id:6,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `,title:"Maximum portability",description:"Portable console with removable battery for gaming on the go.",number:"Ultra",detail:"Portable",fullDescription:`Whether commuting, traveling, or taking a quick break, the R36S is ready for instant entertainment. Its durable design and protected screen ensure worry-free portability, while the long-lasting battery keeps you gaming on the go.

Features:
• Pocket-sized dimensions for ultimate portability
• Rugged construction for daily carry
• Ergonomic grip for extended gaming sessions
• Quick startup for instant gaming access`,videoUrl:V,imageAlt:"R36S Portability"}];function o(){console.log("Начинаем рендеринг карточек..."),r.innerHTML="";const m=t.map(s=>`
      <div class="about-card" data-id="${s.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${s.icon}</div>
          <h3 class="about-card__title">${s.title}</h3>
          <p class="about-card__description">${s.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${s.number}</span>
            <span class="about-card__detail">${s.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${s.id}">
            <span class="button-text">More details</span>
            <span class="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `).join("");r.innerHTML=m;const l=r.querySelectorAll(".about-card");console.log(`Отрендерено ${l.length} карточек из ${t.length} необходимых`),l.length!==t.length?console.warn(`Ошибка рендеринга: отрендерено ${l.length} карточек вместо ${t.length}`):console.log("Рендеринг карточек успешно завершен")}const c=d(function(m){if(!m||!m.currentTarget)return;const l=m.currentTarget;if(!l||!l.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const s=l.getBoundingClientRect();i={x:m.clientX-s.left,y:m.clientY-s.top},l.style.setProperty("--mouse-x",`${i.x}px`),l.style.setProperty("--mouse-y",`${i.y}px`)}catch(s){console.error("Ошибка при обработке движения мыши:",s)}},16);function d(m,l){let s,f;return function(){const n=this,u=arguments;f?(clearTimeout(s),s=setTimeout(function(){Date.now()-f>=l&&(m.apply(n,u),f=Date.now())},l-(Date.now()-f))):(m.apply(n,u),f=Date.now())}}function g(m){if(!m||!m.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}m.stopPropagation();try{const l=parseInt(m.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",l);const s=t.find(f=>f.id===l);if(!s){console.error("Данные для карточки не найдены");return}e&&e.open(s)}catch(l){console.error("Ошибка при обработке клика по кнопке:",l)}}function v(m,l){let s;return function(){const f=this,n=arguments;clearTimeout(s),s=setTimeout(()=>{m.apply(f,n)},l)}}function h(){console.log("Очистка обработчиков событий карточек...");try{const m=document.querySelectorAll(".about-card");m&&m.length>0&&m.forEach(s=>{s&&(s.removeEventListener("mouseenter",()=>{}),s.removeEventListener("mouseleave",()=>{}),s.removeEventListener("mousemove",c))});const l=document.querySelectorAll(".about-card__button");l&&l.length>0&&l.forEach(s=>{s&&s.removeEventListener("click",g)}),r&&r.removeEventListener("click",()=>{}),console.log("Очистка обработчиков завершена")}catch(m){console.error("Ошибка при очистке обработчиков событий:",m)}}function y(){console.log("Настройка обработчиков событий для карточек...");const m=()=>{console.log("Проверяем наличие карточек для установки обработчиков...");const l=document.querySelectorAll(".about-card");if(!l||l.length===0){console.warn("Не найдены карточки для установки обработчиков событий"),setTimeout(m,200);return}console.log(`Устанавливаем обработчики событий для ${l.length} карточек`);const s=window.matchMedia("(max-width: 768px)").matches;!s&&r&&r.addEventListener("click",function(n){const u=n.target.closest(".about-card");if(u&&!n.target.closest(".about-card__button")){const p=parseInt(u.dataset.id);console.log("Клик по карточке ID:",p);const _=t.find(S=>S.id===p);if(!_){console.error("Данные для карточки не найдены");return}e&&e.open(_)}}),l.forEach(n=>{n&&(n.addEventListener("mouseenter",function(){n&&(parseInt(n.dataset.id),n.classList.add("active"))}),n.addEventListener("mouseleave",function(){n&&n.classList.remove("active")}),n.addEventListener("mousemove",c))});const f=document.querySelectorAll(".about-card__button");f&&f.length>0?(f.forEach(n=>{n&&n.addEventListener("click",g)}),console.log(`Установлены обработчики для ${f.length} кнопок`)):console.warn("Не найдены кнопки карточек"),window.addEventListener("resize",v(()=>{const n=!s,u=!window.matchMedia("(max-width: 768px)").matches;n!==u&&(h(),y())},250)),console.log("Настройка обработчиков событий успешно завершена")};document.readyState==="complete"||document.readyState==="interactive"?setTimeout(m,10):document.addEventListener("DOMContentLoaded",m)}function b(){console.log("Очистка всех обработчиков событий..."),h(),window.removeEventListener("resize",v),e=null,console.log("Очистка обработчиков событий завершена")}function w(){return function(){console.log("Запуск функции очистки секции About"),b()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),o(),console.log("Устанавливаем обработчики событий..."),y(),console.log("Инициализация About завершена успешно"),w()}catch(m){return console.error("Ошибка при инициализации About:",m),null}}function X(){const r=document.getElementById("features"),i=document.getElementById("featuresVideo"),e=document.getElementById("soundToggleButton"),a=document.getElementById("volumeOffIcon"),t=document.getElementById("volumeOnIcon"),o=document.getElementById("buyButton"),c=document.getElementById("moreInfoButton");if(!r){console.warn("Features section not found");return}i&&(i.volume=.5,i.play().catch(g=>{console.log("Автовоспроизведение не удалось:",g)})),o&&o.addEventListener("click",M),c&&c.addEventListener("click",B),e&&e.addEventListener("click",()=>T(i,a,t));const d=()=>{K(r,i,a,t)};return window.addEventListener("scroll",d),function(){o&&o.removeEventListener("click",M),c&&c.removeEventListener("click",B),e&&e.removeEventListener("click",()=>T(i,a,t)),window.removeEventListener("scroll",d),console.log("Features component cleaned up")}}function T(r,i,e){if(r)if(r.muted=!r.muted,r.muted){i.style.display="block",e.style.display="none";const a=document.getElementById("soundToggleButton");a&&a.setAttribute("aria-label","Включить звук")}else{r.volume=.5,i.style.display="none",e.style.display="block";const a=document.getElementById("soundToggleButton");a&&a.setAttribute("aria-label","Выключить звук")}}function K(r,i,e,a){if(!r||!i||i.muted)return;const t=r.getBoundingClientRect();if(!(t.top<window.innerHeight&&t.bottom>0)){i.muted=!0,e.style.display="block",a.style.display="none";const c=document.getElementById("soundToggleButton");c&&c.setAttribute("aria-label","Включить звук")}}function M(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function B(){const r=document.getElementById("features-r36s"),i=document.querySelector(".header");if(r&&i){const e=i.offsetHeight,a=r.getBoundingClientRect().top,t=window.scrollY||window.pageYOffset,o=a+t-e;window.scrollTo({top:o,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function ee(){try{let n=function(){d&&(d.innerHTML=w?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`)},u=function(){g&&(g.innerHTML=m?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`)},p=function(){if(!(!t||s))if(w)t.pause(),w=!1,n();else{const S=t.play();S!==void 0?S.then(()=>{w=!0,n()}).catch(x=>{console.warn("Не удалось воспроизвести видео:",x),w=!1,n()}):(w=!0,n())}},_=function(){h&&(s=!0,t&&(t.style.display="none"),h.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
          </div>
        </div>
      `)};var r=n,i=u,e=p,a=_;console.log("Инициализация секции Categories");const t=document.querySelector(".categories__video"),o=document.getElementById("categories"),c=document.querySelector(".categories__content"),d=document.querySelector(".categories__video-play"),g=document.querySelector(".categories__video-mute"),v=document.querySelector(".categories__video-slider"),h=document.querySelector(".categories__video-container"),y=document.querySelector(".categories__video-time span:first-child"),b=document.querySelector(".categories__video-time span:last-child");if(!o)return console.error("Секция Categories не найдена в DOM"),{};if(c&&c.classList.add("animate-in"),!t)return console.error("Видео элемент не найден в DOM"),_(),{};let w=!1,m=!0,l=!1,s=!1;const f=S=>{if(isNaN(S)||S<0)return"0:00";const x=Math.floor(S/60),E=Math.floor(S%60);return`${x}:${E.toString().padStart(2,"0")}`};return t&&(t.muted=!0,t.loop=!0,t.playsInline=!0,t.style.display="block",t.style.visibility="visible",t.style.opacity="1",t.style.width="100%",t.style.borderRadius="24px",h&&(h.style.minHeight="200px"),t.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),l=!0,v&&!isNaN(t.duration)&&(v.max=t.duration,b&&(b.textContent=f(t.duration)))}catch(S){console.error("Ошибка при обработке метаданных видео:",S)}}),t.addEventListener("timeupdate",()=>{try{v&&!isNaN(t.currentTime)&&(v.value=t.currentTime,y&&(y.textContent=f(t.currentTime)))}catch(S){console.error("Ошибка при обновлении времени видео:",S)}}),t.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),_()}),setTimeout(()=>{if(t&&!s){const S=t.play();S!==void 0&&S.then(()=>{console.log("Автовоспроизведение видео успешно"),w=!0,n()}).catch(x=>{console.warn("Не удалось автовоспроизвести видео:",x)})}},1e3)),d&&d.addEventListener("click",S=>{S.stopPropagation(),p()}),g&&g.addEventListener("click",S=>{S.stopPropagation(),t&&(m=!m,t.muted=m,u())}),v&&v.addEventListener("input",S=>{if(t)try{const x=parseFloat(S.target.value);isNaN(x)||(t.currentTime=x)}catch(x){console.error("Ошибка при изменении времени видео:",x)}}),h&&h.addEventListener("click",S=>{S.target.closest(".categories__video-controls")||p()}),n(),u(),o.classList.add("initialized"),{togglePlay:p,cleanup:()=>{t&&(t.pause(),t.removeAttribute("src"),t.load())}}}catch(t){console.error("Критическая ошибка в initCategories:",t);const o=document.getElementById("categories");return o&&(o.style.display="block"),{}}}function C(){const r=document.querySelectorAll(".accordion__item");if(r.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${r.length} вопросов`);const i=(a=null)=>{r.forEach(t=>{t!==a&&t.classList.contains("active")&&t.classList.remove("active")})};r.forEach(a=>{const t=a.querySelector(".accordion__header"),o=a.querySelector(".accordion__toggle"),c=a.querySelector(".accordion__content");if(!t||!o||!c){console.warn("FAQ аккордеон: структура элемента неполная",a);return}a===r[0]&&setTimeout(()=>{o.classList.add("pulse"),setTimeout(()=>{o.classList.remove("pulse")},1500)},1e3);const d=y=>{if(y.preventDefault(),y.stopPropagation(),o.classList.add("clicked"),setTimeout(()=>o.classList.remove("clicked"),300),a.classList.contains("active")){a.classList.remove("active");return}i(a),a.classList.add("active");const b=t.getBoundingClientRect();b.top>=10&&b.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+b.top-100,behavior:"smooth"})},100)};t.addEventListener("click",d),o.addEventListener("click",y=>{y.stopPropagation(),d(y)});const g=`faq-question-${Math.random().toString(36).substring(2,9)}`,v=`faq-answer-${Math.random().toString(36).substring(2,9)}`;t.setAttribute("id",g),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls",v),c.setAttribute("id",v),c.setAttribute("aria-labelledby",g),c.setAttribute("role","region"),c.setAttribute("hidden","true"),new MutationObserver(y=>{y.forEach(b=>{if(b.type==="attributes"&&b.attributeName==="class"){const w=a.classList.contains("active");t.setAttribute("aria-expanded",w?"true":"false"),w?c.removeAttribute("hidden"):setTimeout(()=>{a.classList.contains("active")||c.setAttribute("hidden","true")},500)}})}).observe(a,{attributes:!0})});const e=a=>{if(a.key==="Escape"){i();return}const t=document.activeElement.closest(".accordion__item");if(!t)return;const o=Array.from(r),c=o.indexOf(t);if(c===-1)return;let d;switch(a.key){case"ArrowDown":d=(c+1)%o.length;break;case"ArrowUp":d=(c-1+o.length)%o.length;break;case"Home":d=0;break;case"End":d=o.length-1;break;default:return}const g=o[d].querySelector(".accordion__header");g&&(g.focus(),a.preventDefault())};return document.addEventListener("keydown",e),console.log("FAQ аккордеон успешно инициализирован"),{openItem:a=>{a>=0&&a<r.length&&(i(r[a]),r[a].classList.add("active"))},closeAll:()=>i()}}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=C()}),window.initFaqAccordion=C);function te(){const r=document.getElementById("articles");if(!r){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const o=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!o){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}o.id||(o.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",o)}console.log("Инициализация секции Articles с SEO-оптимизацией");const i=[{id:1,title:"R36S Retro Gaming",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],e=r.querySelector(".articles__grid");if(!e){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const o=document.createElement("meta");o.name="description",o.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(o)}if(!document.querySelector('meta[name="keywords"]')){const o=document.createElement("meta");o.name="keywords",o.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(o)}})(),i.forEach(o=>{const c=document.createElement("article");c.className="article",c.id=`article-${o.id}`,c.dataset.articleId=o.id,c.setAttribute("itemscope",""),c.setAttribute("itemtype","http://schema.org/Article");const d=document.createElement("h2");d.className="article__title",d.setAttribute("itemprop","headline"),d.innerHTML=o.title,c.appendChild(d);const g=document.createElement("div");g.className="article__content-wrapper",g.setAttribute("itemprop","articleBody"),o.sections.forEach((w,m)=>{const l=document.createElement("section");if(l.className="article__section",l.id=`section-${o.id}-${m}`,m!==0||w.subtitle!==o.title){const f=document.createElement("h3");f.className="article__subtitle",f.innerHTML=w.subtitle,l.appendChild(f)}const s=document.createElement("div");s.className="article__content",s.innerHTML=w.content,l.appendChild(s),g.appendChild(l)}),c.appendChild(g);const v=document.createElement("script");v.type="application/ld+json";const h={"@context":"https://schema.org","@type":"Article",headline:o.title,description:o.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};v.textContent=JSON.stringify(h),c.appendChild(v);const y=document.createElement("footer");y.className="article__footer";const b=document.createElement("a");b.href="https://www.aliexpress.com/item/1005007171465465.html",b.className="article__cta",b.textContent="Order R36S Now",b.setAttribute("itemprop","url"),b.setAttribute("title","Order R36S Gaming Console"),b.setAttribute("rel","nofollow"),b.setAttribute("target","_blank"),y.appendChild(b),c.appendChild(y),e.appendChild(c)}),(()=>{const o=document.createElement("h1");o.className="articles__heading",o.textContent="R36S Gaming Console - Official Information",r.querySelector(".articles__container").insertBefore(o,r.querySelector(".articles__grid"))})(),setTimeout(()=>{C()},500),setTimeout(()=>{console.log("Проверка наличия элементов аккордеона перед инициализацией:");const o=document.querySelectorAll(".accordion__item");console.log(`Найдено ${o.length} элементов аккордеона`),console.log("Первый элемент аккордеона:",o[0]),o.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",o[0].querySelector(".accordion__header")),console.log("- Кнопка:",o[0].querySelector(".accordion__toggle")),console.log("- Контент:",o[0].querySelector(".accordion__content"))),console.log("Вызываем initFaqAccordion...");const c=C();console.log("Результат инициализации:",c?"успешно":"ошибка")},1e3),console.log("Инициализация секции Articles завершена успешно")}function oe(){console.log("Инициализация переключателей яркости текста в блоках");const r=document.getElementById("articles")||document.querySelector(".articles");if(!r){console.error("Секция Articles не найдена для добавления переключателей яркости текста");return}const i=r.querySelectorAll(".article"),e=[];i.forEach((t,o)=>{const c=o%3,d=document.createElement("button");switch(c){case 0:d.className="brightness-toggle",d.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `;const g=t.querySelector(".article__title");if(g){const h=document.createElement("div");h.className="article__title-container";const y=g.cloneNode(!0);h.appendChild(y),h.appendChild(d),g.parentNode.replaceChild(h,g)}else t.insertBefore(d,t.firstChild);break;case 1:d.className="brightness-toggle brightness-toggle-corner",d.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `,t.appendChild(d);break;case 2:d.className="brightness-toggle-with-label",d.innerHTML=`
          <span class="brightness-toggle-label">Ярче</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        `;const v=t.querySelector(".article__title");if(v){const h=document.createElement("div");h.className="article__title-container";const y=v.cloneNode(!0);h.appendChild(y),h.appendChild(d),v.parentNode.replaceChild(h,v)}else t.insertBefore(d,t.firstChild);break}e.push(d)}),e.forEach(t=>{const o=t.closest(".article");if(!o)return;t.addEventListener("click",function(){if(o.classList.toggle("bright-text"),t.classList.toggle("active"),t.classList.contains("brightness-toggle-with-label")){const h=t.querySelector(".brightness-toggle-label");h&&(h.textContent=o.classList.contains("bright-text")?"Тусклее":"Ярче")}const g=o.getAttribute("data-article-id")||o.id||Array.from(i).indexOf(o),v=o.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-article-brightness-${g}`,v),console.log(`Яркость текста в блоке ${g} изменена на: ${v}`)});const c=o.getAttribute("data-article-id")||o.id||Array.from(i).indexOf(o);if(localStorage.getItem(`r36s-article-brightness-${c}`)==="bright"&&(o.classList.add("bright-text"),t.classList.add("active"),buttonStyle===2)){const g=t.querySelector(".brightness-toggle-label");g&&(g.textContent="Тусклее")}});const a=document.createElement("style");return a.textContent=`
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
  `,document.head.appendChild(a),function(){e.forEach(o=>{if(o&&o.parentNode){const c=o.closest(".article__title-container");if(c){const d=c.querySelector(".article__title");d&&c.parentNode&&c.parentNode.replaceChild(d,c)}else o.parentNode.removeChild(o)}}),a&&a.parentNode&&a.parentNode.removeChild(a)}}const O={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function I(r,i=24){return O[r]?O[r].replace(/width="24"/,`width="${i}"`).replace(/height="24"/,`height="${i}"`):(console.error(`Icon "${r}" not found`),"")}function ne(){document.querySelectorAll("[data-icon]").forEach(i=>{const e=i.getAttribute("data-icon"),a=parseInt(i.getAttribute("data-size")||"24",10);e&&(i.innerHTML=I(e,a))})}function ie(){console.log("Инициализация секции Contact");const r=document.querySelector(".contact__form"),i=document.getElementById("name"),e=document.getElementById("email"),a=document.getElementById("phone"),t=document.getElementById("message"),o=document.querySelector(".form__button"),c=document.createElement("div");c.className="form__error",c.style.display="none",c.innerHTML=`
    <div class="form__error-icon">${I("alert-circle",16)}</div>
    <span></span>
  `,r.insertBefore(c,r.firstChild);const d={name:"",email:"",phone:"",message:""};function g(w){c.querySelector("span").textContent=w,c.style.display="flex"}function v(){c.style.display="none"}function h(w){const{name:m,value:l}=w.target;d[m]=l,v()}i.addEventListener("input",h),e.addEventListener("input",h),a.addEventListener("input",h),t.addEventListener("input",h);async function y(w){w.preventDefault(),b(!0);try{if(!d.name||!d.email||!d.phone||!d.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(d.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(f=>setTimeout(f,1e3)),i.value="",e.value="",a.value="",t.value="",Object.keys(d).forEach(f=>{d[f]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(l){g(l.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",l)}finally{b(!1)}}function b(w){[i,e,a,t].forEach(l=>{l.disabled=w}),o.disabled=w,o.innerHTML=w?`<span class="button__icon">${I("loader",20)}</span> Sending...`:`<span class="button__icon">${I("send",20)}</span> Send message`}return r.addEventListener("submit",y),function(){i.removeEventListener("input",h),e.removeEventListener("input",h),a.removeEventListener("input",h),t.removeEventListener("input",h),r.removeEventListener("submit",y)}}function re(){const r="/R36S_STORE_JS/",e={review1:{webp:`${r}img/reviews/imm_1_1x.webp`,jpg:`${r}img/reviews/imm_1_1x.jpg`},review2:{webp:`${r}img/reviews/imm_2_1x.webp`,jpg:`${r}img/reviews/imm_2_1x.jpg`},review3:{webp:`${r}img/reviews/imm_3_1x.webp`,jpg:`${r}img/reviews/imm_3_1x.jpg`},review4:{webp:`${r}img/reviews/imm_4_1x.webp`,jpg:`${r}img/reviews/imm_4_1x.jpg`}},a=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:e.review1.webp,jpeg:e.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:e.review4.webp,jpeg:e.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:e.review3.webp,jpeg:e.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:e.review2.webp,jpeg:e.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],t=new Set;let o=null,c=window.innerWidth<=1200;function d(n=!1){const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("review-card__star"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill",n?"currentColor":"none"),u.setAttribute("stroke","currentColor"),u.setAttribute("stroke-width","2");const p=document.createElementNS("http://www.w3.org/2000/svg","polygon");return p.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),u.appendChild(p),u}function g(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("review-card__verified"),n.setAttribute("width","16"),n.setAttribute("height","16"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2");const u=document.createElementNS("http://www.w3.org/2000/svg","path");return u.setAttribute("d","M20 6L9 17l-5-5"),n.appendChild(u),n}function v(n){const u=document.getElementById("reviewCardTemplate");if(!u)return console.error("Шаблон карточки отзыва не найден"),null;const p=u.content.cloneNode(!0).querySelector(".review-card");p.dataset.id=n.id,n.mobileOnly&&(p.classList.add("mobile-only"),c||(p.style.display="none"));const _=p.querySelector(".review-card__rating");for(let L=0;L<5;L++)_.appendChild(d(L<n.rating));p.querySelector(".review-card__variant").textContent=n.color,p.querySelector(".review-card__text").textContent=n.text;const S=p.querySelector("picture");S.querySelector("source").setAttribute("srcset",n.images.webp);const x=S.querySelector("img");x.setAttribute("src",n.images.jpeg),x.setAttribute("alt",`Review ${n.id}`);const E=p.querySelector(".review-card__name");n.verified&&E.prepend(g()),E.appendChild(document.createTextNode(n.author)),p.querySelector(".review-card__date").textContent=n.date,p.querySelector(".review-card__helpful-count").textContent=`Helpful (${n.helpful})`,p.addEventListener("click",h),p.addEventListener("mouseenter",()=>y(n.id)),p.addEventListener("mouseleave",b);const R=p.querySelector(".review-card__helpful");return R.addEventListener("mouseenter",()=>{R.querySelector("svg").setAttribute("fill","currentColor"),R.querySelector("svg").classList.add("scale-125"),R.querySelector("svg").classList.remove("scale-100")}),R.addEventListener("mouseleave",()=>{R.querySelector("svg").setAttribute("fill","none"),R.querySelector("svg").classList.remove("scale-125"),R.querySelector("svg").classList.add("scale-100")}),p}function h(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function y(n){o=n;const u=document.querySelector(`.review-card[data-id="${n}"]`);if(u){const p=u.querySelector(".review-card__arrow-wrapper");p&&(p.style.display="flex")}}function b(){const n=document.querySelector(`.review-card[data-id="${o}"]`);if(n){const u=n.querySelector(".review-card__arrow-wrapper");u&&(u.style.display="none")}o=null}function w(){const n=document.getElementById("reviewsGrid");if(!n){console.error("Контейнер для отзывов не найден");return}const u=document.getElementById("reviewCardTemplate"),p={};n.querySelectorAll(".review-card").forEach(x=>{x.dataset.id&&(p[x.dataset.id]=x)});const _=a.filter(x=>!x.mobileOnly||x.mobileOnly&&c),S=[];_.forEach(x=>{if(p[x.id]){const E=p[x.id];E.style.display="block",S.push(E),delete p[x.id]}else{const E=v(x);E&&S.push(E)}}),Object.values(p).forEach(x=>{x!==u&&(x.style.display="none")}),n.innerHTML="",n.appendChild(u),S.forEach(x=>{n.appendChild(x)}),m()}function m(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(u=>{u.classList.add("animate-in")});return}const n=new IntersectionObserver(u=>{u.forEach(p=>{if(p.isIntersecting){const _=p.target.dataset.id;t.has(_)||(p.target.classList.add("animate-in"),t.add(_))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(u=>{n.observe(u)})}function l(){c=window.innerWidth<=1200,w(),document.querySelectorAll(".review-card").forEach(u=>{u.classList.contains("mobile-only")&&(u.style.display=c?"block":"none")})}function s(){w();let n;const u=()=>{clearTimeout(n),n=setTimeout(l,250)};window.addEventListener("resize",u);const p=document.createElement("style");p.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(p),setTimeout(l,100);const _=document.getElementById("reviews");if(_&&!_.hasAttribute("itemscope")){_.setAttribute("itemscope",""),_.setAttribute("itemtype","http://schema.org/Product");const S=document.createElement("meta");S.setAttribute("itemprop","name"),S.setAttribute("content","R36S Handheld Game Console"),_.prepend(S);const x=document.createElement("meta");x.setAttribute("itemprop","description"),x.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),_.prepend(x)}}s();function f(){if(window.removeEventListener("resize",l),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const n=[];new IntersectionObserver(()=>{}).disconnect(),n.forEach(p=>p.disconnect())}document.querySelectorAll(".review-card").forEach(n=>{n.removeEventListener("click",h),n.removeEventListener("mouseenter",()=>{}),n.removeEventListener("mouseleave",b),Object.keys(a).forEach(p=>{n.removeEventListener("mouseenter",()=>y(p))});const u=n.querySelector(".review-card__helpful");u&&(u.removeEventListener("mouseenter",()=>{}),u.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:f,renderReviewCards:w}}const se={};function ae(){console.log("Products секция инициализирована");const i=!se?"/":"/R36S_STORE_JS/",e={i0_0:{jpg:`${i}img/products/i_0_0x.jpg`,webp:`${i}img/products/i_0_0x.webp`},i1:{jpg:`${i}img/products/i_1_1x.jpg`,webp:`${i}img/products/i_1_1x.webp`},i2:{jpg:`${i}img/products/i_2_1x.jpg`,webp:`${i}img/products/i_2_1x.webp`},i3:{jpg:`${i}img/products/i_3_1x.jpg`,webp:`${i}img/products/i_3_1x.webp`},i4:{jpg:`${i}img/products/i_4_1x.jpg`,webp:`${i}img/products/i_4_1x.webp`},i5:{jpg:`${i}img/products/i_5_1x.jpg`,webp:`${i}img/products/i_5_1x.webp`},i6:{jpg:`${i}img/products/i_6_1x.jpg`,webp:`${i}img/products/i_6_1x.webp`},i7:{jpg:`${i}img/products/i_7_1x.jpg`,webp:`${i}img/products/i_7_1x.webp`},i8:{jpg:`${i}img/products/i_8_1x.jpg`,webp:`${i}img/products/i_8_1x.webp`},i9:{jpg:`${i}img/products/i_9_1x.jpg`,webp:`${i}img/products/i_9_1x.webp`}},a=[{id:"getting-started",title:"Start Guide",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,images:{jpg:e.i0_0.jpg,webp:e.i0_0.webp}}},{id:"original-backup",title:"Backup Original",content:{text:"This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.",subsections:[{id:"backup-procedure",title:"Backup Using Win32DiskImager",content:{text:`1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,images:{jpg:e.i1.jpg,webp:e.i1.webp}}}]}},{id:"custom-installation",title:"Install Custom",content:{text:`As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,subsections:[{id:"method-balena",title:"Option 1: Balena Etcher Method",content:{text:`While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,images:{jpg:e.i2.jpg,webp:e.i2.webp}}},{id:"method-win32",title:"Option 2: Win32DiskImager Method",content:{text:`1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,images:{jpg:e.i3.jpg,webp:e.i3.webp}}},{id:"method-raspberry",title:"Option 3: Raspberry Pi Imager",content:{text:`1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,images:{jpg:e.i4.jpg,webp:e.i4.webp}}}]}},{id:"firmware-options",title:"Firmware Options",content:{text:"Several custom firmware options are available for the R36S. Here are the most popular choices:",subsections:[{id:"option-arkos",title:"ArkOS - Community Enhanced Edition",content:{text:`GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,images:{jpg:e.i5.jpg,webp:e.i5.webp}}},{id:"option-rocknix",title:"ROCKNIX Operating System",content:{text:`GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,images:{jpg:e.i6.jpg,webp:e.i6.webp}}},{id:"option-amber",title:"AmberELEC System",content:{text:`GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,images:{jpg:e.i7.jpg,webp:e.i7.webp}}}]}},{id:"game-setup",title:"Add Files",content:{text:`1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,images:{jpg:e.i8.jpg,webp:e.i8.webp}}},{id:"helpful-tips",title:"Usage Tips",content:{text:`• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,images:{jpg:e.i9.jpg,webp:e.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let t="downloads",o=!1;const c=document.getElementById("products-nav-list"),d=document.getElementById("products-sections"),g=document.getElementById("products-nav");function v(){o=window.innerWidth<=1024,g&&(o?g.classList.add("nav-mobile"):g.classList.remove("nav-mobile"))}function h(l){t=l,document.querySelectorAll(".nav-item").forEach(n=>{n.dataset.sectionId===l?n.classList.add("nav-item-active"):n.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(n=>{n.id===l?n.classList.add("section-active"):n.classList.remove("section-active")}),setTimeout(()=>{const n=document.getElementById(l);if(n){const u=o?80:20,_=n.getBoundingClientRect().top+window.pageYOffset-u;window.scrollTo({top:_,behavior:"smooth"})}},100)}function y(){c.innerHTML="",a.forEach(l=>{const s=document.createElement("button");s.className=`nav-item ${t===l.id?"nav-item-active":""}`,s.dataset.sectionId=l.id,s.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${l.title}</span>
      `,s.addEventListener("click",()=>h(l.id)),c.appendChild(s)})}function b(l){if(l.id==="downloads"){let n='<div class="download-list">';return l.content.downloads.forEach(u=>{n+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${u.file}</div>
                <div class="download-meta">Update: ${u.date} • ${u.version}</div>
              </div>
            </div>
            <a href="${u.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),n+="</div>",n}let s='<div class="section-content"><div class="text-content">';return l.content.text.split(`
`).forEach(n=>{s+=`<p>${n.trim()}</p>`}),s+="</div>",l.content.images&&(s+=`
        <div class="image-container">
          <picture>
            <source srcset="${l.content.images.webp}" type="image/webp">
            <img src="${l.content.images.jpg}" alt="${l.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),l.content.subsections&&(s+='<div class="subsections">',l.content.subsections.forEach(n=>{s+=`
          <div class="subsection">
            <h3 class="subsection-title">${n.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,n.content.text.split(`
`).forEach(p=>{s+=`<p>${p.trim()}</p>`}),s+="</div>",n.content.images&&(s+=`
            <div class="image-container">
              <picture>
                <source srcset="${n.content.images.webp}" type="image/webp">
                <img src="${n.content.images.jpg}" alt="${n.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),s+="</div></div>"}),s+="</div>"),s+="</div>",s}function w(){d.innerHTML="",a.forEach(l=>{const s=document.createElement("section");s.id=l.id,s.className=`section ${t===l.id?"section-active":""}`,s.innerHTML=`
        <h2 class="section-title">${l.title}</h2>
        ${b(l)}
      `,d.appendChild(s)})}function m(){v(),y(),w(),window.addEventListener("resize",v),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return c&&d&&g?m():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:h,checkMobile:v}}function le(){console.log("Инициализация Footer");const r=document.querySelector(".footer");if(!r){console.error("Элемент footer не найден");return}const i=r.querySelector(".partnership-button");i&&i.addEventListener("click",()=>{const e=document.querySelector(".partnership-modal-overlay");if(e){e.classList.add("active");const a=e.querySelector(".partnership-modal-content");a&&a.classList.add("active"),document.body.style.overflow="hidden"}}),ce()}function ce(){const r=document.querySelector(".partnership-modal-overlay");if(!r){console.warn("Модальное окно не найдено");return}const i=r.querySelector(".partnership-modal-close");i&&i.addEventListener("click",e),r.addEventListener("click",a=>{a.target===r&&e()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&r.classList.contains("active")&&e()});function e(){const a=r.querySelector(".partnership-modal-content");r.classList.remove("active"),a&&a.classList.remove("active"),document.body.style.overflow=""}}console.log("Main.js инициализирован");let k=[];const q=H();typeof q=="function"&&k.push(q);const j=z();typeof j=="function"&&k.push(j);function de(){const r="IntersectionObserver"in window,i=function(){const a=document.createElement("div");return a.style.display="flex",a.style.display==="flex"}(),e=function(){const a=document.createElement("div");return a.style.display="grid",a.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",r),console.log("- Flexbox:",i),console.log("- CSS Grid:",e),r||document.body.classList.add("no-intersection-observer"),i||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:r,hasFlexbox:i,hasGrid:e}}function ue(){try{k.forEach(r=>{typeof r=="function"&&r()}),k=[]}catch(r){console.warn("Error during global cleanup:",r)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{ne();const r=de(),i=G();typeof i=="function"&&k.push(i);const e=Q();typeof e=="function"&&k.push(e);const a=X();typeof a=="function"&&k.push(a);const t=ee();typeof t=="function"&&k.push(t);const o=te();typeof o=="function"&&k.push(o);const c=oe();typeof c=="function"&&k.push(c);const d=ie();typeof d=="function"&&k.push(d);const g=re();typeof g=="function"&&k.push(g);const v=ae();typeof v=="function"&&k.push(v);const h=le();typeof h=="function"&&k.push(h);const y=performance.now();console.log(`Страница загружена за ${y.toFixed(2)}ms`),window.addEventListener("beforeunload",ue)}catch(r){console.error("Ошибка при инициализации страницы:",r)}});window.onerror=function(r,i,e,a,t){return console.error("Глобальная ошибка:",{message:r,source:i,lineno:e,colno:a,error:t}),!1};window.addEventListener("unhandledrejection",function(r){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",r.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
