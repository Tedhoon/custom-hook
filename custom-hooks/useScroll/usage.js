import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 1000
  });

  const handleChange = () => {
    setState({ x: 0, y: window.scrollY });
  };
  // addEventListener에 걸 함수는 바로 위에 써줍시다.
  useEffect(() => {
    window.addEventListener("scroll", handleChange);
    return () => window.removeEventListener("scroll", handleChange);
  }, []);
  return state;
};

function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}

export default App;
