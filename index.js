import{i as E}from"./assets/vendor-C77IuWVK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const c of p.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(u){if(u.ep)return;u.ep=!0;const p=e(u);fetch(u.href,p)}})();function ue(){console.log("Инициализация кнопки прокрутки вверх и селектора языка");const o={en:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
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
        </svg>`},t=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],e={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},s=document.createElement("div");s.className="corner-buttons-container";const u=document.createElement("div");u.className="language-selector",u.id="corner-language-selector";const p=document.createElement("button");p.className="language-button",p.setAttribute("aria-label","Выбрать язык");const c=document.createElement("div");c.className="language-button__flag",c.id="current-language-flag";const m=document.createElement("div");m.className="language-dropdown",m.id="language-dropdown";const d=document.createElement("button");d.className="scroll-to-top",d.setAttribute("aria-label","Прокрутить вверх страницы"),d.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `,p.appendChild(c),u.appendChild(p),u.appendChild(m),s.appendChild(u),s.appendChild(d),document.body.appendChild(s),b();function g(v,_){let S;return function(){const k=arguments,l=this;S||(v.apply(l,k),S=!0,setTimeout(()=>S=!1,_))}}const a=g(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?d.classList.add("visible"):d.classList.remove("visible")},100);function w(v){v.preventDefault(),d.classList.add("active"),setTimeout(()=>{d.classList.remove("active")},200),window.scrollTo({top:0,behavior:"smooth"})}function b(){try{let S=function(l){try{if(!document.body.contains(c)){console.warn("Current language flag element removed from DOM");return}c.innerHTML=o[l]||""}catch(r){console.error("Error updating language button appearance:",r)}},k=function(){try{if(!document.body.contains(m)){console.warn("Language dropdown removed from DOM");return}m.innerHTML="",t.forEach(l=>{const r=document.createElement("div");r.className=`language-dropdown__item ${l===_?"active":""}`,r.dataset.lang=l;const h=document.createElement("div");h.className="language-dropdown__flag",h.innerHTML=o[l]||"";const y=document.createElement("div");y.className="language-dropdown__name",y.textContent=e[l]||l,r.appendChild(h),r.appendChild(y),m.appendChild(r),r.addEventListener("click",n=>{try{if(!document.body.contains(v)){console.warn("Original language selector removed from DOM");return}if(!document.body.contains(m)){console.warn("Language dropdown removed from DOM");return}v.value=l;try{const f=new Event("change");v.dispatchEvent(f)}catch(f){console.error("Error dispatching change event:",f),typeof v.onchange=="function"&&v.onchange()}u.classList.remove("active"),document.querySelectorAll(".language-dropdown__item").forEach(f=>{f.classList.toggle("active",f.dataset.lang===l)}),S(l)}catch(f){console.error("Error handling language item click:",f)}})})}catch(l){console.error("Error creating language dropdown items:",l)}},v=document.getElementById("language-selector");v||(v=document.createElement("select"),v.id="language-selector",v.style.display="none",document.body.appendChild(v),t.forEach(l=>{const r=document.createElement("option");r.value=l,r.textContent=e[l]||l,v.appendChild(r)}));const _=localStorage.getItem("userLanguage")||"en";v&&(v.value=_),S(_),k(),p.addEventListener("click",function(l){try{if(l.preventDefault(),l.stopPropagation(),!document.body.contains(u)){console.warn("Language selector container removed from DOM");return}u.classList.toggle("active")}catch(r){console.error("Error handling language button click:",r)}}),document.addEventListener("click",l=>{try{if(!document.body.contains(u))return;u.contains(l.target)||u.classList.remove("active")}catch(r){console.error("Error handling document click:",r)}}),window.addEventListener("languageChanged",l=>{try{if(!document.body.contains(m)||!document.body.contains(c)){console.warn("Language elements removed from DOM, skipping update");return}l.detail&&l.detail.language&&(S(l.detail.language),document.querySelectorAll(".language-dropdown__item").forEach(r=>{r.classList.toggle("active",r.dataset.lang===l.detail.language)}))}catch(r){console.error("Error handling language change event:",r)}})}catch(v){console.error("Ошибка при инициализации селектора языка:",v)}}return window.addEventListener("scroll",a,{passive:!0}),d.addEventListener("click",w),a(),function(){console.log("Очистка кнопки прокрутки вверх и селектора языка"),window.removeEventListener("scroll",a),d.removeEventListener("click",w),p.removeEventListener("click",()=>{}),document.querySelectorAll(".language-dropdown__item").forEach(_=>{_.removeEventListener("click",()=>{})}),s&&s.parentNode&&s.parentNode.removeChild(s)}}function ge(o,t){try{const e=sessionStorage.getItem("detectedBrowserLanguage");if(e&&o.includes(e))return console.log("Using cached browser language detection:",e),e;if(!Array.isArray(o)||o.length===0)return console.warn("Invalid supportedLanguages array, using default language"),t;console.log("Detecting user language with:",{supportedLanguages:o,defaultLanguage:t});const s=m=>{if(!m)return!1;const d=m.split("-")[0].toLowerCase();return o.includes(d)?d:null},u=localStorage.getItem("userLanguage");console.log("Saved language in localStorage:",u);const p=u&&u.trim()!==""&&s(u);if(p)return console.log("Using saved language preference:",p),p;let c=[];navigator.languages&&navigator.languages.length?c=[...navigator.languages]:navigator.language?c=[navigator.language]:navigator.userLanguage?c=[navigator.userLanguage]:navigator.browserLanguage?c=[navigator.browserLanguage]:navigator.systemLanguage&&(c=[navigator.systemLanguage]),console.log("Browser language preferences:",c);for(const m of c){const d=s(m);if(d)return console.log("Found supported browser language:",d),sessionStorage.setItem("detectedBrowserLanguage",d),d}return console.log("No matching language found, using default:",t),t}catch(e){return console.error("Error in detectUserLanguage:",e),console.error("Stack trace:",e.stack),t}}function me(o){try{if(!Array.isArray(o)||o.length===0)return console.warn("Invalid supportedLanguages array passed to getLanguageFromURL"),null;const t=window.location.pathname;console.log("Current path for language detection:",t);const e="/R36S_CONSOLE_STORE_JS/";if(console.log("Base URL for language detection:",e),!t||t==="/")return console.log("Empty path, no language prefix"),null;let s=t;e!=="/"&&t.startsWith(e)&&(s=t.substring(e.length)||"/"),console.log("Path without base for language detection:",s);const u=s.split("/").filter(p=>p.trim()!=="");if(console.log("Path parts for language detection:",u),u.length>0){const p=u[0].toLowerCase();if(o.includes(p))return console.log(`Found language in URL: ${p}`),p}return null}catch(t){return console.error("Error getting language from URL:",t),null}}function ae(o){try{if(!o){console.warn("No language provided to updateLanguageURL");return}if(typeof o!="string"||o.trim()===""){console.warn("Invalid language value provided to updateLanguageURL");return}console.log("Current localStorage userLanguage before URL update:",localStorage.getItem("userLanguage")),console.log("Before language URL update, current URL:",window.location.href),console.log("Updating URL for language:",o);try{const t="/R36S_CONSOLE_STORE_JS/";if(o==="en"){window.location.href=t;return}window.location.href=`${t}${o}/`}catch(t){console.error("Error updating URL with language:",t)}}catch(t){console.error("Error updating URL with language:",t)}}const W={},G=["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"],he={en:"English",ru:"Русский",ar:"العربية",be:"Беларуская",de:"Deutsch",es:"Español",fr:"Français",it:"Italiano",ja:"日本語",ko:"한국어",nl:"Nederlands",pt:"Português",tr:"Türkçe",uk:"Українська"},K=["about","articles","categories","contact","features","footer","header","hero","mobilemenu","products","reviews"],pe=(o,t)=>`/R36S_CONSOLE_STORE_JS/locales/${o}/${t}.json`,fe=async(o,t)=>{const e=`${o}_${t}`;if(W[e])return W[e];const s=2,u=async(p,c,m)=>{if(m>=s)return console.error(`Превышено максимальное количество попыток загрузки ${p}/${c}`),{};try{const d=pe(p,c);console.log(`Загрузка перевода: ${d}`);const g=new AbortController,a=setTimeout(()=>g.abort(),5e3),w=await fetch(d,{cache:"no-store",headers:{"Cache-Control":"no-cache"},signal:g.signal});if(clearTimeout(a),!w.ok)return console.warn(`Не удалось загрузить перевод ${p}/${c}: ${w.status}`),p!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${c}`),u("en",c,m+1)):{};const b=await w.json();if(!b||typeof b!="object")throw new Error(`Invalid translation data format for ${p}/${c}`);return W[e]=b,b}catch(d){return d.name==="AbortError"?console.error(`Таймаут загрузки ${p}/${c} переводов`):console.error(`Ошибка загрузки ${p}/${c} переводов:`,d),p!=="en"?(console.log(`Пробуем загрузить запасной перевод (en) для ${c} после ошибки`),u("en",c,m+1)):{}}};return u(o,t,0)},ee=async o=>{try{let t=0,e=0;const s=await Promise.allSettled(K.map(p=>fe(o,p))),u={};return s.forEach((p,c)=>{if(p.status==="fulfilled"){const m=p.value,d=K[c];m&&Object.keys(m).length>0?(u[d]=m,t++):(console.warn(`Получен пустой или недействительный перевод для секции: ${d}`),e++)}else console.warn(`Не удалось загрузить секцию: ${K[c]}, ошибка:`,p.reason),e++}),console.log(`Загрузка переводов для ${o}: успешно ${t}, не удалось ${e}`),u}catch(t){return console.error(`Ошибка загрузки переводов для ${o}:`,t),{}}},N=()=>{try{const o=document.querySelectorAll("[data-i18n]");if(console.log(`Обновление ${o.length} текстовых элементов`),o.length===0){console.log("Не найдено элементов с атрибутом data-i18n");return}o.forEach(t=>{try{const e=t.getAttribute("data-i18n");if(!e)return;if(e.startsWith("[")){const s=e.match(/^\[(.*)\](.*)$/);if(s){const[,u,p]=s,c=E.t(p);c&&c!==p&&t.setAttribute(u,c)}}else{const s=E.t(e);s&&s!==e?t.hasAttribute("content")?t.setAttribute("content",s):(!t.dataset.originalText&&E.language!=="en"&&(t.dataset.originalText=t.textContent),t.textContent=s):t.dataset.originalText&&E.language==="en"&&(t.textContent=t.dataset.originalText)}}catch(e){console.warn("Ошибка при обновлении элемента:",e,t)}})}catch(o){console.error("Ошибка обновления текстовых элементов:",o)}},H=()=>{try{const t=["ar"].includes(E.language)?"rtl":"ltr";document.documentElement.dir=t,document.documentElement.setAttribute("lang",E.language),t==="rtl"?document.documentElement.classList.add("rtl"):document.documentElement.classList.remove("rtl"),[".header",".footer",".mobile-menu",".hero",".features",".about",".contact","main"].forEach(s=>{const u=document.querySelector(s);u&&(t==="rtl"?u.classList.add("rtl"):u.classList.remove("rtl"))})}catch(o){console.error("Ошибка обновления поддержки RTL:",o)}},V=async()=>{try{const o=[];o.push((async()=>{try{N()}catch(t){console.error("Failed to update text elements:",t)}})()),o.push((async()=>{try{H()}catch(t){console.error("Failed to update RTL support:",t)}})()),await Promise.allSettled(o);try{window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:E.language}}))}catch(t){console.error("Error dispatching languageChanged event:",t)}console.log("Content update completed for language:",E.language)}catch(o){throw console.error("Error in updateAllContent:",o),o}};async function we(o={}){try{console.log("Setting up i18n with options:",o),console.log("Current localStorage userLanguage:",localStorage.getItem("userLanguage")),console.log("Current BASE_URL:","/R36S_CONSOLE_STORE_JS/");const{forcedLanguage:t}=o,e=localStorage.getItem("userLanguage"),s=e&&G.includes(e),u=t||(s?e:null)||ge(G,"en");console.log("Selected user language:",u);let p={};try{p=await ee(u),console.log(`Загруженные переводы для ${u}:`,p)}catch(g){console.error(`Ошибка загрузки переводов для ${u}:`,g)}let c=null;if(u!=="en")try{c=await ee("en")}catch(g){console.error("Ошибка загрузки запасных переводов:",g)}const m={[u]:{translation:p}};c&&(m.en={translation:c}),await E.init({lng:u,fallbackLng:"en",resources:m,interpolation:{escapeValue:!1},debug:!1,load:"languageOnly",returnNull:!1,returnEmptyString:!1,saveMissing:!1,keySeparator:".",nsSeparator:":",missingKeyHandler:(g,a,w,b)=>{console.warn(`Отсутствует ключ перевода: ${w} для языка ${g} в пространстве ${a}. Используется HTML-текст.`)},parseMissingKeyHandler:g=>null}),localStorage.setItem("userLanguage",u);const d=async g=>{try{console.log("Language changed to:",g),localStorage.setItem("userLanguage",g),ae(g),await V()}catch(a){console.error("Error in language change handler:",a);try{N(),H()}catch(w){console.error("Failed to update basic content:",w)}}};E.on("languageChanged",d),window.updateContent=async()=>{try{await V()}catch(g){console.error("Error in window.updateContent:",g);try{N(),H()}catch(a){console.error("Failed to recover content update:",a)}}};try{await V()}catch(g){console.error("Error in initial content update:",g);try{N(),H()}catch(a){console.error("Failed to perform basic content update:",a)}}return E}catch(t){console.error("Fatal error in setupI18n:",t);try{E.isInitialized||await E.init({lng:"en",resources:{},interpolation:{escapeValue:!1}})}catch(e){console.error("Failed to create fallback i18next instance:",e)}return E}}function ve(){const o=document.getElementById("language-selector");if(o)try{if(o.childElementCount===0){const t=document.createDocumentFragment();G.forEach(e=>{const s=document.createElement("option");s.value=e,s.textContent=he[e]||e,t.appendChild(s)}),o.appendChild(t)}o.value=E.language,o.addEventListener("change",async function(t){t.preventDefault();try{const e=t.target.value;if(console.log(`Language selector changed to: ${e}`),!document.contains(o)){console.log("Language selector no longer in DOM, aborting");return}localStorage.setItem("userLanguage",e),ae(e)}catch(e){console.error("Error changing language:",e),document.contains(o)&&(o.value=E.language)}})}catch(t){console.error("Error setting up language selector:",t)}}function ye(){let o=!1,t=window.scrollY,e=null;const s=document.querySelector(".header"),u=document.querySelector(".burger-btn"),p=document.querySelector(".burger-line"),c=document.querySelector(".mobile-menu"),m=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function d(){const k=window.scrollY,l=t<k;e&&clearTimeout(e),k>100?b(!l):b(!0),t=k,w(k>0),e=setTimeout(()=>{},150)}function g(){o=!o,a()}function a(){o?(s.classList.add("menu-open"),u.setAttribute("aria-expanded","true"),p.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"):(s.classList.remove("menu-open"),u.setAttribute("aria-expanded","false"),p.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow="unset")}function w(k){k?s.classList.add("scrolled"):s.classList.remove("scrolled")}function b(k){k?(s.classList.add("visible"),s.classList.remove("hidden")):(s.classList.add("hidden"),s.classList.remove("visible"))}function v(k){k.preventDefault();const l=k.currentTarget.getAttribute("href"),r=l.replace("#",""),h=document.getElementById(r);h&&(b(!0),setTimeout(()=>{s.offsetHeight;const n=h.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:n,behavior:"smooth"}),o&&(o=!1,a()),window.history.replaceState(null,"",`${window.location.pathname}${l}`),setTimeout(()=>{t=window.scrollY},100)},50))}function _(){if(window.location.hash){const k=window.location.hash.replace("#",""),l=document.getElementById(k);l&&setTimeout(()=>{const r=s.offsetHeight,y=l.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:y,behavior:"smooth"})},100)}}function S(k){var l;try{const r=document.querySelector(".header");if(!r){console.log("Header no longer in DOM, skipping language change handling");return}const h=["ar"],y=((l=k==null?void 0:k.detail)==null?void 0:l.language)||E.language;h.includes(y)?r.classList.add("rtl"):r.classList.remove("rtl"),console.log("Language changed in header to:",y),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(i=>{r.classList.remove(`lang-${i}`)}),r.classList.add(`lang-${y}`);const f=r.querySelector("[aria-label]");if(f){const i=E.t("header.aria-label.navigation");i&&i!=="header.aria-label.navigation"&&f.setAttribute("aria-label",i)}}catch(r){console.error("Error handling language change in header:",r)}}return window.addEventListener("scroll",d),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&o&&(o=!1,a())}),window.addEventListener("languageChanged",S),u&&u.addEventListener("click",g),m.forEach(k=>{k.addEventListener("click",v)}),_(),S(),function(){window.removeEventListener("scroll",d),window.removeEventListener("languageChanged",S),window.removeEventListener("resize",()=>{}),u&&u.removeEventListener("click",g),m.forEach(l=>{l.removeEventListener("click",v)})}}function be(){const o=document.querySelector(".mobile-menu");if(!o){console.error("Мобильное меню не найдено в DOM");return}const t=o.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{e()});function e(){o.classList.remove("open");const m=document.querySelector(".burger-line");m&&m.classList.remove("open"),document.body.style.overflow="unset";const d=document.querySelector(".header");d&&d.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}const s=o.querySelectorAll(".mobile-menu__link");s.forEach(m=>{m.addEventListener("click",()=>{setTimeout(()=>{e()},150)})});const u=o.querySelector(".mobile-menu__background");u&&u.addEventListener("click",()=>{e()});function p(){o.querySelectorAll(".mobile-menu__icon").forEach((d,g)=>{d.style.opacity="0",d.style.transform="translateX(-20px)",new MutationObserver(w=>{w.forEach(b=>{b.attributeName==="class"&&(o.classList.contains("open")?setTimeout(()=>{d.style.transition="all 0.4s ease",d.style.opacity="1",d.style.transform="translateX(0)"},100+g*70):(d.style.opacity="0",d.style.transform="translateX(-20px)"))})}).observe(o,{attributes:!0})})}function c(m){var d;try{const g=document.querySelector(".mobile-menu");if(!g){console.log("Mobile menu no longer in DOM, skipping language change handling");return}const a=["ar"],w=((d=m==null?void 0:m.detail)==null?void 0:d.language)||E.language;a.includes(w)?(g.classList.add("rtl"),g.querySelectorAll(".mobile-menu__item").forEach(S=>{S.classList.add("rtl")})):(g.classList.remove("rtl"),g.querySelectorAll(".mobile-menu__item").forEach(S=>{S.classList.remove("rtl")})),console.log("Language changed in mobile menu to:",w),["en","ru","ar","be","de","es","fr","it","ja","ko","nl","pt","tr","uk"].forEach(_=>{g.classList.remove(`lang-${_}`)}),g.classList.add(`lang-${w}`);const v=g.querySelector(".close-button");if(v){const _=E.t("mobilemenu.close");_&&_!=="mobilemenu.close"&&v.setAttribute("aria-label",_)}}catch(g){console.error("Error handling language change in mobile menu:",g)}}return window.addEventListener("languageChanged",c),p(),c(),console.log("Мобильное меню с иконками инициализировано"),function(){t&&t.removeEventListener("click",e),s.forEach(d=>{d.removeEventListener("click",()=>{})}),u&&u.removeEventListener("click",e),window.removeEventListener("languageChanged",c)}}const Z=o=>"";function xe(){const o=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),e=document.querySelector(".hero__content"),s=document.querySelector(".hero__description--desktop"),u=document.querySelector(".hero__description--mobile");document.querySelector(".hero__pricing");const p=document.getElementById("buy-button"),c=document.getElementById("more-details-button"),m=document.querySelector(".hero__current-price"),d=document.querySelector(".hero__original-price"),g=document.querySelector(".hero__discount-badge");let a=null,w,b;function v(){try{if(!document.body.contains(o)){console.warn("Hero section removed from DOM, skipping price update");return}if(m){const i=Z("current")}if(d){const i=Z("original")}if(g){const i=Z("discount")}}catch(i){console.error("Ошибка при обновлении цен:",i)}}function _(){if(!(!t||!o))try{t.onload=()=>{document.body.contains(o)&&o.classList.add("hero--loaded")},t.onerror=()=>{console.error("Не удалось загрузить изображение:",t.src),document.body.contains(o)&&o.classList.add("hero--loaded")},t.complete&&document.body.contains(o)&&o.classList.add("hero--loaded")}catch(i){console.error("Ошибка при настройке изображения в Hero секции:",i)}}function S(){try{if(!s||!u||!document.body.contains(s)||!document.body.contains(u))return;const i=window.innerWidth>992;s.style.display=i?"block":"none",u.style.display=i?"none":"block"}catch(i){console.error("Ошибка при адаптации контента для разных экранов:",i)}}function k(){if(e)try{a&&(a.disconnect(),a=null),a=new IntersectionObserver(i=>{i.forEach(x=>{var L;x.isIntersecting&&((L=x.target)!=null&&L.isConnected)&&(x.target.classList.add("animate-in"),a==null||a.unobserve(x.target))})},{threshold:.1}),e.isConnected&&a.observe(e)}catch(i){console.error("Ошибка при настройке анимации контента:",i)}}function l(){try{p&&p.addEventListener("click",h),c&&c.addEventListener("click",y)}catch(i){console.error("Ошибка при настройке обработчиков кнопок:",i)}}function r(){try{b=i=>{var x;try{if(!document.body.contains(o)){console.warn("Hero section removed from DOM, skipping language change handling");return}console.log("Hero секция получила событие изменения языка:",i.detail),v();const L=["ar"],C=((x=i==null?void 0:i.detail)==null?void 0:x.language)||"en";L.includes(C)?o.classList.add("rtl"):o.classList.remove("rtl")}catch(L){console.error("Error in hero language change handler:",L)}},window.addEventListener("languageChanged",b)}catch(i){console.error("Ошибка при настройке слушателя смены языка:",i)}}function h(){try{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}catch(i){console.error("Ошибка при обработке клика по кнопке Buy:",i)}}function y(i){try{i.preventDefault();const x=document.getElementById("features");if(!x){window.location.hash="features";return}const C=x.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:C,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}catch(x){console.error("Ошибка при обработке клика по кнопке More Details:",x)}}function n(){try{a&&a.disconnect(),clearTimeout(w),window.removeEventListener("resize",f),b&&window.removeEventListener("languageChanged",b),p&&p.removeEventListener("click",h),c&&c.removeEventListener("click",y)}catch(i){console.error("Ошибка при очистке ресурсов Hero секции:",i)}}function f(){clearTimeout(w),w=setTimeout(S,200)}try{_(),S(),k(),l(),r(),v(),window.addEventListener("resize",f)}catch(i){console.error("Ошибка при инициализации Hero секции:",i)}return n}function Se(o){let t=null,e=null,s=!1,u=0,p=null,c=[];const m=(i,x)=>{try{const L=E.t(i);return L!==i?L:x}catch(L){return console.warn(`Error getting translation for ${i}:`,L),x}},d=i=>{try{const x=E.language,L={en:"Discount",ru:"Скидка",ar:"خصم",be:"Зніжка",de:"Rabatt",es:"Descuento",fr:"Réduction",it:"Sconto",ja:"割引",ko:"할인",nl:"Korting",pt:"Desconto",tr:"İndirim",uk:"Знижка"};if(i==="current"){const C=E.t("hero.pricing.current",{defaultValue:null});return C&&C!=="hero.pricing.current"?C:L[x]||L.en}return""}catch(x){return console.warn("Error getting static discount text:",x),i==="current"?"Discount":i==="original"?"Discount -29%":i==="discount"?"-68%":""}};function g(){return document.documentElement.dir==="rtl"}(()=>{document.getElementById("modal-about-styles")||console.log("Проверка стилей модального окна")})();function w(i){i.key==="Escape"&&s&&y()}function b(){const i=document.createElement("div");return i.className="modal-about-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.addEventListener("click",y),o.appendChild(i),i}function v(){if(!t)return;if(g()){const x=t.querySelector(".modal-about-header");if(x){x.style.flexDirection="row-reverse",x.style.justifyContent="flex-end",x.style.paddingRight="16px",x.style.paddingLeft="50px";const C=x.querySelector(".modal-about-icon-wrapper");C&&(C.style.marginLeft="0",C.style.marginRight="0");const A=x.querySelector(".modal-about-title");A&&(A.style.textAlign="right",A.style.marginRight="17px")}const L=t.querySelector(".modal-about-close");L&&(L.style.right="auto",L.style.left="16px")}}function _(){if(!e)return"";if(e.title===m("about.cards.4.title","Extensive color selection")&&e.colorImages)return`
        <img
          src="${e.colorImages[u]}"
          alt="${m(`about.cards.4.imageAlt.${u+1}`,`R36S Color Variant ${u+1}`)}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `;if(e.videoUrl){const x=e.videoUrl.toString().toLowerCase().endsWith(".mp4"),L=e.title||"Видео";return x?`
        <div class="gif-container">
          <div class="video-placeholder" data-title="${L}">
            <svg class="video-placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <polygon points="7 2 17 12 7 22 7 2"></polygon>
            </svg>
            <div class="video-placeholder-text">${L}</div>
          </div>
          <video
            class="modal-about-image video-lazy"
            muted
            loop
            playsInline
            preload="none"
            width="400" 
            height="400"
            data-src="${e.videoUrl}"
            style="display: none;"
          >
            <source data-src="${e.videoUrl}" type="video/mp4" />
            <p>${m("about.modal.videoNotSupported","Your browser does not support the video tag.")}</p>
          </video>
          <div class="video-play-button">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
        </div>
        `:`
        <img
          src="${e.videoUrl}"
          alt="${e.imageAlt||m("about.modal.imageAlt.default","Feature animation")}"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+R0lGIEFuaW1hdGlvbjwvdGV4dD48L3N2Zz4=';"
        />
      `}if(e.imageUrl){const x=e.imageUrl.toString().toLowerCase().endsWith(".mp4"),L=e.title||"Видео";return x?`
        <div class="gif-container">
          <div class="video-placeholder" data-title="${L}">
            <svg class="video-placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <polygon points="7 2 17 12 7 22 7 2"></polygon>
            </svg>
            <div class="video-placeholder-text">${L}</div>
          </div>
          <video
            class="modal-about-image video-lazy"
            muted
            loop
            playsInline
            preload="none"
            width="400" 
            height="400"
            data-src="${e.imageUrl}"
            style="display: none;"
          >
            <source data-src="${e.imageUrl}" type="video/mp4" />
            <p>${m("about.modal.videoNotSupported","Your browser does not support the video tag.")}</p>
          </video>
          <div class="video-play-button">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
        </div>
        `:`
        <img
          src="${e.imageUrl}"
          alt="${e.imageAlt||m("about.modal.imageAlt.default","Feature image")}"
          class="modal-about-image"
          width="400" 
          height="400"
          loading="lazy"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2U8L3RleHQ+PC9zdmc+=';"
        />
      `}return`
      <div class="modal-about-image" style="background-color: #0F172A; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; border-radius: 12px; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);">
        ${e.imageAlt||m("about.modal.imageAlt.default","Feature Image")}
      </div>
    `}function S(){(e==null?void 0:e.title)===m("about.cards.4.title","Extensive color selection")&&e.colorImages&&(p&&clearInterval(p),p=setInterval(()=>{u=u===e.colorImages.length-1?0:u+1;const i=t.querySelector(".modal-about-image");i&&(i.src=e.colorImages[u],i.alt=m(`about.cards.4.imageAlt.${u+1}`,`R36S Color Variant ${u+1}`))},1e3))}function k(){c=[];const i=t.querySelectorAll(".video-lazy");!i||i.length===0||i.forEach(x=>{c.push(x);const L=x.parentElement;if(!L)return;const C=L.querySelector(".video-play-button"),A=L.querySelector(".video-placeholder");if(!C||!A)return;const I=M=>{M.stopPropagation();const B=x.getAttribute("data-src");if(B){A.style.display="none",x.style.display="block",x.setAttribute("src",B);const $=x.querySelector("source");$&&$.setAttribute("src",B),x.load(),x.play().then(()=>{C.style.display="none"}).catch(U=>{console.error("Ошибка воспроизведения видео:",U),A.style.display="flex",x.style.display="none"})}};C.addEventListener("click",I),A.addEventListener("click",I)})}function l(){if(!t||!e)return;const i={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:e.fullDescription,image:e.imageUrl||(e.colorImages?e.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:e.title}};e.id===1&&(i.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:m("about.faq.question","How many games are included in the R36S console?"),acceptedAnswer:{"@type":"Answer",text:m("about.faq.answer","The R36S console includes over 15,000 classic retro games from various platforms.")}}]});const x=`
          <script type="application/ld+json">
            ${JSON.stringify(i)}
          <\/script>
        `,L=m("about.modal.buyNow","BUY NOW"),C=m("about.modal.discount","-68%"),A=g(),I=A?`<span class="modal-about-button-shine"></span>
        <span class="modal-about-button-text">${C} ${L}</span>
        <span class="modal-about-button-pulse"></span>`:`<span class="modal-about-button-pulse"></span>
        <span class="modal-about-button-text">${L} ${C}</span>
        <span class="modal-about-button-shine"></span>`,M=d("current"),B=d("original"),$=A?`<div class="modal-about-header" style="flex-direction: row-reverse; justify-content: flex-start; padding-left: 50px;">
       <h3 class="modal-about-title" itemprop="name" data-i18n="${e.i18nKey}.title" style="text-align: right; margin-right: 17px;">${e.title}</h3>
       <div class="modal-about-icon-wrapper" aria-hidden="true">${e.icon}</div>
     </div>`:`<div class="modal-about-header">
       <div class="modal-about-icon-wrapper" aria-hidden="true">${e.icon}</div>
       <h3 class="modal-about-title" itemprop="name" data-i18n="${e.i18nKey}.title">${e.title}</h3>
     </div>`;if(t.innerHTML=`
          ${x}
          <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
            <meta itemprop="name" content="R36S Handheld Game Console" />
            <meta itemprop="description" content="${e.title} for R36S console" />
            <meta itemprop="sku" content="R36S-${e.id}" />
            <meta itemprop="brand" content="R36S" />
            <meta itemprop="productID" content="R36S-F${e.id}" />
            
            <button class="modal-about-close" aria-label="${m("about.modal.close","Close modal")}">
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
            
            ${$}

            <div class="modal-about-body">
              <div class="modal-about-media-container" itemprop="image">
                ${_()}
              </div>
              
              <div class="modal-about-content-container">
                <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                  <div class="modal-about-price-wrapper">
                    <span class="modal-about-original-price" data-i18n="hero.pricing.original">${B}</span>
                    <span class="modal-about-current-price" data-i18n="hero.pricing.current" itemprop="price" content="35.48">
                      ${M}
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
                    ${I}
                  </a>
                </div>

                <div class="modal-about-description" itemprop="description" data-i18n="${e.i18nKey}.fullDescription">
                  ${e.fullDescription}
                </div>
              </div>
            </div>
          </div>
        `,v(),!document.getElementById("modal-video-styles")){const T=document.createElement("style");T.id="modal-video-styles",T.textContent=`
        .gif-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #60A5FA;
          z-index: 1;
          cursor: pointer;
        }
        
        .video-placeholder-icon {
          margin-bottom: 16px;
          opacity: 0.8;
          color: #60A5FA;
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3));
        }
        
        .video-placeholder-text {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          max-width: 80%;
          color: #fff;
        }
        
        .video-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          transition: all 0.3s ease;
          border: 2px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
        }
        
        .video-play-button:hover {
          background-color: rgba(15, 23, 42, 0.8);
          transform: translate(-50%, -50%) scale(1.1);
          border-color: rgba(96, 165, 250, 0.6);
        }
        
        .video-play-button svg {
          color: white;
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
        }
        
        .modal-about-image {
          border-radius: 12px;
          object-fit: cover;
          max-width: 100%;
          height: auto;
        }
      `,document.head.appendChild(T)}const D=t.querySelector(".modal-about-close");D&&D.addEventListener("click",y);const R=t.querySelector(".modal-about-content");R&&R.addEventListener("click",T=>T.stopPropagation()),k()}function r(i){e=i,t||(t=b()),l();const x=window.location.href,L=new URL(x);return L.searchParams.set("feature",e.id),window.history.pushState({featureId:e.id},"",L),t.style.display="flex",s=!0,t.focus(),window.addEventListener("keydown",w),document.body.style.overflow="hidden",S(),window.addEventListener("popstate",h),{close:y}}function h(i){s&&(!i.state||!i.state.featureId)&&y()}function y(){if(!s||!t)return;s=!1,t.style.display="none",n(),window.removeEventListener("keydown",w),window.removeEventListener("popstate",h),document.body.style.overflow="visible",p&&(clearInterval(p),p=null);const i=new URL(window.location.href);i.searchParams.delete("feature"),window.history.pushState({},"",i)}function n(){!c||c.length===0||(c.forEach(i=>{try{if(i){i.paused||i.pause(),i.removeAttribute("src");const x=i.querySelectorAll("source");x&&x.length>0&&x.forEach(C=>{C.removeAttribute("src")}),i.load(),i.style.display="none";const L=i.parentElement;if(L){const C=L.querySelector(".video-placeholder"),A=L.querySelector(".video-play-button");C&&(C.style.display="flex"),A&&(A.style.display="flex")}}}catch(x){console.error("Ошибка при остановке видео:",x)}}),c=[])}function f(){y(),t&&o.contains(t)&&o.removeChild(t),t=null,e=null}return{open:r,close:y,destroy:f}}const se="/R36S_CONSOLE_STORE_JS/video/about/video_1_.webp",le="/R36S_CONSOLE_STORE_JS/video/about/video_2_.webp",ce="/R36S_CONSOLE_STORE_JS/img/about/Untitled_1_1x.jpg",_e="/R36S_CONSOLE_STORE_JS/img/about/Untitled_2_1x.jpg",Ee="/R36S_CONSOLE_STORE_JS/img/about/Untitled_3_1x.jpg",Le="/R36S_CONSOLE_STORE_JS/img/about/Untitled_4_1x.jpg",ke="/R36S_CONSOLE_STORE_JS/video/about/video_3_batrey_.mp4",Ce="/R36S_CONSOLE_STORE_JS/video/about/video_6_.mp4",Ae="/R36S_CONSOLE_STORE_JS/video/about/video_4_.mp4";let Y=null;const q=(o,t)=>{try{const e=E.t(o);return e===o?t:e}catch(e){return console.warn(`Error getting translation for ${o}:`,e),t}};function Ie(){console.log("Планирование отложенной предзагрузки изображений..."),(window.requestIdleCallback||function(s){return setTimeout(s,1e3)})(()=>{const s=document.querySelector(".about");if(!s){console.log("Секция about не найдена, отменяем предзагрузку");return}if(t(s))console.log("Секция about видима, начинаем предзагрузку сейчас"),e();else if(console.log("Секция about не в поле зрения, откладываем предзагрузку"),"IntersectionObserver"in window){const p=new IntersectionObserver(c=>{const[m]=c;m.isIntersecting&&(console.log("Секция about видима, начинаем предзагрузку"),e(),p.disconnect())},{threshold:.1});p.observe(s)}else setTimeout(e,3e3)});function t(s){if(!s||!s.getBoundingClientRect)return!1;const u=s.getBoundingClientRect();return u.top<=(window.innerHeight||document.documentElement.clientHeight)&&u.bottom>=0}function e(){console.log("Начинаем предзагрузку критических изображений...");const s=[se],u=[le,ce];s.forEach(p=>{const c=new Image;c.importance="high",c.src=p}),setTimeout(()=>{console.log("Загрузка некритических изображений...");let p=0;const c=()=>{if(p<u.length){const m=new Image;m.importance="low",m.onload=()=>{setTimeout(c,200)},m.onerror=c,m.src=u[p++]}};c()},1e3)}}function Re(){if(console.log("Инициализация секции About"),Ie(),!document.querySelector(".about__cards"))return console.error("Контейнер для карточек не найден"),null;Y||(console.log("Создаем модальное окно..."),Y=Se(document.body),console.log("Модальное окно создано"));let t=Y;const s=[{id:1,i18nKey:"about.cards.1",icon:`
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
• Optimized versions for modern hardware`,imageUrl:se,imageAlt:"Коллекция ретро-игр",structuredData:{"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",faqPage:{"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]}}}},{id:2,i18nKey:"about.cards.2",icon:`
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
• Scratch-resistant surface`,imageUrl:le,imageAlt:"Display Technologies"},{id:3,i18nKey:"about.cards.3",icon:`
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
- Full-screen IPS display`,videoUrl:ke,imageAlt:"Battery Life"},{id:4,i18nKey:"about.cards.4",icon:`
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
- Mesmerizing Purple ...`,colorImages:[ce,_e,Ee,Le],imageAlt:"R36S Color Variants"},{id:5,i18nKey:"about.cards.5",icon:`
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
- Low latency connection for seamless gameplay`,videoUrl:Ae,imageAlt:"R36S Settings"},{id:6,i18nKey:"about.cards.6",icon:`
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
• Quick startup for instant gaming access`,videoUrl:Ce,imageAlt:"R36S Portability"}],u=l=>{const r=l.i18nKey;return{...l,title:q(`${r}.title`,l.title),description:q(`${r}.description`,l.description),detail:q(`${r}.detail`,l.detail),number:q(`${r}.number`,l.number),fullDescription:q(`${r}.fullDescription`,l.fullDescription),imageAlt:q(`${r}.imageAlt`,l.imageAlt)}};function p(){try{const l=q("about.button.details","More details"),r=document.querySelectorAll(".about-card__button .button-text");console.log(`Обновление текста ${r.length} кнопок на: "${l}"`),r.forEach(h=>{h.textContent=l})}catch(l){console.error("Ошибка при обновлении текста кнопок:",l)}}function c(){return document.documentElement.dir==="rtl"}function m(){console.log("Начинаем рендеринг карточек...");const l=document.querySelector(".about__cards");if(!l){console.error("Контейнер карточек не найден для рендеринга!");return}l.innerHTML="";const r=q("about.button.details","More details"),h=c(),y=s.map(f=>{const i=u(f),x=h?`<span class="button-icon">
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
        <span class="button-text" data-i18n="about.button.details">${r}</span>`:`<span class="button-text" data-i18n="about.button.details">${r}</span>
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
      <div class="about-card" data-id="${f.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${f.icon}</div>
          <h3 class="about-card__title" data-i18n="${f.i18nKey}.title">${i.title}</h3>
          <p class="about-card__description" data-i18n="${f.i18nKey}.description">${i.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number" data-i18n="${f.i18nKey}.number">${i.number}</span>
            <span class="about-card__detail" data-i18n="${f.i18nKey}.detail">${i.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${f.id}">
            ${x}
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `}).join("");l.innerHTML=y;const n=l.querySelectorAll(".about-card");console.log(`Отрендерено ${n.length} карточек из ${s.length} необходимых`),n.length!==s.length?console.warn(`Ошибка рендеринга: отрендерено ${n.length} карточек вместо ${s.length}`):console.log("Рендеринг карточек успешно завершен")}function d(l){if(!l||!l.currentTarget)return;const r=l.currentTarget;if(!r||!r.getBoundingClientRect){console.warn("handleMouseMove: элемент карточки не существует или недоступен");return}try{const h=r.getBoundingClientRect(),y=l.clientX-h.left,n=l.clientY-h.top;r.style.setProperty("--mouse-x",`${y}px`),r.style.setProperty("--mouse-y",`${n}px`)}catch(h){console.error("Ошибка при обработке движения мыши:",h)}}function g(l){if(!l||!l.currentTarget){console.warn("handleButtonClick: событие или цель события не существует");return}l.stopPropagation();try{const r=parseInt(l.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",r);const h=s.find(n=>n.id===r);if(!h){console.error("Данные для карточки не найдены");return}const y=u(h);t&&t.open(y)}catch(r){console.error("Ошибка при обработке клика по кнопке:",r)}}function a(l,r){let h;return function(){const y=this,n=arguments;clearTimeout(h),h=setTimeout(()=>{l.apply(y,n)},r)}}function w(){console.log("Очистка обработчиков событий карточек...");try{const l=document.querySelectorAll(".about-card");l&&l.length>0?(console.log(`Удаление обработчиков из ${l.length} карточек`),l.forEach((h,y)=>{if(h){const n=h.getAttribute("data-id"),f=h.innerHTML,i=h.cloneNode(!1);i.setAttribute("data-id",n),i.innerHTML=f,h.parentNode&&(h.parentNode.replaceChild(i,h),console.log(`Карточка ${y+1} заменена на клон без обработчиков`))}})):console.warn("Не найдено карточек для очистки обработчиков");const r=document.querySelector(".about__cards");if(r){const h=r.innerHTML,y=r.cloneNode(!1);y.innerHTML=h,r.parentNode&&(r.parentNode.replaceChild(y,r),console.log("Контейнер карточек заменен на клон без обработчиков"))}else console.warn("Не найден контейнер карточек для очистки обработчиков");console.log("Очистка обработчиков успешно завершена")}catch(l){console.error("Ошибка при очистке обработчиков событий:",l);try{console.log("Применяем альтернативный метод очистки...");const r=document.querySelector(".about__cards");if(r){const h=r.outerHTML,y=r.parentNode;y&&(y.removeChild(r),y.insertAdjacentHTML("beforeend",h),console.log("Альтернативная очистка успешно завершена"))}}catch(r){console.error("Ошибка при альтернативной очистке:",r)}}}function b(l){const r=l.querySelectorAll(".about-card");if(console.log(`Настройка эффекта свечения для ${r.length} карточек`),r.length===0){console.error("Карточки не найдены для эффекта свечения!");return}r.forEach((h,y)=>{let n=h.querySelector(".card-glow");n||(console.log(`Создаем элемент подсветки для карточки ${y+1}`),n=document.createElement("div"),n.className="card-glow",h.prepend(n)),h.style.setProperty("--mouse-x","0px"),h.style.setProperty("--mouse-y","0px"),h.addEventListener("mousemove",d),console.log(`Обработчик события mousemove добавлен к карточке ${y+1}`)})}function v(){console.log("Настройка обработчиков событий для карточек...");const l=document.querySelector(".about__cards");if(!l){console.error("Контейнер карточек не найден для установки обработчиков!");return}const r=l.querySelectorAll(".about-card");if(!r||r.length===0){console.warn("Не найдены карточки для установки обработчиков событий");return}console.log(`Устанавливаем обработчики событий для ${r.length} карточек`);const h=window.matchMedia("(max-width: 768px)").matches;b(l),!h&&l&&l.addEventListener("click",function(n){const f=n.target.closest(".about-card");if(f&&!n.target.closest(".about-card__button")){const i=parseInt(f.dataset.id);console.log("Клик по карточке ID:",i);const x=s.find(C=>C.id===i);if(!x){console.error("Данные для карточки не найдены");return}const L=u(x);t&&t.open(L)}}),r.forEach(n=>{n&&(n.addEventListener("mouseenter",function(){n&&(parseInt(n.dataset.id),n.classList.add("active"))}),n.addEventListener("mouseleave",function(){n&&n.classList.remove("active")}))});const y=l.querySelectorAll(".about-card__button");y&&y.length>0?(y.forEach(n=>{n&&n.addEventListener("click",g)}),console.log(`Установлены обработчики для ${y.length} кнопок`)):console.warn("Не найдены кнопки карточек"),console.log("Настройка обработчиков событий успешно завершена")}function _(){function l(r){try{console.log("Обработка события смены языка в секции About");const h=r.detail?r.detail.language:E.language;console.log(`Переключение на язык: ${h}`),w(),m(),setTimeout(()=>{v();const y=document.querySelectorAll(".about-card");y.forEach((n,f)=>{if(!n.querySelector(".card-glow")){console.warn(`Карточка ${f+1} не имеет элемента подсветки, добавляем...`);const x=document.createElement("div");x.className="card-glow",n.prepend(x)}n.style.setProperty("--mouse-x","0px"),n.style.setProperty("--mouse-y","0px")}),console.log(`Проверено ${y.length} карточек после смены языка`)},100),p(),console.log("Обновление секции About после смены языка завершено")}catch(h){console.error("Ошибка при обновлении секции About после смены языка:",h);try{m(),setTimeout(v,150)}catch(y){console.error("Не удалось выполнить восстановление после ошибки:",y)}}}return window.removeEventListener("languageChanged",l),window.addEventListener("languageChanged",l),l}function S(){console.log("Очистка всех обработчиков событий..."),w();const l=a(()=>{},250);window.removeEventListener("resize",l);function r(){}window.removeEventListener("languageChanged",r),t=null,document.querySelectorAll(".about-card").forEach(y=>{y&&(y.style.removeProperty("--mouse-x"),y.style.removeProperty("--mouse-y"))}),console.log("Очистка обработчиков событий завершена")}function k(){const l=_(),r=a(()=>{const h=window.matchMedia("(max-width: 768px)").matches,y=window.matchMedia("(max-width: 768px)").matches;h!==y&&(console.log("Состояние адаптивности изменилось, обновляем обработчики"),w(),v())},250);return window.addEventListener("resize",r),setTimeout(()=>{const h=document.querySelectorAll(".about-card");console.log(`Проверка установки эффекта подсветки: найдено ${h.length} карточек`);let y=!1;h.forEach(n=>{n.querySelector(".card-glow")||(y=!0,console.warn("Обнаружена карточка без эффекта подсветки, исправляем..."),b(document.querySelector(".about__cards")))}),y||console.log("Все карточки имеют корректный эффект подсветки")},100),function(){console.log("Запуск функции очистки секции About"),window.removeEventListener("resize",r),window.removeEventListener("languageChanged",l),S()}}try{return console.log("Начинаем инициализацию секции About..."),console.log("Рендерим карточки..."),m(),console.log("Устанавливаем обработчики событий..."),v(),console.log("Инициализация About завершена успешно"),k()}catch(l){return console.error("Ошибка при инициализации About:",l),null}}function Te(){const o=document.getElementById("features"),t=document.getElementById("featuresVideo"),e=document.getElementById("featuresVideoMobile"),s=document.getElementById("soundToggleButton"),u=document.getElementById("volumeOffIcon"),p=document.getElementById("volumeOnIcon"),c=document.getElementById("soundToggleButtonMobile"),m=document.getElementById("volumeOffIconMobile"),d=document.getElementById("volumeOnIconMobile"),g=document.getElementById("buyButton"),a=document.getElementById("moreInfoButton");if(!o){console.warn("Features section not found");return}let w=!1,b=!1;function v(){if(window.innerWidth<1280){if(!b&&e){e.preload="auto";const h=e.play();h!==void 0&&h.catch(y=>{console.log("Автовоспроизведение мобильного видео не удалось:",y)}),b=!0}}else if(!w&&t){t.preload="auto";const h=t.play();h!==void 0&&h.catch(y=>{console.log("Автовоспроизведение десктопного видео не удалось:",y)}),w=!0}}let _;"IntersectionObserver"in window?(_=new IntersectionObserver(r=>{r.forEach(h=>{h.isIntersecting&&v()})},{threshold:.25}),o&&_.observe(o)):(window.addEventListener("scroll",()=>{const r=o.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&v()}),setTimeout(()=>{const r=o.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&v()},500)),t&&(t.volume=.5),e&&(e.volume=.5),g&&g.addEventListener("click",oe),a&&a.addEventListener("click",ne),s&&s.addEventListener("click",()=>{P(t,u,p,s)}),c&&c.addEventListener("click",()=>{P(e,m,d,c)});const S=()=>{t&&!t.muted&&te(o,t,u,p,s),e&&!e.muted&&te(o,e,m,d,c)};window.addEventListener("scroll",S);const k=()=>{v()};window.addEventListener("resize",k);const l=()=>{if(s){const r=t&&!t.muted?"features.sound.toggle.disable":"features.sound.toggle.enable";s.setAttribute("aria-label",E.t(r))}if(c){const r=e&&!e.muted?"features.sound.toggle.disable":"features.sound.toggle.enable";c.setAttribute("aria-label",E.t(r))}};return window.addEventListener("languageChanged",l),function(){g&&g.removeEventListener("click",oe),a&&a.removeEventListener("click",ne),s&&s.removeEventListener("click",()=>{P(t,u,p,s)}),c&&c.removeEventListener("click",()=>{P(e,m,d,c)}),window.removeEventListener("scroll",S),window.removeEventListener("resize",k),window.removeEventListener("languageChanged",l),_&&o&&_.unobserve(o),console.log("Features component cleaned up")}}function P(o,t,e,s){o&&(o.muted=!o.muted,o.muted?(t.style.display="block",e.style.display="none",s&&s.setAttribute("aria-label",E.t("features.sound.toggle.enable"))):(o.volume=.5,t.style.display="none",e.style.display="block",s&&s.setAttribute("aria-label",E.t("features.sound.toggle.disable"))))}function te(o,t,e,s,u){if(!o||!t||t.muted)return;const p=o.getBoundingClientRect();p.top<window.innerHeight&&p.bottom>0||(t.muted=!0,e.style.display="block",s.style.display="none",u&&u.setAttribute("aria-label",E.t("features.sound.toggle.enable")))}function oe(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function ne(){const o=document.getElementById("features-r36s");if(o){const t=o.getBoundingClientRect().top,e=window.scrollY||window.pageYOffset,s=t+e;window.scrollTo({top:s,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function qe(){try{let S=function(){if(s&&(s.innerHTML=a?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <rect x="6" y="4" width="4" height="16"></rect>
             <rect x="14" y="4" width="4" height="16"></rect>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="5 3 19 12 5 21 5 3"></polygon>
           </svg>`,s.hasAttribute("data-i18n"))){const n=a?"categories.controls.pause":"categories.controls.play",f=E.t(n);f&&f!==n&&s.setAttribute("aria-label",f)}},k=function(){if(u&&(u.innerHTML=w?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>`,u.hasAttribute("data-i18n"))){const n=w?"categories.controls.unmute":"categories.controls.mute",f=E.t(n);f&&f!==n&&u.setAttribute("aria-label",f)}},l=function(){if(!(!o||v))if(a)o.pause(),a=!1,S();else{const n=o.play();n!==void 0?n.then(()=>{a=!0,S()}).catch(f=>{console.warn("Не удалось воспроизвести видео:",f),a=!1,S()}):(a=!0,S())}},r=function(){if(!c)return;v=!0,o&&(o.style.display="none");const n=E.t("categories.fallback.videoUnavailable",{defaultValue:"Видео временно недоступно"});c.innerHTML=`
        <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
          <div style="text-align: center; padding: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
              <path d="M8 16l12-8-12-8v16z"></path>
            </svg>
            <p style="margin: 0; font-size: 16px;">${n}</p>
          </div>
        </div>
      `};console.log("Инициализация секции Categories");const o=document.querySelector(".categories__video"),t=document.getElementById("categories"),e=document.querySelector(".categories__content"),s=document.querySelector(".categories__video-play"),u=document.querySelector(".categories__video-mute"),p=document.querySelector(".categories__video-slider"),c=document.querySelector(".categories__video-container"),m=document.querySelector(".categories__video-time span:first-child"),d=document.querySelector(".categories__video-time span:last-child"),g="languageChanged";if(!t)return console.error("Секция Categories не найдена в DOM"),{};if(e&&e.classList.add("animate-in"),!o)return console.error("Видео элемент не найден в DOM"),r(),{};let a=!1,w=!0,b=!1,v=!1;const _=n=>{if(isNaN(n)||n<0)return"0:00";const f=Math.floor(n/60),i=Math.floor(n%60);return`${f}:${i.toString().padStart(2,"0")}`},h=()=>{try{S(),k(),v&&r()}catch(n){console.error("Ошибка при обновлении языка в видео секции:",n)}};window.addEventListener(g,h),o&&(o.muted=!0,o.loop=!0,o.playsInline=!0,o.style.display="block",o.style.visibility="visible",o.style.opacity="1",o.style.width="100%",o.style.borderRadius="24px",c&&(c.style.minHeight="200px"),o.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),b=!0,p&&!isNaN(o.duration)&&(p.max=o.duration,d&&(d.textContent=_(o.duration)))}catch(n){console.error("Ошибка при обработке метаданных видео:",n)}}),o.addEventListener("timeupdate",()=>{try{p&&!isNaN(o.currentTime)&&(p.value=o.currentTime,m&&(m.textContent=_(o.currentTime)))}catch(n){console.error("Ошибка при обновлении времени видео:",n)}}),o.addEventListener("error",()=>{console.error("Ошибка при загрузке видео"),r()}),setTimeout(()=>{if(o&&!v){const n=o.play();n!==void 0&&n.then(()=>{console.log("Автовоспроизведение видео успешно"),a=!0,S()}).catch(f=>{console.warn("Не удалось автовоспроизвести видео:",f)})}},1e3)),s&&s.addEventListener("click",n=>{n.stopPropagation(),l()}),u&&u.addEventListener("click",n=>{n.stopPropagation(),o&&(w=!w,o.muted=w,k())}),p&&p.addEventListener("input",n=>{if(o)try{const f=parseFloat(n.target.value);isNaN(f)||(o.currentTime=f)}catch(f){console.error("Ошибка при изменении времени видео:",f)}}),c&&c.addEventListener("click",n=>{n.target.closest(".categories__video-controls")||l()}),S(),k(),t.classList.add("initialized");const y=()=>{try{document.documentElement.dir==="rtl"?(t.classList.add("rtl"),e&&e.classList.add("rtl")):(t.classList.remove("rtl"),e&&e.classList.remove("rtl"))}catch(n){console.error("Ошибка при обработке RTL в видео секции:",n)}};return y(),window.addEventListener(g,y),t&&(t.style.display="block"),{togglePlay:l,cleanup:()=>{o&&(o.pause(),o.removeAttribute("src"),o.load()),window.removeEventListener(g,h),window.removeEventListener(g,y)}}}catch(o){console.error("Критическая ошибка в initCategories:",o);const t=document.getElementById("categories");return t&&(t.style.display="block"),{}}}let F=null;function O(){console.log("Инициализация аккордеона FAQ начата"),F&&typeof F.destroy=="function"&&(console.log("Уничтожение предыдущего аккордеона перед новой инициализацией"),F.destroy(),F=null);const o=document.querySelectorAll(".accordion__item");if(o.length===0)return console.warn("FAQ аккордеон: элементы не найдены"),null;console.log(`FAQ аккордеон: найдено ${o.length} вопросов`);const t=new Map,e=(c=null)=>{o.forEach(m=>{if(m!==c&&m.classList.contains("active")){m.classList.remove("active");const d=m.querySelector(".accordion__header"),g=m.querySelector(".accordion__content");d&&d.setAttribute("aria-expanded","false"),g&&setTimeout(()=>{m.classList.contains("active")||g.setAttribute("hidden","true")},500)}})},s=()=>{const m=["ar"].includes(E.language);console.log(`Применение RTL стилей для аккордеона: ${m?"да":"нет"}`),o.forEach(d=>{const g=d.querySelector(".accordion__header"),a=d.querySelector(".accordion__content");m?(g&&(g.style.flexDirection="row-reverse"),a&&(a.style.textAlign="right",a.style.direction="rtl")):(g&&(g.style.flexDirection=""),a&&(a.style.textAlign="",a.style.direction=""))})};s(),o.forEach((c,m)=>{const d=c.querySelector(".accordion__header"),g=c.querySelector(".accordion__toggle"),a=c.querySelector(".accordion__content");if(!d||!g||!a){console.warn("FAQ аккордеон: структура элемента неполная",c);return}m===0&&setTimeout(()=>{g.classList.add("pulse"),setTimeout(()=>{g.classList.remove("pulse")},1500)},1e3),d.style.cursor="pointer";const w=function(S,k,l,r){return function(h){if(h.preventDefault(),h.stopPropagation(),console.log("Клик по элементу аккордеона:",S),l.classList.add("clicked"),setTimeout(()=>l.classList.remove("clicked"),300),S.classList.contains("active")){console.log("Закрытие активного элемента аккордеона"),S.classList.remove("active"),k.setAttribute("aria-expanded","false"),setTimeout(()=>{S.classList.contains("active")||r.setAttribute("hidden","true")},500);return}e(S),S.classList.add("active"),k.setAttribute("aria-expanded","true"),r.removeAttribute("hidden"),console.log("Открытие элемента аккордеона:",S);const y=k.getBoundingClientRect();y.top>=10&&y.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+y.top-100,behavior:"smooth"})},100)}}(c,d,g,a);t.set(c,w),d.removeEventListener("click",t.get(c)),g.removeEventListener("click",t.get(c)),d.removeEventListener("keydown",t.get(c)),d.addEventListener("click",w),d.querySelectorAll("*:not(.accordion__toggle)").forEach(S=>{S.style.pointerEvents="none"}),g.style.pointerEvents="auto",g.addEventListener("click",w);const v=d.id||`faq-question-${Math.random().toString(36).substring(2,9)}`,_=a.id||`faq-answer-${Math.random().toString(36).substring(2,9)}`;d.setAttribute("id",v),d.setAttribute("aria-expanded",c.classList.contains("active")?"true":"false"),d.setAttribute("aria-controls",_),d.setAttribute("role","button"),d.setAttribute("tabindex","0"),a.setAttribute("id",_),a.setAttribute("aria-labelledby",v),a.setAttribute("role","region"),c.classList.contains("active")?a.removeAttribute("hidden"):a.setAttribute("hidden","true"),d.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),w(S))})});const u=c=>{if(c.key==="Escape"){e();return}const m=document.activeElement.closest(".accordion__item");if(!m)return;const d=Array.from(o),g=d.indexOf(m);if(g===-1)return;let a;const w=document.documentElement.dir==="rtl";switch(c.key){case"ArrowDown":a=(g+1)%d.length;break;case"ArrowUp":a=(g-1+d.length)%d.length;break;case"ArrowRight":a=w?(g-1+d.length)%d.length:(g+1)%d.length;break;case"ArrowLeft":a=w?(g+1)%d.length:(g-1+d.length)%d.length;break;case"Home":a=0;break;case"End":a=d.length-1;break;default:return}const b=d[a].querySelector(".accordion__header");b&&(b.focus(),c.preventDefault())};document.removeEventListener("keydown",u),document.addEventListener("keydown",u),window.removeEventListener("languageChanged",s),window.addEventListener("languageChanged",s),console.log("FAQ аккордеон успешно инициализирован");const p={openItem:c=>{if(c>=0&&c<o.length){e(o[c]),o[c].classList.add("active");const m=o[c].querySelector(".accordion__header"),d=o[c].querySelector(".accordion__content");m&&m.setAttribute("aria-expanded","true"),d&&d.removeAttribute("hidden")}},closeAll:()=>e(),updateContent:()=>{s(),console.log("Аккордеон обновлен после смены языка")},destroy:()=>{try{return console.log("Начало уничтожения аккордеона"),window.removeEventListener("languageChanged",s),document.removeEventListener("keydown",u),o.forEach(c=>{const m=c.querySelector(".accordion__header"),d=c.querySelector(".accordion__toggle"),g=t.get(c);m&&g&&(m.removeEventListener("click",g),m.removeEventListener("keydown",g)),d&&g&&d.removeEventListener("click",g),m&&m.querySelectorAll("*:not(.accordion__toggle)").forEach(w=>{w.style.pointerEvents=""})}),t.clear(),console.log("Аккордеон успешно уничтожен"),!0}catch(c){return console.error("Ошибка при удалении аккордеона:",c),!1}}};return F=p,p}typeof window<"u"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon||(window.faqAccordeon=O()),window.addEventListener("languageChanged",o=>{console.log("Обработчик события languageChanged вызван в accordion.js"),window.faqAccordeon&&typeof window.faqAccordeon.updateContent=="function"?window.faqAccordeon.updateContent():(console.log("Переинициализация аккордеона после смены языка"),window.faqAccordeon=O())})}),window.initFaqAccordion=O);let J=!1;function de(o=!1){const t=document.getElementById("articles");if(console.log("Инициализация Articles:",{forceReinitialize:o,isInitialized:J,sectionExists:!!t}),!t){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const a=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!a){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}a.id||(a.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",a)}console.log("Инициализация секции Articles с SEO-оптимизацией и поддержкой i18n");const e=(a,w)=>{const b=E.t(a,{defaultValue:w});return b!==a?b:w},s=[{id:1,title:e("articles.article.1.title","R36S Retro Gaming"),sections:[{subtitle:e("articles.article.1.sections.1.subtitle","R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts"),content:e("articles.article.1.sections.1.content","Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time.")},{subtitle:e("articles.article.1.sections.2.subtitle","Comprehensive R36S Review: Performance That Exceeds Expectations"),content:e("articles.article.1.sections.2.content",'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.')},{subtitle:e("articles.article.1.sections.3.subtitle","How to Install Games on R36S: Simple Setup for Maximum Fun"),content:e("articles.article.1.sections.3.content",`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`)},{subtitle:e("articles.article.1.sections.4.subtitle","R36S Specifications: Hardware That Delivers Premium Gaming Experience"),content:e("articles.article.1.sections.4.content","The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers.")},{subtitle:e("articles.article.1.sections.5.subtitle","Best Games for R36S: Thousands of Classics at Your Fingertips"),content:e("articles.article.1.sections.5.content",`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`)},{subtitle:e("articles.article.1.sections.6.subtitle","A Unique Gaming Experience with R36S"),content:e("articles.article.1.sections.6.content",`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`)}]},{id:2,title:e("articles.article.2.title","R36S Official Website"),sections:[{subtitle:e("articles.article.2.sections.1.subtitle","R36S Official Website - The Ultimate Gaming Experience at Your Fingertips"),content:e("articles.article.2.sections.1.content","Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today.")},{subtitle:e("articles.article.2.sections.2.subtitle","Discover the Revolutionary R36S Handheld Gaming Experience"),content:e("articles.article.2.sections.2.content",'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.')},{subtitle:e("articles.article.2.sections.3.subtitle","Unmatched Performance in the R36S Game Console"),content:e("articles.article.2.sections.3.content","The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more.")},{subtitle:e("articles.article.2.sections.4.subtitle","Enhanced Gaming Experience with the R36S Handheld's Exclusive Features"),content:e("articles.article.2.sections.4.content","The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility.")},{subtitle:e("articles.article.2.sections.5.subtitle","Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs"),content:e("articles.article.2.sections.5.content","The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device.")},{subtitle:e("articles.article.2.sections.6.subtitle","The Future of Gaming with the R36S Official Website and Upcoming Innovations"),content:e("articles.article.2.sections.6.content","The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation.")},{subtitle:e("articles.article.2.sections.7.subtitle","Welcome to the R36S Official Store"),content:e("articles.article.2.sections.7.content",`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`)}]}],u=t.querySelector(".articles__grid");if(!u){console.error("Элемент .articles__grid не найден в секции Articles");return}if(o||!J)console.log("Очистка и пересоздание контента Articles"),u.innerHTML="";else{console.log("Обновление существующего контента Articles"),d();return}const p=()=>{if(!document.querySelector('meta[name="description"]')){const a=document.createElement("meta");a.name="description",a.content=e("articles.meta.description","R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options."),document.head.appendChild(a)}if(!document.querySelector('meta[name="keywords"]')){const a=document.createElement("meta");a.name="keywords",a.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(a)}};p(),s.forEach(a=>{const w=document.createElement("article");w.className="article",w.id=`article-${a.id}`,w.dataset.articleId=a.id,w.setAttribute("itemscope",""),w.setAttribute("itemtype","http://schema.org/Article");const b=document.createElement("h2");b.className="article__title",b.setAttribute("itemprop","headline"),b.setAttribute("data-i18n",`articles.article.${a.id}.title`),b.innerHTML=a.title,w.appendChild(b);const v=document.createElement("div");v.className="article__content-wrapper",v.setAttribute("itemprop","articleBody"),a.sections.forEach((r,h)=>{const y=document.createElement("section");if(y.className="article__section",y.id=`section-${a.id}-${h+1}`,h!==0||r.subtitle!==a.title){const f=document.createElement("h3");f.className="article__subtitle",f.setAttribute("data-i18n",`articles.article.${a.id}.sections.${h+1}.subtitle`),f.innerHTML=r.subtitle,y.appendChild(f)}const n=document.createElement("div");n.className="article__content",n.setAttribute("data-i18n-html",`articles.article.${a.id}.sections.${h+1}.content`),n.innerHTML=r.content,y.appendChild(n),v.appendChild(y)}),w.appendChild(v);const _=document.createElement("script");_.type="application/ld+json";const S={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:e("articles.schema.org.name","R36S Official")},publisher:{"@type":"Organization",name:e("articles.schema.org.name","R36S"),logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};_.textContent=JSON.stringify(S),w.appendChild(_);const k=document.createElement("footer");k.className="article__footer";const l=document.createElement("a");l.href="https://www.aliexpress.com/item/1005007171465465.html",l.className="article__cta",l.textContent=e("articles.cta.button.text","Order R36S Now"),l.setAttribute("data-i18n","articles.cta.button.text"),l.setAttribute("itemprop","url"),l.setAttribute("title",e("articles.cta.button.title","Order R36S Gaming Console")),l.setAttribute("data-i18n-title","articles.cta.button.title"),l.setAttribute("rel","nofollow"),l.setAttribute("target","_blank"),k.appendChild(l),w.appendChild(k),u.appendChild(w)});const c=()=>{let a=t.querySelector(".articles__heading");a?a.textContent=e("articles.heading","R36S Gaming Console - Official Information"):(a=document.createElement("h1"),a.className="articles__heading",a.setAttribute("data-i18n","articles.heading"),a.textContent=e("articles.heading","R36S Gaming Console - Official Information"),t.querySelector(".articles__container").insertBefore(a,t.querySelector(".articles__grid")))};c(),setTimeout(()=>{try{console.log("Инициализация аккордеона..."),window.faqAccordeon&&typeof window.faqAccordeon.destroy=="function"&&(console.log("Уничтожение существующего аккордеона перед реинициализацией"),window.faqAccordeon.destroy(),window.faqAccordeon=null),setTimeout(()=>{window.faqAccordeon=O(),console.log("Аккордеон успешно инициализирован:",window.faqAccordeon)},100)}catch(a){console.error("Ошибка при инициализации аккордеона:",a)}},300),J=!0;const m=a=>{console.log("Обработчик languageChanged вызван в Articles:",a),p(),c(),g(),d(),setTimeout(()=>{window.faqAccordeon&&typeof window.faqAccordeon.updateContent=="function"?(console.log("Обновление содержимого аккордеона после смены языка"),window.faqAccordeon.updateContent()):(console.log("Переинициализация аккордеона после смены языка (API не найден)"),window.faqAccordeon&&typeof window.faqAccordeon.destroy=="function"&&window.faqAccordeon.destroy(),window.faqAccordeon=O())},100)};function d(){try{console.log("Обновление текстового содержимого статей без перестроения DOM");const a=t.querySelector(".articles__heading");if(a){const w=a.getAttribute("data-i18n");if(w){const b=E.t(w);b&&b!==w&&(a.textContent=b)}}document.querySelectorAll(".article__title").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const v=E.t(b);v&&v!==b&&(w.textContent=v)}}),document.querySelectorAll(".article__subtitle").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const v=E.t(b);v&&v!==b&&(w.textContent=v)}}),document.querySelectorAll(".article__content").forEach(w=>{const b=w.getAttribute("data-i18n-html");if(b){const v=E.t(b);v&&v!==b&&(w.innerHTML=v)}}),document.querySelectorAll(".article__cta").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const _=E.t(b);_&&_!==b&&(w.textContent=_)}const v=w.getAttribute("data-i18n-title");if(v){const _=E.t(v);_&&_!==v&&w.setAttribute("title",_)}}),document.querySelectorAll(".articles__faq-question").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const v=E.t(b);v&&v!==b&&(w.textContent=v)}}),document.querySelectorAll(".articles__faq-answer p").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const v=E.t(b);v&&v!==b&&(w.textContent=v)}}),document.querySelectorAll(".articles__related-list a").forEach(w=>{const b=w.getAttribute("data-i18n");if(b){const _=E.t(b);_&&_!==b&&(w.textContent=_)}const v=w.getAttribute("data-i18n-title");if(v){const _=E.t(v);_&&_!==v&&w.setAttribute("title",_)}}),console.log("Текстовое содержимое статей успешно обновлено")}catch(a){console.error("Ошибка при обновлении текстового содержимого:",a)}}const g=()=>{try{const a=["ar"],w=E.language;a.includes(w)?(t.classList.add("rtl"),t.querySelectorAll(".article__content").forEach(l=>{l.style.textAlign="right",l.style.direction="rtl"}),t.querySelectorAll(".article__title, .article__subtitle, .articles__heading").forEach(l=>{l.style.textAlign="right"}),t.querySelectorAll(".articles__faq-question").forEach(l=>{l.style.textAlign="right"}),t.querySelectorAll(".articles__faq-answer").forEach(l=>{l.style.textAlign="right",l.style.direction="rtl"})):(t.classList.remove("rtl"),t.querySelectorAll(".article__content, .article__title, .article__subtitle, .articles__heading, .articles__faq-question, .articles__faq-answer").forEach(_=>{_.style.textAlign="",_.style.direction=""}))}catch(a){console.error("Ошибка при обновлении RTL поддержки:",a)}};return window._articlesLanguageChangeHandler&&window.removeEventListener("languageChanged",window._articlesLanguageChangeHandler),window._articlesLanguageChangeHandler=m,window.addEventListener("languageChanged",window._articlesLanguageChangeHandler),g(),window.initArticles=de,setTimeout(()=>{console.log("Проверка наличия элементов аккордеона после инициализации:");const a=document.querySelectorAll(".accordion__item");console.log(`Найдено ${a.length} элементов аккордеона`),a.length>0&&(console.log("Структура первого элемента:"),console.log("- Заголовок:",a[0].querySelector(".accordion__header")),console.log("- Кнопка:",a[0].querySelector(".accordion__toggle")),console.log("- Контент:",a[0].querySelector(".accordion__content")))},1e3),console.log("Инициализация секции Articles завершена успешно"),()=>{window._articlesLanguageChangeHandler&&(window.removeEventListener("languageChanged",window._articlesLanguageChangeHandler),window._articlesLanguageChangeHandler=null),console.log("Очистка ресурсов секции Articles")}}function Be(){if(console.log("Инициализация переключателей яркости текста в блоках - НАЧАЛО"),window._themeToggleInitialized)return console.warn("Обнаружена повторная инициализация переключателей яркости. Пропускаем..."),window._themeToggleCleanup;window._themeToggleInitialized=!0;const o=document.getElementById("articles")||document.querySelector(".articles"),t=document.getElementById("official-website")||document.querySelector(".official-website"),e=document.getElementById("retro-gaming")||document.querySelector(".retro-gaming");if(!o&&!t&&!e){console.error("Секции для добавления переключателей яркости текста не найдены");return}const s=[];function u(d,g){if(!d)return;console.log(`Добавление переключателей в секцию ${d.id||d.className}`);const a=d.querySelectorAll(".article");console.log(`Найдено ${a.length} блоков для добавления переключателей в секции ${d.id||d.className}`),a.forEach((w,b)=>{const v=g!==void 0?g:b%3;if(w.querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label")){console.warn(`Блок #${b} уже содержит кнопку переключения. Пропускаем создание.`);return}const S=document.createElement("button");switch(S.setAttribute("type","button"),v){case 0:S.className="brightness-toggle",S.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const k=w.querySelector(".article__title");if(k){const h=document.createElement("div");h.className="article__title-container";const y=k.cloneNode(!0);h.appendChild(y),h.appendChild(S),k.parentNode.replaceChild(h,k)}else w.insertBefore(S,w.firstChild);break;case 1:S.className="brightness-toggle",S.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const l=w.querySelector(".article__title");if(l){const h=document.createElement("div");h.className="article__title-container";const y=l.cloneNode(!0);h.appendChild(y),h.appendChild(S),l.parentNode.replaceChild(h,l)}else w.insertBefore(S,w.firstChild);break;case 2:S.className="brightness-toggle-with-label",S.innerHTML=`
            <span class="brightness-toggle-label">Ярче</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="brightness-toggle__icon">
              <path fill="none" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          `;const r=w.querySelector(".article__title");if(r){const h=document.createElement("div");h.className="article__title-container";const y=r.cloneNode(!0);h.appendChild(y),h.appendChild(S),r.parentNode.replaceChild(h,r)}else w.insertBefore(S,w.firstChild);break}s.push(S)})}o&&u(o);let p;if(e){const d=e.querySelectorAll(".article");if(d.length>0){const g=d[0].querySelector(".brightness-toggle, .brightness-toggle-corner, .brightness-toggle-with-label");g&&(g.classList.contains("brightness-toggle-corner")?p=1:g.classList.contains("brightness-toggle-with-label")?p=2:p=0,console.log(`Обнаружен стиль кнопки в секции R36S Retro Gaming: ${p}`))}}t&&u(t,p!==void 0?p:1),console.log(`Создано ${s.length} кнопок переключения`),s.forEach(d=>{const g=d.cloneNode(!0);d.parentNode&&d.parentNode.replaceChild(g,d);const a=s.indexOf(d);a!==-1&&(s[a]=g)}),s.forEach(d=>{const g=d.closest(".article");if(!g){console.error("Не найден родительский блок .article для кнопки переключения");return}d.addEventListener("click",function(v){if(v.preventDefault(),v.stopPropagation(),console.log("Клик по кнопке переключения яркости"),console.log("Состояние до переключения:",g.classList.contains("bright-text")?"яркий":"обычный"),g.classList.toggle("bright-text"),d.classList.toggle("active"),console.log("Состояние после переключения:",g.classList.contains("bright-text")?"яркий":"обычный"),d.classList.contains("brightness-toggle-with-label")){const l=d.querySelector(".brightness-toggle-label");l&&(l.textContent=g.classList.contains("bright-text")?"Тусклее":"Ярче",console.log("Изменен текст лейбла на:",l.textContent))}const _=g.getAttribute("data-article-id")||g.id||Array.from(g.closest("section").querySelectorAll(".article")).indexOf(g),S=g.closest("section")?g.closest("section").id||g.closest("section").className.split(" ")[0]:"unknown",k=g.classList.contains("bright-text")?"bright":"normal";localStorage.setItem(`r36s-${S}-article-brightness-${_}`,k),console.log(`Яркость текста в блоке ${_} секции ${S} изменена на: ${k}`)});const a=g.getAttribute("data-article-id")||g.id||Array.from(g.closest("section").querySelectorAll(".article")).indexOf(g),w=g.closest("section")?g.closest("section").id||g.closest("section").className.split(" ")[0]:"unknown";if(localStorage.getItem(`r36s-${w}-article-brightness-${a}`)==="bright"){if(g.classList.add("bright-text"),d.classList.add("active"),d.classList.contains("brightness-toggle-with-label")){const v=d.querySelector(".brightness-toggle-label");v&&(v.textContent="Тусклее")}console.log(`Восстановлено состояние для блока ${a} в секции ${w}: яркий`)}else console.log(`Блок ${a} в секции ${w} в обычном режиме`)});const c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c);const m=function(){s.forEach(d=>{if(d&&d.parentNode){const g=d.closest(".article__title-container");if(g){const a=g.querySelector(".article__title");a&&g.parentNode&&g.parentNode.replaceChild(a,g)}else d.parentNode.removeChild(d)}}),c&&c.parentNode&&c.parentNode.removeChild(c),window._themeToggleInitialized=!1,console.log("Очистка переключателей яркости выполнена")};return window._themeToggleCleanup=m,console.log("Инициализация переключателей яркости текста в блоках - ЗАВЕРШЕНА"),m}const re={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function z(o,t=24){return re[o]?re[o].replace(/width="24"/,`width="${t}"`).replace(/height="24"/,`height="${t}"`):(console.error(`Icon "${o}" not found`),"")}function Me(){document.querySelectorAll("[data-icon]").forEach(t=>{const e=t.getAttribute("data-icon"),s=parseInt(t.getAttribute("data-size")||"24",10);e&&(t.innerHTML=z(e,s))})}function $e(){console.log("Инициализация секции Contact");const o=document.querySelector(".contact__form"),t=document.getElementById("name"),e=document.getElementById("email"),s=document.getElementById("phone"),u=document.getElementById("message"),p=document.querySelector(".form__button"),c=document.createElement("div");c.className="form__error",c.style.display="none",c.innerHTML=`
    <div class="form__error-icon">${z("alert-circle",16)}</div>
    <span></span>
  `,o.insertBefore(c,o.firstChild);const m={name:"",email:"",phone:"",message:""};function d(v,_){const S=E.t(v,{defaultValue:_});c.querySelector("span").textContent=S,c.style.display="flex"}function g(){c.style.display="none"}function a(v){const{name:_,value:S}=v.target;m[_]=S,g()}t.addEventListener("input",a),e.addEventListener("input",a),s.addEventListener("input",a),u.addEventListener("input",a);async function w(v){v.preventDefault(),b(!0);try{if(!m.name||!m.email||!m.phone||!m.message)throw new Error(E.t("contact.form.error.allFields","Please fill in all fields"));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email))throw new Error(E.t("contact.form.error.validEmail","Please enter a valid email"));if(!/^\+?[0-9]{10,14}$/.test(m.phone.replace(/\D/g,"")))throw new Error(E.t("contact.form.error.validPhone","Please enter a valid phone number."));await new Promise(l=>setTimeout(l,1e3)),t.value="",e.value="",s.value="",u.value="",Object.keys(m).forEach(l=>{m[l]=""}),alert(E.t("contact.form.success","Message sent successfully! We will contact you shortly."))}catch(S){d("contact.form.error.generic",S.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",S)}finally{b(!1)}}function b(v){[t,e,s,u].forEach(S=>{S.disabled=v}),p.disabled=v,v?p.innerHTML=`<span class="button__icon">${z("loader",20)}</span> ${E.t("contact.form.sending","Sending...")}`:p.innerHTML=`<span class="button__icon">${z("send",20)}</span> ${E.t("contact.form.submit","Send message")}`}return o.addEventListener("submit",w),window.addEventListener("languageChanged",function(v){b(p.disabled)}),function(){t.removeEventListener("input",a),e.removeEventListener("input",a),s.removeEventListener("input",a),u.removeEventListener("input",a),o.removeEventListener("submit",w),window.removeEventListener("languageChanged",b)}}function Fe(){const o="/R36S_STORE_JS/",e={review1:{webp:`${o}img/reviews/imm_1_1x.webp`,jpg:`${o}img/reviews/imm_1_1x.jpg`},review2:{webp:`${o}img/reviews/imm_2_1x.webp`,jpg:`${o}img/reviews/imm_2_1x.jpg`},review3:{webp:`${o}img/reviews/imm_3_1x.webp`,jpg:`${o}img/reviews/imm_3_1x.jpg`},review4:{webp:`${o}img/reviews/imm_4_1x.webp`,jpg:`${o}img/reviews/imm_4_1x.jpg`}},s=[{id:1,rating:5,colorKey:"reviews.reviewItems.1.color",color:"Purple 64GB",authorKey:"reviews.reviewItems.1.author",author:"AliExpress Shopper",dateKey:"reviews.reviewItems.1.date",date:"21 Aug 2024",textKey:"reviews.reviewItems.1.text",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:e.review1.webp,jpeg:e.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,colorKey:"reviews.reviewItems.2.color",color:"Yellow 128G",authorKey:"reviews.reviewItems.2.author",author:"V***h",dateKey:"reviews.reviewItems.2.date",date:"26 Aug 2024",textKey:"reviews.reviewItems.2.text",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:e.review4.webp,jpeg:e.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,colorKey:"reviews.reviewItems.3.color",color:"White 64GB",authorKey:"reviews.reviewItems.3.author",author:"M***z",dateKey:"reviews.reviewItems.3.date",date:"22 Aug 2024",textKey:"reviews.reviewItems.3.text",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:e.review3.webp,jpeg:e.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,colorKey:"reviews.reviewItems.4.color",color:"Black 128GB",authorKey:"reviews.reviewItems.4.author",author:"K***r",dateKey:"reviews.reviewItems.4.date",date:"22 Aug 2024",textKey:"reviews.reviewItems.4.text",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:e.review2.webp,jpeg:e.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],u=new Set;let p=null,c=window.innerWidth<=1200;function m(n=!1){const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.classList.add("review-card__star"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill",n?"currentColor":"none"),f.setAttribute("stroke","currentColor"),f.setAttribute("stroke-width","2");const i=document.createElementNS("http://www.w3.org/2000/svg","polygon");return i.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),f.appendChild(i),f}function d(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("review-card__verified"),n.setAttribute("width","16"),n.setAttribute("height","16"),n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("fill","none"),n.setAttribute("stroke","currentColor"),n.setAttribute("stroke-width","2");const f=document.createElementNS("http://www.w3.org/2000/svg","path");return f.setAttribute("d","M20 6L9 17l-5-5"),n.appendChild(f),n}function g(n,f){if(!n)return f;const i=E.t(n);return i&&i!==n?i:f}function a(n){const f=document.getElementById("reviewCardTemplate");if(!f)return console.error("Шаблон карточки отзыва не найден"),null;const i=f.content.cloneNode(!0).querySelector(".review-card");i.dataset.id=n.id,n.mobileOnly&&(i.classList.add("mobile-only"),c||(i.style.display="none"));const x=i.querySelector(".review-card__rating");for(let T=0;T<5;T++)x.appendChild(m(T<n.rating));const L=g(n.colorKey,n.color);i.querySelector(".review-card__variant").textContent=L;const C=g(n.textKey,n.text);i.querySelector(".review-card__text").textContent=C;const A=i.querySelector("picture");A.querySelector("source").setAttribute("srcset",n.images.webp);const I=A.querySelector("img");I.setAttribute("src",n.images.jpeg),I.setAttribute("alt",`Review ${n.id}`);const M=i.querySelector(".review-card__name");n.verified&&M.prepend(d());const B=g(n.authorKey,n.author);M.appendChild(document.createTextNode(B));const $=g(n.dateKey,n.date);i.querySelector(".review-card__date").textContent=$;const D=g("reviews.helpful","Helpful ({{count}})").replace("{{count}}",n.helpful);i.querySelector(".review-card__helpful-count").textContent=D,i.addEventListener("click",w),i.addEventListener("mouseenter",()=>b(n.id)),i.addEventListener("mouseleave",v);const R=i.querySelector(".review-card__helpful");return R.addEventListener("mouseenter",()=>{R.querySelector("svg").setAttribute("fill","currentColor"),R.querySelector("svg").classList.add("scale-125"),R.querySelector("svg").classList.remove("scale-100")}),R.addEventListener("mouseleave",()=>{R.querySelector("svg").setAttribute("fill","none"),R.querySelector("svg").classList.remove("scale-125"),R.querySelector("svg").classList.add("scale-100")}),i}function w(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function b(n){p=n;const f=document.querySelector(`.review-card[data-id="${n}"]`);if(f){const i=f.querySelector(".review-card__arrow-wrapper");i&&(i.style.display="flex")}}function v(){const n=document.querySelector(`.review-card[data-id="${p}"]`);if(n){const f=n.querySelector(".review-card__arrow-wrapper");f&&(f.style.display="none")}p=null}function _(){const n=document.getElementById("reviewsGrid");if(!n){console.error("Контейнер для отзывов не найден");return}const f=document.getElementById("reviewCardTemplate"),i={};n.querySelectorAll(".review-card").forEach(C=>{C.dataset.id&&(i[C.dataset.id]=C)});const x=s.filter(C=>!C.mobileOnly||C.mobileOnly&&c),L=[];x.forEach(C=>{if(i[C.id]){const A=i[C.id];A.style.display="block",S(A,C),L.push(A),delete i[C.id]}else{const A=a(C);A&&L.push(A)}}),Object.values(i).forEach(C=>{C!==f&&(C.style.display="none")}),n.innerHTML="",n.appendChild(f),L.forEach(C=>{n.appendChild(C)}),k()}function S(n,f){if(!n||!f)return;const i=n.querySelector(".review-card__variant");i&&(i.textContent=g(f.colorKey,f.color));const x=n.querySelector(".review-card__text");x&&(x.textContent=g(f.textKey,f.text));const L=n.querySelector(".review-card__name");if(L){const I=L.querySelector(".review-card__verified");L.textContent="",I&&L.appendChild(I),L.appendChild(document.createTextNode(g(f.authorKey,f.author)))}const C=n.querySelector(".review-card__date");C&&(C.textContent=g(f.dateKey,f.date));const A=n.querySelector(".review-card__helpful-count");if(A){const I=g("reviews.helpful","Helpful ({{count}})");A.textContent=I.replace("{{count}}",f.helpful)}}function k(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(f=>{f.classList.add("animate-in")});return}const n=new IntersectionObserver(f=>{f.forEach(i=>{if(i.isIntersecting){const x=i.target.dataset.id;u.has(x)||(i.target.classList.add("animate-in"),u.add(x))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(f=>{n.observe(f)})}function l(){c=window.innerWidth<=1200,_(),document.querySelectorAll(".review-card").forEach(f=>{f.classList.contains("mobile-only")&&(f.style.display=c?"block":"none")})}function r(n){var i,x;console.log("Язык изменился, обновляем отзывы:",(i=n==null?void 0:n.detail)==null?void 0:i.language),_();const f=document.getElementById("reviews");if(f){const L=["ar"],C=((x=n==null?void 0:n.detail)==null?void 0:x.language)||E.language;L.includes(C)?f.classList.add("rtl"):f.classList.remove("rtl")}}function h(){window.addEventListener("languageChanged",r),_(),r({detail:{language:E.language}});let n;const f=()=>{clearTimeout(n),n=setTimeout(l,250)};window.addEventListener("resize",f);const i=document.createElement("style");i.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(i),setTimeout(l,100);const x=document.getElementById("reviews");if(x&&!x.hasAttribute("itemscope")){x.setAttribute("itemscope",""),x.setAttribute("itemtype","http://schema.org/Product");const L=document.createElement("meta");L.setAttribute("itemprop","name"),L.setAttribute("data-i18n","reviews.meta.productName"),L.setAttribute("content","R36S Handheld Game Console"),x.prepend(L);const C=document.createElement("meta");C.setAttribute("itemprop","description"),C.setAttribute("data-i18n","reviews.meta.productDescription"),C.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),x.prepend(C)}}h();function y(){if(window.removeEventListener("resize",l),window.removeEventListener("resize",()=>{}),window.removeEventListener("languageChanged",r),"IntersectionObserver"in window){const n=[];new IntersectionObserver(()=>{}).disconnect(),n.forEach(i=>i.disconnect())}document.querySelectorAll(".review-card").forEach(n=>{n.removeEventListener("click",w),n.removeEventListener("mouseenter",()=>{}),n.removeEventListener("mouseleave",v),s.forEach(i=>{n.removeEventListener("mouseenter",()=>b(i.id))});const f=n.querySelector(".review-card__helpful");f&&(f.removeEventListener("mouseenter",()=>{}),f.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:y,renderReviewCards:_,updateTexts:()=>r({detail:{language:E.language}})}}const Oe={};function je(){console.log("Products секция инициализирована");const t=!Oe?"/":"/R36S_STORE_JS/",e={i0_0:{jpg:`${t}img/products/i_0_0x.jpg`,webp:`${t}img/products/i_0_0x.webp`},i1:{jpg:`${t}img/products/i_1_1x.jpg`,webp:`${t}img/products/i_1_1x.webp`},i2:{jpg:`${t}img/products/i_2_1x.jpg`,webp:`${t}img/products/i_2_1x.webp`},i3:{jpg:`${t}img/products/i_3_1x.jpg`,webp:`${t}img/products/i_3_1x.webp`},i4:{jpg:`${t}img/products/i_4_1x.jpg`,webp:`${t}img/products/i_4_1x.webp`},i5:{jpg:`${t}img/products/i_5_1x.jpg`,webp:`${t}img/products/i_5_1x.webp`},i6:{jpg:`${t}img/products/i_6_1x.jpg`,webp:`${t}img/products/i_6_1x.webp`},i7:{jpg:`${t}img/products/i_7_1x.jpg`,webp:`${t}img/products/i_7_1x.webp`},i8:{jpg:`${t}img/products/i_8_1x.jpg`,webp:`${t}img/products/i_8_1x.webp`},i9:{jpg:`${t}img/products/i_9_1x.jpg`,webp:`${t}img/products/i_9_1x.webp`}},s=[{id:"getting-started",title:"products.start_guide.title",content:{text:"products.start_guide.text",images:{jpg:e.i0_0.jpg,webp:e.i0_0.webp}}},{id:"original-backup",title:"products.original_backup.title",content:{text:"products.original_backup.text",subsections:[{id:"backup-procedure",title:"products.original_backup.subsections.backup_procedure.title",content:{text:"products.original_backup.subsections.backup_procedure.text",images:{jpg:e.i1.jpg,webp:e.i1.webp}}}]}},{id:"custom-installation",title:"products.custom_installation.title",content:{text:"products.custom_installation.text",subsections:[{id:"method-balena",title:"products.custom_installation.subsections.method_balena.title",content:{text:"products.custom_installation.subsections.method_balena.text",images:{jpg:e.i2.jpg,webp:e.i2.webp}}},{id:"method-win32",title:"products.custom_installation.subsections.method_win32.title",content:{text:"products.custom_installation.subsections.method_win32.text",images:{jpg:e.i3.jpg,webp:e.i3.webp}}},{id:"method-raspberry",title:"products.custom_installation.subsections.method_raspberry.title",content:{text:"products.custom_installation.subsections.method_raspberry.text",images:{jpg:e.i4.jpg,webp:e.i4.webp}}}]}},{id:"firmware-options",title:"products.firmware_options.title",content:{text:"products.firmware_options.text",subsections:[{id:"option-arkos",title:"products.firmware_options.subsections.option_arkos.title",content:{text:"products.firmware_options.subsections.option_arkos.text",images:{jpg:e.i5.jpg,webp:e.i5.webp}}},{id:"option-rocknix",title:"products.firmware_options.subsections.option_rocknix.title",content:{text:"products.firmware_options.subsections.option_rocknix.text",images:{jpg:e.i6.jpg,webp:e.i6.webp}}},{id:"option-amber",title:"products.firmware_options.subsections.option_amber.title",content:{text:"products.firmware_options.subsections.option_amber.text",images:{jpg:e.i7.jpg,webp:e.i7.webp}}}]}},{id:"game-setup",title:"products.game_setup.title",content:{text:"products.game_setup.text",images:{jpg:e.i8.jpg,webp:e.i8.webp}}},{id:"helpful-tips",title:"products.helpful_tips.title",content:{text:"products.helpful_tips.text",images:{jpg:e.i9.jpg,webp:e.i9.webp}}},{id:"downloads",title:"products.downloads.title",content:{downloads:[{file:"Firmware v1.0.4 2024",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.2025",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2_P4",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let u="downloads",p=!1;const c=document.getElementById("products-nav-list"),m=document.getElementById("products-sections"),d=document.getElementById("products-nav");function g(){p=window.innerWidth<=1024,d&&(p?d.classList.add("nav-mobile"):d.classList.remove("nav-mobile"))}function a(r){u=r,document.querySelectorAll(".nav-item").forEach(n=>{n.dataset.sectionId===r?n.classList.add("nav-item-active"):n.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(n=>{n.id===r?n.classList.add("section-active"):n.classList.remove("section-active")}),setTimeout(()=>{const n=document.getElementById(r);if(n){const f=p?80:20,x=n.getBoundingClientRect().top+window.pageYOffset-f;window.scrollTo({top:x,behavior:"smooth"})}},100)}function w(){c.innerHTML="",s.forEach(r=>{const h=document.createElement("button");h.className=`nav-item ${u===r.id?"nav-item-active":""}`,h.dataset.sectionId=r.id,h.innerHTML=`
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <span data-i18n="${r.title}">${E.t(r.title)}</span>
        `,h.addEventListener("click",()=>a(r.id)),c.appendChild(h)})}function b(r){return E.t(r).split(`
`).filter(y=>y.trim()!=="")}function v(r){if(r.id==="downloads"){let n='<div class="download-list">';return r.content.downloads.forEach(f=>{n+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${f.file}</div>
                <div class="download-meta">
                  <span class="update-label" data-i18n="products.downloads.update_label">${E.t("products.downloads.update_label")}</span>: ${f.date} • ${f.version}
                </div>
              </div>
            </div>
            <a href="${f.link}" class="download-button" target="_blank" 
              data-i18n-aria="products.downloads.download_aria"
              aria-label="${E.t("products.downloads.download_aria")}">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),n+="</div>",n}let h='<div class="section-content"><div class="text-content">';return b(r.content.text).forEach(n=>{h+=`<p>${n.trim()}</p>`}),h+="</div>",r.content.images&&(h+=`
          <div class="image-container">
            <picture>
              <source srcset="${r.content.images.webp}" type="image/webp">
              <img src="${r.content.images.jpg}" alt="${E.t(r.title)}" class="section-image" loading="lazy">
            </picture>
          </div>
        `),r.content.subsections&&(h+='<div class="subsections">',r.content.subsections.forEach(n=>{h+=`
            <div class="subsection">
              <h3 class="subsection-title" data-i18n="${n.title}">${E.t(n.title)}</h3>
              <div class="subsection-content">
                <div class="text-content">
          `,b(n.content.text).forEach(i=>{h+=`<p>${i.trim()}</p>`}),h+="</div>",n.content.images&&(h+=`
              <div class="image-container">
                <picture>
                  <source srcset="${n.content.images.webp}" type="image/webp">
                  <img src="${n.content.images.jpg}" alt="${E.t(n.title)}" class="subsection-image" loading="lazy">
                </picture>
              </div>
            `),h+="</div></div>"}),h+="</div>"),h+="</div>",h}function _(){m.innerHTML="",s.forEach(r=>{const h=document.createElement("section");h.id=r.id,h.className=`section ${u===r.id?"section-active":""}`,h.innerHTML=`
          <h2 class="section-title" data-i18n="${r.title}">${E.t(r.title)}</h2>
          ${v(r)}
        `,m.appendChild(h)})}function S(){w(),_(),document.querySelectorAll(".update-label").forEach(r=>{if(r.hasAttribute("data-i18n")){const h=r.getAttribute("data-i18n");r.textContent=E.t(h)}}),document.querySelectorAll("[data-i18n-aria]").forEach(r=>{const h=r.getAttribute("data-i18n-aria");r.setAttribute("aria-label",E.t(h))})}function k(){g(),w(),_();const r=document.querySelector(".nav-title");r&&(r.setAttribute("data-i18n","products.guide_nav_title"),r.textContent=E.t("products.guide_nav_title","Guide"));const h=document.querySelector(".section-label");h&&(h.setAttribute("data-i18n","products.section_label"),h.textContent=E.t("products.section_label","FIRMWARE"));const y=document.querySelector(".title");y&&(y.setAttribute("data-i18n","products.guide_title"),y.textContent=E.t("products.guide_title","R36S Console Firmware Installation & Customization Guide"));const n=document.querySelector(".guide-intro p");n&&(n.setAttribute("data-i18n","products.guide_intro"),n.textContent=E.t("products.guide_intro"));const f=document.querySelector(".related-resources h2");f&&(f.setAttribute("data-i18n","products.related_resources_title"),f.textContent=E.t("products.related_resources_title","Related Resources"));const i=document.querySelectorAll(".related-resources a"),x=["products.related_resources.custom_installation","products.related_resources.firmware_options","products.related_resources.game_setup","products.related_resources.downloads"];i.forEach((L,C)=>{C<x.length&&(L.setAttribute("data-i18n",x[C]),L.textContent=E.t(x[C]))}),window.addEventListener("resize",g),window.addEventListener("languageChanged",S),console.log("Products: Инициализация завершена с поддержкой i18n")}c&&m&&d?k():console.error("Не найдены необходимые DOM элементы для секции Products");function l(){window.removeEventListener("resize",g),window.removeEventListener("languageChanged",S),console.log("Products: Слушатели событий удалены")}return l}function De(){console.log("Инициализация Footer");const o=document.querySelector(".footer");if(!o){console.error("Элемент footer не найден");return}const t=o.querySelector(".partnership-button");return t&&t.addEventListener("click",()=>{const e=document.querySelector(".partnership-modal-overlay");if(e){e.classList.add("active");const s=e.querySelector(".partnership-modal-content");s&&s.classList.add("active"),document.body.style.overflow="hidden"}}),Pe(),window.addEventListener("languageChanged",ie),function(){window.removeEventListener("languageChanged",ie),t&&t.removeEventListener("click",Ne)}}function ie(o){if(o.detail&&o.detail.language){const t=o.detail.language;console.log(`Footer: Язык изменен на ${t}`);const s=["ar"].includes(t),u=document.querySelector(".footer");u&&(s?(u.classList.add("rtl"),u.style.direction="rtl"):(u.classList.remove("rtl"),u.style.direction="ltr"));const p=document.querySelector(".partnership-modal-content");p&&(s?(p.classList.add("rtl"),p.style.direction="rtl"):(p.classList.remove("rtl"),p.style.direction="ltr"))}}function Pe(){const o=document.querySelector(".partnership-modal-overlay");if(!o){console.warn("Модальное окно не найдено");return}const t=o.querySelector(".partnership-modal-close");t&&t.addEventListener("click",Q),o.addEventListener("click",e=>{e.target===o&&Q()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&o.classList.contains("active")&&Q()})}function Ne(){const o=document.querySelector(".partnership-modal-overlay");if(o){o.classList.add("active");const t=o.querySelector(".partnership-modal-content");t&&t.classList.add("active"),document.body.style.overflow="hidden"}}function Q(){const o=document.querySelector(".partnership-modal-overlay");if(!o)return;const t=o.querySelector(".partnership-modal-content");o.classList.remove("active"),t&&t.classList.remove("active"),document.body.style.overflow=""}console.log("Main.js инициализирован");let X=window.initialLanguage||null;X&&console.log("Found initial language from HTML:",X);let j=[];function He(){const o="IntersectionObserver"in window,t=function(){const s=document.createElement("div");return s.style.display="flex",s.style.display==="flex"}(),e=function(){const s=document.createElement("div");return s.style.display="grid",s.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",o),console.log("- Flexbox:",t),console.log("- CSS Grid:",e),o||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),e||document.body.classList.add("no-grid"),{hasIntersectionObserver:o,hasFlexbox:t,hasGrid:e}}function ze(){try{j.forEach(o=>{typeof o=="function"&&o()}),j=[]}catch(o){console.warn("Error during global cleanup:",o)}}async function Ge(){try{const o=me(G)||X;console.log("Language from URL or initial:",o);const t=localStorage.getItem("userLanguage")||o||"en",e=["ar"];document.documentElement.setAttribute("lang",t),document.documentElement.dir=e.includes(t)?"rtl":"ltr";const s=we({forcedLanguage:o}),u=new Promise((p,c)=>{setTimeout(()=>{c(new Error("i18n initialization timed out after 5 seconds"))},5e3)});return await Promise.race([s,u]),ve(),document.documentElement.classList.add("i18n-initialized"),!0}catch(o){console.error("Error initializing i18n:",o);try{document.documentElement.setAttribute("lang","en"),document.documentElement.dir="ltr",document.documentElement.classList.add("i18n-failed")}catch(t){console.error("Failed to set fallback language attributes:",t)}return!1}}document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM загружен");try{document.documentElement.classList.add("loading-i18n");const o=await Ge();document.documentElement.classList.remove("loading-i18n"),o||console.warn("Continuing page initialization with failed i18n");const t=[];t.push((async()=>{try{const m=ye();return typeof m=="function"&&j.push(m),!0}catch(m){return console.error("Failed to initialize header:",m),!1}})()),t.push((async()=>{try{const m=be();return typeof m=="function"&&j.push(m),!0}catch(m){return console.error("Failed to initialize mobile menu:",m),!1}})()),t.push((async()=>{try{return Me(),!0}catch(m){return console.error("Failed to initialize icons:",m),!1}})()),t.push((async()=>{try{const m=He();return!0}catch(m){return console.error("Failed to check browser compatibility:",m),!1}})()),[{name:"hero",init:xe},{name:"about",init:Re},{name:"features",init:Te},{name:"categories",init:qe},{name:"articles",init:de},{name:"themeToggle",init:Be},{name:"contact",init:$e},{name:"reviews",init:Fe},{name:"products",init:je},{name:"footer",init:De},{name:"scrollToTop",init:ue}].forEach(m=>{t.push((async()=>{try{const d=m.init();return typeof d=="function"&&j.push(d),!0}catch(d){return console.error(`Failed to initialize ${m.name}:`,d),!1}})())});const s=await Promise.allSettled(t),u=s.length,p=s.filter(m=>m.status==="fulfilled"&&m.value===!0).length;console.log(`Инициализация завершена: ${p}/${u} компонентов успешно загружены`);const c=performance.now();console.log(`Страница загружена за ${c.toFixed(2)}ms`),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"),window.addEventListener("beforeunload",ze)}catch(o){console.error("Критическая ошибка при инициализации страницы:",o),document.documentElement.classList.remove("loading"),document.documentElement.classList.add("error")}});window.onerror=function(o,t,e,s,u){return console.error("Глобальная ошибка:",{message:o,source:t,lineno:e,colno:s,error:u}),!1};window.addEventListener("unhandledrejection",function(o){console.warn("Непойманное отклонение промиса (unhandled promise rejection):",o.reason)});window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production",basePath:"/R36S_CONSOLE_STORE_JS/"};console.log("Main.js выполнение завершено");
//# sourceMappingURL=index.js.map
