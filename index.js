import{i as k}from"./assets/vendor-C77IuWVK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ie(){console.log("Инициализация кнопки прокрутки вверх и селектора языка");const e={en:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
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
        </svg>`},t=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],n={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},r=document.createElement("div");r.className="corner-buttons-container";const a=document.createElement("div");a.className="language-selector",a.id="corner-language-selector";const i=document.createElement("button");i.className="language-button",i.setAttribute("aria-label","Выбрать язык");const l=document.createElement("div");l.className="language-button__flag",l.id="current-language-flag";const g=document.createElement("div");g.className="language-dropdown",g.id="language-dropdown";const u=document.createElement("button");u.className="scroll-to-top",u.setAttribute("aria-label","Прокрутить вверх страницы"),u.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `,i.appendChild(l),a.appendChild(i),a.appendChild(g),r.appendChild(a),r.appendChild(u),document.body.appendChild(r),S();function m(y,E){let p;return function(){const w=arguments,d=this;p||(y.apply(d,w),p=!0,setTimeout(()=>p=!1,E))}}const v=m(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?u.classList.add("visible"):u.classList.remove("visible")},100);function b(y){y.preventDefault(),u.classList.add("active"),setTimeout(()=>{u.classList.remove("active")},200),window.scrollTo({top:0,behavior:"smooth"})}function S(){try{let p=function(d){try{if(!document.body.contains(l)){console.warn("Current language flag element removed from DOM");return}l.innerHTML=e[d]||""}catch(o){console.error("Error updating language button appearance:",o)}},w=function(){try{if(!document.body.contains(g)){console.warn("Language dropdown removed from DOM");return}g.innerHTML="",t.forEach(d=>{const o=document.createElement("div");o.className=`language-dropdown__item ${d===E?"active":""}`,o.dataset.lang=d;const c=document.createElement("div");c.className="language-dropdown__flag",c.innerHTML=e[d]||"";const s=document.createElement("div");s.className="language-dropdown__name",s.textContent=n[d]||d,o.appendChild(c),o.appendChild(s),g.appendChild(o),o.addEventListener("click",f=>{try{if(!document.body.contains(y)){console.warn("Original language selector removed from DOM");return}if(!document.body.contains(g)){console.warn("Language dropdown removed from DOM");return}y.value=d;try{const x=new Event("change");y.dispatchEvent(x)}catch(x){console.error("Error dispatching change event:",x),typeof y.onchange=="function"&&y.onchange()}a.classList.remove("active"),document.querySelectorAll(".language-dropdown__item").forEach(x=>{x.classList.toggle("active",x.dataset.lang===d)}),p(d)}catch(x){console.error("Error handling language item click:",x)}})})}catch(d){console.error("Error creating language dropdown items:",d)}},y=document.getElementById("language-selector");y||(y=document.createElement("select"),y.id="language-selector",y.style.display="none",document.body.appendChild(y),t.forEach(d=>{const o=document.createElement("option");o.value=d,o.textContent=n[d]||d,y.appendChild(o)}));const E=localStorage.getItem("userLanguage")||"en";y&&(y.value=E),p(E),w(),i.addEventListener("click",function(d){try{if(d.preventDefault(),d.stopPropagation(),!document.body.contains(a)){console.warn("Language selector container removed from DOM");return}a.classList.toggle("active")}catch(o){console.error("Error handling language button click:",o)}}),document.addEventListener("click",d=>{try{if(!document.body.contains(a))return;a.contains(d.target)||a.classList.remove("active")}catch(o){console.error("Error handling document click:",o)}}),window.addEventListener("languageChanged",d=>{try{if(!document.body.contains(g)||!document.body.contains(l)){console.warn("Language elements removed from DOM, skipping update");return}d.detail&&d.detail.language&&(p(d.detail.language),document.querySelectorAll(".language-dropdown__item").forEach(o=>{o.classList.toggle("active",o.dataset.lang===d.detail.language)}))}catch(o){console.error("Error handling language change event:",o)}})}catch(y){console.error("Ошибка при инициализации селектора языка:",y)}}return window.addEventListener("scroll",v,{passive:!0}),u.addEventListener("click",b),v(),function(){console.log("Очистка кнопки прокрутки вверх и селектора языка"),window.removeEventListener("scroll",v),u.removeEventListener("click",b),i.removeEventListener("click",()=>{}),document.querySelectorAll(".language-dropdown__item").forEach(E=>{E.removeEventListener("click",()=>{})}),r&&r.parentNode&&r.parentNode.removeChild(r)}}function ae(e,t){try{const n=sessionStorage.getItem("detectedBrowserLanguage");if(n&&e.includes(n))return console.log("Using cached browser language detection:",n),n;if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array, using default language"),t;console.log("Detecting user language with:",{supportedLanguages:e,defaultLanguage:t});const r=g=>{if(!g)return!1;const u=g.split("-")[0].toLowerCase();return e.includes(u)?u:null},a=localStorage.getItem("userLanguage");console.log("Saved language in localStorage:",a);const i=a&&a.trim()!==""&&r(a);if(i)return console.log("Using saved language preference:",i),i;let l=[];navigator.languages&&navigator.languages.length?l=[...navigator.languages]:navigator.language?l=[navigator.language]:navigator.userLanguage?l=[navigator.userLanguage]:navigator.browserLanguage?l=[navigator.browserLanguage]:navigator.systemLanguage&&(l=[navigator.systemLanguage]),console.log("Browser language preferences:",l);for(const g of l){const u=r(g);if(u)return console.log("Found supported browser language:",u),sessionStorage.setItem("detectedBrowserLanguage",u),u}return console.log("No matching language found, using default:",t),t}catch(n){return console.error("Error in detectUserLanguage:",n),console.error("Stack trace:",n.stack),t}}function K(e){try{if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array passed to getLanguageFromURL"),null;const t=window.location.pathname,n="/R36S_CONSOLE_STORE_JS/";if(console.log("Current path for language detection:",t),console.log("Base URL for language detection:",n),!t||t==="/")return console.log("Empty path, no language prefix"),null;let r=t;n!=="/"&&t.startsWith(n)&&(r=t.substring(n.length)||"/"),console.log("Path without base for language detection:",r);const a=r.split("/").filter(i=>i.trim()!=="");if(console.log("Path parts for language detection:",a),a.length>0){const i=a[0].toLowerCase();if(e.includes(i))return console.log(`Found language in URL: ${i}`),i}return null}catch(t){return console.error("Error getting language from URL:",t),null}}function Y(e){try{if(!e){console.warn("No language provided to updateLanguageURL");return}if(typeof e!="string"||e.trim()===""){console.warn("Invalid language value provided to updateLanguageURL");return}if(K(["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"])===e){console.log("URL already has the correct language prefix, no update needed");return}console.log("Current localStorage userLanguage before URL update:",localStorage.getItem("userLanguage")),console.log("Before language URL update, current URL:",window.location.href),console.log("Updating URL for language:",e);try{if(e==="en"){const g="/R36S_CONSOLE_STORE_JS/";console.log(`Updating URL to base URL for English: ${g}`),window.history.pushState({},"",g);return}const r=new URL(window.location.href).pathname;if(r.includes(".")&&!r.endsWith("index.html")){console.log("Skipping URL update for resource file");return}const a="/R36S_CONSOLE_STORE_JS/";let l=`${a.endsWith("/")?a:a+"/"}${e}/`;if(console.log("New path with language:",l),l===r){console.log("No URL change needed, paths are identical");return}window.history.pushState({},"",l),console.log("URL updated successfully")}catch(n){console.error("Error updating URL with language:",n)}}catch(t){console.error("Error updating URL with language:",t)}}const I={},T=e=>{try{const n=`${k.language}_${e}`;if(I[n])return I[n];let r=k.t(`hero.pricing.${e}`,{defaultValue:null});return r||(e==="current"?r="$35.48 US":e==="original"?r="US $108.06":e==="discount"&&(r="-68%")),I[n]=r,r}catch(t){return console.error("Error in getLocalizedPrice:",t),""}},z=()=>{for(const e in I)delete I[e]},q={},F=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],se={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},D=["about","features","header","hero","mobilemenu"],le=(e,t)=>`/R36S_CONSOLE_STORE_JS/locales/${e}/${t}.json`,ce=async(e,t)=>{const n=`${e}_${t}`;if(q[n])return q[n];const r=2,a=async(i,l,g)=>{if(g>=r)return console.error(`Превышено максимальное количество попыток загрузки ${i}/${l}`),{};try{const u=le(i,l);console.log(`Загрузка перевода: ${u}`);const m=new AbortController,v=setTimeout(()=>m.abort(),5e3),b=await fetch(u,{cache:"no-store",headers:{"Cache-Control":"no-cache"},signal:m.signal});if(clearTimeout(v),!b.ok)return console.warn(`Не удалось загрузить перевод ${i}/${l}: ${b.status}`),i!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l}`),a("en",l,g+1)):{};const S=await b.json();if(!S||typeof S!="object")throw new Error(`Invalid translation data format for ${i}/${l}`);return q[n]=S,S}catch(u){return u.name==="AbortError"?console.error(`Таймаут загрузки ${i}/${l} переводов`):console.error(`Ошибка загрузки ${i}/${l} переводов:`,u),i!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l} после ошибки`),a("en",l,g+1)):{}}};return a(e,t,0)},N=async e=>{try{let t=0,n=0;const r=await Promise.allSettled(D.map(i=>ce(e,i))),a={};return r.forEach((i,l)=>{if(i.status==="fulfilled"){const g=i.value,u=D[l];g&&Object.keys(g).length>0?(a[u]=g,t++):(console.warn(`Получен пустой или недействительный перевод для секции: ${u}`),n++)}else console.warn(`Не удалось загрузить секцию: ${D[l]}, ошибка:`,i.reason),n++}),console.log(`Загрузка переводов для ${e}: успешно ${t}, не удалось ${n}`),a}catch(t){return console.error(`Ошибка загрузки переводов для ${e}:`,t),{}}},B=()=>{try{const e=document.querySelectorAll("[data-i18n]");if(console.log(`Обновление ${e.length} текстовых элементов`),e.length===0){console.log("Не найдено элементов с атрибутом data-i18n");return}e.forEach(t=>{try{const n=t.getAttribute("data-i18n");if(!n)return;if(n.startsWith("[")){const r=n.match(/^\[(.*)\](.*)$/);if(r){const[,a,i]=r,l=k.t(i);l&&l!==i&&t.setAttribute(a,l)}}else{const r=k.t(n);r&&r!==n?t.hasAttribute("content")?t.setAttribute("content",r):(!t.dataset.originalText&&k.language!=="en"&&(t.dataset.originalText=t.textContent),t.textContent=r):t.dataset.originalText&&k.language==="en"&&(t.textContent=t.dataset.originalText)}}catch(n){console.warn("Ошибка при обновлении элемента:",n,t)}})}catch(e){console.error("Ошибка обновления текстовых элементов:",e)}},M=()=>{try{const t=["ar"].includes(k.language)?"rtl":"ltr";document.documentElement.dir=t,document.documentElement.setAttribute("lang",k.language),t==="rtl"?document.documentElement.classList.add("rtl"):document.documentElement.classList.remove("rtl"),[".header",".footer",".mobile-menu",".hero",".features",".about",".contact","main"].forEach(r=>{const a=document.querySelector(r);a&&(t==="rtl"?a.classList.add("rtl"):a.classList.remove("rtl"))})}catch(e){console.error("Ошибка обновления поддержки RTL:",e)}},P=async()=>{try{const e=[];e.push((async()=>{try{B()}catch(t){console.error("Failed to update text elements:",t)}})()),e.push((async()=>{try{M()}catch(t){console.error("Failed to update RTL support:",t)}})()),await Promise.allSettled(e);try{window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:k.language}}))}catch(t){console.error("Error dispatching languageChanged event:",t)}console.log("Content update completed for language:",k.language)}catch(e){throw console.error("Error in updateAllContent:",e),e}};async function de(e={}){try{console.log("Setting up i18n with options:",e),console.log("Current localStorage userLanguage:",localStorage.getItem("userLanguage")),console.log("Current BASE_URL:","/R36S_CONSOLE_STORE_JS/");const{forcedLanguage:t}=e,n=localStorage.getItem("userLanguage"),r=n&&F.includes(n),a=t||(r?n:null)||ae(F,"en");console.log("Selected user language:",a);let i={};try{i=await N(a),console.log(`Загруженные переводы для ${a}:`,i)}catch(m){console.error(`Ошибка загрузки переводов для ${a}:`,m)}let l=null;if(a!=="en")try{l=await N("en")}catch(m){console.error("Ошибка загрузки запасных переводов:",m)}const g={[a]:{translation:i}};l&&(g.en={translation:l}),await k.init({lng:a,fallbackLng:"en",resources:g,interpolation:{escapeValue:!1},debug:!1,load:"languageOnly",returnNull:!1,returnEmptyString:!1,saveMissing:!1,keySeparator:".",nsSeparator:":",missingKeyHandler:(m,v,b,S)=>{console.warn(`Отсутствует ключ перевода: ${b} для языка ${m} в пространстве ${v}. Используется HTML-текст.`)},parseMissingKeyHandler:m=>null}),localStorage.setItem("userLanguage",a);const u=async m=>{try{console.log("Language changed to:",m),localStorage.setItem("userLanguage",m),Y(m),typeof z=="function"&&z(),await P()}catch(v){console.error("Error in language change handler:",v);try{B(),M()}catch(b){console.error("Failed to update basic content:",b)}}};k.on("languageChanged",u),window.updateContent=async()=>{try{await P()}catch(m){console.error("Error in window.updateContent:",m);try{B(),M()}catch(v){console.error("Failed to recover content update:",v)}}};try{await P()}catch(m){console.error("Error in initial content update:",m);try{B(),M()}catch(v){console.error("Failed to perform basic content update:",v)}}return k}catch(t){console.error("Fatal error in setupI18n:",t);try{k.isInitialized||await k.init({lng:"en",resources:{},interpolation:{escapeValue:!1}})}catch(n){console.error("Failed to create fallback i18next instance:",n)}return k}}function ue(){const e=document.getElementById("language-selector");if(e)try{if(e.childElementCount===0){const n=document.createDocumentFragment();F.forEach(r=>{const a=document.createElement("option");a.value=r,a.textContent=se[r]||r,n.appendChild(a)}),e.appendChild(n)}e.value=k.language;let t=null;e.addEventListener("change",async function(n){n.preventDefault();try{t&&t.abort(),t=new AbortController;const r=t.signal,a=n.target.value;if(console.log(`Language selector changed to: ${a}`),!document.contains(e)){console.log("Language selector no longer in DOM, aborting");return}if(!k.hasResourceBundle(a,"translation"))try{const i=await N(a);if(r.aborted||!document.contains(e)){console.log("Operation aborted or language selector no longer in DOM after loading translations");return}k.addResourceBundle(a,"translation",i,!0,!0)}catch(i){console.error("Error loading translations:",i)}localStorage.setItem("userLanguage",a),await k.changeLanguage(a),document.contains(e)&&!r.aborted&&(Y(a),typeof window.updateContent=="function"&&window.updateContent())}catch(r){console.error("Error changing language:",r),document.contains(e)&&(e.value=k.language)}finally{t=null}})}catch(t){console.error("Error setting up language selector:",t)}}function ge(){let e=!1,t=window.scrollY,n=null;const r=document.querySelector(".header"),a=document.querySelector(".burger-btn"),i=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),g=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function u(){const w=window.scrollY,d=t<w;n&&clearTimeout(n),w>100?S(!d):S(!0),t=w,b(w>0),n=setTimeout(()=>{},150)}function m(){e=!e,v()}function v(){e?(r.classList.add("menu-open"),a.setAttribute("aria-expanded","true"),i.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(r.classList.remove("menu-open"),a.setAttribute("aria-expanded","false"),i.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function b(w){w?r.classList.add("scrolled"):r.classList.remove("scrolled")}function S(w){w?(r.classList.add("visible"),r.classList.remove("hidden")):(r.classList.add("hidden"),r.classList.remove("visible"))}function y(w){w.preventDefault();const d=w.currentTarget.getAttribute("href"),o=d.replace("#",""),c=document.getElementById(o);c&&(S(!0),setTimeout(()=>{r.offsetHeight;const f=c.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:f,behavior:"smooth"}),e&&(e=!1,v()),window.history.replaceState(null,"",`${window.location.pathname}${d}`),setTimeout(()=>{t=window.scrollY},100)},50))}function E(){if(window.location.hash){const w=window.location.hash.replace("#",""),d=document.getElementById(w);d&&setTimeout(()=>{const o=r.offsetHeight,s=d.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:s,behavior:"smooth"})},100)}}function p(w){var d;try{const o=document.querySelector(".header");if(!o){console.log("Header no longer in DOM, skipping language change handling");return}const c=["ar"],s=((d=w==null?void 0:w.detail)==null?void 0:d.language)||k.language;c.includes(s)?o.classList.add("rtl"):o.classList.remove("rtl"),console.log("Language changed in header to:",s),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(h=>{o.classList.remove(`lang-${h}`)}),o.classList.add(`lang-${s}`);const x=o.querySelector("[aria-label]");if(x){const h=k.t("header.aria-label.navigation");h&&h!=="header.aria-label.navigation"&&x.setAttribute("aria-label",h)}}catch(o){console.error("Error handling language change in header:",o)}}return window.addEventListener("scroll",u),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,v())}),window.addEventListener("languageChanged",p),a&&a.addEventListener("click",m),g.forEach(w=>{w.addEventListener("click",y)}),E(),p(),function(){window.removeEventListener("scroll",u),window.removeEventListener("languageChanged",p),window.removeEventListener("resize",()=>{}),a&&a.removeEventListener("click",m),g.forEach(d=>{d.removeEventListener("click",y)})}}function me(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const t=e.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{n()});function n(){e.classList.remove("open");const g=document.querySelector(".burger-line");g&&g.classList.remove("open"),document.body.style.overflow="unset";const u=document.querySelector(".header");u&&u.classList.remove("menu-open");const m=document.querySelector(".burger-btn");m&&m.setAttribute("aria-expanded","false")}const r=e.querySelectorAll(".mobile-menu__link");r.forEach(g=>{g.addEventListener("click",()=>{setTimeout(()=>{n()},150)})});const a=e.querySelector(".mobile-menu__background");a&&a.addEventListener("click",()=>{n()});function i(){e.querySelectorAll(".mobile-menu__icon").forEach((u,m)=>{u.style.opacity="0",u.style.transform="translateX(-20px)",new MutationObserver(b=>{b.forEach(S=>{S.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{u.style.transition="all 0.4s ease",u.style.opacity="1",u.style.transform="translateX(0)"},100+m*70):(u.style.opacity="0",u.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}function l(g){var u;try{const m=document.querySelector(".mobile-menu");if(!m){console.log("Mobile menu no longer in DOM, skipping language change handling");return}const v=["ar"],b=((u=g==null?void 0:g.detail)==null?void 0:u.language)||k.language;v.includes(b)?(m.classList.add("rtl"),m.querySelectorAll(".mobile-menu__item").forEach(p=>{p.classList.add("rtl")})):(m.classList.remove("rtl"),m.querySelectorAll(".mobile-menu__item").forEach(p=>{p.classList.remove("rtl")})),console.log("Language changed in mobile menu to:",b),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(E=>{m.classList.remove(`lang-${E}`)}),m.classList.add(`lang-${b}`);const y=m.querySelector(".close-button");if(y){const E=k.t("mobilemenu.close");E&&E!=="mobilemenu.close"&&y.setAttribute("aria-label",E)}}catch(m){console.error("Error handling language change in mobile menu:",m)}}return window.addEventListener("languageChanged",l),i(),l(),console.log("Мобильное меню с иконками инициализировано"),function(){t&&t.removeEventListener("click",n),r.forEach(u=>{u.removeEventListener("click",()=>{})}),a&&a.removeEventListener("click",n),window.removeEventListener("languageChanged",l)}}function he(){const e=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),n=document.querySelector(".hero__content"),r=document.querySelector(".hero__description--desktop"),a=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const i=document.getElementById("buy-button"),l=document.getElementById("more-details-button"),g=document.querySelector(".hero__current-price"),u=document.querySelector(".hero__original-price"),m=document.querySelector(".hero__discount-badge");let v=null,b,S;function y(){try{if(!document.body.contains(e)){console.warn("Hero section removed from DOM, skipping price update");return}if(g){const h=T("current");h&&(g.innerHTML=h)}if(u){const h=T("original");h&&(u.textContent=h)}if(m){const h=T("discount");h&&(m.textContent=h)}}catch(h){console.error("Ошибка при обновлении цен:",h)}}function E(){if(!(!t||!e))try{t.onload=()=>{document.body.contains(e)&&e.classList.add("hero--loaded")},t.onerror=()=>{console.error("Не удалось загрузить изображение:",t.src),document.body.contains(e)&&e.classList.add("hero--loaded")},t.complete&&document.body.contains(e)&&e.classList.add("hero--loaded")}catch(h){console.error("Ошибка при настройке изображения в Hero секции:",h)}}function p(){try{if(!r||!a||!document.body.contains(r)||!document.body.contains(a))return;const h=window.innerWidth>992;r.style.display=h?"block":"none",a.style.display=h?"none":"block"}catch(h){console.error("Ошибка при адаптации контента для разных экранов:",h)}}function w(){if(n)try{v&&(v.disconnect(),v=null),v=new IntersectionObserver(h=>{h.forEach(L=>{var _;L.isIntersecting&&((_=L.target)!=null&&_.isConnected)&&(L.target.classList.add("animate-in"),v==null||v.unobserve(L.target))})},{threshold:.1}),n.isConnected&&v.observe(n)}catch(h){console.error("Ошибка при настройке анимации контента:",h)}}function d(){try{i&&i.addEventListener("click",c),l&&l.addEventListener("click",s)}catch(h){console.error("Ошибка при настройке обработчиков кнопок:",h)}}function o(){try{S=h=>{var L;try{if(!document.body.contains(e)){console.warn("Hero section removed from DOM, skipping language change handling");return}console.log("Hero секция получила событие изменения языка:",h.detail),y();const _=["ar"],C=((L=h==null?void 0:h.detail)==null?void 0:L.language)||"en";_.includes(C)?e.classList.add("rtl"):e.classList.remove("rtl")}catch(_){console.error("Error in hero language change handler:",_)}},window.addEventListener("languageChanged",S)}catch(h){console.error("Ошибка при настройке слушателя смены языка:",h)}}function c(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(h){console.error("Ошибка при обработке клика по кнопке Buy:",h)}}function s(h){try{h.preventDefault();const L=document.getElementById("features");if(!L){window.location.hash="features";return}const C=L.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:C,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(L){console.error("Ошибка при обработке клика по кнопке More Details:",L)}}function f(){try{v&&v.disconnect(),clearTimeout(b),window.removeEventListener("resize",x),S&&window.removeEventListener("languageChanged",S),i&&i.removeEventListener("click",c),l&&l.removeEventListener("click",s)}catch(h){console.error("Ошибка при очистке ресурсов Hero секции:",h)}}function x(){clearTimeout(b),b=setTimeout(p,200)}try{E(),p(),w(),d(),o(),y(),window.addEventListener("resize",x)}catch(h){console.error("Ошибка при инициализации Hero секции:",h)}return f}function pe(e){let t=null,n=null,r=!1,a=0,i=null;const l=(s,f)=>{try{const x=k.t(s);return x!==s?x:f}catch(x){return console.warn(`Error getting translation for ${s}:`,x),f}},g=s=>{try{return T(s)}catch(f){return console.warn(`Error getting localized price for ${s}:`,f),s==="current"?"$35.48 US":s==="original"?"US $108.06":s==="discount"?"-68%":""}};function u(){return document.documentElement.dir==="rtl"}(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function v(s){s.key==="Escape"&&r&&o()}function b(){const s=document.createElement("div");return s.className="modal-about-overlay",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("tabindex","-1"),s.style.display="none",s.addEventListener("click",o),e.appendChild(s),s}function S(){if(!t)return;if(u()){const f=t.querySelector(".modal-about-header");if(f){f.style.flexDirection="row-reverse",f.style.justifyContent="flex-end",f.style.paddingRight="16px",f.style.paddingLeft="50px";const h=f.querySelector(".modal-about-icon-wrapper");h&&(h.style.marginLeft="0",h.style.marginRight="0");const L=f.querySelector(".modal-about-title");L&&(L.style.textAlign="right",L.style.marginRight="17px")}const x=t.querySelector(".modal-about-close");x&&(x.style.right="auto",x.style.left="16px")}}function y(){return n?n.title===l("about.cards.4.title","Extensive color selection")&&n.colorImages?`
        <img
          src="${n.colorImages[a]}"
          alt="${l(`about.cards.4.imageAlt.${a+1}`,`R36S Color Variant ${a+1}`)}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `:n.videoUrl?n.videoUrl.toString().toLowerCase().endsWith(".mp4")?`
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
            <source src="${n.videoUrl}" type="video/mp4" />
          </video>
        </div>
        `:`
        <img
          src="${n.videoUrl}"
          alt="${n.imageAlt||l("about.modal.imageAlt.default","Feature animation")}"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
        />
      `:n.imageUrl?n.imageUrl.toString().toLowerCase().endsWith(".mp4")?`
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
            <source src="${n.imageUrl}" type="video/mp4" />
          </video>
        </div>
        `:`
        <img
          src="${n.imageUrl}"
          alt="${n.imageAlt||l("about.modal.imageAlt.default","Feature image")}"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
        />
      `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${n.imageAlt||l("about.modal.imageAlt.default","Feature Image")}
      </div>
    `:""}function E(){(n==null?void 0:n.title)===l("about.cards.4.title","Extensive color selection")&&n.colorImages&&(i&&clearInterval(i),i=setInterval(()=>{a=a===n.colorImages.length-1?0:a+1;const s=t.querySelector(".modal-about-image");s&&(s.src=n.colorImages[a],s.alt=l(`about.cards.4.imageAlt.${a+1}`,`R36S Color Variant ${a+1}`))},1e3))}function p(){if(!t||!n)return;const s={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:n.fullDescription,image:n.imageUrl||(n.colorImages?n.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:n.title}};n.id===1&&(s.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:l("about.faq.question","How many games are included in the R36S console?"),acceptedAnswer:{"@type":"Answer",text:l("about.faq.answer","The R36S console includes over 15,000 classic retro games from various platforms.")}}]});const f=`
          <script type="application/ld+json">
            ${JSON.stringify(s)}
          <\/script>
        `,x=l("about.modal.buyNow","BUY NOW"),h=l("about.modal.discount","-68%"),L=u(),_=L?`<span class="modal-about-button-shine"></span>
        <span class="modal-about-button-text">${h} ${x}</span>
        <span class="modal-about-button-pulse"></span>`:`<span class="modal-about-button-pulse"></span>
        <span class="modal-about-button-text">${x} ${h}</span>
        <span class="modal-about-button-shine"></span>`,C=g("current"),oe=g("original"),ne=L?`<div class="modal-about-header" style="flex-direction: row-reverse; justify-content: flex-start; padding-left: 50px;">
       <h3 class="modal-about-title" itemprop="name" data-i18n="${n.i18nKey}.title" style="text-align: right; margin-right: 17px;">${n.title}</h3>
       <div class="modal-about-icon-wrapper" aria-hidden="true">${n.icon}</div>
     </div>`:`<div class="modal-about-header">
       <div class="modal-about-icon-wrapper" aria-hidden="true">${n.icon}</div>
       <h3 class="modal-about-title" itemprop="name" data-i18n="${n.i18nKey}.title">${n.title}</h3>
     </div>`;t.innerHTML=`
          ${f}
          <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="name" content="R36S Handheld Game Console" />
            <meta itemprop="description" content="${n.title} for R36S console" />
            <meta itemprop="sku" content="R36S-${n.id}" />
            <meta itemprop="brand" content="R36S" />
            <meta itemprop="productID" content="R36S-F${n.id}" />
            
            <button class="modal-about-close" aria-label="${l("about.modal.close","Close modal")}">
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
            
            ${ne}

            <div class="modal-about-body">
              <div class="modal-about-media-container" itemprop="image">
                ${y()}
              </div>
              
              <div class="modal-about-content-container">
                <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                  <div class="modal-about-price-wrapper">
                    <span class="modal-about-original-price">${oe}</span>
                    <span class="modal-about-current-price" itemprop="price" content="35.48">
                      ${C}
                      <meta itemprop="priceCurrency" content="USD" />
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
                    ${_}
                  </a>
                </div>

                <div class="modal-about-description" itemprop="description" data-i18n="${n.i18nKey}.fullDescription">
                  ${n.fullDescription}
                </div>
              </div>
            </div>
          </div>
        `,S();const H=t.querySelector(".modal-about-close");H&&H.addEventListener("click",o);const U=t.querySelector(".modal-about-content");U&&U.addEventListener("click",re=>re.stopPropagation())}function w(s){n=s,t||(t=b()),p();const f=window.location.href,x=new URL(f);return x.searchParams.set("feature",n.id),window.history.pushState({featureId:n.id},"",x),t.style.display="flex",r=!0,t.focus(),window.addEventListener("keydown",v),document.body.style.overflow="hidden",E(),window.addEventListener("popstate",d),{close:o}}function d(s){r&&(!s.state||!s.state.featureId)&&o()}function o(){if(!r||!t)return;r=!1,t.style.display="none",window.removeEventListener("keydown",v),window.removeEventListener("popstate",d),document.body.style.overflow="visible",i&&(clearInterval(i),i=null);const s=new URL(window.location.href);s.searchParams.delete("feature"),window.history.pushState({},"",s)}function c(){o(),t&&e.contains(t)&&e.removeChild(t),t=null,n=null}return{open:w,close:o,destroy:c}}const J="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",X="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",Q="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",ee="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",fe="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",we="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",te="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",ye="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",ve="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let j=null;const R=(e,t)=>{try{const n=k.t(e);return n===e?t:n}catch(n){return console.warn(`Error getting translation for ${e}:`,n),t}};function be(){if(console.log("Начинаем предзагрузку изображений..."),[J,X,Q,ee].forEach(t=>{const n=new Image;n.src=t}),"HTMLVideoElement"in window){const t=document.createElement("video");t.preload="metadata",t.src=te}console.log("Предзагрузка изображений завершена")}function Se(){if(console.log("Инициализация секции About"),be(),!document.querySelector(".about__cards"))return console.error("Контейнер для карточек не найден"),null;j||(console.log("Создаем модальное окно..."),j=pe(document.body),console.log("Модальное окно создано"));let t=j;const r=[{id:1,i18nKey:"about.cards.1",icon:`
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
• Optimized versions for modern hardware`,imageUrl:J,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,i18nKey:"about.cards.2",icon:`
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
• Scratch-resistant surface`,imageUrl:X,imageAlt:"Display Technologies"},{id:3,i18nKey:"about.cards.3",icon:`
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
- Full-screen IPS display`,videoUrl:te,imageAlt:"Battery Life"},{id:4,i18nKey:"about.cards.4",icon:`
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
- Mesmerizing Purple ...`,colorImages:[Q,ee,fe,we],imageAlt:"R36S Color Variants"},{id:5,i18nKey:"about.cards.5",icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:ve,imageAlt:"R36S Settings"},{id:6,i18nKey:"about.cards.6",icon:`
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
• Quick startup for instant gaming access`,videoUrl:ye,imageAlt:"R36S Portability"}],a=d=>{const o=d.i18nKey;return{...d,title:R(`${o}.title`,d.title),description:R(`${o}.description`,d.description),detail:R(`${o}.detail`,d.detail),number:R(`${o}.number`,d.number),fullDescription:R(`${o}.fullDescription`,d.fullDescription),imageAlt:R(`${o}.imageAlt`,d.imageAlt)}};function i(){try{const d=R("about.button.details","More details"),o=document.querySelectorAll(".about-card__button .button-text");console.log(`Обновление текста ${o.length} кнопок на: "${d}"`),o.forEach(c=>{c.textContent=d})}catch(d){console.error("Ошибка при обновлении текста кнопок:",d)}}function l(){return document.documentElement.dir==="rtl"}function g(){console.log("Начинаем рендеринг карточек...");const d=document.querySelector(".about__cards");if(!d){console.error("Контейнер карточек не найден для рендеринга!");return}d.innerHTML="";const o=R("about.button.details","More details"),c=l(),s=r.map(x=>{const h=a(x),L=c?`<span class="button-icon">
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
        <span class="button-text" data-i18n="about.button.details">${o}</span>`:`<span class="button-text" data-i18n="about.button.details">${o}</span>
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
        </span>`;return`
      <div class="about-card" data-id="${x.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${x.icon}</div>
          <h3 class="about-card__title" data-i18n="${x.i18nKey}.title">${h.title}</h3>
          <p class="about-card__description" data-i18n="${x.i18nKey}.description">${h.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number" data-i18n="${x.i18nKey}.number">${h.number}</span>
            <span class="about-card__detail" data-i18n="${x.i18nKey}.detail">${h.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${x.id}">
            ${L}
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `}).join("");d.innerHTML=s;const f=d.querySelectorAll(".about-card");console.log(`Отрендерено ${f.length} карточек из ${r.length} необходимых`),f.length!==r.length?console.warn(`Ошибка рендеринга: отрендерено ${f.length} карточек вместо ${r.length}`):console.log("Рендеринг карточек успешно завершен")}function u(d){if(!d||!d.currentTarget)return;const o=d.currentTarget;if(!o||!o.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const c=o.getBoundingClientRect(),s=d.clientX-c.left,f=d.clientY-c.top;o.style.setProperty("--mouse-x",`${s}px`),o.style.setProperty("--mouse-y",`${f}px`)}catch(c){console.error("Ошибка при обработке движения мыши:",c)}}function m(d){if(!d||!d.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}d.stopPropagation();try{const o=parseInt(d.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",o);const c=r.find(f=>f.id===o);if(!c){console.error("Данные для карточки не найдены");return}const s=a(c);t&&t.open(s)}catch(o){console.error("Ошибка при обработке клика по кнопке:",o)}}function v(d,o){let c;return function(){const s=this,f=arguments;clearTimeout(c),c=setTimeout(()=>{d.apply(s,f)},o)}}function b(){console.log("Очистка обработчиков событий карточек...");try{const d=document.querySelectorAll(".about-card");d&&d.length>0?(console.log(`Удаление обработчиков из ${d.length} карточек`),d.forEach((c,s)=>{if(c){const f=c.getAttribute("data-id"),x=c.innerHTML,h=c.cloneNode(!1);h.setAttribute("data-id",f),h.innerHTML=x,c.parentNode&&(c.parentNode.replaceChild(h,c),console.log(`Карточка ${s+1} заменена на клон без обработчиков`))}})):console.warn("Не найдено карточек для очистки обработчиков");const o=document.querySelector(".about__cards");if(o){const c=o.innerHTML,s=o.cloneNode(!1);s.innerHTML=c,o.parentNode&&(o.parentNode.replaceChild(s,o),console.log("Контейнер карточек заменен на клон без обработчиков"))}else console.warn("Не найден контейнер карточек для очистки обработчиков");console.log("Очистка обработчиков успешно завершена")}catch(d){console.error("Ошибка при очистке обработчиков событий:",d);try{console.log("Применяем альтернативный метод очистки...");const o=document.querySelector(".about__cards");if(o){const c=o.outerHTML,s=o.parentNode;s&&(s.removeChild(o),s.insertAdjacentHTML("beforeend",c),console.log("Альтернативная очистка успешно завершена"))}}catch(o){console.error("Ошибка при альтернативной очистке:",o)}}}function S(d){const o=d.querySelectorAll(".about-card");if(console.log(`Настройка эффекта свечения для ${o.length} карточек`),o.length===0){console.error("Карточки не найдены для эффекта свечения!");return}o.forEach((c,s)=>{let f=c.querySelector(".card-glow");f||(console.log(`Создаем элемент подсветки для карточки ${s+1}`),f=document.createElement("div"),f.className="card-glow",c.prepend(f)),c.style.setProperty("--mouse-x","0px"),c.style.setProperty("--mouse-y","0px"),c.addEventListener("mousemove",u),console.log(`Обработчик события mousemove добавлен к карточке ${s+1}`)})}function y(){console.log("Настройка обработчиков событий для карточек...");const d=document.querySelector(".about__cards");if(!d){console.error("Контейнер карточек не найден для установки обработчиков!");return}const o=d.querySelectorAll(".about-card");if(!o||o.length===0){console.warn("Не найдены карточки для установки обработчиков событий");return}console.log(`Устанавливаем обработчики событий для ${o.length} карточек`);const c=window.matchMedia("(max-width: 768px)").matches;S(d),!c&&d&&d.addEventListener("click",function(f){const x=f.target.closest(".about-card");if(x&&!f.target.closest(".about-card__button")){const h=parseInt(x.dataset.id);console.log("Клик по карточке ID:",h);const L=r.find(C=>C.id===h);if(!L){console.error("Данные для карточки не найдены");return}const _=a(L);t&&t.open(_)}}),o.forEach(f=>{f&&(f.addEventListener("mouseenter",function(){f&&(parseInt(f.dataset.id),f.classList.add("active"))}),f.addEventListener("mouseleave",function(){f&&f.classList.remove("active")}))});const s=d.querySelectorAll(".about-card__button");s&&s.length>0?(s.forEach(f=>{f&&f.addEventListener("click",m)}),console.log(`Установлены обработчики для ${s.length} кнопок`)):console.warn("Не найдены кнопки карточек"),console.log("Настройка обработчиков событий успешно завершена")}function E(){function d(o){try{console.log("Обработка события смены языка в секции About");const c=o.detail?o.detail.language:k.language;console.log(`Переключение на язык: ${c}`),b(),g(),setTimeout(()=>{y();const s=document.querySelectorAll(".about-card");s.forEach((f,x)=>{if(!f.querySelector(".card-glow")){console.warn(`Карточка ${x+1} не имеет элемента подсветки, добавляем...`);const L=document.createElement("div");L.className="card-glow",f.prepend(L)}f.style.setProperty("--mouse-x","0px"),f.style.setProperty("--mouse-y","0px")}),console.log(`Проверено ${s.length} карточек после смены языка`)},100),i(),console.log("Обновление секции About после смены языка завершено")}catch(c){console.error("Ошибка при обновлении секции About после смены языка:",c);try{g(),setTimeout(y,150)}catch(s){console.error("Не удалось выполнить восстановление после ошибки:",s)}}}return window.removeEventListener("languageChanged",d),window.addEventListener("languageChanged",d),d}function p(){console.log("Очистка всех обработчиков событий..."),b();const d=v(()=>{},250);window.removeEventListener("resize",d);function o(){}window.removeEventListener("languageChanged",o),t=null,document.querySelectorAll(".about-card").forEach(s=>{s&&(s.style.removeProperty("--mouse-x"),s.style.removeProperty("--mouse-y"))}),console.log("Очистка обработчиков событий завершена")}function w(){const d=E(),o=v(()=>{const c=window.matchMedia("(max-width: 768px)").matches,s=window.matchMedia("(max-width: 768px)").matches;c!==s&&(console.log("Состояние адаптивности изменилось, обновляем обработчики"),b(),y())},250);return window.addEventListener("resize",o),setTimeout(()=>{const c=document.querySelectorAll(".about-card");console.log(`Проверка установки эффекта подсветки: найдено ${c.length} карточек`);let s=!1;c.forEach(f=>{f.querySelector(".card-glow")||(s=!0,console.warn("Обнаружена карточка без эффекта подсветки, исправляем..."),S(document.querySelector(".about__cards")))}),s||console.log("Все карточки имеют корректный эффект подсветки")},100),function(){console.log("Запуск функции очистки секции About"),window.removeEventListener("resize",o),window.removeEventListener("languageChanged",d),p()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),g(),console.log("Устанавливаем обработчики событий..."),y(),console.log("Инициализация About завершена успешно"),w()}catch(d){return console.error("Ошибка при инициализации About:",d),null}}function xe(){const e=document.getElementById("features"),t=document.getElementById("featuresVideo"),n=document.getElementById("soundToggleButton"),r=document.getElementById("volumeOffIcon"),a=document.getElementById("volumeOnIcon"),i=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");if(!e){console.warn("Features section not found");return}t&&(t.volume=.5,t.play().catch(m=>{console.log("Автовоспроизведение не удалось:",m)})),i&&i.addEventListener("click",W),l&&l.addEventListener("click",Z),n&&n.addEventListener("click",()=>G(t,r,a));const g=()=>{Ee(e,t,r,a)};window.addEventListener("scroll",g);const u=()=>{if(n){const m=t&&!t.muted?"features.sound.toggle.disable":"features.sound.toggle.enable";n.setAttribute("aria-label",k.t(m))}};return window.addEventListener("languageChanged",u),function(){i&&i.removeEventListener("click",W),l&&l.removeEventListener("click",Z),n&&n.removeEventListener("click",()=>G(t,r,a)),window.removeEventListener("scroll",g),window.removeEventListener("languageChanged",u),console.log("Features component cleaned up")}}function G(e,t,n){if(e)if(e.muted=!e.muted,e.muted){t.style.display="block",n.style.display="none";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label",k.t("features.sound.toggle.enable"))}else{e.volume=.5,t.style.display="none",n.style.display="block";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label",k.t("features.sound.toggle.disable"))}}function Ee(e,t,n,r){if(!e||!t||t.muted)return;const a=e.getBoundingClientRect();if(!(a.top<window.innerHeight&&a.bottom>0)){t.muted=!0,n.style.display="block",r.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label",k.t("features.sound.toggle.enable"))}}function W(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function Z(){const e=document.getElementById("features-r36s");if(e){const t=e.getBoundingClientRect().top,n=window.scrollY||window.pageYOffset,r=t+n;window.scrollTo({top:r,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function Le(){try{let E=function(){r&&(r.innerHTML=m?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`)},p=function(){a&&(a.innerHTML=v?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`)},w=function(){if(!(!e||S))if(m)e.pause(),m=!1,E();else{const o=e.play();o!==void 0?o.then(()=>{m=!0,E()}).catch(c=>{console.warn("Не удалось воспроизвести видео:",c),m=!1,E()}):(m=!0,E())}},d=function(){l&&(S=!0,e&&(e.style.display="none"),l.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
          </div>
        </div>
      `)};console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),t=document.getElementById("categories"),n=document.querySelector(".categories__content"),r=document.querySelector(".categories__video-play"),a=document.querySelector(".categories__video-mute"),i=document.querySelector(".categories__video-slider"),l=document.querySelector(".categories__video-container"),g=document.querySelector(".categories__video-time span:first-child"),u=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};if(n&&n.classList.add("animate-in"),!e)return console.error("Видео элемент не найден в DOM"),d(),{};let m=!1,v=!0,b=!1,S=!1;const y=o=>{if(isNaN(o)||o<0)return"0:00";const c=Math.floor(o/60),s=Math.floor(o%60);return`${c}:${s.toString().padStart(2,"0")}`};return e&&(e.muted=!0,e.loop=!0,e.playsInline=!0,e.style.display="block",e.style.visibility="visible",e.style.opacity="1",e.style.width="100%",e.style.borderRadius="24px",l&&(l.style.minHeight="200px"),e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),b=!0,i&&!isNaN(e.duration)&&(i.max=e.duration,u&&(u.textContent=y(e.duration)))}catch(o){console.error("Ошибка при обработке метаданных видео:",o)}}),e.addEventListener("timeupdate",()=>{try{i&&!isNaN(e.currentTime)&&(i.value=e.currentTime,g&&(g.textContent=y(e.currentTime)))}catch(o){console.error("Ошибка при обновлении времени видео:",o)}}),e.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),d()}),setTimeout(()=>{if(e&&!S){const o=e.play();o!==void 0&&o.then(()=>{console.log("Автовоспроизведение видео успешно"),m=!0,E()}).catch(c=>{console.warn("Не удалось автовоспроизвести видео:",c)})}},1e3)),r&&r.addEventListener("click",o=>{o.stopPropagation(),w()}),a&&a.addEventListener("click",o=>{o.stopPropagation(),e&&(v=!v,e.muted=v,p())}),i&&i.addEventListener("input",o=>{if(e)try{const c=parseFloat(o.target.value);isNaN(c)||(e.currentTime=c)}catch(c){console.error("Ошибка при изменении времени видео:",c)}}),l&&l.addEventListener("click",o=>{o.target.closest(".categories__video-controls")||w()}),E(),p(),t.classList.add("initialized"),{togglePlay:w,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}catch(e){console.error("Критическая ошибка в initCategories:",e);const t=document.getElementById("categories");return t&&(t.style.display="block"),{}}}function O(){const e=document.querySelectorAll(".accordion__item");if(e.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${e.length} вопросов`);const t=(r=null)=>{e.forEach(a=>{a!==r&&a.classList.contains("active")&&a.classList.remove("active")})};e.forEach(r=>{const a=r.querySelector(".accordion__header"),i=r.querySelector(".accordion__toggle"),l=r.querySelector(".accordion__content");if(!a||!i||!l){console.warn("FAQ аккордеон: структура элемента неполная",r);return}r===e[0]&&setTimeout(()=>{i.classList.add("pulse"),setTimeout(()=>{i.classList.remove("pulse")},1500)},1e3);const g=b=>{if(b.preventDefault(),b.stopPropagation(),i.classList.add("clicked"),setTimeout(()=>i.classList.remove("clicked"),300),r.classList.contains("active")){r.classList.remove("active");return}t(r),r.classList.add("active");const S=a.getBoundingClientRect();S.top>=10&&S.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+S.top-100,behavior:"smooth"})},100)};a.addEventListener("click",g),i.addEventListener("click",b=>{b.stopPropagation(),g(b)});const u=`faq-question-${Math.random().toString(36).substring(2,9)}`,m=`faq-answer-${Math.random().toString(36).substring(2,9)}`;a.setAttribute("id",u),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls",m),l.setAttribute("id",m),l.setAttribute("aria-labelledby",u),l.setAttribute("role","region"),l.setAttribute("hidden","true"),new MutationObserver(b=>{b.forEach(S=>{if(S.type==="attributes"&&S.attributeName==="class"){const y=r.classList.contains("active");a.setAttribute("aria-expanded",y?"true":"false"),y?l.removeAttribute("hidden"):setTimeout(()=>{r.classList.contains("active")||l.setAttribute("hidden","true")},500)}})}).observe(r,{attributes:!0})});const n=r=>{if(r.key==="Escape"){t();return}const a=document.activeElement.closest(".accordion__item");if(!a)return;const i=Array.from(e),l=i.indexOf(a);if(l===-1)return;let g;switch(r.key){case"ArrowDown":g=(l+1)%i.length;break;case"ArrowUp":g=(l-1+i.length)%i.length;break;case"Home":g=0;break;case"End":g=i.length-1;break;default:return}const u=i[g].querySelector(".accordion__header");u&&(u.focus(),r.preventDefault())};return document.addEventListener("keydown",n),console.log("FAQ аккордеон успешно инициализирован"),{openItem:r=>{r>=0&&r<e.length&&(t(e[r]),e[r].classList.add("active"))},closeAll:()=>t()}}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=O()}),window.initFaqAccordion=O);function ke(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const i=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!i){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}i.id||(i.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",i)}console.log("Инициализация секции Articles с SEO-оптимизацией");const t=[{id:1,title:"R36S Retro Gaming",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],n=e.querySelector(".articles__grid");if(!n){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const i=document.createElement("meta");i.name="description",i.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(i)}if(!document.querySelector('meta[name="keywords"]')){const i=document.createElement("meta");i.name="keywords",i.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(i)}})(),t.forEach(i=>{const l=document.createElement("article");l.className="article",l.id=`article-${i.id}`,l.dataset.articleId=i.id,l.setAttribute("itemscope",""),l.setAttribute("itemtype","http://schema.org/Article");const g=document.createElement("h2");g.className="article__title",g.setAttribute("itemprop","headline"),g.innerHTML=i.title,l.appendChild(g);const u=document.createElement("div");u.className="article__content-wrapper",u.setAttribute("itemprop","articleBody"),i.sections.forEach((y,E)=>{const p=document.createElement("section");if(p.className="article__section",p.id=`section-${i.id}-${E}`,E!==0||y.subtitle!==i.title){const d=document.createElement("h3");d.className="article__subtitle",d.innerHTML=y.subtitle,p.appendChild(d)}const w=document.createElement("div");w.className="article__content",w.innerHTML=y.content,p.appendChild(w),u.appendChild(p)}),l.appendChild(u);const m=document.createElement("script");m.type="application/ld+json";const v={"@context":"https://schema.org","@type":"Article",headline:i.title,description:i.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};m.textContent=JSON.stringify(v),l.appendChild(m);const b=document.createElement("footer");b.className="article__footer";const S=document.createElement("a");S.href="https://www.aliexpress.com/item/1005007171465465.html",S.className="article__cta",S.textContent="Order R36S Now",S.setAttribute("itemprop","url"),S.setAttribute("title","Order R36S Gaming Console"),S.setAttribute("rel","nofollow"),S.setAttribute("target","_blank"),b.appendChild(S),l.appendChild(b),n.appendChild(l)}),(()=>{const i=document.createElement("h1");i.className="articles__heading",i.textContent="R36S Gaming Console - Official Information",e.querySelector(".articles__container").insertBefore(i,e.querySelector(".articles__grid"))})(),setTimeout(()=>{O()},500),setTimeout(()=>{console.log("Проверка наличия элементов аккордеона перед инициализацией:");const i=document.querySelectorAll(".accordion__item");console.log(`Найдено ${i.length} элементов аккордеона`),console.log("Первый элемент аккордеона:",i[0]),i.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",i[0].querySelector(".accordion__header")),console.log("- Кнопка:",i[0].querySelector(".accordion__toggle")),console.log("- Контент:",i[0].querySelector(".accordion__content"))),console.log("Вызываем initFaqAccordion...");const l=O();console.log("Результат инициализации:",l?"успешно":"ошибка")},1e3),console.log("Инициализация секции Articles завершена успешно")}function _e(){if(console.log("Инициализация переключателей яркости текста в блоках - НАЧАЛО"),window._themeToggleInitialized)return console.warn("Обнаружена повторная инициализация переключателей яркости. Пропускаем..."),window._themeToggleCleanup;window._themeToggleInitialized=!0;const e=document.getElementById("articles")||document.querySelector(".articles"),t=document.getElementById("official-website")||document.querySelector(".official-website"),n=document.getElementById("retro-gaming")||document.querySelector(".retro-gaming");if(!e&&!t&&!n){console.error("Секции для добавления переключателей яркости текста не найдены");return}const r=[];function a(u,m){if(!u)return;console.log(`Добавление переключателей в секцию ${u.id||u.className}`);const v=u.querySelectorAll(".article");console.log(`Найдено ${v.length} блоков для добавления переключателей в секции ${u.id||u.className}`),v.forEach((b,S)=>{const y=m!==void 0?m:S%3;if(b.querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label")){console.warn(`Блок #${S} уже содержит кнопку переключения. Пропускаем создание.`);return}const p=document.createElement("button");switch(p.setAttribute("type","button"),y){case 0:p.className="brightness-toggle",p.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const w=b.querySelector(".article__title");if(w){const c=document.createElement("div");c.className="article__title-container";const s=w.cloneNode(!0);c.appendChild(s),c.appendChild(p),w.parentNode.replaceChild(c,w)}else b.insertBefore(p,b.firstChild);break;case 1:p.className="brightness-toggle",p.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const d=b.querySelector(".article__title");if(d){const c=document.createElement("div");c.className="article__title-container";const s=d.cloneNode(!0);c.appendChild(s),c.appendChild(p),d.parentNode.replaceChild(c,d)}else b.insertBefore(p,b.firstChild);break;case 2:p.className="brightness-toggle-with-label",p.innerHTML=`
            <span class="brightness-toggle-label">Ярче</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const o=b.querySelector(".article__title");if(o){const c=document.createElement("div");c.className="article__title-container";const s=o.cloneNode(!0);c.appendChild(s),c.appendChild(p),o.parentNode.replaceChild(c,o)}else b.insertBefore(p,b.firstChild);break}r.push(p)})}e&&a(e);let i;if(n){const u=n.querySelectorAll(".article");if(u.length>0){const m=u[0].querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label");m&&(m.classList.contains("brightness-toggle-corner")?i=1:m.classList.contains("brightness-toggle-with-label")?i=2:i=0,console.log(`Обнаружен стиль кнопки в секции R36S Retro Gaming: ${i}`))}}t&&a(t,i!==void 0?i:1),console.log(`Создано ${r.length} кнопок переключения`),r.forEach(u=>{const m=u.cloneNode(!0);u.parentNode&&u.parentNode.replaceChild(m,u);const v=r.indexOf(u);v!==-1&&(r[v]=m)}),r.forEach(u=>{const m=u.closest(".article");if(!m){console.error("Не найден родительский блок .article для кнопки переключения");return}u.addEventListener("click",function(y){if(y.preventDefault(),y.stopPropagation(),console.log("Клик по кнопке переключения яркости"),console.log("Состояние до переключения:",m.classList.contains("bright-text")?"яркий":"обычный"),m.classList.toggle("bright-text"),u.classList.toggle("active"),console.log("Состояние после переключения:",m.classList.contains("bright-text")?"яркий":"обычный"),u.classList.contains("brightness-toggle-with-label")){const d=u.querySelector(".brightness-toggle-label");d&&(d.textContent=m.classList.contains("bright-text")?"Тусклее":"Ярче",console.log("Изменен текст лейбла на:",d.textContent))}const E=m.getAttribute("data-article-id")||m.id||Array.from(m.closest("section").querySelectorAll(".article")).indexOf(m),p=m.closest("section")?m.closest("section").id||m.closest("section").className.split(" ")[0]:"unknown",w=m.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-${p}-article-brightness-${E}`,w),console.log(`Яркость текста в блоке ${E} секции ${p} изменена на: ${w}`)});const v=m.getAttribute("data-article-id")||m.id||Array.from(m.closest("section").querySelectorAll(".article")).indexOf(m),b=m.closest("section")?m.closest("section").id||m.closest("section").className.split(" ")[0]:"unknown";if(localStorage.getItem(`r36s-${b}-article-brightness-${v}`)==="bright"){if(m.classList.add("bright-text"),u.classList.add("active"),u.classList.contains("brightness-toggle-with-label")){const y=u.querySelector(".brightness-toggle-label");y&&(y.textContent="Тусклее")}console.log(`Восстановлено состояние для блока ${v} в секции ${b}: яркий`)}else console.log(`Блок ${v} в секции ${b} в обычном режиме`)});const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l);const g=function(){r.forEach(u=>{if(u&&u.parentNode){const m=u.closest(".article__title-container");if(m){const v=m.querySelector(".article__title");v&&m.parentNode&&m.parentNode.replaceChild(v,m)}else u.parentNode.removeChild(u)}}),l&&l.parentNode&&l.parentNode.removeChild(l),window._themeToggleInitialized=!1,console.log("Очистка переключателей яркости выполнена")};return window._themeToggleCleanup=g,console.log("Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА"),g}const V={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function $(e,t=24){return V[e]?V[e].replace(/width="24"/,`width="${t}"`).replace(/height="24"/,`height="${t}"`):(console.error(`Icon "${e}" not found`),"")}function Ce(){document.querySelectorAll("[data-icon]").forEach(t=>{const n=t.getAttribute("data-icon"),r=parseInt(t.getAttribute("data-size")||"24",10);n&&(t.innerHTML=$(n,r))})}function Re(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),t=document.getElementById("name"),n=document.getElementById("email"),r=document.getElementById("phone"),a=document.getElementById("message"),i=document.querySelector(".form__button"),l=document.createElement("div");l.className="form__error",l.style.display="none",l.innerHTML=`
    <div class="form__error-icon">${$("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(l,e.firstChild);const g={name:"",email:"",phone:"",message:""};function u(y){l.querySelector("span").textContent=y,l.style.display="flex"}function m(){l.style.display="none"}function v(y){const{name:E,value:p}=y.target;g[E]=p,m()}t.addEventListener("input",v),n.addEventListener("input",v),r.addEventListener("input",v),a.addEventListener("input",v);async function b(y){y.preventDefault(),S(!0);try{if(!g.name||!g.email||!g.phone||!g.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(g.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(d=>setTimeout(d,1e3)),t.value="",n.value="",r.value="",a.value="",Object.keys(g).forEach(d=>{g[d]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(p){u(p.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",p)}finally{S(!1)}}function S(y){[t,n,r,a].forEach(p=>{p.disabled=y}),i.disabled=y,i.innerHTML=y?`<span class="button__icon">${$("loader",20)}</span> Sending...`:`<span class="button__icon">${$("send",20)}</span> Send message`}return e.addEventListener("submit",b),function(){t.removeEventListener("input",v),n.removeEventListener("input",v),r.removeEventListener("input",v),a.removeEventListener("input",v),e.removeEventListener("submit",b)}}function Ie(){const e="/R36S_STORE_JS/",n={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},r=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:n.review1.webp,jpeg:n.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:n.review4.webp,jpeg:n.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:n.review3.webp,jpeg:n.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:n.review2.webp,jpeg:n.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],a=new Set;let i=null,l=window.innerWidth<=1200;function g(o=!1){const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("review-card__star"),c.setAttribute("viewBox","0 0 24 24"),c.setAttribute("fill",o?"currentColor":"none"),c.setAttribute("stroke","currentColor"),c.setAttribute("stroke-width","2");const s=document.createElementNS("http://www.w3.org/2000/svg","polygon");return s.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),c.appendChild(s),c}function u(){const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add("review-card__verified"),o.setAttribute("width","16"),o.setAttribute("height","16"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none"),o.setAttribute("stroke","currentColor"),o.setAttribute("stroke-width","2");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d","M20 6L9 17l-5-5"),o.appendChild(c),o}function m(o){const c=document.getElementById("reviewCardTemplate");if(!c)return console.error("Шаблон карточки отзыва не найден"),null;const s=c.content.cloneNode(!0).querySelector(".review-card");s.dataset.id=o.id,o.mobileOnly&&(s.classList.add("mobile-only"),l||(s.style.display="none"));const f=s.querySelector(".review-card__rating");for(let C=0;C<5;C++)f.appendChild(g(C<o.rating));s.querySelector(".review-card__variant").textContent=o.color,s.querySelector(".review-card__text").textContent=o.text;const x=s.querySelector("picture");x.querySelector("source").setAttribute("srcset",o.images.webp);const h=x.querySelector("img");h.setAttribute("src",o.images.jpeg),h.setAttribute("alt",`Review ${o.id}`);const L=s.querySelector(".review-card__name");o.verified&&L.prepend(u()),L.appendChild(document.createTextNode(o.author)),s.querySelector(".review-card__date").textContent=o.date,s.querySelector(".review-card__helpful-count").textContent=`Helpful (${o.helpful})`,s.addEventListener("click",v),s.addEventListener("mouseenter",()=>b(o.id)),s.addEventListener("mouseleave",S);const _=s.querySelector(".review-card__helpful");return _.addEventListener("mouseenter",()=>{_.querySelector("svg").setAttribute("fill","currentColor"),_.querySelector("svg").classList.add("scale-125"),_.querySelector("svg").classList.remove("scale-100")}),_.addEventListener("mouseleave",()=>{_.querySelector("svg").setAttribute("fill","none"),_.querySelector("svg").classList.remove("scale-125"),_.querySelector("svg").classList.add("scale-100")}),s}function v(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function b(o){i=o;const c=document.querySelector(`.review-card[data-id="${o}"]`);if(c){const s=c.querySelector(".review-card__arrow-wrapper");s&&(s.style.display="flex")}}function S(){const o=document.querySelector(`.review-card[data-id="${i}"]`);if(o){const c=o.querySelector(".review-card__arrow-wrapper");c&&(c.style.display="none")}i=null}function y(){const o=document.getElementById("reviewsGrid");if(!o){console.error("Контейнер для отзывов не найден");return}const c=document.getElementById("reviewCardTemplate"),s={};o.querySelectorAll(".review-card").forEach(h=>{h.dataset.id&&(s[h.dataset.id]=h)});const f=r.filter(h=>!h.mobileOnly||h.mobileOnly&&l),x=[];f.forEach(h=>{if(s[h.id]){const L=s[h.id];L.style.display="block",x.push(L),delete s[h.id]}else{const L=m(h);L&&x.push(L)}}),Object.values(s).forEach(h=>{h!==c&&(h.style.display="none")}),o.innerHTML="",o.appendChild(c),x.forEach(h=>{o.appendChild(h)}),E()}function E(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(c=>{c.classList.add("animate-in")});return}const o=new IntersectionObserver(c=>{c.forEach(s=>{if(s.isIntersecting){const f=s.target.dataset.id;a.has(f)||(s.target.classList.add("animate-in"),a.add(f))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(c=>{o.observe(c)})}function p(){l=window.innerWidth<=1200,y(),document.querySelectorAll(".review-card").forEach(c=>{c.classList.contains("mobile-only")&&(c.style.display=l?"block":"none")})}function w(){y();let o;const c=()=>{clearTimeout(o),o=setTimeout(p,250)};window.addEventListener("resize",c);const s=document.createElement("style");s.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(s),setTimeout(p,100);const f=document.getElementById("reviews");if(f&&!f.hasAttribute("itemscope")){f.setAttribute("itemscope",""),f.setAttribute("itemtype","http://schema.org/Product");const x=document.createElement("meta");x.setAttribute("itemprop","name"),x.setAttribute("content","R36S Handheld Game Console"),f.prepend(x);const h=document.createElement("meta");h.setAttribute("itemprop","description"),h.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),f.prepend(h)}}w();function d(){if(window.removeEventListener("resize",p),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const o=[];new IntersectionObserver(()=>{}).disconnect(),o.forEach(s=>s.disconnect())}document.querySelectorAll(".review-card").forEach(o=>{o.removeEventListener("click",v),o.removeEventListener("mouseenter",()=>{}),o.removeEventListener("mouseleave",S),Object.keys(r).forEach(s=>{o.removeEventListener("mouseenter",()=>b(s))});const c=o.querySelector(".review-card__helpful");c&&(c.removeEventListener("mouseenter",()=>{}),c.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:d,renderReviewCards:y}}const Ae={};function Te(){console.log("Products секция инициализирована");const t=!Ae?"/":"/R36S_STORE_JS/",n={i0_0:{jpg:`${t}img/products/i_0_0x.jpg`,webp:`${t}img/products/i_0_0x.webp`},i1:{jpg:`${t}img/products/i_1_1x.jpg`,webp:`${t}img/products/i_1_1x.webp`},i2:{jpg:`${t}img/products/i_2_1x.jpg`,webp:`${t}img/products/i_2_1x.webp`},i3:{jpg:`${t}img/products/i_3_1x.jpg`,webp:`${t}img/products/i_3_1x.webp`},i4:{jpg:`${t}img/products/i_4_1x.jpg`,webp:`${t}img/products/i_4_1x.webp`},i5:{jpg:`${t}img/products/i_5_1x.jpg`,webp:`${t}img/products/i_5_1x.webp`},i6:{jpg:`${t}img/products/i_6_1x.jpg`,webp:`${t}img/products/i_6_1x.webp`},i7:{jpg:`${t}img/products/i_7_1x.jpg`,webp:`${t}img/products/i_7_1x.webp`},i8:{jpg:`${t}img/products/i_8_1x.jpg`,webp:`${t}img/products/i_8_1x.webp`},i9:{jpg:`${t}img/products/i_9_1x.jpg`,webp:`${t}img/products/i_9_1x.webp`}},r=[{id:"getting-started",title:"Start Guide",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,images:{jpg:n.i0_0.jpg,webp:n.i0_0.webp}}},{id:"original-backup",title:"Backup Original",content:{text:"This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.",subsections:[{id:"backup-procedure",title:"Backup Using Win32DiskImager",content:{text:`1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,images:{jpg:n.i1.jpg,webp:n.i1.webp}}}]}},{id:"custom-installation",title:"Install Custom",content:{text:`As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,subsections:[{id:"method-balena",title:"Option 1: Balena Etcher Method",content:{text:`While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,images:{jpg:n.i2.jpg,webp:n.i2.webp}}},{id:"method-win32",title:"Option 2: Win32DiskImager Method",content:{text:`1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,images:{jpg:n.i3.jpg,webp:n.i3.webp}}},{id:"method-raspberry",title:"Option 3: Raspberry Pi Imager",content:{text:`1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,images:{jpg:n.i4.jpg,webp:n.i4.webp}}}]}},{id:"firmware-options",title:"Firmware Options",content:{text:"Several custom firmware options are available for the R36S. Here are the most popular choices:",subsections:[{id:"option-arkos",title:"ArkOS - Community Enhanced Edition",content:{text:`GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,images:{jpg:n.i5.jpg,webp:n.i5.webp}}},{id:"option-rocknix",title:"ROCKNIX Operating System",content:{text:`GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,images:{jpg:n.i6.jpg,webp:n.i6.webp}}},{id:"option-amber",title:"AmberELEC System",content:{text:`GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,images:{jpg:n.i7.jpg,webp:n.i7.webp}}}]}},{id:"game-setup",title:"Add Files",content:{text:`1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,images:{jpg:n.i8.jpg,webp:n.i8.webp}}},{id:"helpful-tips",title:"Usage Tips",content:{text:`• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,images:{jpg:n.i9.jpg,webp:n.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let a="downloads",i=!1;const l=document.getElementById("products-nav-list"),g=document.getElementById("products-sections"),u=document.getElementById("products-nav");function m(){i=window.innerWidth<=1024,u&&(i?u.classList.add("nav-mobile"):u.classList.remove("nav-mobile"))}function v(p){a=p,document.querySelectorAll(".nav-item").forEach(o=>{o.dataset.sectionId===p?o.classList.add("nav-item-active"):o.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(o=>{o.id===p?o.classList.add("section-active"):o.classList.remove("section-active")}),setTimeout(()=>{const o=document.getElementById(p);if(o){const c=i?80:20,f=o.getBoundingClientRect().top+window.pageYOffset-c;window.scrollTo({top:f,behavior:"smooth"})}},100)}function b(){l.innerHTML="",r.forEach(p=>{const w=document.createElement("button");w.className=`nav-item ${a===p.id?"nav-item-active":""}`,w.dataset.sectionId=p.id,w.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${p.title}</span>
      `,w.addEventListener("click",()=>v(p.id)),l.appendChild(w)})}function S(p){if(p.id==="downloads"){let o='<div class="download-list">';return p.content.downloads.forEach(c=>{o+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${c.file}</div>
                <div class="download-meta">Update: ${c.date} • ${c.version}</div>
              </div>
            </div>
            <a href="${c.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),o+="</div>",o}let w='<div class="section-content"><div class="text-content">';return p.content.text.split(`
`).forEach(o=>{w+=`<p>${o.trim()}</p>`}),w+="</div>",p.content.images&&(w+=`
        <div class="image-container">
          <picture>
            <source srcset="${p.content.images.webp}" type="image/webp">
            <img src="${p.content.images.jpg}" alt="${p.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),p.content.subsections&&(w+='<div class="subsections">',p.content.subsections.forEach(o=>{w+=`
          <div class="subsection">
            <h3 class="subsection-title">${o.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,o.content.text.split(`
`).forEach(s=>{w+=`<p>${s.trim()}</p>`}),w+="</div>",o.content.images&&(w+=`
            <div class="image-container">
              <picture>
                <source srcset="${o.content.images.webp}" type="image/webp">
                <img src="${o.content.images.jpg}" alt="${o.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),w+="</div></div>"}),w+="</div>"),w+="</div>",w}function y(){g.innerHTML="",r.forEach(p=>{const w=document.createElement("section");w.id=p.id,w.className=`section ${a===p.id?"section-active":""}`,w.innerHTML=`
        <h2 class="section-title">${p.title}</h2>
        ${S(p)}
      `,g.appendChild(w)})}function E(){m(),b(),y(),window.addEventListener("resize",m),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return l&&g&&u?E():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:v,checkMobile:m}}function Be(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const t=e.querySelector(".partnership-button");t&&t.addEventListener("click",()=>{const n=document.querySelector(".partnership-modal-overlay");if(n){n.classList.add("active");const r=n.querySelector(".partnership-modal-content");r&&r.classList.add("active"),document.body.style.overflow="hidden"}}),Me()}function Me(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const t=e.querySelector(".partnership-modal-close");t&&t.addEventListener("click",n),e.addEventListener("click",r=>{r.target===e&&n()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("active")&&n()});function n(){const r=e.querySelector(".partnership-modal-content");e.classList.remove("active"),r&&r.classList.remove("active"),document.body.style.overflow=""}}console.log("Main.js инициализирован");let A=[];function $e(){const e="IntersectionObserver"in window,t=function(){const r=document.createElement("div");return r.style.display="flex",r.style.display==="flex"}(),n=function(){const r=document.createElement("div");return r.style.display="grid",r.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",t),console.log("- CSS Grid:",n),e||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),n||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:t,hasGrid:n}}function Fe(){try{A.forEach(e=>{typeof e=="function"&&e()}),A=[]}catch(e){console.warn("Error during global cleanup:",e)}}async function Oe(){try{const e=K(F);console.log("Language from URL:",e);const t=localStorage.getItem("userLanguage")||e||"en",n=["ar"];document.documentElement.setAttribute("lang",t),document.documentElement.dir=n.includes(t)?"rtl":"ltr";const r=de({forcedLanguage:e}),a=new Promise((i,l)=>{setTimeout(()=>{l(new Error("i18n initialization timed out after 5 seconds"))},5e3)});return await Promise.race([r,a]),ue(),document.documentElement.classList.add("i18n-initialized"),!0}catch(e){console.error("Error initializing i18n:",e);try{document.documentElement.setAttribute("lang","en"),document.documentElement.dir="ltr",document.documentElement.classList.add("i18n-failed")}catch(t){console.error("Failed to set fallback language attributes:",t)}return!1}}document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM загружен");try{document.documentElement.classList.add("loading-i18n");const e=await Oe();document.documentElement.classList.remove("loading-i18n"),e||console.warn("Continuing page initialization with failed i18n");const t=[];t.push((async()=>{try{const g=ge();return typeof g=="function"&&A.push(g),!0}catch(g){return console.error("Failed to initialize header:",g),!1}})()),t.push((async()=>{try{const g=me();return typeof g=="function"&&A.push(g),!0}catch(g){return console.error("Failed to initialize mobile menu:",g),!1}})()),t.push((async()=>{try{return Ce(),!0}catch(g){return console.error("Failed to initialize icons:",g),!1}})()),t.push((async()=>{try{const g=$e();return!0}catch(g){return console.error("Failed to check browser compatibility:",g),!1}})()),[{name:"hero",init:he},{name:"about",init:Se},{name:"features",init:xe},{name:"categories",init:Le},{name:"articles",init:ke},{name:"themeToggle",init:_e},{name:"contact",init:Re},{name:"reviews",init:Ie},{name:"products",init:Te},{name:"footer",init:Be},{name:"scrollToTop",init:ie}].forEach(g=>{t.push((async()=>{try{const u=g.init();return typeof u=="function"&&A.push(u),!0}catch(u){return console.error(`Failed to initialize ${g.name}:`,u),!1}})())});const r=await Promise.allSettled(t),a=r.length,i=r.filter(g=>g.status==="fulfilled"&&g.value===!0).length;console.log(`Инициализация завершена: ${i}/${a} компонентов успешно загружены`);const l=performance.now();console.log(`Страница загружена за ${l.toFixed(2)}ms`),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"),window.addEventListener("beforeunload",Fe)}catch(e){console.error("Критическая ошибка при инициализации страницы:",e),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("error")}});window.onerror=function(e,t,n,r,a){return console.error("Глобальная ошибка:",{message:e,source:t,lineno:n,colno:r,error:a}),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",e.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
