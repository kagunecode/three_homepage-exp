export const containerVariants = {
  initial: {
    transform: "perspective(1000px) translateZ(0px)",
  },
  enter: {
    transform: "perspective(1000px)  translateZ(-350px) translateX(200px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    transform: "perspective(1000px) translateZ(0px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const letterVariants = {
  initial: { opacity: 0, y: 70 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    opacity: 0,
    y: 70,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const sectionLetters = {
  initial: { opacity: 0, x: 170 },
  enter: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    opacity: 0,
    x: 170,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const targetsvgPath = `M0 0 L0 ${window.innerHeight} Q -0 ${
  window.innerHeight / 2
} 0 0`;

const svgPath = `M0 0 L0 ${window.innerHeight} Q -80 ${
  window.innerHeight / 2
} 0 0`;
const exitsvgPath = `M0 0 L0 ${window.innerHeight} Q -80 ${
  window.innerHeight / 2
} 0 0`;

export const leftCurve = {
  initial: { d: svgPath },
  enter: {
    d: targetsvgPath,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: exitsvgPath,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const tdMesh = {
  initial: { z: 1 },
  enter: { z: 0.5 },
  exit: { z: 1 },
};
