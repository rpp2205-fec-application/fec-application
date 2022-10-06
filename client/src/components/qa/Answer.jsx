import React from 'react';

const Answer = (props) => {
  return (
    <div className="answer-section">
      <p className="questionBody"> A: </p>
      <p className="answerBody"> {props.answer.body} </p>
    </div>
  )
}

export default Answer;