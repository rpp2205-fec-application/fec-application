import React, { useState } from 'react';

const Product = (props) => {
  const [chars, setChars] = useState(props.chars);
  return (
    <div className="breakdown">
      <div className="rat-size">
        <div>Size</div>
        <div className="progress small_font">
          <div>Too small</div>
          <div>Perfect</div>
          <div>Too large</div>
        </div>
      </div>
      <div className="rat-comfort">
        <div>Comfort</div>
        <div className="progress small_font">
          <div>poor</div>
          <div>perfect</div>
        </div>
      </div>
    </div>
  )
}

export default Product;