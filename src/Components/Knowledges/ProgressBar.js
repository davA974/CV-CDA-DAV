import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="{props.className}">
      <h3 className="ProgressBar-title">{props.title}</h3>
      <div className="years">
        <span>Années d'experiences</span>
        <span className="exper"> 1 ans</span>
        <span className="exper"> 2 ans</span>
      </div>

      <div>
        {props.Languages.map((item) => {
          let xpYears = 2;
          //   progression de la bar d'xp
          let ProgressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li className="languagesProgres">{item.value}</li>
              <div className="progressBar" style={{ width: ProgressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
// on fait appelle au tableau language avec "props.languages.map"
// dans le fichier language
