export const calculateRating = (reviewArr) => {
  const arr = [3, 4, 5, 4, 4.5, 3.5, 5]
  let avgRating = 0;
  for (var review of reviewArr) {
    avgRating += review.rating;
  }
  avgRating = Math.round((avgRating/reviewArr.length) * 10) / 10;
  return avgRating;
}

export const roundNearQtr = (number) => {
  return (Math.round(number * 4) / 4).toFixed(2);
};

export const quantityList = (number) => {
  const array = [];
  for (var i = 1; i <= number; i++) {
    array.push(i);
    if (i === 15) {
      break;
    }
  }
  return array
}
