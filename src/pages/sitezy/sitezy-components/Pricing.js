import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import couronne from '../sitezy-images/couronne.png'

const Pricing = () => {
    return (

    <section id='pricing'>
          <div class="details">
            <h2>Choisissez votre offre</h2>
            <p>Nos offres sont claires, sans engagement et variées afin de s'adapter aux besoins de votre entreprise.</p>
          </div>
          <div class="grid">
            <div class="box standard">
              <div class="title">Standard</div>
              <div class="price">
                <b>299€</b>
                <span style={{opacity: '0'}}>paiement en 3 fois sans frais</span>
              </div>
              <div class="features">
                <div class="container">
                  <div class="name">Design Standard</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Hébergement offert à vie</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique 7j/7</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Nom de domaine offert la première année</div>
                  <div className='Xmark'><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div class="container">
                  <div class="name">SEO & Référencement optimisé</div>
                  <div className='Xmark'><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div class="container">
                  <div class="name">Modifications offertes pendant 3 mois</div>
                  <div className='Xmark'><FontAwesomeIcon icon={faXmark} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                  <div className='Xmark'><FontAwesomeIcon icon={faXmark} /></div>
                </div>
              </div>
              <div class="button">
                <button>Découvrir</button>
              </div>
            </div>

            <div class="box premium">
              <div class="title">Premium
                <img src={couronne} alt='Premium'></img>
              </div>
              <div class="price">
                <b>499€</b>
                <span>paiement en 3 fois sans frais</span>
              </div>
              <div class="features">
                <div class="container">
                  <div class="name">Design Standard ou Premium</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Hébergement offert à vie</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique 7j/7</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Nom de domaine offert pendant 1 an</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">SEO & Référencement optimisé</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Modifications offertes pendant 3 mois</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
              </div>
              <div class="button">
                <button>Découvrir</button>
              </div>
            </div>

            <div class="box sur-mesure">
              <div class="title">Sur-Mesure</div>
              <div class="price">
                <b>1199€</b>
                <span>paiement en 3 fois sans frais</span>
              </div>
              <div class="features">
                <div class="container">
                  <div class="name">Design Sur-Mesure</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Hébergement offert à vie</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique 7j/7</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Nom de domaine offert pendant 3 ans</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">SEO & Référencement optimisé</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Modifications offertes pendant 6 mois</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                  <div className='Check'><FontAwesomeIcon icon={faCheck} /></div>
                </div>
              </div>
              <div class="button">
                <button>Découvrir</button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Pricing;