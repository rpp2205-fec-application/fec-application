import React, {useState, useEffect} from 'react';
import UploadPics from './UploadPics.jsx';
import StarRating from './StarRating.jsx';
import ProductFactor from './ProductFactor.jsx';
import { getCharMap } from './helper-revs.js';
const AddReview = (props) => {
  const [newRev, setRev] = useState({
    product_id: props.product.id,
    rating:0,
    summary: "",
    body: "",
    recommend: "",
    name: "",
    email: "",
    photos: [],
    characteristics: {}
  })

  const [uploadShow, setUploadShow] = useState(false);
  const showOrHide = props.show ? "modal trans-bg display-block" : "modal trans-bg display-none";
  const handleUpload = (e) => {
    e.preventDefault();
    setUploadShow(!uploadShow);
  }
  const getRating = (newRating) => {
    setRev({...newRev, rating: newRating});
  }
  const [newFactors, setFactors] = useState({});
  let originMap = getCharMap(props.chars);
  const [factorMap, setMap] = useState({map: originMap});
  console.log('origin Map: ', factorMap);
  const getFactor = (newFactor) => {
    if (factorMap.map[newFactor.name] === undefined) {
      console.log('undefined', newFactor.name);
      let name = newFactor.name
      let array = Object.values(factorMap.map);
      let lastId = typeof array[array.length - 1] === "string" ? parseInt(array[array.length-1]) : array[array.length-1];
      //let value = (parseInt(array[array.length-1]) || array[array.length-1] )+ 1;
      console.log('add one: ' , name, lastId + 1);
      factorMap.map[name] = lastId + 1;
      setMap({map: factorMap.map});
    }
    let property = factorMap.map[newFactor.name];
    console.log('~~after Map: ', factorMap.map);
    console.log('preperty: ', property);
    console.log('newFactor value: ', newFactor.value);
    setFactors({...newFactors, [property]: newFactor.value})
   // setRev({...newRev, characteristics: newFactors});
  }

  useEffect(() => {
    setRev({...newRev, characteristics: newFactors});
  }, [newFactors])
  const handleSubmit = (newReview)=> {
    console.log("handle submit: ", newReview);
    let stopSubmit = false;
    Object.keys(newReview).forEach((key) => {
      if(key === "body" || key === "charavteristics" || key === "email" || key === "name" || key === "recommend" || key === "rating") {
        if (!newReview[key]) {
          alert(`You must enter the following: ${key.toUpperCase()}!`);
          stopSubmit = true;
          return;
        }
      }
    })
    if (newReview.body.length < 50){
      alert('Failed! Review must longer than 50 characters!');
      stopSubmit = true;
      return;
    }
    if (newReview.email.indexOf('@') === -1) {
      alert('Failed! Invalid Email address!');
      stopSubmit = true;
      return;
    }
    if (!stopSubmit) {
      return props.addReview(newReview)
      .then(() => {
        alert('Submit successfully!');
        props.handleClick()
      });
    }

    // if (newReview.rating === 0) {
    //   alert('Failed! Please select a rating!')
    // } else if (!newReview.recommend.length) {
    //   alert('Failed! Please select "Yes" or "No"!')
    // } else if (Object.values(newReview.characteristics).indexOf(0) >= 0) {
    //   alert('Failed! Please finish the characteristics part!')
    // } else if (!newReview.body.length) {
    //   alert('Failed! Please type some review!')
    // } else if (newReview.body.length < 50){
    //   alert('Failed! Review must longer than 50 characters!');
    // } else if (!newReview.name.length) {
    //   alert('Failed! Must have username!');
    // } else if (!newReview.email.length) {
    //   alert('Failed! Must have email address!')
    // } else if (newReview.email.indexOf('@') === -1) {
    //   alert('Failed! Invalid Email address!')
    // } else {
    //   return props.addReview(newReview)
    //   .then(() => {
    //     alert('Submit successfully!');
    //     props.handleClick()
    //   });
    // }


  }

  console.log("newREviews: ", newRev);
  return (
    <div className={showOrHide}>
      <div className="rev-modal_content">
        <span className="close" onClick={props.handleClick}>
          &times;
        </span>
        <form >
          <div className="rev-title">Write Your Review</div>
          <div className="rev-subTitle">About the {props.product.name}</div>
          <div>
            <label>How would you rate this?
              <StarRating getRating={getRating}/>
            </label>
          </div>
          <div>Recommend?
            <label><input type="radio" value="yes" onChange={(e) => {setRev({...newRev, recommend: e.target.value})}} checked={newRev.recommend === "yes"} />Yes</label>
            <label><input type="radio" value="no" onChange={(e) => {setRev({...newRev, recommend: e.target.value})}} checked={newRev.recommend === "no"} />No</label>
          </div>
          <div>
            <label>Characteristics:</label>
            <ProductFactor getFactor={getFactor} rev={newRev}/>
          </div>
          <div>
            <label>
              Review Summary:
              <input
                className="input-sum"
                type="text"
                placeholder="Example: Best purchase ever!"
                value={newRev.summary}
                onChange={(e) => setRev({...newRev, summary: e.target.value})}/></label>
          </div>
          <div>
            <label>Review Body:
              <textarea
                className="input-body"
                placeholder="“Why did you like the product or not?"
                value={newRev.body}
                onChange={(e) => setRev({...newRev, body: e.target.value})}
              /><br/>
              <span className="small_font">{newRev.body.length >= 50 ? "Minimum reached" : `Minimum required characters left: ${50 - newRev.body.length}` }</span>
            </label>
          </div>
          <div>
            <UploadPics show={uploadShow} handleClicked={handleUpload}/>
            <button onClick={handleUpload}>Upload your photos</button>
          </div>
          <div>
            <label>Nick Name:  <input type="text" placeholder="Example: jackson11!" value={newRev.nane} onChange={(e) => {setRev({...newRev, name: e.target.value})}} /></label>
            <label>
              Your Email:
              <input type="email" placeholder="“Example: jackson11@email.com" value={newRev.email} onChange={(e) => {setRev({...newRev, email: e.target.value})}}/>
              <div className="xs_font">For authentication reasons, you will not be emailed</div></label>
          </div>
          <div>
            <input className="center-btn" type="submit" onClick={(e) => {
          e.preventDefault();
          handleSubmit(newRev);
          }} value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddReview;