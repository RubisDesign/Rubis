import React from 'react';
import logo from '../standard-1-images/m-logo.png';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Récupère la position de l'élément et ajuste pour la hauteur de la nav
      const navHeight = 50; // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Position de l'élément
      const offsetPosition = elementPosition - navHeight; // Position ajustée

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <button onClick={() => scrollToSection('header')}>Accueil</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('services')}>Services</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('testimonials')}>Avis</button>
        </li>
        <li className="navbar__item">
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
