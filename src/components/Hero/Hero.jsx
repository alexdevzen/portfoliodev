import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = ({ showDownloadButton }) => {
  // Estado para controlar si el botón de descarga está habilitado
  const [isDownloadButtonEnabled, setIsDownloadButtonEnabled] = useState(false);
  // Estado para controlar si se debe mostrar el efecto de resaltado en el botón
  const [showResaltado, setShowResaltado] = useState(false);

  // Efecto que se ejecuta cuando cambia la prop showDownloadButton
  useEffect(() => {
    if (showDownloadButton) {
      // Si se debe mostrar el botón de descarga, lo habilitamos y mostramos el efecto de resaltado

      setIsDownloadButtonEnabled(true);
      setShowResaltado(true);
      // Después de 5 segundos, ocultamos el efecto de resaltado

      const timer = setTimeout(() => {
        setShowResaltado(false);
      }, 5000);
      // Limpiamos el temporizador cuando el componente se desmonte
      return () => clearTimeout(timer);
    } else {
      // Si no se debe mostrar el botón de descarga, lo deshabilitamos y ocultamos el efecto de resaltado
      setIsDownloadButtonEnabled(false);
      setShowResaltado(false);
    }
  }, [showDownloadButton]);

  // Función para manejar el clic en el botón de descarga del CV
  const handleDownloadCV = () => {
    window.open("/download/Resume_Alex_Ortega.pdf", "_blank");
  };

  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
        <div>
          {/* Renderizamos el botón de descarga del CV si se debe mostrar */}
          {showDownloadButton && (
            <button
              className={`cv-btn ${isDownloadButtonEnabled ? "enabled" : "disabled"
                } ${showResaltado ? "resaltado" : ""}`}
              onClick={handleDownloadCV}
              disabled={!isDownloadButtonEnabled}
            >
              Download CV
            </button>
          )}
        </div>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/img11.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
