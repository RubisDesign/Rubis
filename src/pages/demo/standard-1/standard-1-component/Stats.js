import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="stats"
      style={{ backgroundPositionY: `${offsetY * 0.5}px` }} // Effet de parallaxe
    >
      <div className="stats__content">
        <div className="stat">
          <h2 className="stat__number">5</h2>
          <p className="stat__text">Années d'expérience</p>
        </div>
        <div className="stat">
          <h2 className="stat__number">50</h2>
          <p className="stat__text">Clients transformés</p>
        </div>
        <div className="stat">
          <h2 className="stat__number">300</h2>
          <p className="stat__text">Heures de Cours collectifs</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
