import React from 'react';
import coachImage from '../standard-2-images/happy.jpg'; 

const Header = () => {
    return (
        <header id='header' className="header">
            <div className="header-content">
                <div className='img__container'>
                    <img src={coachImage} alt="Coach" className="header-image" />
                </div> 
                <div className="header-text">
                    <h1 className="header-title">Bienvenue&nbsp;!</h1>
                    <p className="header-subtitle">Je suis Chloé, je suis coach sportive et je vous aide à vous sentir mieux dans votre corps.</p>
                    <a href="#about" className="header-btn">En savoir plus</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
