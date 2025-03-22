(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();function E(){console.log("Hero section initialized");const a=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),l=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),c=document.querySelector(".hero__pricing"),p=document.getElementById("buy-button"),g=document.getElementById("more-details-button");let m=null;function b(){if(!o){console.error("Hero image element not found");return}console.log("Setting up hero image"),o.onerror=()=>{console.error("Failed to load hero image:",o.src);try{const t=o.getAttribute("srcset");if(t){const u=t.split(",");if(u&&u.length>0){const f=u[0].split(" ")[0];console.log("Using fallback image:",f),o.src=f}}}catch(t){console.error("Error setting fallback image:",t)}a&&a.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),a&&a.classList.add("hero--loaded")},o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),a&&a.classList.add("hero--loaded"))}function v(){const t=window.innerWidth>992;l&&r&&c&&(t?(l.style.display="block",r.style.display="none"):(l.style.display="none",r.style.display="block"))}function n(){if(e){m&&(m.disconnect(),m=null);try{m=new IntersectionObserver(t=>{try{t.forEach(u=>{u.isIntersecting&&u.target&&u.target.isConnected&&(u.target.classList.add("animate-in"),m&&m.unobserve(u.target))})}catch(u){console.warn("Error in IntersectionObserver callback:",u)}},{threshold:.1}),e&&e.isConnected&&m.observe(e)}catch(t){console.warn("Error setting up IntersectionObserver:",t)}}}function i(){p&&(p.removeEventListener("click",d),p.addEventListener("click",d)),g&&(g.removeEventListener("click",s),g.addEventListener("click",s))}function d(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(t){console.error("Error opening product link:",t)}}function s(t){t.preventDefault();const u=document.getElementById("features"),f=document.querySelector(".header");if(u&&f)try{const y=f.offsetHeight,I=u.getBoundingClientRect().top,S=window.scrollY||window.pageYOffset,x=I+S-y;window.scrollTo({top:x,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(y){console.error("Error scrolling to features:",y),window.location.hash="features"}}function h(){try{m&&(m.disconnect(),m=null),window.removeEventListener("resize",v),p&&p.removeEventListener("click",d),g&&g.removeEventListener("click",s),window.removeEventListener("unload",h),window.removeEventListener("beforeunload",h)}catch(t){console.warn("Error during cleanup:",t)}}return b(),v(),n(),i(),window.removeEventListener("resize",v),window.addEventListener("resize",v),typeof window<"u"&&(window.removeEventListener("beforeunload",h),window.addEventListener("beforeunload",h)),h}function _(a){let o=null,e=null,l=!1,r=0,c=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function g(t){t.key==="Escape"&&l&&s()}function m(){const t=document.createElement("div");return t.className="modal-about-overlay",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("tabindex","-1"),t.style.display="none",t.addEventListener("click",s),a.appendChild(t),t}function b(){return e?e.title==="Extensive color selection"&&e.colorImages?`
        <img
          src="${e.colorImages[r]}"
          alt="R36S Color Variant ${r+1}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `:e.videoUrl?`
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="metadata"
          width="640" 
          height="360"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${e.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `:e.imageUrl?`
      <img
        src="${e.imageUrl}"
        alt="${e.imageAlt||"Feature image"}"
        class="modal-about-image"
        loading="lazy"
        width="400" 
        height="400"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2UgLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg==';"
      />
    `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${e.imageAlt||"Feature Image"}
      </div>
    `:""}function v(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(c&&clearInterval(c),c=setInterval(()=>{r=r===e.colorImages.length-1?0:r+1;const t=o.querySelector(".modal-about-image");t&&(t.src=e.colorImages[r],t.alt=`R36S Color Variant ${r+1}`)},1e3))}function n(){if(!o||!e)return;const t={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(t.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const u=`
        <script type="application/ld+json">
          ${JSON.stringify(t)}
        <\/script>
      `;o.innerHTML=`
        ${u}
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
              ${b()}
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
      `;const f=o.querySelector(".modal-about-close");f&&f.addEventListener("click",s);const y=o.querySelector(".modal-about-content");y&&y.addEventListener("click",I=>I.stopPropagation())}function i(t){e=t,o||(o=m()),n();const u=window.location.href,f=new URL(u);return f.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",f),o.style.display="flex",l=!0,o.focus(),window.addEventListener("keydown",g),document.body.style.overflow="hidden",v(),window.addEventListener("popstate",d),{close:s}}function d(t){l&&(!t.state||!t.state.featureId)&&s()}function s(){if(!l||!o)return;l=!1,o.style.display="none",window.removeEventListener("keydown",g),window.removeEventListener("popstate",d),document.body.style.overflow="visible",c&&(clearInterval(c),c=null);const t=new URL(window.location.href);t.searchParams.delete("feature"),window.history.pushState({},"",t)}function h(){s(),o&&a.contains(o)&&a.removeChild(o),o=null,e=null}return{open:i,close:s,destroy:h}}const L="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",C="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",k="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",R="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",O="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",A="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",Z="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",B="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",M="/R36S_CONSOLE_STORE_JS/video/about/video_5_option_.mp4";function j(){console.log("Инициализация секции About");const a=document.querySelector(".about__cards");if(!a)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0},e=null;const l=new Set,r=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:L,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:C,imageAlt:"Display Technologies"},{id:3,icon:`
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

Take your gaming anywhere – play more, charge less.`,videoUrl:Z,imageAlt:"Battery Life"},{id:4,icon:`
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
- Radiant Yellow ...`,colorImages:[k,R,O,A],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- User-friendly interface`,videoUrl:M,imageAlt:"R36S Settings"},{id:6,icon:`
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

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:B,imageAlt:"R36S Portability"}];function c(n){if(l.has(n))return;l.add(n);const i=n.split(".").pop().toLowerCase();if(["mp4","webm","ogg"].includes(i)){console.log("Предзагрузка видео:",n);const d=document.createElement("link");d.rel="preload",d.href=n,d.as="video",d.type=`video/${i}`,document.head.appendChild(d);const s=document.createElement("video");s.style.display="none",s.preload="metadata",s.src=n,s.muted=!0,s.addEventListener("loadedmetadata",()=>{document.body.contains(s)&&document.body.removeChild(s)}),document.body.appendChild(s)}else if(["jpg","jpeg","png","webp","gif"].includes(i)){console.log("Предзагрузка изображения:",n);const d=new Image;d.src=n}}function p(){a.innerHTML=r.map(n=>`
      <div class="about-card" data-id="${n.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${n.icon}</div>
          <h3 class="about-card__title">${n.title}</h3>
          <p class="about-card__description">${n.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${n.number}</span>
            <span class="about-card__detail">${n.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${n.id}">
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
    `).join("")}function g(n){const i=n.currentTarget,d=i.getBoundingClientRect();o={x:n.clientX-d.left,y:n.clientY-d.top},i.style.setProperty("--mouse-x",`${o.x}px`),i.style.setProperty("--mouse-y",`${o.y}px`)}function m(n){const i=parseInt(n.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",i);const d=r.find(s=>s.id===i);if(!d){console.error("Данные для карточки не найдены");return}e||(e=_(document.body)),e.open(d)}function b(){document.querySelectorAll(".about-card").forEach(i=>{i.addEventListener("mouseenter",()=>{parseInt(i.dataset.id),i.classList.add("active");const d=parseInt(i.dataset.id),s=r.find(h=>h.id===d);s&&(s.videoUrl&&c(s.videoUrl),s.imageUrl&&c(s.imageUrl),s.colorImages&&Array.isArray(s.colorImages)&&s.colorImages.forEach(h=>{c(h)}))}),i.addEventListener("mouseleave",()=>{i.classList.remove("active")}),i.addEventListener("mousemove",g)}),document.querySelectorAll(".about-card__button").forEach(i=>{i.addEventListener("click",m)})}function v(){document.querySelectorAll(".about-card").forEach(i=>{i.removeEventListener("mouseenter",()=>{}),i.removeEventListener("mouseleave",()=>{}),i.removeEventListener("mousemove",g)}),document.querySelectorAll(".about-card__button").forEach(i=>{i.removeEventListener("click",m)}),e&&(e.destroy(),e=null),document.querySelectorAll('link[rel="preload"]').forEach(i=>{i.href&&(i.href.includes("/video/about/")||i.href.includes("/img/about/"))&&i.remove()}),l.clear()}try{console.log("Рендерим карточки..."),p(),console.log("Устанавливаем обработчики событий..."),b(),console.log("Предзагрузка критически важных ресурсов..."),r.slice(0,3).forEach(n=>{n.videoUrl&&c(n.videoUrl),n.imageUrl&&c(n.imageUrl)}),console.log("Инициализация About завершена успешно")}catch(n){console.error("Ошибка при инициализации About:",n)}return function(){console.log("Очистка секции About"),v()}}console.log("Main.js инициализирован");let w=[];function P(){const a="IntersectionObserver"in window,o=function(){const l=document.createElement("div");return l.style.display="flex",l.style.display==="flex"}(),e=function(){const l=document.createElement("div");return l.style.display="grid",l.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",a),console.log("- Flexbox:",o),console.log("- CSS Grid:",e),a||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:a,hasFlexbox:o,hasGrid:e}}function U(){try{w.forEach(a=>{typeof a=="function"&&a()}),w=[]}catch(a){console.warn("Error during global cleanup:",a)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const a=P(),o=E();typeof o=="function"&&w.push(o);const e=j();typeof e=="function"&&w.push(e);const l=performance.now();console.log(`Страница загружена за ${l.toFixed(2)}ms`),window.addEventListener("beforeunload",U)}catch(a){console.error("Ошибка при инициализации страницы:",a)}});window.onerror=function(a,o,e,l,r){return console.error("Глобальная ошибка:",{message:a,source:o,lineno:e,colno:l,error:r}),!1};window.addEventListener("unhandledrejection",function(a){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",a.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
