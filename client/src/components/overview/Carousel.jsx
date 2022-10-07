import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faChevronUp} className='icon' />
        <FontAwesomeIcon icon={faChevronDown} className='icon' />
      </div>
    )
  }
}

export default Carousel;