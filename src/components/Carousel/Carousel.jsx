import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="carousel">
        <button onClick={prevSlide}>Prev</button>
        <img className="pic" src={images[currentIndex]} alt="product" />
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };
  
export default Carousel