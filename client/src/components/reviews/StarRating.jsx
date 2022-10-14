import React, { useState } from 'react';

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[1,2,3,4,5].map((value, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "invisi-btn on" : "invisi-btn off"}
            onClick={() => {
              setRating(index);
              props.getRating(index);
              }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star" style={{margin:"3px"}}>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default StarRating;