import React, { useRef } from "react";

const useFullScreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const makeFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullScreen) {
        element.current.requestFullScreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }
      runCb(true);
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    if (document.exitFullScreen) {
      document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozRequestFullScreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
      document.msExitFullScreen();
    }

    runCb(false);
  };

  return { element, makeFullScreen, exitFullScreen };
};

function App() {
  const onFulls = isFull => {
    console.log(isFull ? "full" : "small");
  };
  const { element, makeFullScreen, exitFullScreen } = useFullScreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://item.kakaocdn.net/do/aebede13eed766c14f8e46d68509586c7154249a3890514a43687a85e6b6cc82" />
        <button onClick={exitFullScreen}>exit full screen</button>
      </div>
      <button onClick={makeFullScreen}>full screen</button>
    </div>
  );
}

export default App;
