import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('image-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id='header' className='header'>
      <div className="container">
        <div className="left-section">
          <h1 data-aos="fade-right" data-aos-delay="500" >Léa Hernandez</h1>
          <p data-aos="fade-right" data-aos-delay="500" >
            Je suis coach sportive depuis 6&nbsp;ans maintenant. Mon objectif est de vous aider à vous transformer physiquement sans créer de frustration !
          </p>
          <button className="cta-button" onClick={scrollToGallery} data-aos="fade-right" data-aos-delay="500">Découvrir</button>
        </div>

        <div className="right-section" data-aos="flip-left" data-aos-delay="500">
          <div className="image-box">
            <div className='icons'>
              <a href='https://tiktok.com' target='_blank' rel="noopener noreferrer">
                <i><FontAwesomeIcon icon={faTiktok} /></i>
              </a>
              <a href='https://instagram.com' target='_blank' rel="noopener noreferrer">
                <i><FontAwesomeIcon icon={faInstagram} /></i>
              </a>
              <a href='https://facebook.com' target='_blank' rel="noopener noreferrer">
                <i><FontAwesomeIcon icon={faFacebookF} /></i>
              </a>
            </div>
            <p>WORK HARD, REST HARDER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
