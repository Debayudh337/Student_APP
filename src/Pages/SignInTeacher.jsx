import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Phone from "../Components/Phone";
import Password from "../Components/Password";
import "./SignInTeacher.css";

const SignInTeacher = () => {
  const [validPhone, setValidPhone] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials for demo purposes
  const credentials = [
    { phone: "+919876543210", password: "Password@123" },
    // { phone: "9876543210", password: "Myword@456" },
  ];

  // Handle form submission for sign-in
  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug to verify state values
    console.log("Phone entered:", phone);
    console.log("Password entered:", password);

    // Check if credentials match the hardcoded values
    const user = credentials.find(
      (cred) => cred.phone === phone.trim() && cred.password === password.trim()
    );

    if (!user) {
      alert("Invalid phone number or password.");
      return;
    }

    // Successful login
    // alert("Sign in successful!");
    navigate("/discover-teacher"); // Navigate to another route
  };

  return (
    <div className="signin-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        {/* Phone Component */}
        <Phone setValidPhone={setValidPhone} onChange={setPhone} />
        <Password setValidPassword={setValidPassword} onChange={setPassword} />

        <div className="signin-submit">
          <button type="submit" disabled={!validPhone || !validPassword}>
            Sign In
          </button>
        </div>
      </form>
      <p className="signup-text">
        Don't have an account? <Link to="/signup-teacher">Sign Up here</Link>
      </p>
    </div>
  );
};

export default SignInTeacher;
