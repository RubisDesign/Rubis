import React, { useState } from 'react';
import PaperAnimation from './PaperAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [focus, setFocus] = useState({
    nom: false,
    prenom: false,
    email: false,
    sujet: false,
    message: false,
  });

  const onFocus = (field) => {
    setFocus({ ...focus, [field]: true });
  };

  const onBlur = (field, event) => {
    if (event.target.value === '') {
      setFocus({ ...focus, [field]: false });
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis');
  };

  return (
    <footer id='contact' style={styles.footer}>
      <div id="contact-footer" style={styles.container}>
        {/* Colonne gauche avec le texte */}
        <div style={styles.leftColumn}>
          <h3 style={styles.title}>Une question ? <PaperAnimation /></h3>
          
          <p style={styles.paragraph}>
            Vous souhaitez discuter avec nous de votre projet ? Remplissez ce formulaire,
            nous vous répondrons dans les plus brefs délais. Pour toute autre demande,
            contactez-nous à l’adresse suivante : <a href="mailto:contact@rubis.design" style={styles.emailLink}>contact@rubis.design</a>
          </p>
        </div>

        {/* Colonne droite avec le formulaire */}
        <div style={styles.rightColumn}>
          <h3>Contact</h3>
          <form className="contact-form" onSubmit={sendEmail} style={styles.form}>
            <div className="namemail" style={styles.namemail}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  onFocus={() => onFocus('nom')}
                  onBlur={(e) => onBlur('nom', e)}
                  style={styles.inputSmall}
                />
                <label htmlFor="nom" style={focus.nom ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Nom</label>
              </div>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  onFocus={() => onFocus('prenom')}
                  onBlur={(e) => onBlur('prenom', e)}
                  style={styles.inputSmall}
                />
                <label htmlFor="prenom" style={focus.prenom ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Prénom</label>
              </div>
            </div>
            <div className="email" style={styles.emailSubject}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="email"
                  id="email"
                  name="email"
                  required
                  onFocus={() => onFocus('email')}
                  onBlur={(e) => onBlur('email', e)}
                  style={styles.inputLarge}
                />
                <label htmlFor="email" style={focus.email ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Email</label>
              </div>
            </div>
            <div className="subject" style={styles.emailSubject}>
              <div style={styles.inputContainer}>
                <input
                  placeholder=" "
                  type="text"
                  id="sujet"
                  name="sujet"
                  required
                  onFocus={() => onFocus('sujet')}
                  onBlur={(e) => onBlur('sujet', e)}
                  style={styles.inputLarge}
                />
                <label htmlFor="sujet" style={focus.sujet ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Sujet</label>
              </div>
            </div>
            <div className="message" style={styles.message}>
              <div style={styles.inputContainer}>
                <textarea
                  placeholder=" "
                  id="message"
                  name="message"
                  rows="5"
                  required
                  onFocus={() => onFocus('message')}
                  onBlur={(e) => onBlur('message', e)}
                  style={styles.textarea}
                ></textarea>
                <label htmlFor="message" style={focus.message ? { ...styles.label, ...styles.floatingLabel } : styles.label}>Écrivez votre message ici</label>
              </div>
            </div>
            <button id="submit" type="submit" style={styles.button}>Envoyer</button>
          </form>
        </div>
      </div>

      <p style={styles.text}>
        &copy; {currentYear} Rubis Design - Tous droits réservés.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#111',
    padding: '20px 0',
    textAlign: 'center',
    color: '#fff',
  },
  text: {
    margin: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '50px',
    width: '80%',
    margin: '0 auto 70px',
    flexWrap: 'wrap', // Pour une meilleure compatibilité responsive
  },
  leftColumn: {
    flex: '1',
    maxWidth: '400px',
    textAlign: 'left',
    margin: 'auto 0',
  },
  title: {
    fontSize: '1.75rem',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  emailLink: {
    color: '#03a9f4',
    textDecoration: 'none',
  },
  rightColumn: {
    flex: '1',
    maxWidth: '500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '27px',
  },
  namemail: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
    width: '400px',
    margin: '20px auto 0',
    maxWidth: '100%',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  inputSmall: {
    boxSizing: 'border-box',
    width: '198px',
    height: '50px',
    fontSize: '17px',
    paddingLeft: '10px',
    boxShadow: '3px 6px 6px rgba(0, 0, 0, 0.23)',
    border: 'none',
  },
  inputLarge: {
    boxSizing: 'border-box',
    width: '400px',
    height: '50px',
    fontSize: '17px',
    paddingLeft: '10px',
    boxShadow: '3px 6px 6px rgba(0, 0, 0, 0.23)',
    border: 'none',
  },
  emailSubject: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
    margin: 'auto',
    maxWidth: '100%',
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
    margin: 'auto',
    maxWidth: '100%',
  },
  textarea: {
    boxSizing: 'border-box',
    width: '400px',
    fontSize: '15px',
    paddingLeft: '10px',
    paddingTop: '10px',
    resize: 'none',
    fontFamily: 'Poppins',
    boxShadow: '3px 6px 6px rgba(0, 0, 0, 0.23)',
    border: 'none',
  },
  button: {
    width: '398px',
    margin: 'auto',
    height: '50px',
    fontSize: '17px',
    backgroundColor: 'rgb(226, 44, 56)',
    color: 'white',
    border: 'transparent',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '3px 6px 6px rgba(0, 0, 0, 0.23)',
    transition: 'transform 0.5s ease',
  },
  label: {
    position: 'absolute',
    top: '16px',
    left: '10px',
    fontSize: '17px',
    color: '#999',
    pointerEvents: 'none',
    transition: '0.2s ease all',
  },
  floatingLabel: {
    top: '-20px',
    left: '10px',
    fontSize: '12px',
    color: 'white',
  },
};

export default Footer;
