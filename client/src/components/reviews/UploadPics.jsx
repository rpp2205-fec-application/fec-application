import React, {useState} from 'react';
import { imageToBinary } from './helper-revs.js';
import axios from 'axios';

const UploadPics = (props) => {
  const showOrHideUpload = props.show ? "sub-modal display-block" : "sub-modal display-none";

  const [imageFiles, setImages] = useState([]);

  // useEffect(() => {
  //   setURL(urlFiles.concat())
  // }, [imageFIles])
  const handleDelete = (index)=>{
    if (imageFiles.length === 1) {
      setImages([]);
    } else {
      setImages(imageFiles.splice(index, 1));
    }
  }
  const handleSubmit = (files) => {
    props.handleUpload(files);
    props.toggleUpload();
  }
  // const [urlFiles, setURL] = useState([]);
  // const handleChange = (file) => {
  //   // let image = URL.createObjectURL(file);
  //   console.log('image: ', file);
  //   //axios.post('/upload', {image:  image.slice(5)});
  //   imageToBinary(file, (image) => {
  //     axios.post('/upload', {image})
  //       .then((url) => {
  //         setURL(urlFiles.push(url));
  //       })
  //   })
  // }

  return (
    <div className={showOrHideUpload}>
      <span className="close" onClick={props.handleClicked}>
        &times;
      </span>
      <div>
        <div>Upload Your Pictures</div>
        {imageFiles.length < 5 &&
         <input type="file" name="myImage" onChange={(e) => {setImages(imageFiles.concat(URL.createObjectURL(e.target.files[0])))}} />
          // <input type="file" name="myImage" onChange={(e) => {handleChange(e.target.files[0])}} />
        }
      </div>
      {!imageFiles.length ? null :
        imageFiles.map((image, index) => {
          return (
            <div key={index}>
              <img className="thumbnail" src={image}/>
              <button onClick={(e)=>{
                e.preventDefault();;
                handleDelete(index)
                }}>Remove</button>
            </div>
          )
        })}
      <span className="sm-btn" syle={{marginLeft: "45%"}}onClick={() => handleSubmit(imageFiles)}>Upload!</span>
    </div>
  )
}

export default UploadPics;