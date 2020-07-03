export const useInput = (initialValue, validator) => {
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