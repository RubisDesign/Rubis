import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';
import '../styles/ProgressBarSection.scss';

const ProgressBarSection = () => {
  const [opacities, setOpacities] = useState([0.5, 0.5, 0.5]);
  const [icons, setIcons] = useState([faCircleDot, faCircleDot, faCircleDot]); // État pour les icônes
  const [headerOpacity, setHeaderOpacity] = useState(0.5);
  const [footerOpacity, setFooterOpacity] = useState(0.5);
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateSectionScrollPercentage = (element) => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (elementTop < viewportHeight && elementBottom > 0) {
      const elementHeight = elementBottom - elementTop;
      const visiblePart = Math.min(viewportHeight, elementBottom) - Math.max(0, elementTop);
      return (visiblePart / elementHeight) * 100;
    }
    return 0;
  };

  const isElementInViewport = (element) => {
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const elementMiddle = rect.top + (rect.height / 2);
    const viewportTop = 0;

    return elementMiddle <= viewportHeight / 2 && elementMiddle >= viewportTop;
  };

  const handleScroll = () => {
    const steps = document.querySelectorAll('.step');
    const newOpacities = [...opacities];
    const newIcons = [...icons]; // Copie des icônes

    steps.forEach((step, index) => {
      newOpacities[index] = isElementInViewport(step) ? 1 : 0.5;

      // Change l'icône si l'opacité est 1
      newIcons[index] = newOpacities[index] === 1 ? faCircleCheck : faCircleDot;

      const scrollPercentage = calculateSectionScrollPercentage(step);
      const progressBar = step.querySelector('.progress-bar');
      const adjustedPercentage = Math.min(scrollPercentage, 100);
      progressBar.style.setProperty('--scroll-height', `${adjustedPercentage}%`);
    });

    setOpacities(newOpacities);
    setIcons(newIcons); // Mettre à jour les icônes

    const header = document.querySelector('#progress-header');
    const footer = document.querySelector('#progress-footer');
    setHeaderOpacity(isElementInViewport(header) ? 1 : 0.5);
    
    const isFooterVisible = isElementInViewport(footer);
    setFooterOpacity(isFooterVisible ? 1 : 0.5);
    setShowConfetti(isFooterVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: 'absolute', top: 500, left: 0 }} // Position absolue
        />
      )}
      <section id='progress-bar-section'>
        <h2 id='progress-header' style={{ opacity: headerOpacity }}>
          Travaillons <span>ensemble</span> en seulement 3 étapes
        </h2>

        <div className='step step-1' style={{ opacity: opacities[0] }}>
          <div className='left'>
            <p>Première étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[0]} /> {/* Utiliser l'icône de l'état */}
          </div>
          <div className='right'>
            <p>
              <span>✨&nbsp;Faîtes votre choix </span><br/><br/>
              Choisissez une offre et un design parmi ceux disponibles.
            </p>
          </div>
        </div>

        <div className='step step-2' style={{ opacity: opacities[1] }}>
          <div className='left'>
            <p>Deuxième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[1]} /> {/* Utiliser l'icône de l'état */}
          </div>
          <div className='right'>
            <p>
              <span>📤&nbsp;Partagez-nous votre contenu </span><br/><br/>
              Transmettez-nous vos ressources utiles (textes, images, témoignages...).
            </p>
          </div>
        </div>

        <div className='step step-3' style={{ opacity: opacities[2] }}>
          <div className='left'>
            <p>Troisième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'>
            <FontAwesomeIcon icon={icons[2]} /> {/* Utiliser l'icône de l'état */}
          </div>
          <div className='right'>
            <p>
              <span>🤝🏻&nbsp;Occupons-nous des détails </span><br/><br/>
              Nous personnalisons ensemble les derniers détails de votre site internet.
            </p>
          </div>
        </div>

        <h3 id='progress-footer' style={{ opacity: footerOpacity }}>
          🎉&nbsp;Votre site est en ligne&nbsp;!&nbsp;🎉
        </h3>
      </section>
    </div>
  );
};

export default ProgressBarSection;
