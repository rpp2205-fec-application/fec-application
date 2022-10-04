import React from 'react';
import { format, parseJSON } from 'date-fns';
const ReviewEntry = (props) => {
  return (
    <li>
      <div className="rev">
        <div className="rev-header">
          <div className="star">{props.review.rating}</div>
          <div className="date">{props.review.reviewer_name}, {format(parseJSON(props.review.date), "MMMM/dd/yyyy")}</div>
        </div>
        <div className="rev-body">
          <div className="rev-summary">{props.review.summary}</div>
          <div className="review">{props.review.body}</div>
        </div>
        <div className="rev-footer">
          <p>Helpful?Yes. | Report</p>
          <hr/>
        </div>
      </div>

    </li>
  )
}

export default ReviewEntry;