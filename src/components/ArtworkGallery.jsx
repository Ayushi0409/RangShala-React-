import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shreenathji from '../Images/Shreenathji.jpg';
import gouachePainting from '../Images/gouachepainting.jpg';
import ganpatiBappa from '../Images/Ganpatibappa.jpg';
import housePainting from '../Images/HousePainting.jpg';
import sunrisePainting from '../Images/SunrisePainting.jpg';
import rainyDay from '../Images/RainyDay.jpg';
import acraylicPainting from '../Images/Acraylic Painting.jpeg';
import mandala1 from '../Images/mandala1.jpg';
import mandala2 from '../Images/mandala2.jpg';
import mandala3 from '../Images/mandala3.jpg';
import mandala4 from '../Images/mandala4.jpg';
import mandala5 from '../Images/mandala5.jpg';
import mandala6 from '../Images/mandala6.jpg';
import mandala7 from '../Images/mandala7.jpg';
import mandala8 from '../Images/mandala8.jpg';
import mandala9 from '../Images/mandala9.jpg';
import anime1 from '../Images/anime1.jpg';
import anime2 from '../Images/anime2.jpg';
import anime3 from '../Images/anime3.jpg';
import anime4 from '../Images/anime4.jpg';
import anime5 from '../Images/anime5.jpg';
import anime6 from '../Images/anime6.jpg';
import anime7 from '../Images/anime7.jpg';
import anime8 from '../Images/anime8.jpg';
import anime9 from '../Images/anime9.jpg';
import shreenathjii from '../Images/shreenathjii.jpg';
import tiger from '../Images/tiger.jpg';
import bappa from '../Images/bappa.jpg';
import cat from '../Images/cat.jpg';
import buddha from '../Images/buddha.jpg';
import eye from '../Images/eye.jpg';
import bird from '../Images/bird.jpg';
import deer from '../Images/deer.jpg';
import ink from '../Images/ink.jpg';
import naturee from '../Images/naturee.jpg';
import ganpati from '../Images/Ganpati.jpg';
import girl from '../Images/girl.jpg';
import panihari from '../Images/Panihari.jpg';
import owl from '../Images/owl.jpg';
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


const ArtworkGallery = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const artworks = [
    // Acrylic Paintings
    { title: 'Shree Nathji', image: shreenathji, artist: 'Ayushi Babariya', price: 4500 },
    { title: 'Gouache Painting', image: gouachePainting, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Ganpati Bappa', image: ganpatiBappa, artist: 'Niyati Agravat', price: 700 },
    { title: 'House Painting', image: housePainting, artist: 'Niyati Agravat', price: 700 },
    { title: 'Sunrise Painting', image: sunrisePainting, artist: 'Niyati Agravat', price: 700 },
    { title: 'Rainy Day', image: rainyDay, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Acraylic', image: acraylicPainting, artist: 'Niyati Agravat', price: 700 },
    // Mandala Art
    { title: 'Mandala Bhat', image: mandala1, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Wall Decor', image: mandala2, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Shiv', image: mandala3, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Eye', image: mandala4, artist: 'Ayushi Babariya', price: 500 },
    { title: 'Beautiful Design', image: mandala5, artist: 'Ayushi Babariya', price: 100 },
    { title: 'TajMahal', image: mandala6, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Mandala Bhat', image: mandala7, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Owl', image: mandala8, artist: 'Ayushi Babariya', price: 300 },
    { title: 'Hanuman Dada', image: mandala9, artist: 'Ayushi Babariya', price: 700 },
    // Anime
    { title: 'Giyu Tomiyoka', image: anime1, artist: 'Niyati Agravat', price: 4500 },
    { title: 'Muichiro Tokito', image: anime2, artist: 'Niyati Agravat', price: 1000 },
    { title: 'Ayanokoji', image: anime3, artist: 'Niyati Agravat', price: 700 },
    { title: 'Mikey Sano', image: anime4, artist: 'Niyati Agravat', price: 500 },
    { title: 'Minato Namikaze', image: anime5, artist: 'Niyati Agravat', price: 700 },
    { title: 'Itachi Uchiha', image: anime6, artist: 'Niyati Agravat', price: 1000 },
    { title: 'Miku', image: anime7, artist: 'Niyati Agravat', price: 700 },
    { title: 'Killua', image: anime8, artist: 'Niyati Agravat', price: 300 },
    { title: 'Mikey Sano', image: anime9, artist: 'Niyati Agravat', price: 700 },
    // Drawings
    { title: 'Shree Nathji', image: shreenathjii, artist: 'Ayushi Babariya', price: 500 },
    { title: 'Tiger', image: tiger, artist: 'Niyati Agravat', price: 1000 },
    { title: 'Ganpati Bappa', image: bappa, artist: 'Niyati Agravat', price: 700 },
    { title: 'Wolf', image: cat, artist: 'Niyati Agravat', price: 500 },
    { title: 'Buddha', image: buddha, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Eye', image: eye, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Ostrich', image: bird, artist: 'Niyati Agravat', price: 700 },
    { title: 'Deer', image: deer, artist: 'Niyati Agravat', price: 300 },
    { title: 'INK', image: ink, artist: 'Niyati Agravat', price: 700 },
    { title: 'Nature', image: naturee, artist: 'Niyati Agravat', price: 700 },
    { title: 'Ganpati', image: ganpati, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Cute Girl', image: girl, artist: 'Niyati Agravat', price: 700 },
    { title: 'Panihari', image: panihari, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Owl', image: owl, artist: 'Ayushi Babariya', price: 1000 },
    // Oil Paintings
    { title: 'Ganpati Bappa', image: oil1, artist: 'Ayushi Babariya', price: 4500 },
    { title: 'Window Painting', image: oil2, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Lady', image: oil3, artist: 'Ayushi Babariya', price: 700 },
    { title: 'Lazy Girl', image: oil4, artist: 'Ayushi Babariya', price: 1 },
    { title: 'Nature', image: oil5, artist: 'Niyati Agravat', price: 700 },
    { title: 'Fruits', image: oil6, artist: 'Ayushi Babariya', price: 1000 },
    { title: 'Rose', image: oil7, artist: 'Niyati Agravat', price: 700 },
    { title: 'Love Birds', image: oil8, artist: 'Ayushi Babariya', price: 300 },
    { title: 'Bird', image: oil9, artist: 'Niyati Agravat', price: 700 },
    { title: 'House', image: oil10, artist: 'Ayushi Babariya', price: 300 },
  ];

  const handleAddToCart = (name, price) => {
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.setItem('pendingCartItem', JSON.stringify({ name, price }));
      navigate('/login');
      return;
    }

    fetch('/Cart/AddToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate('/cart');
        } else {
          alert(data.message || 'Failed to add to cart.');
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
        alert('An error occurred while adding the item to the cart.');
      });
  };

  // Pagination logic
  const totalPages = Math.ceil(artworks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArtworks = artworks.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="category-section">
      <div className="section-header">
        <div className="line"></div>
        <h2>Artwork Gallery</h2>
      </div>
      <div className="artwork-container">
        {currentArtworks.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <div className="artwork-frame">
              <img src={artwork.image} alt={artwork.title} className="artwork-image" />
              <div className="overlay">
                <button className="view-btn">View</button>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(artwork.title, artwork.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <h3>{artwork.title}</h3>
            <p className="artist-name">{artwork.artist}</p>
            <p>INR {artwork.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArtworkGallery;
