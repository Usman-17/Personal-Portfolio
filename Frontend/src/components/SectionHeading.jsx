import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const letterAnimation = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

// Transition settings for smooth reveal
const transitionSettings = {
  duration: 0.5, // Slightly faster duration
  ease: "easeOut",
};

const SectionHeading = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // Split the text into letters
  const letters = text.split("");

  return (
    <motion.div
      ref={ref}
      className="text-2xl md:text-3xl font-bold leading-tight"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={letterAnimation}
          transition={{
            ...transitionSettings,
            delay: index * 0.01,
          }}
          className="inline-block mb-5"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SectionHeading;
