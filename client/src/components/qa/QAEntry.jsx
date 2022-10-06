import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const QAEntry = (props) => {
  let anss = [];
  for (let key in props.qa.answers) {
    anss.push(props.qa.answers[key])
  }
  return (
    <div>
      <Question question={props.qa}/>
      {}
      {anss.map(ans => <Answer answer={ans} key={ans.id} />)}
    </div>
  )
}

export default QAEntry;