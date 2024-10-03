import React, { useState } from 'react';
import avatar1 from '../premium-1-images/avatar1.webp';
import avatar2 from '../premium-1-images/avatar2.webp';
import avatar3 from '../premium-1-images/insta-2.jpg';

const testimonials = [
    {
        name: "Jean Dupont",
        date: "12 Janvier 2023",
        testimonial: "Un service exceptionnel ! Je suis très satisfait.",
        photo: avatar1
    },
    {
        name: "Marie Curie",
        date: "5 Février 2023",
        testimonial: "Une expérience incroyable, je recommande à 100%.",
        photo: avatar2
    },
    {
        name: "Louisa Pasteurina",
        date: "18 Mars 2023",
        testimonial: "Le meilleur service que j'ai jamais reçu.",
        photo: avatar3
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const { name, date, testimonial, photo } = testimonials[currentIndex];

    return (
        <div className="testimonials-carousel">
            <h2>TÉMOIGNAGES</h2>
            <div className="testimonial-card">
                <img src={photo} alt={`${name}`} className="testimonial-photo" />
                <div className="testimonial-content">
                    <h3>{name}</h3>
                    <p className="date">{date}</p>
                    <p className="testimonial">{testimonial}</p>
                </div>
                <div className="dots carousel-controls">
                    <button className="arrow" onClick={prevTestimonial}>&lt;</button>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                     <button className="arrow" onClick={nextTestimonial}>&gt;</button>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonial;
