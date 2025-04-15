import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mahekImage from '../Images/mahek.jpg';
import aaratiImage from '../Images/aarati.jpg';
import miraliImage from '../Images/mirali.jpg';

const Artist = () => {
  const [filter, setFilter] = useState('all');

  
  const artists = [
    {
      name: 'Mahek Babariya',
      role: 'Photographer',
      description: 'A self-taught photographer capturing emotions through her lens.',
      image: mahekImage,
      link: '/artist/mahek', // Placeholder link (can be updated later)
    },
    {
      name: 'Aarati Kumari',
      role: 'Painter',
      description: 'A contemporary artist known for her expressive brushwork.',
      image: aaratiImage,
      link: '/artist/aarati', // Placeholder link (can be updated later)
    },
    {
      name: 'Mirallia Jadeja',
      role: 'Photographer',
      description: 'A visionary photographer blending art and storytelling.',
      image: miraliImage,
      link: '/artist/mirallia', // Placeholder link (can be updated later)
    },
  ];

  const filteredArtists = filter === 'all' ? artists : artists.filter(artist => artist.role === filter);

  return (
    <div className="artist-page">
      <h1>Artists</h1>
      <div className="filter-section">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Photographer">Photographer</option>
          <option value="Painter">Painter</option>
        </select>
      </div>
      <div className="artist-list">
        {filteredArtists.map((artist, index) => (
          <div key={index} className="artist-card" data-role={artist.role}>
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <h3>{artist.name}</h3>
            <p className="role">{artist.role}</p>
            <p className="description">{artist.description}</p>
            <Link to={artist.link} className="view-more">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
