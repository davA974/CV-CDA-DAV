import React from "react";
import Navigation from "../Components/Navigation";

const CenterOfInterest = () => {
  return (
    <div className="CenterOfInterest">
      <Navigation />
      <div className="interest-skills">
        <div className="essaie-skills">
          <ul>
            <li>👉 Informatique</li>
          </ul>
          <ul>
            <li>👉 Littérature</li>
          </ul>
          <ul>
            <li>👉 Drama et Thèâtre</li>
          </ul>
          <ul>
            <li>👉 Arts Martiaux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CenterOfInterest;
