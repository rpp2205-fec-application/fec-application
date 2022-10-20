import React, {useState, useEffect} from "react";
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

  const addProduct = () => {
    if(items.includes(props.outfit)) {
       alert('Product Already Added to Outfit')
    } else {
      setItems([...items, props.product.id]);
    console.log('items////', items);
  }
}

  const deleteProduct = () => {
    setItems([]);
  }

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