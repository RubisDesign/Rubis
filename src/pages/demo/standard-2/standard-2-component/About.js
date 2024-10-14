import React from 'react';
import coachImage from '../standard-2-images/about-chloe.jpg'; 
const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>À propos de moi</h2>
                    <p>
                        Je suis coach sportive et mon but est de vous aider à atteindre vos objectifs de fitness et de bien-être.
                        Avec des années d'expérience, je propose des programmes personnalisés qui incluent l'entraînement physique, 
                        la nutrition et la motivation.<br></br> <br></br> Mon approche est axée sur le développement de la force, la flexibilité et la 
                        confiance en soi, pour que vous puissiez devenir la meilleure version de vous-même.
                    </p>
                </div>
                <div className="about-image">
                    <img src={coachImage} alt="Coach" />
                </div>
            </div>
        </section>
    );
};

export default About;
