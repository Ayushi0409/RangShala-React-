import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ArtworkDetail = () => {
  const location = useLocation();
  const { title, artist, price, image, size } = location.state || {};

  return (
    <div className="artwork-detail-container">
      <img className="artwork-image" src={image} alt="Artwork Image" />
      <div className="artwork-info">
        <h1>{title}</h1>
        <h3>{artist}</h3>
        <p className="size-tag">Size: {size}</p>
        <p className="price">INR {price}</p>
        <Link to="/" className="back-button">
          Back to Gallery
        </Link>
      </div>
    </div>
  );
};


export default ArtworkDetail;
