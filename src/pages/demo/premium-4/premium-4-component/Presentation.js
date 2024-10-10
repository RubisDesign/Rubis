import React from 'react';
import personalTrainingImg from '../premium-4-images/fusionjpg-03.jpg'; // Remplacez par le chemin correct
import nutritionCoachingImg from '../premium-4-images/fusionjpg-04.jpg'; // Remplacez par le chemin correct
import weightLossImg from '../premium-4-images/fusionjpg-05.jpg'; // Remplacez par le chemin correct
import cardioExerciseImg from '../premium-4-images/fusionjpg-06.jpg'; // Remplacez par le chemin correct

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation__header">
        <h2 className="presentation__title">Suivez un plan millimétré pour atteindre vos objectifs</h2>
        <p className="presentation__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Rhoncus sollicitudin mus suspendisse fusce placerat.
        </p>
      </div>
      <div className="presentation__blocks">
        <div className="presentation__block">
          <img src={personalTrainingImg} alt="Personal Training" className="presentation__icon" />
          <h3 className="presentation__block-title">Entrainement musculaire</h3>
          <p className="presentation__block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="presentation__block">
          <img src={nutritionCoachingImg} alt="Nutrition Coaching" className="presentation__icon" />
          <h3 className="presentation__block-title">Plan diététique</h3>
          <p className="presentation__block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="presentation__block">
          <img src={weightLossImg} alt="Weight Loss" className="presentation__icon" />
          <h3 className="presentation__block-title">Bilan régulier</h3>
          <p className="presentation__block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="presentation__block">
          <img src={cardioExerciseImg} alt="Cardio Exercise" className="presentation__icon" />
          <h3 className="presentation__block-title">Mesure & suivi</h3>
          <p className="presentation__block-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
