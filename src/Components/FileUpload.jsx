import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaFileUpload } from 'react-icons/fa';
import  UploadImage from '../Assets/UploadImage.svg';
import './FileUpload.css';

const FileUpload = ({ fileLabel, multiple }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

//   const buttonImage = multiple

  const handleButtonClick = () => {
    document.getElementById(`fileInput-${fileLabel}`).click();
  };

  return (
    <div className="file-upload-container">
      {/* Text representing the file type */}
      <label className="file-label">{fileLabel}</label>

      <div className="input-box">
        <input
          id={`fileInput-${fileLabel}`}
          type="file"
          multiple={multiple}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <input
          type="text"
          placeholder="No file chosen"
          value={uploadedFiles.map((file) => file.name).join(', ')}
          readOnly
        />
        <button type="button" onClick={handleButtonClick}>
          <img src={UploadImage} alt="Choose File" />
          {/* <FaFileUpload /> */}
        </button>
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  fileLabel: PropTypes.string.isRequired, // Text before the input box
  multiple: PropTypes.bool, // Allow multiple files to be uploaded
//   buttonImage: PropTypes.string.isRequired, // Image for the button
};

FileUpload.defaultProps = {
  multiple: false, // Default to single file upload
};

export default FileUpload;
