import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Coaching Personnel',
            description: 'Obtenez un accompagnement sur mesure pour atteindre vos objectifs de fitness et de bien-être.',
            icon: '🏋️', // Vous pouvez utiliser des icônes ou des images ici
            price: '50€',
        },
        {
            title: 'Suivi Nutritionnel',
            description: 'Des conseils nutritionnels personnalisés pour optimiser votre santé et votre performance.',
            icon: '🥗',
            price: '40€',
        },
        {
            title: 'Programme en Ligne',
            description: 'Des programmes d\'entraînement adaptés à votre niveau et à vos objectifs spécifiques.',
            icon: '🏃‍♀️',
            price: '30€',
        },
    ];

    return (
        <section id="services" className="services">
            <h2 className="services-title">Mes Services</h2>
            <div className="services-cards">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-price">{service.price}</p>
                        <p className="service-card-description">{service.description}</p>

                        <button className="service-card-btn">Réserver ce service</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
