import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FromBottom = ( { children, threshold }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold? threshold : 0.5,
  });
  console.log(threshold)
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
