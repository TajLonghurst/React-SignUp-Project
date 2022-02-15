import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "EMAIL_EXISTS") {
    state.msg = "This email already exists";
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
