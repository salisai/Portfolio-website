import React from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 2px rgba(255,255,255,0.3)"
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
};

const ContactForm = () => {
  return (
    <motion.section 
      className="contact-form-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="contact-form-container">
        <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
        
        <motion.form 
          className="contact-form"
          variants={containerVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <motion.label htmlFor="name" variants={itemVariants}>Name</motion.label>
            <motion.input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              required 
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <motion.label htmlFor="email" variants={itemVariants}>Email</motion.label>
            <motion.input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              required 
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <motion.label htmlFor="message" variants={itemVariants}>Message</motion.label>
            <motion.textarea 
              id="message" 
              placeholder="Your Message" 
              required
              whileFocus="focus"
              variants={inputVariants}
            ></motion.textarea>
          </motion.div>
          
          <motion.button 
            type="submit" 
            className="submit-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;