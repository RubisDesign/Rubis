import React from 'react';
import group from '../standard-1-images/insta-1.jpg';
import indiv from '../standard-1-images/insta-2.jpg';
import ligne from '../standard-1-images/insta-3.jpg';

const Services = () => {
  return (
    <section id='services' className="services">
      <div className="services__header">
        <h2 className="services__subtitle">Mes Services</h2>
        <h1 className="services__title">Des Programmes pour Tous</h1>
      </div>

      <div className="services__cards">
        <div className="service-card">
          
          <h3 className="service-card__title">Coaching en Groupe</h3>
          <img src={group} alt="Coaching en Groupe" className="service-card__image" />
          <p className="service-card__price">25€</p>
          <p className="service-card__description">
            Programmes adaptés pour vous aider à retrouver votre forme physique. Programmes adaptés pour vous aider à retrouver votre forme physique.
          </p>
          <button className="service-card__button">Réserver maintenant</button>
        </div>

        <div className="service-card">
          
          <h3 className="service-card__title">Coaching Individuel</h3>
          <img src={indiv} alt="Coaching Individuel" className="service-card__image" />
          <p className="service-card__price">50€</p>
          <p className="service-card__description">
            Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux. Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux.
          </p>
          <button className="service-card__button">Réserver maintenant</button>
        </div>

        <div className="service-card">
          
          <h3 className="service-card__title">Programme en Ligne</h3>
          <img src={ligne} alt="Programme en Ligne" className="service-card__image" />
          <p className="service-card__price">100€</p>
          <p className="service-card__description">
            Conseils sportifs personnalisés pour accompagner vos entraînements. Conseils sportifs personnalisés pour accompagner vos entraînements.
          </p>
          <button className="service-card__button">Réserver maintenant</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
