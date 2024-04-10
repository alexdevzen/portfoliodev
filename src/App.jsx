import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { ContactMe } from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";


const App = () => {
  // Estado para controlar si se debe mostrar el botón de descarga en Hero
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  // Función para activar el botón de descarga en Hero cuando se hace clic en "Hire Me"
  const handleHireMeClick = () => {
    setShowDownloadButton(true);
  };

  return (
    <>
      <Navbar onHireMeClick={handleHireMeClick} />
      <div className="container">
        <Hero showDownloadButton={showDownloadButton} />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default App;
