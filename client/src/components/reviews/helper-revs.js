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


export const imageToBinary = (inputFile) => {
  let reader = new FileReader();
  reader.onloaded = function() {
    console.log("output: ", reader.result);

    reader.readAsDataURL(inputFile);
  }
}