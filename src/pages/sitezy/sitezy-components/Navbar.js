import React, { useState } from 'react';
import logo from '../sitezy-images/sitezy-logo-shadow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className="navbar__toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#services">Designs</a></li>
                    <li><a href="#about">Tarifs</a></li>
                    <li><a href="#contact">Avis</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className="navbar__cta">
                        <a href="#reserve" className="cta-button">Réserver&nbsp;votre&nbsp;site</a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
