import React from 'react';

const Add = (props) => {
  return (
    <div className="addSection">
      <button className="add" onClick={props.loadMore? props.handleMoreQuestions: props.handleCollapse}> {props.loadMore? "MORE ANSWERED QUESTIONS": "COLLAPSE"} </button>
      <button className="add"> ADD A QUESTION + </button>
    </div>
  )
}

export default Add;