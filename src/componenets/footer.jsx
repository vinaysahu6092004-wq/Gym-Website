import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">🏋️‍♂️ FitZone</div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} FitZone Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
