(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function R(){let e=!1,o=window.scrollY,t=null;const n=document.querySelector(".header"),r=document.querySelector(".burger-btn"),l=document.querySelector(".burger-line"),a=document.querySelector(".mobile-menu"),d=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function f(){const m=window.scrollY,i=o<m;t&&clearTimeout(t),m>100?p(!i):p(!0),o=m,c(m>0),t=setTimeout(()=>{},150)}function I(){e=!e,v()}function v(){e?(n.classList.add("menu-open"),r.setAttribute("aria-expanded","true"),l.classList.add("open"),a.classList.add("open"),document.body.style.overflow="hidden"):(n.classList.remove("menu-open"),r.setAttribute("aria-expanded","false"),l.classList.remove("open"),a.classList.remove("open"),document.body.style.overflow="unset")}function c(m){m?n.classList.add("scrolled"):n.classList.remove("scrolled")}function p(m){m?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible"))}function u(m){m.preventDefault();const i=m.currentTarget.getAttribute("href"),g=i.replace("#",""),b=document.getElementById(g);b&&(p(!0),setTimeout(()=>{const w=n.offsetHeight,_=b.getBoundingClientRect().top+window.scrollY-w;window.scrollTo({top:_,behavior:"smooth"}),e&&(e=!1,v()),window.history.replaceState(null,"",`${window.location.pathname}${i}`),setTimeout(()=>{o=window.scrollY},100)},50))}function y(){if(window.location.hash){const m=window.location.hash.replace("#",""),i=document.getElementById(m);i&&setTimeout(()=>{const g=n.offsetHeight,w=i.getBoundingClientRect().top+window.scrollY-g;window.scrollTo({top:w,behavior:"smooth"})},100)}}window.addEventListener("scroll",f),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,v())}),r&&r.addEventListener("click",I),d.forEach(m=>{m.addEventListener("click",u)}),y()}function D(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const o=e.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{t()});function t(){e.classList.remove("open");const a=document.querySelector(".burger-line");a&&a.classList.remove("open"),document.body.style.overflow="unset";const d=document.querySelector(".header");d&&d.classList.remove("menu-open");const f=document.querySelector(".burger-btn");f&&f.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(a=>{a.addEventListener("click",()=>{setTimeout(()=>{t()},150)})});const r=e.querySelector(".mobile-menu__background");r&&r.addEventListener("click",()=>{t()});function l(){e.querySelectorAll(".mobile-menu__icon").forEach((d,f)=>{d.style.opacity="0",d.style.transform="translateX(-20px)",new MutationObserver(v=>{v.forEach(c=>{c.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{d.style.transition="all 0.4s ease",d.style.opacity="1",d.style.transform="translateX(0)"},100+f*70):(d.style.opacity="0",d.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}l(),console.log("Мобильное меню с иконками инициализировано")}function P(){console.log("Hero section initialized");const e=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),t=document.querySelector(".hero__content"),n=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),l=document.querySelector(".hero__pricing"),a=document.getElementById("buy-button"),d=document.getElementById("more-details-button");let f=null;function I(){if(!o){console.error("Hero image element not found");return}console.log("Setting up hero image"),o.onerror=()=>{console.error("Failed to load hero image:",o.src);try{const i=o.getAttribute("srcset");if(i){const g=i.split(",");if(g&&g.length>0){const b=g[0].split(" ")[0];console.log("Using fallback image:",b),o.src=b}}}catch(i){console.error("Error setting fallback image:",i)}e&&e.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),e&&e.classList.add("hero--loaded")},o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),e&&e.classList.add("hero--loaded"))}function v(){const i=window.innerWidth>992;n&&r&&l&&(i?(n.style.display="block",r.style.display="none"):(n.style.display="none",r.style.display="block"))}function c(){if(t){f&&(f.disconnect(),f=null);try{f=new IntersectionObserver(i=>{try{i.forEach(g=>{g.isIntersecting&&g.target&&g.target.isConnected&&(g.target.classList.add("animate-in"),f&&f.unobserve(g.target))})}catch(g){console.warn("Error in IntersectionObserver callback:",g)}},{threshold:.1}),t&&t.isConnected&&f.observe(t)}catch(i){console.warn("Error setting up IntersectionObserver:",i)}}}function p(){a&&(a.removeEventListener("click",u),a.addEventListener("click",u)),d&&(d.removeEventListener("click",y),d.addEventListener("click",y))}function u(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(i){console.error("Error opening product link:",i)}}function y(i){i.preventDefault();const g=document.getElementById("features"),b=document.querySelector(".header");if(g&&b)try{const w=b.offsetHeight,E=g.getBoundingClientRect().top,_=window.scrollY||window.pageYOffset,L=E+_-w;window.scrollTo({top:L,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(w){console.error("Error scrolling to features:",w),window.location.hash="features"}}function m(){try{f&&(f.disconnect(),f=null),window.removeEventListener("resize",v),a&&a.removeEventListener("click",u),d&&d.removeEventListener("click",y),window.removeEventListener("unload",m),window.removeEventListener("beforeunload",m)}catch(i){console.warn("Error during cleanup:",i)}}return I(),v(),c(),p(),window.removeEventListener("resize",v),window.addEventListener("resize",v),typeof window<"u"&&(window.removeEventListener("beforeunload",m),window.addEventListener("beforeunload",m)),m}function k(e){let o=null,t=null,n=!1,r=0,l=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function d(i){i.key==="Escape"&&n&&y()}function f(){const i=document.createElement("div");return i.className="modal-about-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.addEventListener("click",y),e.appendChild(i),i}function I(){return t?t.title==="Extensive color selection"&&t.colorImages?`
      <img
        src="${t.colorImages[r]}"
        alt="R36S Color Variant ${r+1}"
        class="modal-about-image"
        loading="lazy"
        width="400" 
        height="400"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
      />
    `:t.videoUrl?t.videoUrl.toString().toLowerCase().endsWith(".mp4")?`
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
          <source src="${t.videoUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${t.videoUrl}"
        alt="${t.imageAlt||"Feature animation"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
      />
    `:t.imageUrl?t.imageUrl.toString().toLowerCase().endsWith(".mp4")?`
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
          <source src="${t.imageUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${t.imageUrl}"
        alt="${t.imageAlt||"Feature image"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
      />
    `:`
    <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
      ${t.imageAlt||"Feature Image"}
    </div>
  `:""}function v(){(t==null?void 0:t.title)==="Extensive color selection"&&t.colorImages&&(l&&clearInterval(l),l=setInterval(()=>{r=r===t.colorImages.length-1?0:r+1;const i=o.querySelector(".modal-about-image");i&&(i.src=t.colorImages[r],i.alt=`R36S Color Variant ${r+1}`)},1e3))}function c(){if(!o||!t)return;const i={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:t.fullDescription,image:t.imageUrl||(t.colorImages?t.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:t.title}};t.id===1&&(i.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const g=`
        <script type="application/ld+json">
          ${JSON.stringify(i)}
        <\/script>
      `;o.innerHTML=`
        ${g}
        <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
          <meta itemprop="name" content="R36S Handheld Game Console" />
          <meta itemprop="description" content="${t.title} for R36S console" />
          <meta itemprop="sku" content="R36S-${t.id}" />
          <meta itemprop="brand" content="R36S" />
          <meta itemprop="productID" content="R36S-F${t.id}" />
          
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
            <div class="modal-about-icon-wrapper" aria-hidden="true">${t.icon}</div>
            <h3 class="modal-about-title" itemprop="name">${t.title}</h3>
          </div>

          <div class="modal-about-body">
            <div class="modal-about-media-container" itemprop="image">
              ${I()}
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
                ${t.fullDescription}
              </div>
            </div>
          </div>
        </div>
      `;const b=o.querySelector(".modal-about-close");b&&b.addEventListener("click",y);const w=o.querySelector(".modal-about-content");w&&w.addEventListener("click",E=>E.stopPropagation())}function p(i){t=i,o||(o=f()),c();const g=window.location.href,b=new URL(g);return b.searchParams.set("feature",t.id),window.history.pushState({featureId:t.id},"",b),o.style.display="flex",n=!0,o.focus(),window.addEventListener("keydown",d),document.body.style.overflow="hidden",v(),window.addEventListener("popstate",u),{close:y}}function u(i){n&&(!i.state||!i.state.featureId)&&y()}function y(){if(!n||!o)return;n=!1,o.style.display="none",window.removeEventListener("keydown",d),window.removeEventListener("popstate",u),document.body.style.overflow="visible",l&&(clearInterval(l),l=null);const i=new URL(window.location.href);i.searchParams.delete("feature"),window.history.pushState({},"",i)}function m(){y(),o&&e.contains(o)&&e.removeChild(o),o=null,t=null}return{open:p,close:y,destroy:m}}const H="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",j="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",U="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",Z="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",q="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",$="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",z="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",N="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",W="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";function F(){console.log("Инициализация секции About");const e=document.querySelector(".about__cards");if(!e)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0},t=null;const n=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:H,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:j,imageAlt:"Display Technologies"},{id:3,icon:`
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
- Full-screen IPS display`,videoUrl:z,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[U,Z,q,$],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:W,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:N,imageAlt:"R36S Portability"}];function r(){e.innerHTML=n.map(c=>`
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
    `).join("")}function l(c){const p=c.currentTarget,u=p.getBoundingClientRect();o={x:c.clientX-u.left,y:c.clientY-u.top},p.style.setProperty("--mouse-x",`${o.x}px`),p.style.setProperty("--mouse-y",`${o.y}px`)}function a(c){const p=parseInt(c.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",p);const u=n.find(y=>y.id===p);if(!u){console.error("Данные для карточки не найдены");return}t||(t=k(document.body)),t.open(u)}function d(c,p){let u;return function(){const y=this,m=arguments;clearTimeout(u),u=setTimeout(()=>{c.apply(y,m)},p)}}function f(){document.querySelectorAll(".about-card").forEach(p=>{p.removeEventListener("mouseenter",()=>{}),p.removeEventListener("mouseleave",()=>{}),p.removeEventListener("mousemove",l),p.removeEventListener("click",()=>{})}),document.querySelectorAll(".about-card__button").forEach(p=>{p.removeEventListener("click",a)})}function I(){const c=document.querySelectorAll(".about-card"),p=window.matchMedia("(max-width: 768px)").matches;c.forEach(u=>{u.addEventListener("mouseenter",()=>{parseInt(u.dataset.id),u.classList.add("active")}),u.addEventListener("mouseleave",()=>{u.classList.remove("active")}),u.addEventListener("mousemove",l),p||u.addEventListener("click",y=>{if(!y.target.closest(".about-card__button")){const m=parseInt(u.dataset.id);console.log("Клик по карточке ID:",m);const i=n.find(g=>g.id===m);if(!i){console.error("Данные для карточки не найдены");return}t||(t=k(document.body)),t.open(i)}})}),document.querySelectorAll(".about-card__button").forEach(u=>{u.addEventListener("click",a)}),window.addEventListener("resize",d(()=>{const u=!p,y=!window.matchMedia("(max-width: 768px)").matches;u!==y&&(f(),I())},250))}function v(){f(),window.removeEventListener("resize",d),t&&(t.destroy(),t=null)}try{console.log("Рендерим карточки..."),r(),console.log("Устанавливаем обработчики событий..."),I(),console.log("Инициализация About завершена успешно")}catch(c){console.error("Ошибка при инициализации About:",c)}return function(){console.log("Очистка секции About"),v()}}function V(){const e=document.getElementById("features"),o=document.getElementById("featuresVideo"),t=document.getElementById("soundToggleButton"),n=document.getElementById("volumeOffIcon"),r=document.getElementById("volumeOnIcon"),l=document.getElementById("buyButton"),a=document.getElementById("moreInfoButton");if(!e){console.warn("Features section not found");return}o&&(o.volume=.5,o.play().catch(f=>{console.log("Автовоспроизведение не удалось:",f)})),l&&l.addEventListener("click",M),a&&a.addEventListener("click",O),t&&t.addEventListener("click",()=>B(o,n,r));const d=()=>{G(e,o,n,r)};return window.addEventListener("scroll",d),function(){l&&l.removeEventListener("click",M),a&&a.removeEventListener("click",O),t&&t.removeEventListener("click",()=>B(o,n,r)),window.removeEventListener("scroll",d),console.log("Features component cleaned up")}}function B(e,o,t){if(e)if(e.muted=!e.muted,e.muted){o.style.display="block",t.style.display="none";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Включить звук")}else{e.volume=.5,o.style.display="none",t.style.display="block";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Выключить звук")}}function G(e,o,t,n){if(!e||!o||o.muted)return;const r=e.getBoundingClientRect();if(!(r.top<window.innerHeight&&r.bottom>0)){o.muted=!0,t.style.display="block",n.style.display="none";const a=document.getElementById("soundToggleButton");a&&a.setAttribute("aria-label","Включить звук")}}function M(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function O(){const e=document.getElementById("features-r36s"),o=document.querySelector(".header");if(e&&o){const t=o.offsetHeight,n=e.getBoundingClientRect().top,r=window.scrollY||window.pageYOffset,l=n+r-t;window.scrollTo({top:l,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function Y(){console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),o=document.querySelector(".categories__video-placeholder"),t=document.getElementById("categories"),n=document.querySelector(".categories__content"),r=document.querySelector(".categories__video-play"),l=document.querySelector(".categories__video-mute"),a=document.querySelector(".categories__video-slider"),d=document.querySelector(".categories__video-container"),f=document.querySelector(".categories__video-time span:first-child"),I=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};n||console.warn("Элемент categories__content не найден");let v=!1,c=!0,p=!1,u=!1;const y=s=>{if(isNaN(s)||s<0)return"0:00";const h=Math.floor(s/60),S=Math.floor(s%60);return`${h}:${S.toString().padStart(2,"0")}`};function m(){r&&(r.innerHTML=v?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="6" y="4" width="4" height="16"></rect>
           <rect x="14" y="4" width="4" height="16"></rect>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="5 3 19 12 5 21 5 3"></polygon>
         </svg>`)}function i(){l&&(l.innerHTML=c?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
           <line x1="23" y1="9" x2="17" y2="15"></line>
           <line x1="17" y1="9" x2="23" y2="15"></line>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
         </svg>`)}function g(){if(!(!e||u)){if(v)e.pause(),v=!1;else{const s=e.play();if(s!==void 0){s.then(()=>{console.log("Воспроизведение видео успешно"),v=!0}).catch(h=>{console.warn("Не удалось воспроизвести видео:",h),v=!1}).finally(()=>{m()});return}else v=!0}m()}}function b(s){if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);const h=document.createElement("source");h.src=s,h.type="video/mp4";const S=document.createTextNode("Your browser does not support the video tag.");e.appendChild(h),e.appendChild(S),e.load()}function w(){d&&(u=!0,e&&(e.style.display="none"),d.innerHTML=`
      <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
        <div style="text-align: center; padding: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
            <path d="M8 16l12-8-12-8v16z"></path>
          </svg>
          <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
        </div>
      </div>
    `)}if(window.IntersectionObserver&&n)try{const s=new IntersectionObserver(h=>{h.forEach(S=>{S.isIntersecting?S.target.classList.add("animate-in"):e&&S.target===t&&(e.muted=!0,c=!0,i())})},{threshold:.1});s.observe(n),t&&s.observe(t)}catch(s){console.error("Ошибка при инициализации IntersectionObserver:",s),n&&n.classList.add("animate-in")}else n&&n.classList.add("animate-in");const E=["/video/categories/video_categories_.mp4","/public/video/categories/video_categories_.mp4","../video/categories/video_categories_.mp4","video_categories_.mp4"];function _(s){return new Promise(h=>{const S=setTimeout(()=>{console.log(`Превышено время ожидания для ${s}`),h(!1)},2e3);fetch(s,{method:"HEAD",cache:"no-cache"}).then(C=>{clearTimeout(S),C.ok?(console.log(`Видео доступно по пути: ${s}`),h(!0)):(console.log(`Видео недоступно по пути: ${s}, статус: ${C.status}`),h(!1))}).catch(C=>{clearTimeout(S),console.warn(`Ошибка при проверке пути ${s}:`,C),h(!1)})})}async function L(){for(const s of E)if(await _(s))return s;return null}return e?(console.log("Видео элемент найден:",e),e.muted=!0,e.loop=!0,e.playsInline=!0,e.style.display="block",e.style.visibility="visible",e.style.opacity="1",e.style.width="100%",e.style.borderRadius="24px",d&&(d.style.minHeight="200px"),e.addEventListener("canplay",()=>{console.log("Видео может быть воспроизведено"),e.style.display="block",e.style.visibility="visible",e.style.opacity="1"}),e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),p=!0,o&&(o.style.display="none"),e.style.display="block",e.style.visibility="visible",e.style.opacity="1",a&&!isNaN(e.duration)&&(a.max=e.duration,I&&(I.textContent=y(e.duration)))}catch(s){console.error("Ошибка при обработке метаданных видео:",s)}}),setTimeout(()=>{if(e&&p){const s=e.play();s!==void 0&&s.then(()=>{console.log("Автовоспроизведение видео успешно"),v=!0,m()}).catch(h=>{console.warn("Не удалось автовоспроизвести видео:",h)})}},1e3),e.addEventListener("timeupdate",()=>{try{a&&!isNaN(e.currentTime)&&(a.value=e.currentTime,f&&(f.textContent=y(e.currentTime)))}catch(s){console.error("Ошибка при обновлении времени видео:",s)}}),e.addEventListener("error",s=>{console.error("Ошибка при загрузке видео:",s),p||L().then(h=>{h?(console.log("Найден работающий путь к видео:",h),b(h)):(console.error("Ни один из путей к видео не работает"),w())})}),setTimeout(()=>{!p&&!u&&(console.log("Видео не загрузилось автоматически, ищем работающий путь"),L().then(s=>{s?(console.log("Найден работающий путь к видео:",s),b(s)):(console.error("Ни один из путей к видео не работает"),w())}))},2e3)):(console.error("Видео элемент не найден в DOM"),w()),r&&r.addEventListener("click",s=>{s.stopPropagation(),g()}),l&&l.addEventListener("click",s=>{s.stopPropagation(),e&&(c=!c,e.muted=c,i())}),a&&a.addEventListener("input",s=>{if(e)try{const h=parseFloat(s.target.value);isNaN(h)||(e.currentTime=h)}catch(h){console.error("Ошибка при изменении времени видео:",h)}}),d&&d.addEventListener("click",s=>{s.target.closest(".categories__video-controls")||g()}),m(),i(),t&&t.classList.add("initialized"),{togglePlay:g,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}console.log("Main.js инициализирован");let x=[];const A=R();typeof A=="function"&&x.push(A);const T=D();typeof T=="function"&&x.push(T);function J(){const e="IntersectionObserver"in window,o=function(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}(),t=function(){const n=document.createElement("div");return n.style.display="grid",n.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",o),console.log("- CSS Grid:",t),e||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),t||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:o,hasGrid:t}}function Q(){try{x.forEach(e=>{typeof e=="function"&&e()}),x=[]}catch(e){console.warn("Error during global cleanup:",e)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const e=J(),o=P();typeof o=="function"&&x.push(o);const t=F();typeof t=="function"&&x.push(t);const n=V();typeof n=="function"&&x.push(n);const r=Y();typeof r=="function"&&x.push(r);const l=performance.now();console.log(`Страница загружена за ${l.toFixed(2)}ms`),window.addEventListener("beforeunload",Q)}catch(e){console.error("Ошибка при инициализации страницы:",e)}});window.onerror=function(e,o,t,n,r){return console.error("Глобальная ошибка:",{message:e,source:o,lineno:t,colno:n,error:r}),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",e.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
