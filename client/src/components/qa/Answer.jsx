import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const Answer = (props) => {

  var seller = props.answer.answerer_name === "Seller";

  var date = new Date(props.answer.date).toDateString().slice(4);
  let day = ' ' + date.split(' ')[1] + ', ';
  date = date.split(' ')[0] + day + date.split(' ')[2];

  return (
    <div className="answer-section">
      {props.first? <p className="questionBody"> A: </p>: <p className="fake"> a </p>}
      <div className="answer">
        <p className="answer-body"> {props.answer.body} </p>
        <p className="answer-additional"> by {seller? <b>{props.answer.answerer_name}</b>: props.answer.answerer_name}, {date} </p>
        <p className="answer-additional"> Helpful? Yes ({props.answer.helpfulness}) </p>
        <p className="answer-additional"> Report </p>
      </div>
    </div>
  )
}

export default Answer;