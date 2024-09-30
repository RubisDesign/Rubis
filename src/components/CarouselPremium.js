import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwipeAnimation from "../components/SwipeAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

const CarouselPremium = () => {
  const [isSwipeVisible, setSwipeVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const designs = [
    { id: 1, image: "/images/template-1.png", demoLink: "#", reserveLink: "https://book.stripe.com/6oEg2faDFcbs2fScMQ", isReserved: false },
    { id: 2, image: "/images/template-2.png", demoLink: "#", reserveLink: "https://book.stripe.com/dR603h7rtb7o2fS3ch", isReserved: false },
    { id: 3, image: "/images/reserved-2.png", demoLink: "#", reserveLink: "#", isReserved: true },
    { id: 4, image: "/images/template-3.png", demoLink: "#", reserveLink: "https://book.stripe.com/28ocQ3bHJ3EW3jW5kq", isReserved: false },
    { id: 5, image: "/images/reserved-3.png", demoLink: "#", reserveLink: "#", isReserved: true },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 804,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          swipe: false,
        },
      },
    ],
  };

  const handleHideSwipe = () => {
    setSwipeVisible(false); // Masquer swipe-container lorsqu'on clique ou fait défiler
  };

  const handleScroll = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement de défilement
    handleHideSwipe(); // Masque le swipe-container
  };

  return (
    <div className="carousel-section premium">
      {/* swipe-container, visible uniquement si isSwipeVisible est vrai */}
      {isSwipeVisible && (
        <div 
          className="swipe-container" 
          onClick={handleHideSwipe}
          onScroll={handleScroll} // Pour détecter le scroll sur les appareils non tactiles
          onTouchStart={handleHideSwipe} // Pour détecter le swipe sur les appareils tactiles
          onTouchMove={handleHideSwipe} // Pour détecter le mouvement tactile (scroll/swipe) sur mobile
        >
          <SwipeAnimation />
        </div>
      )}
      
      <h2 className="carousel-title premium-title">Premium</h2>
      
      <div 
        onClick={handleHideSwipe}
        onTouchStart={handleHideSwipe} // Pour détecter le swipe sur les appareils tactiles
        onTouchMove={handleHideSwipe} // Pour détecter le mouvement tactile (scroll/swipe) sur mobile
      >
        <Slider {...settings}>
          {designs.map((design, index) => (
            <div key={design.id} className={`carousel-item ${index === currentSlide ? 'featured' : ''}`}>
              <div className={`design-premium-id ${index === currentSlide ? 'premium-num' : ''}`}>
                <span>{design.id}</span>
              </div>

              <div className={`test ${index === currentSlide ? 'parfait' : ''}`} style={{ position: 'relative' }}>
                <img src={design.image} alt={`Design ${design.id}`} />
                {design.isReserved && (
                  <div className={`reserved-text ${index === currentSlide ? '' : 'inactive'}`}>
                    Réservé
                  </div>
                )}
              </div>
              
              {index === currentSlide && (
                <div className="carousel-buttons">
                  <button 
                  onClick={() => { if (!design.isReserved) window.location.href = design.demoLink; }}
                  className={design.isReserved ? 'disabled-button' : ''}
                  disabled={design.isReserved}
                >
                    Voir la démo&nbsp;<FontAwesomeIcon icon={faEye} />
                  </button>

                  <button 
                    onClick={() => { if (!design.isReserved) window.location.href = design.reserveLink; }}
                    className={design.isReserved ? 'disabled-button' : ''}
                    disabled={design.isReserved}
                  >
                    {design.isReserved ? 'Déjà réservé' : 'Réserver ce design'}&nbsp;<FontAwesomeIcon icon={faCartShopping} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPremium;
