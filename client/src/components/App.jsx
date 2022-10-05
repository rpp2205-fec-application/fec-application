import React from 'react';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import Outfit from './relatedItems/Outfit.jsx';
import QA from './qa/QA.jsx';
import Reviews from './reviews/Reviews.jsx';
import axios from 'axios';
import Star from './Star/Star.jsx';

import {calculateRating} from '../helpers.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      rating: 0,
      reviewsMeta: {}
    }
    this.reviewsRef = React.createRef();
  }

  getProducts() {
    return axios.get('/products')
      .then(res => {
        console.log('Products: ', res.data)
        console.log('Product: ', res.data[0])
        return this.setState({
          products: res.data,
          product: res.data[0]
        })
      })
  }

  getReviewsMeta() {
    return axios.get(`/reviews/meta/${this.state.product.id}`)
      .then((res) => {
        console.log('Review Meta: ', res.data)
        return this.setState({
          reviewsMeta: res.data,
          rating: calculateRating(res.data.ratings)
        });
      })
  }

  selectProduct(product) {
    this.setState({product})
  }


  componentDidMount() {
    this.getProducts()
    .then(()=> {
      this.getReviewsMeta()
    })
  }

  handleScrollToReviews(event) {
    window.scrollTo(0, this.reviewsRef.current.offsetTop);
  }

  render() {
    if (JSON.stringify(this.state.product) !=='{}') {
      return (
        <div className='container'>
          <Overview product={this.state.product} handleScrollToReviews={this.handleScrollToReviews.bind(this)} rating={this.state.rating}/>
          <RelatedItems product={this.state.product}/> 
          <Outfit product={this.state.product}/>
          <QA product={this.state.product}/>
          {JSON.stringify(this.state.reviewsMeta) !=='{}' && <Reviews product={this.state.product} rating={this.state.rating} reviewsMeta={this.state.reviewsMeta} scrollToReviews={this.reviewsRef}/>}
        </div>
      )
    } else {
      return null;
    }

    // if (JSON.stringify(this.state.product) !=='{}' && this.state.reviews.length !== 0 && JSON.stringify(this.state.reviewsMeta) !=='{}') {
    //   return (
    //     <div className='container'>
    //       <Overview product={this.state.product} handleScrollToReviews={this.handleScrollToReviews.bind(this)} rating={this.state.rating}/>
    //       {/* <RelatedItems product={this.state.product}/> */}
    //       <QA product={this.state.product}/>
    //       <Reviews product={this.state.product} reviews={this.state.reviews} scrollToReviews={this.reviewsRef}/>
    //     </div>
    //   )
    // } else {
    //   return null;
    // }

  }
}

export default App;
