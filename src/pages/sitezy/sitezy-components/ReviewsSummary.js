import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant React
import { faStar, faStarHalfStroke, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import des icônes spécifiques


const ReviewsSummary = () => {
    return (
        <div className="reviews-summary">
            <div className='reviews-container'>
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
                        4.9 | 155 avis sur 
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
                        5 | 79 avis sur
                        <img src="/images/malt-text.png" alt="Logo Malt" className="logo-reviews" />
                    </p>
                </div>
                <div className="review-item">
                    <p className="business-summary">
                        
                        + de 500 sites créés&nbsp;<FontAwesomeIcon icon={faGlobe} className="icon-globe" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSummary;
