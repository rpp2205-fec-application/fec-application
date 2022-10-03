import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: {},
      views: []
    }
  }


  componentDidMount() {
    console.log('mont: ', this.props.product);
    axios.post('/review', {id: this.props.product.id})
      .then((res) => {
        console.log('data: ', res.data);
        this.setState({
          views: res.data.results
        })
      })
  }

  render() {
    return  (
      <div ref={this.props.scrollToReviews}>
        <h2>This is for Rating and Reviews</h2>
        <p>{JSON.stringify(this.state.views)}</p>
      </div>
    )
  }
}

export default Reviews;