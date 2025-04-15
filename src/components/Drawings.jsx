import React from 'react';
import shreenathji from '../Images/shreenathjii.jpg';
import tiger from '../Images/tiger.jpg';
import bappa from '../Images/bappa.jpg';
import wolf from '../Images/cat.jpg';
import buddha from '../Images/buddha.jpg';
import eye from '../Images/eye.jpg';
import ostrich from '../Images/bird.jpg';
import deer from '../Images/deer.jpg';
import ink from '../Images/ink.jpg';
import nature from '../Images/naturee.jpg';
import ganpati from '../Images/Ganpati.jpg';
import cuteGirl from '../Images/girl.jpg';
import panihari from '../Images/Panihari.jpg';

const Drawings = () => {
  const artworks = [
    { name: 'Shree Nathji', artist: 'Ayushi Babariya', price: 'INR 500', image: shreenathji },
    { name: 'Tiger', artist: 'Niyati Agravat', price: 'INR 1000', image: tiger },
    { name: 'Ganpati Bappa', artist: 'Niyati Agravat', price: 'INR 700', image: bappa },
    { name: 'Wolf', artist: 'Niyati Agravat', price: 'INR 500', image: wolf },
    { name: 'Buddha', artist: 'Ayushi Babariya', price: 'INR 700', image: buddha },
    { name: 'Eye', artist: 'Ayushi Babariya', price: 'INR 1000', image: eye },
    { name: 'Ostrich', artist: 'Niyati Agravat', price: 'INR 700', image: ostrich },
    { name: 'Deer', artist: 'Niyati Agravat', price: 'INR 300', image: deer },
    { name: 'INK', artist: 'Niyati Agravat', price: 'INR 700', image: ink },
    { name: 'Nature', artist: 'Niyati Agravat', price: 'INR 700', image: nature },
    { name: 'Ganpati', artist: 'Ayushi Babariya', price: 'INR 700', image: ganpati },
    { name: 'Cute Girl', artist: 'Niyati Agravat', price: 'INR 700', image: cuteGirl },
    { name: 'Panihari', artist: 'Ayushi Babariya', price: 'INR 700', image: panihari },
  ];

  const addToCart = (name, price) => {
    const itemData = { Name: name, Price: parseFloat(price.replace('INR ', '')) };
    fetch('/Cart/AddToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(itemData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/Cart/Index';
        } else {
          if (data.message.includes('log in')) {
            window.location.href = '/Account/Login';
          } else {
            alert(data.message);
          }
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        alert('An error occurred while adding the item to the cart.');
      });
  };

  return (
    <div className="acrylic-painting-section">
      <div className="section-header">
        <div className="line"></div>
        <h2>Drawings</h2>
      </div>
      <div className="artwork-container">
        {artworks.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <img src={artwork.image} alt={artwork.name} />
            <div className="overlay">
              <button className="view-btn">View</button>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(artwork.name, artwork.price)}
              >
                Add to Cart
              </button>
            </div>
            <h3>{artwork.name}</h3>
            <p className="artist-name">{artwork.artist}</p>
            <p>{artwork.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawings;