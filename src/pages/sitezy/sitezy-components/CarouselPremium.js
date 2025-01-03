import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwipeAnimation from "../sitezy-components/SwipeAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

const CarouselPremium = () => {
  const [isSwipeVisible, setSwipeVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState("Tous"); // State pour gérer le filtre sélectionné

  const designs = [
    { id: 1, image: "/images/premium-1.png", demoLink: "/#/demo/premium-1", reserveLink: "https://book.stripe.com/6oEg2faDFcbs2fScMQ", isReserved: false, category: "Premium" },
    { id: 2, image: "/images/premium-2.png", demoLink: "/#/demo/premium-2", reserveLink: "https://book.stripe.com/dR603h7rtb7o2fS3ch", isReserved: false, category: "Premium" },
    { id: 3, image: "/images/reserved-1.png", demoLink: "#", reserveLink: "#", isReserved: true, category: "Premium" },
    { id: 4, image: "/images/premium-4.png", demoLink: "/#/demo/premium-4", reserveLink: "https://book.stripe.com/dR603h7rtb7o2fS3ch", isReserved: false, category: "Premium" },
    { id: 5, image: "/images/premium-5.png", demoLink: "/#/demo/premium-5", reserveLink: "https://book.stripe.com/28ocQ3bHJ3EW3jW5kq", isReserved: false, category: "Premium" },
    { id: 6, image: "/images/standard-1.png", demoLink: "/#/demo/standard-1", reserveLink: "", isReserved: false, category: "Standard" },
    { id: 7, image: "/images/standard-2.png", demoLink: "/#/demo/standard-2", reserveLink: "#", isReserved: false, category: "Standard" },
    { id: 8, image: "/images/reserved-2.png", demoLink: "#", reserveLink: "#", isReserved: true, category: "Standard" },
    { id: 9, image: "/images/reserved-3.png", demoLink: "#", reserveLink: "#", isReserved: true, category: "Standard" },
    { id: 10, image: "/images/standard-5.png", demoLink: "/#/demo/standard-5", reserveLink: "#", isReserved: false, category: "Standard" },
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

  // Fonction pour filtrer les designs
  const filteredDesigns = designs.filter((design) => {
    if (filter === "Tous") return true;
    return design.category === filter;
  });

  return (
    <section id="design">
      <div className="carousel-section premium">
        {/* swipe-container, visible uniquement si isSwipeVisible est vrai */}
        {isSwipeVisible && (
          <div 
            className="swipe-container" 
            onClick={handleHideSwipe}
            onScroll={handleHideSwipe} // Pour détecter le scroll
            onTouchStart={handleHideSwipe} // Pour détecter le swipe
            onTouchMove={handleHideSwipe} // Pour détecter le mouvement tactile
          >
            <SwipeAnimation />
          </div>
        )}
        
        <div className="details">
          <h2 className="carousel-title premium-title">Choisissez votre design</h2>
          <p className="premium-subtitle">Chacun de nos design est unique, chaque section est personnalisable afin de représenter au mieux vos valeurs et votre image de marque.</p>
          
          {/* Boutons de filtre */}
          <div className="filter-buttons">
            <button onClick={() => setFilter("Tous")} className={filter === "Tous" ? "active" : ""}>Tous </button>
            <div className="separator">|</div>
            <button onClick={() => setFilter("Premium")} className={filter === "Premium" ? "active" : ""}>Premium</button>
            <div className="separator">|</div>
            <button onClick={() => setFilter("Standard")} className={filter === "Standard" ? "active" : ""}>Standard</button>
          </div>
        </div>

        <div onClick={handleHideSwipe} onTouchStart={handleHideSwipe} onTouchMove={handleHideSwipe}>
          <Slider {...settings}>
            {filteredDesigns.map((design, index) => (
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
                      className={design.isReserved ? 'demo-button disabled-button' : 'demo-button'}
                      disabled={design.isReserved}
                    >
                      Voir&nbsp;la&nbsp;démo&nbsp;<FontAwesomeIcon icon={faEye} />
                    </button>

                    <button 
                      onClick={() => { if (!design.isReserved) window.location.href = design.reserveLink; }}
                      className={design.isReserved ? 'reserve-button disabled-button' : 'reserve-button'}
                      disabled={design.isReserved}
                    >
                      {design.isReserved ? 'Déjà réservé' : 'Réserver\u00A0ce\u00A0design'}&nbsp;<FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarouselPremium;
