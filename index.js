(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function M(){let o=!1,t=window.scrollY,e=null;const i=document.querySelector(".header"),r=document.querySelector(".burger-btn"),s=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),u=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function g(){const d=window.scrollY,n=t<d;e&&clearTimeout(e),d>100?m(!n):m(!0),t=d,c(d>0),e=setTimeout(()=>{},150)}function v(){o=!o,y()}function y(){o?(i.classList.add("menu-open"),r.setAttribute("aria-expanded","true"),s.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(i.classList.remove("menu-open"),r.setAttribute("aria-expanded","false"),s.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function c(d){d?i.classList.add("scrolled"):i.classList.remove("scrolled")}function m(d){d?(i.classList.add("visible"),i.classList.remove("hidden")):(i.classList.add("hidden"),i.classList.remove("visible"))}function a(d){d.preventDefault();const n=d.currentTarget.getAttribute("href"),p=n.replace("#",""),h=document.getElementById(p);h&&(m(!0),setTimeout(()=>{const b=i.offsetHeight,S=h.getBoundingClientRect().top+window.scrollY-b;window.scrollTo({top:S,behavior:"smooth"}),o&&(o=!1,y()),window.history.replaceState(null,"",`${window.location.pathname}${n}`),setTimeout(()=>{t=window.scrollY},100)},50))}function f(){if(window.location.hash){const d=window.location.hash.replace("#",""),n=document.getElementById(d);n&&setTimeout(()=>{const p=i.offsetHeight,b=n.getBoundingClientRect().top+window.scrollY-p;window.scrollTo({top:b,behavior:"smooth"})},100)}}window.addEventListener("scroll",g),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&o&&(o=!1,y())}),r&&r.addEventListener("click",v),u.forEach(d=>{d.addEventListener("click",a)}),f()}function A(){const o=document.querySelector(".mobile-menu");if(!o){console.error("Мобильное меню не найдено в DOM");return}const t=o.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{e()});function e(){o.classList.remove("open");const l=document.querySelector(".burger-line");l&&l.classList.remove("open"),document.body.style.overflow="unset";const u=document.querySelector(".header");u&&u.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}o.querySelectorAll(".mobile-menu__link").forEach(l=>{l.addEventListener("click",()=>{setTimeout(()=>{e()},150)})});const r=o.querySelector(".mobile-menu__background");r&&r.addEventListener("click",()=>{e()});function s(){o.querySelectorAll(".mobile-menu__icon").forEach((u,g)=>{u.style.opacity="0",u.style.transform="translateX(-20px)",new MutationObserver(y=>{y.forEach(c=>{c.attributeName==="class"&&(o.classList.contains("open")?setTimeout(()=>{u.style.transition="all 0.4s ease",u.style.opacity="1",u.style.transform="translateX(0)"},100+g*70):(u.style.opacity="0",u.style.transform="translateX(-20px)"))})}).observe(o,{attributes:!0})})}s(),console.log("Мобильное меню с иконками инициализировано")}function O(){console.log("Hero section initialized");const o=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),i=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),s=document.querySelector(".hero__pricing"),l=document.getElementById("buy-button"),u=document.getElementById("more-details-button");let g=null;function v(){if(!t){console.error("Hero image element not found");return}console.log("Setting up hero image"),t.onerror=()=>{console.error("Failed to load hero image:",t.src);try{const n=t.getAttribute("srcset");if(n){const p=n.split(",");if(p&&p.length>0){const h=p[0].split(" ")[0];console.log("Using fallback image:",h),t.src=h}}}catch(n){console.error("Error setting fallback image:",n)}o&&o.classList.add("hero--loaded")},t.onload=()=>{console.log("Hero image loaded successfully"),o&&o.classList.add("hero--loaded")},t.decoding="async",t.complete&&(console.log("Hero image already loaded (from cache)"),o&&o.classList.add("hero--loaded"))}function y(){const n=window.innerWidth>992;i&&r&&s&&(n?(i.style.display="block",r.style.display="none"):(i.style.display="none",r.style.display="block"))}function c(){if(e){g&&(g.disconnect(),g=null);try{g=new IntersectionObserver(n=>{try{n.forEach(p=>{p.isIntersecting&&p.target&&p.target.isConnected&&(p.target.classList.add("animate-in"),g&&g.unobserve(p.target))})}catch(p){console.warn("Error in IntersectionObserver callback:",p)}},{threshold:.1}),e&&e.isConnected&&g.observe(e)}catch(n){console.warn("Error setting up IntersectionObserver:",n)}}}function m(){l&&(l.removeEventListener("click",a),l.addEventListener("click",a)),u&&(u.removeEventListener("click",f),u.addEventListener("click",f))}function a(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(n){console.error("Error opening product link:",n)}}function f(n){n.preventDefault();const p=document.getElementById("features"),h=document.querySelector(".header");if(p&&h)try{const b=h.offsetHeight,I=p.getBoundingClientRect().top,S=window.scrollY||window.pageYOffset,B=I+S-b;window.scrollTo({top:B,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(b){console.error("Error scrolling to features:",b),window.location.hash="features"}}function d(){try{g&&(g.disconnect(),g=null),window.removeEventListener("resize",y),l&&l.removeEventListener("click",a),u&&u.removeEventListener("click",f),window.removeEventListener("unload",d),window.removeEventListener("beforeunload",d)}catch(n){console.warn("Error during cleanup:",n)}}return v(),y(),c(),m(),window.removeEventListener("resize",y),window.addEventListener("resize",y),typeof window<"u"&&(window.removeEventListener("beforeunload",d),window.addEventListener("beforeunload",d)),d}function E(o){let t=null,e=null,i=!1,r=0,s=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function u(n){n.key==="Escape"&&i&&f()}function g(){const n=document.createElement("div");return n.className="modal-about-overlay",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("tabindex","-1"),n.style.display="none",n.addEventListener("click",f),o.appendChild(n),n}function v(){return e?e.title==="Extensive color selection"&&e.colorImages?`
      <img
        src="${e.colorImages[r]}"
        alt="R36S Color Variant ${r+1}"
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
  `:""}function y(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(s&&clearInterval(s),s=setInterval(()=>{r=r===e.colorImages.length-1?0:r+1;const n=t.querySelector(".modal-about-image");n&&(n.src=e.colorImages[r],n.alt=`R36S Color Variant ${r+1}`)},1e3))}function c(){if(!t||!e)return;const n={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(n.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const p=`
        <script type="application/ld+json">
          ${JSON.stringify(n)}
        <\/script>
      `;t.innerHTML=`
        ${p}
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
      `;const h=t.querySelector(".modal-about-close");h&&h.addEventListener("click",f);const b=t.querySelector(".modal-about-content");b&&b.addEventListener("click",I=>I.stopPropagation())}function m(n){e=n,t||(t=g()),c();const p=window.location.href,h=new URL(p);return h.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",h),t.style.display="flex",i=!0,t.focus(),window.addEventListener("keydown",u),document.body.style.overflow="hidden",y(),window.addEventListener("popstate",a),{close:f}}function a(n){i&&(!n.state||!n.state.featureId)&&f()}function f(){if(!i||!t)return;i=!1,t.style.display="none",window.removeEventListener("keydown",u),window.removeEventListener("popstate",a),document.body.style.overflow="visible",s&&(clearInterval(s),s=null);const n=new URL(window.location.href);n.searchParams.delete("feature"),window.history.pushState({},"",n)}function d(){f(),t&&o.contains(t)&&o.removeChild(t),t=null,e=null}return{open:m,close:f,destroy:d}}const R="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",D="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",T="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",P="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",j="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",H="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",U="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",Z="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",z="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";function $(){console.log("Инициализация секции About");const o=document.querySelector(".about__cards");if(!o)return console.error("Контейнер для карточек не найден"),null;let t={x:0,y:0},e=null;const i=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:R,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:D,imageAlt:"Display Technologies"},{id:3,icon:`
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
- Full-screen IPS display`,videoUrl:U,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[T,P,j,H],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:z,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:Z,imageAlt:"R36S Portability"}];function r(){o.innerHTML=i.map(c=>`
      <div class="about-card" data-id="${c.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${c.icon}</div>
          <h3 class="about-card__title">${c.title}</h3>
          <p class="about-card__description">${c.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${c.number}</span>
            <span class="about-card__detail">${c.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${c.id}">
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
    `).join("")}function s(c){const m=c.currentTarget,a=m.getBoundingClientRect();t={x:c.clientX-a.left,y:c.clientY-a.top},m.style.setProperty("--mouse-x",`${t.x}px`),m.style.setProperty("--mouse-y",`${t.y}px`)}function l(c){const m=parseInt(c.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",m);const a=i.find(f=>f.id===m);if(!a){console.error("Данные для карточки не найдены");return}e||(e=E(document.body)),e.open(a)}function u(c,m){let a;return function(){const f=this,d=arguments;clearTimeout(a),a=setTimeout(()=>{c.apply(f,d)},m)}}function g(){document.querySelectorAll(".about-card").forEach(m=>{m.removeEventListener("mouseenter",()=>{}),m.removeEventListener("mouseleave",()=>{}),m.removeEventListener("mousemove",s),m.removeEventListener("click",()=>{})}),document.querySelectorAll(".about-card__button").forEach(m=>{m.removeEventListener("click",l)})}function v(){const c=document.querySelectorAll(".about-card"),m=window.matchMedia("(max-width: 768px)").matches;c.forEach(a=>{a.addEventListener("mouseenter",()=>{parseInt(a.dataset.id),a.classList.add("active")}),a.addEventListener("mouseleave",()=>{a.classList.remove("active")}),a.addEventListener("mousemove",s),m||a.addEventListener("click",f=>{if(!f.target.closest(".about-card__button")){const d=parseInt(a.dataset.id);console.log("Клик по карточке ID:",d);const n=i.find(p=>p.id===d);if(!n){console.error("Данные для карточки не найдены");return}e||(e=E(document.body)),e.open(n)}})}),document.querySelectorAll(".about-card__button").forEach(a=>{a.addEventListener("click",l)}),window.addEventListener("resize",u(()=>{const a=!m,f=!window.matchMedia("(max-width: 768px)").matches;a!==f&&(g(),v())},250))}function y(){g(),window.removeEventListener("resize",u),e&&(e.destroy(),e=null)}try{console.log("Рендерим карточки..."),r(),console.log("Устанавливаем обработчики событий..."),v(),console.log("Инициализация About завершена успешно")}catch(c){console.error("Ошибка при инициализации About:",c)}return function(){console.log("Очистка секции About"),y()}}function q(){const o=document.getElementById("features"),t=document.getElementById("featuresVideo"),e=document.getElementById("soundToggleButton"),i=document.getElementById("volumeOffIcon"),r=document.getElementById("volumeOnIcon"),s=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");if(!o){console.warn("Features section not found");return}t&&(t.volume=.5,t.play().catch(g=>{console.log("Автовоспроизведение не удалось:",g)})),s&&s.addEventListener("click",x),l&&l.addEventListener("click",_),e&&e.addEventListener("click",()=>L(t,i,r));const u=()=>{N(o,t,i,r)};return window.addEventListener("scroll",u),function(){s&&s.removeEventListener("click",x),l&&l.removeEventListener("click",_),e&&e.removeEventListener("click",()=>L(t,i,r)),window.removeEventListener("scroll",u),console.log("Features component cleaned up")}}function L(o,t,e){if(o)if(o.muted=!o.muted,o.muted){t.style.display="block",e.style.display="none";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Включить звук")}else{o.volume=.5,t.style.display="none",e.style.display="block";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Выключить звук")}}function N(o,t,e,i){if(!o||!t||t.muted)return;const r=o.getBoundingClientRect();if(!(r.top<window.innerHeight&&r.bottom>0)){t.muted=!0,e.style.display="block",i.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label","Включить звук")}}function x(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function _(){const o=document.getElementById("features-r36s"),t=document.querySelector(".header");if(o&&t){const e=t.offsetHeight,i=o.getBoundingClientRect().top,r=window.scrollY||window.pageYOffset,s=i+r-e;window.scrollTo({top:s,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}console.log("Main.js инициализирован");let w=[];const C=M();typeof C=="function"&&w.push(C);const k=A();typeof k=="function"&&w.push(k);function W(){const o="IntersectionObserver"in window,t=function(){const i=document.createElement("div");return i.style.display="flex",i.style.display==="flex"}(),e=function(){const i=document.createElement("div");return i.style.display="grid",i.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",o),console.log("- Flexbox:",t),console.log("- CSS Grid:",e),o||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:o,hasFlexbox:t,hasGrid:e}}function F(){try{w.forEach(o=>{typeof o=="function"&&o()}),w=[]}catch(o){console.warn("Error during global cleanup:",o)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const o=W(),t=O();typeof t=="function"&&w.push(t);const e=$();typeof e=="function"&&w.push(e);const i=q();typeof i=="function"&&w.push(i);const r=performance.now();console.log(`Страница загружена за ${r.toFixed(2)}ms`),window.addEventListener("beforeunload",F)}catch(o){console.error("Ошибка при инициализации страницы:",o)}});window.onerror=function(o,t,e,i,r){return console.error("Глобальная ошибка:",{message:o,source:t,lineno:e,colno:i,error:r}),!1};window.addEventListener("unhandledrejection",function(o){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",o.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
