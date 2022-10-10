import React from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegStar, FaPlus, FaHeart } from 'react-icons/fa';

import ProductInfo from './ProductInfo.jsx';
import RatingInfo from './RatingInfo.jsx';
import StylesSection from './StylesSection.jsx';
import Description from './Description.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ImageGallery from './ImageGallery.jsx';


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
      selectedQuantity: '-',
      favorite: false
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
          salePrice: selectedStyle.sale_price || '',
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

  toggleOutfit() {
    if (!this.state.favorite) {
      this.setState({
        favorite: true
      })
    } else {
      this.setState({
        favorite: false
      })
    }

  }

  componentDidMount() {
    // this.getRating();
    this.getStyles();
  }

  //Getting the new style list after the new product is passed to props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product.id !== this.props.product.id) {
      this.getStyles();
    }
  }



  render() {
    const {name, category, slogan, description, default_price} = this.props.product;
    if (this.state.styles.length != 0) {
      return (
        <div className='overview-container'>
          <div className='overview-flex'>
            <ImageGallery selectedStyle={this.state.selectedStyle} styles={this.state.styles} />
            <div className='product-info'>
              <RatingInfo rating={this.props.rating} handleScrollToReviews={this.props.handleScrollToReviews} />
              <ProductInfo name={name} category={category} originalPrice={default_price} salePrice={this.state.salePrice} />
              {this.state.styles.length !== 0 && <StylesSection styles={this.state.styles} selectedStyle={this.state.selectedStyle} selectStyle={this.selectStyle.bind(this)} />}
              <div className='selectors-buttons-flex'>
                <div className='buttons-flex'>
                  {this.state.styles.length !== 0 && <SizeSelector selectedStyle={this.state.selectedStyle} selectedSizeId={this.state.selectedSizeId} selectSize={this.selectSize.bind(this)}/>}
                  {this.state.styles.length !== 0 && <QuantitySelector quantityOfSelectedSize={this.state.quantityOfSelectedSize} selectedQuantity={this.state.selectedQuantity} selectQuantity={this.selectQuantity.bind(this)} />}
                </div>
                <div className='buttons-flex'>
                  {/* <button className='primary-button'>ADD TO BAG +</button> */}
                  <div className='primary-button'>
                    <p>ADD TO BAG</p>
                    <FaPlus />
                  </div>
                  <div className='button' onClick={this.toggleOutfit.bind(this)}>
                    {this.state.favorite
                      ? <FaHeart className='button-icon heart-icon' />
                      : <FaRegStar className='button-icon' />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Description slogan={slogan} description={description} />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Overview;