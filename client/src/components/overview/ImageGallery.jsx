import React from 'react';

import Thumbnails from './Thumbnails.jsx';
import DefaultView from './DefaultView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedPhoto: this.props.selectedStyle.photos[0]
    }
  }

  render() {
    return (
      <div className='gallery-flex'>
        <Thumbnails thumbnails={this.props.thumbnails} styles={this.props.styles} />
        <DefaultView photos={this.props.photos} />
      </div>
    )
  }
}

export default ImageGallery;