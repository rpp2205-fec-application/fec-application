import React from 'react';
import './modal.scss';

 const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
        <form onSubmit={() => {props.addQuestion}}>
        <div className="title"> Ask Your Question </div>
        <div className="subTitle"> About the {props.product.product_name} </div>
        <div>
          <label>Your Question Here</label>
        </div>
        <div>Recommond?
          <label><input type="radio" value="yes" onChange={(e) => {handleRadio(e)}} />Yes</label>
          <label><input type="radio" value="no" onChange={(e) => {handleRadio(e)}} />No</label>
        </div>
        <div>
          <label>Characteristics</label>
        </div>
        <div>
          <label>Review Summary: <input type="text" placeholder="No more than 60 char" /></label>
        </div>
        <div>
          <label>Review Body: <input type="text" placeholder="no more then 1000 chars"></input></label>
        </div>
        <div>
          <button>Upload your photos</button>
        </div>
        <div>
          <label>Nick Name:  <input type="text" placeholder="Type nick name"/></label>
          <label>Your Email:  <input type="email" placeholder="xxx@gmail.com"/></label>
        </div>
        <div>
          <input className="btn" type="submit" value="Submit"/>
        </div>
      </form>
      </div>
    </div>
  )
};

export default Modal;