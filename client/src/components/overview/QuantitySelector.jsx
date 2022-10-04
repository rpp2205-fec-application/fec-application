import React from 'react';

import {quantityList} from '../../helpers.js';

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

  render() {
    return (
      <div>
        {this.props.sizeQuantity === 0
          ? <select className='selector' value='-' disabled>
              <option>-</option>
            </select>
          : <select className='selector' value={this.props.selectedQuantity} onChange={this.handleChange.bind(this)}>
              {quantityList(this.props.sizeQuantity).map(qty => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>
        }
      </div>
    )
  }
}

export default QuantitySelector;