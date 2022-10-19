import React, {useState} from "react";
import './Slider.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import  AddCard  from "./AddCard.jsx";
import OutfitCard from "./OutfitCard.jsx";
const OutfitSlider = (props) => {
  const [items, setItems] = useState(props.curProduct);
  
  const outfitSlideLeft = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft -=  50;
  }

  const slideRight = () => {
    var slider = document.getElementById('outfitSlider');
    slider.scrollLeft +=  50;
  }

  const addProduct = () => {
    if(items.includes(props.product.id)) {
       alert('Product Already Added to Outfit')
    } else {
      setItems([...items, props.product.id]);
    }
    console.log('items////', items);
  }

  const deleteProduct = () => {
    setItems([]);
  }

  return (
    <div id="main-slider-container" >
      <MdChevronLeft size={38} className="outfit-slider-icon-left" onClick={outfitSlideLeft} />
      <div id='outfitSlider'>
        <AddCard add={addProduct}/>
        {items.map((item, index) => {
          return (
            <OutfitCard product={item} key={index} delete={deleteProduct} />
          )
        })} 
      </div>
      <MdChevronRight size={38} className="outfit-slider-icon-right" onClick={slideRight} />
    
    </div>
  )
}

export default OutfitSlider;