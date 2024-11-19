// src/SignIn.js
import React from 'react';
import './SignIn.css';

const SignIn = ({ togglePage }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", e.target.ayush.value);
    console.log("Password: ", e.target.passwordes.value);
    e.target.reset();  // Reset form after submission
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <img
          className="instagram-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
        />
        <form onSubmit={handleSubmit} className="sign-in-form">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="input-field"
            name='ayush'
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            name='passwordes'
            required
          />
          <button type="submit" className="submit-button">Sign In</button>  {/* Submit button for form */}
        </form>
        <div className="separator">
          <span className="separator-text">OR</span>
        </div>
        <button className="facebook-login">Log in with Facebook</button>
        <div className="sign-up-container">
          <span>Don't have an account? </span>
          <button className="sign-up-button" onClick={togglePage}>Sign up</button>  {/* Switch to Newpage */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
