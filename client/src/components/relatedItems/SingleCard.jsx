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
        // console.log('styles///', response.data);
        this.setState({
          productStyle: response.data
        })
      })

  }

  render() {
    return (
      <div className='slide-container'>
      <div className='slide-content'>
        <div className='card-wrapper'>
          <div className='card'>
           <div className='imgae-content'>
            <span className='overlay' />
            <div className="card-image">
              <img className='card-img'/>
            </div>
           </div>
          </div>
        </div>
      </div>
 </div>
    )
  }

}

export default SingleCard;