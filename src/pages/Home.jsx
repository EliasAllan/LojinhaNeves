import React, { useState } from 'react';
import './style/Home.css'
import Product from '../components/Product/Product';
import logo from '../../public/images/Logo.png'
import instaLogo from "../../public/images/Instagram_Glyph_Gradient.png";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../components/Footer/Footer.css'



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
    <Router>
    <div className="app">
      <header className='header-container'>
      <img id="store-logo" src={logo} alt="Logo" />
      </header>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} images={product.images} />
        ))}
      <section id="footer-icons">
      <Link to="https://www.facebook.com/allan.elias.9406" href="true">
      <img
        className="footer-icon"
        src={instaLogo}
        alt="facebook-logo"
        width="40px"
        height="40px"
      />
      </Link>
    </section>
      </div>
    </div>
    </Router>
    </>
  );
};

export default App;
