import React from 'react';

const Answer = (props) => {
  return (
    <div className="answer-section">
      <p className="questionBody"> A: </p>
      <div className="answer">
        <p className="answer-body"> {props.answer.body} </p>
        <p> by User: username Date </p>
        <p> Helpful? Yes (0) </p>
        <p> Report </p>
      </div>
    </div>
  )
}

export default Answer;