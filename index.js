import{i as E}from"./assets/vendor-C77IuWVK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();function X(){console.log("Инициализация кнопки прокрутки вверх и селектора языка");const e={en:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
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
        </svg>`},t=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],o={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},r=document.createElement("div");r.className="corner-buttons-container";const a=document.createElement("div");a.className="language-selector",a.id="corner-language-selector";const i=document.createElement("button");i.className="language-button",i.setAttribute("aria-label","Выбрать язык");const l=document.createElement("div");l.className="language-button__flag",l.id="current-language-flag";const u=document.createElement("div");u.className="language-dropdown",u.id="language-dropdown";const c=document.createElement("button");c.className="scroll-to-top",c.setAttribute("aria-label","Прокрутить вверх страницы"),c.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `,i.appendChild(l),a.appendChild(i),a.appendChild(u),r.appendChild(a),r.appendChild(c),document.body.appendChild(r),S();function g(w,p){let d;return function(){const s=arguments,h=this;d||(w.apply(h,s),d=!0,setTimeout(()=>d=!1,p))}}const f=g(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?c.classList.add("visible"):c.classList.remove("visible")},100);function b(w){w.preventDefault(),c.classList.add("active"),setTimeout(()=>{c.classList.remove("active")},200),window.scrollTo({top:0,behavior:"smooth"})}function S(){try{let d=function(h){try{if(!document.body.contains(l)){console.warn("Current language flag element removed from DOM");return}l.innerHTML=e[h]||""}catch(n){console.error("Error updating language button appearance:",n)}},s=function(){try{if(!document.body.contains(u)){console.warn("Language dropdown removed from DOM");return}u.innerHTML="",t.forEach(h=>{const n=document.createElement("div");n.className=`language-dropdown__item ${h===p?"active":""}`,n.dataset.lang=h;const m=document.createElement("div");m.className="language-dropdown__flag",m.innerHTML=e[h]||"";const v=document.createElement("div");v.className="language-dropdown__name",v.textContent=o[h]||h,n.appendChild(m),n.appendChild(v),u.appendChild(n),n.addEventListener("click",k=>{try{if(!document.body.contains(w)){console.warn("Original language selector removed from DOM");return}if(!document.body.contains(u)){console.warn("Language dropdown removed from DOM");return}w.value=h;try{const x=new Event("change");w.dispatchEvent(x)}catch(x){console.error("Error dispatching change event:",x),typeof w.onchange=="function"&&w.onchange()}a.classList.remove("active"),document.querySelectorAll(".language-dropdown__item").forEach(x=>{x.classList.toggle("active",x.dataset.lang===h)}),d(h)}catch(x){console.error("Error handling language item click:",x)}})})}catch(h){console.error("Error creating language dropdown items:",h)}},w=document.getElementById("language-selector");w||(w=document.createElement("select"),w.id="language-selector",w.style.display="none",document.body.appendChild(w),t.forEach(h=>{const n=document.createElement("option");n.value=h,n.textContent=o[h]||h,w.appendChild(n)}));const p=localStorage.getItem("userLanguage")||"en";w&&(w.value=p),d(p),s(),i.addEventListener("click",function(h){try{if(h.preventDefault(),h.stopPropagation(),!document.body.contains(a)){console.warn("Language selector container removed from DOM");return}a.classList.toggle("active")}catch(n){console.error("Error handling language button click:",n)}}),document.addEventListener("click",h=>{try{if(!document.body.contains(a))return;a.contains(h.target)||a.classList.remove("active")}catch(n){console.error("Error handling document click:",n)}}),window.addEventListener("languageChanged",h=>{try{if(!document.body.contains(u)||!document.body.contains(l)){console.warn("Language elements removed from DOM, skipping update");return}h.detail&&h.detail.language&&(d(h.detail.language),document.querySelectorAll(".language-dropdown__item").forEach(n=>{n.classList.toggle("active",n.dataset.lang===h.detail.language)}))}catch(n){console.error("Error handling language change event:",n)}})}catch(w){console.error("Ошибка при инициализации селектора языка:",w)}}return window.addEventListener("scroll",f,{passive:!0}),c.addEventListener("click",b),f(),function(){console.log("Очистка кнопки прокрутки вверх и селектора языка"),window.removeEventListener("scroll",f),c.removeEventListener("click",b),i.removeEventListener("click",()=>{}),document.querySelectorAll(".language-dropdown__item").forEach(p=>{p.removeEventListener("click",()=>{})}),r&&r.parentNode&&r.parentNode.removeChild(r)}}function ee(e,t){try{const o=sessionStorage.getItem("detectedBrowserLanguage");if(o&&e.includes(o))return console.log("Using cached browser language detection:",o),o;if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array, using default language"),t;console.log("Detecting user language with:",{supportedLanguages:e,defaultLanguage:t});const r=u=>{if(!u)return!1;const c=u.split("-")[0].toLowerCase();return e.includes(c)?c:null},a=localStorage.getItem("userLanguage");console.log("Saved language in localStorage:",a);const i=a&&a.trim()!==""&&r(a);if(i)return console.log("Using saved language preference:",i),i;let l=[];navigator.languages&&navigator.languages.length?l=[...navigator.languages]:navigator.language?l=[navigator.language]:navigator.userLanguage?l=[navigator.userLanguage]:navigator.browserLanguage?l=[navigator.browserLanguage]:navigator.systemLanguage&&(l=[navigator.systemLanguage]),console.log("Browser language preferences:",l);for(const u of l){const c=r(u);if(c)return console.log("Found supported browser language:",c),sessionStorage.setItem("detectedBrowserLanguage",c),c}return console.log("No matching language found, using default:",t),t}catch(o){return console.error("Error in detectUserLanguage:",o),console.error("Stack trace:",o.stack),t}}function W(e){try{if(!Array.isArray(e)||e.length===0)return console.warn("Invalid supportedLanguages array passed to getLanguageFromURL"),null;const t=window.location.pathname,o="/R36S_CONSOLE_STORE_JS/";if(console.log("Current path for language detection:",t),console.log("Base URL for language detection:",o),!t||t==="/")return console.log("Empty path, no language prefix"),null;let r=t;o!=="/"&&t.startsWith(o)&&(r=t.substring(o.length)||"/"),console.log("Path without base for language detection:",r);const a=r.split("/").filter(i=>i.trim()!=="");if(console.log("Path parts for language detection:",a),a.length>0){const i=a[0].toLowerCase();if(e.includes(i))return console.log(`Found language in URL: ${i}`),i}return null}catch(t){return console.error("Error getting language from URL:",t),null}}function Z(e){try{if(!e){console.warn("No language provided to updateLanguageURL");return}if(typeof e!="string"||e.trim()===""){console.warn("Invalid language value provided to updateLanguageURL");return}if(W(["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"])===e){console.log("URL already has the correct language prefix, no update needed");return}console.log("Current localStorage userLanguage before URL update:",localStorage.getItem("userLanguage")),console.log("Before language URL update, current URL:",window.location.href),console.log("Updating URL for language:",e);try{if(e==="en"){const u="/R36S_CONSOLE_STORE_JS/";console.log(`Updating URL to base URL for English: ${u}`),window.history.pushState({},"",u);return}const r=new URL(window.location.href).pathname;if(r.includes(".")&&!r.endsWith("index.html")){console.log("Skipping URL update for resource file");return}const a="/R36S_CONSOLE_STORE_JS/";let l=`${a.endsWith("/")?a:a+"/"}${e}/`;if(console.log("New path with language:",l),l===r){console.log("No URL change needed, paths are identical");return}window.history.pushState({},"",l),console.log("URL updated successfully")}catch(o){console.error("Error updating URL with language:",o)}}catch(t){console.error("Error updating URL with language:",t)}}const R={},O=e=>{try{const o=`${E.language}_${e}`;if(R[o])return R[o];let r=E.t(`hero.pricing.${e}`,{defaultValue:null});return r||(e==="current"?r="$35.48 US":e==="original"?r="US $108.06":e==="discount"&&(r="-68%")),R[o]=r,r}catch(t){return console.error("Error in getLocalizedPrice:",t),""}},N=()=>{for(const e in R)delete R[e]},$={},M=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],te={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},D=["header","hero","mobilemenu"],oe=(e,t)=>`/R36S_CONSOLE_STORE_JS/locales/${e}/${t}.json`,ne=async(e,t)=>{const o=`${e}_${t}`;if($[o])return $[o];const r=2,a=async(i,l,u)=>{if(u>=r)return console.error(`Превышено максимальное количество попыток загрузки ${i}/${l}`),{};try{const c=oe(i,l);console.log(`Загрузка перевода: ${c}`);const g=new AbortController,f=setTimeout(()=>g.abort(),5e3),b=await fetch(c,{cache:"no-store",headers:{"Cache-Control":"no-cache"},signal:g.signal});if(clearTimeout(f),!b.ok)return console.warn(`Не удалось загрузить перевод ${i}/${l}: ${b.status}`),i!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l}`),a("en",l,u+1)):{};const S=await b.json();if(!S||typeof S!="object")throw new Error(`Invalid translation data format for ${i}/${l}`);return $[o]=S,S}catch(c){return c.name==="AbortError"?console.error(`Таймаут загрузки ${i}/${l} переводов`):console.error(`Ошибка загрузки ${i}/${l} переводов:`,c),i!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l} после ошибки`),a("en",l,u+1)):{}}};return a(e,t,0)},P=async e=>{try{let t=0,o=0;const r=await Promise.allSettled(D.map(i=>ne(e,i))),a={};return r.forEach((i,l)=>{if(i.status==="fulfilled"){const u=i.value,c=D[l];u&&Object.keys(u).length>0?(a[c]=u,t++):(console.warn(`Получен пустой или недействительный перевод для секции: ${c}`),o++)}else console.warn(`Не удалось загрузить секцию: ${D[l]}, ошибка:`,i.reason),o++}),console.log(`Загрузка переводов для ${e}: успешно ${t}, не удалось ${o}`),a}catch(t){return console.error(`Ошибка загрузки переводов для ${e}:`,t),{}}},A=()=>{try{const e=document.querySelectorAll("[data-i18n]");if(console.log(`Обновление ${e.length} текстовых элементов`),e.length===0){console.log("Не найдено элементов с атрибутом data-i18n");return}e.forEach(t=>{try{const o=t.getAttribute("data-i18n");if(!o)return;if(o.startsWith("[")){const r=o.match(/^\[(.*)\](.*)$/);if(r){const[,a,i]=r,l=E.t(i);l&&l!==i&&t.setAttribute(a,l)}}else{const r=E.t(o);r&&r!==o?t.hasAttribute("content")?t.setAttribute("content",r):(!t.dataset.originalText&&E.language!=="en"&&(t.dataset.originalText=t.textContent),t.textContent=r):t.dataset.originalText&&E.language==="en"&&(t.textContent=t.dataset.originalText)}}catch(o){console.warn("Ошибка при обновлении элемента:",o,t)}})}catch(e){console.error("Ошибка обновления текстовых элементов:",e)}},T=()=>{try{const t=["ar"].includes(E.language)?"rtl":"ltr";document.documentElement.dir=t,document.documentElement.setAttribute("lang",E.language),t==="rtl"?document.documentElement.classList.add("rtl"):document.documentElement.classList.remove("rtl"),[".header",".footer",".mobile-menu",".hero",".features",".about",".contact","main"].forEach(r=>{const a=document.querySelector(r);a&&(t==="rtl"?a.classList.add("rtl"):a.classList.remove("rtl"))})}catch(e){console.error("Ошибка обновления поддержки RTL:",e)}},q=async()=>{try{const e=[];e.push((async()=>{try{A()}catch(t){console.error("Failed to update text elements:",t)}})()),e.push((async()=>{try{T()}catch(t){console.error("Failed to update RTL support:",t)}})()),await Promise.allSettled(e);try{window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:E.language}}))}catch(t){console.error("Error dispatching languageChanged event:",t)}console.log("Content update completed for language:",E.language)}catch(e){throw console.error("Error in updateAllContent:",e),e}};async function re(e={}){try{console.log("Setting up i18n with options:",e),console.log("Current localStorage userLanguage:",localStorage.getItem("userLanguage")),console.log("Current BASE_URL:","/R36S_CONSOLE_STORE_JS/");const{forcedLanguage:t}=e,o=localStorage.getItem("userLanguage"),r=o&&M.includes(o),a=t||(r?o:null)||ee(M,"en");console.log("Selected user language:",a);let i={};try{i=await P(a),console.log(`Загруженные переводы для ${a}:`,i)}catch(g){console.error(`Ошибка загрузки переводов для ${a}:`,g)}let l=null;if(a!=="en")try{l=await P("en")}catch(g){console.error("Ошибка загрузки запасных переводов:",g)}const u={[a]:{translation:i}};l&&(u.en={translation:l}),await E.init({lng:a,fallbackLng:"en",resources:u,interpolation:{escapeValue:!1},debug:!1,load:"languageOnly",returnNull:!1,returnEmptyString:!1,saveMissing:!1,keySeparator:".",nsSeparator:":",missingKeyHandler:(g,f,b,S)=>{console.warn(`Отсутствует ключ перевода: ${b} для языка ${g} в пространстве ${f}. Используется HTML-текст.`)},parseMissingKeyHandler:g=>null}),localStorage.setItem("userLanguage",a);const c=async g=>{try{console.log("Language changed to:",g),localStorage.setItem("userLanguage",g),Z(g),typeof N=="function"&&N(),await q()}catch(f){console.error("Error in language change handler:",f);try{A(),T()}catch(b){console.error("Failed to update basic content:",b)}}};E.on("languageChanged",c),window.updateContent=async()=>{try{await q()}catch(g){console.error("Error in window.updateContent:",g);try{A(),T()}catch(f){console.error("Failed to recover content update:",f)}}};try{await q()}catch(g){console.error("Error in initial content update:",g);try{A(),T()}catch(f){console.error("Failed to perform basic content update:",f)}}return E}catch(t){console.error("Fatal error in setupI18n:",t);try{E.isInitialized||await E.init({lng:"en",resources:{},interpolation:{escapeValue:!1}})}catch(o){console.error("Failed to create fallback i18next instance:",o)}return E}}function ie(){const e=document.getElementById("language-selector");if(e)try{if(e.childElementCount===0){const o=document.createDocumentFragment();M.forEach(r=>{const a=document.createElement("option");a.value=r,a.textContent=te[r]||r,o.appendChild(a)}),e.appendChild(o)}e.value=E.language;let t=null;e.addEventListener("change",async function(o){o.preventDefault();try{t&&t.abort(),t=new AbortController;const r=t.signal,a=o.target.value;if(console.log(`Language selector changed to: ${a}`),!document.contains(e)){console.log("Language selector no longer in DOM, aborting");return}if(!E.hasResourceBundle(a,"translation"))try{const i=await P(a);if(r.aborted||!document.contains(e)){console.log("Operation aborted or language selector no longer in DOM after loading translations");return}E.addResourceBundle(a,"translation",i,!0,!0)}catch(i){console.error("Error loading translations:",i)}localStorage.setItem("userLanguage",a),await E.changeLanguage(a),document.contains(e)&&!r.aborted&&(Z(a),typeof window.updateContent=="function"&&window.updateContent())}catch(r){console.error("Error changing language:",r),document.contains(e)&&(e.value=E.language)}finally{t=null}})}catch(t){console.error("Error setting up language selector:",t)}}function ae(){let e=!1,t=window.scrollY,o=null;const r=document.querySelector(".header"),a=document.querySelector(".burger-btn"),i=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),u=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function c(){const s=window.scrollY,h=t<s;o&&clearTimeout(o),s>100?S(!h):S(!0),t=s,b(s>0),o=setTimeout(()=>{},150)}function g(){e=!e,f()}function f(){e?(r.classList.add("menu-open"),a.setAttribute("aria-expanded","true"),i.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(r.classList.remove("menu-open"),a.setAttribute("aria-expanded","false"),i.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function b(s){s?r.classList.add("scrolled"):r.classList.remove("scrolled")}function S(s){s?(r.classList.add("visible"),r.classList.remove("hidden")):(r.classList.add("hidden"),r.classList.remove("visible"))}function w(s){s.preventDefault();const h=s.currentTarget.getAttribute("href"),n=h.replace("#",""),m=document.getElementById(n);m&&(S(!0),setTimeout(()=>{r.offsetHeight;const k=m.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:k,behavior:"smooth"}),e&&(e=!1,f()),window.history.replaceState(null,"",`${window.location.pathname}${h}`),setTimeout(()=>{t=window.scrollY},100)},50))}function p(){if(window.location.hash){const s=window.location.hash.replace("#",""),h=document.getElementById(s);h&&setTimeout(()=>{const n=r.offsetHeight,v=h.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:v,behavior:"smooth"})},100)}}function d(s){var h;try{const n=document.querySelector(".header");if(!n){console.log("Header no longer in DOM, skipping language change handling");return}const m=["ar"],v=((h=s==null?void 0:s.detail)==null?void 0:h.language)||E.language;m.includes(v)?n.classList.add("rtl"):n.classList.remove("rtl"),console.log("Language changed in header to:",v),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(y=>{n.classList.remove(`lang-${y}`)}),n.classList.add(`lang-${v}`);const x=n.querySelector("[aria-label]");if(x){const y=E.t("header.aria-label.navigation");y&&y!=="header.aria-label.navigation"&&x.setAttribute("aria-label",y)}}catch(n){console.error("Error handling language change in header:",n)}}return window.addEventListener("scroll",c),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,f())}),window.addEventListener("languageChanged",d),a&&a.addEventListener("click",g),u.forEach(s=>{s.addEventListener("click",w)}),p(),d(),function(){window.removeEventListener("scroll",c),window.removeEventListener("languageChanged",d),window.removeEventListener("resize",()=>{}),a&&a.removeEventListener("click",g),u.forEach(h=>{h.removeEventListener("click",w)})}}function se(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const t=e.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{o()});function o(){e.classList.remove("open");const u=document.querySelector(".burger-line");u&&u.classList.remove("open"),document.body.style.overflow="unset";const c=document.querySelector(".header");c&&c.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}const r=e.querySelectorAll(".mobile-menu__link");r.forEach(u=>{u.addEventListener("click",()=>{setTimeout(()=>{o()},150)})});const a=e.querySelector(".mobile-menu__background");a&&a.addEventListener("click",()=>{o()});function i(){e.querySelectorAll(".mobile-menu__icon").forEach((c,g)=>{c.style.opacity="0",c.style.transform="translateX(-20px)",new MutationObserver(b=>{b.forEach(S=>{S.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{c.style.transition="all 0.4s ease",c.style.opacity="1",c.style.transform="translateX(0)"},100+g*70):(c.style.opacity="0",c.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}function l(u){var c;try{const g=document.querySelector(".mobile-menu");if(!g){console.log("Mobile menu no longer in DOM, skipping language change handling");return}const f=["ar"],b=((c=u==null?void 0:u.detail)==null?void 0:c.language)||E.language;f.includes(b)?(g.classList.add("rtl"),g.querySelectorAll(".mobile-menu__item").forEach(d=>{d.classList.add("rtl")})):(g.classList.remove("rtl"),g.querySelectorAll(".mobile-menu__item").forEach(d=>{d.classList.remove("rtl")})),console.log("Language changed in mobile menu to:",b),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(p=>{g.classList.remove(`lang-${p}`)}),g.classList.add(`lang-${b}`);const w=g.querySelector(".close-button");if(w){const p=E.t("mobilemenu.close");p&&p!=="mobilemenu.close"&&w.setAttribute("aria-label",p)}}catch(g){console.error("Error handling language change in mobile menu:",g)}}return window.addEventListener("languageChanged",l),i(),l(),console.log("Мобильное меню с иконками инициализировано"),function(){t&&t.removeEventListener("click",o),r.forEach(c=>{c.removeEventListener("click",()=>{})}),a&&a.removeEventListener("click",o),window.removeEventListener("languageChanged",l)}}function le(){const e=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),o=document.querySelector(".hero__content"),r=document.querySelector(".hero__description--desktop"),a=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const i=document.getElementById("buy-button"),l=document.getElementById("more-details-button"),u=document.querySelector(".hero__current-price"),c=document.querySelector(".hero__original-price"),g=document.querySelector(".hero__discount-badge");let f=null,b,S;function w(){try{if(!document.body.contains(e)){console.warn("Hero section removed from DOM, skipping price update");return}if(u){const y=O("current");y&&(u.innerHTML=y)}if(c){const y=O("original");y&&(c.textContent=y)}if(g){const y=O("discount");y&&(g.textContent=y)}}catch(y){console.error("Ошибка при обновлении цен:",y)}}function p(){if(!(!t||!e))try{t.onload=()=>{document.body.contains(e)&&e.classList.add("hero--loaded")},t.onerror=()=>{console.error("Не удалось загрузить изображение:",t.src),document.body.contains(e)&&e.classList.add("hero--loaded")},t.complete&&document.body.contains(e)&&e.classList.add("hero--loaded")}catch(y){console.error("Ошибка при настройке изображения в Hero секции:",y)}}function d(){try{if(!r||!a||!document.body.contains(r)||!document.body.contains(a))return;const y=window.innerWidth>992;r.style.display=y?"block":"none",a.style.display=y?"none":"block"}catch(y){console.error("Ошибка при адаптации контента для разных экранов:",y)}}function s(){if(o)try{f&&(f.disconnect(),f=null),f=new IntersectionObserver(y=>{y.forEach(L=>{var _;L.isIntersecting&&((_=L.target)!=null&&_.isConnected)&&(L.target.classList.add("animate-in"),f==null||f.unobserve(L.target))})},{threshold:.1}),o.isConnected&&f.observe(o)}catch(y){console.error("Ошибка при настройке анимации контента:",y)}}function h(){try{i&&i.addEventListener("click",m),l&&l.addEventListener("click",v)}catch(y){console.error("Ошибка при настройке обработчиков кнопок:",y)}}function n(){try{S=y=>{var L;try{if(!document.body.contains(e)){console.warn("Hero section removed from DOM, skipping language change handling");return}console.log("Hero секция получила событие изменения языка:",y.detail),w();const _=["ar"],C=((L=y==null?void 0:y.detail)==null?void 0:L.language)||"en";_.includes(C)?e.classList.add("rtl"):e.classList.remove("rtl")}catch(_){console.error("Error in hero language change handler:",_)}},window.addEventListener("languageChanged",S)}catch(y){console.error("Ошибка при настройке слушателя смены языка:",y)}}function m(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(y){console.error("Ошибка при обработке клика по кнопке Buy:",y)}}function v(y){try{y.preventDefault();const L=document.getElementById("features");if(!L){window.location.hash="features";return}const C=L.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:C,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(L){console.error("Ошибка при обработке клика по кнопке More Details:",L)}}function k(){try{f&&f.disconnect(),clearTimeout(b),window.removeEventListener("resize",x),S&&window.removeEventListener("languageChanged",S),i&&i.removeEventListener("click",m),l&&l.removeEventListener("click",v)}catch(y){console.error("Ошибка при очистке ресурсов Hero секции:",y)}}function x(){clearTimeout(b),b=setTimeout(d,200)}try{p(),d(),s(),h(),n(),w(),window.addEventListener("resize",x)}catch(y){console.error("Ошибка при инициализации Hero секции:",y)}return k}function ce(e){let t=null,o=null,r=!1,a=0,i=null;(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function u(s){s.key==="Escape"&&r&&p()}function c(){const s=document.createElement("div");return s.className="modal-about-overlay",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("tabindex","-1"),s.style.display="none",s.addEventListener("click",p),e.appendChild(s),s}function g(){return o?o.title==="Extensive color selection"&&o.colorImages?`
      <img
        src="${o.colorImages[a]}"
        alt="R36S Color Variant ${a+1}"
        class="modal-about-image"
        loading="lazy"
        width="400" 
        height="400"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
      />
    `:o.videoUrl?o.videoUrl.toString().toLowerCase().endsWith(".mp4")?`
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
          <source src="${o.videoUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${o.videoUrl}"
        alt="${o.imageAlt||"Feature animation"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
      />
    `:o.imageUrl?o.imageUrl.toString().toLowerCase().endsWith(".mp4")?`
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
          <source src="${o.imageUrl}" type="video/mp4" />
        </video>
      </div>
      `:`
      <img
        src="${o.imageUrl}"
        alt="${o.imageAlt||"Feature image"}"
        class="modal-about-image"
        width="400" 
        height="400"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
      />
    `:`
    <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
      ${o.imageAlt||"Feature Image"}
    </div>
  `:""}function f(){(o==null?void 0:o.title)==="Extensive color selection"&&o.colorImages&&(i&&clearInterval(i),i=setInterval(()=>{a=a===o.colorImages.length-1?0:a+1;const s=t.querySelector(".modal-about-image");s&&(s.src=o.colorImages[a],s.alt=`R36S Color Variant ${a+1}`)},1e3))}function b(){if(!t||!o)return;const s={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:o.fullDescription,image:o.imageUrl||(o.colorImages?o.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:o.title}};o.id===1&&(s.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const h=`
        <script type="application/ld+json">
          ${JSON.stringify(s)}
        <\/script>
      `;t.innerHTML=`
        ${h}
        <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
          <meta itemprop="name" content="R36S Handheld Game Console" />
          <meta itemprop="description" content="${o.title} for R36S console" />
          <meta itemprop="sku" content="R36S-${o.id}" />
          <meta itemprop="brand" content="R36S" />
          <meta itemprop="productID" content="R36S-F${o.id}" />
          
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
            <div class="modal-about-icon-wrapper" aria-hidden="true">${o.icon}</div>
            <h3 class="modal-about-title" itemprop="name">${o.title}</h3>
          </div>

          <div class="modal-about-body">
            <div class="modal-about-media-container" itemprop="image">
              ${g()}
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
                ${o.fullDescription}
              </div>
            </div>
          </div>
        </div>
      `;const n=t.querySelector(".modal-about-close");n&&n.addEventListener("click",p);const m=t.querySelector(".modal-about-content");m&&m.addEventListener("click",v=>v.stopPropagation())}function S(s){o=s,t||(t=c()),b();const h=window.location.href,n=new URL(h);return n.searchParams.set("feature",o.id),window.history.pushState({featureId:o.id},"",n),t.style.display="flex",r=!0,t.focus(),window.addEventListener("keydown",u),document.body.style.overflow="hidden",f(),window.addEventListener("popstate",w),{close:p}}function w(s){r&&(!s.state||!s.state.featureId)&&p()}function p(){if(!r||!t)return;r=!1,t.style.display="none",window.removeEventListener("keydown",u),window.removeEventListener("popstate",w),document.body.style.overflow="visible",i&&(clearInterval(i),i=null);const s=new URL(window.location.href);s.searchParams.delete("feature"),window.history.pushState({},"",s)}function d(){p(),t&&e.contains(t)&&e.removeChild(t),t=null,o=null}return{open:S,close:p,destroy:d}}const V="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",Y="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",J="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",K="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",de="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",ue="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",Q="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",ge="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",me="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let j=null;function he(){if(console.log("Начинаем предзагрузку изображений..."),[V,Y,J,K].forEach(t=>{const o=new Image;o.src=t}),"HTMLVideoElement"in window){const t=document.createElement("video");t.preload="metadata",t.src=Q}console.log("Предзагрузка изображений завершена")}function pe(){console.log("Инициализация секции About"),he();const e=document.querySelector(".about__cards");if(!e)return console.error("Контейнер для карточек не найден"),null;let t={x:0,y:0};j||(console.log("Создаем модальное окно..."),j=ce(document.body),console.log("Модальное окно создано"));let o=j;const a=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:V,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:Y,imageAlt:"Display Technologies"},{id:3,icon:`
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
- Full-screen IPS display`,videoUrl:Q,imageAlt:"Battery Life"},{id:4,icon:`
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
- Mesmerizing Purple ...`,colorImages:[J,K,de,ue],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:me,imageAlt:"R36S Settings"},{id:6,icon:`
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
• Quick startup for instant gaming access`,videoUrl:ge,imageAlt:"R36S Portability"}];function i(){console.log("Начинаем рендеринг карточек..."),e.innerHTML="";const p=a.map(s=>`
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
    `).join("");e.innerHTML=p;const d=e.querySelectorAll(".about-card");console.log(`Отрендерено ${d.length} карточек из ${a.length} необходимых`),d.length!==a.length?console.warn(`Ошибка рендеринга: отрендерено ${d.length} карточек вместо ${a.length}`):console.log("Рендеринг карточек успешно завершен")}const l=u(function(p){if(!p||!p.currentTarget)return;const d=p.currentTarget;if(!d||!d.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const s=d.getBoundingClientRect();t={x:p.clientX-s.left,y:p.clientY-s.top},d.style.setProperty("--mouse-x",`${t.x}px`),d.style.setProperty("--mouse-y",`${t.y}px`)}catch(s){console.error("Ошибка при обработке движения мыши:",s)}},16);function u(p,d){let s,h;return function(){const n=this,m=arguments;h?(clearTimeout(s),s=setTimeout(function(){Date.now()-h>=d&&(p.apply(n,m),h=Date.now())},d-(Date.now()-h))):(p.apply(n,m),h=Date.now())}}function c(p){if(!p||!p.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}p.stopPropagation();try{const d=parseInt(p.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",d);const s=a.find(h=>h.id===d);if(!s){console.error("Данные для карточки не найдены");return}o&&o.open(s)}catch(d){console.error("Ошибка при обработке клика по кнопке:",d)}}function g(p,d){let s;return function(){const h=this,n=arguments;clearTimeout(s),s=setTimeout(()=>{p.apply(h,n)},d)}}function f(){console.log("Очистка обработчиков событий карточек...");try{const p=document.querySelectorAll(".about-card");p&&p.length>0&&p.forEach(s=>{s&&(s.removeEventListener("mouseenter",()=>{}),s.removeEventListener("mouseleave",()=>{}),s.removeEventListener("mousemove",l))});const d=document.querySelectorAll(".about-card__button");d&&d.length>0&&d.forEach(s=>{s&&s.removeEventListener("click",c)}),e&&e.removeEventListener("click",()=>{}),console.log("Очистка обработчиков завершена")}catch(p){console.error("Ошибка при очистке обработчиков событий:",p)}}function b(){console.log("Настройка обработчиков событий для карточек...");const p=()=>{console.log("Проверяем наличие карточек для установки обработчиков...");const d=document.querySelectorAll(".about-card");if(!d||d.length===0){console.warn("Не найдены карточки для установки обработчиков событий"),setTimeout(p,200);return}console.log(`Устанавливаем обработчики событий для ${d.length} карточек`);const s=window.matchMedia("(max-width: 768px)").matches;!s&&e&&e.addEventListener("click",function(n){const m=n.target.closest(".about-card");if(m&&!n.target.closest(".about-card__button")){const v=parseInt(m.dataset.id);console.log("Клик по карточке ID:",v);const k=a.find(x=>x.id===v);if(!k){console.error("Данные для карточки не найдены");return}o&&o.open(k)}}),d.forEach(n=>{n&&(n.addEventListener("mouseenter",function(){n&&(parseInt(n.dataset.id),n.classList.add("active"))}),n.addEventListener("mouseleave",function(){n&&n.classList.remove("active")}),n.addEventListener("mousemove",l))});const h=document.querySelectorAll(".about-card__button");h&&h.length>0?(h.forEach(n=>{n&&n.addEventListener("click",c)}),console.log(`Установлены обработчики для ${h.length} кнопок`)):console.warn("Не найдены кнопки карточек"),window.addEventListener("resize",g(()=>{const n=!s,m=!window.matchMedia("(max-width: 768px)").matches;n!==m&&(f(),b())},250)),console.log("Настройка обработчиков событий успешно завершена")};document.readyState==="complete"||document.readyState==="interactive"?setTimeout(p,10):document.addEventListener("DOMContentLoaded",p)}function S(){console.log("Очистка всех обработчиков событий..."),f(),window.removeEventListener("resize",g),o=null,console.log("Очистка обработчиков событий завершена")}function w(){return function(){console.log("Запуск функции очистки секции About"),S()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),i(),console.log("Устанавливаем обработчики событий..."),b(),console.log("Инициализация About завершена успешно"),w()}catch(p){return console.error("Ошибка при инициализации About:",p),null}}function fe(){const e=document.getElementById("features"),t=document.getElementById("featuresVideo"),o=document.getElementById("soundToggleButton"),r=document.getElementById("volumeOffIcon"),a=document.getElementById("volumeOnIcon"),i=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");if(!e){console.warn("Features section not found");return}t&&(t.volume=.5,t.play().catch(c=>{console.log("Автовоспроизведение не удалось:",c)})),i&&i.addEventListener("click",U),l&&l.addEventListener("click",z),o&&o.addEventListener("click",()=>H(t,r,a));const u=()=>{we(e,t,r,a)};return window.addEventListener("scroll",u),function(){i&&i.removeEventListener("click",U),l&&l.removeEventListener("click",z),o&&o.removeEventListener("click",()=>H(t,r,a)),window.removeEventListener("scroll",u),console.log("Features component cleaned up")}}function H(e,t,o){if(e)if(e.muted=!e.muted,e.muted){t.style.display="block",o.style.display="none";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label","Включить звук")}else{e.volume=.5,t.style.display="none",o.style.display="block";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label","Выключить звук")}}function we(e,t,o,r){if(!e||!t||t.muted)return;const a=e.getBoundingClientRect();if(!(a.top<window.innerHeight&&a.bottom>0)){t.muted=!0,o.style.display="block",r.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label","Включить звук")}}function U(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function z(){const e=document.getElementById("features-r36s");if(e){const t=e.getBoundingClientRect().top,o=window.scrollY||window.pageYOffset,r=t+o;window.scrollTo({top:r,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function ve(){try{let p=function(){r&&(r.innerHTML=g?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`)},d=function(){a&&(a.innerHTML=f?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`)},s=function(){if(!(!e||S))if(g)e.pause(),g=!1,p();else{const n=e.play();n!==void 0?n.then(()=>{g=!0,p()}).catch(m=>{console.warn("Не удалось воспроизвести видео:",m),g=!1,p()}):(g=!0,p())}},h=function(){l&&(S=!0,e&&(e.style.display="none"),l.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
          </div>
        </div>
      `)};console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),t=document.getElementById("categories"),o=document.querySelector(".categories__content"),r=document.querySelector(".categories__video-play"),a=document.querySelector(".categories__video-mute"),i=document.querySelector(".categories__video-slider"),l=document.querySelector(".categories__video-container"),u=document.querySelector(".categories__video-time span:first-child"),c=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};if(o&&o.classList.add("animate-in"),!e)return console.error("Видео элемент не найден в DOM"),h(),{};let g=!1,f=!0,b=!1,S=!1;const w=n=>{if(isNaN(n)||n<0)return"0:00";const m=Math.floor(n/60),v=Math.floor(n%60);return`${m}:${v.toString().padStart(2,"0")}`};return e&&(e.muted=!0,e.loop=!0,e.playsInline=!0,e.style.display="block",e.style.visibility="visible",e.style.opacity="1",e.style.width="100%",e.style.borderRadius="24px",l&&(l.style.minHeight="200px"),e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),b=!0,i&&!isNaN(e.duration)&&(i.max=e.duration,c&&(c.textContent=w(e.duration)))}catch(n){console.error("Ошибка при обработке метаданных видео:",n)}}),e.addEventListener("timeupdate",()=>{try{i&&!isNaN(e.currentTime)&&(i.value=e.currentTime,u&&(u.textContent=w(e.currentTime)))}catch(n){console.error("Ошибка при обновлении времени видео:",n)}}),e.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),h()}),setTimeout(()=>{if(e&&!S){const n=e.play();n!==void 0&&n.then(()=>{console.log("Автовоспроизведение видео успешно"),g=!0,p()}).catch(m=>{console.warn("Не удалось автовоспроизвести видео:",m)})}},1e3)),r&&r.addEventListener("click",n=>{n.stopPropagation(),s()}),a&&a.addEventListener("click",n=>{n.stopPropagation(),e&&(f=!f,e.muted=f,d())}),i&&i.addEventListener("input",n=>{if(e)try{const m=parseFloat(n.target.value);isNaN(m)||(e.currentTime=m)}catch(m){console.error("Ошибка при изменении времени видео:",m)}}),l&&l.addEventListener("click",n=>{n.target.closest(".categories__video-controls")||s()}),p(),d(),t.classList.add("initialized"),{togglePlay:s,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}catch(e){console.error("Критическая ошибка в initCategories:",e);const t=document.getElementById("categories");return t&&(t.style.display="block"),{}}}function F(){const e=document.querySelectorAll(".accordion__item");if(e.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${e.length} вопросов`);const t=(r=null)=>{e.forEach(a=>{a!==r&&a.classList.contains("active")&&a.classList.remove("active")})};e.forEach(r=>{const a=r.querySelector(".accordion__header"),i=r.querySelector(".accordion__toggle"),l=r.querySelector(".accordion__content");if(!a||!i||!l){console.warn("FAQ аккордеон: структура элемента неполная",r);return}r===e[0]&&setTimeout(()=>{i.classList.add("pulse"),setTimeout(()=>{i.classList.remove("pulse")},1500)},1e3);const u=b=>{if(b.preventDefault(),b.stopPropagation(),i.classList.add("clicked"),setTimeout(()=>i.classList.remove("clicked"),300),r.classList.contains("active")){r.classList.remove("active");return}t(r),r.classList.add("active");const S=a.getBoundingClientRect();S.top>=10&&S.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+S.top-100,behavior:"smooth"})},100)};a.addEventListener("click",u),i.addEventListener("click",b=>{b.stopPropagation(),u(b)});const c=`faq-question-${Math.random().toString(36).substring(2,9)}`,g=`faq-answer-${Math.random().toString(36).substring(2,9)}`;a.setAttribute("id",c),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls",g),l.setAttribute("id",g),l.setAttribute("aria-labelledby",c),l.setAttribute("role","region"),l.setAttribute("hidden","true"),new MutationObserver(b=>{b.forEach(S=>{if(S.type==="attributes"&&S.attributeName==="class"){const w=r.classList.contains("active");a.setAttribute("aria-expanded",w?"true":"false"),w?l.removeAttribute("hidden"):setTimeout(()=>{r.classList.contains("active")||l.setAttribute("hidden","true")},500)}})}).observe(r,{attributes:!0})});const o=r=>{if(r.key==="Escape"){t();return}const a=document.activeElement.closest(".accordion__item");if(!a)return;const i=Array.from(e),l=i.indexOf(a);if(l===-1)return;let u;switch(r.key){case"ArrowDown":u=(l+1)%i.length;break;case"ArrowUp":u=(l-1+i.length)%i.length;break;case"Home":u=0;break;case"End":u=i.length-1;break;default:return}const c=i[u].querySelector(".accordion__header");c&&(c.focus(),r.preventDefault())};return document.addEventListener("keydown",o),console.log("FAQ аккордеон успешно инициализирован"),{openItem:r=>{r>=0&&r<e.length&&(t(e[r]),e[r].classList.add("active"))},closeAll:()=>t()}}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=F()}),window.initFaqAccordion=F);function ye(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const i=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!i){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}i.id||(i.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",i)}console.log("Инициализация секции Articles с SEO-оптимизацией");const t=[{id:1,title:"R36S Retro Gaming",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],o=e.querySelector(".articles__grid");if(!o){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const i=document.createElement("meta");i.name="description",i.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(i)}if(!document.querySelector('meta[name="keywords"]')){const i=document.createElement("meta");i.name="keywords",i.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(i)}})(),t.forEach(i=>{const l=document.createElement("article");l.className="article",l.id=`article-${i.id}`,l.dataset.articleId=i.id,l.setAttribute("itemscope",""),l.setAttribute("itemtype","http://schema.org/Article");const u=document.createElement("h2");u.className="article__title",u.setAttribute("itemprop","headline"),u.innerHTML=i.title,l.appendChild(u);const c=document.createElement("div");c.className="article__content-wrapper",c.setAttribute("itemprop","articleBody"),i.sections.forEach((w,p)=>{const d=document.createElement("section");if(d.className="article__section",d.id=`section-${i.id}-${p}`,p!==0||w.subtitle!==i.title){const h=document.createElement("h3");h.className="article__subtitle",h.innerHTML=w.subtitle,d.appendChild(h)}const s=document.createElement("div");s.className="article__content",s.innerHTML=w.content,d.appendChild(s),c.appendChild(d)}),l.appendChild(c);const g=document.createElement("script");g.type="application/ld+json";const f={"@context":"https://schema.org","@type":"Article",headline:i.title,description:i.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};g.textContent=JSON.stringify(f),l.appendChild(g);const b=document.createElement("footer");b.className="article__footer";const S=document.createElement("a");S.href="https://www.aliexpress.com/item/1005007171465465.html",S.className="article__cta",S.textContent="Order R36S Now",S.setAttribute("itemprop","url"),S.setAttribute("title","Order R36S Gaming Console"),S.setAttribute("rel","nofollow"),S.setAttribute("target","_blank"),b.appendChild(S),l.appendChild(b),o.appendChild(l)}),(()=>{const i=document.createElement("h1");i.className="articles__heading",i.textContent="R36S Gaming Console - Official Information",e.querySelector(".articles__container").insertBefore(i,e.querySelector(".articles__grid"))})(),setTimeout(()=>{F()},500),setTimeout(()=>{console.log("Проверка наличия элементов аккордеона перед инициализацией:");const i=document.querySelectorAll(".accordion__item");console.log(`Найдено ${i.length} элементов аккордеона`),console.log("Первый элемент аккордеона:",i[0]),i.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",i[0].querySelector(".accordion__header")),console.log("- Кнопка:",i[0].querySelector(".accordion__toggle")),console.log("- Контент:",i[0].querySelector(".accordion__content"))),console.log("Вызываем initFaqAccordion...");const l=F();console.log("Результат инициализации:",l?"успешно":"ошибка")},1e3),console.log("Инициализация секции Articles завершена успешно")}function be(){if(console.log("Инициализация переключателей яркости текста в блоках - НАЧАЛО"),window._themeToggleInitialized)return console.warn("Обнаружена повторная инициализация переключателей яркости. Пропускаем..."),window._themeToggleCleanup;window._themeToggleInitialized=!0;const e=document.getElementById("articles")||document.querySelector(".articles"),t=document.getElementById("official-website")||document.querySelector(".official-website"),o=document.getElementById("retro-gaming")||document.querySelector(".retro-gaming");if(!e&&!t&&!o){console.error("Секции для добавления переключателей яркости текста не найдены");return}const r=[];function a(c,g){if(!c)return;console.log(`Добавление переключателей в секцию ${c.id||c.className}`);const f=c.querySelectorAll(".article");console.log(`Найдено ${f.length} блоков для добавления переключателей в секции ${c.id||c.className}`),f.forEach((b,S)=>{const w=g!==void 0?g:S%3;if(b.querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label")){console.warn(`Блок #${S} уже содержит кнопку переключения. Пропускаем создание.`);return}const d=document.createElement("button");switch(d.setAttribute("type","button"),w){case 0:d.className="brightness-toggle",d.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const s=b.querySelector(".article__title");if(s){const m=document.createElement("div");m.className="article__title-container";const v=s.cloneNode(!0);m.appendChild(v),m.appendChild(d),s.parentNode.replaceChild(m,s)}else b.insertBefore(d,b.firstChild);break;case 1:d.className="brightness-toggle",d.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const h=b.querySelector(".article__title");if(h){const m=document.createElement("div");m.className="article__title-container";const v=h.cloneNode(!0);m.appendChild(v),m.appendChild(d),h.parentNode.replaceChild(m,h)}else b.insertBefore(d,b.firstChild);break;case 2:d.className="brightness-toggle-with-label",d.innerHTML=`
            <span class="brightness-toggle-label">Ярче</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const n=b.querySelector(".article__title");if(n){const m=document.createElement("div");m.className="article__title-container";const v=n.cloneNode(!0);m.appendChild(v),m.appendChild(d),n.parentNode.replaceChild(m,n)}else b.insertBefore(d,b.firstChild);break}r.push(d)})}e&&a(e);let i;if(o){const c=o.querySelectorAll(".article");if(c.length>0){const g=c[0].querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label");g&&(g.classList.contains("brightness-toggle-corner")?i=1:g.classList.contains("brightness-toggle-with-label")?i=2:i=0,console.log(`Обнаружен стиль кнопки в секции R36S Retro Gaming: ${i}`))}}t&&a(t,i!==void 0?i:1),console.log(`Создано ${r.length} кнопок переключения`),r.forEach(c=>{const g=c.cloneNode(!0);c.parentNode&&c.parentNode.replaceChild(g,c);const f=r.indexOf(c);f!==-1&&(r[f]=g)}),r.forEach(c=>{const g=c.closest(".article");if(!g){console.error("Не найден родительский блок .article для кнопки переключения");return}c.addEventListener("click",function(w){if(w.preventDefault(),w.stopPropagation(),console.log("Клик по кнопке переключения яркости"),console.log("Состояние до переключения:",g.classList.contains("bright-text")?"яркий":"обычный"),g.classList.toggle("bright-text"),c.classList.toggle("active"),console.log("Состояние после переключения:",g.classList.contains("bright-text")?"яркий":"обычный"),c.classList.contains("brightness-toggle-with-label")){const h=c.querySelector(".brightness-toggle-label");h&&(h.textContent=g.classList.contains("bright-text")?"Тусклее":"Ярче",console.log("Изменен текст лейбла на:",h.textContent))}const p=g.getAttribute("data-article-id")||g.id||Array.from(g.closest("section").querySelectorAll(".article")).indexOf(g),d=g.closest("section")?g.closest("section").id||g.closest("section").className.split(" ")[0]:"unknown",s=g.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-${d}-article-brightness-${p}`,s),console.log(`Яркость текста в блоке ${p} секции ${d} изменена на: ${s}`)});const f=g.getAttribute("data-article-id")||g.id||Array.from(g.closest("section").querySelectorAll(".article")).indexOf(g),b=g.closest("section")?g.closest("section").id||g.closest("section").className.split(" ")[0]:"unknown";if(localStorage.getItem(`r36s-${b}-article-brightness-${f}`)==="bright"){if(g.classList.add("bright-text"),c.classList.add("active"),c.classList.contains("brightness-toggle-with-label")){const w=c.querySelector(".brightness-toggle-label");w&&(w.textContent="Тусклее")}console.log(`Восстановлено состояние для блока ${f} в секции ${b}: яркий`)}else console.log(`Блок ${f} в секции ${b} в обычном режиме`)});const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l);const u=function(){r.forEach(c=>{if(c&&c.parentNode){const g=c.closest(".article__title-container");if(g){const f=g.querySelector(".article__title");f&&g.parentNode&&g.parentNode.replaceChild(f,g)}else c.parentNode.removeChild(c)}}),l&&l.parentNode&&l.parentNode.removeChild(l),window._themeToggleInitialized=!1,console.log("Очистка переключателей яркости выполнена")};return window._themeToggleCleanup=u,console.log("Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА"),u}const G={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function B(e,t=24){return G[e]?G[e].replace(/width="24"/,`width="${t}"`).replace(/height="24"/,`height="${t}"`):(console.error(`Icon "${e}" not found`),"")}function Se(){document.querySelectorAll("[data-icon]").forEach(t=>{const o=t.getAttribute("data-icon"),r=parseInt(t.getAttribute("data-size")||"24",10);o&&(t.innerHTML=B(o,r))})}function xe(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),t=document.getElementById("name"),o=document.getElementById("email"),r=document.getElementById("phone"),a=document.getElementById("message"),i=document.querySelector(".form__button"),l=document.createElement("div");l.className="form__error",l.style.display="none",l.innerHTML=`
    <div class="form__error-icon">${B("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(l,e.firstChild);const u={name:"",email:"",phone:"",message:""};function c(w){l.querySelector("span").textContent=w,l.style.display="flex"}function g(){l.style.display="none"}function f(w){const{name:p,value:d}=w.target;u[p]=d,g()}t.addEventListener("input",f),o.addEventListener("input",f),r.addEventListener("input",f),a.addEventListener("input",f);async function b(w){w.preventDefault(),S(!0);try{if(!u.name||!u.email||!u.phone||!u.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(u.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(h=>setTimeout(h,1e3)),t.value="",o.value="",r.value="",a.value="",Object.keys(u).forEach(h=>{u[h]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(d){c(d.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",d)}finally{S(!1)}}function S(w){[t,o,r,a].forEach(d=>{d.disabled=w}),i.disabled=w,i.innerHTML=w?`<span class="button__icon">${B("loader",20)}</span> Sending...`:`<span class="button__icon">${B("send",20)}</span> Send message`}return e.addEventListener("submit",b),function(){t.removeEventListener("input",f),o.removeEventListener("input",f),r.removeEventListener("input",f),a.removeEventListener("input",f),e.removeEventListener("submit",b)}}function Ee(){const e="/R36S_STORE_JS/",o={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},r=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:o.review1.webp,jpeg:o.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:o.review4.webp,jpeg:o.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:o.review3.webp,jpeg:o.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:o.review2.webp,jpeg:o.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],a=new Set;let i=null,l=window.innerWidth<=1200;function u(n=!1){const m=document.createElementNS("http://www.w3.org/2000/svg","svg");m.classList.add("review-card__star"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill",n?"currentColor":"none"),m.setAttribute("stroke","currentColor"),m.setAttribute("stroke-width","2");const v=document.createElementNS("http://www.w3.org/2000/svg","polygon");return v.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),m.appendChild(v),m}function c(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("review-card__verified"),n.setAttribute("width","16"),n.setAttribute("height","16"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2");const m=document.createElementNS("http://www.w3.org/2000/svg","path");return m.setAttribute("d","M20 6L9 17l-5-5"),n.appendChild(m),n}function g(n){const m=document.getElementById("reviewCardTemplate");if(!m)return console.error("Шаблон карточки отзыва не найден"),null;const v=m.content.cloneNode(!0).querySelector(".review-card");v.dataset.id=n.id,n.mobileOnly&&(v.classList.add("mobile-only"),l||(v.style.display="none"));const k=v.querySelector(".review-card__rating");for(let C=0;C<5;C++)k.appendChild(u(C<n.rating));v.querySelector(".review-card__variant").textContent=n.color,v.querySelector(".review-card__text").textContent=n.text;const x=v.querySelector("picture");x.querySelector("source").setAttribute("srcset",n.images.webp);const y=x.querySelector("img");y.setAttribute("src",n.images.jpeg),y.setAttribute("alt",`Review ${n.id}`);const L=v.querySelector(".review-card__name");n.verified&&L.prepend(c()),L.appendChild(document.createTextNode(n.author)),v.querySelector(".review-card__date").textContent=n.date,v.querySelector(".review-card__helpful-count").textContent=`Helpful (${n.helpful})`,v.addEventListener("click",f),v.addEventListener("mouseenter",()=>b(n.id)),v.addEventListener("mouseleave",S);const _=v.querySelector(".review-card__helpful");return _.addEventListener("mouseenter",()=>{_.querySelector("svg").setAttribute("fill","currentColor"),_.querySelector("svg").classList.add("scale-125"),_.querySelector("svg").classList.remove("scale-100")}),_.addEventListener("mouseleave",()=>{_.querySelector("svg").setAttribute("fill","none"),_.querySelector("svg").classList.remove("scale-125"),_.querySelector("svg").classList.add("scale-100")}),v}function f(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function b(n){i=n;const m=document.querySelector(`.review-card[data-id="${n}"]`);if(m){const v=m.querySelector(".review-card__arrow-wrapper");v&&(v.style.display="flex")}}function S(){const n=document.querySelector(`.review-card[data-id="${i}"]`);if(n){const m=n.querySelector(".review-card__arrow-wrapper");m&&(m.style.display="none")}i=null}function w(){const n=document.getElementById("reviewsGrid");if(!n){console.error("Контейнер для отзывов не найден");return}const m=document.getElementById("reviewCardTemplate"),v={};n.querySelectorAll(".review-card").forEach(y=>{y.dataset.id&&(v[y.dataset.id]=y)});const k=r.filter(y=>!y.mobileOnly||y.mobileOnly&&l),x=[];k.forEach(y=>{if(v[y.id]){const L=v[y.id];L.style.display="block",x.push(L),delete v[y.id]}else{const L=g(y);L&&x.push(L)}}),Object.values(v).forEach(y=>{y!==m&&(y.style.display="none")}),n.innerHTML="",n.appendChild(m),x.forEach(y=>{n.appendChild(y)}),p()}function p(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(m=>{m.classList.add("animate-in")});return}const n=new IntersectionObserver(m=>{m.forEach(v=>{if(v.isIntersecting){const k=v.target.dataset.id;a.has(k)||(v.target.classList.add("animate-in"),a.add(k))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(m=>{n.observe(m)})}function d(){l=window.innerWidth<=1200,w(),document.querySelectorAll(".review-card").forEach(m=>{m.classList.contains("mobile-only")&&(m.style.display=l?"block":"none")})}function s(){w();let n;const m=()=>{clearTimeout(n),n=setTimeout(d,250)};window.addEventListener("resize",m);const v=document.createElement("style");v.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(v),setTimeout(d,100);const k=document.getElementById("reviews");if(k&&!k.hasAttribute("itemscope")){k.setAttribute("itemscope",""),k.setAttribute("itemtype","http://schema.org/Product");const x=document.createElement("meta");x.setAttribute("itemprop","name"),x.setAttribute("content","R36S Handheld Game Console"),k.prepend(x);const y=document.createElement("meta");y.setAttribute("itemprop","description"),y.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),k.prepend(y)}}s();function h(){if(window.removeEventListener("resize",d),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const n=[];new IntersectionObserver(()=>{}).disconnect(),n.forEach(v=>v.disconnect())}document.querySelectorAll(".review-card").forEach(n=>{n.removeEventListener("click",f),n.removeEventListener("mouseenter",()=>{}),n.removeEventListener("mouseleave",S),Object.keys(r).forEach(v=>{n.removeEventListener("mouseenter",()=>b(v))});const m=n.querySelector(".review-card__helpful");m&&(m.removeEventListener("mouseenter",()=>{}),m.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:h,renderReviewCards:w}}const ke={};function Le(){console.log("Products секция инициализирована");const t=!ke?"/":"/R36S_STORE_JS/",o={i0_0:{jpg:`${t}img/products/i_0_0x.jpg`,webp:`${t}img/products/i_0_0x.webp`},i1:{jpg:`${t}img/products/i_1_1x.jpg`,webp:`${t}img/products/i_1_1x.webp`},i2:{jpg:`${t}img/products/i_2_1x.jpg`,webp:`${t}img/products/i_2_1x.webp`},i3:{jpg:`${t}img/products/i_3_1x.jpg`,webp:`${t}img/products/i_3_1x.webp`},i4:{jpg:`${t}img/products/i_4_1x.jpg`,webp:`${t}img/products/i_4_1x.webp`},i5:{jpg:`${t}img/products/i_5_1x.jpg`,webp:`${t}img/products/i_5_1x.webp`},i6:{jpg:`${t}img/products/i_6_1x.jpg`,webp:`${t}img/products/i_6_1x.webp`},i7:{jpg:`${t}img/products/i_7_1x.jpg`,webp:`${t}img/products/i_7_1x.webp`},i8:{jpg:`${t}img/products/i_8_1x.jpg`,webp:`${t}img/products/i_8_1x.webp`},i9:{jpg:`${t}img/products/i_9_1x.jpg`,webp:`${t}img/products/i_9_1x.webp`}},r=[{id:"getting-started",title:"Start Guide",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,images:{jpg:o.i0_0.jpg,webp:o.i0_0.webp}}},{id:"original-backup",title:"Backup Original",content:{text:"This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.",subsections:[{id:"backup-procedure",title:"Backup Using Win32DiskImager",content:{text:`1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,images:{jpg:o.i1.jpg,webp:o.i1.webp}}}]}},{id:"custom-installation",title:"Install Custom",content:{text:`As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,subsections:[{id:"method-balena",title:"Option 1: Balena Etcher Method",content:{text:`While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,images:{jpg:o.i2.jpg,webp:o.i2.webp}}},{id:"method-win32",title:"Option 2: Win32DiskImager Method",content:{text:`1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,images:{jpg:o.i3.jpg,webp:o.i3.webp}}},{id:"method-raspberry",title:"Option 3: Raspberry Pi Imager",content:{text:`1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,images:{jpg:o.i4.jpg,webp:o.i4.webp}}}]}},{id:"firmware-options",title:"Firmware Options",content:{text:"Several custom firmware options are available for the R36S. Here are the most popular choices:",subsections:[{id:"option-arkos",title:"ArkOS - Community Enhanced Edition",content:{text:`GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,images:{jpg:o.i5.jpg,webp:o.i5.webp}}},{id:"option-rocknix",title:"ROCKNIX Operating System",content:{text:`GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,images:{jpg:o.i6.jpg,webp:o.i6.webp}}},{id:"option-amber",title:"AmberELEC System",content:{text:`GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,images:{jpg:o.i7.jpg,webp:o.i7.webp}}}]}},{id:"game-setup",title:"Add Files",content:{text:`1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,images:{jpg:o.i8.jpg,webp:o.i8.webp}}},{id:"helpful-tips",title:"Usage Tips",content:{text:`• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,images:{jpg:o.i9.jpg,webp:o.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let a="downloads",i=!1;const l=document.getElementById("products-nav-list"),u=document.getElementById("products-sections"),c=document.getElementById("products-nav");function g(){i=window.innerWidth<=1024,c&&(i?c.classList.add("nav-mobile"):c.classList.remove("nav-mobile"))}function f(d){a=d,document.querySelectorAll(".nav-item").forEach(n=>{n.dataset.sectionId===d?n.classList.add("nav-item-active"):n.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(n=>{n.id===d?n.classList.add("section-active"):n.classList.remove("section-active")}),setTimeout(()=>{const n=document.getElementById(d);if(n){const m=i?80:20,k=n.getBoundingClientRect().top+window.pageYOffset-m;window.scrollTo({top:k,behavior:"smooth"})}},100)}function b(){l.innerHTML="",r.forEach(d=>{const s=document.createElement("button");s.className=`nav-item ${a===d.id?"nav-item-active":""}`,s.dataset.sectionId=d.id,s.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${d.title}</span>
      `,s.addEventListener("click",()=>f(d.id)),l.appendChild(s)})}function S(d){if(d.id==="downloads"){let n='<div class="download-list">';return d.content.downloads.forEach(m=>{n+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${m.file}</div>
                <div class="download-meta">Update: ${m.date} • ${m.version}</div>
              </div>
            </div>
            <a href="${m.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),n+="</div>",n}let s='<div class="section-content"><div class="text-content">';return d.content.text.split(`
`).forEach(n=>{s+=`<p>${n.trim()}</p>`}),s+="</div>",d.content.images&&(s+=`
        <div class="image-container">
          <picture>
            <source srcset="${d.content.images.webp}" type="image/webp">
            <img src="${d.content.images.jpg}" alt="${d.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),d.content.subsections&&(s+='<div class="subsections">',d.content.subsections.forEach(n=>{s+=`
          <div class="subsection">
            <h3 class="subsection-title">${n.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,n.content.text.split(`
`).forEach(v=>{s+=`<p>${v.trim()}</p>`}),s+="</div>",n.content.images&&(s+=`
            <div class="image-container">
              <picture>
                <source srcset="${n.content.images.webp}" type="image/webp">
                <img src="${n.content.images.jpg}" alt="${n.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),s+="</div></div>"}),s+="</div>"),s+="</div>",s}function w(){u.innerHTML="",r.forEach(d=>{const s=document.createElement("section");s.id=d.id,s.className=`section ${a===d.id?"section-active":""}`,s.innerHTML=`
        <h2 class="section-title">${d.title}</h2>
        ${S(d)}
      `,u.appendChild(s)})}function p(){g(),b(),w(),window.addEventListener("resize",g),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return l&&u&&c?p():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:f,checkMobile:g}}function _e(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const t=e.querySelector(".partnership-button");t&&t.addEventListener("click",()=>{const o=document.querySelector(".partnership-modal-overlay");if(o){o.classList.add("active");const r=o.querySelector(".partnership-modal-content");r&&r.classList.add("active"),document.body.style.overflow="hidden"}}),Ce()}function Ce(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const t=e.querySelector(".partnership-modal-close");t&&t.addEventListener("click",o),e.addEventListener("click",r=>{r.target===e&&o()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("active")&&o()});function o(){const r=e.querySelector(".partnership-modal-content");e.classList.remove("active"),r&&r.classList.remove("active"),document.body.style.overflow=""}}console.log("Main.js инициализирован");let I=[];function Re(){const e="IntersectionObserver"in window,t=function(){const r=document.createElement("div");return r.style.display="flex",r.style.display==="flex"}(),o=function(){const r=document.createElement("div");return r.style.display="grid",r.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",t),console.log("- CSS Grid:",o),e||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),o||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:t,hasGrid:o}}function Ie(){try{I.forEach(e=>{typeof e=="function"&&e()}),I=[]}catch(e){console.warn("Error during global cleanup:",e)}}async function Ae(){try{const e=W(M);console.log("Language from URL:",e);const t=localStorage.getItem("userLanguage")||e||"en",o=["ar"];document.documentElement.setAttribute("lang",t),document.documentElement.dir=o.includes(t)?"rtl":"ltr";const r=re({forcedLanguage:e}),a=new Promise((i,l)=>{setTimeout(()=>{l(new Error("i18n initialization timed out after 5 seconds"))},5e3)});return await Promise.race([r,a]),ie(),document.documentElement.classList.add("i18n-initialized"),!0}catch(e){console.error("Error initializing i18n:",e);try{document.documentElement.setAttribute("lang","en"),document.documentElement.dir="ltr",document.documentElement.classList.add("i18n-failed")}catch(t){console.error("Failed to set fallback language attributes:",t)}return!1}}document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM загружен");try{document.documentElement.classList.add("loading-i18n");const e=await Ae();document.documentElement.classList.remove("loading-i18n"),e||console.warn("Continuing page initialization with failed i18n");const t=[];t.push((async()=>{try{const u=ae();return typeof u=="function"&&I.push(u),!0}catch(u){return console.error("Failed to initialize header:",u),!1}})()),t.push((async()=>{try{const u=se();return typeof u=="function"&&I.push(u),!0}catch(u){return console.error("Failed to initialize mobile menu:",u),!1}})()),t.push((async()=>{try{return Se(),!0}catch(u){return console.error("Failed to initialize icons:",u),!1}})()),t.push((async()=>{try{const u=Re();return!0}catch(u){return console.error("Failed to check browser compatibility:",u),!1}})()),[{name:"hero",init:le},{name:"about",init:pe},{name:"features",init:fe},{name:"categories",init:ve},{name:"articles",init:ye},{name:"themeToggle",init:be},{name:"contact",init:xe},{name:"reviews",init:Ee},{name:"products",init:Le},{name:"footer",init:_e},{name:"scrollToTop",init:X}].forEach(u=>{t.push((async()=>{try{const c=u.init();return typeof c=="function"&&I.push(c),!0}catch(c){return console.error(`Failed to initialize ${u.name}:`,c),!1}})())});const r=await Promise.allSettled(t),a=r.length,i=r.filter(u=>u.status==="fulfilled"&&u.value===!0).length;console.log(`Инициализация завершена: ${i}/${a} компонентов успешно загружены`);const l=performance.now();console.log(`Страница загружена за ${l.toFixed(2)}ms`),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"),window.addEventListener("beforeunload",Ie)}catch(e){console.error("Критическая ошибка при инициализации страницы:",e),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("error")}});window.onerror=function(e,t,o,r,a){return console.error("Глобальная ошибка:",{message:e,source:t,lineno:o,colno:r,error:a}),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",e.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
