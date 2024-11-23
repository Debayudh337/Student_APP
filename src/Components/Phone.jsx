// import React, { useState } from 'react';
// import './Phone.css';
// import countries from './Countries'; // Import the countries array

// const Phone = ({ setValidPhone }) => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // Validate phone number (example: minimum length of 10)
//   const validatePhoneNumber = (number) => {
//     const phoneRegex = /^[0-9]{10,15}$/; // Basic phone number validation for digits and length
//     return phoneRegex.test(number);
//   };

//   const handlePhoneChange = (e) => {
//     const newPhoneNumber = e.target.value;
//     setPhoneNumber(newPhoneNumber);

//     // Validate phone and communicate to parent
//     if (validatePhoneNumber(newPhoneNumber)) {
//       setValidPhone(true);
//     } else {
//       setValidPhone(false);
//     }
//   };

//   const handleCountryChange = (event) => {
//     const selectedCode = event.target.value;
//     const country = countries.find((country) => country.code === selectedCode);
//     setSelectedCountry(country);
//   };

//   return (
//     <div className="phone-container">
//       <div className="country-flag">
//         <img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} />
//       </div>
//       <div className="country-code">
//         <select value={selectedCountry.code} onChange={handleCountryChange}>
//           {countries.map((country) => (
//             <option key={country.code} value={country.code}>
//               {country.name} ({country.code})
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="phone-number">
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={handlePhoneChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Phone;



import React, { useState } from 'react';
import './Phone.css';
import countries from './Countries'; // Import the countries array

const Phone = ({ setValidPhone }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10,10}$/; // Basic phone number validation
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    setValidPhone(validatePhoneNumber(newPhoneNumber)); // Validate and notify parent
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
        <select value={selectedCountry.code } onChange={handleCountryChange}>
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
