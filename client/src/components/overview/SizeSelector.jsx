import React from 'react';

import {getTotalQuantity} from '../../helpers.js';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizeId: this.props.selectedSizeId
    }
  }

  handleChange(event) {
    this.setState({
      selectedSizeId: event.target.value
    })
    this.props.selectSize(event.target.value);
  }

  render() {
    const totalQuantity = getTotalQuantity(this.props.selectedStyle.skus)
    return (
      <div>
        {totalQuantity === 0
          ? <select className='inactive-selector' value='OUT OF STOCK' disabled>
              <option>OUT OF STOCK</option>
            </select>
          : <select className='selector' value={this.props.selectedSizeId} onChange={this.handleChange.bind(this)}>
              <option value='SELECT SIZE'>SELECT SIZE</option>
              {Object.keys(this.props.selectedStyle.skus).map(item => {
                if (this.props.selectedStyle.skus[item].quantity > 0) {
                  return <option key={item} value={item}>{this.props.selectedStyle.skus[item].size}</option>;
                } else {
                  return null;
                }
              })}
            </select>
        }
      </div>
    )
  }
}

export default SizeSelector;