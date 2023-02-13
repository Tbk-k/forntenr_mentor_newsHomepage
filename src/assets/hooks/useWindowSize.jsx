import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ x: window.innerWidth, y: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
