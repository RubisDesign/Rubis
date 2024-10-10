import React, { useState } from 'react';
import logo from '../premium-4-images/logo-fusion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger button */}
      <div className={`navbar__hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      {/* Navbar links */}
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--active' : ''}`}>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">Présentation</a></li>
        <li><a href="#services">Transformation</a></li>
        <li><a href="#portfolio">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* RDV Button */}
      <div className="navbar__button">
        <button>Prendre RDV &nbsp;<i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
