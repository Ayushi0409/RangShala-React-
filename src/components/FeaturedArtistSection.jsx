import React from 'react';
import { Link } from 'react-router-dom';
import niyatiImage from '../Images/NiyatiAgravat.jpeg';
import ayushiImage from '../Images/AyushiBabariya.jpeg';

const FeaturedArtistSection = () => {
  return (
    <div className="featured-artist-section">
      <div className="decorative-line"></div>
      <h1>Featured Artist</h1>
      <div className="artist-grid">
        <div className="artist-card">
          <img src={niyatiImage} alt="Niyati Agravat" className="artist-photo" />
          <h3>Niyati Agravat</h3>
          <Link to="/niyati" className="explore-button">Explore</Link>
        </div>
        <div className="artist-card">
          <img src={ayushiImage} alt="Ayushi Babariya" className="artist-photo" />
          <h3>Ayushi Babariya</h3>
          <Link to="/ayushi" className="explore-button">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistSection;