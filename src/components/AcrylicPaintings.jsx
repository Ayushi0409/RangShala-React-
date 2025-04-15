import React from 'react';
import { db } from '../firebase'; // Adjust path as needed
import { collection, addDoc } from 'firebase/firestore';

import shreenathji from '../Images/Shreenathji.jpg';
import gouachePainting from '../Images/gouachepainting.jpg';
import ganpatiBappa from '../Images/Ganpatibappa.jpg';
import housePainting from '../Images/HousePainting.jpg';
import sunrisePainting from '../Images/SunrisePainting.jpg';
import rainyDay from '../Images/RainyDay.jpg';
import acraylic from '../Images/Acraylic Painting.jpeg';

const AcrylicPaintings = () => {
  const artworks = [
    { name: 'Shree Nathji', artist: 'Ayushi Babariya', price: 'INR 4500', image: shreenathji },
    { name: 'Gouache Painting', artist: 'Ayushi Babariya', price: 'INR 1000', image: gouachePainting },
    { name: 'Ganpati Bappa', artist: 'Niyati Agravat', price: 'INR 700', image: ganpatiBappa },
    { name: 'House Painting', artist: 'Niyati Agravat', price: 'INR 700', image: housePainting },
    { name: 'Sunrise Painting', artist: 'Niyati Agravat', price: 'INR 700', image: sunrisePainting },
    { name: 'Rainy Day', artist: 'Niyati Agravat', price: 'INR 700', image: rainyDay },
    { name: 'Acraylic', artist: 'Niyati Agravat', price: 'INR 700', image: acraylic },
  ];

  const addToCart = async (name, price, image) => {
    try {
      const numericPrice = parseFloat(price.replace('INR ', ''));
      const docRef = await addDoc(collection(db, 'cart'), {
        name,
        price: numericPrice,
        image,
        timestamp: new Date()
      });
      alert('Added to cart successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to add to cart. Try again.');
    }
  };
  

  return (
    <div className="acrylic-painting-section">
      <div className="section-header">
        <div className="line"></div>
        <h2>Acrylic Paintings</h2>
      </div>
      <div className="artwork-container">
        {artworks.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <img src={artwork.image} alt={artwork.name} />
            <div className="overlay">
              <button className="view-btn">View</button>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(artwork.name, artwork.price, artwork.image)}
              >
                Add Cart
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

export default AcrylicPaintings;
