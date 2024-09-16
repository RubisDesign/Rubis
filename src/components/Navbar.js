import React from 'react';
import '../styles/Navbar.scss'; // Crée ce fichier pour les styles personnalisés
import RubisAnimation from './RubisAnimation';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="brand">
            <div className='logo'> 
                <RubisAnimation />
            </div>
            <div className='name'>
                <a href='/'>Rubis Design</a>
            </div>
        </div>
        <ul className="navbar-list">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#partenaires">Partenaires</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
