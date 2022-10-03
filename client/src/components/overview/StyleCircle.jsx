import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

class StyleCircle extends React.Component {
  constructor(props) {
    super(props);
  }

  select() {
    this.props.selectStyle(this.props.style);
    this.props.changeStyleName(this.props.style.name);
  }

  render() {
    return (
      <div className='style-container'>
        {this.props.selected && <FontAwesomeIcon icon={faCircleCheck} className='check-icon' />}
        <div onClick={this.select.bind(this)} className={this.props.selected ? 'style-circle selected-style' : 'style-circle'} style={{backgroundImage:`url(${this.props.style.photos[0].thumbnail_url})`}} ></div>
      </div>

    )
  }
}

export default StyleCircle;