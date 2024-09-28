import React, { useState } from 'react';
import './password.css';  // Import the CSS file

function PasswordInput() {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handler for password input change
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  // Validation function for password
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,20}$/;

    if (!regex.test(password)) {
      setErrorMessage(
        'Password must be 8-20 characters long, contain uppercase, lowercase, special characters, and no spaces.'
      );
    } else {
      setErrorMessage('');
    }
  };

  // Toggle show/hide password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <h3>Create a Password:</h3>
      <div className="password-input-grid">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
          className="password-input"
        />
        <button
          type="button"
          className="toggle-button"
          onClick={toggleShowPassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default PasswordInput;
