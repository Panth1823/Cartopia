import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Let's Connect</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
