import React from "react";
import "./about.css";
import { FaDumbbell, FaHeartbeat, FaFireAlt, FaRunning } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2>About FitZone</h2>
        <p>
          We transform bodies and build confidence through scientifically
          designed training programs.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <FaDumbbell className="about-icon" />
          <h3>Strength Training</h3>
          <p>
            Build raw power and muscle with structured weight training programs
            guided by certified coaches.
          </p>
        </div>

        <div className="about-card">
          <FaFireAlt className="about-icon" />
          <h3>Fat Loss Program</h3>
          <p>
            High-intensity workouts combined with nutrition planning for
            effective and sustainable fat loss.
          </p>
        </div>

        <div className="about-card">
          <FaHeartbeat className="about-icon" />
          <h3>Cardio Fitness</h3>
          <p>
            Improve endurance and heart health with modern cardio equipment
            and guided routines.
          </p>
        </div>

        <div className="about-card">
          <FaRunning className="about-icon" />
          <h3>Functional Training</h3>
          <p>
            Enhance mobility, flexibility and athletic performance with
            functional workouts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;