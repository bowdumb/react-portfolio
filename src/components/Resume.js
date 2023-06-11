import React, { useEffect } from 'react';
import resumePDF from '../components/resume/j.claxton-resume.pdf';
import '../styles/Resume.css';


function Resume() {
  const handleDownload = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div>
      <div className="download-link">
        <button onClick={handleDownload}>View and download resume</button>
      </div>
    </div>
  );
}

export default Resume;