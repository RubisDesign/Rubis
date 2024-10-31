import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

const Last = () => {
  const design = {
    id: 1,
    image: "/images/premium-4.png",
    demoLink: "#",
    reserveLink: "#",
  };

  return (
    <section id="last-design">
      <div className="last-section">
        <div className="details">
          <h2 className="last-title">Notre dernier design 🔥</h2>
          <p className="last-subtitle">Voici notre dernière création, réservez ce design avant qu'il ne soit plus disponible !</p>
        </div>

        <div className="last-item">

          <div className="design-image">
            <img src={design.image} alt={`Design ${design.id}`} />
          </div>

          <div className="action-buttons">
            <button 
              onClick={() => window.location.href = design.demoLink}
              className="demo-button"
            >
              Voir la démo <FontAwesomeIcon icon={faEye} />
            </button>

            <button 
              onClick={() => window.location.href = design.reserveLink}
              className="reserve-button"
            >
              Réserver ce design <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
