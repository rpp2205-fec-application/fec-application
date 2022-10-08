import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='default-view'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <div className='big-picture'></div>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    )
  }
}

export default DefaultView;