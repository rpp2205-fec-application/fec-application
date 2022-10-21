

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


export const searchReviews = (reviewsArr, keyWords) => {
  return reviewsArr.filter((review) => {
    if (review.body.indexOf(keyWords) >= 0|| review.summary.indexOf(keyWords)>=0) {
      return review;
    }
  })
}