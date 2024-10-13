import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="contact">
      <div className="contact__container">
        {/* Section gauche: FAQ + Contact */}
        <div className="contact__left">
          <h3 className="contact__title">FAQ</h3>

          <div className="contact__faq">
            <div className="faq__item" onClick={() => toggleFAQ(0)}>
              <div className="faq__question">
                What are the benefits of regular exercise?
                <span className={`chevron ${activeIndex === 0 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 0 && <div className="faq__answer">Regular exercise improves physical and mental health.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(1)}>
              <div className="faq__question">
                How often should I exercise?
                <span className={`chevron ${activeIndex === 1 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 1 && <div className="faq__answer">It is recommended to exercise at least 3-5 times per week.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(2)}>
              <div className="faq__question">
                What is the best type of exercise?
                <span className={`chevron ${activeIndex === 2 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 2 && <div className="faq__answer">It depends on your goals. A mix of cardio and strength training is ideal.</div>}
            </div>

            <div className="faq__item" onClick={() => toggleFAQ(3)}>
              <div className="faq__question">
                Should I do cardio or strength training first?
                <span className={`chevron ${activeIndex === 3 ? 'open' : ''}`}><FontAwesomeIcon icon={faChevronDown} /></span>
              </div>
              {activeIndex === 3 && <div className="faq__answer">If your goal is to build muscle, prioritize strength training.</div>}
            </div>
          </div>

          <div className="contact__info">
            <div className='contact__phone'>
                <i><FontAwesomeIcon icon={faPhone} /></i>
                <p><span>Par Téléphone :</span> <br></br>06 07 08 09 10</p>
            </div>
            
            <div className='contact__mail'>
                <i><FontAwesomeIcon icon={faEnvelope} /></i>
                <p><span>Par Email:</span><br></br> email@support.com</p>
            </div>
            
          </div>
        </div>

        {/* Section droite: Formulaire */}
        <div className="contact__right">
          <h3 className="contact__title">Me contacter</h3>

          <form className="contact__form">
            <div className="form__group">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Votre nom" />
            </div>

            <div className="form__group">
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Votre mail" />
            </div>

            <div className="form__group">
              <label htmlFor="services"></label>
              <select id="services">
                <option value="group">Group Training</option>
                <option value="individual">Individual Coaching</option>
                <option value="online">Online Program</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="message"></label>
              <textarea id="message" rows="5" placeholder="Écrivez votre message"></textarea>
            </div>

            <button type="submit" className="contact__btn">Envoyer &nbsp;<i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
