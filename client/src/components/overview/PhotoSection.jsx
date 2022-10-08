import React from 'react';

import Thumbnails from './Thumbnails.jsx';
import MainImage from './MainImage.jsx';

class PhotoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedPhoto: this.props.selectedStyle.photos[0]
    }
  }

  render() {
    return (
      <div>
        <Thumbnails thumbnails={this.props.thumbnails} styles={this.props.styles} />
        <MainImage photos={this.props.photos} />
      </div>
    )
  }
}

export default PhotoSection;