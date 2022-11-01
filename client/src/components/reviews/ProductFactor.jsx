import React, { useState } from 'react';
import FactorEntry from './FactorEntry.jsx';
const ProductFactor = (props) => {
  const explainTexts = [
    ["Size", ["A size too small", "1/2 a size too smal", "Perfect", "1/2 a size too big", "A size too big"]],
    ["Width", ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"]],
    ["Comfort", ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"]],
    ["Quality", ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"]],
    ["Length", ["Runs short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"]],
    ["Fit", ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly loose", "Runs loose"]]
  ]

  return (
    <ul>
      {explainTexts.map((factor, index) => {
        return (
          <li key={index}>
           <div className="small_font bold-text factor">{factor[0]}: </div>
            <FactorEntry explain={factor} getFactor={props.getFactor} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProductFactor;