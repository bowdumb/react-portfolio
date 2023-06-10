import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://github.com/claxCode">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/joshua-claxton-916a2a272/">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/bowdumb">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </footer>
            
    )
}

export default Footer;