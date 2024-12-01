import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import NavTop from "../Components/NavTop";
import { useNavigate } from "react-router-dom";
import "./RequestForTrial.css";

const RequestForTrial = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    houseNumber: "",
    apartmentArea: "",
    pincode: "",
    landmark: "",
  });



  const navigate = useNavigate(); // Initialize navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Address Data:", formData); // Log the form data (for now)
    navigate("/schedule"); // Navigate to the Schedule page after the form is submitted
  };


 
  return (

    <>

<NavTop />
    <div className="request-for-trial-container">
      
      <PageHeader heading="Add Address!!" className="page-header"/>
      <form onSubmit={handleSubmit} className="trial-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>House No / Flat No:</label>
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apartment / Area:</label>
          <input
            type="text"
            name="apartmentArea"
            value={formData.apartmentArea}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>

    </>
  );
};

export default RequestForTrial;
