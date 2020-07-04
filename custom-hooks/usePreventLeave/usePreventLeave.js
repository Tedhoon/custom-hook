import React from "react";

export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = ""; // 크롬에서 요놈을 써줘야 preventLeave가 된다 (나가기, 새로고침 등)
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
