import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function LineRevealText({ text }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  // Split the text into lines
  const lines = text.split("\n");

  return (
    <motion.p ref={ref}>
      {lines.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }} // Initial hidden state
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate when in view
          transition={{ duration: 0.7, delay: index * 0.2 }} // Adjust the delay for staggered animation
        >
          {line}
          {index < lines.length - 1 && <br />}{" "}
          {/* Add a line break if not the last line */}
        </motion.span>
      ))}
    </motion.p>
  );
}
