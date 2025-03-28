// import i18next from 'i18next';

// // Кэш для форматированных цен
// const priceFormatCache = {};

// /**
//  * Получает локализованную цену для указанного типа цены и текущего языка
//  * @param {string} priceType - Тип цены ('current' или 'original')
//  * @returns {string} - Отформатированная цена в локализованном формате
//  */
// export const getLocalizedPrice = priceType => {
//   try {
//     const currentLang = i18next.language;
//     // Проверяем кэш
//     const cacheKey = `${currentLang}_${priceType}`;
//     if (priceFormatCache[cacheKey]) {
//       return priceFormatCache[cacheKey];
//     }

//     // Пытаемся получить локализованную цену из переводов
//     let formattedPrice = i18next.t(`hero.pricing.${priceType}`, {
//       defaultValue: null,
//     });

//     if (!formattedPrice) {
//       // Если нет перевода, используем дефолтные значения
//       if (priceType === 'current') {
//         formattedPrice = '$35.48 US';
//       } else if (priceType === 'original') {
//         formattedPrice = 'US $108.06';
//       } else if (priceType === 'discount') {
//         formattedPrice = '-68%';
//       }
//     }

//     // Сохраняем в кэш
//     priceFormatCache[cacheKey] = formattedPrice;
//     return formattedPrice;
//   } catch (error) {
//     console.error('Error in getLocalizedPrice:', error);
//     return '';
//   }
// };

// /**
//  * Очищает кэш форматированных цен
//  * Нужно вызывать при изменении языка или данных о ценах
//  */
// export const clearPriceCache = () => {
//   for (const key in priceFormatCache) {
//     delete priceFormatCache[key];
//   }
// };
