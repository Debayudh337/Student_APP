import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpTeacher from './Pages/SignUpTeacher';
import SignInTeacher from './Pages/SignInTeacher';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInTeacher />} />
          <Route path="/signup-teacher" element={<SignUpTeacher />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;



// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./Context/authContext";
// import SignInTeacher from "./Pages/SignInTeacher";
// import SignUpTeacher from "./Pages/SignUpTeacher";
// // import Dashboard from "./Pages/Dashboard"; // An example of a protected route

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<SignInTeacher />} />
//           <Route path="/signup-teacher" element={<SignUpTeacher />} />
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

