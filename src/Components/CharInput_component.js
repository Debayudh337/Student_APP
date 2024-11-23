import React, { useState } from 'react';
import { useInput } from './CharInput_context'; // Import the custom hook

const StringInput = () => {
  const { inputValue, setInputValue } = useInput();
  const [warning, setWarning] = useState(''); // State for warning message

  const handleChange = (event) => {
    const value = event.target.value;

    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setInputValue(value);
      setWarning(''); // Clear warning when input is valid
    } else {
      setWarning('Only letters and spaces are allowed!');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <label htmlFor="user-input" style={{ marginRight: '10px' }}>
        Enter a string:
      </label>
      <input
        type="text"
        id="user-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a string..."
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      {warning && (
        <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
          {warning}
        </p>
      )}
    </div>
  );
};

export default StringInput;
