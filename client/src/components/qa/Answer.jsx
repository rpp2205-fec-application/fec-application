import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Answer = (props) => {

  var seller = props.answerer_name === "Seller";

  return (
    <div className="answer-section">
      <p className="questionBody"> A: </p>
      <div className="answer">
        <p className="answer-body"> {props.answer.body} </p>
        <p className="answer-additional"> by {seller? <b>{props.answer.answerer_name}</b>: props.answer.answerer_name}, {new Date(props.answer.date).toDateString()} </p>
        <p className="answer-additional"> Helpful? Yes ({props.answer.helpfulness}) </p>
        <p className="answer-additional"> Report </p>
      </div>
    </div>
  )
}

export default Answer;