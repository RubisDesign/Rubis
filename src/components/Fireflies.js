import React from 'react';
import '../styles/Fireflies.scss'; // Importation des styles Sass

const Fireflies = () => {
  const quantity = 20; // Nombre de lucioles

  return (
    <div className="first-section">



  <div className="firefly-container">
    {Array.from({ length: 30 }, (_, i) => <div key={i} className="firefly"></div>)}
  </div>
</div>
  );
};

export default Fireflies;
