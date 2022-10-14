import React from 'react';
import { FaSistrix } from "react-icons/fa";
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import Outfit from './relatedItems/Outfit.jsx';
import QA from './qa/QA.jsx';
import Reviews from './reviews/Reviews.jsx';
import axios from 'axios';
import Star from './Star/Star.jsx';
import AddReview from './reviews/AddReview.jsx';
import {calculateRating} from '../helpers.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      rating: 0,
      reviewsMeta: {},
      reviews:[],
      addReview: false,
      keyword:'',
    }
    this.reviewsRef = React.createRef();
  }

  componentDidMount() {
    this.getProducts()
    .then(()=> {
      return this.getReviewsMeta();
    })
    .then(() => {
      this.getReviews('relevant');
    })
  }

  getProducts() {
    return axios.get('/products')
      .then(res => {
        return this.setState({
          products: res.data,
          product: res.data[0]

        }, () => {
          console.log('Products: ', this.state.products)
          console.log('Product: ', this.state.product)
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

  getReviews(sort) {
    axios.post(`/reviews/${this.state.product.id}`, {sort})
    .then((res) => {
      //console.log('Reviews: ', res.data.results)
      this.setState({
        reviews: res.data.results
      });
    })
  }

  selectProduct(product) {
    this.setState({product}, () => {
      this.getReviewsMeta();
      this.getReviews('relevant');
    })

  }

  togglePop(){
    console.log('add review clicked!');
    this.setState({
      addReview: !this.state.addReview
    })
  }

  addReview(review) {
    console.log('review in addReview app: ', review);
    review.recommend = review.recommend === "yes";
    return axios.post('/addReview', {review});
  }

  handleScrollToReviews(event) {
    window.scrollTo(0, this.reviewsRef.current.offsetTop);
  }

  handleSearchChange(e){
    this.setState({
      keyword: e.target.value
    })
  }


  render() {
    if (JSON.stringify(this.state.product) !=='{}' && JSON.stringify(this.state.reviewsMeta) !=='{}') {
      return (
        <div>
          <div className="header">
            <div className="header-content">
              <a className="logo">Logo</a>
              <a className="search">
                <input type="text" onChange={this.handleSearchChange.bind(this)} value={this.state.keyword}/>
                <FaSistrix />
              </a>
            </div>

          </div>
          <div className='container'>
            <AddReview show={this.state.addReview} product={this.state.product} handleClick={this.togglePop.bind(this)} addReview={this.addReview.bind(this)}/>
            <Overview product={this.state.product} handleScrollToReviews={this.handleScrollToReviews.bind(this)} rating={this.state.rating} />
            <RelatedItems product={this.state.product} product2={this.state.products[4]} selectProduct={this.selectProduct.bind(this)}/>
            <Outfit product={this.state.product}/>
            <QA product={this.state.product}/>
            <Reviews getReviews={this.getReviews.bind(this)} reviews={this.state.reviews} product={this.state.product} rating={this.state.rating} reviewsMeta={this.state.reviewsMeta} scrollToReviews={this.reviewsRef} handleClick={this.togglePop.bind(this)}/>
          </div>
        </div>

      )

    } else {
      return null;
    }
  }


}

export default App;