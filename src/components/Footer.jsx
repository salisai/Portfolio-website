// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Add your custom CSS for the Footer section here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Sayed Ali Shah. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
