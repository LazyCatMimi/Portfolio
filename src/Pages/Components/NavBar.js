import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import PATHS from "../../Data/Pages.json";
import logoIcon from "../../Assets/logo.png";
import menuIcon from "../../Assets/Icons/menu.svg";
import xIcon from "../../Assets/Icons/x.svg";
import "../../Styles/Components/NavBar.css";

const menuItems = [
  { text: "Home", path: PATHS.main.home },
  { text: "Projects", path: `/#latest-projects` },
  { text: "Resume", path: PATHS.main.resume },
  { text: "Contact", path: `/#contact-me` },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const ulVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: "-100%",
    },
  };

  const toggleMenu = () => {
    if (!menuOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container max-width">
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
          className={`menu-items ${!menuOpen ? "hide" : ""}`}
          initial="hidden"
          animate={controls}
          variants={ulVariants}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.path} onClick={toggleMenu}>
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      </div>
    </nav>
  );
}
