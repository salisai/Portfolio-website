// src/components/TechStack.js
import React from 'react';
import '../styles/TechStack.css'; // Add your custom CSS for the Tech Stack section here

const TechStack = () => {
  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
    devOps: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx", "Google Cloud", "Vercel", "Azure", "GitHub", "Doppler", "Papertrail"],
    backend: ["Python", "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Vector Databases"],
    tools: ["VS Code", "Postman", "Figma", "GitHub", "Vercel", "v0", "ChatGPT"],
  };

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        <h2>Tech Stack</h2>
        <div className="tech-stack-grid">
          <div className="tech-stack-block">
            <h3>Frontend</h3>
            <div className="tech-tags">
              {techStack.frontend.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-stack-block">
            <h3>DevOps</h3>
            <div className="tech-tags">
              {techStack.devOps.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-stack-block">
            <h3>Backend</h3>
            <div className="tech-tags">
              {techStack.backend.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-stack-block">
            <h3>Tools</h3>
            <div className="tech-tags">
              {techStack.tools.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
