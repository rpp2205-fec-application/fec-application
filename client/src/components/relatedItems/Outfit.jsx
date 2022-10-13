import React from 'react';
import OutfitSlider from './OutfitSlider.jsx';
import axios from 'axios';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curProduct: []
    }
  }

 

  render() {
    return (
      <div className='widget'>
        <h4>Your Outfit</h4>
          <OutfitSlider product={this.props.product} curProduct={this.state.curProduct}/> 
      </div>
    )
  }
}

export default Outfit;