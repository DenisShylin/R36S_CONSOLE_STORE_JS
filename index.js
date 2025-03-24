(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}})();function _(){console.log("Hero section initialized");const i=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),s=document.querySelector(".hero__description--desktop"),n=document.querySelector(".hero__description--mobile"),l=document.querySelector(".hero__pricing"),p=document.getElementById("buy-button"),h=document.getElementById("more-details-button");let m=null;function y(){if(!o){console.error("Hero image element not found");return}console.log("Setting up hero image"),o.onerror=()=>{console.error("Failed to load hero image:",o.src);try{const t=o.getAttribute("srcset");if(t){const d=t.split(",");if(d&&d.length>0){const f=d[0].split(" ")[0];console.log("Using fallback image:",f),o.src=f}}}catch(t){console.error("Error setting fallback image:",t)}i&&i.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),i&&i.classList.add("hero--loaded")},o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),i&&i.classList.add("hero--loaded"))}function v(){const t=window.innerWidth>992;s&&n&&l&&(t?(s.style.display="block",n.style.display="none"):(s.style.display="none",n.style.display="block"))}function a(){if(e){m&&(m.disconnect(),m=null);try{m=new IntersectionObserver(t=>{try{t.forEach(d=>{d.isIntersecting&&d.target&&d.target.isConnected&&(d.target.classList.add("animate-in"),m&&m.unobserve(d.target))})}catch(d){console.warn("Error in IntersectionObserver callback:",d)}},{threshold:.1}),e&&e.isConnected&&m.observe(e)}catch(t){console.warn("Error setting up IntersectionObserver:",t)}}}function c(){p&&(p.removeEventListener("click",r),p.addEventListener("click",r)),h&&(h.removeEventListener("click",u),h.addEventListener("click",u))}function r(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(t){console.error("Error opening product link:",t)}}function u(t){t.preventDefault();const d=document.getElementById("features"),f=document.querySelector(".header");if(d&&f)try{const b=f.offsetHeight,I=d.getBoundingClientRect().top,x=window.scrollY||window.pageYOffset,E=I+x-b;window.scrollTo({top:E,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(b){console.error("Error scrolling to features:",b),window.location.hash="features"}}function g(){try{m&&(m.disconnect(),m=null),window.removeEventListener("resize",v),p&&p.removeEventListener("click",r),h&&h.removeEventListener("click",u),window.removeEventListener("unload",g),window.removeEventListener("beforeunload",g)}catch(t){console.warn("Error during cleanup:",t)}}return y(),v(),a(),c(),window.removeEventListener("resize",v),window.addEventListener("resize",v),typeof window<"u"&&(window.removeEventListener("beforeunload",g),window.addEventListener("beforeunload",g)),g}function S(i){let o=null,e=null,s=!1,n=0,l=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function h(t){t.key==="Escape"&&s&&u()}function m(){const t=document.createElement("div");return t.className="modal-about-overlay",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("tabindex","-1"),t.style.display="none",t.addEventListener("click",u),i.appendChild(t),t}function y(){return e?e.title==="Extensive color selection"&&e.colorImages?`
      <img
        src="${e.colorImages[n]}"
        alt="R36S Color Variant ${n+1}"
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
  `:""}function v(){(e==null?void 0:e.title)==="Extensive color selection"&&e.colorImages&&(l&&clearInterval(l),l=setInterval(()=>{n=n===e.colorImages.length-1?0:n+1;const t=o.querySelector(".modal-about-image");t&&(t.src=e.colorImages[n],t.alt=`R36S Color Variant ${n+1}`)},1e3))}function a(){if(!o||!e)return;const t={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(t.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const d=`
        <script type="application/ld+json">
          ${JSON.stringify(t)}
        <\/script>
      `;o.innerHTML=`
        ${d}
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
      `;const f=o.querySelector(".modal-about-close");f&&f.addEventListener("click",u);const b=o.querySelector(".modal-about-content");b&&b.addEventListener("click",I=>I.stopPropagation())}function c(t){e=t,o||(o=m()),a();const d=window.location.href,f=new URL(d);return f.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",f),o.style.display="flex",s=!0,o.focus(),window.addEventListener("keydown",h),document.body.style.overflow="hidden",v(),window.addEventListener("popstate",r),{close:u}}function r(t){s&&(!t.state||!t.state.featureId)&&u()}function u(){if(!s||!o)return;s=!1,o.style.display="none",window.removeEventListener("keydown",h),window.removeEventListener("popstate",r),document.body.style.overflow="visible",l&&(clearInterval(l),l=null);const t=new URL(window.location.href);t.searchParams.delete("feature"),window.history.pushState({},"",t)}function g(){u(),o&&i.contains(o)&&i.removeChild(o),o=null,e=null}return{open:c,close:u,destroy:g}}const L="/R36S_CONSOLE_STORE_JS/video/about/video_1_.gif",C="/R36S_CONSOLE_STORE_JS/video/about/video_2_.gif",k="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",R="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",M="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",O="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",A="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",B="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",D="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";function j(){console.log("Инициализация секции About");const i=document.querySelector(".about__cards");if(!i)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0},e=null;const s=[{id:1,icon:`
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
      `,title:"Powerful battery",description:"Enjoy up to 7-8 hours of continuous gaming with the R36S.",number:"7-8",detail:"hours of play",fullDescription:`Powerful 3200 mAh Battery

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display`,videoUrl:A,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[k,R,M,O],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:D,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:B,imageAlt:"R36S Portability"}];function n(){i.innerHTML=s.map(a=>`
      <div class="about-card" data-id="${a.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${a.icon}</div>
          <h3 class="about-card__title">${a.title}</h3>
          <p class="about-card__description">${a.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${a.number}</span>
            <span class="about-card__detail">${a.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${a.id}">
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
    `).join("")}function l(a){const c=a.currentTarget,r=c.getBoundingClientRect();o={x:a.clientX-r.left,y:a.clientY-r.top},c.style.setProperty("--mouse-x",`${o.x}px`),c.style.setProperty("--mouse-y",`${o.y}px`)}function p(a){const c=parseInt(a.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",c);const r=s.find(u=>u.id===c);if(!r){console.error("Данные для карточки не найдены");return}e||(e=S(document.body)),e.open(r)}function h(a,c){let r;return function(){const u=this,g=arguments;clearTimeout(r),r=setTimeout(()=>{a.apply(u,g)},c)}}function m(){document.querySelectorAll(".about-card").forEach(c=>{c.removeEventListener("mouseenter",()=>{}),c.removeEventListener("mouseleave",()=>{}),c.removeEventListener("mousemove",l),c.removeEventListener("click",()=>{})}),document.querySelectorAll(".about-card__button").forEach(c=>{c.removeEventListener("click",p)})}function y(){const a=document.querySelectorAll(".about-card"),c=window.matchMedia("(max-width: 768px)").matches;a.forEach(r=>{r.addEventListener("mouseenter",()=>{parseInt(r.dataset.id),r.classList.add("active")}),r.addEventListener("mouseleave",()=>{r.classList.remove("active")}),r.addEventListener("mousemove",l),c||r.addEventListener("click",u=>{if(!u.target.closest(".about-card__button")){const g=parseInt(r.dataset.id);console.log("Клик по карточке ID:",g);const t=s.find(d=>d.id===g);if(!t){console.error("Данные для карточки не найдены");return}e||(e=S(document.body)),e.open(t)}})}),document.querySelectorAll(".about-card__button").forEach(r=>{r.addEventListener("click",p)}),window.addEventListener("resize",h(()=>{const r=!c,u=!window.matchMedia("(max-width: 768px)").matches;r!==u&&(m(),y())},250))}function v(){m(),window.removeEventListener("resize",h),e&&(e.destroy(),e=null)}try{console.log("Рендерим карточки..."),n(),console.log("Устанавливаем обработчики событий..."),y(),console.log("Инициализация About завершена успешно")}catch(a){console.error("Ошибка при инициализации About:",a)}return function(){console.log("Очистка секции About"),v()}}console.log("Main.js инициализирован");let w=[];function Z(){const i="IntersectionObserver"in window,o=function(){const s=document.createElement("div");return s.style.display="flex",s.style.display==="flex"}(),e=function(){const s=document.createElement("div");return s.style.display="grid",s.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",i),console.log("- Flexbox:",o),console.log("- CSS Grid:",e),i||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:i,hasFlexbox:o,hasGrid:e}}function U(){try{w.forEach(i=>{typeof i=="function"&&i()}),w=[]}catch(i){console.warn("Error during global cleanup:",i)}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен");try{const i=Z(),o=_();typeof o=="function"&&w.push(o);const e=j();typeof e=="function"&&w.push(e);const s=performance.now();console.log(`Страница загружена за ${s.toFixed(2)}ms`),window.addEventListener("beforeunload",U)}catch(i){console.error("Ошибка при инициализации страницы:",i)}});window.onerror=function(i,o,e,s,n){return console.error("Глобальная ошибка:",{message:i,source:o,lineno:e,colno:s,error:n}),!1};window.addEventListener("unhandledrejection",function(i){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",i.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
