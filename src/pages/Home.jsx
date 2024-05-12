import React, { useState } from 'react';
import './style/Home.css'
import Product from '../components/Product/Product';
import logo from '../../images/Logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../components/Footer/Footer.css'
import image1 from'../../images/image1.jpg'
import image2 from'../../images/image2.jpg'
import image3 from'../../images/image3.jpg'
import image4 from'../../images/image4.jpg'
import image5 from'../../images/image5.jpg'
import image6 from'../../images/image6.jpg'
import image7 from'../../images/image7.jpg'



// Main App component
const App = () => {
  const products = [
    {
      name: 'Cookies',
      price: 50,
      images: [image1, image2, image3],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image1, image2, image3],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4, image5, image6],
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
    </section>
      </div>
      {/* <Link to="https://www.facebook.com/allan.elias.9406" href="true">
      <img
        className="footer-icon"
        src={instaLogo}
        alt="facebook-logo"
        width="40px"
        height="40px"
      />
      </Link> */}
    </div>
    </Router>
    </>
  );
};

export default App;
