import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import transformation1 from '../premium-4-images/before-after-02.jpg';
import transformation2 from '../premium-4-images/before-after-03.jpg';
import transformation3 from '../premium-4-images/before-after-04.jpg';
import transformation4 from '../premium-4-images/before-after-05.jpg';
import transformation5 from '../premium-4-images/before-after-07.jpg';

const transformations = [
  {
    name: 'Antoine',
    image: transformation5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.',
  },
  {
    name: 'Nathalie',
    image: transformation2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.',
  },
  {
    name: 'Laura',
    image: transformation3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.',
  },
  {
    name: 'Dylan',
    image: transformation4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.',
  },
  {
    name: 'Sam',
    image: transformation1, // Remplacez par le chemin correct de l'image
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut eiusmod tempor.',
  },
];

const Transformation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Nombre de cartes visibles à la fois
    slidesToScroll: 1,
    autoplay: true, // Active le défilement automatique
    autoplaySpeed: 3000, // Durée d'affichage de chaque slide en millisecondes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="transformation">
      <h2 className="transformation__subtitle">Avis clients</h2>
      <p className="transformation__title">
        <span>Vos incroyables</span>
        <br />
        Transformations
      </p>
      <Slider {...settings} className="transformation__carousel">
        {transformations.map((person, index) => (
          <div key={index} className="transformation__card">
            <img src={person.image} alt={person.name} className="transformation__image" />
            <p className="transformation__text">{person.text}</p>
            <h3 className="transformation__name">{person.name}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Transformation;
