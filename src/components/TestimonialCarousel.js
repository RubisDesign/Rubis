import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Jean Dupont",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Sophie Martin",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Une expérience exceptionnelle du début à la fin. Merci pour votre professionnalisme !"
    },
    {
        logo: "images/malt-logo.png",
        photo: "images/vert.jpg",
        name: "Patoche",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Sophie Martin",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Une expérience exceptionnelle du début à la fin. Merci pour votre professionnalisme !"
    },
    {
        logo: "images/malt-logo.png",
        photo: "images/vert.jpg",
        name: "Patoche",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Jean Dupont",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Sophie Martin",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Une expérience exceptionnelle du début à la fin. Merci pour votre professionnalisme !"
    },
    {
        logo: "images/malt-logo.png",
        photo: "images/vert.jpg",
        name: "Patoche",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Sophie Martin",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Une expérience exceptionnelle du début à la fin. Merci pour votre professionnalisme !"
    },
    {
        logo: "images/malt-logo.png",
        photo: "images/vert.jpg",
        name: "Patoche",
        date: "Le 14 Septembre 2024",
        stars: "★★★★☆",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    }
];

const TestimonialCarousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        beforeChange: (current, next) => {
            if (sliderRef.current) {
                const currentSlide = sliderRef.current.innerSlider.list.querySelectorAll('.testimonial');
                currentSlide.forEach((slide, index) => {
                    slide.setAttribute('aria-hidden', index !== next);
                });
            }
        }
    };

    return (
        <Slider {...settings} className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                    <div className="google-logo">
                        <img src={testimonial.logo} alt="Avis Google" />
                    </div>
                    <div className="client-photo">
                        <img src={testimonial.photo} alt={`Client ${index + 1}`} />
                    </div>
                    <h3 className="client-name">{testimonial.name}</h3>
                    <p className="date">{testimonial.date}</p>
                    <div className="stars">{testimonial.stars}</div>
                    <p className="comment">"{testimonial.comment}"</p>
                </div>
            ))}
        </Slider>
    );
};

export default TestimonialCarousel;
