import React from 'react';

const Description = ({slogan, description}) => {
  return (
    <div className='widget'>
      <h4>{slogan}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Description;