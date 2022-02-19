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

  return { windowSize: windowSize };
};

export default useWindowSize;
