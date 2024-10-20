// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Phone from '../Components/Phone';
// import Password from '../Components/Password';
// import './SignInTeacher.css';

// const SignInTeacher = () => {
//   const [validPhone, setValidPhone] = useState(false);
//   const [validPassword, setValidPassword] = useState(false);
//   const navigate = useNavigate(); // To programmatically navigate

//   // Handle form submission for sign-in
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validPhone) {
//       alert('Please enter a valid phone number.');
//     } else if (!validPassword) {
//       alert('Please enter a valid password.');
//     } else {
//       // Normally, here you would send login data to an API
//       alert('Sign in successful!');
//       navigate('/dashboard'); // Assuming you have a dashboard or some other route
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Welcome Back</h2>
//       <form onSubmit={handleSubmit}>
//         <Phone setValidPhone={setValidPhone} />
//         <Password setValidPassword={setValidPassword} />
//         <div className="signin-submit">
//           <button type="submit" disabled={!validPhone || !validPassword}>
//             Sign In
//           </button>
//         </div>
//       </form>
//       <p className="signup-text">
//         Don't have an account? <Link to="/signup-teacher">Sign Up here</Link>
//       </p>
//     </div>
//   );
// };

// export default SignInTeacher;

import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import Phone from "../Components/Phone";
import Password from "../Components/Password";
import { Link } from "react-router-dom";  

import "./SignInTeacher.css";

const SignInTeacher = () => {
  const { signIn, loading, error } = useAuth();
  const [phone, setPhone] = useState("");  
  const [password, setPassword] = useState(""); 
  const [validPhone, setValidPhone] = useState(false);  
  const [validPassword, setValidPassword] = useState(false);  
  const [message, setMessage] = useState("");  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call signIn method and pass the phone and password state variables
    const result = await signIn({ phone, password });

    // Handle the response from signIn
    if (result.success) {
      setMessage(`Welcome, ${result.user.name}`);
    } else {
      setMessage("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        {/* Pass the state setters to update phone and password values */}
        <Phone setPhone={setPhone} setValidPhone={setValidPhone} />
        <Password setPassword={setPassword} setValidPassword={setValidPassword} />
        {error && <p className="error">{error}</p>}
        {message && <p>{message}</p>}
        <div className="signin-submit">
          {/* Disable button if phone or password is invalid */}
          <button type="submit" disabled={!validPhone || !validPassword || loading}>
            {loading ? "Signing In..." : "Sign In"}
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
