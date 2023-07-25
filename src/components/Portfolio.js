import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'FilmFetch',
      description: 'An app to help movie enthusiasts find the perfect movie.',
      imageUrl: `${process.env.PUBLIC_URL}/popcorn.jpg`,
      githubLink: 'https://github.com/bowdumb/captain-planet',
      deployedLink: 'https://bowdumb.github.io/captain-planet'
    },
    {
      id: 2,
      title: 'Social Network API',
      description: 'A realistic Social Media backend for routing.',
      imageUrl: `${process.env.PUBLIC_URL}/socialmedia.jpg`,
      githubLink: 'https://github.com/bowdumb/social-network-mock-API'
    },
    {
      id: 3,
      title: 'Just Another Text Editor',
      description: 'Text editor built as a single-page application for writing JavaScript in a sandbox environment.',
      imageUrl: `${process.env.PUBLIC_URL}/text-editor.jpg`,
      githubLink: 'https://github.com/bowdumb/PWA-text-editor',
      deployedLink: 'https://young-forest-09742.herokuapp.com/'
    },
    {
      id: 4,
      title: 'Command Line Employee Manager',
      description: 'Employee management app using Inquirer.js and MySQL 2.',
      imageUrl: `${process.env.PUBLIC_URL}/employee-manager.jpg`,
      githubLink: 'https://github.com/bowdumb/employee-manager'
    },
    {
      id: 5,
      title: 'E-Commerce Backend',
      description: 'A demonstration of the back end for a simple e-commerce company. Uses MySql2.',
      imageUrl: `${process.env.PUBLIC_URL}/ecommerce.jpg`,
      githubLink: 'https://github.com/bowdumb/e-commerce-backend-app'
    },
    {
      id: 6,
      title: 'Workday Personal Planner',
      description: 'A calendar application that allows you to save events for each hour of the day.',
      imageUrl: `${process.env.PUBLIC_URL}/planner.jpg`,
      githubLink: 'https://github.com/bowdumb/scheduler',
      deployedLink: 'https://bowdumb.github.io/scheduler/'
    }
  ];

  // Maps through projects array and renders the output from the ProjectCard component.
  return (
    <div className="portfolio-container">
      <div className="portfolio-cards-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
