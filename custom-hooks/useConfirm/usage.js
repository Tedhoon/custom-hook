import React from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
function App() {
  const deleteSomthin = () => console.log("지워져 벌임..");
  const abort = () => console.log("취소하면 이렇게 됩니다~");
  const confirmDelete = useConfirm("진짜 지울껴?", deleteSomthin, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}

export default App;
