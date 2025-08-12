import React from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { github_icon, project1, project2, project3 } from "../assets/assets";

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
  hidden: { y: 30, opacity: 0 },
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

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150
    }
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300
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

const Projects = () => {
  const projects = [
    {
      title: "Housing Price Prediction Model",
      description: "It is trained on the Boston Housing Dataset and is used to predict the price of a house on certain parameters.",
      technologies: ["python", "jupyter notebook"],
      imageUrl: project1,
      sourceLink: "#",
    },
    {
      title: "Email Spam Classifier Using Machine Learning",
      description: "This project was done for the Skill4U machine learning program. It is a Spam email classifier using machine learning.",
      technologies: ["python", "jupyter notebook"],
      imageUrl: project2,
      sourceLink: "#",
    },
    {
      title: "Voting Smart Contract using Solidity",
      description: "A basic voting application implemented using Solidity. This smart contract allows users to vote for candidates in an election.",
      technologies: ["solidity", "truffle", "blockchain"],
      imageUrl: project3,
      sourceLink: "#",
    },
  ];

  return (
    <motion.section 
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.h2 variants={itemVariants}>Projects</motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.h3 variants={itemVariants}>{project.title}</motion.h3>
              <motion.p variants={itemVariants}>{project.description}</motion.p>
              <motion.div className="technologies" variants={itemVariants}>
                {project.technologies.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    className="tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.a 
                href={project.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-source-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Source code
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;