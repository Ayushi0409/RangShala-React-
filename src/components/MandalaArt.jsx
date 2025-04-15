import React from 'react';
import mandala1 from '../Images/mandala1.jpg';
import mandala2 from '../Images/mandala2.jpg';
import mandala3 from '../Images/mandala3.jpg';
import mandala4 from '../Images/mandala4.jpg';
import mandala5 from '../Images/mandala5.jpg';
import mandala6 from '../Images/mandala6.jpg';
import mandala7 from '../Images/mandala7.jpg';
import mandala8 from '../Images/mandala8.jpg';
import mandala9 from '../Images/mandala9.jpg';

const MandalaArt = () => {
  const artworks = [
    { name: 'Mandala Bhat', artist: 'Ayushi Babariya', price: 'INR 200', image: mandala1 },
    { name: 'Wall Decor', artist: 'Ayushi Babariya', price: 'INR 0', image: mandala2 },
    { name: 'Shiv', artist: 'Ayushi Babariya', price: 'INR 700', image: mandala3 },
    { name: 'Eye', artist: 'Ayushi Babariya', price: 'INR 500', image: mandala4 },
    { name: 'Beautiful Design', artist: 'Ayushi Babariya', price: 'INR 100', image: mandala5 },
    { name: 'TajMahal', artist: 'Ayushi Babariya', price: 'INR 1000', image: mandala6 },
    { name: 'Mandala Bhat', artist: 'Ayushi Babariya', price: 'INR 700', image: mandala7 },
    { name: 'Owl', artist: 'Ayushi Babariya', price: 'INR 300', image: mandala8 },
    { name: 'Hanuman Dada', artist: 'Ayushi Babariya', price: 'INR 700', image: mandala9 },
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
        <h2>Mandala Art</h2>
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

export default MandalaArt;