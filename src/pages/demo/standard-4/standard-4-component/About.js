import React from "react";
import aboutImage from "../standard-4-images/mb-coach.png"; // Assurez-vous de remplacer par le chemin correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__image">
        <img src={aboutImage} alt="About" />
      </div>
      <div className="about__content">
        <div className="about__title">
          <div className="line"></div>
            <h2>À propos</h2>
          <div className="line"></div>
        </div>
        <p>
          We are a team of dedicated professionals committed to delivering top-quality products and services. Our journey started with a passion for excellence, and over the years, we have grown to become a trusted name in the industry. Discover more about our story, values, and the people behind our success.
        </p>
      </div>
    </section>
  );
};

export default About;
