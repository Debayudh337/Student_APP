import React, { useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import './Password.css';

const Password = ({ setValidPassword }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);

  // Password validation
  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter.");
    if (!/\d/.test(password)) errors.push("At least one number.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("At least one special character.");
    if (password.length < 8) errors.push("At least 8 characters long.");
    return errors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const validationErrors = validatePassword(newPassword);
    setErrors(validationErrors);

    // If no errors, set password as valid
    setValidPassword(validationErrors.length === 0);
  };

  // Toggle password visibility 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <input
        className="password-input"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        type="button"
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <BiSolidHide size={22}/> : <FaEye size={22}/>}
      </button>

      {errors.length > 0 && (
        <ul className="password-errors">
          {errors.map((error, index) => (
            <li key={index} style={{ color: 'red' }}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Password;
