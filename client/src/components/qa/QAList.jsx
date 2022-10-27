import React from 'react';
import QAEntry from './QAEntry.jsx';

const QAList = (props) => {
  return (
      <div className="qa-list-section">
        {props.questions.map(question => <QAEntry product={props.product} qa={question} key={question.question_id}/>)}
      </div>
  )
}

export default QAList;