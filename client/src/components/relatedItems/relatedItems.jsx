import React, { Component } from 'react';
import SingleCard from './SingleCard.jsx';
import axios from 'axios';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interaction";
    axios.get(`/products/${this.props.product.id}/related`)
    .then((response) => {
      console.log('response',  response.data);
      this.setState({
        items: response.data
      })
    }) 
  }

  render() {
    return (
      <div>
        <h4>Related Products</h4>
        {this.state.items.map((item, index) => {
           return (
            <SingleCard product={item} key={index}/>
           )
        })}
      </div>
    )
  }
}

export default RelatedItems;