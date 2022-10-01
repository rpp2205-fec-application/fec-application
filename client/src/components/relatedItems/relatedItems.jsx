import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import axios from 'axios';
import { compile } from 'sass';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interaction";
    axios.get()
  }

  render() {
    return (
      <div>
        <h4>Related Items</h4>
      </div>
    )
  }
}

export default RelatedItems;