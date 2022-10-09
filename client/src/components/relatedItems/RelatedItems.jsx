import React, { Component } from 'react';
import SingleCard from './SingleCard.jsx';
import Slider from './Slider.jsx';
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
      // console.log('response',  response.data);
      this.setState({
        items: response.data
      })
    })
  }

  selectProduct() {
    this.props.selectProduct(this.props.product2);
  }

  render() {
    return (
      <div className='widget'>
        <h4>Related Products</h4>
        <button onClick={this.selectProduct.bind(this)}>Test switch product</button>
        <Slider products={this.state.items} />
        </div>
        
    )
  }
}

export default RelatedItems;
