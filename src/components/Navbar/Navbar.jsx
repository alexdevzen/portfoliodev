import React, { useState } from "react";
import "./Navbar.css";
import { MobileNav } from "./MobileNav/MobileNav";

const Navbar = ({ onHireMeClick }) => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [openMenu, setOpenMenu] = useState(false);
  // Función para alternar el estado del menú móvil
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // Función para desplazar la página hasta una sección específica
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Renderiza el componente MobileNav */}
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} onHireMeClick={onHireMeClick} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* Logotipo que desplaza a la sección "Home" */}
          <span onClick={() => scrollToSection("home")}>
            <img className="logo" src="./assets/images/logo.png" alt="" />
          </span>
          {/* Lista de elementos de navegación */}
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
          {/* Botón de menú móvil */}
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
