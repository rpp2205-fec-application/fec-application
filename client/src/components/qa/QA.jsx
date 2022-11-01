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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product.id !== this.props.product.id) {
      this.getQuestions()
      .then(() => {
        this.setQuestions();
      })
    }
  }

  getQuestions () {
    return (
      axios.get(`/qa/questions/${this.props.product.id}`)
      .then((response) => {
        let qs = response.data.results;
        qs.sort((q1, q2) => q1.question_helpfulness < q2.question_helpfulness? 1: q1.question_helpfulness > q2.question_helpfulness? -1 : 0)
        console.log('Questions: ', response.data.results);
        this.setState({allQuestions: qs})
      })
      .catch(err => {
        console.error(err);
      })
    )
  }

  setQuestions () {
    if (this.state.allQuestions.length > 2) {
      this.setState({ shownQuestions: this.state.allQuestions.slice(0, 2), loadMore: true })
    } else {
      this.setState({ shownQuestions: this.state.allQuestions })
    }
  }

  handleMoreQuestions () {
    this.setState({
      shownQuestions: this.state.allQuestions,
      loadMore: false,
      collapse: true
    });
  }

  handleCollapse () {
    this.setState({ shownQuestions: this.state.allQuestions.slice(0, 2), loadMore: true, collapse: false});
  }

  handleAddQuestion (questionData) {
    axios.post(`/qa/questions`, questionData)
    .then(response => {
      console.log('Success posting new question: ', questionData, 'response: ', response);
      this.getQuestions()
      .then(() => {
        this.setQuestions();
      })
    })
    .catch(err => { console.error(err) })
  }

  filterQuestions (query) {
    if (query.length >= 3) {
      this.setState({
        shownQuestions: this.state.allQuestions.filter(q => q.question_body.startsWith(query))
      })
    } else {
      this.setQuestions();
    }
  }

  render() {
    return (
      <div className="widget">
        <div className="title-qa"> QUESTIONS & ANSWERS </div>
        <QuestionBar questions={this.state.questions} filterQuestions={this.filterQuestions.bind(this)}/>
        <QAList product={this.props.product} questions={this.state.shownQuestions}/>
        <Add product={this.props.product} handleAddQuestion={this.handleAddQuestion.bind(this)} loadMore={this.state.loadMore} collapse={this.state.collapse} handleMoreQuestions={this.handleMoreQuestions.bind(this)} handleCollapse={this.handleCollapse.bind(this)}/>
      </div>
    )
  }
}

export default QA;