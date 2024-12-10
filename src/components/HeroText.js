import React from "react";
import "../styles/HeroText.css";
import SearchBar from "./SearchBar"; // Import SearchBar
import ImageColumns from "./ImageColumns"; // Import ImageColumns

const HeroText = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          Book an appointment with <span className="gradient-text">lifestyle medicine</span> experts
        </h1>
        <p className="hero-subtitle">
          Optimize your lifestyle and reverse chronic diseases.
        </p>
      </div>
      <SearchBar /> {/* Add the SearchBar component */}
      <ImageColumns /> {/* Add the ImageColumns component */}
    </div>
  );
};

export default HeroText;
