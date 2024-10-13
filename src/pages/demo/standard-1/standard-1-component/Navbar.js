import React, { useEffect, useState } from 'react';
import logo from '../standard-1-images/logo-muscu.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoWidth, setLogoWidth] = useState(1);
  const [logoMargin, setLogoMargin] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');
  const [showSlashRight, setShowSlashRight] = useState(false); // État pour gérer l'affichage de navbar__slash-right
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Nouvel état pour détecter la largeur de l'appareil

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const firstSectionHeight = document.querySelector('.home').offsetHeight;

    // Changer la couleur de fond lorsque 75% de la première section est scrollée
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

    // Gérer l'affichage de navbar__slash-right lorsque le scroll est supérieur à 1px
    if (scrollTop > 1) {
      setShowSlashRight(true);
    } else {
      setShowSlashRight(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // Mettre à jour l'état mobile en fonction de la largeur de l'appareil
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Ajouter un écouteur de redimensionnement

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Nettoyer l'écouteur de redimensionnement
    };
  }, []);

  return (
    <nav id="navbar" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease' }}>
      <ul className="navbar__menu">
        <li className="navbar__item">Accueil</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__item">Services</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__logo" style={{ margin: `0 ${isMobile ? 0 : logoMargin}px`, width: `${logoWidth}px`, opacity: isScrolled ? 1 : 0 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isMobile ? '75px' : '100px', // Si mobile, hauteur de 75px ; sinon, 100px
              width: 'auto',
              filter: 'drop-shadow(1px 1px 5px black)'
            }}
          />
        </li>
        <li className="navbar__slash-right" style={{ display: showSlashRight ? 'block' : 'none' }}>｜</li>
        <li className="navbar__item">Avis</li>
        <li className="navbar__slash">｜</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
