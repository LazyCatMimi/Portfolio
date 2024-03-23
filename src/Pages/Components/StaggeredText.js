import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function StaggeredText({ text, staggerDelay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const pVariants = {
    visible: {
      opacity: 1,
      transition: { delay: 0.1, staggerChildren: staggerDelay },
    },
    hidden: { opacity: 0 },
  };
  const spanVariants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: -20, y: -40 },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={pVariants}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span key={index} variants={spanVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
