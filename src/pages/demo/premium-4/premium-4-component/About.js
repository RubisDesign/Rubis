import React from 'react';
import aboutPhoto from '../premium-4-images/about.png';

const About = () => {
  return (
    <section className="aboutme">
      <div className="aboutme__card">
        <div className="aboutme__left">
          <div className="aboutme__image-container">
            <img src={aboutPhoto} alt="Profile" className="aboutme__image" />
          </div>
          <h2 className="aboutme__subtitle">Votre Coach</h2>
        </div>

        <div className="aboutme__right">
          <h2 className="aboutme__title">À propos</h2>
          <p className="aboutme__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula id nulla vehicula auctor. Curabitur in fermentum lacus. Aliquam erat volutpat. Vivamus in fermentum dolor, non ullamcorper lorem.
            <br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula id nulla vehicula auctor. Curabitur in fermentum lacus. Aliquam erat volutpat. Vivamus in fermentum dolor, non ullamcorper lorem.
            <br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula id nulla vehicula auctor. Curabitur in fermentum lacus. Aliquam erat volutpat. Vivamus in fermentum dolor, non ullamcorper lorem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
