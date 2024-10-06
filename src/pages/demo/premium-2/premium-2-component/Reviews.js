import React, { useState } from "react";
import coach from '../premium-2-images/coach.png';
import avis1 from '../premium-2-images/avis1.jpg';
import avis2 from '../premium-2-images/avis2.jpg';
import avis3 from '../premium-2-images/avis3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    text: "C'est un super service, je le recommande vivement !",
    author: "Jeanne",
    img: avis1,
  },
  {
    id: 2,
    text: "Excellent produit, vraiment satisfait de la qualité.",
    author: "Baptiste",
    img: avis2,
  },
  {
    id: 3,
    text: "L'expérience a été formidable, j'en suis ravi.",
    author: "Elsa",
    img: avis3,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="reviews">
      <div className="image-container">
        <img
          src={coach}
          alt="Coach"
        />
      </div>
      <div className="carousel-container">
        <p className="reviews-subtitle">Ayez confiance en mes services</p>
          <h2 className="reviews-title">
            Les avis de <span>mes clients</span>
          </h2>
        <div className="testimonial">
          <div className="quote">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <p>{testimonials[currentIndex].text}</p>
          <div className="author">
            <h4>{testimonials[currentIndex].author}</h4>
            <img 
              src={testimonials[currentIndex].img} 
              alt={testimonials[currentIndex].author} 
              className="testimonial-img" 
            />
          </div>
        </div>
        <div className="carousel-controls">
          <button onClick={prevTestimonial}>Précédent</button>
          <button onClick={nextTestimonial}>Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
