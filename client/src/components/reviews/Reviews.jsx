import React from 'react';
import axios from 'axios';
import "./reviews.scss";
import ReviewsList from './ReviewsList.jsx';
import Rating from './Rating.jsx';
import Product from './Product.jsx';
class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: {},
      reviews: []
    }
  }


  componentDidMount() {
    axios.post('/review', {id: this.props.product.id})
      .then((res) => {
        console.log('data: ', res.data.results);
        this.setState({
          product: this.props.product,
          reviews: res.data.results
        })
      })
  }

  render() {
    return  (
      <div ref={this.props.scrollToReviews}>
        <hr/>
        <h2>Below is RATINGS &#38; REVIEWS</h2>
        <p id="title">RATINGS &#38; REVIEWS</p>
        <div className="revs">
          <div className="revs-rating">
            <Rating reviews={this.state.reviews}/>
            <Product reviews={this.state.reviews}/>
          </div>

          <ReviewsList reviews={this.state.reviews} />
        </div>

      </div>
    )
  }
}

export default Reviews;