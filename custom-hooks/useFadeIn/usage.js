import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 2) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    console.log(element);
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
  // animation property 더 필요하면 추가해서 씁시당
};
function App() {
  const fadeInH1 = useFadeIn(5);
  const fadeInP = useFadeIn();
  return (
    <div className="App">
      <h1 {...fadeInH1}>악</h1>
      <p {...fadeInP}>아우</p>
    </div>
  );
}

export default App;
