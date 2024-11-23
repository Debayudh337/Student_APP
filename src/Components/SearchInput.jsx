import React from 'react';
import './SearchInput.css'; // CSS for styling the component
import SearchIcon from '../Assets/SearchIcon.svg';

const SearchInput = ({ value, onChange, icon }) => {
  return (
    <div className="search-input-container">
      {/* Search Icon */}
      <div className="search-icon">
        <img src={SearchIcon} alt="search-icon" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="search-input"
        placeholder="Search something"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
