import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône de check

const Services = () => {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__title">Mes services</h2>
        <p className="services__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="services__cards">
        <div className="services__card">
          <h3 className="services__card-title">Coaching en Groupe</h3>
          <p className="services__card-price">25€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance d'une heure</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Équipement de qualité</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
          </ul>
          <button className="services__card-cta">Réserver ce service</button>
        </div>

        <div className="services__card popular">
          <h3 className="services__card-title">Coaching Individuel</h3>
          <p className="services__card-price">50€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance d'une heure</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Équipement de qualité</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
          </ul>
          <button className="services__card-cta">Réserver ce service</button>
        </div>

        <div className="services__card">
          <h3 className="services__card-title">Programme en Ligne</h3>
          <p className="services__card-price">100€</p>
          <ul className="services__card-features">
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Bilan gratuit</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Séance d'une heure</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Équipement de qualité</li>
            <li><FontAwesomeIcon icon={faCheck} className="check-icon" /> Horaires flexibles</li>
          </ul>
          <button className="services__card-cta">Réserver ce service</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
