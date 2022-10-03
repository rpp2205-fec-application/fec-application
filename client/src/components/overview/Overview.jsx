import React from 'react';
import axios from 'axios';

import "./Overview.scss";
import ProductInfo from './ProductInfo.jsx';
import RatingInfo from './RatingInfo.jsx';
import Description from './Description.jsx';

import calculateRating from '../../helpers.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      price: this.props.product.default_price,
      styles: []
    }
  }

  getRating() {
    axios.post('/review', {id: this.props.product.id})
      .then((res) => {
        const rating = calculateRating(res.data.results);
        this.setState({rating});
      })
  }

  getStyles() {
    axios.get(`/products/${this.props.product.id}/styles`)
      .then(res => {
        console.log(res.data.results);
        this.setState({
          styles: res.data.results
        })
      })
  }

  componentDidMount() {
    this.getRating();
    this.getStyles();
  }

  render() {
    const {name, category, slogan, description} = this.props.product;
    return (
      <div>
        <h2>This is for Overview</h2>
        <RatingInfo rating={this.state.rating} />
        <ProductInfo name={name} category={category} price={this.state.price} />
        <Description slogan={slogan} description={description} />
      </div>
    )
  }
}

export default Overview;