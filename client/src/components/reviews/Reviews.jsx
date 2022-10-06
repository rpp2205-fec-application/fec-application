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
      reviews: [],
    }
  }


  componentDidMount() {
    // axios.post('/review', {id: this.props.product.id})
    //   .then((res) => {
    //     this.setState({
    //       product: this.props.product,
    //       reviews: res.data.results,
    //     })
    //   })
    axios.get(`/reviews/${this.props.product.id}`)
      .then((res) => {
        console.log('Reviews: ', res.data.results)
        this.setState({
          reviews: res.data.results
        });
      })
  }

  render() {
    return  (
      <div ref={this.props.scrollToReviews} className="widget">
        <hr/>
        <h2>Below is RATINGS &#38; REVIEWS</h2>
        <p id="title">RATINGS &#38; REVIEWS</p>
        <div className="revs">
          <div className="revs-rating">
            {/* <Rating rating={this.props.rating} reviews={this.state.reviews} reviewsMeta={this.props.reviewsMeta}/> */}
            <Rating rating={this.props.rating} reviewsMeta={this.props.reviewsMeta}/>
            <Product reviews={this.state.reviews}/>
          </div>

         <ReviewsList reviews={this.state.reviews} />
        </div>

      </div>
    )
  }
}

export default Reviews;