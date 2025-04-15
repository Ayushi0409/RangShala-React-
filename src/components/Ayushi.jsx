import React, { useEffect } from 'react';
import ayushiImage from '../Images/AyushiBabariya.jpeg';

const Ayushi = () => {
  useEffect(() => {
    const artistProfile = document.getElementById('artistProfile');
    if (artistProfile) {
      artistProfile.classList.add('loaded');
    }
  }, []);

  return (
    <div className="artist-profile" id="artistProfile">
      <div className="artist-image">
        <img src={ayushiImage} alt="Ayushi Babariya" />
      </div>
      <div className="artist-info">
        <h1>Ayushi Babariya</h1>
        <p>
          Ayushi's artistic journey is defined by her mastery of mandala art and intricate drawings. With a deep appreciation for symmetry and detail, she creates mesmerizing patterns that blend precision with creativity. Each piece reflects a sense of harmony, balance, and mindfulness.
        </p>
        <p>
          She draws inspiration from nature, culture, and spiritual motifs, infusing her work with depth and meaning. From elaborate black-and-white sketches to vibrant, intricate mandalas, her portfolio showcases a diverse range of artistic expression.
        </p>
        <p>
          <strong>Her Art:</strong> Ayushi believes in the meditative power of art, using mandala designs and detailed drawings to create visually stunning and thought-provoking pieces.
        </p>
      </div>
    </div>
  );
};

export default Ayushi;