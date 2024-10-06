import React from 'react';
import solo from '../premium-2-images/solo.png';
import duo from '../premium-2-images/duo.png';
import enligne from '../premium-2-images/en-ligne.png';

const Services = () => {
  const services = [
    {
        id: 2,
        title: 'Coaching en Groupe',
        price: '25€',
        description: 'Programmes adaptés pour vous aider à retrouver votre forme physique. Programmes adaptés pour vous aider à retrouver votre forme physique.',
        background: duo,
      },
    {
      id: 1,
      title: 'Coaching Individuel',
      price: '50€',
      description: 'Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux.Suivi et séances adaptées à vos objectifs pour atteindre des résultats optimaux.',
      background: solo,
    },
    {
      id: 3,
      title: 'Programme en Ligne',
      price: '100€',
      description: 'Conseils sportifs personnalisés pour accompagner vos entraînements. Conseils sportifs personnalisés pour accompagner vos entraînements.',
      background: enligne,
    },
  ];

  return (
    <section id="services">
      <p className="services__subtitle">Atteignez vos objectifs</p>
      <h2 className="services__title">Découvrez <span>mes Services</span></h2>

      <div className="services__cards">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            style={{ backgroundImage: `url(${service.background})` }}
          >
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__price">{service.price}</p>
            <p className="service-card__description">{service.description}</p>
            <button className="service-card__cta">Réserver maintenant</button> {/* CTA button */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
