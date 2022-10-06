import React, { useState } from 'react';
import Star from '../Star/Star.jsx';
import {calculateRating, roundNearQtr} from '../../helpers.js';

const Rating = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [reviewsMeta, setMeta] = useState(props.reviewsMeta);
  console.log('inside rating: ', reviewsMeta.recommended);
  const recommend = parseInt(reviewsMeta.recommended.true) / (parseInt(reviewsMeta.recommended.true) + parseInt(reviewsMeta.recommended.false));
  console.log('recommend: ', recommend);
  return (
    <div className="breakdown">
      <div className="rat-header">
        <div className="xxl_font">{rating}</div>
        <div className="stars"><Star rating={roundNearQtr(rating)}/></div>
      </div>
      <div>{recommend * 100}% of reviews recommend this product</div>
      <div className="rav-body">
        <div className="rev-chart">
          <div className="rev-stars"><span>5 Stars</span></div>
          <div className="rev-progress"></div>
        </div>
        <div className="rev-chart">
          <div className="rev-stars"><span>4 Stars</span></div>
          <div className="rev-progress"></div>
        </div>
        <div className="rev-chart">
          <div className="rev-stars"><span>3 Stars</span></div>
          <div className="rev-progress"></div>
        </div>
        <div className="rev-chart">
          <div className="rev-stars"><span>2 Stars</span></div>
          <div className="rev-progress"></div>
        </div>
        <div className="rev-chart">
          <div className="rev-stars"><span>1 Stars</span></div>
          <div className="rev-progress"></div>
        </div>
      </div>
    </div>

  )
}
// class Rating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       avg_rating: this.props.rating,
//       click: ''
//     }
//     // this.avg_rating;
//   }

//   render() {
//     // if (this.props.reviews.length) {
//     //   this.avg_rating = calculateRating(this.props.reviews);
//     // }

//     return (
//       <div className="breakdown">
//           {this.props.rating ?
//           <div className="rat-header">
//             <div className="xxl_font">{this.props.rating}</div>
//             <div className="stars"><Star rating={roundNearQtr(this.props.rating)}/></div>
//           </div>
//           : null}


//         <div>% of reviews recommend this product</div>
//         <div className="rav-body">
//           <div className="rev-chart">
//             <div className="rev-stars"><span>5 Stars</span></div>
//             <div className="rev-progress"></div>
//           </div>
//           <div className="rev-chart">
//             <div className="rev-stars"><span>4 Stars</span></div>
//             <div className="rev-progress"></div>
//           </div>
//           <div className="rev-chart">
//             <div className="rev-stars"><span>3 Stars</span></div>
//             <div className="rev-progress"></div>
//           </div>
//           <div className="rev-chart">
//             <div className="rev-stars"><span>2 Stars</span></div>
//             <div className="rev-progress"></div>
//           </div>
//           <div className="rev-chart">
//             <div className="rev-stars"><span>1 Stars</span></div>
//             <div className="rev-progress"></div>
//           </div>
//         </div>
//       </div>


//     )
//   }
// }

export default Rating;