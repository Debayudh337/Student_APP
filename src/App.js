import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpTeacher from './Pages/SignUpTeacher';
import SignInTeacher from './Pages/SignInTeacher';
import DiscoverTeacher from './Pages/DiscoverTeacher';
import TeacherProfilePage from './Pages/TeacherProfilePage';
import Test from './Pages/Test';
import './App.css';

const App = () => {
  return (    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInTeacher />} />
          <Route path="/signup-teacher" element={<SignUpTeacher />} />
          <Route path="/discover-teacher" element={<DiscoverTeacher />} />
          <Route path="/test" element={<Test />} />
          <Route path="/teacher/:id" element={<TeacherProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
