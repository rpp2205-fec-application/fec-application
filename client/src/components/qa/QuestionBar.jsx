import React from 'react';
import { FaSistrix } from "react-icons/fa";

class QuestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  handleChange (e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className="searchSection">
        <input className="searchBar" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange.bind(this)}/>
        <FaSistrix className="mag" />
      </div>
    )
  }
}

export default QuestionBar;