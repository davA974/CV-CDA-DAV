import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar-navigation">
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" className="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/info-perso" className="navActive">
            <i className="fa-solid fa-info"></i>
              <span>Informations personnelles</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/informatique" className="navActive">
            <i className="fa-solid fa-laptop"></i>
              <span>Informatique</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/langue-informatique" className="navActive">
            <i className="fa-brands fa-intercom"></i>
              <span>Langage Informatique</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competence" className="navActive">
            <i className="fa-solid fa-thumbs-up"></i>
              <span>Compétence</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/centre-interet" className="navActive">
            <i className="fa-solid fa-gift"></i>
              <span>Centre d'Intérêt</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
