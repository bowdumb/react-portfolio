import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, imageUrl, githubLink, deployedLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-links">
        <div className="centered-icons">
          <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          {deployedLink && (
            <a href={deployedLink} className="website-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
