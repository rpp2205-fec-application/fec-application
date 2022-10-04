import React from 'react';
import Star from '../getReviews/Star.jsx';
import {calculateRating} from '../../helpers.js';
class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_rating:0,
      click: ''
    }
    this.avg_rating;
  }

  render() {

    if (this.props.reviews.length) {
      this.avg_rating = calculateRating(this.props.reviews);
    }

    return (
      <div className="breakdown">

          {this.avg_rating ?
          <div className="rat-header">
            <div className="xxl_font">{this.avg_rating}</div>
            <Star rating={this.avg_rating}/>
          </div>
          : null}


        <div>% of reviews recommend this product</div>
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
}

export default Rating;