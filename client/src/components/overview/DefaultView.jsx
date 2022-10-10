import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  next() {
    var nextIndex = this.props.selectedPhotoIndex + 1;
    this.props.photoChange(nextIndex);
  }

  previous() {
    var prevIndex = this.props.selectedPhotoIndex - 1;
    this.props.photoChange(prevIndex);
  }

  render() {
    var currentPhoto = this.props.photos[this.props.selectedPhotoIndex];
    return (
      <div className='default-view'>
        <FontAwesomeIcon icon={faArrowLeft} className={this.props.selectedPhotoIndex !== 0 ? 'arrow-icon' : 'arrow-icon hidden'} onClick={this.previous.bind(this)} />
        {currentPhoto !== null
          ? <div className='big-picture'style={{backgroundImage:`url(${currentPhoto})`}} ></div>
          : <div className='big-picture no-thumbnail' ></div>
        }
        <FontAwesomeIcon icon={faArrowRight} className={this.props.selectedPhotoIndex !== this.props.photos.length - 1 ? 'arrow-icon' : 'arrow-icon hidden'} onClick={this.next.bind(this)} />
      </div>
    )
  }
}

export default DefaultView;