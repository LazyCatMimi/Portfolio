import "../../Styles/Components/NavBar.css";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import { useState } from "react";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="menu">
        {/* <img src={menuIcon} alt="menu" /> */}
        <ul>
          <li>Home</li>
          <li>Web Design</li>
          <li>Web Dev</li>
          <li>Art & Design</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
