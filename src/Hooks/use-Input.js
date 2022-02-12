import { useState } from "react";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; //eslint-disable-line

const useInput = (validateType) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let validity;

  if (validateType === "Password") {
    validity = passwordRegex.test(entredValue);
  }
  if (validateType === "Email") {
    validity = emailRegex.test(entredValue);
  }
  if (validateType === "Name") {
    validity = entredValue.trim() !== "";
  }

  const valueIsValid = validity;
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
