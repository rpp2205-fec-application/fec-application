import React from 'react';
import Rating from '@material-ui/lab/Rating';

const RatingInfo = ({rating, handleScrollToReviews}) => {
  return (
    <div className='close-flex'>
      <Rating name="half-rating-read" value={rating} precision={0.25} readOnly />
      <p className='read-all-reviews' onClick={handleScrollToReviews}>Read all reviews</p>
    </div>
  )
}

export default RatingInfo;
