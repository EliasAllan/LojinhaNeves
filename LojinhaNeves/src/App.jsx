import React, { useState } from 'react';
import '../src/pages/style/App.css'
// Carousel component
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

// Product component
const Product = ({ name, price, images }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <Carousel images={images} />
    </div>
  );
};

// Main App component
const App = () => {
  const products = [
    {
      name: 'Cookies',
      price: 50,
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: ['/images/image4.jpg', '/images/image5.jpg', '/images/image6.jpg'],
    },
  ];

  return (
    <div className="app">
      <h1>Lojinha Neves</h1>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} images={product.images} />
        ))}
      </div>
    </div>
  );
};

export default App;
