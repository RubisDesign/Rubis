import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contactez-moi</h2>
            <div className="contact-info">
            
                    <p className="contact-item">
                        <ul className='social-links'>
                            <a href="tel:+33607080910"><i><FontAwesomeIcon icon={faPhone} /></i></a>
                        </ul>
                    <strong>Par téléphone</strong>
                    </p>
                    <p className="contact-item">
                        <ul className='social-links'>
                            <a href="mailto:contact@chloe-fit.fr" ><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
                        </ul>
                    <strong>Par mail</strong>
                    </p>


                    <p className="contact-item">
                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faFacebookF} /></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                <i><FontAwesomeIcon icon={faTiktok} /></i>
                                </a>
                            </li>
                        </ul>
                        <strong>Sur mes réseaux</strong>
                    </p>

            </div>
        </section>
    );
};

export default Contact;
