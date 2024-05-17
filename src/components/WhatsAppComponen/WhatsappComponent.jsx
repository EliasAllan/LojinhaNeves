// src/components/WhatsAppLink/WhatsAppLink.js
import React from 'react';
import './WhatsappComponent.css'; // Add styles if needed

const WhatsAppLink = ({ phoneNumber, message }) => {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      Mande mensagem nesse chat pra fazer um pedido !
    </a>
  );
};

export default WhatsAppLink;