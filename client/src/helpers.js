const calculateRating = (reviewArr) => {
  const arr = [3, 4, 5, 4, 4.5, 3.5, 5]
  let avgRating = 0;
  for (var review of reviewArr) {
    avgRating += review.rating;
  }
  avgRating = Math.round((avgRating/reviewArr.length) * 10) / 10;
  return avgRating;
}

export default calculateRating;