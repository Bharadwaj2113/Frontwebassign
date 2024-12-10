import React from 'react';
import '../styles/ImageColumns.css';

// Import images
import SweetLife from '../assets/Sweet Life Food Prep.jpeg';
import WomanPerformingYoga from '../assets/Women performing yoga (1).jpeg';
import WomanDoingYoga from '../assets/Women doing yoga pose.jpeg';
import WomanBlueCrewNeck from '../assets/Women Blue Crew Neck.jpeg';

function ImageColumns() {
  console.log("ImageColumns component rendered!");

  return (
    <div className="image-container">
      {/* Column 1 */}
      <div className="image-column column-1">
        <div className="image">
          <img src={WomanDoingYoga} alt="Woman Doing Yoga" />
        </div>
        <div className="image">
          <img src={SweetLife} alt="Sweet Life Food Prep" />
        </div>
      </div>

      {/* Column 2 */}
      <div className="image-column column-2">
        <div className="image">
          <img src={WomanBlueCrewNeck} alt="Woman in Blue Crew Neck" />
        </div>
        <div className="image">
          <img src={WomanPerformingYoga} alt="Woman Performing Yoga" />
        </div>
      </div>
    </div>
  );
}

export default ImageColumns;
