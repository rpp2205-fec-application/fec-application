import React from 'react';
import Reviews from './reviews/Reviews.jsx';
import Overview from './overview/Overview.jsx';
import axios from 'axios';
import QA from './questions-and-answers/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }


  componentDidMount() {
    axios.get('/products')
      .then(res => {
        this.setState({
          product: res.data[0]
        })
      })
  }


  render() {
    return (
      <div>
        <Overview product={this.state.product} />
        <Reviews product={this.state.product}/>
        <QA/>
      </div>
    )
  }
}

export default App;