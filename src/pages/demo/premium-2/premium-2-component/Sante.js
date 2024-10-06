import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClipboardList, faSchoolCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Sante = () => {
  return (
    <section id='sante'>
      <div className="sante__header">
        <p className="sante__subtitle">Améliorez votre santé</p>
        <h2 className="sante__title">Nous y arriverons <span>ensemble</span></h2>
      </div>

      <div className="sante__features">
        <div className="feature">
          <FontAwesomeIcon icon={faClock} className="feature__icon" />
          <h3 className="feature__title">HORAIRES FLÉXIBLES</h3>
          <p className="feature__description">
            Je m’adapte à votre emploi du temps pour proposer le créneau idéal.
          </p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faClipboardList} className="feature__icon" />
          <h3 className="feature__title">Suivi & Coaching Perso</h3>
          <p className="feature__description">
            Je réalise un suivi et des séances de coaching personnalisées afin d’obtenir les meilleurs résultats.
          </p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faSchoolCircleCheck} className="feature__icon"/>
          <h3 className="feature__title">Diplomé & Polyvalent</h3>
          <p className="feature__description">
            Je vous accompagne dans vos différents objectifs: perte de poids, prise de muscle, remise en forme et préparation physique.
          </p>
        </div>
      </div>

      <div className="sante__cta">
        <button className="cta-button">Découvrir mes services</button>
      </div>
    </section>
  );
};

export default Sante;
