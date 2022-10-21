import React from 'react';
import { FaSistrix } from "react-icons/fa";
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import Outfit from './relatedItems/Outfit.jsx';
import QA from './qa/QA.jsx';
import Reviews from './reviews/Reviews.jsx';
import axios from 'axios';
import Star from './Star/Star.jsx';
import AddReview from './reviews/addReview/AddReview.jsx';
import {calculateRating, reviewsCount} from '../helpers.js'
import OutfitCard from './relatedItems/OutfitCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      rating: 0,
      reviewsMeta: {},
      reviews:[],
      reviewsLength:0,
      addReview: false,
      keyword:'',
      outfit: []
    }
    this.topRef = React.createRef();
    this.reviewsRef = React.createRef();

  }

  componentDidMount() {
    this.getProducts()
    .then(()=> {
      return this.getReviewsMeta();
    })
    .then(() => {
      this.getReviews({count: this.state.reviewsLength, sort: 'relevant'});
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
          rating: calculateRating(res.data.ratings),
          reviewsLength: reviewsCount(res.data.ratings)
        });
      })
  }

  getReviews({count, sort}) {
    axios.post(`/reviews/${this.state.product.id}`, {count, sort})
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
      this.getReviews({count: this.state.reviewsLength, sort: 'relevant'});
    })

  }

  togglePop(){
    console.log('add review clicked!');
    this.setState({
      addReview: !this.state.addReview
    })
  }

  addReview(review) {
    review.recommend = review.recommend === "yes";
    return axios.post('/addReview', {review});
  }

  handleScrollToReviews(event) {
    window.scrollTo(0, this.reviewsRef.current.offsetTop);
  }

  handleScrollToTop(event) {
    window.scrollTo(0, this.topRef.current.offsetTop);
  }

  handleSearchChange(e){
    this.setState({
      keyword: e.target.value
    })
  }

  backToDefaultProduct() {
    this.setState({
      product: this.state.products[0]
    }, async () => {
      await this.getReviewsMeta();
      this.getReviews({count: this.state.reviewsLength, sort: 'relevant'});
    })
  }

  // Add the product id to the outfit list if product hasn't been added yet
  // Remove the product id from the outfit list if the list already includes the product
  // toggleOutfit(productId) {
  //   var outfit = [...this.state.outfit];
  //   if (outfit.includes(productId)) {
  //     outfit.splice(outfit.indexOf(productId), 1);
  //   } else {
  //     outfit.push(productId);
  //   }
  //   this.setState({outfit});
  // }

  addToOutfit(productId) {
    var outfit = [...this.state.outfit];
    if (outfit.includes(productId)) {
      alert('Product Already Added To Outfit!')
    } else {
    outfit.push(productId);
    this.setState({outfit}, () => {console.log('Current Outfit after adding: ', this.state.outfit)});
    }
  }

  removeFromOutfit(productId) {
    var outfit = [...this.state.outfit];
    outfit.splice(outfit.indexOf(productId), 1);
    this.setState({outfit}, () => {console.log('Current Outfit after removing: ', this.state.outfit)});
  }


  render() {
    if (JSON.stringify(this.state.product) !=='{}' && JSON.stringify(this.state.reviewsMeta) !=='{}') {
      return (
        <div>
          <div className="header" ref={this.topRef}>

            <a className="logo pointer-cursor" onClick={this.backToDefaultProduct.bind(this)}>Logo</a>
              <a className="search">
                <input type="text" aira-label="Search" onChange={this.handleSearchChange.bind(this)} value={this.state.keyword}/>
                <FaSistrix />
              </a>
          </div>
          <div className='container'>
            <AddReview show={this.state.addReview} product={this.state.product} handleClick={this.togglePop.bind(this)} addReview={this.addReview.bind(this)} chars={this.state.reviewsMeta.characteristics}/>
            <Overview product={this.state.product} handleScrollToReviews={this.handleScrollToReviews.bind(this)} rating={this.state.rating} outfit={this.state.outfit} addToOutfit={this.addToOutfit.bind(this)} removeFromOutfit={this.removeFromOutfit.bind(this)} />
            <RelatedItems product={this.state.product} selectProduct={this.selectProduct.bind(this)} handleScrollToTop={this.handleScrollToTop.bind(this)} />
            <Outfit product={this.state.product} outfit={this.state.outfit} addToOutfit={this.addToOutfit.bind(this)} removeFromOutfit={this.removeFromOutfit.bind(this)} />
            <QA product={this.state.product}/>
            <Reviews getReviews={this.getReviews.bind(this)} state={this.state} scrollToReviews={this.reviewsRef} handleClick={this.togglePop.bind(this)}/>
          </div>
        </div>

      )

    } else {
      return null;
    }
  }


}

export default App;