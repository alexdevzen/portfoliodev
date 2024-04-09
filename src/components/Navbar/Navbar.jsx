import React, { useState } from "react";
import "./Navbar.css";
import { MobileNav } from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <span onClick={() => scrollToSection("home")}>
            <img className="logo" src="./assets/images/logo.png" alt="" />
          </span>

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
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

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
