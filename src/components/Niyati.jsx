import React, { useEffect } from 'react';
import niyatiImage from '../Images/NiyatiAgravat.jpeg';

const Niyati = () => {
  useEffect(() => {
    const artistProfile = document.getElementById('artistProfile');
    if (artistProfile) {
      artistProfile.classList.add('loaded');
    }
  }, []);

  return (
    <div className="artist-profile" id="artistProfile">
      <div className="artist-image">
        <img src={niyatiImage} alt="Niyati Agravat" />
      </div>
      <div className="artist-info">
        <h1>Niyati Agravat</h1>
        <p>
          Niyati's passion for art is deeply rooted in her love for anime and oil painting. With a keen eye for detail, she brings characters to life through rich textures and vibrant colors. Her work seamlessly blends traditional oil painting techniques with the expressive storytelling of anime.
        </p>
        <p>
          She draws inspiration from various art styles, infusing each piece with emotion and depth. Whether crafting dynamic action scenes or serene portraits, her paintings capture the essence of her subjects in a way that feels both nostalgic and innovative.
        </p>
        <p>
          <strong>Her Art:</strong> Niyati believes in pushing artistic boundaries, creating immersive anime-inspired oil paintings that evoke strong emotions and tell captivating stories.
        </p>
      </div>
    </div>
  );
};

export default Niyati;