import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__subtitle">Nos Services</h2>
        <h1 className="services__title">Des Programmes pour Tous</h1>
      </div>

      <div className="services__cards">
        <div className="service-card">
          <h3 className="service-card__title">Coaching en Groupe</h3>
          <p className="service-card__price">25€</p>
          <p className="service-card__description">
            Programmes adaptés pour vous aider à retrouver votre forme physique. Programmes adaptés pour vous aider à retrouver votre forme physique.
          </p>
          <button className="service-card__button">Réserver maintenant</button>
        </div>

        <div className="service-card">
          <h3 className="service-card__title">Coaching Individuel</h3>
          <p className="service-card__price">50€</p>
          <p className="service-card__description">
            Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux. Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux.
          </p>
          <button className="service-card__button">Réserver maintenant</button>
        </div>

        <div className="service-card">
          <h3 className="service-card__title">Programme en Ligne</h3>
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
