
import React from 'react';
import './modal.scss';

 const Modal = ({hideModal, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={hideModal}>
      <section className='modal-main' >
        <h2>Modal</h2>
      </section>
    </div>
  );
};

export default Modal;