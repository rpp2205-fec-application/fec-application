import React from 'react';

import StyleCircle from './StyleCircle.jsx';

class StylesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyleId: this.props.selectedStyle.style_id,
      selectedStyleName: this.props.selectedStyle.name
    }
  }

  changeStyle(selectedStyle) {
    this.setState({
      selectedStyleId: selectedStyle.style_id,
      selectedStyleName: selectedStyle.name
    })
  }

  render() {
    return(
      <div>
        <span className='bold-text'>STYLE </span>
        <span className='style-name'> > {this.state.selectedStyleName.toUpperCase()}</span>
        <div className='style-list'>
          {this.props.styles.map(style => (
            <StyleCircle key={style.style_id}
              style={style}
              selectStyle={this.props.selectStyle}
              changeStyle={this.changeStyle.bind(this)}
              selected={this.state.selectedStyleId === style.style_id ? true : false} />
          ))}
        </div>
      </div>
    )
  }
}

export default StylesSection;