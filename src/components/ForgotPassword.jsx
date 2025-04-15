import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Fixed import path

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password request for:', email);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-container">
        <h3>Reset Password</h3>
        <p>Enter your email to reset your password</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
        <p className="login-link">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;