import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "EMAIL_EXISTS") {
    state.msg = "This email already exists";
  }
  if (action.type === "OPERATION_NOT_ALLOWED") {
    state.msg = "This password sucks";
  }
  if (action.type === "TOO_MANY_ATTEMPTS_TRY_LATER") {
    state.msg = "Too many attemptys, try again later";
  }
};

const initialState = {
  type: null,
  msg: "Form failed to work, Try again later",
};

const useHandleErrors = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleErrors = (errors) => {
    dispatch({ type: errors.type });
  };

  return { state: state, handleErrors };
};

export default useHandleErrors;
