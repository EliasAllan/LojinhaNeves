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
import image8 from'../../images/image8.jpg'
import image9 from'../../images/image9.jpg'
import image10 from'../../images/image10.jpg'
import image11 from'../../images/image11.jpg'
import image12 from'../../images/image12.jpg'
import image13 from'../../images/image13.jpg'
import image14 from'../../images/image14.jpg'
import image15 from'../../images/image15.jpg'
import image16 from'../../images/image16.jpg'
import image17 from'../../images/image17.jpg'
import image18 from'../../images/image18.jpg'
import image19 from'../../images/image19.jpg'
import image20 from'../../images/image20.jpg'
import image21 from'../../images/image21.jpg'
import image22 from'../../images/image22.jpg'
import image23 from'../../images/image23.jpg'
import image24 from'../../images/image24.jpg'
import WhatsAppLink from '../components/WhatsAppComponen/WhatsappComponent.jsx'; // Import the WhatsAppLink component



// Main App component
const App = () => {
  const products = [
    {
      name: 'Cookies',
      price: 50,
      images: [image1],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image2],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image3],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image4],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image5],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image6],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image7],
    },
    {
      name: 'Biscoito',
      price: 60,
      images: [image8],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image9],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image10],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image11],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image12],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image13],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image14],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image15],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image16],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image17],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image18],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image19],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image20],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image21],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image22],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image23],
    },
    {
      name: 'Cookies',
      price: 50,
      images: [image24],
    },
  ];

  return (
    <>
    
   
    <div className="app">
      <header className='header-container'>
      <img id="store-logo" src={logo} alt="Logo" />
      </header>
      <section id="links">
      <WhatsAppLink phoneNumber="5544984646324" message="Mande mensagem nesse chat pra fazer um pedido !" />
      </section>
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
