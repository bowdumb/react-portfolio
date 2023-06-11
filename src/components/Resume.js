import React from 'react';
import {saveAs} from 'file-saver';
import { Link } from 'react-router-dom';
//import docx from './test.docx';
import '../styles/Resume.css';

function Resume() {
    // const resumeLink = "https://www.irs.gov/pub/irs-pdf/fw4.pdf";
    // const resumeLink = "https://chipsnetwork.org/wp-content/uploads/2022/08/GC-Bootcamp-Fact-Sheet-083022F.docx";
    const resumeLink = "https://raw.githubusercontent.com/claxCode/PWA-text-editor/main/client/dist/manifest.json";

    const handleDownload = () => {
        saveAs(resumeLink, 'Joshua Claxton - Resume.json')
        // saveAs(resumeLink, 'Joshua Claxton - Resume.docx')
    }

    return (
      <div>
        <iframe src={"http://docs.google.com/viewer?embedded=true&url="+resumeLink}></iframe>
        <button className="download-link" onClick={handleDownload}>Download Link</button>
      </div>
    );
  }
  

export default Resume;