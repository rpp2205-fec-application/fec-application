import React from 'react';

const Question = (props) => {
  return (
    <div className="question-section">
      <p className="questionBody"> Q: </p>
      <p className="questionBody"> {props.question.question_body} </p>
      <p className="options"> Helpful? Yes (0)</p>
      <p className="options"> Add Answer </p>
    </div>
  )
}

export default Question;