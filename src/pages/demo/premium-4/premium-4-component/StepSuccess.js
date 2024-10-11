import React from 'react';

const StepSuccess = () => {
  return (
    <section className="step-success">
      <div className="step-success__content">
        {/* Partie gauche */}
        <div className="step-success__left">
          <h3 className="step-success__subtitle">Comment ça marche</h3>
          <h2 className="step-success__title">Les étapes de votre succès</h2>
          <p className="step-success__description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis montes tellus facilisis inceptos vitae, est laoreet enim tellus nascetur convallis.
          </p>
        </div>

        {/* Partie fusionnée centre + droite */}
        <div className="step-success__steps-wrapper">
          <div className="step-success__step-row">
            <div className="step-success__number">1</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Bilan gratuit</p>
              <p className="step-success__step-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. magna dignissim enim</p>
            </div>
          </div>

          <div className="step-success__step-row">
            <div className="step-success__number">2</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Mensurations & Test physique</p>
              <p className="step-success__step-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. magna dignissim enim</p>
            </div>
          </div>

          <div className="step-success__step-row">
            <div className="step-success__number">3</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Création du plan nutritionel</p>
              <p className="step-success__step-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. magna dignissim enim</p>
            </div>
          </div>

          <div className="step-success__step-row" style={{ borderBottom: 'none' }}>
            <div className="step-success__number">4</div>
            <div className="step-success__step-content">
              <p className="step-success__step-title">Séances en salle</p>
              <p className="step-success__step-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. magna dignissim enim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSuccess;
