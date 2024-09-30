import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant React
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'; // Import des icônes spécifiques


const ReviewsSummary = () => {
    return (
        <div className="reviews-summary">
            <div className="review-item">
                <span className="stars">
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfStroke} /></i>
                </span>
                <span className="score">4.9/5</span>
                <p>
                    4.9 | 55 avis sur 
                    <img src="/images/google-text.png" alt="Logo Google" className="logo-reviews" />
                </p>
            </div>
            <div className="review-item">
                <span className="stars">
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                </span>
                <span className="score">5/5</span>
                <p>
                    5 | 29 avis sur
                    <img src="/images/malt-text.png" alt="Logo Malt" className="logo-reviews" />
                </p>
            </div>
            <div className="review-item">
                <p className="business-summary">+ de 100 entreprises ont déjà choisi Rubis Design</p>
                <button className="cta-button">Pourquoi pas vous ?</button>
            </div>
        </div>
    );
};

export default ReviewsSummary;
