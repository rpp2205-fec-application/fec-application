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

  // Updating the state if there's any changes between the current state and the new props, happen after the props is passed with new value
  static getDerivedStateFromProps(props, state) {
    // If the quantity in the props is different from the current state quantity, update the quantity state
    if (props.selectedQuantity !== state.quantity) {
      return {
        quantity: props.selectedQuantity
      }
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.props.quantityOfSelectedSize === 0
          ? <select className='selector qty-selector' value='-' disabled>
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