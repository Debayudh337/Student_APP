import React, { useContext } from "react";
import { SubmitButtonContext } from "./SubmitButton_context"; 

const SubmitButton = () => {
  const { isSubmitting, handleSubmit } = useContext(SubmitButtonContext);

  const confirmAndSubmit = () => {
    const isConfirmed = window.confirm("Are you sure you want to submit?");
    if (isConfirmed) {
      handleSubmit();
    }
  };

  return (
    <button onClick={confirmAndSubmit} disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
