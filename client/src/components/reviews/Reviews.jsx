import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./reviews.scss";
import ReviewsList from './ReviewsList.jsx';
import Rating from './Rating.jsx';
import Product from './Product.jsx';
import {reviewsSort}from './helper-revs.js';

const Reviews = (props) => {
  const [newList, setList] = useState([]);
  const [toggle, setToggle] = useState({5: false, 4: false, 3: false, 2: false, 1: false});
  // let newRev = [];
  const handleStarClick = (reviews, num) => {
    console.log('before toggle: ', toggle[num], typeof num);
    if (toggle[num] === false) {
      let newRev = newList.concat(reviewsSort(reviews, num))
        console.log('newRev: ', newRev);
        setList(newRev);
    } else if (toggle[num]===true){
      let deleteRev = newList.filter((item) => {
        if (item.rating !== parseInt(num)) {
          return item;
        }
      });
      console.log('deleteRev: ', deleteRev);
      setList(deleteRev);
    }
    setToggle({...toggle, [num]:!toggle[num]});
  }
  // useEffect(() =>{

  // }, toggle)
  // if (newRev.length > 0) {
  //   console.log('newRev showed in reviews');
  //   setList[newRev];
  // }
  console.log('after toggle: ', toggle)
  console.log('REviews: ', newList);
  return  (
    <div ref={props.scrollToReviews} className="widget">
      <p id="title">RATINGS &#38; REVIEWS</p>
      <div className="revs">
        <div className="revs-rating">
          <Rating rating={props.rating} reviews={props.reviews} reviewsMeta={props.reviewsMeta} handleStarClick={handleStarClick} toggle={toggle}/>
          <Product chars={props.reviewsMeta.characteristics}/>
        </div>
        <ReviewsList reviews={props.reviews} newList={newList} getReviews={props.getReviews} id={props.product.id} handleClick={props.handleClick}/>

      </div>
    </div>
  )

}


export default Reviews;