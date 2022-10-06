import React from 'react';

const Question = (props) => {
  return (
    <div>
      Q: {props.question.question_body}
    </div>
  )
}

export default Question;