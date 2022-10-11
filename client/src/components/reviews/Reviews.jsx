import React from 'react';
import axios from 'axios';
import "./reviews.scss";
import ReviewsList from './ReviewsList.jsx';
import Rating from './Rating.jsx';
import Product from './Product.jsx';

const Reviews = (props) => {

  return  (
    <div ref={props.scrollToReviews} className="widget">
      <p id="title">RATINGS &#38; REVIEWS</p>
      <div className="revs">
        <div className="revs-rating">
          {/* <Rating rating={this.props.rating} reviews={this.state.reviews} reviewsMeta={this.props.reviewsMeta}/> */}
          <Rating rating={props.rating} reviewsMeta={props.reviewsMeta}/>
          <Product reviewsMeta={props.reviewsMeta}/>
        </div>
       <ReviewsList reviews={props.reviews} getReviews={props.getReviews} id={props.product.id} handleClick={props.handleClick}/>
      </div>

    </div>
  )

}



// class Reviews extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       product: {},
//       reviews: [],
//     }
//   }


//   componentDidMount() {
//     // axios.get(`/reviews/${this.props.product.id}`)
//     //   .then((res) => {
//     //     console.log('Reviews: ', res.data.results)
//     //     this.setState({
//     //       reviews: res.data.results
//     //     });
//     //   })
//     this.getReviews(this.props.product.id, 'relevant');
//   }
//   componentDidUpdate(prev, state) {
//     if (prev.product.id !== this.state.product.id) {
//       // console.log('prev: ', prev.product.id);
//       // console.log('state: ', this.state.product.id);
//       this.componentDidMount();
//     }
//   }
//   // getReviews(id, sort) {
//   //   axios.post(`/reviews/${id}`, {sort})
//   //   .then((res) => {
//   //     // console.log('Reviews: ', res.data.results)
//   //     this.setState({
//   //       product: this.props.product,
//   //       reviews: res.data.results
//   //     });
//   //   })

//   // }

//   render() {
//     return  (
//       <div ref={this.props.scrollToReviews} className="widget">
//         <hr/>
//         <h2>Below is RATINGS &#38; REVIEWS</h2>
//         <p id="title">RATINGS &#38; REVIEWS</p>
//         <div className="revs">
//           <div className="revs-rating">
//             {/* <Rating rating={this.props.rating} reviews={this.state.reviews} reviewsMeta={this.props.reviewsMeta}/> */}
//             <Rating rating={this.props.rating} reviewsMeta={this.props.reviewsMeta}/>
//             <Product reviewsMeta={this.props.reviewsMeta}/>
//           </div>

//          <ReviewsList reviews={this.state.reviews} id={this.props.product.id} getReviews={this.getReviews.bind(this)}/>
//         </div>

//       </div>
//     )
//   }
// }

export default Reviews;