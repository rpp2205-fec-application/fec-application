import React, { useState } from 'react';

const FactorEntry = (props) => {
  const [factor, setFactor] = useState(0);
  const [select, setSelect] = useState(false);
  const [index, setIndex] = useState(0);
  const handleOptionChange = (e) => {
    setFactor(e.target.value);
    setIndex(index + 1);
    props.getFactor({name: props.explain[0], value: e.target.value})
  }

  return (
    <div className="factor">
      {factor === 0 && <div className="small_font"> None Selected </div>}
      {index!==0 && <div className="small_font">{props.explain[1][index-1]}</div>}
      {props.explain[1].map((string, index) => {
        return (
        <a key={index}>
          <input
           type="radio"
           className="xs_font"
           value={index + 1}
           checked={parseInt(factor) === (index + 1)}
           onChange={handleOptionChange}
          />
           {index + 1}
        </a>
        )
      })}
    </div>
  )
}

export default FactorEntry;