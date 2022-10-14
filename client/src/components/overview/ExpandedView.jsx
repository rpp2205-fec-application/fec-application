import React from 'react';
import { TbArrowsMinimize } from "react-icons/tb";

import SimpleThumbnails from './SimpleThumbnails.jsx';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='modal trans-bg display-block'>
        <div className='expanded-view-container'>
          <TbArrowsMinimize className='close-expanded-view-icon' onClick={this.props.toggleExpandedView}/>
          <SimpleThumbnails thumbnails={this.props.thumbnails} selectedStyle={this.props.selectedStyle} selectedPhotoIndex={this.props.selectedPhotoIndex} thumbnailClick={this.props.thumbnailClick} />
        </div>
        <div className='close-expanded-view-space' onClick={this.props.toggleExpandedView}></div>
      </div>
    )
  }
}

export default ExpandedView;