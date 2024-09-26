import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCarousel from './components/TestimonialCarousel';
import ReviewsSummary from './components/ReviewsSummary';
import CarouselStandard from './components/CarouselStandard';
import CarouselPremium from './components/CarouselPremium';
import TeamSupport from './components/TeamSupport';
import ProgressBarSection from './components/ProgressBarSection';
import StarBackground from './components/StarBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant React
import { faCircleDot, faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons'; // Import des icônes spécifiques



function App() {
  return (
    <div className="App">
      <header id='accueil' className="App-header">
        <Navbar />
        
        <div className='header-container'>
          <div className='video-container'>
          <StarBackground />
          <div class="d-flex flex-column justify-content-center w-100 h-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
            </div>
          </div>
        </div>

          <div class="wrapper">
              <h1 class="content">
                  Créez votre siteweb <spanpro>professionnel</spanpro> pour
                  <ol>
                      <li><span>Améliorer votre visibilité</span></li>
                      <li><span>Fidéliser votre clientèle</span></li>
                      <li><span>Renforcer votre branding</span></li>
                      <li><span>Faciliter vos échanges</span></li>
                      <li><span>Diversifier vos offres</span></li>
                      <li><span>Augmenter vos ventes</span></li>
                  </ol>
              </h1>
          </div>
        </div>
      </header>

      <ProgressBarSection />
      
      <section id='designs'>
      <div class="designs-title">
          <h2>Découvrez votre prochain design</h2>
        </div>
        <section id='span-divider'>
          <span></span>
        </section>
        
        <section id='standard'>
          <CarouselStandard />
        </section>
        <section id='premium'>
          <CarouselPremium />
        </section>
      </section>
      
      <section id='team-support'>

        <TeamSupport />
        <ReviewsSummary />

      </section>
      
     

      <section class="triangle"></section>

      <div id='tarifs' class="pricing-table">
        <div class="details">
          <h2>Choisissez votre offre</h2>
          <p>Nos offres sont claires, sans engagement et variées afin de s'adapter aux besoins de votre entreprise.</p>
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
                <div class="name">Design Standard ou Premium</div>
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
              <b>1199€</b>
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
      <section id='temoignages'>
        <div className='title'>
        <h2>Si vous hésitez encore</h2>
        <p>Laissez-vous convaincre par les avis de nos anciens clients</p>
        </div>

        <TestimonialCarousel />
      </section>

      <Footer />
    </div>
  );
}

export default App;
