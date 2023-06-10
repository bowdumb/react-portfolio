import React from 'react';
import '../styles/About.css';
import profileImage from '../images/profile-image.jpeg';

function About() {
  return (
    <div>
      <section className="about-me">
        <div className="about-container">
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              I was born in Washington, DC, but I have been living in Atlanta, Georgia for the past two years.
              For the last decade, I worked in the wine and hospitality industries, specifically as a sommelier in New York City.
              Recently, I made the decision to transition my career in order to pursue my passion for technology.
              I enrolled in and successfully completed a full-stack coding bootcamp through Georgia Tech's professional education program.
            </p>
            <p>
              Throughout the bootcamp, I gained proficiency in various technologies and programming languages, including JavaScript, CSS, HTML, Express, MySQL, MongoDB, GraphQL, React, and more.
              I am excited to leverage these skills and embark on a new journey as a web developer.
            </p>
            <p>
              I am currently seeking employment opportunities that will allow me to continue learning and growing as a web developer.
              I am eager to contribute my knowledge and skills to create innovative and user-friendly web solutions.
            </p>
          </div>
          <div className="profile-image">
            <img src={profileImage} alt="Profile picture" className="profile-border" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
