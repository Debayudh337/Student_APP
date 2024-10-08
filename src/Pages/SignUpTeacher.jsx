import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Phone from "../Components/Phone";

import FullName from "../Components/full_namecomponents";
import { FullNameProvider } from "../Components/FullName_Context";
import "./SignUpTeacher.css";
import Password from "../Components/Password";
import { PasswordProvider } from "../Components/password_context";

const SignUpTeacher = () => {
  //Hooks for validation
  const [validPhone, setValidPhone] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validFullName, setValidFullname] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPhone) {
      alert("Please enter a valid phone number.");
    } else if (!validPassword) {
      alert("Please enter a valid password.");
    } else if (!validFullName) {
      alert("Please enter valid full name");
    } else {
      alert("Sign up successful!");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2>Teacher Sign Up</h2>
        <form onSubmit={handleSubmit}>
       
          <FullNameProvider>
          <FullName/>
          </FullNameProvider>
          {/* <PasswordProvider>
            <Password/>
          </PasswordProvider> */}


          
          {/* <Phone setValidPhone={setValidPhone} />
          <Password setValidPassword={setValidPassword} />

          <div className="signup-submit">
            <button type="submit" disabled={!validPhone || !validPassword}>
              Sign Up
            </button>
          </div> */}
        </form>
        <p>Already have an account? <Link to="/">Sign In here</Link></p>
        
      </div>
    </>
  );
};

export default SignUpTeacher;
