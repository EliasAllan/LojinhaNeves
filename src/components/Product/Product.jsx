import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';

const Product = ({ name, price, images }) => {
    return (
      <div className="product">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <Carousel images={images} />
      </div>
    );
  };
  
export default Product