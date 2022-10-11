import React from 'react';

const Description = ({slogan, description}) => {
  return (
    <div className='widget description'>
      <h3>{slogan}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Description;