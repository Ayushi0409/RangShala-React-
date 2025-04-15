import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTachometerAlt, FaPalette, FaUsers, FaBox, FaMoneyBillWave, FaEnvelope, FaPaintBrush, FaShoppingCart, FaList } from 'react-icons/fa';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [isArtsDropdownOpen, setIsArtsDropdownOpen] = useState(false);

  const dashboardData = {
    artworks: 25,
    customers: 150,
    categories: 5,
    orders: 10,
  };

  const artworkList = [
    { id: 1, name: 'Sunset Bliss', image: 'https://via.placeholder.com/50', price: 5000, artist: 'Ayushi', category: 'Acrylic' },
    { id: 2, name: 'Mandala Dream', image: 'https://via.placeholder.com/50', price: 3000, artist: 'Niyati', category: 'Mandala' },
  ];

  const handleLogout = () => {
    navigate('/admin');
  };

  const openArtworkModal = () => setIsArtworkModalOpen(true);
  const closeArtworkModal = () => setIsArtworkModalOpen(false);

  const toggleArtsDropdown = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    setIsArtsDropdownOpen(!isArtsDropdownOpen);
  };

  const handleLinkClick = (e, path) => {
    console.log(`Navigating to: ${path}`); // Debug click
    e.stopPropagation(); // Prevent dropdown toggle from closing on link click
    setIsArtsDropdownOpen(false); // Close dropdown after clicking a link
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Rang Shala</h2>
        <Link to="/admin-dashboard" className="active"><FaTachometerAlt /> Dashboard</Link>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={toggleArtsDropdown}>
            <FaPalette /> Arts
          </div>
          <div className={`dropdown-content ${isArtsDropdownOpen ? 'show' : ''}`}>
            <Link to="/acrylic-paintings" onClick={(e) => handleLinkClick(e, '/acrylic-paintings')}>Acrylic Painting</Link>
            <Link to="/admin/add-acrylic-painting" onClick={(e) => handleLinkClick(e, '/admin/add-acrylic-painting')}>Add Acrylic Painting</Link>
            <Link to="/oil-painting" onClick={(e) => handleLinkClick(e, '/oil-painting')}>Oil Painting</Link>
            <Link to="/admin/add-oil-painting" onClick={(e) => handleLinkClick(e, '/admin/add-oil-painting')}>Add Oil Painting</Link>
            <Link to="/mandala-art" onClick={(e) => handleLinkClick(e, '/mandala-art')}>Mandala Art</Link>
            <Link to="/admin/add-mandala-art" onClick={(e) => handleLinkClick(e, '/admin/add-mandala-art')}>Add Mandala Art</Link>
            <Link to="/anime" onClick={(e) => handleLinkClick(e, '/anime')}>Anime Drawings</Link>
            <Link to="/admin/add-anime-drawings" onClick={(e) => handleLinkClick(e, '/admin/add-anime-drawings')}>Add Anime Drawings</Link>
            <Link to="/drawings" onClick={(e) => handleLinkClick(e, '/drawings')}>Drawing</Link>
            <Link to="/admin/add-drawing" onClick={(e) => handleLinkClick(e, '/admin/add-drawing')}>Add Drawing</Link>
          </div>
        </div>
        <Link to="/admin/view-customers"><FaUsers /> View Customer</Link>
        <Link to="/admin/view-orders"><FaBox /> View Order</Link>
        <Link to="/admin/view-payments"><FaMoneyBillWave /> View Payments</Link>
        <Link to="/admin/view-enquiries"><FaEnvelope /> View Enquiries</Link>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <h1>Admin Dashboard</h1>
          <button className="user-btn" onClick={handleLogout}>AYUSHI BABARIYA</button>
        </div>

        <div className="dashboard-cards">
          <div className="card blue" onClick={openArtworkModal}>
            <FaPaintBrush className="card-icon" />
            <h2>{dashboardData.artworks}</h2>
            <p>Artworks</p>
          </div>
          <div className="card green">
            <FaUsers className="card-icon" />
            <h2>{dashboardData.customers}</h2>
            <p>Customers</p>
          </div>
          <div className="card orange">
            <FaList className="card-icon" />
            <h2>{dashboardData.categories}</h2>
            <p>Categories</p>
          </div>
          <div className="card red">
            <FaShoppingCart className="card-icon" />
            <h2>{dashboardData.orders}</h2>
            <p>Orders</p>
          </div>
        </div>
      </div>

      {isArtworkModalOpen && (
        <div className="modal" onClick={closeArtworkModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeArtworkModal}>×</span>
            <h2>All Artworks</h2>
            {artworkList.length === 0 ? (
              <p>No artworks available.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Artist</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {artworkList.map((artwork) => (
                    <tr key={artwork.id}>
                      <td>{artwork.name}</td>
                      <td><img src={artwork.image} alt={artwork.name} /></td>
                      <td>INR {artwork.price}</td>
                      <td>{artwork.artist}</td>
                      <td>{artwork.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      <footer>
        <p>© 2025 Rang Shala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;