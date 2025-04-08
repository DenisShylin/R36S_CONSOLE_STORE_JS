import{i as L}from"./assets/vendor-C77IuWVK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const l of p.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=e(d);fetch(d.href,p)}})();function le(){console.log("Инициализация кнопки прокрутки вверх и селектора языка");const t={en:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
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
        </svg>`},o=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],e={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},r=document.createElement("div");r.className="corner-buttons-container";const d=document.createElement("div");d.className="language-selector",d.id="corner-language-selector";const p=document.createElement("button");p.className="language-button",p.setAttribute("aria-label","Выбрать язык");const l=document.createElement("div");l.className="language-button__flag",l.id="current-language-flag";const m=document.createElement("div");m.className="language-dropdown",m.id="language-dropdown";const s=document.createElement("button");s.className="scroll-to-top",s.setAttribute("aria-label","Прокрутить вверх страницы"),s.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `,p.appendChild(l),d.appendChild(p),d.appendChild(m),r.appendChild(d),r.appendChild(s),document.body.appendChild(r),b();function u(w,E){let y;return function(){const S=arguments,c=this;y||(w.apply(c,S),y=!0,setTimeout(()=>y=!1,E))}}const i=u(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?s.classList.add("visible"):s.classList.remove("visible")},100);function f(w){w.preventDefault(),s.classList.add("active"),setTimeout(()=>{s.classList.remove("active")},200),window.scrollTo({top:0,behavior:"smooth"})}function b(){try{let y=function(c){try{if(!document.body.contains(l)){console.warn("Current language flag element removed from DOM");return}l.innerHTML=t[c]||""}catch(n){console.error("Error updating language button appearance:",n)}},S=function(){try{if(!document.body.contains(m)){console.warn("Language dropdown removed from DOM");return}m.innerHTML="",o.forEach(c=>{const n=document.createElement("div");n.className=`language-dropdown__item ${c===E?"active":""}`,n.dataset.lang=c;const g=document.createElement("div");g.className="language-dropdown__flag",g.innerHTML=t[c]||"";const a=document.createElement("div");a.className="language-dropdown__name",a.textContent=e[c]||c,n.appendChild(g),n.appendChild(a),m.appendChild(n),n.addEventListener("click",h=>{try{if(!document.body.contains(w)){console.warn("Original language selector removed from DOM");return}if(!document.body.contains(m)){console.warn("Language dropdown removed from DOM");return}w.value=c;try{const x=new Event("change");w.dispatchEvent(x)}catch(x){console.error("Error dispatching change event:",x),typeof w.onchange=="function"&&w.onchange()}d.classList.remove("active"),document.querySelectorAll(".language-dropdown__item").forEach(x=>{x.classList.toggle("active",x.dataset.lang===c)}),y(c)}catch(x){console.error("Error handling language item click:",x)}})})}catch(c){console.error("Error creating language dropdown items:",c)}},w=document.getElementById("language-selector");w||(w=document.createElement("select"),w.id="language-selector",w.style.display="none",document.body.appendChild(w),o.forEach(c=>{const n=document.createElement("option");n.value=c,n.textContent=e[c]||c,w.appendChild(n)}));const E=localStorage.getItem("userLanguage")||"en";w&&(w.value=E),y(E),S(),p.addEventListener("click",function(c){try{if(c.preventDefault(),c.stopPropagation(),!document.body.contains(d)){console.warn("Language selector container removed from DOM");return}d.classList.toggle("active")}catch(n){console.error("Error handling language button click:",n)}}),document.addEventListener("click",c=>{try{if(!document.body.contains(d))return;d.contains(c.target)||d.classList.remove("active")}catch(n){console.error("Error handling document click:",n)}}),window.addEventListener("languageChanged",c=>{try{if(!document.body.contains(m)||!document.body.contains(l)){console.warn("Language elements removed from DOM, skipping update");return}c.detail&&c.detail.language&&(y(c.detail.language),document.querySelectorAll(".language-dropdown__item").forEach(n=>{n.classList.toggle("active",n.dataset.lang===c.detail.language)}))}catch(n){console.error("Error handling language change event:",n)}})}catch(w){console.error("Ошибка при инициализации селектора языка:",w)}}return window.addEventListener("scroll",i,{passive:!0}),s.addEventListener("click",f),i(),function(){console.log("Очистка кнопки прокрутки вверх и селектора языка"),window.removeEventListener("scroll",i),s.removeEventListener("click",f),p.removeEventListener("click",()=>{}),document.querySelectorAll(".language-dropdown__item").forEach(E=>{E.removeEventListener("click",()=>{})}),r&&r.parentNode&&r.parentNode.removeChild(r)}}function ce(t,o){try{const e=sessionStorage.getItem("detectedBrowserLanguage");if(e&&t.includes(e))return console.log("Using cached browser language detection:",e),e;if(!Array.isArray(t)||t.length===0)return console.warn("Invalid supportedLanguages array, using default language"),o;console.log("Detecting user language with:",{supportedLanguages:t,defaultLanguage:o});const r=m=>{if(!m)return!1;const s=m.split("-")[0].toLowerCase();return t.includes(s)?s:null},d=localStorage.getItem("userLanguage");console.log("Saved language in localStorage:",d);const p=d&&d.trim()!==""&&r(d);if(p)return console.log("Using saved language preference:",p),p;let l=[];navigator.languages&&navigator.languages.length?l=[...navigator.languages]:navigator.language?l=[navigator.language]:navigator.userLanguage?l=[navigator.userLanguage]:navigator.browserLanguage?l=[navigator.browserLanguage]:navigator.systemLanguage&&(l=[navigator.systemLanguage]),console.log("Browser language preferences:",l);for(const m of l){const s=r(m);if(s)return console.log("Found supported browser language:",s),sessionStorage.setItem("detectedBrowserLanguage",s),s}return console.log("No matching language found, using default:",o),o}catch(e){return console.error("Error in detectUserLanguage:",e),console.error("Stack trace:",e.stack),o}}function J(t){try{if(!Array.isArray(t)||t.length===0)return console.warn("Invalid supportedLanguages array passed to getLanguageFromURL"),null;const o=window.location.pathname,e="/R36S_CONSOLE_STORE_JS/";if(console.log("Current path for language detection:",o),console.log("Base URL for language detection:",e),!o||o==="/")return console.log("Empty path, no language prefix"),null;let r=o;e!=="/"&&o.startsWith(e)&&(r=o.substring(e.length)||"/"),console.log("Path without base for language detection:",r);const d=r.split("/").filter(p=>p.trim()!=="");if(console.log("Path parts for language detection:",d),d.length>0){const p=d[0].toLowerCase();if(t.includes(p))return console.log(`Found language in URL: ${p}`),p}return null}catch(o){return console.error("Error getting language from URL:",o),null}}function Q(t){try{if(!t){console.warn("No language provided to updateLanguageURL");return}if(typeof t!="string"||t.trim()===""){console.warn("Invalid language value provided to updateLanguageURL");return}if(J(["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"])===t){console.log("URL already has the correct language prefix, no update needed");return}console.log("Current localStorage userLanguage before URL update:",localStorage.getItem("userLanguage")),console.log("Before language URL update, current URL:",window.location.href),console.log("Updating URL for language:",t);try{if(t==="en"){const m="/R36S_CONSOLE_STORE_JS/";console.log(`Updating URL to base URL for English: ${m}`),window.history.pushState({},"",m);return}const r=new URL(window.location.href).pathname;if(r.includes(".")&&!r.endsWith("index.html")){console.log("Skipping URL update for resource file");return}const d="/R36S_CONSOLE_STORE_JS/";let l=`${d.endsWith("/")?d:d+"/"}${t}/`;if(console.log("New path with language:",l),l===r){console.log("No URL change needed, paths are identical");return}window.history.pushState({},"",l),console.log("URL updated successfully")}catch(e){console.error("Error updating URL with language:",e)}}catch(o){console.error("Error updating URL with language:",o)}}const I={},q=t=>{try{const e=`${L.language}_${t}`;if(I[e])return I[e];let r=L.t(`hero.pricing.${t}`,{defaultValue:null});return r||(t==="current"?r="$35.48 US":t==="original"?r="US $108.06":t==="discount"&&(r="-68%")),I[e]=r,r}catch(o){return console.error("Error in getLocalizedPrice:",o),""}},W=()=>{for(const t in I)delete I[t]},D={},O=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],de={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},P=["about","articles","categories","features","header","hero","mobilemenu"],ue=(t,o)=>`/R36S_CONSOLE_STORE_JS/locales/${t}/${o}.json`,ge=async(t,o)=>{const e=`${t}_${o}`;if(D[e])return D[e];const r=2,d=async(p,l,m)=>{if(m>=r)return console.error(`Превышено максимальное количество попыток загрузки ${p}/${l}`),{};try{const s=ue(p,l);console.log(`Загрузка перевода: ${s}`);const u=new AbortController,i=setTimeout(()=>u.abort(),5e3),f=await fetch(s,{cache:"no-store",headers:{"Cache-Control":"no-cache"},signal:u.signal});if(clearTimeout(i),!f.ok)return console.warn(`Не удалось загрузить перевод ${p}/${l}: ${f.status}`),p!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l}`),d("en",l,m+1)):{};const b=await f.json();if(!b||typeof b!="object")throw new Error(`Invalid translation data format for ${p}/${l}`);return D[e]=b,b}catch(s){return s.name==="AbortError"?console.error(`Таймаут загрузки ${p}/${l} переводов`):console.error(`Ошибка загрузки ${p}/${l} переводов:`,s),p!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${l} после ошибки`),d("en",l,m+1)):{}}};return d(t,o,0)},U=async t=>{try{let o=0,e=0;const r=await Promise.allSettled(P.map(p=>ge(t,p))),d={};return r.forEach((p,l)=>{if(p.status==="fulfilled"){const m=p.value,s=P[l];m&&Object.keys(m).length>0?(d[s]=m,o++):(console.warn(`Получен пустой или недействительный перевод для секции: ${s}`),e++)}else console.warn(`Не удалось загрузить секцию: ${P[l]}, ошибка:`,p.reason),e++}),console.log(`Загрузка переводов для ${t}: успешно ${o}, не удалось ${e}`),d}catch(o){return console.error(`Ошибка загрузки переводов для ${t}:`,o),{}}},M=()=>{try{const t=document.querySelectorAll("[data-i18n]");if(console.log(`Обновление ${t.length} текстовых элементов`),t.length===0){console.log("Не найдено элементов с атрибутом data-i18n");return}t.forEach(o=>{try{const e=o.getAttribute("data-i18n");if(!e)return;if(e.startsWith("[")){const r=e.match(/^\[(.*)\](.*)$/);if(r){const[,d,p]=r,l=L.t(p);l&&l!==p&&o.setAttribute(d,l)}}else{const r=L.t(e);r&&r!==e?o.hasAttribute("content")?o.setAttribute("content",r):(!o.dataset.originalText&&L.language!=="en"&&(o.dataset.originalText=o.textContent),o.textContent=r):o.dataset.originalText&&L.language==="en"&&(o.textContent=o.dataset.originalText)}}catch(e){console.warn("Ошибка при обновлении элемента:",e,o)}})}catch(t){console.error("Ошибка обновления текстовых элементов:",t)}},$=()=>{try{const o=["ar"].includes(L.language)?"rtl":"ltr";document.documentElement.dir=o,document.documentElement.setAttribute("lang",L.language),o==="rtl"?document.documentElement.classList.add("rtl"):document.documentElement.classList.remove("rtl"),[".header",".footer",".mobile-menu",".hero",".features",".about",".contact","main"].forEach(r=>{const d=document.querySelector(r);d&&(o==="rtl"?d.classList.add("rtl"):d.classList.remove("rtl"))})}catch(t){console.error("Ошибка обновления поддержки RTL:",t)}},N=async()=>{try{const t=[];t.push((async()=>{try{M()}catch(o){console.error("Failed to update text elements:",o)}})()),t.push((async()=>{try{$()}catch(o){console.error("Failed to update RTL support:",o)}})()),await Promise.allSettled(t);try{window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:L.language}}))}catch(o){console.error("Error dispatching languageChanged event:",o)}console.log("Content update completed for language:",L.language)}catch(t){throw console.error("Error in updateAllContent:",t),t}};async function me(t={}){try{console.log("Setting up i18n with options:",t),console.log("Current localStorage userLanguage:",localStorage.getItem("userLanguage")),console.log("Current BASE_URL:","/R36S_CONSOLE_STORE_JS/");const{forcedLanguage:o}=t,e=localStorage.getItem("userLanguage"),r=e&&O.includes(e),d=o||(r?e:null)||ce(O,"en");console.log("Selected user language:",d);let p={};try{p=await U(d),console.log(`Загруженные переводы для ${d}:`,p)}catch(u){console.error(`Ошибка загрузки переводов для ${d}:`,u)}let l=null;if(d!=="en")try{l=await U("en")}catch(u){console.error("Ошибка загрузки запасных переводов:",u)}const m={[d]:{translation:p}};l&&(m.en={translation:l}),await L.init({lng:d,fallbackLng:"en",resources:m,interpolation:{escapeValue:!1},debug:!1,load:"languageOnly",returnNull:!1,returnEmptyString:!1,saveMissing:!1,keySeparator:".",nsSeparator:":",missingKeyHandler:(u,i,f,b)=>{console.warn(`Отсутствует ключ перевода: ${f} для языка ${u} в пространстве ${i}. Используется HTML-текст.`)},parseMissingKeyHandler:u=>null}),localStorage.setItem("userLanguage",d);const s=async u=>{try{console.log("Language changed to:",u),localStorage.setItem("userLanguage",u),Q(u),typeof W=="function"&&W(),await N()}catch(i){console.error("Error in language change handler:",i);try{M(),$()}catch(f){console.error("Failed to update basic content:",f)}}};L.on("languageChanged",s),window.updateContent=async()=>{try{await N()}catch(u){console.error("Error in window.updateContent:",u);try{M(),$()}catch(i){console.error("Failed to recover content update:",i)}}};try{await N()}catch(u){console.error("Error in initial content update:",u);try{M(),$()}catch(i){console.error("Failed to perform basic content update:",i)}}return L}catch(o){console.error("Fatal error in setupI18n:",o);try{L.isInitialized||await L.init({lng:"en",resources:{},interpolation:{escapeValue:!1}})}catch(e){console.error("Failed to create fallback i18next instance:",e)}return L}}function he(){const t=document.getElementById("language-selector");if(t)try{if(t.childElementCount===0){const e=document.createDocumentFragment();O.forEach(r=>{const d=document.createElement("option");d.value=r,d.textContent=de[r]||r,e.appendChild(d)}),t.appendChild(e)}t.value=L.language;let o=null;t.addEventListener("change",async function(e){e.preventDefault();try{o&&o.abort(),o=new AbortController;const r=o.signal,d=e.target.value;if(console.log(`Language selector changed to: ${d}`),!document.contains(t)){console.log("Language selector no longer in DOM, aborting");return}if(!L.hasResourceBundle(d,"translation"))try{const p=await U(d);if(r.aborted||!document.contains(t)){console.log("Operation aborted or language selector no longer in DOM after loading translations");return}L.addResourceBundle(d,"translation",p,!0,!0)}catch(p){console.error("Error loading translations:",p)}localStorage.setItem("userLanguage",d),await L.changeLanguage(d),document.contains(t)&&!r.aborted&&(Q(d),typeof window.updateContent=="function"&&window.updateContent())}catch(r){console.error("Error changing language:",r),document.contains(t)&&(t.value=L.language)}finally{o=null}})}catch(o){console.error("Error setting up language selector:",o)}}function pe(){let t=!1,o=window.scrollY,e=null;const r=document.querySelector(".header"),d=document.querySelector(".burger-btn"),p=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),m=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function s(){const S=window.scrollY,c=o<S;e&&clearTimeout(e),S>100?b(!c):b(!0),o=S,f(S>0),e=setTimeout(()=>{},150)}function u(){t=!t,i()}function i(){t?(r.classList.add("menu-open"),d.setAttribute("aria-expanded","true"),p.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(r.classList.remove("menu-open"),d.setAttribute("aria-expanded","false"),p.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function f(S){S?r.classList.add("scrolled"):r.classList.remove("scrolled")}function b(S){S?(r.classList.add("visible"),r.classList.remove("hidden")):(r.classList.add("hidden"),r.classList.remove("visible"))}function w(S){S.preventDefault();const c=S.currentTarget.getAttribute("href"),n=c.replace("#",""),g=document.getElementById(n);g&&(b(!0),setTimeout(()=>{r.offsetHeight;const h=g.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:h,behavior:"smooth"}),t&&(t=!1,i()),window.history.replaceState(null,"",`${window.location.pathname}${c}`),setTimeout(()=>{o=window.scrollY},100)},50))}function E(){if(window.location.hash){const S=window.location.hash.replace("#",""),c=document.getElementById(S);c&&setTimeout(()=>{const n=r.offsetHeight,a=c.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:a,behavior:"smooth"})},100)}}function y(S){var c;try{const n=document.querySelector(".header");if(!n){console.log("Header no longer in DOM, skipping language change handling");return}const g=["ar"],a=((c=S==null?void 0:S.detail)==null?void 0:c.language)||L.language;g.includes(a)?n.classList.add("rtl"):n.classList.remove("rtl"),console.log("Language changed in header to:",a),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(v=>{n.classList.remove(`lang-${v}`)}),n.classList.add(`lang-${a}`);const x=n.querySelector("[aria-label]");if(x){const v=L.t("header.aria-label.navigation");v&&v!=="header.aria-label.navigation"&&x.setAttribute("aria-label",v)}}catch(n){console.error("Error handling language change in header:",n)}}return window.addEventListener("scroll",s),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&t&&(t=!1,i())}),window.addEventListener("languageChanged",y),d&&d.addEventListener("click",u),m.forEach(S=>{S.addEventListener("click",w)}),E(),y(),function(){window.removeEventListener("scroll",s),window.removeEventListener("languageChanged",y),window.removeEventListener("resize",()=>{}),d&&d.removeEventListener("click",u),m.forEach(c=>{c.removeEventListener("click",w)})}}function fe(){const t=document.querySelector(".mobile-menu");if(!t){console.error("Мобильное меню не найдено в DOM");return}const o=t.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{e()});function e(){t.classList.remove("open");const m=document.querySelector(".burger-line");m&&m.classList.remove("open"),document.body.style.overflow="unset";const s=document.querySelector(".header");s&&s.classList.remove("menu-open");const u=document.querySelector(".burger-btn");u&&u.setAttribute("aria-expanded","false")}const r=t.querySelectorAll(".mobile-menu__link");r.forEach(m=>{m.addEventListener("click",()=>{setTimeout(()=>{e()},150)})});const d=t.querySelector(".mobile-menu__background");d&&d.addEventListener("click",()=>{e()});function p(){t.querySelectorAll(".mobile-menu__icon").forEach((s,u)=>{s.style.opacity="0",s.style.transform="translateX(-20px)",new MutationObserver(f=>{f.forEach(b=>{b.attributeName==="class"&&(t.classList.contains("open")?setTimeout(()=>{s.style.transition="all 0.4s ease",s.style.opacity="1",s.style.transform="translateX(0)"},100+u*70):(s.style.opacity="0",s.style.transform="translateX(-20px)"))})}).observe(t,{attributes:!0})})}function l(m){var s;try{const u=document.querySelector(".mobile-menu");if(!u){console.log("Mobile menu no longer in DOM, skipping language change handling");return}const i=["ar"],f=((s=m==null?void 0:m.detail)==null?void 0:s.language)||L.language;i.includes(f)?(u.classList.add("rtl"),u.querySelectorAll(".mobile-menu__item").forEach(y=>{y.classList.add("rtl")})):(u.classList.remove("rtl"),u.querySelectorAll(".mobile-menu__item").forEach(y=>{y.classList.remove("rtl")})),console.log("Language changed in mobile menu to:",f),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(E=>{u.classList.remove(`lang-${E}`)}),u.classList.add(`lang-${f}`);const w=u.querySelector(".close-button");if(w){const E=L.t("mobilemenu.close");E&&E!=="mobilemenu.close"&&w.setAttribute("aria-label",E)}}catch(u){console.error("Error handling language change in mobile menu:",u)}}return window.addEventListener("languageChanged",l),p(),l(),console.log("Мобильное меню с иконками инициализировано"),function(){o&&o.removeEventListener("click",e),r.forEach(s=>{s.removeEventListener("click",()=>{})}),d&&d.removeEventListener("click",e),window.removeEventListener("languageChanged",l)}}function we(){const t=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),r=document.querySelector(".hero__description--desktop"),d=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const p=document.getElementById("buy-button"),l=document.getElementById("more-details-button"),m=document.querySelector(".hero__current-price"),s=document.querySelector(".hero__original-price"),u=document.querySelector(".hero__discount-badge");let i=null,f,b;function w(){try{if(!document.body.contains(t)){console.warn("Hero section removed from DOM, skipping price update");return}if(m){const v=q("current");v&&(m.innerHTML=v)}if(s){const v=q("original");v&&(s.textContent=v)}if(u){const v=q("discount");v&&(u.textContent=v)}}catch(v){console.error("Ошибка при обновлении цен:",v)}}function E(){if(!(!o||!t))try{o.onload=()=>{document.body.contains(t)&&t.classList.add("hero--loaded")},o.onerror=()=>{console.error("Не удалось загрузить изображение:",o.src),document.body.contains(t)&&t.classList.add("hero--loaded")},o.complete&&document.body.contains(t)&&t.classList.add("hero--loaded")}catch(v){console.error("Ошибка при настройке изображения в Hero секции:",v)}}function y(){try{if(!r||!d||!document.body.contains(r)||!document.body.contains(d))return;const v=window.innerWidth>992;r.style.display=v?"block":"none",d.style.display=v?"none":"block"}catch(v){console.error("Ошибка при адаптации контента для разных экранов:",v)}}function S(){if(e)try{i&&(i.disconnect(),i=null),i=new IntersectionObserver(v=>{v.forEach(_=>{var k;_.isIntersecting&&((k=_.target)!=null&&k.isConnected)&&(_.target.classList.add("animate-in"),i==null||i.unobserve(_.target))})},{threshold:.1}),e.isConnected&&i.observe(e)}catch(v){console.error("Ошибка при настройке анимации контента:",v)}}function c(){try{p&&p.addEventListener("click",g),l&&l.addEventListener("click",a)}catch(v){console.error("Ошибка при настройке обработчиков кнопок:",v)}}function n(){try{b=v=>{var _;try{if(!document.body.contains(t)){console.warn("Hero section removed from DOM, skipping language change handling");return}console.log("Hero секция получила событие изменения языка:",v.detail),w();const k=["ar"],C=((_=v==null?void 0:v.detail)==null?void 0:_.language)||"en";k.includes(C)?t.classList.add("rtl"):t.classList.remove("rtl")}catch(k){console.error("Error in hero language change handler:",k)}},window.addEventListener("languageChanged",b)}catch(v){console.error("Ошибка при настройке слушателя смены языка:",v)}}function g(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(v){console.error("Ошибка при обработке клика по кнопке Buy:",v)}}function a(v){try{v.preventDefault();const _=document.getElementById("features");if(!_){window.location.hash="features";return}const C=_.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:C,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(_){console.error("Ошибка при обработке клика по кнопке More Details:",_)}}function h(){try{i&&i.disconnect(),clearTimeout(f),window.removeEventListener("resize",x),b&&window.removeEventListener("languageChanged",b),p&&p.removeEventListener("click",g),l&&l.removeEventListener("click",a)}catch(v){console.error("Ошибка при очистке ресурсов Hero секции:",v)}}function x(){clearTimeout(f),f=setTimeout(y,200)}try{E(),y(),S(),c(),n(),w(),window.addEventListener("resize",x)}catch(v){console.error("Ошибка при инициализации Hero секции:",v)}return h}function ye(t){let o=null,e=null,r=!1,d=0,p=null;const l=(a,h)=>{try{const x=L.t(a);return x!==a?x:h}catch(x){return console.warn(`Error getting translation for ${a}:`,x),h}},m=a=>{try{return q(a)}catch(h){return console.warn(`Error getting localized price for ${a}:`,h),a==="current"?"$35.48 US":a==="original"?"US $108.06":a==="discount"?"-68%":""}};function s(){return document.documentElement.dir==="rtl"}(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function i(a){a.key==="Escape"&&r&&n()}function f(){const a=document.createElement("div");return a.className="modal-about-overlay",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("tabindex","-1"),a.style.display="none",a.addEventListener("click",n),t.appendChild(a),a}function b(){if(!o)return;if(s()){const h=o.querySelector(".modal-about-header");if(h){h.style.flexDirection="row-reverse",h.style.justifyContent="flex-end",h.style.paddingRight="16px",h.style.paddingLeft="50px";const v=h.querySelector(".modal-about-icon-wrapper");v&&(v.style.marginLeft="0",v.style.marginRight="0");const _=h.querySelector(".modal-about-title");_&&(_.style.textAlign="right",_.style.marginRight="17px")}const x=o.querySelector(".modal-about-close");x&&(x.style.right="auto",x.style.left="16px")}}function w(){return e?e.title===l("about.cards.4.title","Extensive color selection")&&e.colorImages?`
        <img
          src="${e.colorImages[d]}"
          alt="${l(`about.cards.4.imageAlt.${d+1}`,`R36S Color Variant ${d+1}`)}"
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
          alt="${e.imageAlt||l("about.modal.imageAlt.default","Feature animation")}"
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
          alt="${e.imageAlt||l("about.modal.imageAlt.default","Feature image")}"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
        />
      `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${e.imageAlt||l("about.modal.imageAlt.default","Feature Image")}
      </div>
    `:""}function E(){(e==null?void 0:e.title)===l("about.cards.4.title","Extensive color selection")&&e.colorImages&&(p&&clearInterval(p),p=setInterval(()=>{d=d===e.colorImages.length-1?0:d+1;const a=o.querySelector(".modal-about-image");a&&(a.src=e.colorImages[d],a.alt=l(`about.cards.4.imageAlt.${d+1}`,`R36S Color Variant ${d+1}`))},1e3))}function y(){if(!o||!e)return;const a={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(a.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:l("about.faq.question","How many games are included in the R36S console?"),acceptedAnswer:{"@type":"Answer",text:l("about.faq.answer","The R36S console includes over 15,000 classic retro games from various platforms.")}}]});const h=`
          <script type="application/ld+json">
            ${JSON.stringify(a)}
          <\/script>
        `,x=l("about.modal.buyNow","BUY NOW"),v=l("about.modal.discount","-68%"),_=s(),k=_?`<span class="modal-about-button-shine"></span>
        <span class="modal-about-button-text">${v} ${x}</span>
        <span class="modal-about-button-pulse"></span>`:`<span class="modal-about-button-pulse"></span>
        <span class="modal-about-button-text">${x} ${v}</span>
        <span class="modal-about-button-shine"></span>`,C=m("current"),ie=m("original"),ae=_?`<div class="modal-about-header" style="flex-direction: row-reverse; justify-content: flex-start; padding-left: 50px;">
       <h3 class="modal-about-title" itemprop="name" data-i18n="${e.i18nKey}.title" style="text-align: right; margin-right: 17px;">${e.title}</h3>
       <div class="modal-about-icon-wrapper" aria-hidden="true">${e.icon}</div>
     </div>`:`<div class="modal-about-header">
       <div class="modal-about-icon-wrapper" aria-hidden="true">${e.icon}</div>
       <h3 class="modal-about-title" itemprop="name" data-i18n="${e.i18nKey}.title">${e.title}</h3>
     </div>`;o.innerHTML=`
          ${h}
          <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="name" content="R36S Handheld Game Console" />
            <meta itemprop="description" content="${e.title} for R36S console" />
            <meta itemprop="sku" content="R36S-${e.id}" />
            <meta itemprop="brand" content="R36S" />
            <meta itemprop="productID" content="R36S-F${e.id}" />
            
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
            
            ${ae}

            <div class="modal-about-body">
              <div class="modal-about-media-container" itemprop="image">
                ${w()}
              </div>
              
              <div class="modal-about-content-container">
                <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                  <div class="modal-about-price-wrapper">
                    <span class="modal-about-original-price">${ie}</span>
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
                    ${k}
                  </a>
                </div>

                <div class="modal-about-description" itemprop="description" data-i18n="${e.i18nKey}.fullDescription">
                  ${e.fullDescription}
                </div>
              </div>
            </div>
          </div>
        `,b();const z=o.querySelector(".modal-about-close");z&&z.addEventListener("click",n);const G=o.querySelector(".modal-about-content");G&&G.addEventListener("click",se=>se.stopPropagation())}function S(a){e=a,o||(o=f()),y();const h=window.location.href,x=new URL(h);return x.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",x),o.style.display="flex",r=!0,o.focus(),window.addEventListener("keydown",i),document.body.style.overflow="hidden",E(),window.addEventListener("popstate",c),{close:n}}function c(a){r&&(!a.state||!a.state.featureId)&&n()}function n(){if(!r||!o)return;r=!1,o.style.display="none",window.removeEventListener("keydown",i),window.removeEventListener("popstate",c),document.body.style.overflow="visible",p&&(clearInterval(p),p=null);const a=new URL(window.location.href);a.searchParams.delete("feature"),window.history.pushState({},"",a)}function g(){n(),o&&t.contains(o)&&t.removeChild(o),o=null,e=null}return{open:S,close:n,destroy:g}}const X="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",ee="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",te="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",oe="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",ve="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",be="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",ne="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",Se="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",xe="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let j=null;const A=(t,o)=>{try{const e=L.t(t);return e===t?o:e}catch(e){return console.warn(`Error getting translation for ${t}:`,e),o}};function Ee(){if(console.log("Начинаем предзагрузку изображений..."),[X,ee,te,oe].forEach(o=>{const e=new Image;e.src=o}),"HTMLVideoElement"in window){const o=document.createElement("video");o.preload="metadata",o.src=ne}console.log("Предзагрузка изображений завершена")}function Le(){if(console.log("Инициализация секции About"),Ee(),!document.querySelector(".about__cards"))return console.error("Контейнер для карточек не найден"),null;j||(console.log("Создаем модальное окно..."),j=ye(document.body),console.log("Модальное окно создано"));let o=j;const r=[{id:1,i18nKey:"about.cards.1",icon:`
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
• Optimized versions for modern hardware`,imageUrl:X,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,i18nKey:"about.cards.2",icon:`
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
• Scratch-resistant surface`,imageUrl:ee,imageAlt:"Display Technologies"},{id:3,i18nKey:"about.cards.3",icon:`
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
- Full-screen IPS display`,videoUrl:ne,imageAlt:"Battery Life"},{id:4,i18nKey:"about.cards.4",icon:`
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
- Mesmerizing Purple ...`,colorImages:[te,oe,ve,be],imageAlt:"R36S Color Variants"},{id:5,i18nKey:"about.cards.5",icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:xe,imageAlt:"R36S Settings"},{id:6,i18nKey:"about.cards.6",icon:`
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
• Quick startup for instant gaming access`,videoUrl:Se,imageAlt:"R36S Portability"}],d=c=>{const n=c.i18nKey;return{...c,title:A(`${n}.title`,c.title),description:A(`${n}.description`,c.description),detail:A(`${n}.detail`,c.detail),number:A(`${n}.number`,c.number),fullDescription:A(`${n}.fullDescription`,c.fullDescription),imageAlt:A(`${n}.imageAlt`,c.imageAlt)}};function p(){try{const c=A("about.button.details","More details"),n=document.querySelectorAll(".about-card__button .button-text");console.log(`Обновление текста ${n.length} кнопок на: "${c}"`),n.forEach(g=>{g.textContent=c})}catch(c){console.error("Ошибка при обновлении текста кнопок:",c)}}function l(){return document.documentElement.dir==="rtl"}function m(){console.log("Начинаем рендеринг карточек...");const c=document.querySelector(".about__cards");if(!c){console.error("Контейнер карточек не найден для рендеринга!");return}c.innerHTML="";const n=A("about.button.details","More details"),g=l(),a=r.map(x=>{const v=d(x),_=g?`<span class="button-icon">
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
        <span class="button-text" data-i18n="about.button.details">${n}</span>`:`<span class="button-text" data-i18n="about.button.details">${n}</span>
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
          <h3 class="about-card__title" data-i18n="${x.i18nKey}.title">${v.title}</h3>
          <p class="about-card__description" data-i18n="${x.i18nKey}.description">${v.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number" data-i18n="${x.i18nKey}.number">${v.number}</span>
            <span class="about-card__detail" data-i18n="${x.i18nKey}.detail">${v.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${x.id}">
            ${_}
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `}).join("");c.innerHTML=a;const h=c.querySelectorAll(".about-card");console.log(`Отрендерено ${h.length} карточек из ${r.length} необходимых`),h.length!==r.length?console.warn(`Ошибка рендеринга: отрендерено ${h.length} карточек вместо ${r.length}`):console.log("Рендеринг карточек успешно завершен")}function s(c){if(!c||!c.currentTarget)return;const n=c.currentTarget;if(!n||!n.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const g=n.getBoundingClientRect(),a=c.clientX-g.left,h=c.clientY-g.top;n.style.setProperty("--mouse-x",`${a}px`),n.style.setProperty("--mouse-y",`${h}px`)}catch(g){console.error("Ошибка при обработке движения мыши:",g)}}function u(c){if(!c||!c.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}c.stopPropagation();try{const n=parseInt(c.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",n);const g=r.find(h=>h.id===n);if(!g){console.error("Данные для карточки не найдены");return}const a=d(g);o&&o.open(a)}catch(n){console.error("Ошибка при обработке клика по кнопке:",n)}}function i(c,n){let g;return function(){const a=this,h=arguments;clearTimeout(g),g=setTimeout(()=>{c.apply(a,h)},n)}}function f(){console.log("Очистка обработчиков событий карточек...");try{const c=document.querySelectorAll(".about-card");c&&c.length>0?(console.log(`Удаление обработчиков из ${c.length} карточек`),c.forEach((g,a)=>{if(g){const h=g.getAttribute("data-id"),x=g.innerHTML,v=g.cloneNode(!1);v.setAttribute("data-id",h),v.innerHTML=x,g.parentNode&&(g.parentNode.replaceChild(v,g),console.log(`Карточка ${a+1} заменена на клон без обработчиков`))}})):console.warn("Не найдено карточек для очистки обработчиков");const n=document.querySelector(".about__cards");if(n){const g=n.innerHTML,a=n.cloneNode(!1);a.innerHTML=g,n.parentNode&&(n.parentNode.replaceChild(a,n),console.log("Контейнер карточек заменен на клон без обработчиков"))}else console.warn("Не найден контейнер карточек для очистки обработчиков");console.log("Очистка обработчиков успешно завершена")}catch(c){console.error("Ошибка при очистке обработчиков событий:",c);try{console.log("Применяем альтернативный метод очистки...");const n=document.querySelector(".about__cards");if(n){const g=n.outerHTML,a=n.parentNode;a&&(a.removeChild(n),a.insertAdjacentHTML("beforeend",g),console.log("Альтернативная очистка успешно завершена"))}}catch(n){console.error("Ошибка при альтернативной очистке:",n)}}}function b(c){const n=c.querySelectorAll(".about-card");if(console.log(`Настройка эффекта свечения для ${n.length} карточек`),n.length===0){console.error("Карточки не найдены для эффекта свечения!");return}n.forEach((g,a)=>{let h=g.querySelector(".card-glow");h||(console.log(`Создаем элемент подсветки для карточки ${a+1}`),h=document.createElement("div"),h.className="card-glow",g.prepend(h)),g.style.setProperty("--mouse-x","0px"),g.style.setProperty("--mouse-y","0px"),g.addEventListener("mousemove",s),console.log(`Обработчик события mousemove добавлен к карточке ${a+1}`)})}function w(){console.log("Настройка обработчиков событий для карточек...");const c=document.querySelector(".about__cards");if(!c){console.error("Контейнер карточек не найден для установки обработчиков!");return}const n=c.querySelectorAll(".about-card");if(!n||n.length===0){console.warn("Не найдены карточки для установки обработчиков событий");return}console.log(`Устанавливаем обработчики событий для ${n.length} карточек`);const g=window.matchMedia("(max-width: 768px)").matches;b(c),!g&&c&&c.addEventListener("click",function(h){const x=h.target.closest(".about-card");if(x&&!h.target.closest(".about-card__button")){const v=parseInt(x.dataset.id);console.log("Клик по карточке ID:",v);const _=r.find(C=>C.id===v);if(!_){console.error("Данные для карточки не найдены");return}const k=d(_);o&&o.open(k)}}),n.forEach(h=>{h&&(h.addEventListener("mouseenter",function(){h&&(parseInt(h.dataset.id),h.classList.add("active"))}),h.addEventListener("mouseleave",function(){h&&h.classList.remove("active")}))});const a=c.querySelectorAll(".about-card__button");a&&a.length>0?(a.forEach(h=>{h&&h.addEventListener("click",u)}),console.log(`Установлены обработчики для ${a.length} кнопок`)):console.warn("Не найдены кнопки карточек"),console.log("Настройка обработчиков событий успешно завершена")}function E(){function c(n){try{console.log("Обработка события смены языка в секции About");const g=n.detail?n.detail.language:L.language;console.log(`Переключение на язык: ${g}`),f(),m(),setTimeout(()=>{w();const a=document.querySelectorAll(".about-card");a.forEach((h,x)=>{if(!h.querySelector(".card-glow")){console.warn(`Карточка ${x+1} не имеет элемента подсветки, добавляем...`);const _=document.createElement("div");_.className="card-glow",h.prepend(_)}h.style.setProperty("--mouse-x","0px"),h.style.setProperty("--mouse-y","0px")}),console.log(`Проверено ${a.length} карточек после смены языка`)},100),p(),console.log("Обновление секции About после смены языка завершено")}catch(g){console.error("Ошибка при обновлении секции About после смены языка:",g);try{m(),setTimeout(w,150)}catch(a){console.error("Не удалось выполнить восстановление после ошибки:",a)}}}return window.removeEventListener("languageChanged",c),window.addEventListener("languageChanged",c),c}function y(){console.log("Очистка всех обработчиков событий..."),f();const c=i(()=>{},250);window.removeEventListener("resize",c);function n(){}window.removeEventListener("languageChanged",n),o=null,document.querySelectorAll(".about-card").forEach(a=>{a&&(a.style.removeProperty("--mouse-x"),a.style.removeProperty("--mouse-y"))}),console.log("Очистка обработчиков событий завершена")}function S(){const c=E(),n=i(()=>{const g=window.matchMedia("(max-width: 768px)").matches,a=window.matchMedia("(max-width: 768px)").matches;g!==a&&(console.log("Состояние адаптивности изменилось, обновляем обработчики"),f(),w())},250);return window.addEventListener("resize",n),setTimeout(()=>{const g=document.querySelectorAll(".about-card");console.log(`Проверка установки эффекта подсветки: найдено ${g.length} карточек`);let a=!1;g.forEach(h=>{h.querySelector(".card-glow")||(a=!0,console.warn("Обнаружена карточка без эффекта подсветки, исправляем..."),b(document.querySelector(".about__cards")))}),a||console.log("Все карточки имеют корректный эффект подсветки")},100),function(){console.log("Запуск функции очистки секции About"),window.removeEventListener("resize",n),window.removeEventListener("languageChanged",c),y()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),m(),console.log("Устанавливаем обработчики событий..."),w(),console.log("Инициализация About завершена успешно"),S()}catch(c){return console.error("Ошибка при инициализации About:",c),null}}function _e(){const t=document.getElementById("features"),o=document.getElementById("featuresVideo"),e=document.getElementById("soundToggleButton"),r=document.getElementById("volumeOffIcon"),d=document.getElementById("volumeOnIcon"),p=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");if(!t){console.warn("Features section not found");return}o&&(o.volume=.5,o.play().catch(u=>{console.log("Автовоспроизведение не удалось:",u)})),p&&p.addEventListener("click",Z),l&&l.addEventListener("click",K),e&&e.addEventListener("click",()=>V(o,r,d));const m=()=>{ke(t,o,r,d)};window.addEventListener("scroll",m);const s=()=>{if(e){const u=o&&!o.muted?"features.sound.toggle.disable":"features.sound.toggle.enable";e.setAttribute("aria-label",L.t(u))}};return window.addEventListener("languageChanged",s),function(){p&&p.removeEventListener("click",Z),l&&l.removeEventListener("click",K),e&&e.removeEventListener("click",()=>V(o,r,d)),window.removeEventListener("scroll",m),window.removeEventListener("languageChanged",s),console.log("Features component cleaned up")}}function V(t,o,e){if(t)if(t.muted=!t.muted,t.muted){o.style.display="block",e.style.display="none";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label",L.t("features.sound.toggle.enable"))}else{t.volume=.5,o.style.display="none",e.style.display="block";const r=document.getElementById("soundToggleButton");r&&r.setAttribute("aria-label",L.t("features.sound.toggle.disable"))}}function ke(t,o,e,r){if(!t||!o||o.muted)return;const d=t.getBoundingClientRect();if(!(d.top<window.innerHeight&&d.bottom>0)){o.muted=!0,e.style.display="block",r.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label",L.t("features.sound.toggle.enable"))}}function Z(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function K(){const t=document.getElementById("features-r36s");if(t){const o=t.getBoundingClientRect().top,e=window.scrollY||window.pageYOffset,r=o+e;window.scrollTo({top:r,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function Ce(){try{let y=function(){if(r&&(r.innerHTML=i?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`,r.hasAttribute("data-i18n"))){const h=i?"categories.controls.pause":"categories.controls.play",x=L.t(h);x&&x!==h&&r.setAttribute("aria-label",x)}},S=function(){if(d&&(d.innerHTML=f?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`,d.hasAttribute("data-i18n"))){const h=f?"categories.controls.unmute":"categories.controls.mute",x=L.t(h);x&&x!==h&&d.setAttribute("aria-label",x)}},c=function(){if(!(!t||w))if(i)t.pause(),i=!1,y();else{const h=t.play();h!==void 0?h.then(()=>{i=!0,y()}).catch(x=>{console.warn("Не удалось воспроизвести видео:",x),i=!1,y()}):(i=!0,y())}},n=function(){if(!l)return;w=!0,t&&(t.style.display="none");const h=L.t("categories.fallback.videoUnavailable",{defaultValue:"Видео временно недоступно"});l.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">${h}</p>
          </div>
        </div>
      `};console.log("Инициализация секции Categories");const t=document.querySelector(".categories__video"),o=document.getElementById("categories"),e=document.querySelector(".categories__content"),r=document.querySelector(".categories__video-play"),d=document.querySelector(".categories__video-mute"),p=document.querySelector(".categories__video-slider"),l=document.querySelector(".categories__video-container"),m=document.querySelector(".categories__video-time span:first-child"),s=document.querySelector(".categories__video-time span:last-child"),u="languageChanged";if(!o)return console.error("Секция Categories не найдена в DOM"),{};if(e&&e.classList.add("animate-in"),!t)return console.error("Видео элемент не найден в DOM"),n(),{};let i=!1,f=!0,b=!1,w=!1;const E=h=>{if(isNaN(h)||h<0)return"0:00";const x=Math.floor(h/60),v=Math.floor(h%60);return`${x}:${v.toString().padStart(2,"0")}`},g=()=>{try{y(),S(),w&&n()}catch(h){console.error("Ошибка при обновлении языка в видео секции:",h)}};window.addEventListener(u,g),t&&(t.muted=!0,t.loop=!0,t.playsInline=!0,t.style.display="block",t.style.visibility="visible",t.style.opacity="1",t.style.width="100%",t.style.borderRadius="24px",l&&(l.style.minHeight="200px"),t.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),b=!0,p&&!isNaN(t.duration)&&(p.max=t.duration,s&&(s.textContent=E(t.duration)))}catch(h){console.error("Ошибка при обработке метаданных видео:",h)}}),t.addEventListener("timeupdate",()=>{try{p&&!isNaN(t.currentTime)&&(p.value=t.currentTime,m&&(m.textContent=E(t.currentTime)))}catch(h){console.error("Ошибка при обновлении времени видео:",h)}}),t.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),n()}),setTimeout(()=>{if(t&&!w){const h=t.play();h!==void 0&&h.then(()=>{console.log("Автовоспроизведение видео успешно"),i=!0,y()}).catch(x=>{console.warn("Не удалось автовоспроизвести видео:",x)})}},1e3)),r&&r.addEventListener("click",h=>{h.stopPropagation(),c()}),d&&d.addEventListener("click",h=>{h.stopPropagation(),t&&(f=!f,t.muted=f,S())}),p&&p.addEventListener("input",h=>{if(t)try{const x=parseFloat(h.target.value);isNaN(x)||(t.currentTime=x)}catch(x){console.error("Ошибка при изменении времени видео:",x)}}),l&&l.addEventListener("click",h=>{h.target.closest(".categories__video-controls")||c()}),y(),S(),o.classList.add("initialized");const a=()=>{try{document.documentElement.dir==="rtl"?(o.classList.add("rtl"),e&&e.classList.add("rtl")):(o.classList.remove("rtl"),e&&e.classList.remove("rtl"))}catch(h){console.error("Ошибка при обработке RTL в видео секции:",h)}};return a(),window.addEventListener(u,a),o&&(o.style.display="block"),{togglePlay:c,cleanup:()=>{t&&(t.pause(),t.removeAttribute("src"),t.load()),window.removeEventListener(u,g),window.removeEventListener(u,a)}}}catch(t){console.error("Критическая ошибка в initCategories:",t);const o=document.getElementById("categories");return o&&(o.style.display="block"),{}}}let R=null;function T(){console.log("Инициализация аккордеона FAQ начата"),R&&typeof R.destroy=="function"&&(console.log("Уничтожение предыдущего аккордеона перед новой инициализацией"),R.destroy(),R=null);const t=document.querySelectorAll(".accordion__item");if(t.length===0)return console.warn("FAQ аккордеон: элементы не найдены"),null;console.log(`FAQ аккордеон: найдено ${t.length} вопросов`);const o=new Map,e=(l=null)=>{t.forEach(m=>{if(m!==l&&m.classList.contains("active")){m.classList.remove("active");const s=m.querySelector(".accordion__header"),u=m.querySelector(".accordion__content");s&&s.setAttribute("aria-expanded","false"),u&&setTimeout(()=>{m.classList.contains("active")||u.setAttribute("hidden","true")},500)}})},r=()=>{const m=["ar"].includes(L.language);console.log(`Применение RTL стилей для аккордеона: ${m?"да":"нет"}`),t.forEach(s=>{const u=s.querySelector(".accordion__header"),i=s.querySelector(".accordion__content");m?(u&&(u.style.flexDirection="row-reverse"),i&&(i.style.textAlign="right",i.style.direction="rtl")):(u&&(u.style.flexDirection=""),i&&(i.style.textAlign="",i.style.direction=""))})};r(),t.forEach((l,m)=>{const s=l.querySelector(".accordion__header"),u=l.querySelector(".accordion__toggle"),i=l.querySelector(".accordion__content");if(!s||!u||!i){console.warn("FAQ аккордеон: структура элемента неполная",l);return}m===0&&setTimeout(()=>{u.classList.add("pulse"),setTimeout(()=>{u.classList.remove("pulse")},1500)},1e3),s.style.cursor="pointer";const f=function(y,S,c,n){return function(g){if(g.preventDefault(),g.stopPropagation(),console.log("Клик по элементу аккордеона:",y),c.classList.add("clicked"),setTimeout(()=>c.classList.remove("clicked"),300),y.classList.contains("active")){console.log("Закрытие активного элемента аккордеона"),y.classList.remove("active"),S.setAttribute("aria-expanded","false"),setTimeout(()=>{y.classList.contains("active")||n.setAttribute("hidden","true")},500);return}e(y),y.classList.add("active"),S.setAttribute("aria-expanded","true"),n.removeAttribute("hidden"),console.log("Открытие элемента аккордеона:",y);const a=S.getBoundingClientRect();a.top>=10&&a.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+a.top-100,behavior:"smooth"})},100)}}(l,s,u,i);o.set(l,f),s.removeEventListener("click",o.get(l)),u.removeEventListener("click",o.get(l)),s.removeEventListener("keydown",o.get(l)),s.addEventListener("click",f),s.querySelectorAll("*:not(.accordion__toggle)").forEach(y=>{y.style.pointerEvents="none"}),u.style.pointerEvents="auto",u.addEventListener("click",y=>{y.stopPropagation(),f(y)});const w=s.id||`faq-question-${Math.random().toString(36).substring(2,9)}`,E=i.id||`faq-answer-${Math.random().toString(36).substring(2,9)}`;s.setAttribute("id",w),s.setAttribute("aria-expanded",l.classList.contains("active")?"true":"false"),s.setAttribute("aria-controls",E),s.setAttribute("role","button"),s.setAttribute("tabindex","0"),i.setAttribute("id",E),i.setAttribute("aria-labelledby",w),i.setAttribute("role","region"),l.classList.contains("active")?i.removeAttribute("hidden"):i.setAttribute("hidden","true"),s.addEventListener("keydown",y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),f(y))})});const d=l=>{if(l.key==="Escape"){e();return}const m=document.activeElement.closest(".accordion__item");if(!m)return;const s=Array.from(t),u=s.indexOf(m);if(u===-1)return;let i;const f=document.documentElement.dir==="rtl";switch(l.key){case"ArrowDown":i=(u+1)%s.length;break;case"ArrowUp":i=(u-1+s.length)%s.length;break;case"ArrowRight":i=f?(u-1+s.length)%s.length:(u+1)%s.length;break;case"ArrowLeft":i=f?(u+1)%s.length:(u-1+s.length)%s.length;break;case"Home":i=0;break;case"End":i=s.length-1;break;default:return}const b=s[i].querySelector(".accordion__header");b&&(b.focus(),l.preventDefault())};document.removeEventListener("keydown",d),document.addEventListener("keydown",d),window.removeEventListener("languageChanged",r),window.addEventListener("languageChanged",r),console.log("FAQ аккордеон успешно инициализирован");const p={openItem:l=>{if(l>=0&&l<t.length){e(t[l]),t[l].classList.add("active");const m=t[l].querySelector(".accordion__header"),s=t[l].querySelector(".accordion__content");m&&m.setAttribute("aria-expanded","true"),s&&s.removeAttribute("hidden")}},closeAll:()=>e(),updateContent:()=>{r(),console.log("Аккордеон обновлен после смены языка")},destroy:()=>{try{return console.log("Начало уничтожения аккордеона"),window.removeEventListener("languageChanged",r),document.removeEventListener("keydown",d),t.forEach(l=>{const m=l.querySelector(".accordion__header"),s=l.querySelector(".accordion__toggle"),u=o.get(l);m&&u&&(m.removeEventListener("click",u),m.removeEventListener("keydown",u)),s&&u&&s.removeEventListener("click",u),m&&m.querySelectorAll("*:not(.accordion__toggle)").forEach(f=>{f.style.pointerEvents=""})}),o.clear(),console.log("Аккордеон успешно уничтожен"),!0}catch(l){return console.error("Ошибка при удалении аккордеона:",l),!1}}};return R=p,p}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon||(window.faqAccordeon=T()),window.addEventListener("languageChanged",t=>{console.log("Обработчик события languageChanged вызван в accordion.js"),window.faqAccordeon&&typeof window.faqAccordeon.updateContent=="function"?window.faqAccordeon.updateContent():(console.log("Переинициализация аккордеона после смены языка"),window.faqAccordeon=T())})}),window.initFaqAccordion=T);let H=!1;function re(t=!1){const o=document.getElementById("articles");if(console.log("Инициализация Articles:",{forceReinitialize:t,isInitialized:H,sectionExists:!!o}),!o){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const i=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!i){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}i.id||(i.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",i)}console.log("Инициализация секции Articles с SEO-оптимизацией и поддержкой i18n");const e=(i,f)=>{const b=L.t(i,{defaultValue:f});return b!==i?b:f},r=[{id:1,title:e("articles.article.1.title","R36S Retro Gaming"),sections:[{subtitle:e("articles.article.1.sections.1.subtitle","R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts"),content:e("articles.article.1.sections.1.content","Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time.")},{subtitle:e("articles.article.1.sections.2.subtitle","Comprehensive R36S Review: Performance That Exceeds Expectations"),content:e("articles.article.1.sections.2.content",'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.')},{subtitle:e("articles.article.1.sections.3.subtitle","How to Install Games on R36S: Simple Setup for Maximum Fun"),content:e("articles.article.1.sections.3.content",`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`)},{subtitle:e("articles.article.1.sections.4.subtitle","R36S Specifications: Hardware That Delivers Premium Gaming Experience"),content:e("articles.article.1.sections.4.content","The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers.")},{subtitle:e("articles.article.1.sections.5.subtitle","Best Games for R36S: Thousands of Classics at Your Fingertips"),content:e("articles.article.1.sections.5.content",`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`)},{subtitle:e("articles.article.1.sections.6.subtitle","A Unique Gaming Experience with R36S"),content:e("articles.article.1.sections.6.content",`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`)}]},{id:2,title:e("articles.article.2.title","R36S Official Website"),sections:[{subtitle:e("articles.article.2.sections.1.subtitle","R36S Official Website - The Ultimate Gaming Experience at Your Fingertips"),content:e("articles.article.2.sections.1.content","Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today.")},{subtitle:e("articles.article.2.sections.2.subtitle","Discover the Revolutionary R36S Handheld Gaming Experience"),content:e("articles.article.2.sections.2.content",'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.')},{subtitle:e("articles.article.2.sections.3.subtitle","Unmatched Performance in the R36S Game Console"),content:e("articles.article.2.sections.3.content","The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more.")},{subtitle:e("articles.article.2.sections.4.subtitle","Enhanced Gaming Experience with the R36S Handheld's Exclusive Features"),content:e("articles.article.2.sections.4.content","The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility.")},{subtitle:e("articles.article.2.sections.5.subtitle","Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs"),content:e("articles.article.2.sections.5.content","The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device.")},{subtitle:e("articles.article.2.sections.6.subtitle","The Future of Gaming with the R36S Official Website and Upcoming Innovations"),content:e("articles.article.2.sections.6.content","The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation.")},{subtitle:e("articles.article.2.sections.7.subtitle","Welcome to the R36S Official Store"),content:e("articles.article.2.sections.7.content",`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`)}]}],d=o.querySelector(".articles__grid");if(!d){console.error("Элемент .articles__grid не найден в секции Articles");return}if(t||!H)console.log("Очистка и пересоздание контента Articles"),d.innerHTML="";else{console.log("Обновление существующего контента Articles"),s();return}const p=()=>{if(!document.querySelector('meta[name="description"]')){const i=document.createElement("meta");i.name="description",i.content=e("articles.meta.description","R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options."),document.head.appendChild(i)}if(!document.querySelector('meta[name="keywords"]')){const i=document.createElement("meta");i.name="keywords",i.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(i)}};p(),r.forEach(i=>{const f=document.createElement("article");f.className="article",f.id=`article-${i.id}`,f.dataset.articleId=i.id,f.setAttribute("itemscope",""),f.setAttribute("itemtype","http://schema.org/Article");const b=document.createElement("h2");b.className="article__title",b.setAttribute("itemprop","headline"),b.setAttribute("data-i18n",`articles.article.${i.id}.title`),b.innerHTML=i.title,f.appendChild(b);const w=document.createElement("div");w.className="article__content-wrapper",w.setAttribute("itemprop","articleBody"),i.sections.forEach((n,g)=>{const a=document.createElement("section");if(a.className="article__section",a.id=`section-${i.id}-${g+1}`,g!==0||n.subtitle!==i.title){const x=document.createElement("h3");x.className="article__subtitle",x.setAttribute("data-i18n",`articles.article.${i.id}.sections.${g+1}.subtitle`),x.innerHTML=n.subtitle,a.appendChild(x)}const h=document.createElement("div");h.className="article__content",h.setAttribute("data-i18n-html",`articles.article.${i.id}.sections.${g+1}.content`),h.innerHTML=n.content,a.appendChild(h),w.appendChild(a)}),f.appendChild(w);const E=document.createElement("script");E.type="application/ld+json";const y={"@context":"https://schema.org","@type":"Article",headline:i.title,description:i.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:e("articles.schema.org.name","R36S Official")},publisher:{"@type":"Organization",name:e("articles.schema.org.name","R36S"),logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};E.textContent=JSON.stringify(y),f.appendChild(E);const S=document.createElement("footer");S.className="article__footer";const c=document.createElement("a");c.href="https://www.aliexpress.com/item/1005007171465465.html",c.className="article__cta",c.textContent=e("articles.cta.button.text","Order R36S Now"),c.setAttribute("data-i18n","articles.cta.button.text"),c.setAttribute("itemprop","url"),c.setAttribute("title",e("articles.cta.button.title","Order R36S Gaming Console")),c.setAttribute("data-i18n-title","articles.cta.button.title"),c.setAttribute("rel","nofollow"),c.setAttribute("target","_blank"),S.appendChild(c),f.appendChild(S),d.appendChild(f)});const l=()=>{let i=o.querySelector(".articles__heading");i?i.textContent=e("articles.heading","R36S Gaming Console - Official Information"):(i=document.createElement("h1"),i.className="articles__heading",i.setAttribute("data-i18n","articles.heading"),i.textContent=e("articles.heading","R36S Gaming Console - Official Information"),o.querySelector(".articles__container").insertBefore(i,o.querySelector(".articles__grid")))};l(),setTimeout(()=>{try{console.log("Инициализация аккордеона..."),window.faqAccordeon&&typeof window.faqAccordeon.destroy=="function"&&(console.log("Уничтожение существующего аккордеона перед реинициализацией"),window.faqAccordeon.destroy(),window.faqAccordeon=null),setTimeout(()=>{window.faqAccordeon=T(),console.log("Аккордеон успешно инициализирован:",window.faqAccordeon)},100)}catch(i){console.error("Ошибка при инициализации аккордеона:",i)}},300),H=!0;const m=i=>{console.log("Обработчик languageChanged вызван в Articles:",i),p(),l(),u(),s(),setTimeout(()=>{window.faqAccordeon&&typeof window.faqAccordeon.updateContent=="function"?(console.log("Обновление содержимого аккордеона после смены языка"),window.faqAccordeon.updateContent()):(console.log("Переинициализация аккордеона после смены языка (API не найден)"),window.faqAccordeon&&typeof window.faqAccordeon.destroy=="function"&&window.faqAccordeon.destroy(),window.faqAccordeon=T())},100)};function s(){try{console.log("Обновление текстового содержимого статей без перестроения DOM");const i=o.querySelector(".articles__heading");if(i){const f=i.getAttribute("data-i18n");if(f){const b=L.t(f);b&&b!==f&&(i.textContent=b)}}document.querySelectorAll(".article__title").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const w=L.t(b);w&&w!==b&&(f.textContent=w)}}),document.querySelectorAll(".article__subtitle").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const w=L.t(b);w&&w!==b&&(f.textContent=w)}}),document.querySelectorAll(".article__content").forEach(f=>{const b=f.getAttribute("data-i18n-html");if(b){const w=L.t(b);w&&w!==b&&(f.innerHTML=w)}}),document.querySelectorAll(".article__cta").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const E=L.t(b);E&&E!==b&&(f.textContent=E)}const w=f.getAttribute("data-i18n-title");if(w){const E=L.t(w);E&&E!==w&&f.setAttribute("title",E)}}),document.querySelectorAll(".articles__faq-question").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const w=L.t(b);w&&w!==b&&(f.textContent=w)}}),document.querySelectorAll(".articles__faq-answer p").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const w=L.t(b);w&&w!==b&&(f.textContent=w)}}),document.querySelectorAll(".articles__related-list a").forEach(f=>{const b=f.getAttribute("data-i18n");if(b){const E=L.t(b);E&&E!==b&&(f.textContent=E)}const w=f.getAttribute("data-i18n-title");if(w){const E=L.t(w);E&&E!==w&&f.setAttribute("title",E)}}),console.log("Текстовое содержимое статей успешно обновлено")}catch(i){console.error("Ошибка при обновлении текстового содержимого:",i)}}const u=()=>{try{const i=["ar"],f=L.language;i.includes(f)?(o.classList.add("rtl"),o.querySelectorAll(".article__content").forEach(c=>{c.style.textAlign="right",c.style.direction="rtl"}),o.querySelectorAll(".article__title, .article__subtitle, .articles__heading").forEach(c=>{c.style.textAlign="right"}),o.querySelectorAll(".articles__faq-question").forEach(c=>{c.style.textAlign="right"}),o.querySelectorAll(".articles__faq-answer").forEach(c=>{c.style.textAlign="right",c.style.direction="rtl"})):(o.classList.remove("rtl"),o.querySelectorAll(".article__content, .article__title, .article__subtitle, .articles__heading, .articles__faq-question, .articles__faq-answer").forEach(E=>{E.style.textAlign="",E.style.direction=""}))}catch(i){console.error("Ошибка при обновлении RTL поддержки:",i)}};return window._articlesLanguageChangeHandler&&window.removeEventListener("languageChanged",window._articlesLanguageChangeHandler),window._articlesLanguageChangeHandler=m,window.addEventListener("languageChanged",window._articlesLanguageChangeHandler),u(),window.initArticles=re,setTimeout(()=>{console.log("Проверка наличия элементов аккордеона после инициализации:");const i=document.querySelectorAll(".accordion__item");console.log(`Найдено ${i.length} элементов аккордеона`),i.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",i[0].querySelector(".accordion__header")),console.log("- Кнопка:",i[0].querySelector(".accordion__toggle")),console.log("- Контент:",i[0].querySelector(".accordion__content")))},1e3),console.log("Инициализация секции Articles завершена успешно"),()=>{window._articlesLanguageChangeHandler&&(window.removeEventListener("languageChanged",window._articlesLanguageChangeHandler),window._articlesLanguageChangeHandler=null),console.log("Очистка ресурсов секции Articles")}}function Ae(){if(console.log("Инициализация переключателей яркости текста в блоках - НАЧАЛО"),window._themeToggleInitialized)return console.warn("Обнаружена повторная инициализация переключателей яркости. Пропускаем..."),window._themeToggleCleanup;window._themeToggleInitialized=!0;const t=document.getElementById("articles")||document.querySelector(".articles"),o=document.getElementById("official-website")||document.querySelector(".official-website"),e=document.getElementById("retro-gaming")||document.querySelector(".retro-gaming");if(!t&&!o&&!e){console.error("Секции для добавления переключателей яркости текста не найдены");return}const r=[];function d(s,u){if(!s)return;console.log(`Добавление переключателей в секцию ${s.id||s.className}`);const i=s.querySelectorAll(".article");console.log(`Найдено ${i.length} блоков для добавления переключателей в секции ${s.id||s.className}`),i.forEach((f,b)=>{const w=u!==void 0?u:b%3;if(f.querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label")){console.warn(`Блок #${b} уже содержит кнопку переключения. Пропускаем создание.`);return}const y=document.createElement("button");switch(y.setAttribute("type","button"),w){case 0:y.className="brightness-toggle",y.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const S=f.querySelector(".article__title");if(S){const g=document.createElement("div");g.className="article__title-container";const a=S.cloneNode(!0);g.appendChild(a),g.appendChild(y),S.parentNode.replaceChild(g,S)}else f.insertBefore(y,f.firstChild);break;case 1:y.className="brightness-toggle",y.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const c=f.querySelector(".article__title");if(c){const g=document.createElement("div");g.className="article__title-container";const a=c.cloneNode(!0);g.appendChild(a),g.appendChild(y),c.parentNode.replaceChild(g,c)}else f.insertBefore(y,f.firstChild);break;case 2:y.className="brightness-toggle-with-label",y.innerHTML=`
            <span class="brightness-toggle-label">Ярче</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const n=f.querySelector(".article__title");if(n){const g=document.createElement("div");g.className="article__title-container";const a=n.cloneNode(!0);g.appendChild(a),g.appendChild(y),n.parentNode.replaceChild(g,n)}else f.insertBefore(y,f.firstChild);break}r.push(y)})}t&&d(t);let p;if(e){const s=e.querySelectorAll(".article");if(s.length>0){const u=s[0].querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label");u&&(u.classList.contains("brightness-toggle-corner")?p=1:u.classList.contains("brightness-toggle-with-label")?p=2:p=0,console.log(`Обнаружен стиль кнопки в секции R36S Retro Gaming: ${p}`))}}o&&d(o,p!==void 0?p:1),console.log(`Создано ${r.length} кнопок переключения`),r.forEach(s=>{const u=s.cloneNode(!0);s.parentNode&&s.parentNode.replaceChild(u,s);const i=r.indexOf(s);i!==-1&&(r[i]=u)}),r.forEach(s=>{const u=s.closest(".article");if(!u){console.error("Не найден родительский блок .article для кнопки переключения");return}s.addEventListener("click",function(w){if(w.preventDefault(),w.stopPropagation(),console.log("Клик по кнопке переключения яркости"),console.log("Состояние до переключения:",u.classList.contains("bright-text")?"яркий":"обычный"),u.classList.toggle("bright-text"),s.classList.toggle("active"),console.log("Состояние после переключения:",u.classList.contains("bright-text")?"яркий":"обычный"),s.classList.contains("brightness-toggle-with-label")){const c=s.querySelector(".brightness-toggle-label");c&&(c.textContent=u.classList.contains("bright-text")?"Тусклее":"Ярче",console.log("Изменен текст лейбла на:",c.textContent))}const E=u.getAttribute("data-article-id")||u.id||Array.from(u.closest("section").querySelectorAll(".article")).indexOf(u),y=u.closest("section")?u.closest("section").id||u.closest("section").className.split(" ")[0]:"unknown",S=u.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-${y}-article-brightness-${E}`,S),console.log(`Яркость текста в блоке ${E} секции ${y} изменена на: ${S}`)});const i=u.getAttribute("data-article-id")||u.id||Array.from(u.closest("section").querySelectorAll(".article")).indexOf(u),f=u.closest("section")?u.closest("section").id||u.closest("section").className.split(" ")[0]:"unknown";if(localStorage.getItem(`r36s-${f}-article-brightness-${i}`)==="bright"){if(u.classList.add("bright-text"),s.classList.add("active"),s.classList.contains("brightness-toggle-with-label")){const w=s.querySelector(".brightness-toggle-label");w&&(w.textContent="Тусклее")}console.log(`Восстановлено состояние для блока ${i} в секции ${f}: яркий`)}else console.log(`Блок ${i} в секции ${f} в обычном режиме`)});const l=document.createElement("style");l.textContent=`
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
  `,document.head.appendChild(l);const m=function(){r.forEach(s=>{if(s&&s.parentNode){const u=s.closest(".article__title-container");if(u){const i=u.querySelector(".article__title");i&&u.parentNode&&u.parentNode.replaceChild(i,u)}else s.parentNode.removeChild(s)}}),l&&l.parentNode&&l.parentNode.removeChild(l),window._themeToggleInitialized=!1,console.log("Очистка переключателей яркости выполнена")};return window._themeToggleCleanup=m,console.log("Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА"),m}const Y={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function F(t,o=24){return Y[t]?Y[t].replace(/width="24"/,`width="${o}"`).replace(/height="24"/,`height="${o}"`):(console.error(`Icon "${t}" not found`),"")}function Re(){document.querySelectorAll("[data-icon]").forEach(o=>{const e=o.getAttribute("data-icon"),r=parseInt(o.getAttribute("data-size")||"24",10);e&&(o.innerHTML=F(e,r))})}function Ie(){console.log("Инициализация секции Contact");const t=document.querySelector(".contact__form"),o=document.getElementById("name"),e=document.getElementById("email"),r=document.getElementById("phone"),d=document.getElementById("message"),p=document.querySelector(".form__button"),l=document.createElement("div");l.className="form__error",l.style.display="none",l.innerHTML=`
    <div class="form__error-icon">${F("alert-circle",16)}</div>
    <span></span>
  `,t.insertBefore(l,t.firstChild);const m={name:"",email:"",phone:"",message:""};function s(w){l.querySelector("span").textContent=w,l.style.display="flex"}function u(){l.style.display="none"}function i(w){const{name:E,value:y}=w.target;m[E]=y,u()}o.addEventListener("input",i),e.addEventListener("input",i),r.addEventListener("input",i),d.addEventListener("input",i);async function f(w){w.preventDefault(),b(!0);try{if(!m.name||!m.email||!m.phone||!m.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(m.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(c=>setTimeout(c,1e3)),o.value="",e.value="",r.value="",d.value="",Object.keys(m).forEach(c=>{m[c]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(y){s(y.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",y)}finally{b(!1)}}function b(w){[o,e,r,d].forEach(y=>{y.disabled=w}),p.disabled=w,p.innerHTML=w?`<span class="button__icon">${F("loader",20)}</span> Sending...`:`<span class="button__icon">${F("send",20)}</span> Send message`}return t.addEventListener("submit",f),function(){o.removeEventListener("input",i),e.removeEventListener("input",i),r.removeEventListener("input",i),d.removeEventListener("input",i),t.removeEventListener("submit",f)}}function Te(){const t="/R36S_STORE_JS/",e={review1:{webp:`${t}img/reviews/imm_1_1x.webp`,jpg:`${t}img/reviews/imm_1_1x.jpg`},review2:{webp:`${t}img/reviews/imm_2_1x.webp`,jpg:`${t}img/reviews/imm_2_1x.jpg`},review3:{webp:`${t}img/reviews/imm_3_1x.webp`,jpg:`${t}img/reviews/imm_3_1x.jpg`},review4:{webp:`${t}img/reviews/imm_4_1x.webp`,jpg:`${t}img/reviews/imm_4_1x.jpg`}},r=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:e.review1.webp,jpeg:e.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:e.review4.webp,jpeg:e.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:e.review3.webp,jpeg:e.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:e.review2.webp,jpeg:e.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],d=new Set;let p=null,l=window.innerWidth<=1200;function m(n=!1){const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.classList.add("review-card__star"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill",n?"currentColor":"none"),g.setAttribute("stroke","currentColor"),g.setAttribute("stroke-width","2");const a=document.createElementNS("http://www.w3.org/2000/svg","polygon");return a.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),g.appendChild(a),g}function s(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("review-card__verified"),n.setAttribute("width","16"),n.setAttribute("height","16"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2");const g=document.createElementNS("http://www.w3.org/2000/svg","path");return g.setAttribute("d","M20 6L9 17l-5-5"),n.appendChild(g),n}function u(n){const g=document.getElementById("reviewCardTemplate");if(!g)return console.error("Шаблон карточки отзыва не найден"),null;const a=g.content.cloneNode(!0).querySelector(".review-card");a.dataset.id=n.id,n.mobileOnly&&(a.classList.add("mobile-only"),l||(a.style.display="none"));const h=a.querySelector(".review-card__rating");for(let C=0;C<5;C++)h.appendChild(m(C<n.rating));a.querySelector(".review-card__variant").textContent=n.color,a.querySelector(".review-card__text").textContent=n.text;const x=a.querySelector("picture");x.querySelector("source").setAttribute("srcset",n.images.webp);const v=x.querySelector("img");v.setAttribute("src",n.images.jpeg),v.setAttribute("alt",`Review ${n.id}`);const _=a.querySelector(".review-card__name");n.verified&&_.prepend(s()),_.appendChild(document.createTextNode(n.author)),a.querySelector(".review-card__date").textContent=n.date,a.querySelector(".review-card__helpful-count").textContent=`Helpful (${n.helpful})`,a.addEventListener("click",i),a.addEventListener("mouseenter",()=>f(n.id)),a.addEventListener("mouseleave",b);const k=a.querySelector(".review-card__helpful");return k.addEventListener("mouseenter",()=>{k.querySelector("svg").setAttribute("fill","currentColor"),k.querySelector("svg").classList.add("scale-125"),k.querySelector("svg").classList.remove("scale-100")}),k.addEventListener("mouseleave",()=>{k.querySelector("svg").setAttribute("fill","none"),k.querySelector("svg").classList.remove("scale-125"),k.querySelector("svg").classList.add("scale-100")}),a}function i(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function f(n){p=n;const g=document.querySelector(`.review-card[data-id="${n}"]`);if(g){const a=g.querySelector(".review-card__arrow-wrapper");a&&(a.style.display="flex")}}function b(){const n=document.querySelector(`.review-card[data-id="${p}"]`);if(n){const g=n.querySelector(".review-card__arrow-wrapper");g&&(g.style.display="none")}p=null}function w(){const n=document.getElementById("reviewsGrid");if(!n){console.error("Контейнер для отзывов не найден");return}const g=document.getElementById("reviewCardTemplate"),a={};n.querySelectorAll(".review-card").forEach(v=>{v.dataset.id&&(a[v.dataset.id]=v)});const h=r.filter(v=>!v.mobileOnly||v.mobileOnly&&l),x=[];h.forEach(v=>{if(a[v.id]){const _=a[v.id];_.style.display="block",x.push(_),delete a[v.id]}else{const _=u(v);_&&x.push(_)}}),Object.values(a).forEach(v=>{v!==g&&(v.style.display="none")}),n.innerHTML="",n.appendChild(g),x.forEach(v=>{n.appendChild(v)}),E()}function E(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(g=>{g.classList.add("animate-in")});return}const n=new IntersectionObserver(g=>{g.forEach(a=>{if(a.isIntersecting){const h=a.target.dataset.id;d.has(h)||(a.target.classList.add("animate-in"),d.add(h))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(g=>{n.observe(g)})}function y(){l=window.innerWidth<=1200,w(),document.querySelectorAll(".review-card").forEach(g=>{g.classList.contains("mobile-only")&&(g.style.display=l?"block":"none")})}function S(){w();let n;const g=()=>{clearTimeout(n),n=setTimeout(y,250)};window.addEventListener("resize",g);const a=document.createElement("style");a.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(a),setTimeout(y,100);const h=document.getElementById("reviews");if(h&&!h.hasAttribute("itemscope")){h.setAttribute("itemscope",""),h.setAttribute("itemtype","http://schema.org/Product");const x=document.createElement("meta");x.setAttribute("itemprop","name"),x.setAttribute("content","R36S Handheld Game Console"),h.prepend(x);const v=document.createElement("meta");v.setAttribute("itemprop","description"),v.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),h.prepend(v)}}S();function c(){if(window.removeEventListener("resize",y),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const n=[];new IntersectionObserver(()=>{}).disconnect(),n.forEach(a=>a.disconnect())}document.querySelectorAll(".review-card").forEach(n=>{n.removeEventListener("click",i),n.removeEventListener("mouseenter",()=>{}),n.removeEventListener("mouseleave",b),Object.keys(r).forEach(a=>{n.removeEventListener("mouseenter",()=>f(a))});const g=n.querySelector(".review-card__helpful");g&&(g.removeEventListener("mouseenter",()=>{}),g.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:c,renderReviewCards:w}}const Be={};function qe(){console.log("Products секция инициализирована");const o=!Be?"/":"/R36S_STORE_JS/",e={i0_0:{jpg:`${o}img/products/i_0_0x.jpg`,webp:`${o}img/products/i_0_0x.webp`},i1:{jpg:`${o}img/products/i_1_1x.jpg`,webp:`${o}img/products/i_1_1x.webp`},i2:{jpg:`${o}img/products/i_2_1x.jpg`,webp:`${o}img/products/i_2_1x.webp`},i3:{jpg:`${o}img/products/i_3_1x.jpg`,webp:`${o}img/products/i_3_1x.webp`},i4:{jpg:`${o}img/products/i_4_1x.jpg`,webp:`${o}img/products/i_4_1x.webp`},i5:{jpg:`${o}img/products/i_5_1x.jpg`,webp:`${o}img/products/i_5_1x.webp`},i6:{jpg:`${o}img/products/i_6_1x.jpg`,webp:`${o}img/products/i_6_1x.webp`},i7:{jpg:`${o}img/products/i_7_1x.jpg`,webp:`${o}img/products/i_7_1x.webp`},i8:{jpg:`${o}img/products/i_8_1x.jpg`,webp:`${o}img/products/i_8_1x.webp`},i9:{jpg:`${o}img/products/i_9_1x.jpg`,webp:`${o}img/products/i_9_1x.webp`}},r=[{id:"getting-started",title:"Start Guide",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

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

• A quick press of the power button will put the device into standby mode.`,images:{jpg:e.i9.jpg,webp:e.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let d="downloads",p=!1;const l=document.getElementById("products-nav-list"),m=document.getElementById("products-sections"),s=document.getElementById("products-nav");function u(){p=window.innerWidth<=1024,s&&(p?s.classList.add("nav-mobile"):s.classList.remove("nav-mobile"))}function i(y){d=y,document.querySelectorAll(".nav-item").forEach(n=>{n.dataset.sectionId===y?n.classList.add("nav-item-active"):n.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(n=>{n.id===y?n.classList.add("section-active"):n.classList.remove("section-active")}),setTimeout(()=>{const n=document.getElementById(y);if(n){const g=p?80:20,h=n.getBoundingClientRect().top+window.pageYOffset-g;window.scrollTo({top:h,behavior:"smooth"})}},100)}function f(){l.innerHTML="",r.forEach(y=>{const S=document.createElement("button");S.className=`nav-item ${d===y.id?"nav-item-active":""}`,S.dataset.sectionId=y.id,S.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${y.title}</span>
      `,S.addEventListener("click",()=>i(y.id)),l.appendChild(S)})}function b(y){if(y.id==="downloads"){let n='<div class="download-list">';return y.content.downloads.forEach(g=>{n+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${g.file}</div>
                <div class="download-meta">Update: ${g.date} • ${g.version}</div>
              </div>
            </div>
            <a href="${g.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),n+="</div>",n}let S='<div class="section-content"><div class="text-content">';return y.content.text.split(`
`).forEach(n=>{S+=`<p>${n.trim()}</p>`}),S+="</div>",y.content.images&&(S+=`
        <div class="image-container">
          <picture>
            <source srcset="${y.content.images.webp}" type="image/webp">
            <img src="${y.content.images.jpg}" alt="${y.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),y.content.subsections&&(S+='<div class="subsections">',y.content.subsections.forEach(n=>{S+=`
          <div class="subsection">
            <h3 class="subsection-title">${n.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,n.content.text.split(`
`).forEach(a=>{S+=`<p>${a.trim()}</p>`}),S+="</div>",n.content.images&&(S+=`
            <div class="image-container">
              <picture>
                <source srcset="${n.content.images.webp}" type="image/webp">
                <img src="${n.content.images.jpg}" alt="${n.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),S+="</div></div>"}),S+="</div>"),S+="</div>",S}function w(){m.innerHTML="",r.forEach(y=>{const S=document.createElement("section");S.id=y.id,S.className=`section ${d===y.id?"section-active":""}`,S.innerHTML=`
        <h2 class="section-title">${y.title}</h2>
        ${b(y)}
      `,m.appendChild(S)})}function E(){u(),f(),w(),window.addEventListener("resize",u),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return l&&m&&s?E():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:i,checkMobile:u}}function Me(){console.log("Инициализация Footer");const t=document.querySelector(".footer");if(!t){console.error("Элемент footer не найден");return}const o=t.querySelector(".partnership-button");o&&o.addEventListener("click",()=>{const e=document.querySelector(".partnership-modal-overlay");if(e){e.classList.add("active");const r=e.querySelector(".partnership-modal-content");r&&r.classList.add("active"),document.body.style.overflow="hidden"}}),$e()}function $e(){const t=document.querySelector(".partnership-modal-overlay");if(!t){console.warn("Модальное окно не найдено");return}const o=t.querySelector(".partnership-modal-close");o&&o.addEventListener("click",e),t.addEventListener("click",r=>{r.target===t&&e()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&t.classList.contains("active")&&e()});function e(){const r=t.querySelector(".partnership-modal-content");t.classList.remove("active"),r&&r.classList.remove("active"),document.body.style.overflow=""}}console.log("Main.js инициализирован");let B=[];function Fe(){const t="IntersectionObserver"in window,o=function(){const r=document.createElement("div");return r.style.display="flex",r.style.display==="flex"}(),e=function(){const r=document.createElement("div");return r.style.display="grid",r.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",t),console.log("- Flexbox:",o),console.log("- CSS Grid:",e),t||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:t,hasFlexbox:o,hasGrid:e}}function Oe(){try{B.forEach(t=>{typeof t=="function"&&t()}),B=[]}catch(t){console.warn("Error during global cleanup:",t)}}async function De(){try{const t=J(O);console.log("Language from URL:",t);const o=localStorage.getItem("userLanguage")||t||"en",e=["ar"];document.documentElement.setAttribute("lang",o),document.documentElement.dir=e.includes(o)?"rtl":"ltr";const r=me({forcedLanguage:t}),d=new Promise((p,l)=>{setTimeout(()=>{l(new Error("i18n initialization timed out after 5 seconds"))},5e3)});return await Promise.race([r,d]),he(),document.documentElement.classList.add("i18n-initialized"),!0}catch(t){console.error("Error initializing i18n:",t);try{document.documentElement.setAttribute("lang","en"),document.documentElement.dir="ltr",document.documentElement.classList.add("i18n-failed")}catch(o){console.error("Failed to set fallback language attributes:",o)}return!1}}document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM загружен");try{document.documentElement.classList.add("loading-i18n");const t=await De();document.documentElement.classList.remove("loading-i18n"),t||console.warn("Continuing page initialization with failed i18n");const o=[];o.push((async()=>{try{const m=pe();return typeof m=="function"&&B.push(m),!0}catch(m){return console.error("Failed to initialize header:",m),!1}})()),o.push((async()=>{try{const m=fe();return typeof m=="function"&&B.push(m),!0}catch(m){return console.error("Failed to initialize mobile menu:",m),!1}})()),o.push((async()=>{try{return Re(),!0}catch(m){return console.error("Failed to initialize icons:",m),!1}})()),o.push((async()=>{try{const m=Fe();return!0}catch(m){return console.error("Failed to check browser compatibility:",m),!1}})()),[{name:"hero",init:we},{name:"about",init:Le},{name:"features",init:_e},{name:"categories",init:Ce},{name:"articles",init:re},{name:"themeToggle",init:Ae},{name:"contact",init:Ie},{name:"reviews",init:Te},{name:"products",init:qe},{name:"footer",init:Me},{name:"scrollToTop",init:le}].forEach(m=>{o.push((async()=>{try{const s=m.init();return typeof s=="function"&&B.push(s),!0}catch(s){return console.error(`Failed to initialize ${m.name}:`,s),!1}})())});const r=await Promise.allSettled(o),d=r.length,p=r.filter(m=>m.status==="fulfilled"&&m.value===!0).length;console.log(`Инициализация завершена: ${p}/${d} компонентов успешно загружены`);const l=performance.now();console.log(`Страница загружена за ${l.toFixed(2)}ms`),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"),window.addEventListener("beforeunload",Oe)}catch(t){console.error("Критическая ошибка при инициализации страницы:",t),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("error")}});window.onerror=function(t,o,e,r,d){return console.error("Глобальная ошибка:",{message:t,source:o,lineno:e,colno:r,error:d}),!1};window.addEventListener("unhandledrejection",function(t){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",t.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
