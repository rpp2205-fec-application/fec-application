import React from 'react';
import OutfitSlider from './OutfitSlider.jsx';
import axios from 'axios';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: []
    }
  }

  // componentDidMount() {
  //   let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interaction";
  //   axios.get(`/products/${this.props.product.id}/related`)
  //   .then((response) => {
  //     console.log('response',  response.data);
  //   })
  // }

  render() {
    return (
      <div className='widget'>
        <h4>Your Outfit</h4>
          <OutfitSlider product={this.props.product}/> 
      </div>
    )
  }
}

export default Outfit;