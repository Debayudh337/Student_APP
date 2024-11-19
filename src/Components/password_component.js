// Password.js
import React from 'react';
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import './Password.css';
import { usePassword } from './password_context'; // Import custom hook

const Password = () => {
  const {
    password,
    errors,
    showPassword,
    handlePasswordChange,
    togglePasswordVisibility
  } = usePassword();

  return (
    <div className="password-container">
      <input
        className="password-input"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <button
        type="button"
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <BiSolidHide size={22} /> : <FaEye size={22} />}
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
