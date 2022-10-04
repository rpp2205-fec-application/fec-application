import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: 'SELECT SIZE'
    }
  }

  handleChange(event) {
    this.setState({
      selectedSize: event.target.value
    })
    this.props.selectSize(event.target.value);
  }

  render() {
    return (
      <div>
        <select className='selector' value={this.state.selectedSize} onChange={this.handleChange.bind(this)}>
          <option value='SELECT SIZE'>SELECT SIZE</option>
          {Object.keys(this.props.selectedStyle.skus).map(item => {
            if (this.props.selectedStyle.skus[item].quantity > 0) {
              return <option key={item} value={item}>{this.props.selectedStyle.skus[item].size}</option>;
            } else {
              return null;
            }
          })}
        </select>
      </div>
    )
  }
}

export default SizeSelector;