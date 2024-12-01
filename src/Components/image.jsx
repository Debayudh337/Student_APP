import React, { useState } from 'react';
import './image.css';  // Import the CSS file

function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle image file change
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Validate file type (only images) and size (optional limit)
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        setErrorMessage('Please upload a valid image file (jpg, png, gif).');
        setSelectedImage(null);
      } else if (file.size > 2000000) { // Optional: limit file size to 2MB
        setErrorMessage('File size exceeds 2MB limit.');
        setSelectedImage(null);
      } else {
        setErrorMessage('');
        setSelectedImage(URL.createObjectURL(file)); // Create a preview URL for the image
      }
    }
  };

  // Clear image and error
  const handleClearImage = () => {
    setSelectedImage(null);
    setErrorMessage('');
  };

  return (
    <div className="image-input-container"> 
      <h3>Upload an Image:</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {selectedImage && (
        <div className="image-preview-container">
          <img src={selectedImage} alt="Preview" className="image-preview" />
          <button className="clear-button" onClick={handleClearImage}>
            Clear Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageInput;
