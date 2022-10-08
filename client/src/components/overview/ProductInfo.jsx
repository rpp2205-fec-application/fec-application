import React from 'react';

const ProductInfo = (props) => {
  return (
    <div className='close-column-flex'>
      <div className='closest-column-flex'>
        <p>{props.category.toUpperCase()}</p>
        <h1>{props.name}</h1>
      </div>
      <div className='close-flex'>
        {props.salePrice !== '' && <p className='sale-price'>${props.salePrice}</p>}
        <p className={props.salePrice !== '' ? 'crossed' : ''}>${props.originalPrice}</p>
      </div>
    </div>
  )
}

export default ProductInfo;