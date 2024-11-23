import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavTop.css";
import HomeIcon from "../Assets/HomeIcon.svg";
import BackButton from "../Assets/BackButton.svg";
import SettingsIcon from "../Assets/SettingsIcon.svg";

const NavTop = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation-bar">
      {/* Back Button */}
      <button
        className="nav-button"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
      >
        <img src={BackButton} className="nav-icon" alt="Back Button" />
      </button>

      {/* Right Buttons */}
      <div className="nav-right-buttons">
        <button
          className="nav-button"
          onClick={() => navigate("/home")}
          aria-label="Home"
        >
          <img src={HomeIcon} className="nav-icon" alt="Home Icon" />
        </button>
        <button
          className="nav-button"
          onClick={() => navigate("/settings")}
          aria-label="Settings"
        >
          <img src={SettingsIcon} className="nav-icon" alt="Settings Icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavTop;
