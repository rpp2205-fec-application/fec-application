import React from 'react';

import StyleCircle from './StyleCircle.jsx';

class StylesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: this.props.selectedStyle.name
    }
  }

  changeStyleName(styleName) {
    this.setState({styleName})
  }

  render() {
    return(
      <div>
        {`Style > ${this.state.styleName}`}
        <div className='style-list'>
          {this.props.styles.map(style => (
            <StyleCircle key={style.style_id}
              style={style}
              selectStyle={this.props.selectStyle}
              changeStyleName={this.changeStyleName.bind(this)}
              selected={this.state.styleName === style.name ? true : false} />
          ))}
        </div>
      </div>
    )
  }
}

export default StylesSection;