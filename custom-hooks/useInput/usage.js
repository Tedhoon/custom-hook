import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    // setValue(event.target.value);
    const {
      target: { value }
    } = event;
    // value는 event안의 target.value => 이름은 { value }

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLen = value => value.length <= 10;
  const wordLimit = value => !value.includes("#");
  // boolean을 뱉어내는 validator 작성

  const name = useInput("initial~V!", maxLen);
  const email = useInput("email", wordLimit);

  return (
    <div className="App">
      <input {...name} />
      <input {...email} />
    </div>
  );
}

export default App;
