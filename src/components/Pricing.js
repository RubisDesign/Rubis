import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 

const Pricing = () => {
    return (

    <div>
        <div class="details">
            <h2>Choisissez votre offre</h2>
            <p>Nos offres sont claires, sans engagement et variées afin de s'adapter aux besoins de votre entreprise.</p>
          </div>
          <div class="grid">
            <div class="box standard">
              <div class="title">Standard</div>
              <div class="price">
                <b>299€</b>
              </div>
              <div class="features">
                <div class="container">
                  <div class="name">Design Standard</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique à vie</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
              </div>
              <div class="button">
                <button>Découvrir</button>
              </div>
            </div>

            <div class="box premium">
              <div class="title">Premium</div>
              <div class="price">
                <b>499€</b>
                <span>paiement en 3 fois sans frais</span>
              </div>
              <div class="features">
                <div class="container">
                  <div class="name">Design Standard ou Premium</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique à vie</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Nom de domaine offert pendant 1 an</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">SEO & Référencement optimisé</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Modifications offertes pendant 3 mois</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
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
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Support technique à vie</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Certificat SSL (https)</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Responsive → adapté aux mobiles</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Nom de domaine offert pendant 3 ans</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">SEO & Référencement optimisé</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container">
                  <div class="name">Modifications offertes pendant 6 mois</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
                <div class="container" style={{borderBottom: "none"}}>
                  <div class="name">Suivi du traffic entrant et analyse du comportement des utilisateurs</div>
                  <div><FontAwesomeIcon icon={faCheck} /></div>
                </div>
              </div>
              <div class="button">
                <button>Découvrir</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Pricing;