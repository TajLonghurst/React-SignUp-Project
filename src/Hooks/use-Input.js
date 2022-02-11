import { useState } from "react";

const useInput = (validateInput) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(entredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEntredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEntredValue("");
    setIsTouched(false);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
