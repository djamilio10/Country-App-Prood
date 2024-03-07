import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Country App est une application conviviale qui offre un accès complet
        aux données de tous les pays du monde. Elle permet aux utilisateurs de
        rechercher et d'afficher rapidement des informations essentielles telles
        que le nom du pays, sa capitale, sa population et d'autres détails
        pertinents. De plus, l'application propose une fonction de filtrage
        pratique qui permet aux utilisateurs de trier les pays en fonction du
        continent sélectionné, offrant ainsi une expérience personnalisée et
        efficace
      </p>
      <br />
      <p>
        En plus de cela, Country App propose une fonctionnalité de blog
        intégrée, permettant aux utilisateurs de partager des messages, de les
        éditer ou de les supprimer selon leurs préférences. Cette fonctionnalité
        ajoute une dimension sociale à l'application, permettant aux
        utilisateurs d'interagir et de partager leurs connaissances ou leurs
        expériences sur les pays du monde entier
      </p>
    </div>
  );
};

export default About;
