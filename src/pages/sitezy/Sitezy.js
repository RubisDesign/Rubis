import React from 'react';
import '../sitezy/sitezy.scss';
import Navbar from './sitezy-components/Navbar';
import Header from './sitezy-components/Header';
import ReviewsSummary from './sitezy-components/ReviewsSummary';
import Presentation from './sitezy-components/Presentation';
import ProgressBarSection from './sitezy-components/Together';
import CarouselPremium from './sitezy-components/CarouselPremium';
import Pricing from './sitezy-components/Pricing';
import Testimonials from './sitezy-components/Testimonials';
import Hausse from './sitezy-components/Hausse';
import Last from './sitezy-components/Last';
import Footer from './sitezy-components/Footer';


const Sitezy = () => {
  
  return (
    <div id="sitezy">

        <Navbar />

        <Header />

        <ReviewsSummary />

        <Presentation />

        <ProgressBarSection />

        <CarouselPremium />

        <Pricing />

        <Testimonials />

        <Hausse />

        <Last />

        <Footer />

    </div>
  );
};

export default Sitezy;
  