import React from 'react';
import axios from 'axios';

import QuestionBar from './QuestionBar.jsx';
import QAList from './QAList.jsx';
import LoadMore from './LoadMore.jsx';
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
      <div>
        <h1> Questions & Answers </h1>
        <QuestionBar/>
        <QAList questions={this.state.questions}/>
        <LoadMore/>
        <Add/>
      </div>
    )
  }
}

export default QA;