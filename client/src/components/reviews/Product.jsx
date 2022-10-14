import React, { useState } from 'react';
import { calculateSize } from './helper-revs';
const Product = (props) => {
  const [chars, setChars] = useState(props.chars);

  return (
    <div className="breakdown">
      <div className="rat-size">
        <div>Size</div>
        {calculateSize(props.chars, "Fit", "Length")}
        <div className="pod-progress"></div><br/>
        <div className="progress xs_font">

          <div style={{marginRight: "20px"}}>Too small</div>
          <div style={{marginRight: "20px"}}>Perfect</div>
          <div>Too large</div>
        </div>
      </div>
      <div className="rat-comfort">
        <div>Comfort</div>
        {calculateSize(props.chars, "Comfort", "Quality")}
        <div className="pod-progress"></div><br/>
        <div className="progress xs_font">

          <div style={{marginRight: "100px"}}>poor</div>
          <div>perfect</div>
        </div>
      </div>
    </div>
  )
}

export default Product;