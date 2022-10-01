import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      views: []
    }
  }
  componentDidMont() {
    axios.get('/review')
      .then((data) => {
        this.setState({
          views: data
        })
      })
  }
  render() {
    <div>
      <h2>This is for Rating and Reviews</h2>
      <p>{this.state.views}</p>
    </div>
  }
}

export default Reviews;