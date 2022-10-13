import React from 'react';

import {generateQuantityArray} from '../../helpers.js';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.selectedQuantity
    }
  }

  handleChange(event) {
    this.setState({
      quantity: event.target.value
    })
    this.props.selectQuantity(event.target.value);
  }

  //Getting the new style list after the new product is passed to props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedQuantity !== this.props.selectedQuantity) {
      this.setState({
        quantity: this.props.selectedQuantity
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.quantityOfSelectedSize === 0
          ? <select className='inactive-selector qty-selector' value='-' disabled>
              <option>-</option>
            </select>
          : <select className='selector qty-selector' value={this.state.quantity} onChange={this.handleChange.bind(this)}>
              {generateQuantityArray(this.props.quantityOfSelectedSize).map(qty => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>
        }
      </div>
    )
  }
}

export default QuantitySelector;