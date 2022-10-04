import React from 'react';
import './star.scss';

const Star = (props) => {
  return (
    <div className ="Stars" style={{"--rating": props.rating}}></div>
  )
}

export default Star;