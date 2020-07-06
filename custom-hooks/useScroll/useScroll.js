import React, { useEffect, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 1000
  });

  const handleChange = () => {
    setState({ x: 0, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChange);
    return () => window.removeEventListener("scroll", handleChange);
  }, []);
  return state;
};
