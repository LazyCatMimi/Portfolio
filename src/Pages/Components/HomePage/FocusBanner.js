import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import uiuxIcon from "../../../Assets/Icons/focus-uiux.svg";
import devIcon from "../../../Assets/Icons/focus-dev.svg";
import artIcon from "../../../Assets/Icons/focus-art.svg";

// Array of items
const items = [
  { icon: uiuxIcon, text: "UI/UX" },
  { icon: devIcon, text: "Full Stack Development" },
  { icon: artIcon, text: "Art & Design" },
];

const FocusBanner = () => {
  //   // animation for focus banner
  //   const controls = useAnimation();
  //   const [ref, inView] = useInView();

  //   useEffect(() => {
  //     if (inView) {
  //       controls.start("visible");
  //     }
  //   }, [controls, inView]);

  //   const variants = {
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  //     hidden: { opacity: 0, y: 50 },
  //   };
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.icon} alt="" />
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
  //   return (
  //     <>
  //       {items.map((item, index) => (
  //         <motion.div
  //           key={index}
  //           ref={ref}
  //           initial="hidden"
  //           animate={controls}
  //           variants={variants}
  //         >
  //           <img src={item.icon} alt="" />
  //           <p>{item.text}</p>
  //         </motion.div>
  //       ))}
  //     </>
  //   );
};

export default FocusBanner;
