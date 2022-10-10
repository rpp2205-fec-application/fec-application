import React, {useState} from 'react';

const AddReview = (props) => {
  const [newRev, setRev] = useState({
    product_id: props.product.id,
    rating:0,
    summary: '',
    body: '',
    recommend: true,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  })
  const showOrHide = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showOrHide}>
      <div className="modal_content">
        <span className="close" onClick={props.handleClick}>
          &times;
        </span>
        <form onSubmit={() => {props.handleClick}}>
        <div className="title">Write Your Review</div>
        <div className="subTitle">About the {props.product.name}</div>
        <div>
          <label>show rating star</label>
        </div>
        <div>Recommond?
          <label><input type="radio" value="yes" checked={true} />Yes</label>
          <label><input type="radio" value="no" />No</label>
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
          <label>Upload your photos</label>
        </div>
        <div>
          <label>Nick Name:  <input type="text" placeholder="Your nick name"/></label>
          <label>Your Email:  <input type="text" placeholder="xxx@gmail.com"/></label>
        </div>
        <div>
          <input className="btn" type="submit" value="Submit"/>
        </div>
      </form>
      </div>


    </div>
  )
}

export default AddReview;