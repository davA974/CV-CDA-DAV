import React from "react";
import Navigation from "../Components/Navigation";

const SoftSkills = () => {
  return (
    <div className="SoftSkills">
      <Navigation />

      <div className="soft-skills">
        <div className="essaie">
          <ul>
            <li className="animation">👉 Respect des deadlines</li>
          </ul>
          <ul>
            <li className="animation">👉 Rigoureux</li>
          </ul>
          <ul>
            <li className="animation">👉 Travailleur</li>
          </ul>
          <ul>
            <li className="animation">👉 Motivé</li>
          </ul>
          <ul>
            <li className="animation">👉 Travail en équipe</li>
          </ul>
          <ul>
            <li className="animation">👉 Curieux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
