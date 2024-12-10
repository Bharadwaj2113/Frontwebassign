import React from 'react';

// Import components
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import HowItWorks from './components/HowItWorks';
import CardCarousel from './components/CardCarousel';


const App = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Hero Text section */}
      <HeroText />

      {/* How It Works section */}
      <HowItWorks />

      {/* Card Carousel section */}
      <CardCarousel />

    </div>
  );
};

export default App;
