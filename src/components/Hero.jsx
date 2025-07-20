// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css'; // Add your custom CSS for the Hero section here
import { FiMail, FiExternalLink } from 'react-icons/fi';

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

      
        <div className="btns">
          <a href="mailto:sayed@example.com" className="hero-button solid">
            <FiMail className="btn-icon" />
            Get In Touch
          </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-button outline">
            <FiExternalLink className="btn-icon" />
            View Resume
          </a>
        </div>
              
      </div>
    </section>
  );
}

export default Hero;
