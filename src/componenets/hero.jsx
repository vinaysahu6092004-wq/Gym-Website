import React from "react";
import heroImage from "../assets/gym-back.webp";
import "./hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Build Your <span>Ultimate Physique</span>
        </h1>

        <p>
          Premium training programs, expert coaches, and world-class equipment.
          Start your transformation journey with FitZone today.
        </p>

        <div className="hero-buttons">
          <a href="#plans">
            <button className="join-btn">Start Training</button>
          </a>

          <a href="#about">
            <button className="learn-btn">Explore Programs</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

