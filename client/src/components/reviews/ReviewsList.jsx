import React, {useState} from 'react';
import ReviewEntry from './ReviewEntry.jsx';


const ReviewsList = (props) => {
  if (!props.reviews.length) {
    return (<button className="btn new-revs">ADD A REVIEW +</button>);
  } else {
    const [reviews, setReviews] = useState(props.reviews.slice());
    const [renderList, setList] = useState(reviews.splice(0, 2));
    const [isEnd, setIsEnd] = useState(false);
    return (
      <div className="revs-right">
        <div className="rev-sum">{props.reviews.length} reviews, sorted by relevace</div>
        <ul className="revs-list">
          {renderList.map(review => <ReviewEntry review={review} key={review.review_id} />)}
        </ul>
        <div className="revs-footer">
          {isEnd ? null : <button onClick={() => {
            if (reviews.length >= 2) {
              let add = reviews.splice(0, 2)
              setList(renderList.concat(add));
            } else if (reviews.length === 1) {
              setList(renderList.concat(reviews));
            } else if (!reviews.length) {
              setIsEnd(true);
            }
          }} className="btn more-revs">MORE REVIEWS</button>}
          <button className="btn new-revs">ADD A REVIEW +</button>
        </div>

      </div>
    )
  }
}

export default ReviewsList;