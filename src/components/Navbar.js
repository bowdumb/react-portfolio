import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <section className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">
            Josh Claxton Portfolio
          </h1>
          <nav>
            <div className="navbar-links">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick('/')}
              >
                About
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick('/projects')}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </NavLink>
              <NavLink
                to="/resume"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick('/resume')}
              >
                Resumé
              </NavLink>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
