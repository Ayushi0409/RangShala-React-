import React, { useState } from "react";

const AddAcrylicPainting = () => {
  const [formData, setFormData] = useState({
    paintingName: "",
    paintingPrice: "",
    artistName: "",
    paintingImage: null,
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paintingImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.paintingImage) {
      setError("Please upload an image.");
      return;
    }
    setMessage("Artwork added successfully!");
    setError("");
  };

  return (
    <div className="add-acrylic-painting-container">
      <h2>Add New Acrylic Painting</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Painting Name</label>
          <input
            type="text"
            name="paintingName"
            value={formData.paintingName}
            onChange={handleChange}
            required
            placeholder="Enter painting name"
          />
        </div>
        <div className="form-group">
          <label>Price (INR)</label>
          <input
            type="number"
            name="paintingPrice"
            value={formData.paintingPrice}
            onChange={handleChange}
            required
            placeholder="Enter price in INR"
          />
        </div>
        <div className="form-group">
          <label>Artist Name</label>
          <input
            type="text"
            name="artistName"
            value={formData.artistName}
            onChange={handleChange}
            required
            placeholder="Enter artist name"
          />
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
          <small>Accepted formats: JPG, PNG, JPEG</small>
        </div>
        <div className="form-buttons">
          <button type="submit">Add Artwork</button>
          <button type="button" onClick={() => window.history.back()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddAcrylicPainting;