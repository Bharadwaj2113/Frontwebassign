// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo-box"></div>
        <h1 className="logo-text">ProVital</h1>
      </div>

      {/* Vertical Divider */}
      <div className="vertical-divider"></div> 

      {/* Navigation Links */}
      <div className="nav-links">
        <div className="nav-item">List your practice</div>
        <div className="divider"></div>
        <div className="nav-item">For Employers</div>
        <div className="divider"></div>
        <div className="nav-item">Courses</div>
        <div className="divider"></div>
        <div className="nav-item">Books</div>
        <div className="divider"></div>
        <div className="nav-item">Speakers</div>
        <div className="divider"></div>
        <div className="nav-item">Doctors</div>
        <div className="divider"></div>

        {/* Login / Signup Dropdown */}
        <div className="nav-item dropdown-container" onClick={toggleDropdown}>
          <span>Login / Signup</span>
          <span className="arrow-down">▼</span>
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <span>Doctor</span>
                <a href="/doctor-login" className="dropdown-link">Login</a>
                <a href="/doctor-signup" className="dropdown-link">Sign up</a>
              </div>
              <div className="dropdown-item">
                <span>Patients</span>
                <a href="/patient-login" className="dropdown-link">Login</a>
                <a href="/patient-signup" className="dropdown-link">Sign up</a>
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  );
}

export default Navbar;