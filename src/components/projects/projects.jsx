import React from 'react';
import { projects } from './projectsData';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyProjects = () => {
  return (
    <>
    <div className="projects" id="projects-desktop">
      <div className="container">
        
          <div className="projects-title">
            <span>02. </span> Some things I've built
          </div>

          <div className="projects-content">
            {projects.map((project, index) => (
              <div key={index} className={`project ${index % 2 === 1 ? 'project-flip' : ''}`}>
                <div className="projects-image">
                  <img src={project.image} alt={project.name} />
                </div>

                <div className="projects-description">
                  <div className="projects-suptitle">
                    {project.suptitle}
                  </div>

                  <div className="projects-name">
                    {project.name}
                  </div>

                  <div className="projects-text">
                    {project.description}
                  </div>

                  <div className="projects-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>

                  <div className="projects-links">
                    <a href={project.link[0]} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={project.link[1]} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        
      </div>
    </div>

    <div className="project-mobile" id="projects-mobile">
      <div className="container" >


      <div className="projects-title">
            <span>02. </span> Some things I've built
          </div>

            <div className="project-mobile__content">
            {projects.map((project, index) => (
              <div key={index}>
               

               <div className="project-mobile__image">
                <img src={project.image} alt="" />

                <div className="project-mobile__content">

                  <div className="project-mobile__wrapper">
                    <div className="suptitle">
                      {project.suptitle}
                    </div>

                    <div className="name">
                      {project.name}
                    </div>

                    <div className="description">
                      {project.description}
                    </div>

                    <div className="tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </div>

                    <div className="links">
                      <a href={project.link[0]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a href={project.link[1]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                  
                </div>
               </div>
              </div>
            ))}
            </div>
      </div>
    </div>
    </>
  );
};

export default MyProjects;
