import React, { useState } from 'react';
import './modal.scss';

 const AddQuestion = (props) => {

  // let question_date = new Date();
  // let dd = String(question_date.getDate()).padStart(2, '0');
  // let month = question_date.toLocaleString('default', { month: 'long' });
  // let yyyy = question_date.getFullYear();
  // question_date = month + ' ' + dd + ', ' + yyyy;

  const [body, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const questionChange = (e) => {
    setQuestion(e.target.value);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const emailChange = (e) => {
    setEmail(e.target.value);
  }

  const submit = () => {
    props.closeModal();
    props.handleAddQuestion({ body, name, email, product_id: props.product.id });
  }

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
        <div className="title"> Ask Your Question </div>
        <div className="subTitle"> About the {props.product.name} </div>
        <div> Your Question <input type="text" placeholder="your question here" onChange={questionChange}/> </div>
        <div> Nick Name <input type="text" placeholder="Example: jackson11!" onChange={nameChange}/> </div>
        <div> For privacy reasons, do not use your full name or email address </div>
        <div> Your Email <input type="email" placeholder="xxx@gmail.com" onChange={emailChange}/> </div>
        <div> For authentication reasons, you will not be emailed </div>
        <input className="btn" type="submit" value="Submit" onClick={submit}/>
      </div>
    </div>
  )
};

export default AddQuestion;