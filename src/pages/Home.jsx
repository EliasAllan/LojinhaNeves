import React, { useState } from 'react';
import './style/Home.css'
import Product from '../components/Product/Product';
// import Logo from ''


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
    <>
    <div className="app">
      <header className='header-container'>
      <h1>Titulo</h1>
      <img></img>
      </header>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} images={product.images} />
        ))}
      </div>
    </div>
    </>
  );
};

export default App;
