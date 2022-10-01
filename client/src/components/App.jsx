import React from 'react';
import Reviews from './reviews/Reviews.jsx';
import QA from './questions-and-answers/QA.jsx';

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
        <QA/>
        <Reviews />
      </div>
    )
  }
}

export default App;