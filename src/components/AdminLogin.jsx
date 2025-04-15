import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../Images/logo.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state
    setErrorMessage(null); // Clear previous errors

    // Simulate login logic with a slight delay (mimicking an API call)
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password123') {
        navigate('/admin-dashboard');
      } else {
        setErrorMessage('Invalid email or password');
      }
      setIsLoading(false);
    }, 500); // 500ms delay for realism
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <img src={logo} alt="Rang Shala Logo" className="logo" />
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              disabled={isLoading} // Disable input during loading
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              disabled={isLoading} // Disable input during loading
            />
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;