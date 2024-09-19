import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCarousel from './components/TestimonialCarousel';
import ReviewsSummary from './components/ReviewsSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant React
import { faCircleDot, faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons'; // Import des icônes spécifiques



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
        <div className='header-container'>
          <div className='video-container'>
            <video 
              src='/images/video2.mp4'
              autoPlay      /* Lance la vidéo automatiquement à l'ouverture de la page */
              loop          /* Rejoue la vidéo en boucle */
              muted          /* Démarre la vidéo sans son */
            >
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
          </div>
          <div class="wrapper">
              <h1 class="content">
                  Créez votre siteweb <strong>professionnel</strong> pour
                  <ol>
                      <li><span>Améliorer votre visibilité</span></li>
                      <li><span>Fidéliser votre clientèle</span></li>
                      <li><span>Renforcer votre branding</span></li>
                      <li><span>Faciliter vos échanges</span></li>
                      <li><span>Toucher une audience plus large</span></li>
                      <li><span>Augmenter vos ventes</span></li>
                  </ol>
              </h1>
          </div>
        </div>
      </header>
      
      <section id='progress-bar-section'>
        <h2>Travaillons <span>ensemble</span> en seulement 3 étapes</h2>
        <div className='step step-1'>
          <div className='left'>
            <p>Première étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'><FontAwesomeIcon icon={faCircleCheck} /></div>
          <div className='right'>
            <p><span>✨&nbsp;Faîtes votre choix </span><br></br><br></br>
            Choisissez une offre et un design parmi ceux disponibles.</p>
          </div>
        </div>

        <div className='step step-2'>
          <div className='left'>
            <p>Deuxième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'><FontAwesomeIcon icon={faCircleDot} /></div>
          <div className='right'>
            <p><span>📤&nbsp;Partagez-nous votre contenu </span><br></br><br></br>
            Transmettez-nous vos resources utiles (textes, images, témoignages...) pour que nous puissions les intégrer à votre site.</p>
          </div>
        </div>

        <div className='step step-3'>
          <div className='left'>
            <p>Troisième étape</p>
          </div>
          <div className='progress-bar'></div>
          <div className='dot'><FontAwesomeIcon icon={faCircleDot} /></div>
          <div className='right'>
            <p><span>🤝🏻&nbsp;Occupons-nous des détails </span><br></br><br></br>
            Après l'intégration, nous personnalisons et peaufinons ensemble les détails de votre site internet pour qu'il vous convienne à 100%.</p>
          </div>
        </div>
        <h3>🎉&nbsp;Votre site est en ligne&nbsp;!&nbsp;🎉</h3>
      </section>

      <section class="triangle"></section>

      <div class="pricing-table">
        <div class="details">
          <h2>Choisissez votre offre</h2>
          <p>Nos offres sont claires, sans engagement et variées afin de s'adapter à votre entreprise.</p>
        </div>
        <div class="grid">
          <div class="box standard">
            <div class="title">Standard</div>
            <div class="price">
              <b>299€</b>
            </div>
            <div class="features">
              <div class="container">
                <div class="name">Design Standard</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Support technique à vie</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Certificat SSL (https)</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Responsive → adapté aux mobiles</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
            </div>
            <div class="button">
              <button>Découvrir</button>
            </div>
          </div>

          <div class="box premium">
            <div class="title">Premium</div>
            <div class="price">
              <b>499€</b>
              <span>paiement 3 à 4 fois sans frais</span>
            </div>
            <div class="features">
              <div class="container">
                <div class="name">Design Premium</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Support technique à vie</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Certificat SSL (https)</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Responsive → adapté aux mobiles</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Nom de domaine offert pendant 1 an</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">SEO & Référencement optimisé</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Modifications offertes pendant 3 mois</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
            </div>
            <div class="button">
              <button>Découvrir</button>
            </div>
          </div>

          <div class="box sur-mesure">
            <div class="title">Sur-Mesure</div>
            <div class="price">
              <b>999€</b>
              <span>paiement 3 à 4 fois sans frais</span>
            </div>
            <div class="features">
              <div class="container">
                <div class="name">Design Sur-Mesure</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Support technique à vie</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Certificat SSL (https)</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Responsive → adapté aux mobiles</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Nom de domaine offert pendant 5 an</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">SEO & Référencement optimisé</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Modifications offertes pendant 1 an</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
              <div class="container">
                <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                <div><FontAwesomeIcon icon={faCheck} /></div>
              </div>
            </div>
            <div class="button">
              <button>Découvrir</button>
            </div>
          </div>
        </div>
      </div>
      <section id='proof'>
        <div className='title'>
        <h2>Si vous hésitez encore</h2>
        <p>Laissez-vous convaincre par les avis de nos anciens clients</p>
        </div>
        
        <ReviewsSummary />
        <TestimonialCarousel />

      
      </section>
      
      

      <Footer />
    </div>
  );
}

export default App;
