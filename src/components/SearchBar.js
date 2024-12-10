import React from "react";
import "../styles/SearchBar.css";
import { FaSearch, FaMapMarkerAlt, FaIdCard } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-container">
        <FaSearch className="icon" />
        <input type="text" placeholder="Condition, procedure, specialty..." />
      </div>
      <div className="input-container">
        <FaMapMarkerAlt className="icon" />
        <input type="text" placeholder="City, state, or zipcode" />
      </div>
      <div className="input-container">
        <FaIdCard className="icon" />
        <input type="text" placeholder="Insurance carrier" />
      </div>
      <button className="find-now">
        <FaSearch className="find-icon" />
        Find now
      </button>
    </div>
  );
};

export default SearchBar;
