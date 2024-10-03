import React from 'react';
import Slider from 'react-slick';
import insta1 from '../premium-1-images/insta-1.jpg';
import insta2 from '../premium-1-images/insta-2.jpg';
import insta3 from '../premium-1-images/insta-3.jpg';
import insta4 from '../premium-1-images/insta-4.jpg';
import insta5 from '../premium-1-images/insta-5.jpg';
import insta6 from '../premium-1-images/insta-6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';


const InstagramCarousel = () => {
  const images = [
    { src: insta1, alt: 'Instagram 1' },
    { src: insta2, alt: 'Instagram 2' },
    { src: insta3, alt: 'Instagram 3' },
    { src: insta4, alt: 'Instagram 4' },
    { src: insta5, alt: 'Instagram 5' },
    { src: insta6, alt: 'Instagram 6' },
  ];

  const settings = {
    autoplay: true,
    dots: false, // Pour afficher les indicateurs sous le carousel
    infinite: true, // Carousel infini
    autoplaySpeed: 3000, 
    speed: 500, // Durée de transition
    slidesToShow: 4, // Nombre d'images visibles
    slidesToScroll: 1, // Nombre d'images à faire défiler à chaque fois
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans plus petits
        settings: {
          slidesToShow: 1, // Une seule image sur les petits écrans
        },
      },
    ],
  };

  return (
    <section id="instagram-carousel">
      <a href='https://instagram.com'><i><FontAwesomeIcon icon={faSquareInstagram} /></i>@lea_hernandez</a>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='image-container'>
            <img
              src={image.src}
              alt={image.alt}
              className='carousel-image'
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} // Ajustement de la taille
            />
            <div className='icon-container'>
              <div className="hover-icon">
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InstagramCarousel;
