import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Juste Moi",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "Jonathan et son équipe gère notre SEO, très bon résultats et très bonne communication je recommande"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Yohann Pejon (Yohann)",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Merci à Jonathan pour ce service incroyablement rapide. À partir de maintenant je passe par vous pour mon site."
    },
    {
        logo: "/images/google-logo.png",
        photo: "images/vert.jpg",
        name: "Emma Pourcel",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "J'ai réalisé une immersion professionnelle d'une semaine chez Simplement. C'était une expérience géniale. Jonathan est très professionnel, passionné par ce qu'il fait, dynamique, arrangeant et généreux! Merci encore !!"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "Corneliu VOROSAN",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "L'équipe est au top, toujours là a rendre service. Merci pour tous ces conseils marketing et les avancées web fait sur mon site. Je recommande."
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Emy Vaillancourt",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "Respect du délai et du budget, pleins de conseils business. Je recommande leur expertise pour les lancements de projets"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Micro Crèche ZICRECHE",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "Un excellent travail! Nous avons fait appel à leur service pour améliorer notre site internet, nous sommes entièrement satisfait du résultat. Je recommande leur service"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/marron.jpg",
        name: "IRH By ACT-ON GROUP",
        date: "Le 10 Août 2024",
        stars: "★★★★★",
        comment: "Nous avons fait appel à l'agence Simplement pour la création de 2 sites internet et nous sommes très satisfaits du résultat ! Équipe au top, réactive, flexible et à l'écoute. Un vrai bonheur de travailler avec cette agence ! Les tarifs proposés sont plus que compétitifs et le service après-vente est parfait !"
    },
    {
        logo: "/images/google-logo.png",
        photo: "/images/vert.jpg",
        name: "Patoche",
        date: "Le 14 Septembre 2024",
        stars: "★★★★★",
        comment: "Service impeccable, très satisfait du résultat final. Je recommande vivement !"
    }
];

const MAX_LENGTH = 140; // Limite de caractères pour les commentaires longs

const Testimonials = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
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
                breakpoint: 1150,
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

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleReadMore = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <section className='testimonials'>
            <div className='testimonials-title'>
                <p>EXCELLENT</p>
                <div className='stars-container-top'>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                    <div className='stars'></div>
                </div>
                <img src="/images/google-text.png" alt="Logo Google" className="logo-testimonials" />
            </div>

            <Slider {...settings} className="testimonial-carousel">
                {testimonials.map((testimonial, index) => {
                    const isLongComment = testimonial.comment.length > MAX_LENGTH;
                    const isExpanded = expandedIndex === index;

                    return (
                        <div className="testimonial-content" key={index}>
                            <div className="google-logo">
                                <img src={testimonial.logo} alt="Avis Google" />
                            </div>
                            <div className='reviews-header'>
                                <div className='profile-img'>
                                    <img src={testimonial.photo} alt={`Client ${index + 1}`} />
                                </div>
                                <div className='profile-details'>
                                    <h3 className='client-name'>{testimonial.name}</h3>
                                    <p className='date'>{testimonial.date}</p>
                                </div>
                            </div>
                            <div className='stars-container'>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className='stars'></div>
                                <div className="verified">
                                    <div className="tooltip">TrustIndex vérifie que la source originale de l'avis est Google.</div>
                                </div>
                            </div>
                            <div className='comment-container'>
                                <p className={`comment ${isExpanded ? 'expanded' : ''}`}>
                                    {isExpanded ? testimonial.comment : 
                                    (isLongComment ? `${testimonial.comment.substring(0, MAX_LENGTH)}...` : testimonial.comment)}
                                </p>
                            </div>
                            <div className='read-more-container'>
                                {isLongComment && (
                                    <button className='read-more' onClick={() => handleReadMore(index)}>
                                        {isExpanded ? 'Lire moins' : 'Lire la suite'}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default Testimonials;
