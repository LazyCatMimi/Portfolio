import "../../Styles/Components/NavBar.css";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import PATHS from "../../Data/Pages.json";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="menu">
        {/* <img src={menuIcon} alt="menu" /> */}
        <ul>
          <li>
            <Link to={PATHS.main.home}>Home</Link>
          </li>
          <li>
            <Link to={PATHS.main.webDesign}>Web Design</Link>
          </li>
          <li>
            <Link to={PATHS.main.webDev}>Web Dev</Link>
          </li>
          <li>
            <Link to={PATHS.main.artDesign}>Art & Design</Link>
          </li>
          <li>
            <Link to={PATHS.main.resume}>Resume</Link>
          </li>
          <li>
            <Link to={PATHS.main.contact}>Contact</Link>
          </li>{" "}
          {/* Link to the contact page */}
        </ul>
      </div>
    </nav>
  );
}
