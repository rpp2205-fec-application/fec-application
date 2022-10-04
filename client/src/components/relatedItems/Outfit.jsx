import React from 'react';
import axios from 'axios';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
      <div>
        <h4>Your Outfit</h4>
        <p>Currently you have no favourite items! Add more!</p>
      </div>
    )
  }
}

export default Outfit;