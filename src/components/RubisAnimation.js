import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json'; // Chemin vers ton fichier JSON


const RubisAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData} // Ici, tu utilises l'attribut `animationData` au lieu de `src`
        loop={true}  // Définit si l'animation doit boucler (true ou false)
        style={{ height: '50px', width: '50px' }} // Ajuste la taille selon tes besoins
      />
    </div>
  );
};

export default RubisAnimation;
