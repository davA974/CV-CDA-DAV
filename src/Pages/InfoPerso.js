import React from "react";
import Navigation from "../Components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const InfoPerso = () => {
  return (
    <div className="info-perso">
      <Navigation />
      <div className="perso">
        <div className="header-perso"></div>
        <div className="contactBox">
          <h1 className="ProgressBar-contact">Contactez moi</h1>
          <ul className="ul-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>75020 Paris</span>
            </li>

            {/* pour le télèphone */}
            <li>
              <i className="fas fa-mobile-alt"></i>
              {/* CopyToClipboard  copie le numero de tel */}
              <CopyToClipboard text="06--------">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("téléphone copié avec succés");
                  }}
                >
                  06 -- -- -- --
                </span>
              </CopyToClipboard>
            </li>

            {/* pour le e-mail */}
            <li>
              <i className="far fa-envelope"></i>
              {/* CopyToClipboard  copie l'e-mail */}
              <CopyToClipboard text="monmail@hotmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié avec succés");
                  }}
                >
                  monmail@hotmail.fr
                </span>
              </CopyToClipboard>
            </li>

            {/* permis */}
            <li>
              <i className="fa-solid fa-car"></i>
              <span>Permis B véhiculé</span>
            </li>
            {/* langue parlé */}
            <li>
              <i className="fa-solid fa-walkie-talkie"></i>
              <span>Anglais B2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPerso;
// installation de npm i react-copy-to-clipboard
