import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Présentation
          </p>
        </div>
        <p className="text-xl mt-20">
          Après un parcours dans le commerce en travaillant dans le service
          achats d'une grande compagnie, puis en travaillant côté fournisseurs
          en Chine pendant une dizaine d'années, j'ai décidé de me reconvertir
          pour allier carrière professionnelle et passion. Fraîchement titulaire
          du titre pro développeur web & web mobile, je recherche une alternance
          de concepteur développeur d'applications.
        </p>
        <br />
        <p className="text-xl">
          Friand du travail en équipe, j'ai de part mon parcours dû également
          apprendre et apprécier l'autonomie et l'adaptabilité.
          <br /> Rigoureux et passionné, je souhaite apporter mes compétences
          tout en poursuivant ma formation en milieu pro. <br />
          <br />
          Début du cursus : 06 - 03 - 2023.
          <br />
          Durée : 18 mois.
        </p>
      </div>
    </div>
  );
};

export default About;
