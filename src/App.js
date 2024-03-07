import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import InfoPerso from './Pages/InfoPerso';
import Skills from './Pages/Skills';
import Knowledges from './Pages/Knowledges';
import SoftSkills from './Pages/SoftSkills';
import CenterOfInterest from './Pages/CenterOfInterest';
const App = () => {
  // const user = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {}, [user]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/info-perso" element={<InfoPerso />} />
        <Route path="/informatique" element={<Skills />} />
        <Route path="/langue-informatique" element={<Knowledges />} />
        <Route path="/competence" element={<SoftSkills />} />
        <Route path="/centre-interet" element={<CenterOfInterest />} />

      </Routes>
    </>
  );
};

export default App;
