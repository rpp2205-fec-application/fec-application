import React from 'react';
import OutfitSlider from './OutfitSlider.jsx';
import axios from 'axios';


class Outfit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curProduct: this.props.outfit
    }
   
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevProps.outfit != this.props.outfit) {
      this.setState({
        curProduct: this.props.outfit
      })
    }
  }

 

  render() {
    return (
      <div className='widget'>
        <h4>Your Outfit</h4>
          <OutfitSlider product={this.props.product} outfit={this.state.curProduct} add={this.props.addToOutfit} delete={this.props.removeFromOutfit}/> 
      </div>
    )
  }
}

export default Outfit;