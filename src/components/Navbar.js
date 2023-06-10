import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
      <div>
        <section className="navbar">
          <div className="navbar-content">
          <h1 style={{ color: 'orange', fontSize: '50px', marginBottom: '10px' }}>Josh Claxton Portfolio</h1>
            <nav>
              <div className="navbar-links">
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resumé</Link>
              </div>
            </nav>
          </div>
        </section>
  
        {/* Placeholder for content */}
      </div>
    );
  }
  

export default Navbar;