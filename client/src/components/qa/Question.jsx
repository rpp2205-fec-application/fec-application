import React, { useState } from 'react';
import axios from 'axios';
import AddAnswer from './AddAnswer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addAnswer: false,
      className: "not-helpful",
      helpfulness: this.props.question.question_helpfulness
    }
  }

  closeModal () {
    this.setState({ addAnswer: false });
  }

  handleHelpful () {
    if (this.state.className === "not-helpful") {
      axios.put(`/qa/questions/${this.props.question.question_id}/helpful`)
      .then((response) => {
        console.log('Success marking helpful');
        this.setState({ className: "helpful", helpfulness: this.state.helpfulness + 1 });
      })
      .catch(err => { console.error(err) })
    } else {
      console.log('Already marked!');
    }
  }

  render () {
    return (
      <div className="question-section">
        <p className="questionBody"> Q: </p>
        <p className="questionBody"> {this.props.question.question_body} </p>
        <p className="options"> Helpful? &nbsp; <u className={this.state.className} onClick={this.handleHelpful.bind(this)}>Yes</u> ({this.state.helpfulness}) </p>
        <p className="options left-border" onClick={() => this.setState({ addAnswer: true })}> <u>Add Answer</u> </p>
        {this.state.addAnswer? <AddAnswer product={this.props.product} question={this.props.question} handleAddAnswer={this.props.handleAddAnswer} closeModal={this.closeModal.bind(this)}/>: null}
      </div>
    )
  }
}

export default Question;