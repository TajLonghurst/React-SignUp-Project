import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const isMobileView = windowSize <= 575;

  return { windowSize, isMobileView };
};

export default useWindowSize;
