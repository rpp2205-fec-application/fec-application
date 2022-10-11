import React, { useState } from 'react';
import Modal from './Modal.jsx'

const Add = (props) => {

  const [askQuestion, setAskQuestion] = useState(false);

  const closeModal = () => {
    setAskQuestion(false);
  }

  return (
    <div className="addSection">
      {props.loadMore? <button className="add" onClick={props.handleMoreQuestions}> MORE ANSWERED QUESTIONS </button>: null}
      {props.collapse? <button className="add" onClick={props.handleCollapse}> COLLAPSE </button>: null}
      <button className="add" onClick={() => setAskQuestion(true)}> ADD A QUESTION + </button>
      {askQuestion? <Modal product={props.product} addQuestion={props.addQuestion} closeModal={closeModal}/>: null}
    </div>
  )
}

export default Add;