import axios from 'axios';
import React from 'react';
import {MdClear} from 'react-icons/md';
import './singleCard.scss';
import Star from '../Star/Star.jsx';
import {calculateRating, roundNearQtr} from '../../helpers.js';

class OutfitCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: [],
      productStyle: [],
      reviewsMeta: [],
      rating: 0,
      photo:'',
    }
  }

  componentDidMount() {
    this.getProduct()
    .then(() => {
      return this.getPicture();
    })
    .then (() => {
      return this.getReview();
    })
}

getProduct() {
  return axios.get(`/products/${this.props.product}`)
  .then(response => {
    this.setState({
      product: response.data
    })
  })
};

getPicture() {
  return axios.get(`/products/${this.props.product}/styles`)
  .then(response => {
     var selectedStyle = response.data.results[0];
     for (var style of response.data.results) {
        if (style['default?']) {
          selectedStyle = style;
          break;
        }
      }
     if(selectedStyle.photos[0].thumbnail_url === null) {
      this.setState({
        photo: 'https://www.qiteplanguage.org/assets/img/noimage2.png'
      })
     } else {
      this.setState({
        productStyle: response.data,
        photo: selectedStyle.photos[0].thumbnail_url
      })
     }
  })
}

getReview() {
  return  axios.get(`/reviews/meta/${this.props.product}`)
   .then((res) => {
     this.setState({
       reviewsMeta: res.data,
       rating: calculateRating(res.data.ratings)
     })
   })
 }
  
 componentDidUpdate(prevProps, prevState){
  if(prevProps.product != this.props.product) {
    let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interaction";
    this.getProduct()
    .then(() => {
      return this.getPicture();
    })
    .then (() => {
      return this.getReview();
    })
  }
 }



  render() {
    return (
        <div className="card" >
            <a>
            <img className='card-image' alt="outfitImage" src={this.state.photo} />
            </a>
            <MdClear className='clear-icon' onClick={() => {this.props.deleteItem(this.props.product)}}/>
            <div className='cardbody'>
            <p className='category'>{this.state.product.category}</p>
            <p className='name'>{this.state.product.name}</p>
            <p className='price'>${this.state.product.default_price}</p>
            <Star rating={roundNearQtr(this.state.rating)} />
            </div>
        </div>


    )
  }

}

export default OutfitCard;