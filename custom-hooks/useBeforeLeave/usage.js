import React, { useEffect } from "react";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    // console.log(event);
    if (clientY <= 0) {
      // 마우스가 위쪽으로 나가려고 했을 때만 실행(최적화)
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
};

function App() {
  const onBefore = () => console.log("그대여 떠나지마");
  useBeforeLeave(onBefore);
  return <div className="App" />;
}

export default App;


// 사용자가 페이지를 떠나려고 할 때 액션!