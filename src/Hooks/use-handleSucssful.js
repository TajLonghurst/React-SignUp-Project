import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "SIGNUP") {
    state.msg = "Successful Signed up";
  }
  if (action.type === "LOGIN") {
    state.msg = "Successful Login";
  }
};

const initialState = {
  type: null,
  msg: "Succsess",
};

const useHandleSuccessful = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSuccess = (succsess) => {
    dispatch({ type: succsess.type });
  };

  return { state: state, handleSuccess };
};

export default useHandleSuccessful;
