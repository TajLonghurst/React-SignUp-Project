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
  if (action.type === "INVALID_PASSWORD") {
    state.msg = "Password is incorrect";
  }
  if (action.type === "EMAIL_NOT_FOUND") {
    state.msg = "This Email does not exisist";
  }
  if (action.type === "USER_DISABLED") {
    state.msg = "This Email has been disabled by an administrator";
  }
};

const initialState = {
  type: null,
  msg: "Form failed to work, Try again",
};

const useHandleErrors = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleErrors = (errors) => {
    dispatch({ type: errors.type });
  };

  return { state: state, handleErrors };
};

export default useHandleErrors;
