import React from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      views: []
    }
  }
  componentDidMount() {
    console.log('updated!');
    axios.get('/review')
      .then((res) => {
        console.log('data: ', res.data);
        this.setState({
          views: res.data.results
        })
      })
  }
  render() {
    console.log('render!');
    return  (
    <div>
      <h2>This is for Rating and Reviews</h2>
      <p>{JSON.stringify(this.state.views)}</p>
    </div>
    )
  }
}

export default Reviews;