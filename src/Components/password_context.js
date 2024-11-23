// PasswordContext.js
import React, { createContext, useState, useContext } from 'react';

// Create PasswordContext
const PasswordContext = createContext();

export const PasswordProvider= ({ children }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isValidPassword, setValidPassword] = useState(false);

  // Password validation logic
  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) errors.push("At least one uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("At least one lowercase letter.");
    if (!/\d/.test(password)) errors.push("At least one number.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("At least one special character.");
    if (password.length < 8) errors.push("At least 8 characters long.");
    return errors;
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    const validationErrors = validatePassword(newPassword);
    setErrors(validationErrors);
    setValidPassword(validationErrors.length === 0);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordContext.Provider value={{
      password,
      errors,
      showPassword,
      isValidPassword,
      handlePasswordChange,
      togglePasswordVisibility
    }}>
      {children}
    </PasswordContext.Provider>
  );
};

// Custom Hook to consume the PasswordContext
export const usePassword = () => useContext(PasswordContext);
