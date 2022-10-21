import React from 'react';
import './singleCard.scss';
import {MdAdd} from 'react-icons/md';

const AddCard = (props) => {


  return (
    <div className='addCard' onClick={()=> {props.addItem(props.id)}}>
      {/* <div id="addIcon" >
      <MdAdd id='addProductIcon' />
      </div> */}
      <MdAdd className='addProductIcon' />
      <h4 className='addCardContent'>Add To Outfit</h4>

       {/* <div className='cardContent'>
          <h4 id='addCardContent'>Add To Outfit</h4>
       </div> */}
    </div>
  )
}

export default AddCard;