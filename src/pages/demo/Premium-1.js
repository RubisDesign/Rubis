import React from 'react';
import '../demo/premium-1.scss';
import lea1 from './premium-1-images/lea-1.jpg';
import lea2 from './premium-1-images/lea-2.jpg';
import lea3 from './premium-1-images/lea-3.jpg';
import lea4 from './premium-1-images/lea-4.jpg';
import cardio from './premium-1-images/cardio.jpg';
import force from './premium-1-images/force.jpg';
import endurance from './premium-1-images/endurance.jpg';
import souplesse from './premium-1-images/souplesse.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import AnimatedNumber from '../demo/premium-1-component/AnimatedNumber';
import InstagramCarousel from '../demo/premium-1-component/InstagramCarousel';
import ScrollToTop from '../demo/premium-1-component/ScrollToTop';
import ExpertiseSection from './premium-1-component/ExpertiseSection';
import Testimonial from './premium-1-component/Testimonial';
import Services from './premium-1-component/Services';
import Navbar from './premium-1-component/Navbar';

const Premium1 = () => {
  
  return (
    <div id="premium-1">

      {/* NABVAR */}
      < Navbar />

      {/* HEADER  */}
      <section id='header'>
        <div className="container">

          <div className="left-section">
            <h1>Léa Hernandez</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu at dui efficitur vestibulum.
              Nulla facilisi. Ut eget tincidunt quam. Sed fringilla quam ut ante suscipit, at condimentum elit consequat.
            </p>
            <button className="cta-button">Découvrir</button>
          </div>

          <div className="right-section">
            <div className="image-box">
              <div className='icons'>
                <a href='https://tiktok.com' target='blank'><i><FontAwesomeIcon icon={faTiktok} /></i></a>
                <a href='https://instagram.com' target='blank'><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href='https://facebook.com' target='blank'><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
              </div>
              <p>WORK HARD, REST HARDER</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERY */}
      <section className="image-gallery">
        <div className="image-item">
          <div className="overlay">MOTIVATION</div>
          <img src={lea1} alt="1" />
        </div>
        <div className="image-item">
        <div className="overlay">NUTRITION</div>
          <img src={lea2}  alt="2" />
        </div>
        <div className="image-item">
        <div className="overlay">CONSEILS</div>
          <img src={lea3}  alt="3" />
        </div>
        <div className="image-item">
        <div className="overlay">PREPARATION</div>
          <img src={lea4}  alt="4" />
        </div>
      </section>

      {/* PARALLAX */}
      <section id="stats-section" className="parallax-section">
        <div className="stats-container">
          <div className="stat-item">
            <AnimatedNumber number={65} />
            <p>Clients Transformés</p>
          </div>
          <div className="stat-item">
            <AnimatedNumber number={3} />
            <p>Années d'Expérience</p>
          </div>
          <div className="stat-item">
            <AnimatedNumber number={300} />
            <p>Heures de Cours Collectifs</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <ExpertiseSection />

    {/* SKILLS */}
    <section id="skills-gallery">
      <div className="skills-container">
        <div className="skills-item">
          <img src={endurance} alt="1" />
          <h3>ENDURANCE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu at dui efficitur vestibulum.</p>
        </div>
        <div className="skills-item">
          <img src={force} alt="2" />
          <h3>FORCE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu at dui efficitur vestibulum.</p>
        </div>
        <div className="skills-item">
          <img src={cardio} alt="3" />
          <h3>CARDIO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu at dui efficitur vestibulum.</p>
        </div>
        <div className="skills-item">
          <img src={souplesse} alt="4" />
          <h3>SOUPLESSE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut arcu at dui efficitur vestibulum.</p>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <Services />

    {/* TESTIMONIAL */}
    <Testimonial />

    {/* FORM */}
    <section id="contact-section">
      <div className="container">
        <div className="left-section">
          <h2>JE SUIS À VOTRE ÉCOUTE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque. 
            Donec sagittis adipiscing elit.
          </p>
          <address>
            251 Purple Sunset Avenue<br />
            Brooklyn, BXY 92101<br />
            <a href="mailto:powerlift@example.com">powerlift@example.com</a>
          </address>
        </div>
        <div className="right-section">
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Votre Prénom</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Contenu de votre message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Envoyer votre message</button>
          </form>
        </div>
      </div>
    </section>

    {/* INSTAGRAM CAROUSSEL */}
    <InstagramCarousel />

    {/* SCROLL-TO-TOP */}
    <ScrollToTop />

    </div>
  );
};

export default Premium1;
  