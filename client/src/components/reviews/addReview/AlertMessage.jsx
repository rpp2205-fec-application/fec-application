import React from 'react';

const AlertMessage = (props) => {

  // if (props.className === 'add-review-err-message') {
  //   return (
  //     <div id={'addReviewAlert'} className={props.className}>
  //       <strong>Error:</strong> {props.message}
  //     </div>
  //   )
  // } else if (props.className === 'add-review-sucess-message') {
  //   return (
  //     <div id={'addReviewAlert'} className={props.className}>
  //       <strong>Congratulation:</strong> {props.message}
  //     </div>
  //   )
  // }
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