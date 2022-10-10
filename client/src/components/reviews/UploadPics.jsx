import React, {useState} from 'react';

const UploadPics = (props) => {
  const showOrHideUpload = props.show ? "sub-modal display-block" : "sub-modal display-none";
  const [files, setFiles] = useState(null);
  const onFileChange = (e) => {
    setFiles(e.target.files[0]);
    props.handleClicked();
  }
  const fileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myPics",
      files,
      files.name
    );
    console.log('files data: ', formData);
  }
  const filesData = () => {
    if (files) {
      return (
        <div>
          {JSON.stringify(files)}
        </div>
      )
    } else {
      return (
        <div>
          <h3>Choose before Pressing the Upload button</h3>
        </div>
      )
    }
  }
  return (
    <div className={showOrHideUpload}>
      <span className="close" onClick={props.handleClicked}>
        &times;
      </span>
      <div>
        <div>Upload Your Pictures</div>
        <input type="file" onChange={onFileChange} />
        <button onClick={fileUpload}> Upload!</button>

      </div>
    </div>
  )
}

export default UploadPics;