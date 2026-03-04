import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <a href="#hero">🏋️‍♂️ FitZone</a>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#hero">Home</a>
          <a href="#plans">Plans</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div 
          className={`nav-toggle ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


