// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css'; // Add your custom CSS for the Hero section here
import { email_icon, github_icon, linkedin_icon } from "../assets/assets"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Name and Profession */}
        <div className="hero-text">
          <h1>Sayed Ali Shah</h1>
          <h3>Full Stack Developer</h3>
          <p>Passionate about building responsive, scalable web applications with a keen eye for detail.
             I specialize in both front-end and back-end development, ensuring seamless user experiences and high-quality performance.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
