import React from 'react';
import axios from 'axios';
import "./QA.scss";

import QuestionBar from './QuestionBar.jsx';
import QAList from './QAList.jsx';
import Add from './Add.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownQuestions: [],
      allQuestions: [],
      loadMore: false,
      collapse: false
    }
  }

  componentDidMount () {
    this.getQuestions()
    .then(() => {
      this.setQuestions();
    })
  }

  getQuestions () {
    return (
      axios.get(`/qa/questions/${this.props.product.id}`)
      .then((response) => {
        console.log('Questions: ', response.data.results);
        this.setState({allQuestions: response.data.results})
      })
    )
  }

  setQuestions () {
    if (this.state.allQuestions.length > 2) {
      this.setState({ shownQuestions: this.state.allQuestions.slice(0, 2), loadMore: true})
    } else {
      this.setState({ shownQuestions: this.state.allQuestions })
    }
  }

  handleMoreQuestions () {
    this.setState({ shownQuestions: this.state.allQuestions, loadMore: false, collapse: true});
  }

  handleCollapse () {
    this.setState({ shownQuestions: this.state.allQuestions.slice(0, 2), loadMore: true});
  }

  render() {
    return (
      <div className="widget">
        <h2 className="title"> QUESTIONS & ANSWERS </h2>
        <QuestionBar questions={this.state.questions}/>
        <QAList questions={this.state.shownQuestions}/>
        <Add loadMore={this.state.loadMore} collapse={this.state.loadMore} handleMoreQuestions={this.handleMoreQuestions.bind(this)} handleCollapse={this.handleCollapse.bind(this)}/>
      </div>
    )
  }
}

export default QA;