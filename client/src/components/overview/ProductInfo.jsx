import React from 'react';

const ProductInfo = (props) => {
  return (
    <div className='close-column-flex'>
      <div className='closest-column-flex'>
        <p className='subheading'>{props.category.toUpperCase()}</p>
        <h1>{props.name}</h1>
      </div>
      <div className='close-flex'>
        {props.salePrice !== '' && <p className='sale-price price-style'>${props.salePrice}</p>}
        <p className={props.salePrice !== '' ? 'crossed price-style' : 'price-style'}>${props.originalPrice}</p>
      </div>
    </div>
  )
}

export default ProductInfo;