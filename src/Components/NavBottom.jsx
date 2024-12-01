import React from "react";
import "./NavBottom.css";
// import MyTutorLogo from '../Assets/MyTutorLogo.svg';
import HomeIcon from "../Assets/HomeIcon.svg";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

const NavBottom = () => {
  return (
    <nav className="bottom-navigation">
      {/* Left Placeholder for Alignment */}
      <div className="nav-left-placeholder"></div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button className="nav-btn" aria-label="Previous">
        <BiLeftArrowCircle className="arrow"/> 
        </button>
        <button className="nav-btn" aria-label="Page 1">
          1
        </button>
        <button className="nav-btn" aria-label="Page 2">
          2
        </button>
        <button className="nav-btn" aria-label="Page 3">
          3
        </button>
        <button className="nav-btn" aria-label="Next">
          <BiRightArrowCircle className="arrow"/>
        </button>
      </div>

      {/* MyTutor Logo */}
      <div className="nav-logo">
        <img src={HomeIcon} alt="MyTutor Logo" className="logo-image" />
      </div>
    </nav>
  );
};

export default NavBottom;
