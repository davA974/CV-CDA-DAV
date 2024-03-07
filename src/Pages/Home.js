import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="formation-pro">
        <h1 className="forma-pro-titre"> Formation Professionnelle</h1>

        <ul className="ul-forma-pro">
          <li className="li-forma-pro">
            <h3 className="petit-titre">
              Concepteur Développeur d’Application- Devops TITRE RNCP niveau 6
              (Bac+3)
            </h3>
            <span>Simplon - 04/2024 - 10/2025 </span>
            <span>
              Rythme alterné 3 semaines en entreprise et 1 semaine en formation
            </span>
          </li>
        </ul>

        <ul className="ul-forma-pro">
          <li className="li-forma-pro">
            <h3 className="petit-titre">
              Développeur Intégrateur Web et mobile TITRE RNCP niveau 5 (Bac+2)
            </h3>
            <span>3WAcademy - 12/2022 - 06/2023</span>
            <span>
              Création d’un site web permettant de mettre en relation des
              particuliers et divers corps de métiers.Utilisation de React
              NodeJS
            </span>
          </li>
        </ul>
        <ul className="ul-forma-pro">
          <li className="li-forma-pro">
            <h3 className="petit-titre">Formation Référent digital</h3>
            <span>D-Formation - 2021-2022</span>
          </li>
        </ul>
        <ul className="ul-forma-pro">
          <li className="li-forma-pro">
            <h3 className="petit-titre">
              École Le Cours de la Comédie des Champs Élysées
            </h3>
            <span>Année 2005-2007</span>
          </li>
        </ul>
      </div>

      <div className="formation-pro">
        <h1 className="forma-pro-titre"> Expérience Professionnelles</h1>

        <ul className="ul-forma-pro">
          <li className="li-exper-pro">
            <div className="div-exper">
            <h3 className="petit-titre">Doublage vocal 2009/2021</h3>
            <p>
              (doubleur voix de comédiens étrangers pour une diffusion en
              Français au cinéma ou à la télévision)
            </p>
            </div>
            

            <h3 className="petit-titre">Rôles aux théâtre</h3>
            <p className="div-exper">
              Jouer le rôle d'Ergaste 2018 /2019 <span>Mise en scène Michèle Taieb
              Dans la mère confidente de Marivaux</span>
            </p>

            <p className="div-exper">
              Jouer le rôle d'un ingénieur 02-2008 /05-2009 Mise en scène
              François Kergourlay Dans Etoile du matin d'Alexandre Galline
            </p>

            <p className="div-exper">
              Jouer le rôle d'un général 03- 2007 /08-2007 Mise en scène Denis
              Llorca Dans le singe égale du ciel de Fréderick Tristan
            </p>

            <p className="div-exper">
              J’ai travaillé au Canada à Toronto dans le milieux du spectacle de
              2002/2003
            </p>

            <p>
              Service National (service long : 1999 / 2001) Base aérienne
              110-Armée de l’air
            </p>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
