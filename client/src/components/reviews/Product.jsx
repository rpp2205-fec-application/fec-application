import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className="breakdown">
        <div className="rat-size">
          <div>Size</div>
          <div className="progress">
            <div>Too small</div>
            <div>Perfect</div>
            <div>Too large</div>
          </div>
        </div>
        <div className="rat-comfort">
          <div>Comfort</div>
          <div className="progress">
            <div>poor</div>
            <div>perfect</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;