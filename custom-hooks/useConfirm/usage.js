import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    // onConfirm은 무조건 받고 함수여야한다.
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    // onCancel은 없어도 되고, 만약 있으면 funtion이어야 한다.
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction; //이런식으로 안의 함수를 return 해줘야 onClick시 실행
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
