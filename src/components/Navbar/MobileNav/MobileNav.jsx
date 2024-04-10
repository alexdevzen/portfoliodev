import React from "react";
import "./MobileNav.css";

export const MobileNav = ({ isOpen, toggleMenu, onHireMeClick }) => {
  // Función para desplazar la página hasta una sección específica
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Contenedor del menú móvil */}
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* Logo */}
          <img className="logo" src="./assets/images/logo.png" alt="" />
          {/* Lista de elementos del menú */}
          <ul>
            <li className="menu-item" onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className="menu-item" onClick={() => scrollToSection("skills")}>
              Skills
            </li>
            <li
              className="menu-item"
              onClick={() => scrollToSection("workexperience")}
            >
              Work Experience
            </li>
            <li
              className="menu-item"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </li>
            {/* Botón "Hire Me" */}
            <button className="contact-btn" onClick={onHireMeClick}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
