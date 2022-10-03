import React from 'react';
import Overview from './overview/Overview.jsx';
// import RelatedItems from './relatedItems/relatedItems.jsx';
import QA from './qa/QA.jsx';
import Reviews from './reviews/Reviews.jsx';
import axios from 'axios';

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
    if (JSON.stringify(this.state.product) !=='{}') {
      return (
        <div className='container'>
          <Overview product={this.state.product} />
          {/* <RelatedItems product={this.state.product}/> */}
          <QA product={this.state.product}/>
          <Reviews product={this.state.product}/>
        </div>
      )
    } else {
      return null;
    }

  }
}

export default App;
