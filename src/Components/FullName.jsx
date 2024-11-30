import React from "react";
import { useFullName } from "./FullName_Context";
import "./FullName.css";

const FullName = () => {
  const { fullName, errors, handleNameChange } = useFullName();

  return (
    <div className="fullname-container">
      <input
        className="fullname-input"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      {errors && <p className="fullname-error">{errors}</p>}
    </div>
  );
};

export default FullName;
