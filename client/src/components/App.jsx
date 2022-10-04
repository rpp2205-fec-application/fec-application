import React from 'react';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import Outfit from './relatedItems/Outfit.jsx';
import QA from './qa/QA.jsx';
import Reviews from './reviews/Reviews.jsx';
import axios from 'axios';
import Star from './Star/Star.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      reviews: []
    }
    this.reviewsRef = React.createRef();
  }

  getProducts() {
    axios.get('/products')
      .then(res => {
        console.log('Products: ', res.data)
        this.setState({
          products: res.data,
          product: res.data[0]
        })
      })
  }

  getReviews() {
    axios.post('/review', {id: this.state.product.id})
      .then((res) => {
        const rating = calculateRating(res.data.results);
        this.setState({
          reviews: res.data
        });
      })
  }

  selectProduct(product) {
    this.setState({product})
  }


  componentDidMount() {
    this.getProducts();
  }

  handleScrollToReviews(event) {
    window.scrollTo(0, this.reviewsRef.current.offsetTop);
  }


  render() {
    if (JSON.stringify(this.state.product) !=='{}') {
      return (
        <div className='container'>
          <Overview product={this.state.product} handleScrollToReviews={this.handleScrollToReviews.bind(this)} />
          <RelatedItems product={this.state.product}/> 
          <Outfit product={this.state.product}/>
          <QA product={this.state.product}/>
          <Reviews product={this.state.product} scrollToReviews={this.reviewsRef}/>
        </div>
      )
    } else {
      return null;
    }

  }
}

export default App;
