import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }
  }

  next() {
    if (this.state.currentIndex + 7 < this.props.thumbnails.length) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }))
    }
  }

  previous() {
    if (this.state.currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }))
    }
  }

  render() {
    var visibleThumbnails = [];
    if (this.state.currentIndex + 7 < this.props.thumbnails.length) {
      visibleThumbnails = this.props.thumbnails.slice(this.state.currentIndex, this.state.currentIndex + 7);
    } else if (this.state.currentIndex + 7 >= this.props.thumbnails.length) {
      if (this.props.thumbnails.length < 7) {
        visibleThumbnails = this.props.thumbnails.slice('');
      } else {
        visibleThumbnails = this.props.thumbnails.slice(this.props.thumbnails.length - 7, this.props.thumbnails.length);
      }
    }

    return (
      <div className='thumbnails-flex'>
        <FontAwesomeIcon icon={faChevronUp} className={this.state.currentIndex !== 0 ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.previous.bind(this)} />
        {visibleThumbnails.map((thumbnail, index) => (
          (thumbnail !== null
            ? <div key={index} index={index} className='thumbnail' style={{backgroundImage:`url(${thumbnail})`}} ></div>
            : <div key={index} index={index} className='thumbnail no-thumbnail' ></div>
            )

        ))}
        <FontAwesomeIcon icon={faChevronDown} className={(this.state.currentIndex + 7 < this.props.thumbnails.length) ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.next.bind(this)} />
      </div>
    )
  }
}

export default Thumbnails;