import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import SignUpTeacher from './Pages/SignUpTeacher';
// import SignInTeacher from './Pages/SignInTeacher';


const App = () => {
  return (

    
     <Router>
       <div>
        <Routes>
    {/* //       <Route path="/" element={<SignInTeacher />} /> */}
          <Route path="/signup-teacher" element={<SignUpTeacher />} />
           {/* Assuming you have more routes for other parts of the app */}
         </Routes>
       </div>
     </Router>
  );
};

export default App; 