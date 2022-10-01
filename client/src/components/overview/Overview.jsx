import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>This is for Overview</h2>
        <p>{this.props.product.name}</p>
      </div>
    )
  }
}

export default Overview;