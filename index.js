(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();function L(){console.log("Hero section initialized");const a=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),c=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),l=document.querySelector(".hero__pricing"),v=document.getElementById("buy-button"),y=document.getElementById("more-details-button");let f=null;function E(){if(!o){console.error("Hero image element not found");return}console.log("Setting up hero image"),o.onerror=()=>{console.error("Failed to load hero image:",o.src);try{const g=o.getAttribute("srcset");if(g){const t=g.split(",");if(t&&t.length>0){const m=t[0].split(" ")[0];console.log("Using fallback image:",m),o.src=m}}}catch(g){console.error("Error setting fallback image:",g)}a&&a.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),a&&a.classList.add("hero--loaded")},o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),a&&a.classList.add("hero--loaded"))}function w(){const g=window.innerWidth>992;c&&r&&l&&(g?(c.style.display="block",r.style.display="none"):(c.style.display="none",r.style.display="block"))}function i(){if(e){f&&(f.disconnect(),f=null);try{f=new IntersectionObserver(g=>{try{g.forEach(t=>{t.isIntersecting&&t.target&&t.target.isConnected&&(t.target.classList.add("animate-in"),f&&f.unobserve(t.target))})}catch(t){console.warn("Error in IntersectionObserver callback:",t)}},{threshold:.1}),e&&e.isConnected&&f.observe(e)}catch(g){console.warn("Error setting up IntersectionObserver:",g)}}}function s(){v&&(v.removeEventListener("click",d),v.addEventListener("click",d)),y&&(y.removeEventListener("click",p),y.addEventListener("click",p))}function d(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(g){console.error("Error opening product link:",g)}}function p(g){g.preventDefault();const t=document.getElementById("features"),m=document.querySelector(".header");if(t&&m)try{const u=m.offsetHeight,b=t.getBoundingClientRect().top,n=window.scrollY||window.pageYOffset,S=b+n-u;window.scrollTo({top:S,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(u){console.error("Error scrolling to features:",u),window.location.hash="features"}}function h(){try{f&&(f.disconnect(),f=null),window.removeEventListener("resize",w),v&&v.removeEventListener("click",d),y&&y.removeEventListener("click",p),window.removeEventListener("unload",h),window.removeEventListener("beforeunload",h)}catch(g){console.warn("Error during cleanup:",g)}}return E(),w(),i(),s(),window.removeEventListener("resize",w),window.addEventListener("resize",w),typeof window<"u"&&(window.removeEventListener("beforeunload",h),window.addEventListener("beforeunload",h)),h}function C(a){let o=null,e=null,c=!1,r=0,l=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function y(t){t.key==="Escape"&&c&&h()}function f(){const t=document.createElement("div");return t.className="modal-about-overlay",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("tabindex","-1"),t.style.display="none",t.addEventListener("click",h),a.appendChild(t),t}function E(){if(!e)return"";const t=`placeholder-${Date.now()}`,m=u=>`
      <div id="${t}" class="media-placeholder hidden" data-type="${u}">
        <div class="placeholder-spinner"></div>
      </div>
      <script>
        setTimeout(() => {
          const placeholder = document.getElementById('${t}');
          if (placeholder && placeholder.classList.contains('hidden')) {
            placeholder.classList.remove('hidden');
          }
        }, 300); // Показываем плейсхолдер только если загрузка занимает больше 300мс
      <\/script>
    `;return e.title==="Extensive color selection"&&e.colorImages?`
        ${m("image")}
        <img
          src="${e.colorImages[r]}"
          alt="R36S Color Variant ${r+1}"
          class="modal-about-image"
          loading="eager"
          width="400" 
          height="400"
        />
      `:e.videoUrl?`
        ${m("video")}
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="auto"
          width="640" 
          height="360"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${e.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `:e.imageUrl?`
      ${m("image")}
      <img
        src="${e.imageUrl}${e.imageUrl.includes(".gif")?"?"+new Date().getTime():""}"
        alt="${e.imageAlt||"Feature image"}"
        class="modal-about-image"
        loading="eager"
        width="400" 
        height="400"
      />
    `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${e.imageAlt||"Feature Image"}
      </div>
    `}function w(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(l&&clearInterval(l),l=setInterval(()=>{const t=r===e.colorImages.length-1?0:r+1,m=new Image,u=new Date().getTime(),b=e.colorImages[t].includes(".gif")?`${e.colorImages[t]}?${u}`:e.colorImages[t];m.onload=()=>{r=t;const n=o.querySelector(".modal-about-image");if(n){if(!m.complete||m.naturalWidth===0){const x=`color-placeholder-${Date.now()}`,I=document.createElement("div");I.id=x,I.className="media-placeholder",I.setAttribute("data-type","image"),I.innerHTML='<div class="placeholder-spinner"></div>',n.parentNode&&n.parentNode.insertBefore(I,n)}n.src=b,n.alt=`R36S Color Variant ${t+1}`}},m.src=b},3e3))}function i(){console.log("Настройка обработчиков медиафайлов");try{const t=o.querySelectorAll(".modal-about-image");console.log("Найдено изображений:",t.length),t.forEach((u,b)=>{if(u.complete&&u.naturalWidth!==0){console.log(`Изображение ${b} уже загружено из кеша`);const n=u.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()}else u.addEventListener("load",function(){const n=this.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()}),u.addEventListener("error",function(){console.error("Ошибка загрузки изображения:",this.src),this.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+RXJyb3IgbG9hZGluZyBpbWFnZTwvdGV4dD48L3N2Zz4=";const n=this.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()})});const m=o.querySelectorAll(".modal-about-video");console.log("Найдено видео:",m.length),m.forEach((u,b)=>{if(u.readyState>=2){console.log(`Видео ${b} уже загружено из кеша`);const n=u.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()}else u.addEventListener("loadeddata",function(){const n=this.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()}),u.addEventListener("timeupdate",function(){if(this.currentTime>0&&!this._timeUpdateHandled){this._timeUpdateHandled=!0;const n=this.previousElementSibling;n&&n.classList.contains("media-placeholder")&&n.remove()}}),u.addEventListener("error",function(){var x;console.error("Ошибка загрузки видео:",(x=this.querySelector("source"))==null?void 0:x.src);const n=document.createElement("div");n.className="modal-about-video-error",n.innerHTML="Error loading video",n.style.cssText="background-color: #ff3333; color: white; padding: 20px; text-align: center; border-radius: 8px;",this.parentNode.replaceChild(n,this);const S=n.previousElementSibling;S&&S.classList.contains("media-placeholder")&&S.remove()})})}catch(t){console.error("Ошибка при настройке обработчиков медиафайлов:",t)}}function s(){if(!o||!e)return;const t={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(t.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const m=`
        <script type="application/ld+json">
          ${JSON.stringify(t)}
        <\/script>
      `;o.innerHTML=`
        ${m}
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
              ${E()}
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
      `;const u=o.querySelector(".modal-about-close");u&&u.addEventListener("click",h);const b=o.querySelector(".modal-about-content");b&&b.addEventListener("click",n=>n.stopPropagation()),i()}function d(t){console.log("Открытие модального окна для:",t.title),e=t,o||(console.log("Создание нового модального элемента"),o=f()),console.log("Обновление содержимого модального окна"),s();const m=window.location.href,u=new URL(m);return u.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",u),o.style.display="flex",c=!0,o.focus(),window.addEventListener("keydown",y),document.body.style.overflow="hidden",w(),window.addEventListener("popstate",p),{close:h}}function p(t){c&&(!t.state||!t.state.featureId)&&h()}function h(){if(!c||!o)return;console.log("Закрытие модального окна"),c=!1,o.style.display="none",window.removeEventListener("keydown",y),window.removeEventListener("popstate",p),document.body.style.overflow="visible",l&&(console.log("Очистка интервала смены изображений"),clearInterval(l),l=null);const t=new URL(window.location.href);t.searchParams.delete("feature"),window.history.pushState({},"",t)}function g(){h(),o&&a.contains(o)&&a.removeChild(o),o=null,e=null}return{open:d,close:h,destroy:g}}const k="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",R="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",O="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",A="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",U="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",D="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",M="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",P="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",B="/R36S_CONSOLE_STORE_JS/video/about/video_5_option_.mp4";function $(){console.log("Инициализация секции About");const a=document.querySelector(".about__cards");if(!a)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0},e=null;const c=new Set,r=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:k,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:R,imageAlt:"Display Technologies"},{id:3,icon:`
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
      `,title:"Powerful battery",description:"Enjoy up to 7-8 hours of continuous gaming with the R36S.",number:"7-8",detail:"hours of play",fullDescription:`**Powerful 3200 mAh Battery**

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display
- Portable design
- Uninterrupted entertainment

Take your gaming anywhere – play more, charge less.`,videoUrl:M,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple
- Dynamic Red
- Pure White
- Radiant Yellow ...`,colorImages:[O,A,U,D],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay
- Expandable storage support
- Quick system updates
- User-friendly interface`,videoUrl:B,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:P,imageAlt:"R36S Portability"}];function l(i){try{if(c.has(i))return;c.add(i),console.log("Предзагрузка ресурса:",i);const s=i.split(".").pop().toLowerCase();if(fetch(i,{method:"HEAD"}).catch(d=>console.log("Предзагрузка проверка доступности:",i)),["jpg","jpeg","png","webp","gif"].includes(s)){const d=new Image;d.src=i}else["mp4","webm","ogg"].includes(s)&&fetch(i,{method:"GET",headers:{Range:"bytes=0-1000"}}).catch(d=>console.log("Предзагрузка диапазона видео:",i))}catch(s){console.error("Ошибка при предзагрузке ресурса:",i,s)}}function v(){a.innerHTML=r.map(i=>`
      <div class="about-card" data-id="${i.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${i.icon}</div>
          <h3 class="about-card__title">${i.title}</h3>
          <p class="about-card__description">${i.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${i.number}</span>
            <span class="about-card__detail">${i.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${i.id}">
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
    `).join("")}function y(i){const s=i.currentTarget,d=s.getBoundingClientRect();o={x:i.clientX-d.left,y:i.clientY-d.top},s.style.setProperty("--mouse-x",`${o.x}px`),s.style.setProperty("--mouse-y",`${o.y}px`)}function f(i){const s=parseInt(i.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",s);const d=r.find(p=>p.id===s);if(!d){console.error("Данные для карточки не найдены");return}e||(console.log("Создание нового модального окна"),e=C(document.body)),console.log("Подготовка ресурсов для модального окна"),d.videoUrl&&l(d.videoUrl),d.imageUrl&&l(d.imageUrl),d.colorImages&&Array.isArray(d.colorImages)&&d.colorImages.forEach(p=>{l(p)}),console.log("Открытие модального окна для:",d.title),e.open(d)}function E(){document.querySelectorAll(".about-card").forEach(s=>{s.addEventListener("mouseenter",()=>{parseInt(s.dataset.id),s.classList.add("active");const d=parseInt(s.dataset.id),p=r.find(h=>h.id===d);p&&(p.videoUrl&&l(p.videoUrl),p.imageUrl&&l(p.imageUrl),p.colorImages&&Array.isArray(p.colorImages)&&p.colorImages.forEach(h=>{l(h)}))}),s.addEventListener("mouseleave",()=>{s.classList.remove("active")}),s.addEventListener("mousemove",y)}),document.querySelectorAll(".about-card__button").forEach(s=>{s.addEventListener("click",f)})}function w(){document.querySelectorAll(".about-card").forEach(s=>{s.removeEventListener("mouseenter",()=>{}),s.removeEventListener("mouseleave",()=>{}),s.removeEventListener("mousemove",y)}),document.querySelectorAll(".about-card__button").forEach(s=>{s.removeEventListener("click",f)}),e&&(e.destroy(),e=null),c.clear()}try{console.log("Рендерим карточки..."),v(),console.log("Устанавливаем обработчики событий..."),E(),console.log("Предзагрузка критически важных ресурсов..."),r.slice(0,3).forEach(i=>{i.videoUrl&&l(i.videoUrl),i.imageUrl&&l(i.imageUrl)}),console.log("Инициализация About завершена успешно")}catch(i){console.error("Ошибка при инициализации About:",i)}return function(){console.log("Очистка секции About"),w()}}console.log("Main.js инициализирован");let _=[];function j(){const a="IntersectionObserver"in window,o=function(){const c=document.createElement("div");return c.style.display="flex",c.style.display==="flex"}(),e=function(){const c=document.createElement("div");return c.style.display="grid",c.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",a),console.log("- Flexbox:",o),console.log("- CSS Grid:",e),a||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:a,hasFlexbox:o,hasGrid:e}}function T(){try{_.forEach(a=>{typeof a=="function"&&a()}),_=[]}catch(a){console.warn("Error during global cleanup:",a)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const a=j(),o=L();typeof o=="function"&&_.push(o);const e=$();typeof e=="function"&&_.push(e);const c=performance.now();console.log(`Страница загружена за ${c.toFixed(2)}ms`),window.addEventListener("beforeunload",T)}catch(a){console.error("Ошибка при инициализации страницы:",a)}});window.onerror=function(a,o,e,c,r){return console.error("Глобальная ошибка:",{message:a,source:o,lineno:e,colno:c,error:r}),!1};window.addEventListener("unhandledrejection",function(a){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",a.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
