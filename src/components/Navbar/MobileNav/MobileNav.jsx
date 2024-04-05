import React from "react";
import "./MobileNav.css";

export const MobileNav = ({ isOpen, toggleMenu }) => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.svg" alt="" />

          <ul>
            <li className="menu-item" onClick={() => scrollToSection('home')}>
              
                Home
             
            </li>
            <li className="menu-item" onClick={() => scrollToSection("skills")}>
              
                Skills
              
            </li>
            <li className="menu-item" onClick={() => scrollToSection("workexperience")}>
              
                Work Experience
              
            </li>
            <li className="menu-item" onClick={() => scrollToSection("contact")}>
              
                Contact Me
              
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
