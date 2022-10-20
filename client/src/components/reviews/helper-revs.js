

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


export const imageToBinary =  (inputFile, cb) => {
  //console.log('files!: ', inputFile);
  let reader = new FileReader();
  reader.onloadend = function() {
    //console.log("output: ", reader.result.split(',')[1]);
    cb(reader.result.split(',')[1]);
  }
  reader.readAsDataURL(inputFile);
}

export const searchReviews = (reviewsArr, keyWords) => {
  // console.log('reviewsArr, ', typeof reviewsArr, reviewsArr);
  return reviewsArr.filter((review) => {
    if (review.body.indexOf(keyWords) >= 0|| review.summary.indexOf(keyWords)>=0) {
      return review;
    }
  })
}