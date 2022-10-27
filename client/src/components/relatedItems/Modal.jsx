
import React, {useState, useEffect} from 'react';
import ModelContent from './ModelContent.jsx';
import './modal.scss';

 const Modal = (props) => {
  const showHideClassName = props.show ? " modal display-block" : "modal display-none";
  const [curProduct, setCurProdut] = useState(props.mainProduct)
  console.log('curProduct', curProduct);
  const [comparedProduct, setComparedProduct] = useState(props.product);
  console.log('comparedProduct', comparedProduct);
  useEffect(() => {
    setComparedProduct(props.product);
  })
  console.log('comparedProduct', comparedProduct);

  return (
    <div className={showHideClassName} onClick={props.hideModal}>
      <section className='modal-main' >
        <h2>Comparing</h2>
        <table id="comparions">
          <tr>
          <th>{curProduct.name}</th>
          <th>Features</th>
          <th>{comparedProduct.name}</th>
          </tr>
        </table>

        {/* <ModelContent /> */}
      </section>
    </div>
  );
};

export default Modal;