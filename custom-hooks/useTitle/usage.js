import React, { useState, useEffect } from "react";

// 보통 helmet을 사용하지만 만들어쓰자~

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home");
  }, 2000);
  // titleUpdater 객체를 불러서 써줘야하넹..?
  // 글치, 이 자체가 함수화 되었으니까!
  return <div className="App" />;
}

export default App;
