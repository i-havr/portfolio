import { useState, useEffect } from "react";

const SCREEN_MOBILE = 320;
const SCREEN_TABLET = 768;
const SCREEN_DESKTOP = 1024;

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      if (event.target) {
        setWidth(event.target.innerWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isScreenMobile = width >= SCREEN_MOBILE;
  const isScreenTablet = width >= SCREEN_TABLET;
  const isScreenDesktop = width >= SCREEN_DESKTOP;

  return {
    width,
    isScreenMobile,
    isScreenTablet,
    isScreenDesktop,
  };
};
