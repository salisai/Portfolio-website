// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css'; // Add your custom CSS for the Projects section here
import {github_icon, project1, project2, project3} from "../assets/assets"

const Projects = () => {
  const projects = [
    {
      title: "Housing Price Prediction Model",
      description:
        "It is trained on the Boston Housing Dataset and is used to predict the price of a house on certain parameters.",
      technologies: ["python", "jupyter notebook"],
      imageUrl: project1,  // Replace with actual image paths
      sourceLink: "#",
    },
    {
      title: "Email Spam Classifier Using Machine Learning",
      description:
        "This project was done for the Skill4U machine learning program. It is a Spam email classifier using machine learning.",
      technologies: ["python", "jupyter notebook"],
      imageUrl: project2,  // Replace with actual image paths
      sourceLink: "#",
    },
    {
      title: "Voting Smart Contract using Solidity",
      description:
        "A basic voting application implemented using Solidity. This smart contract allows users to vote for candidates in an election.",
      technologies: ["solidity", "truffle", "blockchain"],
      imageUrl: project3,  // Replace with actual image paths
      sourceLink: "#",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
              
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="view-source-btn">
               Source code 
              </a>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
