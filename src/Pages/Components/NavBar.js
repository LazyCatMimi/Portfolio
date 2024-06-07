import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import PATHS from "../../Data/Pages.json";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import xIcon from "../../Assets/Icons/x.svg";
import "../../Styles/Components/NavBar.css";

const menuItems = [
  { text: "Home", path: PATHS.main.home },
  { text: "Projects", path: `/#latest-projects` },
  // { text: "Web Design", path: PATHS.main.webDesign },
  // { text: "Web Dev", path: PATHS.main.webDev },
  // { text: "Art & Design", path: PATHS.main.artDesign },
  { text: "Resume", path: PATHS.main.resume },
  { text: "Contact", path: PATHS.main.contact },
];

export default function NavBar({ revealBGRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation(); // Initialize useAnimation
  const ulVariants = {
    visible: {
      opacity: 1,
      y: 0,

      // clipPath: `circle(${1000 * 2 + 200}px at 100% 0%)`,
    },
    hidden: {
      opacity: 0,
      y: "-100%",

      // clipPath: "circle(30px at 100% 0%)",
    },
  };
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    controls.start(menuOpen ? "hidden" : "visible");
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
          className={`menu-items ${!menuOpen ? "hide" : ""} `}
          animate={controls}
          variants={ulVariants}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              style={{ display: `${!menuOpen ? "none" : "inline"}` }}
            >
              <Link to={item.path} onClick={toggleMenu}>
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
