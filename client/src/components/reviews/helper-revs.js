

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

export const searchReviews = (reviewsArr, keyWords) => {
  return reviewsArr.filter((review) => {
    if (review.body.indexOf(keyWords) >= 0|| review.summary.indexOf(keyWords)>=0) {
      return review;
    }
  })
}

export const recommend = (recommendData) => {
  console.log(recommendData);
  if (recommendData['true'] === undefined) {
    return 0;
  }
  if (recommendData['false'] === undefined) {
    return 100;
  }
  let temp = parseInt(recommendData['true']) / (parseInt(recommendData['true']) + parseInt(recommendData['false']));
  console.log('temp: ', temp);
  return Math.round(temp * 100);
}