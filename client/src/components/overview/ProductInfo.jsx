import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <p>{props.category.toUpperCase()}</p>
      <h1>{props.name}</h1>
      <div className='close-flex'>
        {props.salePrice !== '' && <p className='sale-price'>${props.salePrice}</p>}
        <p className={props.salePrice !== '' ? 'crossed' : ''}>${props.originalPrice}</p>
      </div>
    </div>
  )
}

export default ProductInfo;