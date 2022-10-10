import axios from 'axios';
import React from 'react';
import './singleCard.scss';

class SingleCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: [],
      productStyle: []
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
        //  console.log('styles///', response.data);
        //  console.log('photos///', response.data.results[0].photos[0].thumbnail_url);
        this.setState({
          productStyle: response.data
        })
      })

  }

  render() {
    return (
      <div className='slide-container'>
        <div className="card">
          <div className='card-image'>
            <a>
            <img src={this.state?.productStyle?.results?.[0]?.photos?.[0]?.thumbnail_url} />
            </a>
            <div className='cardbody'>
            <p className='category'>{this.state.product.category}</p>
            <h4 className='name'>{this.state.product.name}</h4>
            <p className='price'>{this.state.product.default_price}</p>
            <p>ratings</p>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default SingleCard;