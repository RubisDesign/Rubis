import React from 'react';

const servicesData = [
  {
    name: 'Coaching en groupe',
    price: '25€',
    description: 'Obtenez des séances de coaching personnalisé pour atteindre vos objectifs de forme physique et bien-être.',
    cta: 'En savoir plus',
  },
  {
    name: 'Coaching Individuel',
    price: '50€',
    description: 'Des plans de nutrition adaptés pour vous aider à manger sainement et équilibré, adaptés à vos besoins.',
    cta: 'En savoir plus',
  },
  {
    name: 'Programme en Ligne',
    price: '100€',
    description: 'Participez à des séances d’entraînement en groupe pour rester motivé et atteindre vos objectifs.',
    cta: 'En savoir plus',
  },
];

const Services = () => {
  return (
    <section id='services' className="services">
      <h2 className="services__title">Mes Services</h2>
      <div className="services__cards">
        {servicesData.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__card-title">{service.name}</h3>
            <p className="services__card-price">{service.price}</p>
            <p className="services__card-description">{service.description}</p>
            <button className="services__card-cta">{service.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
