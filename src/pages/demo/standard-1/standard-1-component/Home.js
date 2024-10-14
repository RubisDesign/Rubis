import React from 'react';
import Lottie from 'react-lottie';
import scrollAnimation from '../standard-1-animation/scroll.json';
import logo from '../standard-1-images/logo-muscu.png';

const Home = ({ isScrolled, scrollToServices }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div id='home' className="home">
      <div className="home__content">
        <div className='home__logo fade-out' style={{ opacity: isScrolled ? 0 : 1 }}>
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="home__title">Atteignez la meilleure version de vous-même</h1>
        <div className="home__animation" onClick={scrollToServices} style={{ cursor: 'pointer' }}> {/* Ajout de l'événement onClick */}
          <Lottie options={defaultOptions} height={70} width={70} />
        </div>
      </div>
    </div>
  );
};

export default Home;
