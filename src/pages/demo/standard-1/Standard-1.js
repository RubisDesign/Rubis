import React, { useEffect, useState, useRef } from "react";
import Navbar from "./standard-1-component/Navbar";
import Home from "./standard-1-component/Home";
import Services from "./standard-1-component/Services";
import About from "./standard-1-component/About";
import Contact from "./standard-1-component/Contact";
import Presentation from "./standard-1-component/Presentation";
import Stats from "./standard-1-component/Stats";
import Testimonials from "./standard-1-component/Testimonials";
import ScrollToTop from "./standard-1-component/ScrollToTop";
import '../standard-1/standard-1.scss';

function Standard1() {
  const servicesRef = useRef(null);
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollTop > windowHeight * 0.35) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className="standard-1">
      <Navbar />
      <Home isScrolled={isScrolled} scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <div ref={servicesRef}>
        <About />
      </div>
      <Presentation />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default Standard1;
