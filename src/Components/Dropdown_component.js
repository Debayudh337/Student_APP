import React from "react";
import { useDropdown } from "./Dropdown_context";
import "./Dropdown.css";

const Dropdown = ({ dropdownName }) => {
  const { getDropdownByName } = useDropdown();
  const dropdown = getDropdownByName(dropdownName);

  if (!dropdown) return <p>Loading {dropdownName}...</p>;

  return (
    <div>
      <label>{dropdown.name}:</label>
      <select>
        {dropdown.choices.map((choice, index) => (
          <option key={index} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;