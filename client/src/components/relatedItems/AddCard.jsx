import React from 'react';
import './singleCard.scss';
import {MdAdd} from 'react-icons/md';

const AddCard = (props) => {
  return (
    <div className='addCard'>
      <div id="addIcon" >
      <MdAdd id='addProductIcon' onClick={props.add}/>
      </div>
       
       <div className='cardContent'>
          <h4 id='addCardContent'>Add To Outfit</h4>
       </div>
    </div>
  )
}

export default AddCard;