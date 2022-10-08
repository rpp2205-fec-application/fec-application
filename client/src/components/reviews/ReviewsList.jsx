import React, {useState, useEffact} from 'react';
import ReviewEntry from './ReviewEntry.jsx';


const ReviewsList = (props) => {
  if (!props.reviews.length) {
    return (<button className="btn new-revs">ADD A REVIEW +</button>);
  } else {
    const [reviews, setReviews] = useState(props.reviews);
    const [copyReviews, setCopy] = useState(reviews.slice());
    const [renderList, setList] = useState(copyReviews.splice(0, 2));
    console.log('props reviews:', props.reviews);
    if (reviews !== props.reviews) {
      console.log('diff!');
      setReviews(props.reviews);
      setCopy(reviews.slice());
      setList(copyReviews.splice(0, 2));
    }
    console.log('reviewslist review2: ', copyReviews);
    console.log('reviews:', reviews);
    const [isEnd, setIsEnd] = useState(false);
    const [select, setSelect] = useState("relevace");

    return (
      <div className="revs-right">
        <div className="rev-sum">{props.reviews.length} reviews, sorted by
        <select value={select} onChange={(e) => {
          setSelect(e.target.value);
          props.getReviews(e.target.value);
          }}>
          <option value="relevace">relevace</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
        </div>
        <ul className="revs-list">
          {renderList.map(review => <ReviewEntry review={review} key={review.review_id} />)}
        </ul>
        <div className="revs-footer">
          {isEnd ? null : <button onClick={() => {
            if (copyReviews.length >= 2) {
              setList(renderList.concat(copyReviews.splice(0, 2)));
            } else if (copyReviews.length === 1) {
              setList(renderList.concat(copyReviews));
            } else if (!copyReviews.length) {
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