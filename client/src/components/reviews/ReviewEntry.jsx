import React, { useState } from 'react';
import { format, parseJSON } from 'date-fns';
import Star from '../Star/Star.jsx';
import {roundNearQtr} from '../../helpers.js'
const ReviewEntry = (props) => {
  const [helpful, setHelp] = useState(props.review.helpfulness);
  const [clicked, setClick] = useState(false);
  return (
    <li>
      <div className="rev">
        <div className="rev-header">
          <Star rating={roundNearQtr(props.review.rating)} />
          <div className="date xs_font">{props.review.reviewer_name}, {format(parseJSON(props.review.date), "MMMM/dd/yyyy")}</div>
        </div>
        <div className="rev-body">
          <div className="rev-summary">{props.review.summary}</div>
          <div className="review small_font">{props.review.body}</div>
        </div>
        <div className="rev-footer xs_font">
          <div>Helpful?
            <a className="underline rev-helpful" onClick={() => {
              if (!clicked) {
                setHelp(helpful + 1);
                setClick(true);
              } else {
                setHelp(props.review.helpfulness);
                setClick(false);
              }}}>
              Yes
            </a>
            <span className="rev-helpdata">({helpful})</span>
            |
            <a className="underline rev-helpful"> Report </a>
          </div>
          <hr/>
        </div>
      </div>

    </li>
  )
}

export default ReviewEntry;