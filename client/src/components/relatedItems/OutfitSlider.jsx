import React, {useState} from "react";
import './Slider.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import  AddCard  from "./AddCard.jsx";
import OutfitCard from "./OutfitCard.jsx";
const OutfitSlider = (props) => {
  const [items, setItems] = useState([props.product]);
  console.log('item////', items);
  const [showItem, setShowItem] = useState(false);
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -=  50;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft +=  50;
  }

  const addProduct = () => {
    setShowItem(true);
  }

  return (
    <div id="main-slider-container" >
      <MdChevronLeft size={38} className="slider-icon-left" onClick={slideLeft} />
      <div id='slider'>
        <AddCard add={addProduct}/>
        {/* {items.map((item, index) => {
          return (
            <OutfitCard product={item} key={index} />
          )
        })} */}
      </div>
      <MdChevronRight size={38} className="slider-icon-right" onClick={slideRight} />
    
    </div>
  )
}

export default OutfitSlider;