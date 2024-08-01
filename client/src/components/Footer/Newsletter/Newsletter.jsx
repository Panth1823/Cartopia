import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Let's Connect</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
