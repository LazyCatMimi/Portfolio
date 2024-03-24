import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import PATHS from "../../Data/Pages.json";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import xIcon from "../../Assets/Icons/x.svg";
import "../../Styles/Components/NavBar.css";

const menuItems = [
  { text: "Home", path: PATHS.main.home },
  { text: "Web Design", path: PATHS.main.webDesign },
  { text: "Web Dev", path: PATHS.main.webDev },
  { text: "Art & Design", path: PATHS.main.artDesign },
  { text: "Resume", path: PATHS.main.resume },
  { text: "Contact", path: PATHS.main.contact },
];

export default function NavBar({ revealBGRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation(); // Initialize useAnimation
  const ulVariants = {
    // Define variants for sliding animation
    visible: {
      opacity: 1,

      clipPath: `circle(${1000 * 2 + 200}px at 100% 0%)`,
      transition: {
        stiffness: 20,
        restDelta: 2,

        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,

      clipPath: "circle(30px at 100% 0%)",
      transition: {
        stiffness: 400,
        damping: 40,
      },
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
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
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
          animate={controls}
          variants={ulVariants}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
