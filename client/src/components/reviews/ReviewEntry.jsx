import React, { useState } from 'react';
import { format, parseJSON } from 'date-fns';
import Star from '../Star/Star.jsx';
import {roundNearQtr} from '../../helpers.js'
import axios from 'axios';
const ReviewEntry = (props) => {
  const [helpful, setHelp] = useState(props.review.helpfulness);
  const [clicked, setClick] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [showBig, setBig] = useState({show: false, url: ''});
  const showOrhide = !showBig.show ? "modal trans-bg display-none" : "modal trans-bg dispaly-block";
  const [showReview, setShowReview] = useState(true);
  const grayOrNot = !showReview ? "rev-gray" : "rev";
  const sendToServer = (review_id) => {
    return axios.put(`/review/${review_id}/helpful`)
      .then(() => {setClick(true)})
  }
  const sendReport = (review_id) => {
    return axios.put(`/review/${review_id}/report`)

  }
  return (
    <li>
      <div className={grayOrNot} role="reviews">
        <div className="rev-header">
           {showReview && <Star rating={roundNearQtr(props.review.rating)} />}
          <div className="date xs_font">{props.review.reviewer_name}, {format(parseJSON(props.review.date), "MMMM/dd/yyyy")}</div>
        </div>
        {/* render review's body*/}
        {!showReview && <div className="l_font">This review won't show again</div>}
        <div className="rev-body">
          {/* {props.review.summary.length <= 60 ?  <div className="rev-summary">{props.review.summary}</div>
           :  <div className="rev-summary">{props.review.summary.slice(0, 60)}<a className="more-summary">{props.review.summary.slice(60)}</a></div>
          } */}
          <div className="rev-summary">{props.review.summary}</div>
          {props.review.body.length <= 250 ? <div className="review small_font">{props.review.body}</div>
          : (<div className="review small_font">
              {props.review.body.slice(0, 250)}
              {(showMore || !showReview)? null : <a className="more-summary">{props.review.body.slice(250)}</a>}
              <br/>
              <button className="sm-btn" onClick={() => { setShowMore(!showMore) }}>{showMore ? "SHOW MORE" : "FOLD BACK" }</button>
            </div>)
          }

          {props.review.recommend && <div className="rev-recommend small_font">&#10003; I recommend this product</div>}
          {props.review.response &&
          (<div className="rep-Meg">
            <div className="rep-title">Response:</div>
            <div className="rep-body small_font">{props.review.response}</div>
          </div>)
          }
          {(!props.review.photos.length || !showReview) ? null :
           (<div>
              <div className={showOrhide} >
                <div className="modal-img" style={{"--url": showBig.url}}>
                  <span className="close" onClick={() => setBig({show: !showBig.show, url:''})}>
                    &times;
                  </span>
                  <img className="bigImg" src={showBig.url} />
                </div>
              </div>
              {props.review.photos.map(photo =>
                <img key={photo.id} className="thumbnail rev-photo" src={photo.url} onClick={(e) => {
                  setBig({show: !showBig.show, url: e.target.src});
                  }}/>
                )
              }
           </div>)
          }
        </div>
        <div className="rev-footer xs_font">
          <div>Helpful?
            <a className="underline rev-helpful" onClick={() => {
              if (!clicked) {
                setHelp(helpful + 1);
                sendToServer(props.review.review_id);
              } else {
                alert('You already clicked!');
                // setHelp(props.review.helpfulness);
                // sendToServer(props.review.review_id);
              }}}>
              Yes
            </a>
            <span className="rev-helpdata">({helpful})</span>
            |
            <a className="underline rev-helpful" onClick={() => {
              sendReport(props.review.review_id);
              setShowReview(false);
            }}> Report </a>
          </div>
          <hr/>
        </div>
      </div>

    </li>
  )
}

export default ReviewEntry;