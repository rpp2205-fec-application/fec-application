
import React from 'react';
import ModelContent from './ModelContent.jsx';
import './modal.scss';

 const Modal = ( {curProduct, hideModal, show}) => {
  const showHideClassName = show ? " modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={hideModal}>
      <section className='modal-main' >
        <h2>Comparing</h2>
        <ModelContent />
      </section>
    </div>
  );
};

export default Modal;