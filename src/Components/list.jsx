import React, { useState } from 'react';
import './list.css';  // Import the CSS file
//option is the array of choices of list
function list({ options }) {
  const [selectedOption, setSelectedOption] = useState('');

  // Handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown" className="dropdown-label">
        Choose an option:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="dropdown-select"
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="selected-option">
          You selected: {selectedOption}
        </p>
      )}
    </div>
  );
}

export default list;
