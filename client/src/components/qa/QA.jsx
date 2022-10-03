import React from 'react';
import QuestionBar from './QuestionBar.jsx';
import QAList from './QAList.jsx';
import LoadMore from './LoadMore.jsx';
import Add from './Add.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1> Questions & Answers </h1>
        <QuestionBar/>
        <QAList/>
        <LoadMore/>
        <Add/>
      </div>
    )
  }
}

export default QA;