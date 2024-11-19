import './Newpage.css'
import React from "react";

const Newpage = () => {
  return (
    <div className="container">
      <div className="sign-up-card">
        <img
          className="logo"
          src="https://upload.wikim
          edia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
        />
        <form className="form">
          <input type="text" placeholder="Mobile number or email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="sign-up-btn">Sign Up</button>
        </form>
        <div className="footer">
          <span>Already have an account? </span>
          <button >Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Newpage;
