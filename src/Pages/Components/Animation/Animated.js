import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children, useEffect, useState } from "react";

export const FromBottom = ({ children, threshold }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold ? threshold : 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
    >
      {children}
    </motion.div>
  );
};

export const AnimatedBackground = ({ children, toColor }) => {
  // Choose starting + ending states based on desired direction
  const map = {
    toPurple: { initial: "toBlack", final: "toPurple" },
    toBlack: { initial: "toPurple", final: "toBlack" },
    toAllBlack: { initial: "toBlack", final: "toAllBlack" },
  };

  const { initial, final } = map[toColor] || map.toPurple;

  const variants = {
    toPurple: {
      backgroundImage: "linear-gradient(180deg, #090510 0%, #26123f 100%)",
    },
    toBlack: {
      backgroundImage: "linear-gradient(180deg, #26123f 0%, #090510 100%)",
    },
    toAllBlack: {
      backgroundImage: "linear-gradient(180deg, #090510 0%, #090510 100%)",
    },
  };

  return (
    <motion.div
      initial={initial}
      animate={final}
      variants={variants}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};