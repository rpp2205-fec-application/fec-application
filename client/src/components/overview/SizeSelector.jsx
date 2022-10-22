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
    this.props.selectSizeMessageOff();
    this.props.selectSize(event.target.value);
    this.props.interaction('Size selector', 'Overview')
  }

  //Getting the new style list after the new product is passed to props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedSizeId !== this.props.selectedSizeId) {
      this.setState({
        selectedSizeId: this.props.selectedSizeId
      })
    }
  }

  render() {
    const totalQuantity = getTotalQuantity(this.props.selectedStyle.skus)
    return (
      <div>
        {totalQuantity === 0
          ? <select className='inactive-selector big-selector' value='OUT OF STOCK' disabled>
              <option>OUT OF STOCK</option>
            </select>
          : <select id='size-selector' className='selector big-selector' value={this.state.selectedSizeId} onChange={this.handleChange.bind(this)}>
              <option value='SELECT SIZE'>SELECT SIZE</option>
              {Object.keys(this.props.selectedStyle.skus).map(item => {
                if (this.props.selectedStyle.skus[item].quantity > 0) {
                  return <option key={item} value={item} role='size'>{this.props.selectedStyle.skus[item].size}</option>;
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