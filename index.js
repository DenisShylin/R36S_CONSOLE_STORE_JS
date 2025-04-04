import{i as L}from"./assets/vendor-C77IuWVK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Q(){console.log("Инициализация кнопки прокрутки вверх и селектора языка");const e={en:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
        </svg>`,ru:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#fff"/>
          <rect width="60" height="10" y="10" fill="#0039A6"/>
          <rect width="60" height="10" y="20" fill="#D52B1E"/>
        </svg>`,ar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#006C35"/>
          <rect width="60" height="10" y="10" fill="#FFFFFF"/>
          <rect width="60" height="10" y="20" fill="#000000"/>
        </svg>`,be:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="20" fill="#D22730"/>
          <rect width="60" height="10" y="20" fill="#00840f"/>
          <path d="M0,0 H10 V30 H0 Z" fill="#FFFFFF"/>
        </svg>`,de:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#000"/>
          <rect width="60" height="10" y="10" fill="#DD0000"/>
          <rect width="60" height="10" y="20" fill="#FFCE00"/>
        </svg>`,es:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#c60b1e"/>
          <rect width="60" height="15" y="7.5" fill="#ffc400"/>
        </svg>`,fr:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="20" height="30" fill="#002395"/>
          <rect width="20" height="30" x="20" fill="#FFFFFF"/>
          <rect width="20" height="30" x="40" fill="#ED2939"/>
        </svg>`,it:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="20" height="30" fill="#009246"/>
          <rect width="20" height="30" x="20" fill="#FFFFFF"/>
          <rect width="20" height="30" x="40" fill="#CE2B37"/>
        </svg>`,ja:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#FFFFFF"/>
          <circle cx="30" cy="15" r="9" fill="#BC002D"/>
        </svg>`,ko:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#FFFFFF"/>
          <circle cx="30" cy="15" r="6" fill="#C60C30"/>
          <path d="M25,9 A 6,6 0 0 1 35,9" fill="#003478"/>
          <path d="M25,21 A 6,6 0 0 0 35,21" fill="#003478"/>
        </svg>`,nl:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="10" fill="#AE1C28"/>
          <rect width="60" height="10" y="10" fill="#FFFFFF"/>
          <rect width="60" height="10" y="20" fill="#21468B"/>
        </svg>`,pt:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#006600"/>
          <rect width="20" height="30" fill="#FF0000"/>
          <circle cx="20" cy="15" r="4" fill="#FFFF00"/>
        </svg>`,tr:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#E30A17"/>
          <circle cx="22.5" cy="15" r="6" fill="#FFFFFF"/>
          <circle cx="25.2" cy="15" r="5" fill="#E30A17"/>
          <polygon fill="#FFFFFF" points="30,15 32.5,19 28.5,16.5 31.5,16.5 27.5,19"/>
        </svg>`,uk:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
          <rect width="60" height="15" fill="#005BBB"/>
          <rect width="60" height="15" y="15" fill="#FFD500"/>
        </svg>`},o=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],t={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},n=document.createElement("div");n.className="corner-buttons-container";const s=document.createElement("div");s.className="language-selector",s.id="corner-language-selector";const r=document.createElement("button");r.className="language-button",r.setAttribute("aria-label","Выбрать язык");const c=document.createElement("div");c.className="language-button__flag",c.id="current-language-flag";const g=document.createElement("div");g.className="language-dropdown",g.id="language-dropdown";const d=document.createElement("button");d.className="scroll-to-top",d.setAttribute("aria-label","Прокрутить вверх страницы"),d.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `,r.appendChild(c),s.appendChild(r),s.appendChild(g),n.appendChild(s),n.appendChild(d),document.body.appendChild(n),b();function m(f,p){let a;return function(){const l=arguments,h=this;a||(f.apply(h,l),a=!0,setTimeout(()=>a=!1,p))}}const w=m(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?d.classList.add("visible"):d.classList.remove("visible")},100);function y(f){f.preventDefault(),d.classList.add("active"),setTimeout(()=>{d.classList.remove("active")},200),window.scrollTo({top:0,behavior:"smooth"})}function b(){try{let a=function(h){c.innerHTML=e[h]||""},l=function(){g.innerHTML="",o.forEach(h=>{const i=document.createElement("div");i.className=`language-dropdown__item ${h===p?"active":""}`,i.dataset.lang=h;const u=document.createElement("div");u.className="language-dropdown__flag",u.innerHTML=e[h]||"";const v=document.createElement("div");v.className="language-dropdown__name",v.textContent=t[h]||h,i.appendChild(u),i.appendChild(v),g.appendChild(i),i.addEventListener("click",()=>{f&&(f.value=h,f.dispatchEvent(new Event("change"))),s.classList.remove("active"),document.querySelectorAll(".language-dropdown__item").forEach(x=>{x.classList.toggle("active",x.dataset.lang===h)}),a(h)})})},f=document.getElementById("language-selector");f||(f=document.createElement("select"),f.id="language-selector",f.style.display="none",document.body.appendChild(f),o.forEach(h=>{const i=document.createElement("option");i.value=h,i.textContent=t[h]||h,f.appendChild(i)}));const p=localStorage.getItem("userLanguage")||"en";f&&(f.value=p),a(p),l(),r.addEventListener("click",function(h){h.preventDefault(),h.stopPropagation(),s.classList.toggle("active")}),document.addEventListener("click",h=>{s.contains(h.target)||s.classList.remove("active")}),window.addEventListener("languageChanged",h=>{h.detail&&h.detail.language&&(a(h.detail.language),document.querySelectorAll(".language-dropdown__item").forEach(i=>{i.classList.toggle("active",i.dataset.lang===h.detail.language)}))})}catch(f){console.error("Ошибка при инициализации селектора языка:",f)}}return window.addEventListener("scroll",w,{passive:!0}),d.addEventListener("click",y),w(),function(){console.log("Очистка кнопки прокрутки вверх и селектора языка"),window.removeEventListener("scroll",w),d.removeEventListener("click",y),r.removeEventListener("click",()=>{}),document.querySelectorAll(".language-dropdown__item").forEach(p=>{p.removeEventListener("click",()=>{})}),n&&n.parentNode&&n.parentNode.removeChild(n)}}function X(e,o){try{const t=sessionStorage.getItem("detectedBrowserLanguage");if(t&&e.includes(t))return console.log("Using cached browser language detection:",t),t;if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array, using default language"),o;console.log("Detecting user language with:",{supportedLanguages:e,defaultLanguage:o});const n=g=>{if(!g)return!1;const d=g.split("-")[0].toLowerCase();return e.includes(d)?d:null},s=localStorage.getItem("userLanguage");console.log("Saved language in localStorage:",s);const r=s&&s.trim()!==""&&n(s);if(r)return console.log("Using saved language preference:",r),r;let c=[];navigator.languages&&navigator.languages.length?c=[...navigator.languages]:navigator.language?c=[navigator.language]:navigator.userLanguage?c=[navigator.userLanguage]:navigator.browserLanguage?c=[navigator.browserLanguage]:navigator.systemLanguage&&(c=[navigator.systemLanguage]),console.log("Browser language preferences:",c);for(const g of c){const d=n(g);if(d)return console.log("Found supported browser language:",d),sessionStorage.setItem("detectedBrowserLanguage",d),d}return console.log("No matching language found, using default:",o),o}catch(t){return console.error("Error in detectUserLanguage:",t),console.error("Stack trace:",t.stack),o}}function z(e){try{if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array passed to getLanguageFromURL"),null;const o=window.location.pathname,t="/R36S_CONSOLE_STORE_JS/";if(console.log("Current path for language detection:",o),console.log("Base URL for language detection:",t),!o||o==="/")return console.log("Empty path, no language prefix"),null;let n=o;t!=="/"&&o.startsWith(t)&&(n=o.substring(t.length)||"/"),console.log("Path without base for language detection:",n);const s=n.split("/").filter(r=>r.trim()!=="");if(console.log("Path parts for language detection:",s),s.length>0){const r=s[0].toLowerCase();if(e.includes(r))return console.log(`Found language in URL: ${r}`),r}return null}catch(o){return console.error("Error getting language from URL:",o),null}}function W(e){try{if(!e){console.warn("No language provided to updateLanguageURL");return}if(typeof e!="string"||e.trim()===""){console.warn("Invalid language value provided to updateLanguageURL");return}if(z(["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"])===e){console.log("URL already has the correct language prefix, no update needed");return}console.log("Current localStorage userLanguage before URL update:",localStorage.getItem("userLanguage")),console.log("Before language URL update, current URL:",window.location.href),console.log("Updating URL for language:",e);try{if(e==="en"){const g="/R36S_CONSOLE_STORE_JS/";console.log(`Updating URL to base URL for English: ${g}`),window.history.pushState({},"",g);return}const n=new URL(window.location.href).pathname;if(n.includes(".")&&!n.endsWith("index.html")){console.log("Skipping URL update for resource file");return}const s="/R36S_CONSOLE_STORE_JS/";let c=`${s.endsWith("/")?s:s+"/"}${e}/`;if(console.log("New path with language:",c),c===n){console.log("No URL change needed, paths are identical");return}window.history.pushState({},"",c),console.log("URL updated successfully")}catch(t){console.error("Error updating URL with language:",t)}}catch(o){console.error("Error updating URL with language:",o)}}const I={},M=e=>{try{const t=`${L.language}_${e}`;if(I[t])return I[t];let n=L.t(`hero.pricing.${e}`,{defaultValue:null});return n||(e==="current"?n="$35.48 US":e==="original"?n="US $108.06":e==="discount"&&(n="-68%")),I[t]=n,n}catch(o){return console.error("Error in getLocalizedPrice:",o),""}},N=()=>{for(const e in I)delete I[e]},F={},B=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],ee={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},O=["hero"],te="languageChanged",oe=(e,o)=>`/R36S_CONSOLE_STORE_JS/locales/${e}/${o}.json`,$=async(e,o)=>{const t=`${e}_${o}`;if(F[t])return F[t];try{const n=oe(e,o);console.log(`Загрузка перевода: ${n}`);const s=await fetch(n,{cache:"no-store",headers:{"Cache-Control":"no-cache"}});if(!s.ok)return console.warn(`Не удалось загрузить перевод ${e}/${o}: ${s.status}`),e!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${o}`),$("en",o)):{};const r=await s.json();return F[t]=r,r}catch(n){return console.error(`Ошибка загрузки ${e}/${o} переводов:`,n),e!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${o} после ошибки`),$("en",o)):{}}},j=async e=>{try{const o=await Promise.allSettled(O.map(n=>$(e,n))),t={};return o.forEach((n,s)=>{if(n.status==="fulfilled"){const r=n.value,c=O[s];t[c]=r}else console.warn(`Не удалось загрузить секцию: ${O[s]}`)}),t}catch(o){return console.error(`Ошибка загрузки переводов для ${e}:`,o),{}}},ne=()=>{try{document.querySelectorAll("[data-i18n]").forEach(e=>{const o=e.getAttribute("data-i18n");if(o)if(o.startsWith("[")){const t=o.match(/^\[(.*)\](.*)$/);if(t){const[,n,s]=t,r=L.t(s);r&&e.setAttribute(n,r)}}else{const t=L.t(o);t&&(e.hasAttribute("content")?e.setAttribute("content",t):e.textContent=t)}})}catch(e){console.error("Ошибка обновления текстовых элементов:",e)}},ie=()=>{try{const e=["ar"];document.documentElement.dir=e.includes(L.language)?"rtl":"ltr",document.documentElement.setAttribute("lang",L.language)}catch(e){console.error("Ошибка обновления поддержки RTL:",e)}},q=async()=>{try{ne(),ie(),window.dispatchEvent(new CustomEvent(te,{detail:{language:L.language}}))}catch(e){console.error("Ошибка в updateAllContent:",e)}};async function re(e={}){try{console.log("Setting up i18n with options:",e),console.log("Current localStorage userLanguage:",localStorage.getItem("userLanguage")),console.log("Current BASE_URL:","/R36S_CONSOLE_STORE_JS/");const{forcedLanguage:o}=e,t=localStorage.getItem("userLanguage"),n=t&&B.includes(t),s=o||(n?t:null)||X(B,"en");console.log("Selected user language:",s);const r=await j(s);console.log(`Загруженные переводы для ${s}:`,r);const c=s!=="en"?await j("en"):null,g={[s]:{translation:r}};return c&&(g.en={translation:c}),await L.init({lng:s,fallbackLng:"en",resources:g,interpolation:{escapeValue:!1},debug:!0,load:"languageOnly",returnNull:!1,returnEmptyString:!1,missingKeyHandler:(d,m,w)=>{console.warn(`Отсутствует ключ перевода: ${w} для языка ${d} в пространстве ${m}`)}}),localStorage.setItem("userLanguage",s),L.on("languageChanged",d=>{console.log("Language changed to:",d),localStorage.setItem("userLanguage",d),W(d),typeof N=="function"&&N(),q()}),window.updateContent=q,await q(),L}catch(o){throw console.error("Error in setupI18n:",o),o}}function se(){const e=document.getElementById("language-selector");if(e)try{if(e.childElementCount===0){const o=document.createDocumentFragment();B.forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=ee[t]||t,o.appendChild(n)}),e.appendChild(o)}e.value=L.language,e.addEventListener("change",async function(o){o.preventDefault();try{const t=o.target.value;if(console.log(`Language selector changed to: ${t}`),!document.contains(e)){console.log("Language selector no longer in DOM, aborting");return}if(!L.hasResourceBundle(t,"translation")){const n=await j(t);if(!document.contains(e)){console.log("Language selector no longer in DOM after loading translations, aborting");return}L.addResourceBundle(t,"translation",n,!0,!0)}localStorage.setItem("userLanguage",t),await L.changeLanguage(t),W(t),typeof window.updateContent=="function"&&window.updateContent()}catch(t){console.error("Error changing language:",t),e.value=L.language}})}catch(o){console.error("Error setting up language selector:",o)}}function ae(){let e=!1,o=window.scrollY,t=null;const n=document.querySelector(".header"),s=document.querySelector(".burger-btn"),r=document.querySelector(".burger-line"),c=document.querySelector(".mobile-menu"),g=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function d(){const a=window.scrollY,l=o<a;t&&clearTimeout(t),a>100?b(!l):b(!0),o=a,y(a>0),t=setTimeout(()=>{},150)}function m(){e=!e,w()}function w(){e?(n.classList.add("menu-open"),s.setAttribute("aria-expanded","true"),r.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"):(n.classList.remove("menu-open"),s.setAttribute("aria-expanded","false"),r.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow="unset")}function y(a){a?n.classList.add("scrolled"):n.classList.remove("scrolled")}function b(a){a?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible"))}function f(a){a.preventDefault();const l=a.currentTarget.getAttribute("href"),h=l.replace("#",""),i=document.getElementById(h);i&&(b(!0),setTimeout(()=>{n.offsetHeight;const v=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:v,behavior:"smooth"}),e&&(e=!1,w()),window.history.replaceState(null,"",`${window.location.pathname}${l}`),setTimeout(()=>{o=window.scrollY},100)},50))}function p(){if(window.location.hash){const a=window.location.hash.replace("#",""),l=document.getElementById(a);l&&setTimeout(()=>{const h=n.offsetHeight,u=l.getBoundingClientRect().top+window.scrollY-h;window.scrollTo({top:u,behavior:"smooth"})},100)}}window.addEventListener("scroll",d),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,w())}),s&&s.addEventListener("click",m),g.forEach(a=>{a.addEventListener("click",f)}),p()}function le(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const o=e.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{t()});function t(){e.classList.remove("open");const c=document.querySelector(".burger-line");c&&c.classList.remove("open"),document.body.style.overflow="unset";const g=document.querySelector(".header");g&&g.classList.remove("menu-open");const d=document.querySelector(".burger-btn");d&&d.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(c=>{c.addEventListener("click",()=>{setTimeout(()=>{t()},150)})});const s=e.querySelector(".mobile-menu__background");s&&s.addEventListener("click",()=>{t()});function r(){e.querySelectorAll(".mobile-menu__icon").forEach((g,d)=>{g.style.opacity="0",g.style.transform="translateX(-20px)",new MutationObserver(w=>{w.forEach(y=>{y.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{g.style.transition="all 0.4s ease",g.style.opacity="1",g.style.transform="translateX(0)"},100+d*70):(g.style.opacity="0",g.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}r(),console.log("Мобильное меню с иконками инициализировано")}function ce(){const e=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),t=document.querySelector(".hero__content"),n=document.querySelector(".hero__description--desktop"),s=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const r=document.getElementById("buy-button"),c=document.getElementById("more-details-button"),g=document.querySelector(".hero__current-price"),d=document.querySelector(".hero__original-price"),m=document.querySelector(".hero__discount-badge");let w=null,y,b;function f(){try{if(g){const S=M("current");S&&(g.innerHTML=S)}if(d){const S=M("original");S&&(d.textContent=S)}if(m){const S=M("discount");S&&(m.textContent=S)}}catch(S){console.error("Ошибка при обновлении цен:",S)}}function p(){!o||!e||(o.onload=()=>e.classList.add("hero--loaded"),o.onerror=()=>{console.error("Не удалось загрузить изображение:",o.src),e.classList.add("hero--loaded")},o.complete&&e.classList.add("hero--loaded"))}function a(){if(!n||!s)return;const S=window.innerWidth>992;n.style.display=S?"block":"none",s.style.display=S?"none":"block"}function l(){t&&(w&&(w.disconnect(),w=null),w=new IntersectionObserver(S=>{S.forEach(_=>{var C;_.isIntersecting&&((C=_.target)!=null&&C.isConnected)&&(_.target.classList.add("animate-in"),w==null||w.unobserve(_.target))})},{threshold:.1}),t.isConnected&&w.observe(t))}function h(){r&&r.addEventListener("click",u),c&&c.addEventListener("click",v)}function i(){b=S=>{console.log("Hero секция получила событие изменения языка:",S.detail),f()},window.addEventListener("languageChanged",b)}function u(){window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}function v(S){S.preventDefault();const _=document.getElementById("features");if(!_){window.location.hash="features";return}const R=_.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:R,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}function x(){w&&w.disconnect(),clearTimeout(y),window.removeEventListener("resize",E),b&&window.removeEventListener("languageChanged",b),r&&r.removeEventListener("click",u),c&&c.removeEventListener("click",v)}function E(){clearTimeout(y),y=setTimeout(a,200)}return p(),a(),l(),h(),i(),f(),window.addEventListener("resize",E),x}function de(e){let o=null,t=null,n=!1,s=0,r=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function g(l){l.key==="Escape"&&n&&p()}function d(){const l=document.createElement("div");return l.className="modal-about-overlay",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("tabindex","-1"),l.style.display="none",l.addEventListener("click",p),e.appendChild(l),l}function m(){return t?t.title==="Extensive color selection"&&t.colorImages?`
      <img
        src="${t.colorImages[s]}"
        alt="R36S Color Variant ${s+1}"
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
  `:""}function w(){(t==null?void 0:t.title)==="Extensive color selection"&&t.colorImages&&(r&&clearInterval(r),r=setInterval(()=>{s=s===t.colorImages.length-1?0:s+1;const l=o.querySelector(".modal-about-image");l&&(l.src=t.colorImages[s],l.alt=`R36S Color Variant ${s+1}`)},1e3))}function y(){if(!o||!t)return;const l={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:t.fullDescription,image:t.imageUrl||(t.colorImages?t.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:t.title}};t.id===1&&(l.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const h=`
        <script type="application/ld+json">
          ${JSON.stringify(l)}
        <\/script>
      `;o.innerHTML=`
        ${h}
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
              ${m()}
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
      `;const i=o.querySelector(".modal-about-close");i&&i.addEventListener("click",p);const u=o.querySelector(".modal-about-content");u&&u.addEventListener("click",v=>v.stopPropagation())}function b(l){t=l,o||(o=d()),y();const h=window.location.href,i=new URL(h);return i.searchParams.set("feature",t.id),window.history.pushState({featureId:t.id},"",i),o.style.display="flex",n=!0,o.focus(),window.addEventListener("keydown",g),document.body.style.overflow="hidden",w(),window.addEventListener("popstate",f),{close:p}}function f(l){n&&(!l.state||!l.state.featureId)&&p()}function p(){if(!n||!o)return;n=!1,o.style.display="none",window.removeEventListener("keydown",g),window.removeEventListener("popstate",f),document.body.style.overflow="visible",r&&(clearInterval(r),r=null);const l=new URL(window.location.href);l.searchParams.delete("feature"),window.history.pushState({},"",l)}function a(){p(),o&&e.contains(o)&&e.removeChild(o),o=null,t=null}return{open:b,close:p,destroy:a}}const Z="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",V="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",Y="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",J="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",ue="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",ge="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",K="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",me="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",he="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let D=null;function pe(){if(console.log("Начинаем предзагрузку изображений..."),[Z,V,Y,J].forEach(o=>{const t=new Image;t.src=o}),"HTMLVideoElement"in window){const o=document.createElement("video");o.preload="metadata",o.src=K}console.log("Предзагрузка изображений завершена")}function fe(){console.log("Инициализация секции About"),pe();const e=document.querySelector(".about__cards");if(!e)return console.error("Контейнер для карточек не найден"),null;let o={x:0,y:0};D||(console.log("Создаем модальное окно..."),D=de(document.body),console.log("Модальное окно создано"));let t=D;const s=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:Z,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:V,imageAlt:"Display Technologies"},{id:3,icon:`
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
- Full-screen IPS display`,videoUrl:K,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[Y,J,ue,ge],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:he,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:me,imageAlt:"R36S Portability"}];function r(){console.log("Начинаем рендеринг карточек..."),e.innerHTML="";const p=s.map(l=>`
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
    `).join("");e.innerHTML=p;const a=e.querySelectorAll(".about-card");console.log(`Отрендерено ${a.length} карточек из ${s.length} необходимых`),a.length!==s.length?console.warn(`Ошибка рендеринга: отрендерено ${a.length} карточек вместо ${s.length}`):console.log("Рендеринг карточек успешно завершен")}const c=g(function(p){if(!p||!p.currentTarget)return;const a=p.currentTarget;if(!a||!a.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const l=a.getBoundingClientRect();o={x:p.clientX-l.left,y:p.clientY-l.top},a.style.setProperty("--mouse-x",`${o.x}px`),a.style.setProperty("--mouse-y",`${o.y}px`)}catch(l){console.error("Ошибка при обработке движения мыши:",l)}},16);function g(p,a){let l,h;return function(){const i=this,u=arguments;h?(clearTimeout(l),l=setTimeout(function(){Date.now()-h>=a&&(p.apply(i,u),h=Date.now())},a-(Date.now()-h))):(p.apply(i,u),h=Date.now())}}function d(p){if(!p||!p.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}p.stopPropagation();try{const a=parseInt(p.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",a);const l=s.find(h=>h.id===a);if(!l){console.error("Данные для карточки не найдены");return}t&&t.open(l)}catch(a){console.error("Ошибка при обработке клика по кнопке:",a)}}function m(p,a){let l;return function(){const h=this,i=arguments;clearTimeout(l),l=setTimeout(()=>{p.apply(h,i)},a)}}function w(){console.log("Очистка обработчиков событий карточек...");try{const p=document.querySelectorAll(".about-card");p&&p.length>0&&p.forEach(l=>{l&&(l.removeEventListener("mouseenter",()=>{}),l.removeEventListener("mouseleave",()=>{}),l.removeEventListener("mousemove",c))});const a=document.querySelectorAll(".about-card__button");a&&a.length>0&&a.forEach(l=>{l&&l.removeEventListener("click",d)}),e&&e.removeEventListener("click",()=>{}),console.log("Очистка обработчиков завершена")}catch(p){console.error("Ошибка при очистке обработчиков событий:",p)}}function y(){console.log("Настройка обработчиков событий для карточек...");const p=()=>{console.log("Проверяем наличие карточек для установки обработчиков...");const a=document.querySelectorAll(".about-card");if(!a||a.length===0){console.warn("Не найдены карточки для установки обработчиков событий"),setTimeout(p,200);return}console.log(`Устанавливаем обработчики событий для ${a.length} карточек`);const l=window.matchMedia("(max-width: 768px)").matches;!l&&e&&e.addEventListener("click",function(i){const u=i.target.closest(".about-card");if(u&&!i.target.closest(".about-card__button")){const v=parseInt(u.dataset.id);console.log("Клик по карточке ID:",v);const x=s.find(E=>E.id===v);if(!x){console.error("Данные для карточки не найдены");return}t&&t.open(x)}}),a.forEach(i=>{i&&(i.addEventListener("mouseenter",function(){i&&(parseInt(i.dataset.id),i.classList.add("active"))}),i.addEventListener("mouseleave",function(){i&&i.classList.remove("active")}),i.addEventListener("mousemove",c))});const h=document.querySelectorAll(".about-card__button");h&&h.length>0?(h.forEach(i=>{i&&i.addEventListener("click",d)}),console.log(`Установлены обработчики для ${h.length} кнопок`)):console.warn("Не найдены кнопки карточек"),window.addEventListener("resize",m(()=>{const i=!l,u=!window.matchMedia("(max-width: 768px)").matches;i!==u&&(w(),y())},250)),console.log("Настройка обработчиков событий успешно завершена")};document.readyState==="complete"||document.readyState==="interactive"?setTimeout(p,10):document.addEventListener("DOMContentLoaded",p)}function b(){console.log("Очистка всех обработчиков событий..."),w(),window.removeEventListener("resize",m),t=null,console.log("Очистка обработчиков событий завершена")}function f(){return function(){console.log("Запуск функции очистки секции About"),b()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),r(),console.log("Устанавливаем обработчики событий..."),y(),console.log("Инициализация About завершена успешно"),f()}catch(p){return console.error("Ошибка при инициализации About:",p),null}}function we(){const e=document.getElementById("features"),o=document.getElementById("featuresVideo"),t=document.getElementById("soundToggleButton"),n=document.getElementById("volumeOffIcon"),s=document.getElementById("volumeOnIcon"),r=document.getElementById("buyButton"),c=document.getElementById("moreInfoButton");if(!e){console.warn("Features section not found");return}o&&(o.volume=.5,o.play().catch(d=>{console.log("Автовоспроизведение не удалось:",d)})),r&&r.addEventListener("click",U),c&&c.addEventListener("click",H),t&&t.addEventListener("click",()=>P(o,n,s));const g=()=>{ve(e,o,n,s)};return window.addEventListener("scroll",g),function(){r&&r.removeEventListener("click",U),c&&c.removeEventListener("click",H),t&&t.removeEventListener("click",()=>P(o,n,s)),window.removeEventListener("scroll",g),console.log("Features component cleaned up")}}function P(e,o,t){if(e)if(e.muted=!e.muted,e.muted){o.style.display="block",t.style.display="none";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Включить звук")}else{e.volume=.5,o.style.display="none",t.style.display="block";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Выключить звук")}}function ve(e,o,t,n){if(!e||!o||o.muted)return;const s=e.getBoundingClientRect();if(!(s.top<window.innerHeight&&s.bottom>0)){o.muted=!0,t.style.display="block",n.style.display="none";const c=document.getElementById("soundToggleButton");c&&c.setAttribute("aria-label","Включить звук")}}function U(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function H(){const e=document.getElementById("features-r36s");if(e){const o=e.getBoundingClientRect().top,t=window.scrollY||window.pageYOffset,n=o+t;window.scrollTo({top:n,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function ye(){try{let p=function(){n&&(n.innerHTML=m?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`)},a=function(){s&&(s.innerHTML=w?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`)},l=function(){if(!(!e||b))if(m)e.pause(),m=!1,p();else{const i=e.play();i!==void 0?i.then(()=>{m=!0,p()}).catch(u=>{console.warn("Не удалось воспроизвести видео:",u),m=!1,p()}):(m=!0,p())}},h=function(){c&&(b=!0,e&&(e.style.display="none"),c.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
          </div>
        </div>
      `)};console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),o=document.getElementById("categories"),t=document.querySelector(".categories__content"),n=document.querySelector(".categories__video-play"),s=document.querySelector(".categories__video-mute"),r=document.querySelector(".categories__video-slider"),c=document.querySelector(".categories__video-container"),g=document.querySelector(".categories__video-time span:first-child"),d=document.querySelector(".categories__video-time span:last-child");if(!o)return console.error("Секция Categories не найдена в DOM"),{};if(t&&t.classList.add("animate-in"),!e)return console.error("Видео элемент не найден в DOM"),h(),{};let m=!1,w=!0,y=!1,b=!1;const f=i=>{if(isNaN(i)||i<0)return"0:00";const u=Math.floor(i/60),v=Math.floor(i%60);return`${u}:${v.toString().padStart(2,"0")}`};return e&&(e.muted=!0,e.loop=!0,e.playsInline=!0,e.style.display="block",e.style.visibility="visible",e.style.opacity="1",e.style.width="100%",e.style.borderRadius="24px",c&&(c.style.minHeight="200px"),e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),y=!0,r&&!isNaN(e.duration)&&(r.max=e.duration,d&&(d.textContent=f(e.duration)))}catch(i){console.error("Ошибка при обработке метаданных видео:",i)}}),e.addEventListener("timeupdate",()=>{try{r&&!isNaN(e.currentTime)&&(r.value=e.currentTime,g&&(g.textContent=f(e.currentTime)))}catch(i){console.error("Ошибка при обновлении времени видео:",i)}}),e.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),h()}),setTimeout(()=>{if(e&&!b){const i=e.play();i!==void 0&&i.then(()=>{console.log("Автовоспроизведение видео успешно"),m=!0,p()}).catch(u=>{console.warn("Не удалось автовоспроизвести видео:",u)})}},1e3)),n&&n.addEventListener("click",i=>{i.stopPropagation(),l()}),s&&s.addEventListener("click",i=>{i.stopPropagation(),e&&(w=!w,e.muted=w,a())}),r&&r.addEventListener("input",i=>{if(e)try{const u=parseFloat(i.target.value);isNaN(u)||(e.currentTime=u)}catch(u){console.error("Ошибка при изменении времени видео:",u)}}),c&&c.addEventListener("click",i=>{i.target.closest(".categories__video-controls")||l()}),p(),a(),o.classList.add("initialized"),{togglePlay:l,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}catch(e){console.error("Критическая ошибка в initCategories:",e);const o=document.getElementById("categories");return o&&(o.style.display="block"),{}}}function T(){const e=document.querySelectorAll(".accordion__item");if(e.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${e.length} вопросов`);const o=(n=null)=>{e.forEach(s=>{s!==n&&s.classList.contains("active")&&s.classList.remove("active")})};e.forEach(n=>{const s=n.querySelector(".accordion__header"),r=n.querySelector(".accordion__toggle"),c=n.querySelector(".accordion__content");if(!s||!r||!c){console.warn("FAQ аккордеон: структура элемента неполная",n);return}n===e[0]&&setTimeout(()=>{r.classList.add("pulse"),setTimeout(()=>{r.classList.remove("pulse")},1500)},1e3);const g=y=>{if(y.preventDefault(),y.stopPropagation(),r.classList.add("clicked"),setTimeout(()=>r.classList.remove("clicked"),300),n.classList.contains("active")){n.classList.remove("active");return}o(n),n.classList.add("active");const b=s.getBoundingClientRect();b.top>=10&&b.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+b.top-100,behavior:"smooth"})},100)};s.addEventListener("click",g),r.addEventListener("click",y=>{y.stopPropagation(),g(y)});const d=`faq-question-${Math.random().toString(36).substring(2,9)}`,m=`faq-answer-${Math.random().toString(36).substring(2,9)}`;s.setAttribute("id",d),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-controls",m),c.setAttribute("id",m),c.setAttribute("aria-labelledby",d),c.setAttribute("role","region"),c.setAttribute("hidden","true"),new MutationObserver(y=>{y.forEach(b=>{if(b.type==="attributes"&&b.attributeName==="class"){const f=n.classList.contains("active");s.setAttribute("aria-expanded",f?"true":"false"),f?c.removeAttribute("hidden"):setTimeout(()=>{n.classList.contains("active")||c.setAttribute("hidden","true")},500)}})}).observe(n,{attributes:!0})});const t=n=>{if(n.key==="Escape"){o();return}const s=document.activeElement.closest(".accordion__item");if(!s)return;const r=Array.from(e),c=r.indexOf(s);if(c===-1)return;let g;switch(n.key){case"ArrowDown":g=(c+1)%r.length;break;case"ArrowUp":g=(c-1+r.length)%r.length;break;case"Home":g=0;break;case"End":g=r.length-1;break;default:return}const d=r[g].querySelector(".accordion__header");d&&(d.focus(),n.preventDefault())};return document.addEventListener("keydown",t),console.log("FAQ аккордеон успешно инициализирован"),{openItem:n=>{n>=0&&n<e.length&&(o(e[n]),e[n].classList.add("active"))},closeAll:()=>o()}}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=T()}),window.initFaqAccordion=T);function be(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const r=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!r){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}r.id||(r.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",r)}console.log("Инициализация секции Articles с SEO-оптимизацией");const o=[{id:1,title:"R36S Retro Gaming",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],t=e.querySelector(".articles__grid");if(!t){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const r=document.createElement("meta");r.name="description",r.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(r)}if(!document.querySelector('meta[name="keywords"]')){const r=document.createElement("meta");r.name="keywords",r.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(r)}})(),o.forEach(r=>{const c=document.createElement("article");c.className="article",c.id=`article-${r.id}`,c.dataset.articleId=r.id,c.setAttribute("itemscope",""),c.setAttribute("itemtype","http://schema.org/Article");const g=document.createElement("h2");g.className="article__title",g.setAttribute("itemprop","headline"),g.innerHTML=r.title,c.appendChild(g);const d=document.createElement("div");d.className="article__content-wrapper",d.setAttribute("itemprop","articleBody"),r.sections.forEach((f,p)=>{const a=document.createElement("section");if(a.className="article__section",a.id=`section-${r.id}-${p}`,p!==0||f.subtitle!==r.title){const h=document.createElement("h3");h.className="article__subtitle",h.innerHTML=f.subtitle,a.appendChild(h)}const l=document.createElement("div");l.className="article__content",l.innerHTML=f.content,a.appendChild(l),d.appendChild(a)}),c.appendChild(d);const m=document.createElement("script");m.type="application/ld+json";const w={"@context":"https://schema.org","@type":"Article",headline:r.title,description:r.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};m.textContent=JSON.stringify(w),c.appendChild(m);const y=document.createElement("footer");y.className="article__footer";const b=document.createElement("a");b.href="https://www.aliexpress.com/item/1005007171465465.html",b.className="article__cta",b.textContent="Order R36S Now",b.setAttribute("itemprop","url"),b.setAttribute("title","Order R36S Gaming Console"),b.setAttribute("rel","nofollow"),b.setAttribute("target","_blank"),y.appendChild(b),c.appendChild(y),t.appendChild(c)}),(()=>{const r=document.createElement("h1");r.className="articles__heading",r.textContent="R36S Gaming Console - Official Information",e.querySelector(".articles__container").insertBefore(r,e.querySelector(".articles__grid"))})(),setTimeout(()=>{T()},500),setTimeout(()=>{console.log("Проверка наличия элементов аккордеона перед инициализацией:");const r=document.querySelectorAll(".accordion__item");console.log(`Найдено ${r.length} элементов аккордеона`),console.log("Первый элемент аккордеона:",r[0]),r.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",r[0].querySelector(".accordion__header")),console.log("- Кнопка:",r[0].querySelector(".accordion__toggle")),console.log("- Контент:",r[0].querySelector(".accordion__content"))),console.log("Вызываем initFaqAccordion...");const c=T();console.log("Результат инициализации:",c?"успешно":"ошибка")},1e3),console.log("Инициализация секции Articles завершена успешно")}function Se(){if(console.log("Инициализация переключателей яркости текста в блоках - НАЧАЛО"),window._themeToggleInitialized)return console.warn("Обнаружена повторная инициализация переключателей яркости. Пропускаем..."),window._themeToggleCleanup;window._themeToggleInitialized=!0;const e=document.getElementById("articles")||document.querySelector(".articles"),o=document.getElementById("official-website")||document.querySelector(".official-website"),t=document.getElementById("retro-gaming")||document.querySelector(".retro-gaming");if(!e&&!o&&!t){console.error("Секции для добавления переключателей яркости текста не найдены");return}const n=[];function s(d,m){if(!d)return;console.log(`Добавление переключателей в секцию ${d.id||d.className}`);const w=d.querySelectorAll(".article");console.log(`Найдено ${w.length} блоков для добавления переключателей в секции ${d.id||d.className}`),w.forEach((y,b)=>{const f=m!==void 0?m:b%3;if(y.querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label")){console.warn(`Блок #${b} уже содержит кнопку переключения. Пропускаем создание.`);return}const a=document.createElement("button");switch(a.setAttribute("type","button"),f){case 0:a.className="brightness-toggle",a.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const l=y.querySelector(".article__title");if(l){const u=document.createElement("div");u.className="article__title-container";const v=l.cloneNode(!0);u.appendChild(v),u.appendChild(a),l.parentNode.replaceChild(u,l)}else y.insertBefore(a,y.firstChild);break;case 1:a.className="brightness-toggle",a.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const h=y.querySelector(".article__title");if(h){const u=document.createElement("div");u.className="article__title-container";const v=h.cloneNode(!0);u.appendChild(v),u.appendChild(a),h.parentNode.replaceChild(u,h)}else y.insertBefore(a,y.firstChild);break;case 2:a.className="brightness-toggle-with-label",a.innerHTML=`
            <span class="brightness-toggle-label">Ярче</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const i=y.querySelector(".article__title");if(i){const u=document.createElement("div");u.className="article__title-container";const v=i.cloneNode(!0);u.appendChild(v),u.appendChild(a),i.parentNode.replaceChild(u,i)}else y.insertBefore(a,y.firstChild);break}n.push(a)})}e&&s(e);let r;if(t){const d=t.querySelectorAll(".article");if(d.length>0){const m=d[0].querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label");m&&(m.classList.contains("brightness-toggle-corner")?r=1:m.classList.contains("brightness-toggle-with-label")?r=2:r=0,console.log(`Обнаружен стиль кнопки в секции R36S Retro Gaming: ${r}`))}}o&&s(o,r!==void 0?r:1),console.log(`Создано ${n.length} кнопок переключения`),n.forEach(d=>{const m=d.cloneNode(!0);d.parentNode&&d.parentNode.replaceChild(m,d);const w=n.indexOf(d);w!==-1&&(n[w]=m)}),n.forEach(d=>{const m=d.closest(".article");if(!m){console.error("Не найден родительский блок .article для кнопки переключения");return}d.addEventListener("click",function(f){if(f.preventDefault(),f.stopPropagation(),console.log("Клик по кнопке переключения яркости"),console.log("Состояние до переключения:",m.classList.contains("bright-text")?"яркий":"обычный"),m.classList.toggle("bright-text"),d.classList.toggle("active"),console.log("Состояние после переключения:",m.classList.contains("bright-text")?"яркий":"обычный"),d.classList.contains("brightness-toggle-with-label")){const h=d.querySelector(".brightness-toggle-label");h&&(h.textContent=m.classList.contains("bright-text")?"Тусклее":"Ярче",console.log("Изменен текст лейбла на:",h.textContent))}const p=m.getAttribute("data-article-id")||m.id||Array.from(m.closest("section").querySelectorAll(".article")).indexOf(m),a=m.closest("section")?m.closest("section").id||m.closest("section").className.split(" ")[0]:"unknown",l=m.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-${a}-article-brightness-${p}`,l),console.log(`Яркость текста в блоке ${p} секции ${a} изменена на: ${l}`)});const w=m.getAttribute("data-article-id")||m.id||Array.from(m.closest("section").querySelectorAll(".article")).indexOf(m),y=m.closest("section")?m.closest("section").id||m.closest("section").className.split(" ")[0]:"unknown";if(localStorage.getItem(`r36s-${y}-article-brightness-${w}`)==="bright"){if(m.classList.add("bright-text"),d.classList.add("active"),d.classList.contains("brightness-toggle-with-label")){const f=d.querySelector(".brightness-toggle-label");f&&(f.textContent="Тусклее")}console.log(`Восстановлено состояние для блока ${w} в секции ${y}: яркий`)}else console.log(`Блок ${w} в секции ${y} в обычном режиме`)});const c=document.createElement("style");c.textContent=`
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
      margin: 0; /* Добавляем сброс margin для всех кнопок */
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
      transition: all 0.25s ease;
    }
    
    /* Не используем stroke: currentColor, вместо этого в SVG задаём цвет напрямую */
    
    .brightness-toggle.active {
      background: rgba(59, 130, 246, 0.3);
      border-color: rgba(96, 165, 250, 0.4);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
                  0 3px 8px rgba(59, 130, 246, 0.25);
    }
    
    .brightness-toggle.active .brightness-toggle__icon {
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
    
    /* Задаем позиционирование для родительского элемента */
    .article {
      position: relative;
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
      margin: 0; /* Устанавливаем единообразные отступы */
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
  `,document.head.appendChild(c);const g=function(){n.forEach(d=>{if(d&&d.parentNode){const m=d.closest(".article__title-container");if(m){const w=m.querySelector(".article__title");w&&m.parentNode&&m.parentNode.replaceChild(w,m)}else d.parentNode.removeChild(d)}}),c&&c.parentNode&&c.parentNode.removeChild(c),window._themeToggleInitialized=!1,console.log("Очистка переключателей яркости выполнена")};return window._themeToggleCleanup=g,console.log("Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА"),g}const G={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function A(e,o=24){return G[e]?G[e].replace(/width="24"/,`width="${o}"`).replace(/height="24"/,`height="${o}"`):(console.error(`Icon "${e}" not found`),"")}function xe(){document.querySelectorAll("[data-icon]").forEach(o=>{const t=o.getAttribute("data-icon"),n=parseInt(o.getAttribute("data-size")||"24",10);t&&(o.innerHTML=A(t,n))})}function _e(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),o=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("phone"),s=document.getElementById("message"),r=document.querySelector(".form__button"),c=document.createElement("div");c.className="form__error",c.style.display="none",c.innerHTML=`
    <div class="form__error-icon">${A("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(c,e.firstChild);const g={name:"",email:"",phone:"",message:""};function d(f){c.querySelector("span").textContent=f,c.style.display="flex"}function m(){c.style.display="none"}function w(f){const{name:p,value:a}=f.target;g[p]=a,m()}o.addEventListener("input",w),t.addEventListener("input",w),n.addEventListener("input",w),s.addEventListener("input",w);async function y(f){f.preventDefault(),b(!0);try{if(!g.name||!g.email||!g.phone||!g.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(g.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(h=>setTimeout(h,1e3)),o.value="",t.value="",n.value="",s.value="",Object.keys(g).forEach(h=>{g[h]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(a){d(a.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",a)}finally{b(!1)}}function b(f){[o,t,n,s].forEach(a=>{a.disabled=f}),r.disabled=f,r.innerHTML=f?`<span class="button__icon">${A("loader",20)}</span> Sending...`:`<span class="button__icon">${A("send",20)}</span> Send message`}return e.addEventListener("submit",y),function(){o.removeEventListener("input",w),t.removeEventListener("input",w),n.removeEventListener("input",w),s.removeEventListener("input",w),e.removeEventListener("submit",y)}}function Ee(){const e="/R36S_STORE_JS/",t={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},n=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:t.review1.webp,jpeg:t.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:t.review4.webp,jpeg:t.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:t.review3.webp,jpeg:t.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:t.review2.webp,jpeg:t.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],s=new Set;let r=null,c=window.innerWidth<=1200;function g(i=!1){const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("review-card__star"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill",i?"currentColor":"none"),u.setAttribute("stroke","currentColor"),u.setAttribute("stroke-width","2");const v=document.createElementNS("http://www.w3.org/2000/svg","polygon");return v.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),u.appendChild(v),u}function d(){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("review-card__verified"),i.setAttribute("width","16"),i.setAttribute("height","16"),i.setAttribute("viewBox","0 0 24 24"),i.setAttribute("fill","none"),i.setAttribute("stroke","currentColor"),i.setAttribute("stroke-width","2");const u=document.createElementNS("http://www.w3.org/2000/svg","path");return u.setAttribute("d","M20 6L9 17l-5-5"),i.appendChild(u),i}function m(i){const u=document.getElementById("reviewCardTemplate");if(!u)return console.error("Шаблон карточки отзыва не найден"),null;const v=u.content.cloneNode(!0).querySelector(".review-card");v.dataset.id=i.id,i.mobileOnly&&(v.classList.add("mobile-only"),c||(v.style.display="none"));const x=v.querySelector(".review-card__rating");for(let R=0;R<5;R++)x.appendChild(g(R<i.rating));v.querySelector(".review-card__variant").textContent=i.color,v.querySelector(".review-card__text").textContent=i.text;const E=v.querySelector("picture");E.querySelector("source").setAttribute("srcset",i.images.webp);const S=E.querySelector("img");S.setAttribute("src",i.images.jpeg),S.setAttribute("alt",`Review ${i.id}`);const _=v.querySelector(".review-card__name");i.verified&&_.prepend(d()),_.appendChild(document.createTextNode(i.author)),v.querySelector(".review-card__date").textContent=i.date,v.querySelector(".review-card__helpful-count").textContent=`Helpful (${i.helpful})`,v.addEventListener("click",w),v.addEventListener("mouseenter",()=>y(i.id)),v.addEventListener("mouseleave",b);const C=v.querySelector(".review-card__helpful");return C.addEventListener("mouseenter",()=>{C.querySelector("svg").setAttribute("fill","currentColor"),C.querySelector("svg").classList.add("scale-125"),C.querySelector("svg").classList.remove("scale-100")}),C.addEventListener("mouseleave",()=>{C.querySelector("svg").setAttribute("fill","none"),C.querySelector("svg").classList.remove("scale-125"),C.querySelector("svg").classList.add("scale-100")}),v}function w(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function y(i){r=i;const u=document.querySelector(`.review-card[data-id="${i}"]`);if(u){const v=u.querySelector(".review-card__arrow-wrapper");v&&(v.style.display="flex")}}function b(){const i=document.querySelector(`.review-card[data-id="${r}"]`);if(i){const u=i.querySelector(".review-card__arrow-wrapper");u&&(u.style.display="none")}r=null}function f(){const i=document.getElementById("reviewsGrid");if(!i){console.error("Контейнер для отзывов не найден");return}const u=document.getElementById("reviewCardTemplate"),v={};i.querySelectorAll(".review-card").forEach(S=>{S.dataset.id&&(v[S.dataset.id]=S)});const x=n.filter(S=>!S.mobileOnly||S.mobileOnly&&c),E=[];x.forEach(S=>{if(v[S.id]){const _=v[S.id];_.style.display="block",E.push(_),delete v[S.id]}else{const _=m(S);_&&E.push(_)}}),Object.values(v).forEach(S=>{S!==u&&(S.style.display="none")}),i.innerHTML="",i.appendChild(u),E.forEach(S=>{i.appendChild(S)}),p()}function p(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(u=>{u.classList.add("animate-in")});return}const i=new IntersectionObserver(u=>{u.forEach(v=>{if(v.isIntersecting){const x=v.target.dataset.id;s.has(x)||(v.target.classList.add("animate-in"),s.add(x))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(u=>{i.observe(u)})}function a(){c=window.innerWidth<=1200,f(),document.querySelectorAll(".review-card").forEach(u=>{u.classList.contains("mobile-only")&&(u.style.display=c?"block":"none")})}function l(){f();let i;const u=()=>{clearTimeout(i),i=setTimeout(a,250)};window.addEventListener("resize",u);const v=document.createElement("style");v.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(v),setTimeout(a,100);const x=document.getElementById("reviews");if(x&&!x.hasAttribute("itemscope")){x.setAttribute("itemscope",""),x.setAttribute("itemtype","http://schema.org/Product");const E=document.createElement("meta");E.setAttribute("itemprop","name"),E.setAttribute("content","R36S Handheld Game Console"),x.prepend(E);const S=document.createElement("meta");S.setAttribute("itemprop","description"),S.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),x.prepend(S)}}l();function h(){if(window.removeEventListener("resize",a),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const i=[];new IntersectionObserver(()=>{}).disconnect(),i.forEach(v=>v.disconnect())}document.querySelectorAll(".review-card").forEach(i=>{i.removeEventListener("click",w),i.removeEventListener("mouseenter",()=>{}),i.removeEventListener("mouseleave",b),Object.keys(n).forEach(v=>{i.removeEventListener("mouseenter",()=>y(v))});const u=i.querySelector(".review-card__helpful");u&&(u.removeEventListener("mouseenter",()=>{}),u.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:h,renderReviewCards:f}}const ke={};function Le(){console.log("Products секция инициализирована");const o=!ke?"/":"/R36S_STORE_JS/",t={i0_0:{jpg:`${o}img/products/i_0_0x.jpg`,webp:`${o}img/products/i_0_0x.webp`},i1:{jpg:`${o}img/products/i_1_1x.jpg`,webp:`${o}img/products/i_1_1x.webp`},i2:{jpg:`${o}img/products/i_2_1x.jpg`,webp:`${o}img/products/i_2_1x.webp`},i3:{jpg:`${o}img/products/i_3_1x.jpg`,webp:`${o}img/products/i_3_1x.webp`},i4:{jpg:`${o}img/products/i_4_1x.jpg`,webp:`${o}img/products/i_4_1x.webp`},i5:{jpg:`${o}img/products/i_5_1x.jpg`,webp:`${o}img/products/i_5_1x.webp`},i6:{jpg:`${o}img/products/i_6_1x.jpg`,webp:`${o}img/products/i_6_1x.webp`},i7:{jpg:`${o}img/products/i_7_1x.jpg`,webp:`${o}img/products/i_7_1x.webp`},i8:{jpg:`${o}img/products/i_8_1x.jpg`,webp:`${o}img/products/i_8_1x.webp`},i9:{jpg:`${o}img/products/i_9_1x.jpg`,webp:`${o}img/products/i_9_1x.webp`}},n=[{id:"getting-started",title:"Start Guide",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,images:{jpg:t.i0_0.jpg,webp:t.i0_0.webp}}},{id:"original-backup",title:"Backup Original",content:{text:"This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.",subsections:[{id:"backup-procedure",title:"Backup Using Win32DiskImager",content:{text:`1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,images:{jpg:t.i1.jpg,webp:t.i1.webp}}}]}},{id:"custom-installation",title:"Install Custom",content:{text:`As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,subsections:[{id:"method-balena",title:"Option 1: Balena Etcher Method",content:{text:`While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,images:{jpg:t.i2.jpg,webp:t.i2.webp}}},{id:"method-win32",title:"Option 2: Win32DiskImager Method",content:{text:`1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,images:{jpg:t.i3.jpg,webp:t.i3.webp}}},{id:"method-raspberry",title:"Option 3: Raspberry Pi Imager",content:{text:`1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,images:{jpg:t.i4.jpg,webp:t.i4.webp}}}]}},{id:"firmware-options",title:"Firmware Options",content:{text:"Several custom firmware options are available for the R36S. Here are the most popular choices:",subsections:[{id:"option-arkos",title:"ArkOS - Community Enhanced Edition",content:{text:`GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,images:{jpg:t.i5.jpg,webp:t.i5.webp}}},{id:"option-rocknix",title:"ROCKNIX Operating System",content:{text:`GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,images:{jpg:t.i6.jpg,webp:t.i6.webp}}},{id:"option-amber",title:"AmberELEC System",content:{text:`GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,images:{jpg:t.i7.jpg,webp:t.i7.webp}}}]}},{id:"game-setup",title:"Add Files",content:{text:`1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,images:{jpg:t.i8.jpg,webp:t.i8.webp}}},{id:"helpful-tips",title:"Usage Tips",content:{text:`• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,images:{jpg:t.i9.jpg,webp:t.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let s="downloads",r=!1;const c=document.getElementById("products-nav-list"),g=document.getElementById("products-sections"),d=document.getElementById("products-nav");function m(){r=window.innerWidth<=1024,d&&(r?d.classList.add("nav-mobile"):d.classList.remove("nav-mobile"))}function w(a){s=a,document.querySelectorAll(".nav-item").forEach(i=>{i.dataset.sectionId===a?i.classList.add("nav-item-active"):i.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(i=>{i.id===a?i.classList.add("section-active"):i.classList.remove("section-active")}),setTimeout(()=>{const i=document.getElementById(a);if(i){const u=r?80:20,x=i.getBoundingClientRect().top+window.pageYOffset-u;window.scrollTo({top:x,behavior:"smooth"})}},100)}function y(){c.innerHTML="",n.forEach(a=>{const l=document.createElement("button");l.className=`nav-item ${s===a.id?"nav-item-active":""}`,l.dataset.sectionId=a.id,l.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${a.title}</span>
      `,l.addEventListener("click",()=>w(a.id)),c.appendChild(l)})}function b(a){if(a.id==="downloads"){let i='<div class="download-list">';return a.content.downloads.forEach(u=>{i+=`
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
        `}),i+="</div>",i}let l='<div class="section-content"><div class="text-content">';return a.content.text.split(`
`).forEach(i=>{l+=`<p>${i.trim()}</p>`}),l+="</div>",a.content.images&&(l+=`
        <div class="image-container">
          <picture>
            <source srcset="${a.content.images.webp}" type="image/webp">
            <img src="${a.content.images.jpg}" alt="${a.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),a.content.subsections&&(l+='<div class="subsections">',a.content.subsections.forEach(i=>{l+=`
          <div class="subsection">
            <h3 class="subsection-title">${i.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,i.content.text.split(`
`).forEach(v=>{l+=`<p>${v.trim()}</p>`}),l+="</div>",i.content.images&&(l+=`
            <div class="image-container">
              <picture>
                <source srcset="${i.content.images.webp}" type="image/webp">
                <img src="${i.content.images.jpg}" alt="${i.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),l+="</div></div>"}),l+="</div>"),l+="</div>",l}function f(){g.innerHTML="",n.forEach(a=>{const l=document.createElement("section");l.id=a.id,l.className=`section ${s===a.id?"section-active":""}`,l.innerHTML=`
        <h2 class="section-title">${a.title}</h2>
        ${b(a)}
      `,g.appendChild(l)})}function p(){m(),y(),f(),window.addEventListener("resize",m),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return c&&g&&d?p():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:w,checkMobile:m}}function Ce(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const o=e.querySelector(".partnership-button");o&&o.addEventListener("click",()=>{const t=document.querySelector(".partnership-modal-overlay");if(t){t.classList.add("active");const n=t.querySelector(".partnership-modal-content");n&&n.classList.add("active"),document.body.style.overflow="hidden"}}),Re()}function Re(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const o=e.querySelector(".partnership-modal-close");o&&o.addEventListener("click",t),e.addEventListener("click",n=>{n.target===e&&t()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.contains("active")&&t()});function t(){const n=e.querySelector(".partnership-modal-content");e.classList.remove("active"),n&&n.classList.remove("active"),document.body.style.overflow=""}}console.log("Main.js инициализирован");let k=[];function Ie(){const e="IntersectionObserver"in window,o=function(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}(),t=function(){const n=document.createElement("div");return n.style.display="grid",n.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",o),console.log("- CSS Grid:",t),e||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),t||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:o,hasGrid:t}}function Ae(){try{k.forEach(e=>{typeof e=="function"&&e()}),k=[]}catch(e){console.warn("Error during global cleanup:",e)}}async function Be(){try{const e=z(B);console.log("Language from URL:",e),await re({forcedLanguage:e}),se()}catch(e){console.error("Error initializing i18n:",e)}}document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM загружен");try{await Be();const e=ae();typeof e=="function"&&k.push(e);const o=le();typeof o=="function"&&k.push(o),xe();const t=Ie(),n=ce();typeof n=="function"&&k.push(n);const s=fe();typeof s=="function"&&k.push(s);const r=we();typeof r=="function"&&k.push(r);const c=ye();typeof c=="function"&&k.push(c);const g=be();typeof g=="function"&&k.push(g);const d=Se();typeof d=="function"&&k.push(d);const m=_e();typeof m=="function"&&k.push(m);const w=Ee();typeof w=="function"&&k.push(w);const y=Le();typeof y=="function"&&k.push(y);const b=Ce();typeof b=="function"&&k.push(b);const f=Q();typeof f=="function"&&k.push(f);const p=performance.now();console.log(`Страница загружена за ${p.toFixed(2)}ms`),window.addEventListener("beforeunload",Ae)}catch(e){console.error("Ошибка при инициализации страницы:",e)}});window.onerror=function(e,o,t,n,s){return console.error("Глобальная ошибка:",{message:e,source:o,lineno:t,colno:n,error:s}),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",e.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
