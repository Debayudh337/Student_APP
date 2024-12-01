import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Phone from "../Components/Phone";
import FullName from "../Components/FullName";
import { FullNameProvider } from "../Components/FullName_Context";
import "./SignUpTeacher.css";
import Password from "../Components/Password";
import { PasswordProvider } from "../Components/password_context";

const SignUpTeacher = () => {
  const [validPhone, setValidPhone] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPhone) {
      alert("Please enter a valid phone number.");
    } else if (!validPassword) {
      alert("Please enter a valid password.");
    } else {
      // alert("Sign up successful!");
      navigate("/discover-teacher");
    }
  };

  return (
    <div className="signup-container">
      <h2>Teacher Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FullNameProvider>
          <FullName />
        </FullNameProvider>
        <PasswordProvider>
          <Password setValidPassword={setValidPassword} />
        </PasswordProvider>
        <Phone setValidPhone={setValidPhone} />
        <div className="signup-submit">
          <button
            type="submit"
            disabled={!validPhone || !validPassword}>
            Sign Up
          </button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/">Sign In here</Link>
      </p>
    </div>
  );
};

export default SignUpTeacher;
