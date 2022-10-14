import React from 'react';

import Thumbnails from './Thumbnails.jsx';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhotoIndex: 0,
      expandedViewOn: false
    }
  }

  thumbnailClick(selectedPhotoIndex) {
    this.setState({selectedPhotoIndex})
  }

  toggleExpandedView() {
    this.setState(prevState => ({
      expandedViewOn: !prevState.expandedViewOn
    }))
  }

  //Getting the new style list after the new product is passed to props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      this.setState({
        selectedPhotoIndex: 0
      })
    }
  }

  render() {
    const thumbnails = [];
    const photos = [];
    this.props.selectedStyle.photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      thumbnails.push(thumbnail);
      photos.push(photo.url)
    })
    return (
      <div className='image-gallery-container'>
        {this.state.expandedViewOn && <ExpandedView expandedViewOn={this.state.expandedViewOn} thumbnails={thumbnails} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.state.selectedPhotoIndex} thumbnailClick={this.thumbnailClick.bind(this)} toggleExpandedView={this.toggleExpandedView.bind(this)} />}
        <div className='gallery-flex'>
          <Thumbnails thumbnails={thumbnails} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.state.selectedPhotoIndex} thumbnailClick={this.thumbnailClick.bind(this)} />
          <DefaultView photos={photos} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.state.selectedPhotoIndex} photoChange={this.thumbnailClick.bind(this)} toggleExpandedView={this.toggleExpandedView.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ImageGallery;