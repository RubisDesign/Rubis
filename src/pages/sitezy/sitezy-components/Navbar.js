import React from 'react';
import logo from '../sitezy-images/sitezy-logo-shadow.png'; // Assurez-vous de remplacer par le chemin réel de votre logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="navbar__links">
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
