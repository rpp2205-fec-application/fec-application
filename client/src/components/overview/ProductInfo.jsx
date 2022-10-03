import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <p>{props.category.toUpperCase()}</p>
      <h2>{props.name}</h2>
      {
        props.salePrice === ''
          ? <p>${props.originalPrice}</p>
          : <div>
              <p className='sale-price'>${props.salePrice}</p>
              <p className='crossed'>${props.originalPrice}</p>
            </div>
      }

    </div>
  )
}

export default ProductInfo;