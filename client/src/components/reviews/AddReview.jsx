import React, {useState} from 'react';
import UploadPics from './UploadPics.jsx';
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

  const [uploadShow, setUploadShow] = useState(false);
  const showOrHide = props.show ? "modal trans-bg display-block" : "modal trans-bg display-none";
  const handleUpload = () => {
    setUploadShow(!uploadShow);
  }
  const handleRadio = (e) => {
    let value = e.target.value;
    if (value === "yes") {
      setRev({...newRev, recommend: true})
    } else {
      setRev({...newRev, recommend: false})
    }

  }

  return (
    <div className={showOrHide}>
      <div className="rev-modal_content">
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
          <label><input type="radio" value="yes" onChange={(e) => {handleRadio(e)}} checked={newRev.recommend} />Yes</label>
          <label><input type="radio" value="no" onChange={(e) => {handleRadio(e)}} checked={!newRev.recommend} />No</label>
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
          <UploadPics show={uploadShow} handleClicked={handleUpload}/>
          <button onClick={handleUpload}>Upload your photos</button>
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
}

export default AddReview;