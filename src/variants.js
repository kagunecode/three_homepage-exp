const mainTitleVariants = {
  initial: { transform: "scale(1.0)", opacity: 1 },
  enter: {
    transform: "scale(0.7)",
    opacity: 0,
    transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
  },
  exit: {
    transform: "scale(1.0)",
    opacity: 1,
    transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
  },
};

const letterVariants = {
  initial: { x: -50, opacity: 0 },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.45, 0, 0.55, 1], delay: 0.1 * i },
  }),
  exit: (i) => ({
    x: -50,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.45, 0, 0.55, 1], delay: 0.1 * i },
  }),
};

export { mainTitleVariants, letterVariants };
