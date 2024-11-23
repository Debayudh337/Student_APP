import React, { createContext, useState } from "react";

export const SubmitButtonContext = createContext();

export const SubmitButtonProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Form submitted!");
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <SubmitButtonContext.Provider value={{ isSubmitting, handleSubmit }}>
      {children}
    </SubmitButtonContext.Provider>
  );
};
