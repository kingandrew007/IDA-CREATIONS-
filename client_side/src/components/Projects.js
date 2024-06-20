import React, { useEffect, useRef } from 'react';
import projectsData from './data/ProjectsData.json';
import './styles/Projects.css';

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1 style={{ fontSize: '40px', color: 'rgb(254, 254, 147)' }}>Our Projects</h1>
      <p style={{ color: 'white', fontSize: '24px' }}>Have a sneak peek at the Arts we Crafted</p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-box"
            ref={el => (projectRefs.current[index] = el)}
          >
            <img src={project.image_url} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => window.location.href = project.learn_more_url}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
