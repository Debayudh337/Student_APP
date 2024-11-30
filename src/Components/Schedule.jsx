import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown_component";
import { DropdownProvider } from "../Components/Dropdown_context";
import SubmitButton from "../Components/SubmitButton_component";
import { SubmitButtonProvider } from "../Components/SubmitButton_context";
import "./Schedule.css"; // Import CSS for the Schedule page

const Schedule = () => {
  const [dropdownNames, setDropdownNames] = useState([]);

  useEffect(() => {
    // Only set dropdown names after data is fetched
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDropdownNames(data.dropdowns.map(d => d.name)))
      .catch((error) => console.error("Error fetching dropdown data:", error));
  }, []);

  const handleSubmit = () => {
    alert("Schedule submitted!");
  };

  return (
    <div className="schedule-container">
      <h2>Schedule</h2>
      <DropdownProvider>
        {/* Render all dropdowns dynamically */}
        {dropdownNames.map((name, index) => (
          <div className="schedule-dropdown" key={index}>
            <Dropdown dropdownName={name} />
          </div>
        ))}
      </DropdownProvider>

      <SubmitButtonProvider>
        <div className="schedule-submit">
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </div>
      </SubmitButtonProvider>
    </div>
  );
};

export default Schedule;
