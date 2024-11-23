// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// import Phone from "../Components/Phone";
// import Password from "../Components/Password";
// import FullName from "../Components/FullName";

// import "./SignUpTeacher.css";

// const SignUpTeacher = () => {
//   // Hooks for validation
//   const [validPhone, setValidPhone] = useState(false);
//   const [validPassword, setValidPassword] = useState(false);
//   const [validFullName, setValidFullname] = useState(false);

//   // Handle form submission 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validPhone) {
//       alert("Please enter a valid phone number.");
//     } else if (!validPassword) {
//       alert("Please enter a valid password.");
//     } else if (!validFullName) {
//       alert("Please enter valid full name");
//     } else {
//       alert("Sign up successful!");
//     }
//   };

//   return (
//     <>
//       <div className="signup-container">
//         <h2>Teacher Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <FullName setValidName={setValidFullname} />
//           <Phone setValidPhone={setValidPhone} />
//           <Password setValidPassword={setValidPassword} />

//           <div className="signup-submit">
//             <button type="submit" disabled={!validPhone || !validPassword}>
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <p>Already have an account? <Link to="/">Sign In here</Link></p>
        
//       </div>
//     </>
//   );
// };

// export default SignUpTeacher;




// // import React, { useState } from "react";
// // import { Link } from 'react-router-dom';

// // import Phone from "../Components/Phone";

// // import FullName from "../Components/full_namecomponents";
// // import { FullNameProvider } from "../Components/FullName_Context";
// // import "./SignUpTeacher.css";
// // import Password from "../Components/Password";
// // import { PasswordProvider } from "../Components/password_context";

// // const SignUpTeacher = () => {
// // <<<<<<< HEAD
// // =======
// //   //Hooks for validation
// // >>>>>>> b3f26bd211187b819c0e4a63c05693893d0003af
// //   const [validPhone, setValidPhone] = useState(false);
// //   const [validPassword, setValidPassword] = useState(false);
// //   const [validFullName, setValidFullname] = useState(false);
  
// //   const [phoneError, setPhoneError] = useState("");
// //   const [passwordError, setPasswordError] = useState("");
// //   const [nameError, setNameError] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Reset errors
// //     setPhoneError("");
// //     setPasswordError("");
// //     setNameError("");

// //     let valid = true;

// //     if (!validFullName) {
// //       setNameError("Please enter a valid full name.");
// //       valid = false;
// //     }
// //     if (!validPhone) {
// //       setPhoneError("Please enter a valid phone number.");
// //       valid = false;
// //     }
// //     if (!validPassword) {
// //       setPasswordError("Please enter a valid password.");
// //       valid = false;
// //     }

// //     if (valid) {
// //       alert("Sign up successful!");
// //       // Here you can make an API call to submit the form
// //     }
// //   };

// //   return (
// // <<<<<<< HEAD
// //     <div className="signup-container">
// //       <h2>Teacher Sign Up</h2>
// //       <form onSubmit={handleSubmit}>
// //         <FullName setValidName={setValidFullname} />
// //         {nameError && <p className="error-message" style={{ color: 'red' }}>{nameError}</p>}

// // =======
// //     <>
// //       <div className="signup-container">
// //         <h2>Teacher Sign Up</h2>
// //         <form onSubmit={handleSubmit}>
       
// //           <FullNameProvider>
// //           <FullName/>
// //           </FullNameProvider>
// //           {/* <PasswordProvider>
// //             <Password/>
// //           </PasswordProvider> */}


          
// //           {/* <Phone setValidPhone={setValidPhone} />
// //           <Password setValidPassword={setValidPassword} />

// //           <div className="signup-submit">
// //             <button type="submit" disabled={!validPhone || !validPassword}>
// //               Sign Up
// //             </button>
// //           </div> */}
// //         </form>
// //         <p>Already have an account? <Link to="/">Sign In here</Link></p>
// // >>>>>>> b3f26bd211187b819c0e4a63c05693893d0003af
        
// //         <Phone setValidPhone={setValidPhone} />
// //         {phoneError && <p className="error-message"  style={{ color: 'red' }}>{phoneError}</p>}
        
// //         <Password setValidPassword={setValidPassword} />
// //         {passwordError && <p className="error-message" style={{ color: 'red' }}>{passwordError}</p>}
        
// //         <div className="signup-submit">
// //           {/* <button type="submit" disabled={!validPhone || !validPassword || !validFullName}> */}
// //           <button type="submit">
// //             Sign Up
// //           </button>
// //         </div>
// //       </form>
// //       <p>Already have an account? <Link to="/">Sign In here</Link></p>
// //     </div>
// //   );
// // };

// // export default SignUpTeacher;


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