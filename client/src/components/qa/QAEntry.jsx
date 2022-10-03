import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QAEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Question/>
        <Answer/>
      </div>
    )
  }
}

export default QAEntry;