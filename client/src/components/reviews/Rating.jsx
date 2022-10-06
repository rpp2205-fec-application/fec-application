import React, { useState } from 'react';
import Star from '../Star/Star.jsx';
import {calculateRating, roundNearQtr} from '../../helpers.js';

const Rating = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [reviewsMeta, setMeta] = useState(props.reviewsMeta);
  const recommend = parseInt(reviewsMeta.recommended.true) / (parseInt(reviewsMeta.recommended.true) + parseInt(reviewsMeta.recommended.false));
  const totalRating = Object.values(reviewsMeta.ratings).reduce((acc, n) => {
    return acc = acc + parseInt(n);
  }, 0)
  console.log('total: ', totalRating);
  return (
    <div className="breakdown">
      <div className="rat-header">
        <div className="xxl_font">{rating}</div>
        <div className="stars"><Star rating={roundNearQtr(rating)}/></div>
      </div>
      <div className="xs_font">{recommend * 100}% of reviews recommend this product</div>
      <div className="rat-body xs_font">
        {Object.keys(reviewsMeta.ratings).reverse().map(key =>
            <div className="rat-chart" key={key}>
              <div className="rat-stars">
                <span className="underline">{key} stars</span>
                <span className="rat-progress" style={{"--stars": parseInt(reviewsMeta.ratings[key]) / totalRating}}></span>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}


export default Rating;