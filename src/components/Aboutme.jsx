import React from 'react'
import "../styles/Aboutme.css"
import { motion } from 'framer-motion'

// Reusing the same animation variants from Hero for consistency
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

const Aboutme = () => {
  return (
    <motion.div 
      className="about-me-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="about-me-container">
        <motion.h2 variants={itemVariants}>About Me</motion.h2>
        <motion.p variants={itemVariants}>
          I am a full stack AI developer and providing AI solutions all over the world.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Aboutme