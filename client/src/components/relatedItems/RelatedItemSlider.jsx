import React, {useState, useEffect} from "react";
import './Slider.scss';
import RelatedItemCard from './RelatedItemCard.jsx';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const RelatedItemSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -=  50;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft +=  50;
  }

  const uniqeRelatedProducts = (products) => {
    var arrOfProducts = [];
    for(var i = 0; i < products.length; i++) {
      if (products[i] !== props.curProduct.id && !arrOfProducts.includes(products[i])) {
        arrOfProducts.push(products[i]);
      } 
    }
      return arrOfProducts;
  }
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    setRelatedItems(uniqeRelatedProducts(props.products));
  }, [props.products])
  
  console.log('relatedItems......', relatedItems);
  
  return (
   
    <div id="main-slider-container">
      <MdChevronLeft size={38} className="slider-icon-left" onClick={slideLeft} />
      <div id='slider'>

        { relatedItems.map((item, index) => {
          return (
                  <RelatedItemCard product={item} key={index} selectProduct={props.selectProduct} handleScrollToTop={props.handleScrollToTop} />
              )
          
           })}

      </div>
      <MdChevronRight size={38} className="slider-icon-right" onClick={slideRight} />
    </div>
  )
}

export default RelatedItemSlider;