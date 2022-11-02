export const calculateRating = (reviewObj) => {
  if (Object.keys(reviewObj).length === 0) {
    return 0;
  }
  let avgRating = 0;
  let total = 0
  for (var rate in reviewObj) {
    avgRating += rate * reviewObj[rate];
    total += Number(reviewObj[rate]);
  }
  avgRating = Math.round((avgRating/total) * 10) / 10;
  return avgRating;
}

export const roundNearQtr = (number) => {
  return (Math.round(number * 4) / 4).toFixed(2);
};

export const generateQuantityArray = (number) => {
  const array = [];
  for (var i = 1; i <= number; i++) {
    array.push(i);
    if (i === 15) {
      break;
    }
  }
  return array
}

export const getTotalQuantity = (skuObj) => {
  const quantityList = [];
  for (var item of Object.values(skuObj)) {
    quantityList.push(item.quantity)
  }
  return quantityList.reduce((a, b) => a+b, 0)
}

export const reviewsCount = (metaObj) => {
   let array = Object.values(metaObj);
   return array.reduce((acc, rating) => {
    return acc = acc += parseInt(rating);
   }, 0)
}

export const extractLocalStorage = (storage) => {
  var extractedObject = {};
  for (var key in storage) {
    if (isNaN(Number(key)) === false) {
      extractedObject[key] = JSON.parse(storage[key])
    }
  }
  return extractedObject;
}