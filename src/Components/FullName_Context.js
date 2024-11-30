
import React, { createContext, useState, useContext } from 'react';


const FullNameContext = createContext();


export const FullNameProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState('');

  
  const validateFullName = (name) => {
    const nameParts = name.trim().split(" ");
    if (nameParts.length < 2) {
      return { isValid: false, error: "Please enter both first and last name." };
    }
  
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return { isValid: false, error: "Name must contain only alphabetic characters and spaces." };
    }
  
    return { isValid: true, error: "" };
  };
  
  const handleNameChange = (name) => {
    setFullName(name);
  
    const { isValid, error } = validateFullName(name);
    setErrors(error);
  
    return isValid;
  };
  
  


  return (
    <FullNameContext.Provider value={{ fullName, errors, handleNameChange }}>
      {children}
    </FullNameContext.Provider>
  );
};


export const useFullName = () => {
    return useContext(FullNameContext);
};
