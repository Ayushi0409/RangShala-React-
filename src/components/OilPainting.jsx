import React from 'react';
import oil1 from '../Images/oil1.jpg';
import oil2 from '../Images/oil2.jpg';
import oil3 from '../Images/oil3.jpg';
import oil4 from '../Images/oil4.jpg';
import oil5 from '../Images/oil5.jpg';
import oil6 from '../Images/oil6.jpg';
import oil7 from '../Images/oil7.jpg';
import oil8 from '../Images/oil8.jpg';
import oil9 from '../Images/oil9.jpg';
import oil10 from '../Images/oil10.jpg';


const OilPainting = () => {
  const artworks = [
    { name: 'Ganpati Bappa', artist: 'Ayushi Babariya', price: 'INR 4500', image: oil1 },
    { name: 'Window Painting', artist: 'Ayushi Babariya', price: 'INR 1000', image: oil2 },
    { name: 'Lady', artist: 'Ayushi Babariya', price: 'INR 700', image: oil3 },
    { name: 'Lazy Girl', artist: 'Ayushi Babariya', price: 'INR 1', image: oil4 },
    { name: 'Nature', artist: 'Niyati Agravat', price: 'INR 700', image: oil5 },
    { name: 'Fruits', artist: 'Ayushi Babariya', price: 'INR 1000', image: oil6 },
    { name: 'Rose', artist: 'Niyati Agravat', price: 'INR 700', image: oil7 },
    { name: 'Love Birds', artist: 'Ayushi Babariya', price: 'INR 300', image: oil8 },
    { name: 'Bird', artist: 'Niyati Agravat', price: 'INR 700', image: oil9 },
    { name: 'House', artist: 'Ayushi Babariya', price: 'INR 300', image: oil10 },
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
        <h2>Oil Painting</h2>
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

export default OilPainting;
