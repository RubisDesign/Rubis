import React from 'react';
import img1 from '../premium-2-images/img-1.png';

const Header = () => {
  return (
    <section id="header">
      <div className="header__content">
        <h2 className="header__title">Coaching <br></br> <span>Personnalisé</span></h2>
        <p className="header__paragraph">
          Laissez moi vous aider à atteindre vos objectifs en vous accompagnant avec professionnalisme, enthousiasme et esprit d'équipe !
        </p>
        <button className="header__cta">Let's go !</button>
      </div>
      <div className="header__image">
        <img src={img1} alt="Header" />
      </div>
    </section>
  );
};

export default Header;
