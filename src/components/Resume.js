import React from 'react';
import resumePDF from '../components/resume/j.claxton-resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Resume.css';

function Resume() {
  const handleDownload = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        <div className="fixed-download-link">
          <button className="btn btn-info" onClick={handleDownload}>
            View and download resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
