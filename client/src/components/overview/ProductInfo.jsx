import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <p>{props.category.toUpperCase()}</p>
      <h2>{props.name}</h2>
      <div className='prices-flex'>
        {props.salePrice !== '' && <p className='sale-price'>${props.salePrice}</p>}
        <p className={props.salePrice !== '' ? 'crossed' : ''}>${props.originalPrice}</p>
      </div>
      {/* {
        props.salePrice === ''
          ? <p>${props.originalPrice}</p>
          : <div className='prices-flex'>
              <p className='sale-price'>${props.salePrice}</p>
              <p className='crossed'>${props.originalPrice}</p>
            </div>
      } */}

    </div>
  )
}

export default ProductInfo;