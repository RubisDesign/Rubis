import React, { useEffect, useRef } from 'react';
import mockupVideo from '../sitezy-images/sitezy7.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("La vidéo n'a pas pu se lancer automatiquement : ", error);
            });
        }
    }, []);

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__text">
                    <div className="tag">
                        Coachs sportifs uniquement
                    </div>
                    <h1>
                        <strong>Votre site web <br></br> en toute <span className="hand-drawn">simplicité</span></strong>
                    </h1>
                    <p className='header__subtitle'>Construisons <span>ensemble</span> votre site internet pour attirer de <span>nouveaux clients</span> et <span>exploser vos ventes</span>. Pour une fois, choisissez la <span>facilité !</span></p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Un seul paiement, pas d'abonnement, pas d'engagement</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Pas besoin de coder ou de créer son site soi-même</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} />&nbsp; Un tarif <u>vraiment</u> adapté aux indépendants</p>
                </div>
                <div className="header__image">
                    <video 
                        ref={videoRef}
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        src={mockupVideo} 
                        alt="Mockup de réalisation sur iMac" 
                    />
                </div>
            </div>
            <div className="header__chevron">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </header>
    );
};

export default Header;
