import React from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import RatingInfo from './RatingInfo.jsx';
import StylesSection from './StylesSection.jsx';
import Description from './Description.jsx';
import SizeSelector from './SizeSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'

import {calculateRating} from '../../helpers.js';
import "./Overview.scss";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salePrice: '',
      styles: [],
      selectedStyle: {},
      selectedSizeId: 'SELECT SIZE',
      quantityOfSelectedSize: 0,
      selectedQuantity: '-'
    }
  }

  // getRating() {
  //   axios.post('/review', {id: this.props.product.id})
  //     .then((res) => {
  //       const rating = calculateRating(res.data.results);
  //       this.setState({rating});
  //     })
  // }

  getStyles() {
    axios.get(`/products/${this.props.product.id}/styles`)
      .then(res => {
        console.log('Styles:', res.data.results)
        var selectedStyle = res.data.results[0];
        for (var style of res.data.results) {
          if (style['default?']) {
            selectedStyle = style;
            break;
          }
        }
        this.setState({
          styles: res.data.results,
          selectedStyle,
          salePrice: selectedStyle.sale_price || ''
        })
      })
  }

  selectStyle(selectedStyle) {
    var salePrice = selectedStyle.sale_price || '';
    this.setState({selectedStyle, salePrice, selectedSizeId: 'SELECT SIZE', quantityOfSelectedSize: 0, selectedQuantity: '-'})
  }

  selectSize(selectedSizeId) {
    this.setState({
      selectedSizeId,
      quantityOfSelectedSize: selectedSizeId !== 'SELECT SIZE' ? this.state.selectedStyle.skus[selectedSizeId].quantity : 0,
      selectedQuantity: selectedSizeId !== 'SELECT SIZE' ? 1 : '-'
    })
  }

  selectQuantity(selectedQuantity) {
    this.setState({selectedQuantity})
  }

  componentDidMount() {
    // this.getRating();
    this.getStyles();
  }

  render() {
    const {name, category, slogan, description, default_price} = this.props.product;
    return (
      <div>
        <h2>This is for Overview</h2>
        <RatingInfo rating={this.props.rating} handleScrollToReviews={this.props.handleScrollToReviews} />
        <ProductInfo name={name} category={category} originalPrice={default_price} salePrice={this.state.salePrice} />
        {this.state.styles.length !== 0 && <StylesSection styles={this.state.styles} selectedStyle={this.state.selectedStyle} selectStyle={this.selectStyle.bind(this)} />}
        <div className='close-flex'>
          {this.state.styles.length !== 0 && <SizeSelector selectedStyle={this.state.selectedStyle} selectedSizeId={this.state.selectedSizeId} selectSize={this.selectSize.bind(this)}/>}
          {this.state.styles.length !== 0 && <QuantitySelector quantityOfSelectedSize={this.state.quantityOfSelectedSize} selectedQuantity={this.state.selectedQuantity} selectQuantity={this.selectQuantity.bind(this)} />}
        </div>
        <Description slogan={slogan} description={description} />
      </div>
    )
  }
}

export default Overview;