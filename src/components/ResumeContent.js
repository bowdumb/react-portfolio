import React from 'react';
import Resume from './Resume';
import '../styles/ResumeContent.css';

function ResumeContent() {
  return (
    <div className="resume-page">
      <div className="content-wrapper">
        <h1 className="resume-header">Skills and Resumé</h1>
        <p className="resume-text">Front-End Proficiencies:</p> 
        <ul className="resume-list"> 
          <li>JavaScript</li>
          <li>React</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
          <li>CSS</li>
        </ul>
        <p className="resume-text">Back-End Proficiencies</p> 
        <ul className="resume-list">
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>GraphQl</li>
          <li>REST</li>
          <li>APIs</li>
        </ul>
      </div>
      <Resume />
    </div>
  );
}

export default ResumeContent;
