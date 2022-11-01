import React from 'react';

const AlertMessage = (props) => {

  return (
    <div className={'add-review-message ' + props.className}>
      <span className="close" onClick={props.toggle}>
          &times;
      </span>
      {props.className === 'red-error' ? <strong>Error: </strong>
       : <strong>Congratulation: </strong>
      }
      {props.message}
    </div>
  )


}

export default AlertMessage;