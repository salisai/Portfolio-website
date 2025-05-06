// src/components/ContactForm.js
import React from 'react';
import '../styles/Contact.css'; // Add your custom CSS for the Contact Form here

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

    </section>
  );
};

export default ContactForm;
