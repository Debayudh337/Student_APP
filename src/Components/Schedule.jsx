// import React, { useEffect, useState } from "react";
// import Dropdown from "../Components/Dropdown_component";
// import { DropdownProvider } from "../Components/Dropdown_context";
// import SubmitButton from "../Components/SubmitButton_component";
// import { SubmitButtonProvider } from "../Components/SubmitButton_context";
// import "./Schedule.css"; // Import CSS for the Schedule page

// const Schedule = () => {
//   const [dropdownNames, setDropdownNames] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Fetch dropdown data from the JSON file
//     fetch("../Dummy/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setDropdownNames(data.dropdowns.map((d) => d.name)); // Assuming the JSON has a "dropdowns" array
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching dropdown data:", error);
//         setLoading(false); // Stop loading even if there's an error
//       });
//   }, []);

//   const handleSubmit = () => {
//     alert("Schedule submitted!"); // You can replace this with your actual submit logic
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while data is being fetched
//   }

//   return (
//     <div className="schedule-container">
//       <h2>Schedule</h2>
//       <DropdownProvider>
//         {/* Render all dropdowns dynamically */}
//         {dropdownNames.map((name, index) => (
//           <div className="schedule-dropdown" key={index}>
//             <Dropdown dropdownName={name} />
//           </div>
//         ))}
//       </DropdownProvider>

//       <SubmitButtonProvider>
//         <div className="schedule-submit">
//           <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
//         </div>
//       </SubmitButtonProvider>
//     </div>
//   );
// };

// export default Schedule;









import React, { useState } from "react";
import PageHeader from "./PageHeader";
import NavTop from "./NavTop";
import Rocket from "../Assets/Rocket.svg";
import "./Schedule.css"; // Styling for the Schedule page

const Schedule = () => {
  const [dropdownNames, setDropdownNames] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    date: "",
    month: "",
    slot: "",
  });

  // For handling the popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setSelectedValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true); // Show the popup on successful submission
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (

    <>

    <NavTop />
    <div className="schedule-container">
      
      <PageHeader heading="Schedule Your Trial" />
      <form onSubmit={handleSubmit} className="schedule-form">
        {/* Date Input */}
        <div className="form-group">
          <label>Date (Day):</label>
          <input
            type="number"
            name="date"
            value={selectedValues.date}
            onChange={handleDropdownChange}
            required
            min="1"
            max="31"
            placeholder="Enter day (1-31)"
          />
        </div>

        {/* Month Dropdown */}
        <div className="form-group">
          <label>Month:</label>
          <select
            name="month"
            value={selectedValues.month}
            onChange={handleDropdownChange}
            required
          >
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        {/* Slot Dropdown */}
        <div className="form-group">
          <label>Slot:</label>
          <select
            name="slot"
            value={selectedValues.slot}
            onChange={handleDropdownChange}
            required
          >
            <option value="">Select Slot</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Popup that shows after successful submission */}
{isPopupVisible && (
  <div className="popup">
    <div className="popup-content">
      <button className="close-btn" onClick={closePopup}>
        &times; {/* This is the cross symbol */}
      </button>
      {/* PageHeader Component */}
      <PageHeader heading="Your schedule has been submitted!" />
      {/* Rocket Image with proper centering */}
      <div className="popup-image">
        <img src={Rocket} alt="Rocket" />
      </div>
      <p>We have received your request. You will be contacted shortly.</p>
    </div>
  </div>
)}

    </div>


    </>
  );
};

export default Schedule;
