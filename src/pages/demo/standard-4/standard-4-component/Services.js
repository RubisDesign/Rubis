import React from "react";

const Services = () => {
  const serviceList = [
    {
      name: "Coaching en Groupe",
      price: "25€",
      description: "Get one-on-one training sessions tailored to your fitness goals.",
      cta: "Réserver ce service"
    },
    {
      name: "Coaching Individuel",
      price: "50€",
      description: "Relax and strengthen your body with our expert-led yoga classes.",
      cta: "Réserver ce service"
    },
    {
      name: "Programme en Ligne",
      price: "100€",
      description: "Receive personalized nutrition advice to achieve your health goals.",
      cta: "Réserver ce service"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services__title">
        <div className="line"></div>
          <h2>Mes Services</h2>
        <div className="line"></div>
      </div>
      <div className="services__container">
        {serviceList.map((service, index) => (
          <div className="services__card" key={index}>
            <h3 className="services__name">{service.name}</h3>
            <p className="services__price">{service.price}</p>
            <p className="services__description">{service.description}</p>
            <button className="services__cta">{service.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
