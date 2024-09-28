import React, { useState } from "react";
import './phone.css';  // Import the CSS file

export default function Phone() {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handler for phone number input change
  const handlePhoneInputChange = (event) => {
    const input = event.target.value;
    // Ensure only digits are entered
    if (/^\d*$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  return (
    <div className="container">
      <h3>Enter Phone Number:</h3>
      <div className="phoneInputContainer">
        {/* Logo */}
        <div className="logoContainer">
          <img src="./flag.avif" alt="logo" className="logo" />
        </div>

        {/* Country Code */}
        <div className="countryCodeContainer">
          <span className="countryCode">+91</span>
        </div>

        {/* Phone Number Input */}
        <div className="phoneNumberContainer">
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneInputChange}
            maxLength="10"
            placeholder="Phone Number"
            className="phoneInput"
          />
        </div>
      </div>
    </div>
  );
}
