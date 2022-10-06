import React from 'react';
import axios from 'axios';

import QuestionBar from './QuestionBar.jsx';
import QAList from './QAList.jsx';
import Add from './Add.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount () {
    this.getQuestions();
  }

  getQuestions () {
    axios.get(`/qa/questions/${this.props.product.id}`)
    .then((response) => {
      console.log('Questions: ', response.data.results);
      this.setState({questions: response.data.results})
    })
  }

  render() {
    return (
      <div className="widget">
        <h1> Questions & Answers </h1>
        <QuestionBar/>
        <QAList questions={this.state.questions}/>
        <Add/>
      </div>
    )
  }
}

export default QA;