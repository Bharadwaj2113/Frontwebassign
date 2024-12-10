import React, { useState } from "react";
import "../styles/HowItWorks.css";

const pillars = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substance abuse",
];

const HowItWorks = () => {
  const [activePillar, setActivePillar] = useState(0);

  const handlePrev = () => {
    setActivePillar((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePillar((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="how-it-works">
      <div className="gradient-line"></div> {/* Gradient line above header */}
      <div className="header">
        <h2>
          HOW IT WORKS
          <br />
          <span>
            Lifestyle as medicine: <strong>The six pillars</strong>
          </span>
        </h2>
        <div className="arrows">
          <button className="arrow-btn" onClick={handlePrev}>
            ←
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
      <div className="tabs">
        {pillars.map((pillar, index) => (
          <button
            key={index}
            className={`tab ${index === activePillar ? "active" : ""}`}
            onClick={() => setActivePillar(index)}
          >
            {pillar}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
