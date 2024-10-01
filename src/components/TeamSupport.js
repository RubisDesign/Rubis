import React from 'react';

const TeamSupport = () => {
  return (
    <div className="team-support-container">
      {/* Titre principal */}
      <h1 className="team-support-title">Notre équipe vous accompagne</h1>
      <p className="team-support-paragraphe">Tout au long du processus de création, notre équipe vous guide afin de vous garantir une expérience de qualité.</p>

      <div className="team-support-sections">

        {/* Section 1 - Conseils d'experts dans le digital */}
        <div className="team-support-item">
          <img src="/images/r-1.png" alt="Conseils d'experts dans le digital" className="support-image" />
          <h3>Conseils d'experts dans le digital</h3>
          <p>Travaillez avec des professionnels qui excellent dans le digital et qui connaissent votre profession.</p>
        </div>

        {/* Section 2 - Sans engagement */}
        <div className="team-support-item">
          <img src="/images/r-2.png" alt="Sans engagement" className="support-image" />
          <h3>Sans engagement</h3>
          <p>Optez pour la liberté dans vos décisions professionnelles.</p>
        </div>

        {/* Section 3 - Design satisfait ou remboursé */}
        <div className="team-support-item">
          <img src="/images/r-3.png" alt="Design satisfait ou remboursé" className="support-image" />
          <h3>Design satisfait ou remboursé</h3>
          <p>Avancez l'esprit tranquille et soyez sûr d'obtenir un site qui vous plaît.</p>
        </div>

      </div>
    </div>
  );
};

export default TeamSupport;
