export const reviewsSort = (reviews, key) => {
  let reviewsMap = {};
  reviews.forEach(review => {
    if (!reviewsMap[review.rating]) {
      reviewsMap[review.rating] = [];
    }
    reviewsMap[review.rating].push(review);
  })
  return reviewsMap[key];
}

export const getCharMap = (charsObj) => {
  let factMap = {};
  Object.keys(charsObj).forEach((item) => {
   factMap[item] = charsObj[item].id;
  })
  return factMap;
}

export const findLast = (map) => {
  let array = Objec.values(map);
  return array[array.length-1];
}


export const convertReview = (longStr) => {
  if (longtStr.length > 123) {
    for(let i = 123; i < longStr.length; i+123) {
      longStr.slice(0,i) + "/n" + longStr(i);
    }
  }
  return longStr;
}