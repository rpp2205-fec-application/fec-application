import React, { useState } from 'react';

const FactorEntry = (props) => {
  const [factor, setFactor] = useState(0);
  const [select, setSelect] = useState(false);
  const [index, setIndex] = useState(0);
  const handleOptionChange = (e) => {
    setFactor(e.target.value);
    //setIndex(index + 1);
    props.getFactor({name: props.explain[0], value: e.target.value})
  }

  return (
    <div className="factor">
      {factor === 0 ? <div className="small_font"> None Selected </div> : <div className="small_font">{props.explain[1][factor-1]}</div>}
      {props.explain[1].map((string, i) => {
        return (
        <a key={i}>
          <input
           type="radio"
           className="xs_font"
           value={i + 1}
           checked={parseInt(factor) === (i + 1)}
           onChange={handleOptionChange}
          />
           {i + 1}
        </a>
        )
      })}
    </div>
  )
}

export default FactorEntry;