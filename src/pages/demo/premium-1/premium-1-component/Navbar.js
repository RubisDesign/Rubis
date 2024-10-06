import React, { useState } from 'react';
import logo from '../premium-1-images/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le menu en mobile

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Ferme le menu après la navigation
    };

    const toggleMenu = () => setIsOpen(!isOpen); // Fonction pour ouvrir/fermer le menu

    return (
        <nav id="navbar">
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a onClick={() => scrollToSection('header')}>Accueil</a></li>
                    <li><a onClick={() => scrollToSection('expertise-section')}>Compétences</a></li>
                    <li><a onClick={() => scrollToSection('services-section')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('testimonials-carousel')}>Témoignages</a></li>
                    <li><a onClick={() => scrollToSection('contact-section')}>Contact</a></li>
                </ul>
            </div>
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
