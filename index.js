(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function e(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=e(i);fetch(i.href,c)}})();function C(){let n=!1,o=window.scrollY,e=null;const r=document.querySelector(".header"),i=document.querySelector(".burger-btn"),c=document.querySelector(".burger-line"),p=document.querySelector(".mobile-menu"),m=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function g(){const a=window.scrollY,t=o<a;e&&clearTimeout(e),a>100?d(!t):d(!0),o=a,l(a>0),e=setTimeout(()=>{},150)}function y(){n=!n,v()}function v(){n?(r.classList.add("menu-open"),i.setAttribute("aria-expanded","true"),c.classList.add("open"),p.classList.add("open"),document.body.style.overflow="hidden"):(r.classList.remove("menu-open"),i.setAttribute("aria-expanded","false"),c.classList.remove("open"),p.classList.remove("open"),document.body.style.overflow="unset")}function l(a){a?r.classList.add("scrolled"):r.classList.remove("scrolled")}function d(a){a?(r.classList.add("visible"),r.classList.remove("hidden")):(r.classList.add("hidden"),r.classList.remove("visible"))}function s(a){a.preventDefault();const t=a.currentTarget.getAttribute("href"),u=t.replace("#",""),h=document.getElementById(u);h&&(d(!0),setTimeout(()=>{const b=r.offsetHeight,I=h.getBoundingClientRect().top+window.scrollY-b;window.scrollTo({top:I,behavior:"smooth"}),n&&(n=!1,v()),window.history.replaceState(null,"",`${window.location.pathname}${t}`),setTimeout(()=>{o=window.scrollY},100)},50))}function f(){if(window.location.hash){const a=window.location.hash.replace("#",""),t=document.getElementById(a);t&&setTimeout(()=>{const u=r.offsetHeight,b=t.getBoundingClientRect().top+window.scrollY-u;window.scrollTo({top:b,behavior:"smooth"})},100)}}window.addEventListener("scroll",g),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&n&&(n=!1,v())}),i&&i.addEventListener("click",y),m.forEach(a=>{a.addEventListener("click",s)}),f()}function k(){const n=document.querySelector(".mobile-menu");if(!n){console.error("Мобильное меню не найдено в DOM");return}const o=n.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{e()});function e(){n.classList.remove("open");const p=document.querySelector(".burger-line");p&&p.classList.remove("open"),document.body.style.overflow="unset";const m=document.querySelector(".header");m&&m.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}n.querySelectorAll(".mobile-menu__link").forEach(p=>{p.addEventListener("click",()=>{setTimeout(()=>{e()},150)})});const i=n.querySelector(".mobile-menu__background");i&&i.addEventListener("click",()=>{e()});function c(){n.querySelectorAll(".mobile-menu__icon").forEach((m,g)=>{m.style.opacity="0",m.style.transform="translateX(-20px)",new MutationObserver(v=>{v.forEach(l=>{l.attributeName==="class"&&(n.classList.contains("open")?setTimeout(()=>{m.style.transition="all 0.4s ease",m.style.opacity="1",m.style.transform="translateX(0)"},100+g*70):(m.style.opacity="0",m.style.transform="translateX(-20px)"))})}).observe(n,{attributes:!0})})}c(),console.log("Мобильное меню с иконками инициализировано")}function M(){console.log("Hero section initialized");const n=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),r=document.querySelector(".hero__description--desktop"),i=document.querySelector(".hero__description--mobile"),c=document.querySelector(".hero__pricing"),p=document.getElementById("buy-button"),m=document.getElementById("more-details-button");let g=null;function y(){if(!o){console.error("Hero image element not found");return}console.log("Setting up hero image"),o.onerror=()=>{console.error("Failed to load hero image:",o.src);try{const t=o.getAttribute("srcset");if(t){const u=t.split(",");if(u&&u.length>0){const h=u[0].split(" ")[0];console.log("Using fallback image:",h),o.src=h}}}catch(t){console.error("Error setting fallback image:",t)}n&&n.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),n&&n.classList.add("hero--loaded")},o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),n&&n.classList.add("hero--loaded"))}function v(){const t=window.innerWidth>992;r&&i&&c&&(t?(r.style.display="block",i.style.display="none"):(r.style.display="none",i.style.display="block"))}function l(){if(e){g&&(g.disconnect(),g=null);try{g=new IntersectionObserver(t=>{try{t.forEach(u=>{u.isIntersecting&&u.target&&u.target.isConnected&&(u.target.classList.add("animate-in"),g&&g.unobserve(u.target))})}catch(u){console.warn("Error in IntersectionObserver callback:",u)}},{threshold:.1}),e&&e.isConnected&&g.observe(e)}catch(t){console.warn("Error setting up IntersectionObserver:",t)}}}function d(){p&&(p.removeEventListener("click",s),p.addEventListener("click",s)),m&&(m.removeEventListener("click",f),m.addEventListener("click",f))}function s(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(t){console.error("Error opening product link:",t)}}function f(t){t.preventDefault();const u=document.getElementById("features"),h=document.querySelector(".header");if(u&&h)try{const b=h.offsetHeight,S=u.getBoundingClientRect().top,I=window.scrollY||window.pageYOffset,_=S+I-b;window.scrollTo({top:_,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(b){console.error("Error scrolling to features:",b),window.location.hash="features"}}function a(){try{g&&(g.disconnect(),g=null),window.removeEventListener("resize",v),p&&p.removeEventListener("click",s),m&&m.removeEventListener("click",f),window.removeEventListener("unload",a),window.removeEventListener("beforeunload",a)}catch(t){console.warn("Error during cleanup:",t)}}return y(),v(),l(),d(),window.removeEventListener("resize",v),window.addEventListener("resize",v),typeof window<"u"&&(window.removeEventListener("beforeunload",a),window.addEventListener("beforeunload",a)),a}function x(n){let o=null,e=null,r=!1,i=0,c=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function m(t){t.key==="Escape"&&r&&f()}function g(){const t=document.createElement("div");return t.className="modal-about-overlay",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("tabindex","-1"),t.style.display="none",t.addEventListener("click",f),n.appendChild(t),t}function y(){return e?e.title==="Extensive color selection"&&e.colorImages?`
      <img
        src="${e.colorImages[i]}"
        alt="R36S Color Variant ${i+1}"
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
  `:""}function v(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(c&&clearInterval(c),c=setInterval(()=>{i=i===e.colorImages.length-1?0:i+1;const t=o.querySelector(".modal-about-image");t&&(t.src=e.colorImages[i],t.alt=`R36S Color Variant ${i+1}`)},1e3))}function l(){if(!o||!e)return;const t={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(t.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const u=`
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
              ${y()}
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
      `;const h=o.querySelector(".modal-about-close");h&&h.addEventListener("click",f);const b=o.querySelector(".modal-about-content");b&&b.addEventListener("click",S=>S.stopPropagation())}function d(t){e=t,o||(o=g()),l();const u=window.location.href,h=new URL(u);return h.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",h),o.style.display="flex",r=!0,o.focus(),window.addEventListener("keydown",m),document.body.style.overflow="hidden",v(),window.addEventListener("popstate",s),{close:f}}function s(t){r&&(!t.state||!t.state.featureId)&&f()}function f(){if(!r||!o)return;r=!1,o.style.display="none",window.removeEventListener("keydown",m),window.removeEventListener("popstate",s),document.body.style.overflow="visible",c&&(clearInterval(c),c=null);const t=new URL(window.location.href);t.searchParams.delete("feature"),window.history.pushState({},"",t)}function a(){f(),o&&n.contains(o)&&n.removeChild(o),o=null,e=null}return{open:d,close:f,destroy:a}}const O="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",R="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",A="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",B="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",D="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",P="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",j="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",Z="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",T="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";function U(){console.log("Инициализация секции About");const n=document.querySelector(".about__cards");if(!n)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0},e=null;const r=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:O,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
      `,title:"Powerful battery",description:"Enjoy up to 7-8 hours of continuous gaming with the R36S.",number:"7-8",detail:"hours of play",fullDescription:`Powerful 3200 mAh Battery

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display`,videoUrl:j,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[A,B,D,P],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:T,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:Z,imageAlt:"R36S Portability"}];function i(){n.innerHTML=r.map(l=>`
      <div class="about-card" data-id="${l.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${l.icon}</div>
          <h3 class="about-card__title">${l.title}</h3>
          <p class="about-card__description">${l.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${l.number}</span>
            <span class="about-card__detail">${l.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${l.id}">
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
    `).join("")}function c(l){const d=l.currentTarget,s=d.getBoundingClientRect();o={x:l.clientX-s.left,y:l.clientY-s.top},d.style.setProperty("--mouse-x",`${o.x}px`),d.style.setProperty("--mouse-y",`${o.y}px`)}function p(l){const d=parseInt(l.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",d);const s=r.find(f=>f.id===d);if(!s){console.error("Данные для карточки не найдены");return}e||(e=x(document.body)),e.open(s)}function m(l,d){let s;return function(){const f=this,a=arguments;clearTimeout(s),s=setTimeout(()=>{l.apply(f,a)},d)}}function g(){document.querySelectorAll(".about-card").forEach(d=>{d.removeEventListener("mouseenter",()=>{}),d.removeEventListener("mouseleave",()=>{}),d.removeEventListener("mousemove",c),d.removeEventListener("click",()=>{})}),document.querySelectorAll(".about-card__button").forEach(d=>{d.removeEventListener("click",p)})}function y(){const l=document.querySelectorAll(".about-card"),d=window.matchMedia("(max-width: 768px)").matches;l.forEach(s=>{s.addEventListener("mouseenter",()=>{parseInt(s.dataset.id),s.classList.add("active")}),s.addEventListener("mouseleave",()=>{s.classList.remove("active")}),s.addEventListener("mousemove",c),d||s.addEventListener("click",f=>{if(!f.target.closest(".about-card__button")){const a=parseInt(s.dataset.id);console.log("Клик по карточке ID:",a);const t=r.find(u=>u.id===a);if(!t){console.error("Данные для карточки не найдены");return}e||(e=x(document.body)),e.open(t)}})}),document.querySelectorAll(".about-card__button").forEach(s=>{s.addEventListener("click",p)}),window.addEventListener("resize",m(()=>{const s=!d,f=!window.matchMedia("(max-width: 768px)").matches;s!==f&&(g(),y())},250))}function v(){g(),window.removeEventListener("resize",m),e&&(e.destroy(),e=null)}try{console.log("Рендерим карточки..."),i(),console.log("Устанавливаем обработчики событий..."),y(),console.log("Инициализация About завершена успешно")}catch(l){console.error("Ошибка при инициализации About:",l)}return function(){console.log("Очистка секции About"),v()}}console.log("Main.js инициализирован");const E=C();typeof E=="function"&&w.push(E);const L=k();typeof L=="function"&&w.push(L);let w=[];function H(){const n="IntersectionObserver"in window,o=function(){const r=document.createElement("div");return r.style.display="flex",r.style.display==="flex"}(),e=function(){const r=document.createElement("div");return r.style.display="grid",r.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",n),console.log("- Flexbox:",o),console.log("- CSS Grid:",e),n||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:n,hasFlexbox:o,hasGrid:e}}function z(){try{w.forEach(n=>{typeof n=="function"&&n()}),w=[]}catch(n){console.warn("Error during global cleanup:",n)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const n=H(),o=M();typeof o=="function"&&w.push(o);const e=U();typeof e=="function"&&w.push(e);const r=performance.now();console.log(`Страница загружена за ${r.toFixed(2)}ms`),window.addEventListener("beforeunload",z)}catch(n){console.error("Ошибка при инициализации страницы:",n)}});window.onerror=function(n,o,e,r,i){return console.error("Глобальная ошибка:",{message:n,source:o,lineno:e,colno:r,error:i}),!1};window.addEventListener("unhandledrejection",function(n){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",n.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
