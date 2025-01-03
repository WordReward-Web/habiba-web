const isResponsive = (maxWidth = 768) => {
  if (typeof window !== "undefined") {
    return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
  }
  return false;
};

export default isResponsive;
