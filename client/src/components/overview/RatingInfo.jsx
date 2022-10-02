import React from 'react';
import Rating from '@material-ui/lab/Rating';

const RatingInfo = ({rating}) => {
  return (
    <div className='close-flex'>
      <Rating name="half-rating-read" value={rating} precision={0.25} readOnly />
      <a href="#">Read all reviews</a>
    </div>
  )
}

export default RatingInfo;