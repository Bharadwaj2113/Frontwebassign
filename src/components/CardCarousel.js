import React, { useRef } from 'react';
import '../styles/CardCarousel.css'; // Ensure the correct path to the CSS file

// Import images
import Image1 from '../assets/Women White Shirt Chopping Board.jpeg';
import Image2 from '../assets/Women Black Tank Top.jpeg';
import Image3 from '../assets/Sleep Man.jpeg';
import Image4 from '../assets/Meditation Women.jpeg';
import Image5 from '../assets/Elderly Men Serving Plates.jpeg';
import Image6 from '../assets/Men Waving Hand.jpeg';

// Define heart SVG as a reusable component
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#4caf50"
    className="heart-icon"
    width="20"
    height="20"
    style={{ marginRight: '6px' }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const cards = [
  {
    id: 1,
    title: 'Nutrition',
    description:
      'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: Image1,
    value: '121/80 mmHg',
  },
  {
    id: 2,
    title: 'Physical activity',
    description:
      'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: Image2,
    value: '32 minutes',
  },
  {
    id: 3,
    title: 'Restorative sleep',
    description:
      'Consistent, quality sleep is essential for cognitive health and emotional well-being.',
    image: Image3,
    value: '8 hours',
  },
  {
    id: 4,
    title: 'Stress management',
    description:
      'Reducing stress can improve quality of life and enhance physical health.',
    image: Image4,
    value: '',
  },
  {
    id: 5,
    title: 'Social connection',
    description: 'Strong social connections contribute to a healthier, longer life.',
    image: Image5,
    value: '',
  },
  {
    id: 6,
    title: 'Substance abuse',
    description: 'Avoiding harmful substances is key to a healthy lifestyle.',
    image: Image6,
    value: '',
  },
];

const CardCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust the scroll distance as needed
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls">
        <button className="arrow left" onClick={() => scroll('left')}>
          &lt;
        </button>
        <button className="arrow right" onClick={() => scroll('right')}>
          &gt;
        </button>
      </div>
      <div className="carousel" ref={carouselRef}>
        {cards.map((card) => (
          <div key={card.id} className="carousel-card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              {card.value && (
                <div className="card-value">
                  <HeartIcon />
                  {card.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
