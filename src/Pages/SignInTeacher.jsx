import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Phone from '../Components/Phone';
import Password from '../Components/Password';
import './SignInTeacher.css';

const SignInTeacher = () => {
  const [validPhone, setValidPhone] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const navigate = useNavigate(); // To programmatically navigate

  // Handle form submission for sign-in
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPhone) {
      alert('Please enter a valid phone number.');
    } else if (!validPassword) {
      alert('Please enter a valid password.');
    } else {
      // Normally, here you would send login data to an API
      alert('Sign in successful!');
      navigate('/dashboard'); // Assuming you have a dashboard or some other route
    }
  };

  return (
    <div className="signin-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <Phone setValidPhone={setValidPhone} />
        <Password setValidPassword={setValidPassword} />
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
