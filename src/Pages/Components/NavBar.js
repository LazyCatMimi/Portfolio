import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import PATHS from "../../Data/Pages.json";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import xIcon from "../../Assets/Icons/x.svg";
import "../../Styles/Components/NavBar.css";

export default function NavBar({ revealBGRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation(); // Initialize useAnimation

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
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
        <motion.ul
          className="menu-items"
          animate={controls} // Apply animation controls to ul element
          variants={{
            // Define variants for sliding animation
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "100%" }, // Slide out to the left
          }}
        >
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
        </motion.ul>
      </div>
    </nav>
  );
}
