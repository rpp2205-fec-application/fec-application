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

export const calculateSize = (obj, key1, key2) => {
  if (!obj[key1] && !obj[key2]) {
    return null;
  }
  if (!obj[key1]) {
    return Math.round(parseInt(obj[key2].value));
  }
  if (!obj[key2]) {
    return Math.round(parseInt(obj[key1].value));
  }
  return Math.round((parseInt(obj[key1].value) + parseInt(obj[key2].value)) / 2);
}
