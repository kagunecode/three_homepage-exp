import { motion } from "framer-motion";
import { sectionLetters } from "../anim";
import { useNavigationContext } from "../contexts/NavigationContext";

export default function Work() {
  const { status } = useNavigationContext();

  return (
    <div className="flex">
      {"WORK".split("").map((letter, i) => {
        return (
          <motion.div
            key={i}
            custom={i}
            variants={sectionLetters}
            initial="initial"
            animate={status ? "enter" : "exit"}
            className="text-white text-7xl font-bold"
          >
            {letter}
          </motion.div>
        );
      })}
    </div>
  );
}
