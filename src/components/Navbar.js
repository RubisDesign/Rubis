import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss'; // Fichier de styles personnalisés
import RubisAnimation from './RubisAnimation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gérer le défilement pour changer le background de la navbar
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > window.innerHeight * 0.8);
  };

  // Gérer l'ouverture/fermeture du menu hamburger
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="brand">
        <div className='logo'>
          <RubisAnimation />
        </div>
        <div className='name'>
          <a href='/'>Rubis Design</a>
        </div>
      </div>

      {/* Bouton hamburger */}
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu */}
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#designs">Designs</a></li>
        <li><a href="#tarifs">Tarifs</a></li>
        <li><a href="#temoignages">Témoignages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
