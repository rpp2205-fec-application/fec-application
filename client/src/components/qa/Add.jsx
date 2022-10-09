import React from 'react';

const Add = (props) => {
  return (
    <div className="addSection">
      {props.loadMore? <button className="add" onClick={props.handleMoreQuestions}> MORE ANSWERED QUESTIONS </button>: null}
      {props.collapse? <button className="add" onClick={props.handleCollapse}> COLLAPSE </button>: null}
      <button className="add"> ADD A QUESTION + </button>
    </div>
  )
}

export default Add;