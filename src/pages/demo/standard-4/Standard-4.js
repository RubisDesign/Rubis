import React from 'react';
import '../standard-4/standard-4.scss';
import Navbar from './standard-4-component/Navbar';
import Header from './standard-4-component/Header';
import About from './standard-4-component/About';
import Services from './standard-4-component/Services';
import Transformation from './standard-4-component/Transformation';
import Contact from './standard-4-component/Contact';

const Standard4 = () => {
  return (
    <div className="standard-4">

      <Navbar />

      <Header />

      <About />

      <Services />

      <Transformation />

      <Contact />

    </div>
  );
};

export default Standard4;