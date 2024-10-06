import React from "react";
import insta1 from '../premium-1-images/insta-1.jpg';
import insta2 from '../premium-1-images/insta-2.jpg';
import insta3 from '../premium-1-images/insta-3.jpg';

const servicesData = [
  {
    title: "Séance en Groupe",
    image: insta1,
    description: "Des séances de groupe dynamiques pour s'entraider et se motiver.",
    price: "25€"
  },
  {
    title: "Séance Individuelle",
    image: insta3,
    description: "Des séances adaptées à vos besoins avec un suivi personnalisé.",
    price: "50€"
  },
  {
    title: "Programme Sportif",
    image: insta2,
    description: "Un plan nutritionnel sur mesure pour atteindre vos objectifs.",
    price: "100€"
  },
];

// Composant ServiceCard avec la prop scrollToContact
const ServiceCard = ({ title, image, description, price, scrollToContact }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p className="service-price">{price}</p>
    <p className="description">{description}</p>
    <button onClick={scrollToContact}>Réserver ce service</button>
  </div>
);

const Services = () => {

  // Fonction pour faire défiler jusqu'à la section de contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-section">
      <h2>Mes services</h2>
      <p className="sub-title">All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            price={service.price}
            description={service.description}
            scrollToContact={scrollToContact} // Passe la fonction comme prop
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
