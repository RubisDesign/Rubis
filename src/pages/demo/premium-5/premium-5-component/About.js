import React from 'react';
import coach from '../premium-5-images/michael-ruan.webp'

const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={coach} alt="Coach" />
      </div>
      <div className="about__content">
        <h2 className="about__subtitle">VOTRE COACH</h2>
        <h1 className="about__title">MICHAEL RUAN</h1>
        <p className="about__paragraph">
          Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur « Modifier Texte » ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Déplacez-moi où vous le souhaitez sur votre page. C'est l'espace idéal pour raconter une histoire. Présentez votre entreprise, vos services et vos équipes.
        </p>
        <p className="about__paragraph">
          Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur « Modifier Texte » ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Déplacez-moi où vous le souhaitez sur votre page. C'est l'espace idéal pour raconter une histoire. Présentez votre entreprise, vos services et vos équipes.
        </p>
      
      </div>
    </div>
  );
};

export default About;
