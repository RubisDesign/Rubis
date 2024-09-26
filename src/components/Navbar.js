import React, { useEffect, useState, useRef } from 'react';
import '../styles/Navbar.scss'; // Fichier de styles personnalisés
import RubisAnimation from './RubisAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 
import { faHouse, faPalette, faTags, faUserCheck, faAddressBook } from '@fortawesome/free-solid-svg-icons'; // 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Référence à l'élément <nav>
  const navHeight = 70; // Hauteur de la navigation

  // Gérer le défilement pour changer le background de la navbar
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > window.innerHeight * 0.8);
  };

  // Gérer l'ouverture/fermeture du menu hamburger
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Fermer le menu hamburger lorsque l'utilisateur clique sur un lien de navigation
  const handleLinkClick = (event, targetId) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    setIsMenuOpen(false); // Ferme le menu

    const targetElement = document.querySelector(targetId); // Trouve l'élément cible de l'ancre
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      // Défile vers l'élément ajusté pour la hauteur de la nav
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fermer le menu si l'utilisateur clique en dehors de la nav
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Ferme le menu si le clic est en dehors de la nav
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside); // Ajouter un event listener pour détecter les clics en dehors

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside); // Nettoyer l'event listener
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
        <li onClick={(e) => handleLinkClick(e, '#accueil')}><i><FontAwesomeIcon icon={faHouse} /></i><a href="#accueil">Accueil</a></li>
        <li onClick={(e) => handleLinkClick(e, '#designs')}><i><FontAwesomeIcon icon={faPalette} /></i><a href="#progress-footer">Designs</a></li>
        <li onClick={(e) => handleLinkClick(e, '#tarifs')}><i><FontAwesomeIcon icon={faTags} /></i><a href="#tarifs">Tarifs</a></li>
        <li onClick={(e) => handleLinkClick(e, '#temoignages')}><i><FontAwesomeIcon icon={faUserCheck} /></i><a href="#temoignages">Témoignages</a></li>
        <li onClick={(e) => handleLinkClick(e, '#contact')}><i><FontAwesomeIcon icon={faAddressBook} /></i><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
