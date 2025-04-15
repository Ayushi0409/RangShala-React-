import React from 'react';
import { Link } from 'react-router-dom';
import acrylicPainting from '../Images/Acraylic Painting.jpeg';
import drawings from '../Images/Drawings.jpeg';
import mandalaArt from '../Images/mandala art.jpg';
import anime from '../Images/animee.jpg';
import oilPainting from '../Images/oil Painting.jpeg';

const Artwork = () => {
  const artworks = [
    {
      paintingName: 'Acrylic Painting',
      image: acrylicPainting,
      link: '/acrylic-paintings',
    },
    {
      paintingName: 'Drawing',
      image: drawings,
      link: '/drawings',
    },
    {
      paintingName: 'Mandala Art',
      image: mandalaArt,
      link: '/mandala-art',
    },
    {
      paintingName: 'Anime',
      image: anime,
      link: '/anime',
    },
    {
      paintingName: 'Oil Painting',
      image: oilPainting,
      link: '/oil-painting',
    },
  ];

  return (
    <div className="artwork-section">
      <h1>Artwork Categories</h1>
      <div className="artwork-container">
        {artworks.map((artwork, index) => (
          <div key={index} className="artwork-card">
            <Link to={artwork.link}>
              <img src={artwork.image} alt={artwork.paintingName} />
              <h3>{artwork.paintingName}</h3>
              <p className="artist-name">{artwork.artistName}</p>
              <p>{artwork.price}</p>
            </Link>
          </div>
        ))}
        <div className="view-all-container">
          <Link to="/artwork-gallery" className="view-all-button">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artwork;