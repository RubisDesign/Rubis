import React, { useEffect, useState } from 'react';
import logo from '../standard-1-images/logo-muscu.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoWidth, setLogoWidth] = useState(1);
  const [logoMargin, setLogoMargin] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const firstSectionHeight = document.querySelector('.home').offsetHeight;

    // Changer la couleur de fond lorsque 80% de la première section est scrollée
    if (scrollTop > firstSectionHeight * 0.8) {
      setBgColor('black'); // Fond noir
    } else {
      setBgColor('transparent'); // Fond transparent
    }

    // Contrôle de l'état de défilement pour l'opacité du logo
    if (scrollTop > windowHeight * 0.35) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Ajustement dynamique de la largeur et de la marge du logo
    const newWidth = Math.min(100, 1 + (scrollTop / (windowHeight * 0.25)) * (100 - 1)); // Accélération x2
    const newMargin = Math.min(20, (scrollTop / (windowHeight * 0.25)) * 20);

    setLogoWidth(newWidth);
    setLogoMargin(newMargin);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease' }}>
      <ul className="navbar__menu">
        <li className="navbar__item">Accueil</li>
        <li className="navbar__item">Services</li>
        <li className="navbar__logo" style={{ margin: `0 ${logoMargin}px`, width: `${logoWidth}px`, opacity: isScrolled ? 1 : 0 }}>
          <img src={logo} alt="Logo" style={{ height: '100px', width: 'auto', filter: 'drop-shadow(1px 1px 5px black)' }} />
        </li>
        <li className="navbar__item">À propos</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
