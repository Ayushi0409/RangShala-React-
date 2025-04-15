import React from 'react';
import anime1 from '../Images/anime1.jpg';
import anime2 from '../Images/anime2.jpg';
import anime3 from '../Images/anime3.jpg';
import anime4 from '../Images/anime4.jpg';
import anime5 from '../Images/anime5.jpg';
import anime6 from '../Images/anime6.jpg';
import anime7 from '../Images/anime7.jpg';
import anime8 from '../Images/anime8.jpg';
import anime9 from '../Images/anime9.jpg';

const Anime = () => {
  const artworks = [
    { name: 'Giyu Tomiyoka', artist: 'Niyati Agravat', price: 'INR 4500', image: anime1 },
    { name: 'Muichiro Tokito', artist: 'Niyati Agravat', price: 'INR 1000', image: anime2 },
    { name: 'Ayanokoji', artist: 'Niyati Agravat', price: 'INR 700', image: anime3 },
    { name: 'Mikey Sano', artist: 'Niyati Agravat', price: 'INR 500', image: anime4 },
    { name: 'Minato Namikaze', artist: 'Niyati Agravat', price: 'INR 700', image: anime5 },
    { name: 'Itachi Uchiha', artist: 'Niyati Agravat', price: 'INR 1000', image: anime6 },
    { name: 'Miku', artist: 'Niyati Agravat', price: 'INR 700', image: anime7 },
    { name: 'Killua', artist: 'Niyati Agravat', price: 'INR 300', image: anime8 },
    { name: 'Mikey Sano', artist: 'Niyati Agravat', price: 'INR 700', image: anime9 },
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
        <h2>Anime</h2>
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

export default Anime;