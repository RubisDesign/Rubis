import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant React
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons'; // Import des icônes spécifiques

const CarouselStandard = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Gérer l'index de l'élément en vedette

  const designs = [
    { id: 1, image: "/images/template-1.png", demoLink: "#", reserveLink: "#" },
    { id: 2, image: "/images/template-2.png", demoLink: "#", reserveLink: "#" },
    { id: 3, image: "/images/template-3.png", demoLink: "#", reserveLink: "#" },
    { id: 4, image: "/images/template-1.png", demoLink: "#", reserveLink: "#" },
    { id: 5, image: "/images/template-3.png", demoLink: "#", reserveLink: "#" },
    { id: 6, image: "/images/template-2.png", demoLink: "#", reserveLink: "#" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Détecter le changement de slide
    responsive: [
      {
        breakpoint: 804, // Pour mobile
        settings: {
          slidesToShow: 1,
          centerMode: false, // On désactive le mode centré sur mobile
        },
      },
    ],
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title standard-title">Standard</h2>
      <Slider {...settings}>
        {designs.map((design, index) => (
          <div
            key={design.id}
            className={`carousel-item ${index === currentSlide ? 'featured' : ''}`}
          >
            {/* Ajouter l'ID avec la classe 'center-num' si l'élément est actif */}
            <div className={`design-standard-id ${index === currentSlide ? 'standard-num' : ''}`}>
              <span>{design.id}</span>
            </div>

            <div className={`test ${index === currentSlide ? 'parfait' : ''}`}>
              <img src={design.image} alt={`Design ${design.id}`} />
            </div>
            
            {/* Afficher les boutons seulement pour l'élément en vedette */}
            {index === currentSlide && (
              <div className="carousel-buttons">
                <button onClick={() => window.location.href = design.demoLink}>
                  Voir la démo&nbsp;<FontAwesomeIcon icon={faEye} />
                </button>
                <button onClick={() => window.location.href = design.reserveLink}>
                  Réserver ce design&nbsp;<FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselStandard;
