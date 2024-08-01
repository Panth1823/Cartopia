import React from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item"></div>
          <div className="c-item">
            <MdOutlineMail />
            <div className="text">9999999999</div>
          </div>
          <div className="c-item">
            <FaLinkedin />
            <div className="text">linkedin.com/in/panth1823 </div>
          </div>
          <div className="c-item">
            <FaGithub />
            <div className="text">github.com/Panth1823</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            Made with ☕ by <span>Panth Shah</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
