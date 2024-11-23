import React, { useState } from "react";
import "./SliderFilter.css"; // Import the CSS file for styling
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

const SliderFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="slider-wrapper">
      {/* Slider Container */}
      <div className={`slider-container ${isOpen ? "open" : ""}`}>
        {/* Arrow Button to open/close */}
        <button
          className="slider-arrow-button"
          onClick={toggleSlider}
          aria-label="Toggle filter"
        >
          {isOpen ? (
            <BiLeftArrow className="arrow-icon" />
          ) : (
            <BiRightArrow className="arrow-icon" />
          )}
        </button>

        {/* Filter Form */}
        {isOpen && (
          <div className="filter-form">
            <h3>Filter Options</h3>

            {/* Area */}
            <div className="filter-group">
              <label>Area:</label>
              <select>
                <option value="south">Kolkata South</option>
                <option value="north">Kolkata North</option>
                <option value="west">Kolkata West</option>
                <option value="east">Kolkata East</option>
              </select>
            </div>

            {/* Subject */}
            <div className="filter-group">
              <label>Subject:</label>
              <select>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="math">Math</option>
                <option value="biology">Biology</option>
                <option value="english">English</option>
              </select>
            </div>

            {/* Years of Experience */}
            <div className="filter-group">
              <label>Years of Experience:</label>
              <select>
                <option value="1-3">1-3 Years</option>
                <option value="4-6">4-6 Years</option>
                <option value="6+">6+ Years</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="filter-group">
              <label>Sort By:</label>
              <select>
                <option value="rating">Customer Rating</option>
                <option value="experience">Years of Experience</option>
              </select>
            </div>

            {/* Go Button */}
            <button className="go-button">Go</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderFilter;
