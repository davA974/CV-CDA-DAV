import React from "react";
import Navigation from "../Components/Navigation";

const Skills = () => {
  return (
    <div className="skill">
      <Navigation />
      <div className="skill-list">
      <div className="header-perso"></div>
        <ul className="skill-ul">
          {/*fas fa-check-square sont les carrés tchecké  */}
          <li>
            <i className="fas fa-check-square"></i>Création de site web
          </li>
          <li>
            <i className="fas fa-check-square"></i>Github,Github
          </li>
          <li>
            <i className="fas fa-check-square"></i>Référencement
          </li>
          <li>
            <i className="fas fa-check-square"></i>E-Réputation
          </li>
          <li>
            <i className="fas fa-check-square"></i>Pack Adobe (Illustrator,
            Photoshop, InDesign)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
