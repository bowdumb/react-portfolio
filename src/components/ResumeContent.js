import React from 'react';
import Resume from './Resume';
import '../styles/ResumeContent.css';

function ResumeContent() {
  return (
    <div className="resume-page">
      <div className="content-wrapper">
        <h1>Skills and Resume</h1>
        <p>Front-End Proficiencies:</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Jquery</li>
          <li>Bootstrap</li>
          <li>CSS</li>
        </ul>
        <p>Back-End Proficiencies</p>
        <ul>
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
