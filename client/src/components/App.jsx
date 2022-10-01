import React from 'react';
import Reviews from './reviews/Reviews.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
      <div className="hello">
        Hello World
        <Reviews />
      </div>
    )
  }
}

export default App;