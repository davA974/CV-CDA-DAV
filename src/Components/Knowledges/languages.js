import React, { Component } from 'react'
import ProgressBar from "./ProgressBar";

 class Languages extends Component {
 state = {
    Languages: [
        { id: 1, value: "Javascript", xp: 0.8 },
        { id: 2, value: "Css", xp: 1 },
        { id: 3, value: "Html", xp: 1 },
    ],
    frameworks: [
        { id: 1, value: "React", xp: 0.7 },
    ],
 }
 
render() {
    let { Languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          Languages={Languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar
        Languages={frameworks}
         title="frameworks & bibliothèque"
         className="languagesDisplay"
        />
      </div>
    );
  }
}
export default Languages 
// taper rcc pour créer une classComponent

// un state est un endroit ou on va stocker des choses de façon dynamique

// this est la class Languages extends Component {}, ça veux dire que
// l'on appelle la function et le state "language" et ou "framework"
// c'est comme ça que l'on pointe les chose