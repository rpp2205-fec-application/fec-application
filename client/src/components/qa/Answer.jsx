import React, { useState } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.answer.helpfulness,
      className: "not-helpful"
    }
  }

  handleYesClick () {
    if (this.state.helpfulness === this.props.answer.helpfulness) {
      this.setState({
        helpfulness: this.state.helpfulness + 1,
        className: "helpful"
      })
    } else {
      this.setState({
        helpfulness: this.state.helpfulness - 1,
        className: "not-helpful"
      })
    }
  }

  render () {

    var date = new Date(this.props.answer.date).toDateString().slice(4);
    let day = ' ' + date.split(' ')[1] + ', ';
    date = date.split(' ')[0] + day + date.split(' ')[2];

    return (
      <div className="answer-section">
        {this.props.first? <p className="questionBody"> A: </p>: <p className="fake"> a </p>}
        <div className="answer">
          <p className="answer-body"> {this.props.answer.body} </p>
          <p className="answer-additional"> by {this.props.answer.answerer_name === "Seller"? <b>{this.props.answer.answerer_name}</b>: this.props.answer.answerer_name}, {date} </p>
          <p className="answer-additional"> Helpful? &nbsp; <u className={this.state.className} onClick={this.handleYesClick.bind(this)}>Yes</u>  ({this.state.helpfulness}) </p>
          <p className="answer-additional"> Report </p>
        </div>
      </div>
    )
  }
}

export default Answer;