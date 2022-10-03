import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreReviews: 0
    }
    this.renderList = [];
  }

  render() {
    return (
      <div className="revs-right">
        <div classNam="rev-sum">{this.props.reviews.length} reviews, sorted by relevace</div>
        <ul className="revs-list">

          {this.props.reviews.map(review => <ReviewEntry review={review} key={review.review_id} />)}
        </ul>
        <div className="revs-footer">
          <button className="btn more-revs">MORE REVIEWS</button>
          <button className="btn new-revs">ADD A REVIEW +</button>
        </div>

      </div>
    )
  }

}

export default ReviewsList;