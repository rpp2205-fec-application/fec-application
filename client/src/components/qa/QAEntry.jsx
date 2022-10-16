import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class QAEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shownAnswers: [],
      loadMore: false,
      all: [],
      collapse: false
    }
  }

  componentDidMount () {
    this.setAnswers();
  }

  setAnswers () {
    let ans = [];
    for (let key in this.props.qa.answers) {
      ans.push(this.props.qa.answers[key])
    }
    ans.sort((a1, a2) => a1.helpfulness < a2.helpfulness ? 1 : a1.helpfulness > a2.helpfulness ? -1 : 0 )
    ans.sort((a1, a2) => a1.answerer_name !== "Seller" && a2.answerer_name === "Seller" ? 1 : a1.answerer_name === "Seller" && a2.answerer_name !== "Seller" ? -1 : 0 )

    let i = -1;
    ans = ans.map(a => {
      i++;
      return (<Answer answer={a} key={a.id} first={!i?true:false}/>)
    });

    if (ans.length > 2) {
      this.setState({
        shownAnswers: ans.slice(0, 2),
        loadMore: true,
        all: ans
      })
    } else {
      this.setState({ shownAnswers: ans })
    }
  }

  handleLoadMore () {
    this.setState({ shownAnswers: this.state.all, loadMore: false, collapse: true});
  }

  collapseAnswers () {
    this.setState({ shownAnswers: this.state.all.slice(0, 2), collapse: false, loadMore: true});
  }

  render () {
    return (
      <div className="q-a-entry">
        <Question question={this.props.qa}/>
        {this.state.shownAnswers}
        {this.state.loadMore ? <p className="load-collapse" onClick={this.handleLoadMore.bind(this)}> LOAD MORE </p> : null}
        {this.state.collapse ? <p className="load-collapse" onClick={this.collapseAnswers.bind(this)}> COLLAPSE </p> : null}
      </div>
    )
  }
}

export default QAEntry;