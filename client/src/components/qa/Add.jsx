import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="addSection">
        <button className="add"> MORE ANSWERED QUESTIONS </button>
        <button className="add"> ADD A QUESTION + </button>
      </div>
    )
  }
}

export default Add;