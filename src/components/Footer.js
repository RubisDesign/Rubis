import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtient l'année actuelle

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {currentYear} Rubis Design - Tous droits réservés.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333', // Couleur de fond du footer
    padding: '10px 0',       // Padding haut et bas
    textAlign: 'center',     // Centrer le texte
    color: '#fff',           // Couleur du texte
  },
  text: {
    margin: 0,               // Supprime la marge par défaut du <p>
  }
};

export default Footer;
