import React from 'react';
import arm from '../premium-4-images/home-arm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <div className="header__tag">Coach Sportif</div>
          <h1 className="header__title">Débloquer votre plein potentiel</h1>
          <button className="header__cta">Découvrir &nbsp; <i><FontAwesomeIcon icon={faChevronDown} /></i></button>
        </div>
        <div className="header__right">
          <img src={arm} alt="Fitness" className="header__image" />
        </div>
      </div>
      <div className="header__overlay"></div>
    </header>
  );
};

export default Header;
