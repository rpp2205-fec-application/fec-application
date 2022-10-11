import React from "react";
import './Slider.scss';
import SingleCard from './SingleCard.jsx';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
const Slider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollright + 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollleft + 500;
  }
  return (
    <div id="main-slider-container">
      <MdChevronLeft size={38} className="slider-icon-left" onClick={slideLeft} />
      <div id='slider'>
        {props.products.map((item, index) => {
          return (
                  <SingleCard product={item} key={index}/>
              )
           })}
      </div>
      <MdChevronRight size={38} className="slider-icon-right" onClick={slideRight} />
    
    </div>
  )
}

export default Slider;