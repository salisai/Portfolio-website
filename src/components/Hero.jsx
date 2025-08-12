// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import { FiMail, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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
    scale: 0.95
  }
};

const Hero = () => {
  return (
    <motion.section 
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-container">
        {/* Name and Profession */}
        <motion.div className="hero-text" variants={containerVariants}>
          <motion.h1 variants={itemVariants}>Sayed Ali Shah</motion.h1>
          <motion.h3 variants={itemVariants}>Full Stack Developer</motion.h3>
          <motion.p variants={itemVariants}>
            Passionate about building responsive, scalable web applications with a keen eye for detail.
            I specialize in both front-end and back-end development, ensuring seamless user experiences and high-quality performance.
          </motion.p>
        </motion.div>

        <motion.div className="btns" variants={itemVariants}>
          <motion.a 
            href="mailto:sayed@example.com" 
            className="hero-button solid"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiMail className="btn-icon" />
            Get In Touch
          </motion.a>

          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-button outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiExternalLink className="btn-icon" />
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;