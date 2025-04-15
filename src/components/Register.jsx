import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Register = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }
    console.log('Register submitted with:', {
      title,
      firstName,
      lastName,
      email,
      mobile,
      password,
    });
    // Placeholder for backend call
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h3>New to RangShala</h3>
        <p>Create your own account in a minute!</p>
        <form onSubmit={handleSubmit}>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="title"
                value="Mr"
                onChange={(e) => setTitle(e.target.value)}
              />
              Mr
            </label>
            <label>
              <input
                type="radio"
                name="title"
                value="Ms"
                onChange={(e) => setTitle(e.target.value)}
              />
              Ms
            </label>
            <label>
              <input
                type="radio"
                name="title"
                value="Mrs"
                onChange={(e) => setTitle(e.target.value)}
              />
              Mrs
            </label>
          </div>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            <label>
              Yes, I agree to the <a href="#">Terms & Conditions</a>.
            </label>
          </div>
          <button type="submit">Sign up & Continue</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;