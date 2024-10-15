import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__left">
        <div className="contact__title">
          <div className="line"></div>
            <h2>Me contacter</h2>
          <div className="line"></div>
        </div>
        <p>
          Que vous cherchiez à améliorer votre condition physique, à atteindre
          des objectifs de perte de poids, ou à obtenir des conseils
          personnalisés, nos coachs sont là pour vous accompagner. N'hésitez pas
          à nous contacter pour en savoir plus sur nos services et comment nous
          pouvons vous aider à atteindre vos objectifs.
        </p>
      </div>
      <div className="contact__right">
        <div className="contact__item">
          <FaPhone className="contact__icon" />
          <span>06 07 08 09 10</span>
        </div>
        <div className="contact__item">
          <FaEnvelope className="contact__icon" />
          <span>contact@mb-fit.fr</span>
        </div>
        <div className="contact__socials">
          <a href="https://facebook.com/coach-sportif" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/coach_sportif" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@coach.sportif" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
