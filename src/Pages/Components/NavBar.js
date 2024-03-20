import "../../Styles/Components/NavBar.css";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/web-design">Web Design</Link>
          </li>
          <li>
            <Link to="/web-dev">Web Dev</Link>
          </li>
          <li>
            <Link to="/art-design">Art & Design</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>{" "}
          {/* Link to the contact page */}
        </ul>
      </div>
    </nav>
  );
}
