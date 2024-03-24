import React, { useState } from "react";
import { Link } from "react-router-dom";
import PATHS from "../../Data/Pages.json";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import xIcon from "../../Assets/Icons/x.svg";
import "../../Styles/Components/NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="menu">
        <img
          src={menuOpen ? xIcon : menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
        <ul className={`menu-items ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to={PATHS.main.home} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={PATHS.main.webDesign} onClick={toggleMenu}>
              Web Design
            </Link>
          </li>
          <li>
            <Link to={PATHS.main.webDev} onClick={toggleMenu}>
              Web Dev
            </Link>
          </li>
          <li>
            <Link to={PATHS.main.artDesign} onClick={toggleMenu}>
              Art & Design
            </Link>
          </li>
          <li>
            <Link to={PATHS.main.resume} onClick={toggleMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to={PATHS.main.contact} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
