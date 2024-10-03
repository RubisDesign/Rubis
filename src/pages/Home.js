import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ReviewsSummary from '../components/ReviewsSummary';
import CarouselStandard from '../components/CarouselStandard';
import CarouselPremium from '../components/CarouselPremium';
import TeamSupport from '../components/TeamSupport';
import ProgressBarSection from '../components/ProgressBarSection';
import StarBackground from '../components/StarBackground';
import Pricing from '../components/Pricing';

const Home = () => {

  const setInitialHeaderHeight = () => {
    const headerContainer = document.querySelector('.header-container');
    if (headerContainer) {
      const viewportHeight = window.innerHeight; 
      headerContainer.style.height = `${viewportHeight}px`; 
    }
  };

  useEffect(() => {
    setInitialHeaderHeight();
  }, []);

  return (
    <div className="App">
      <header id='accueil' className="App-header">
        <Navbar />
        <div className='header-container'>
          <div className='video-container'>
            <StarBackground />
            <div className="d-flex flex-column justify-content-center w-100 h-100">
              <div className="d-flex flex-column justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="wrapper">
            <h2 className="content">
              Créez votre siteweb <spanpro>professionnel</spanpro> pour
              <ol>
                <li><span>Améliorer votre visibilité</span></li>
                <li><span>Fidéliser votre clientèle</span></li>
                <li><span>Renforcer votre branding</span></li>
                <li><span>Faciliter vos échanges</span></li>
                <li><span>Diversifier vos offres</span></li>
                <li><span>Augmenter vos ventes</span></li>
              </ol>
            </h2>
          </div>
        </div>
      </header>
      <ProgressBarSection />
      <section id='designs'>
        <div className="designs-title">
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
      <section id="triangle"></section>

      <section id='tarifs' className='pricing-table'>
      <Pricing />
      </section>
      

      <section id='temoignages'>
        <div className='title'>
          <h2>Votre satisfaction est notre priorité</h2>
          <p>Découvrez les avis et retours d'expérience des coachs qui nous ont fait confiance</p>
        </div>
        <TestimonialCarousel />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
