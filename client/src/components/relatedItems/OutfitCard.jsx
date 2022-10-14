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
    axios.get(`/products/${this.props.product}`)
      .then(response => {
        // console.log('response///', response.data);
        this.setState({
          product: response.data
        })
      })
      axios.get(`/products/${this.props.product}/styles`)
      .then(response => {
         console.log('styles///', response.data);
         console.log('photos///', response.data.results[0].photos[0].thumbnail_url);
         if(response.data.results[0].photos[0].thumbnail_url === null) {
          this.setState({
            photo: 'https://www.qiteplanguage.org/assets/img/noimage2.png'
          })
         } else {
          this.setState({
            productStyle: response.data,
            photo: response.data.results[0].photos[0].thumbnail_url
          })
         }
        
      })
  
      axios.get(`/reviews/meta/${this.props.product}`)
          .then((res) => {
            console.log('Review Meta///: ', res.data)
            console.log('rating//', calculateRating(res.data.ratings))
            this.setState({
              reviewsMeta: res.data,
              rating: calculateRating(res.data.ratings)
            });
          })
      }

  delete() {
    
  }



  render() {
    return (
        <div className="card" >
            <a>
            <img className='card-image' src={this.state.photo} />
            </a>
            <MdClear className='clear-icon' onClick={this.showModal}/>
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