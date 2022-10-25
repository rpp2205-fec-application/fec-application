import React, {useState, useEffect, useRef} from "react";
import './Slider.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import  AddCard  from "./AddCard.jsx";
import OutfitCard from "./OutfitCard.jsx";

const OutfitSlider = (props) => {
  const [items, setItems] = useState([props.outfit]);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  
  const outfitSlideLeft = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft -=  150;
    setShowRight(true);
    if(slider.scrollLeft <= 50) {
      setShowLeft(false);
    }
  }

    
    useEffect(() => {
      setItems(props.outfit);
    }, [items]);
 

  const slideRight = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft +=  150;
    setShowLeft(true);
    console.log("outfotSlider/////", slider.scrollLeft);
    console.log("outfotSlider???", slider.clientWidth);
    console.log('outfitslide&&&', slider.scrollWidth);
    if(slider.scrollLeft <= (slider.scrollWidth - slider.clientWidth)) {
      setShowRight(false);
    }
  }


  return (
    <div id="main-slider-container" >
      <MdChevronLeft size={38} className={showLeft ? "outfit-slider-icon-left" : "slider-icon-invisible"}  onClick={outfitSlideLeft} />
      <div id='outfitSlider'>
        <AddCard addItem={props.add} id={props.product.id}/>
        {items.map((item, index) => {
          return (
            <OutfitCard product={item} key={index} deleteItem={props.delete} />
          )
        })} 
      </div>
      <MdChevronRight size={38} className={showRight ? "outfit-slider-icon-right" : "slider-icon-invisible"} onClick={slideRight} />
    
    </div>
  )
}

export default OutfitSlider;