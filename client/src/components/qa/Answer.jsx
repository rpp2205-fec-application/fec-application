import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Answer = (props) => {
  return (
    <div className="answer-section">
      <p className="questionBody"> A: </p>
      <div className="answer">
        <p className="answer-body"> {props.answer.body} </p>
        <p className="answer-additional"> by {props.answer.answerer_name} on {new Date(props.answer.date).toDateString()} </p>
        <p className="answer-additional"> Helpful? Yes (0) </p>
        <p className="answer-additional"> Report </p>
      </div>
    </div>
  )
}

export default Answer;