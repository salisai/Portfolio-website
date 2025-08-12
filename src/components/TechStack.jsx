import React from 'react';
import '../styles/TechStack.css';
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

const techTagVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150
    }
  },
  hover: {
    scale: 1.1,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const TechStack = () => {
  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
    devOps: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx", "Google Cloud", "Vercel", "Azure", "GitHub", "Doppler", "Papertrail"],
    backend: ["Python", "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Vector Databases"],
    tools: ["VS Code", "Postman", "Figma", "GitHub", "Vercel", "v0", "ChatGPT"],
  };

  return (
    <motion.section 
      className="tech-stack-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="tech-stack-container">
        <motion.h2 variants={itemVariants}>Tech Stack</motion.h2>
        
        <div className="tech-stack-grid">
          <motion.div 
            className="tech-stack-block"
            variants={blockVariants}
          >
            <motion.h3 variants={itemVariants}>Frontend</motion.h3>
            <div className="tech-tags">
              {techStack.frontend.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="tech-tag"
                  variants={techTagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="tech-stack-block"
            variants={blockVariants}
          >
            <motion.h3 variants={itemVariants}>DevOps</motion.h3>
            <div className="tech-tags">
              {techStack.devOps.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="tech-tag"
                  variants={techTagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="tech-stack-block"
            variants={blockVariants}
          >
            <motion.h3 variants={itemVariants}>Backend</motion.h3>
            <div className="tech-tags">
              {techStack.backend.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="tech-tag"
                  variants={techTagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="tech-stack-block"
            variants={blockVariants}
          >
            
            <motion.h3 variants={itemVariants}>Tools</motion.h3>
            <div className="tech-tags">
              {techStack.tools.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="tech-tag"
                  variants={techTagVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;