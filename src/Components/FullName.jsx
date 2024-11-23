import React, { useState } from 'react';
import './FullName.css';

const FullName = ({ setValidName }) => {
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState('');

  // Basic full name validation
  const validateFullName = (name) => {
    // Must contain at least two words (first and last name)
    const nameParts = name.trim().split(' ');
    if (nameParts.length < 2) {
      return 'Please enter both first and last name.';
    }

    // Ensure that only alphabetic characters and spaces are used
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return 'Name must contain only alphabetic characters and spaces.';
    }
 
    return ''; // No errors
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFullName(newName);

    const errorMessage = validateFullName(newName);
    setErrors(errorMessage);

    // If there's no error, name is valid
    setValidName(!errorMessage);
  };

  return (
    <div className="fullname-container">
      <input
        className="fullname-input"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={handleNameChange}
      />
      {errors && <p className="fullname-error">{errors}</p>}
    </div>
  );
};

export default FullName;
