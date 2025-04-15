import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaSearch, FaCommentDots, FaUser, FaShoppingCart, FaUserCog } from 'react-icons/fa';
import logo from '../Images/logo.png';
import { artists } from './artistsData'; 
import { artworks } from './artworksData'; 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const user = null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      const matchingArtists = artists.filter(artist => 
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        artist.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const matchingArtworks = artworks.filter(artwork => 
        artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artwork.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      navigate(`/search?query=${searchQuery}&artists=${JSON.stringify(matchingArtists)}&artworks=${JSON.stringify(matchingArtworks)}`);
    }
  };

  return (
    <header>
      <div style={styles.logoSection}>
        <Link to="/">
          <img src={logo} alt="Rang Shala Logo" style={styles.logo} />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={styles.rangshalaText}>Rang Shala</h1>
        </Link>
      </div>
      <div style={styles.navIconsContainer}>
        <div style={styles.iconRow}>
          <a href="https://www.instagram.com/rangshaa1a/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: '#e4405f' }} />
          </a>
          <a href="#"><FaFacebookF style={{ color: '#3b5998' }} /></a>
          <a href="#"><FaTwitter style={{ color: '#1da1f2' }} /></a>
        </div>
        <nav style={styles.navBar}>
          <ul style={styles.menu}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/artwork">Artwork</Link></li>
            <li><Link to="/artist">Artist</Link></li>
            <li><Link to="/bespoke">Bespoke Services</Link></li>
            <li><Link to="/join">Join Us</Link></li>
            <li><Link to="/consult">Curator Consult</Link></li>
          </ul>
        </nav>
        <div style={styles.iconRow}>
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Artworks or Artists..."
              style={styles.searchInput}
            />
            <button type="submit" style={styles.searchButton}>
              <FaSearch />
            </button>
          </form>
          <a href="mailto:someone@example.com?subject=Contact%20Us&body=Hello%2C%20I%20have%20a%20query.">
            <FaCommentDots style={{ color: 'black' }} />
          </a>
          {user ? (
            <Link to="/profile"><FaUser style={{ color: 'black' }} /></Link>
          ) : (
            <Link to="/login"><FaUser style={{ color: 'black' }} /></Link>
          )}
          <Link to="/cart"><FaShoppingCart style={{ color: 'black' }} /></Link>
          <Link to="/admin"><FaUserCog style={{ color: 'black' }} /></Link>
        </div>
      </div>
    </header>
  );
};

const styles = {
  logoSection: {
    textAlign: 'center',
    margin: '20px 0',
  },
  logo: {
    width: '150px',
    height: '150px',
  },
  rangshalaText: {
    fontSize: '28px',
    fontWeight: 600,
    color: '#333',
    marginTop: '10px',
    fontFamily: "'Georgia', serif",
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  navIconsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  iconRow: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  navBar: {
    textAlign: 'center',
    flexGrow: 1,
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: 0,
    padding: '15px 0',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  searchInput: {
    padding: '8px 15px',
    fontSize: '16px',
    border: '2px solid #4E4E61',
    borderRadius: '5px',
    width: '200px',
  },
  searchButton: {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    right: '5px',
    top: '0',
    padding: '8px',
    cursor: 'pointer',
  },
};

export default Header;
