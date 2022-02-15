import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "EMAIL_EXISTS") {
    state.type = "This email already exsists";
  }
};

const initialState = {
  type: null,
};

const useHandleErrors = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleErrors = (erros) => {
    const type = erros.type;

    dispatch({ type: type });
  };

  return { state: state, handleErrors };
};

export default useHandleErrors;
