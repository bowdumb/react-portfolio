import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ResumeContent from './components/ResumeContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import ResumeContent from './components/ResumeContent';

function App() {
  const title = 'Josh Claxton: Full-Stack Web Developer';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<ResumeContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
