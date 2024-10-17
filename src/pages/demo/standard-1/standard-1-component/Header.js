import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 50; // Hauteur de la navbar, si elle est fixe
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id='header' className="header">
      <div className="header__content">
        <h1 className="header__title">ENSEMBLE, <br />DÉPASSONS <br />VOS LIMITES</h1>
        <button 
          className="header__cta" 
          onClick={() => scrollToSection('about')}
        >
          Découvrir
        </button>
      </div>
    </header>
  );
};

export default Header;
