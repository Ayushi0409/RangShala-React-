import React, { useState } from 'react';
import amplifyImage from '../Images/Amplify.jpeg';
import protectImage from '../Images/Protect.jpeg';
import rewardImage from '../Images/Reward.jpeg';
import joinUsImage from '../Images/Joinus.png';

const JoinUs = () => {
  const whyItems = [
    {
      image: amplifyImage,
      title: 'Amplify',
      description: 'Artists who showcase their work with RangShala have access to a global platform of art enthusiasts and collectors.',
    },
    {
      image: protectImage,
      title: 'Protect',
      description: 'RangShala works with an in-house curator who will help artists value their work accurately.',
    },
    {
      image: rewardImage,
      title: 'Reward',
      description: 'Join a team of artists that believe in fair treatment. RangShala ensures artists get the compensation they deserve.',
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    address2: '',
    email: '',
    phone: '',
    occupation: '',
    artwork: null,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Why RangShala Section */}
      <div className="why-rangshala-section">
        <h1 className="section-title">Your art on a global platform</h1>
        <div className="decorative-line"></div>
        <div className="why-row">
          {whyItems.map((item, index) => (
            <div key={index} className="why-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="join-us-container">
        <h1 className="section-title">Join Us</h1>
        <div className="decorative-line"></div>
        <p className="join-us-description">
          The RangShala  welcomes artists to join us. Upload your artwork, and our team will evaluate it.
        </p>
        <div className="join-us-section">
          <div className="join-us-form">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address2"
                placeholder="Address Line 2"
                value={formData.address2}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile No"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="occupation"
                placeholder="Primary Occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              <label htmlFor="artwork">Upload Artwork</label>
              <input
                type="file"
                id="artwork"
                name="artwork"
                accept="image/*"
                onChange={handleChange}
                required
              />
              <div className="terms-container">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                </label>
              </div>
              <button type="submit">Apply</button>
            </form>
          </div>
          <div className="join-us-image">
            <img src={joinUsImage} alt="Artwork Preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;