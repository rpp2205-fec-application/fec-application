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
  let size;
  let marginVal;
  if (!obj[key1] && !obj[key2]) {
    size = null;
  }else if (!obj[key1]) {
    size = Math.round(parseInt(obj[key2].value));
  }else if (!obj[key2]) {
    size = Math.round(parseInt(obj[key1].value));
  } else size = Math.round((parseInt(obj[key1].value) + parseInt(obj[key2].value)) / 2);
  if (!size) {
    return 0;
  }
  return (size-1) * 3.5;
}

