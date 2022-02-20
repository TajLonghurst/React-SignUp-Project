import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
  const [windowHightSize, setWindowHeightSize] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowWidthSize(window.innerWidth);
      setWindowHeightSize(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const isMobileView = windowWidthSize <= 767;
  const isDesktopView = windowWidthSize >= 1200;

  return { windowHightSize, windowWidthSize, isMobileView, isDesktopView };
};

export default useWindowSize;
