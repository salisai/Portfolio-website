import React from 'react';
import '../styles/Certifications.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, damping: 12 }
  },
  hover: {
    scale: 1.01,
    backgroundColor: 'rgba(255,255,255,0.07)',
    transition: { type: 'spring', stiffness: 300 }
  }
};

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford",
      date: "June 2024",
      description: "Supervised & unsupervised learning, advanced ML pipelines."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "July 2024",
      description: "CNNs, RNNs, transformers, and sequence models."
    },
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      date: "March 2023",
      description: "MERN stack apps, APIs, authentication, and deployment."
    }
  ];

  return (
    <motion.section
      className="certifications-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="cert-header">
                <h3>{cert.title}</h3>
                <span className="cert-date">{cert.date}</span>
              </div>
              <p className="issuer">{cert.issuer}</p>
              {cert.description && (
                <p className="description">{cert.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
