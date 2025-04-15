// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const requiredFields = ['country', 'address', 'city', 'state', 'pinCode', 'email', 'phone'];
    const missingField = requiredFields.find(field => !formData[field]);
    
    if (missingField) {
      setError(`Please fill in the ${missingField.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Checkout data:', formData);
    // For now, let's simulate a successful checkout
    navigate('/success'); // You'll need to create this route or adjust as needed
  };

  return (
    <div className="checkout-container">
      <h2>Billing Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pinCode">Pin Code</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h2>Contact Information</h2>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

export default Checkout;