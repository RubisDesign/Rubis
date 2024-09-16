import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
        <div className='header-container'>
          <div className='video-container'>
            <video 
              src='/images/video2.mp4'
              autoPlay      /* Lance la vidéo automatiquement à l'ouverture de la page */
              loop          /* Rejoue la vidéo en boucle */
              muted          /* Démarre la vidéo sans son */
            >
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
          </div>
          <div class="wrapper">
        <h1 class="content">
            Créer votre siteweb <strong>professionnel</strong> pour
            <ol>
                <li><span>Améliorer votre visibilité</span></li>
                <li><span>Fidélisez votre clientèle</span></li>
                <li><span>Renforcer votre branding</span></li>
                <li><span>Faciliter vos échanges</span></li>
                <li><span>Toucher une audience plus large</span></li>
                <li><span>Augmenter vos ventes</span></li>
            </ol>
        </h1>
    </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
