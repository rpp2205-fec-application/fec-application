import React, {useState, useEffect, useRef} from "react";
import './Slider.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import  AddCard  from "./AddCard.jsx";
import OutfitCard from "./OutfitCard.jsx";
const OutfitSlider = (props) => {
  const [items, setItems] = useState(props.outfit);
  console.log('items//////', items)
  
  const outfitSlideLeft = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft -=  50;
  }

    
    useEffect(() => {
      setItems(props.outfit);
    });

  const slideRight = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft +=  50;
  }

const refContainer = useRef(items);
refContainer.current = useEffect(() => {setItems(props.outfit)});
console.log('refContainer????????', refContainer)


  return (
    <div id="main-slider-container" >
      <MdChevronLeft size={38} className="outfit-slider-icon-left" onClick={outfitSlideLeft} />
      <div id='outfitSlider'>
        <AddCard addItem={props.add} id={props.product.id}/>
        {items.map((item, index) => {
          return (
            <OutfitCard product={item} key={index} deleteItem={props.delete} />
          )
        })} 
      </div>
      <MdChevronRight size={38} className="outfit-slider-icon-right" onClick={slideRight} />
    
    </div>
  )
}

export default OutfitSlider;