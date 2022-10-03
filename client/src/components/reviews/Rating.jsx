import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: ''
    }
  }

  render() {
    return (
      <div className="revs-rating">
        <div className="rat-header">
          <h3>3.5</h3>
          <a>star</a>
        </div>
        <div>% of reviews recommend this product</div>
        <div className="rad-body">
          <div className="rev-chart">
            <div class="rev-stars"><span>5 Stars</span></div>
            <div class="progress"></div>
          </div>
          <div className="rev-chart">
            <div class="rev-stars"><span>4 Stars</span></div>
            <div class="progress"></div>
          </div>
          <div className="rev-chart">
            <div class="rev-stars"><span>3 Stars</span></div>
            <div class="progress"></div>
          </div>
          <div className="rev-chart">
            <div class="rev-stars"><span>2 Stars</span></div>
            <div class="progress"></div>
          </div>
          <div className="rev-chart">
            <div class="rev-stars"><span>1 Stars</span></div>
            <div class="progress"></div>
          </div>
        </div>
      </div>


    )
  }
}

export default Rating;