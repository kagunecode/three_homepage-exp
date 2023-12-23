import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Work from "./routes/Work";
import Navbar from "./components/Navbar";
import Homepage from "./routes/Homepage";
import "./app.css";
import { useNavigationContext } from "./contexts/NavigationContext";
import { AnimatePresence } from "framer-motion";

import { containerVariants, letterVariants, leftCurve } from "./anim";

function App() {
  const location = useLocation();
  const { status, setStatus } = useNavigationContext();

  const handleViewToggle = (value) => {
    setStatus(value);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="bg-zinc-200 relative h-screen">
        <Link
          onClick={() => handleViewToggle(false)}
          to="/"
          className="absolute flex flex-col items-center text-gray-600 text-5xl font-semibold py-3 px-7"
        >
          {"K98".split("").map((letter, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate={status ? "enter" : "exit"}
                className="-m-1"
              >
                {letter}
              </motion.div>
            );
          })}
        </Link>
        <Navbar />
        <motion.div
          id="scene-td"
          variants={containerVariants}
          initial="initial"
          animate={status ? "enter" : "exit"}
          className="h-full flex items-center justify-center bg-black relative z-0"
        >
          <svg className="hidden absolute stroke-none fill-black top-0 left-0 w-20 h-full overflow-visible">
            <motion.path
              variants={leftCurve}
              initial="initial"
              animate={status ? "enter" : "exit"}
              className="absolute right-0 top-0"
            ></motion.path>
          </svg>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Homepage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
