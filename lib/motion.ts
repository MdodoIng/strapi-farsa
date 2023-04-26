export const navbarOpenAnim = {
  true: {
    clipPath: `circle(${1000 * 2 + 200}px at 0% 100%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    opacity: 1,
  },
  false: {
    clipPath: "circle(30px at 100% 0px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    opacity: 0,
  },
};

export const navbarMenuAnim = (
  direction: string,
  type: any,
  delay: any,
  duration: any
) => ({
  false: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  true: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
    opacity: 1,
  },
});
