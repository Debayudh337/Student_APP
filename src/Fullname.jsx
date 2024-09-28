import React, { useState } from 'react';

import './Fullname.css';

function FullNameInput() {
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for full name input change
  const handleFullNameChange = (event) => {
    const newName = event.target.value;
    setFullName(newName);
    validateFullName(newName);
  };

  // Validation function for full name
  const validateFullName = (name) => {
    // Regex to check only uppercase and lowercase letters and spaces, no special characters, and length < 20
    const regex = /^[A-Za-z\s]{1,20}$/;

    if (!regex.test(name)) {
      setErrorMessage(
        'Full name can only contain uppercase and lowercase letters, spaces, and must be less than 20 characters.'
      );
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="fullname-container">
      <h3>Enter Full Name:</h3>
      <input
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
        placeholder="Enter Full Name"
        className="fullname-input"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default FullNameInput;
