import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "section 1",
    content: "content of section 1"
  },
  {
    tab: "section 2",
    content: "content of section 2"
  }
];

const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

function App() {
  const { currentItem, changeItem } = useTabs(0, content); // 0번 째 인덱스 initializing
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
