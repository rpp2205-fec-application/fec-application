import React, { useState } from 'react';
import { format, parseJSON } from 'date-fns';
import Star from '../Star/Star.jsx';
import {roundNearQtr} from '../../helpers.js'
const ReviewEntry = (props) => {
  const [helpful, setHelp] = useState(props.review.helpfulness);
  const [clicked, setClick] = useState(false);
  const [showMore, setShowMore] = useState(true);

  return (
    <li>
      <div className="rev" role="reviews">
        <div className="rev-header">
          <Star rating={roundNearQtr(props.review.rating)} />
          <div className="date xs_font">{props.review.reviewer_name}, {format(parseJSON(props.review.date), "MMMM/dd/yyyy")}</div>
        </div>
        {/* render review's body*/}
        <div className="rev-body">
          {props.review.summary.length <= 60 ?  <div className="rev-summary">{props.review.summary}</div>
           :  <div className="rev-summary">{props.review.summary.slice(0, 60)}<a className="more-summary">{props.review.summary.slice(60)}</a></div>
          }

          {props.review.body.length <= 250 ? <div className="review small_font">{props.review.body}</div>
          : (<div className="review small_font">
              {props.review.body.slice(0, 250)}
              {showMore ? null : <a className="more-summary">{props.review.body.slice(250)}</a>}
              <br/>
              <button className="sm-btn" onClick={() => { setShowMore(!showMore) }}>{showMore ? "SHOW MORE" : "FOLD BACK" }</button>
            </div>)
          }
          {props.review.recommend && <div className="rev-recommend small_font">&#10003; I recommend this product</div>}
          {!props.review.photos.length ? null :
           props.review.photos.map(photo => <img key={photo.id} className="thumbnail rev-photo" src={photo.url}/>)
          }
          {props.review.response &&
          (<div className="rep-Meg">
            <div className="rep-title">Response:</div>
            <div className="rep-body small_font">{props.review.response}</div>
          </div>)
          }
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