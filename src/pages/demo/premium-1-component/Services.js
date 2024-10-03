import React from "react";
import insta1 from '../premium-1-images/insta-1.jpg';
import insta2 from '../premium-1-images/insta-2.jpg';
import insta3 from '../premium-1-images/insta-3.jpg';

const servicesData = [
  {
    title: "Séance Individuelle",
    image: insta3,
    description: "Des séances adaptées à vos besoins avec un suivi personnalisé.",
    price: "50€"
  },
  {
    title: "Séance en Groupe",
    image: insta1,
    description: "Des séances de groupe dynamiques pour s'entraider et se motiver.",
    price: "25€"
  },
  {
    title: "Programme Sportif",
    image: insta2,
    description: "Un plan nutritionnel sur mesure pour atteindre vos objectifs.",
    price: "100€"
  },
];

const ServiceCard = ({ title, image, description, price }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="service-price">{price}</p> {/* Ajout du prix ici */}
    <button>Réserver ce service</button>
  </div>
);

const Services = () => {
  return (
    <section className="services-section">
      <h2>Mes services</h2>
      <p>All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
            price={service.price} // Passer le prix ici
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
