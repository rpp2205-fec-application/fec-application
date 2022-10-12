import React from 'react';
import axios from 'axios';
import "./reviews.scss";
import ReviewsList from './ReviewsList.jsx';
import Rating from './Rating.jsx';
import Product from './Product.jsx';

const Reviews = (props) => {

  return  (
    <div ref={props.scrollToReviews} className="widget">
      <p id="title">RATINGS &#38; REVIEWS</p>
      <div className="revs">
        <div className="revs-rating">
          <Rating rating={props.rating} reviewsMeta={props.reviewsMeta}/>
          <Product chars={props.reviewsMeta.characteristics}/>
        </div>
       <ReviewsList reviews={props.reviews} getReviews={props.getReviews} id={props.product.id} handleClick={props.handleClick}/>
      </div>
    </div>
  )

}


export default Reviews;