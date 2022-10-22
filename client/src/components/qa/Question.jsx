import React, { useState } from 'react';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {

  const [addAnswer, setAddAnswer] = useState(false);

  const closeModal = () => {
    setAddAnswer(false);
  }

  return (
    <div className="question-section">
      <p className="questionBody"> Q: </p>
      <p className="questionBody"> {props.question.question_body} </p>
      <p className="options"> Helpful? Yes ({props.question.question_helpfulness})</p>
      <p className="options" onClick={() => setAddAnswer(true)}> Add Answer </p>
      {addAnswer? <AddAnswer product={props.product} question={props.question} handleAddAnswer={props.handleAddAnswer} closeModal={closeModal}/>: null}
    </div>
  )
}

export default Question;