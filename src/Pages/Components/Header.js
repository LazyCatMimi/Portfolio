import "../../Styles/Components/Header.css";
import { motion } from "framer-motion";

export default function Header({ HeaderContent, from }) {
  const initialBg = from === "home" ? "project" : "home";
  const finalBg = from === "home" ? "home" : "project";
    const variants = {
    home: {
      backgroundImage: "linear-gradient(180deg, #090510 0%, #26123f 100%)",
    },
    project: {
      backgroundImage: "linear-gradient(180deg, #26123f 0%, #090510 100%)",
    },
  };
  return (
<motion.div
        initial={initialBg}
        variants={variants}
        animate={finalBg}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <header className="header">
          <div className="background-container">
            <div className="content ">
              <HeaderContent />
            </div>
          </div>
        </header>
      </motion.div>
  );
}
