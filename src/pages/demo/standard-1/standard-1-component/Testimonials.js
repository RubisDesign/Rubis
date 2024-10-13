import React from 'react';
import Slider from 'react-slick';

const Testimonials = () => {
  const settings = {
    dots: true, // Ajoute des points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition
    slidesToShow: 1, // Nombre de slides à montrer en même temps
    slidesToScroll: 1, // Nombre de slides à faire défiler à la fois
    autoplay: true, // Lecture automatique
    autoplaySpeed: 5000, // Durée d'affichage de chaque slide
    arrows: false // Masquer les flèches
  };

  const testimonialsData = [
    {
      name: "Jean Dupont",
      message: "Grâce au coaching, j'ai pu atteindre mes objectifs plus rapidement que je ne l'avais imaginé. Une équipe formidable et des conseils précieux.",
    },
    {
      name: "Marie Dubois",
      message: "Le programme en ligne est parfait pour ceux qui veulent s'entraîner à leur rythme. Les conseils sont clairs et adaptés.",
    },
    {
      name: "Sophie Martin",
      message: "Les séances en groupe sont motivantes et dynamiques. J'adore la variété des exercices proposés.",
    }
  ];

  return (
    <section className="testimonials">
      <div className='testimonials__container'>
        <div className="testimonials__header">
          <h2 className="testimonials__subtitle">Avis Clients</h2>
          <h1 className="testimonials__title">Ce Que Nos Clients Disent</h1>
        </div>

        <div className="testimonials__carousel">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="testimonial__message">"{testimonial.message}"</p>
                <p className="testimonial__name">- {testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
