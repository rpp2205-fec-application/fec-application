import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <p>{props.category.toUpperCase()}</p>
      <h2>{props.name}</h2>
      <p>${props.price}</p>
    </div>
  )
}

export default ProductInfo;