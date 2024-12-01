import React, { useState } from 'react';
import './Phone.css';
import countries from './Countries'; // Import the countries array

const Phone = ({ setValidPhone, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/; // Validate only the 10-digit phone number
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    const isValid = validatePhoneNumber(newPhoneNumber);
    setValidPhone(isValid); // Notify parent
    onChange(`${selectedCountry.code}${newPhoneNumber}`); // Update parent state
  };

  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    const country = countries.find((country) => country.code === selectedCode);
    setSelectedCountry(country);
  };

  return (
    <div className="phone-container">
      <div className="country-flag">
        <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} />
      </div>
      <div className="country-code">
        <select value={selectedCountry.code} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code} ({country.name})
            </option>
          ))}
        </select>
      </div>
      <div className="phone-number">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default Phone;
