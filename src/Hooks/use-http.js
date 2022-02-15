import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";
import useHandleErrors from "./use-handleErrors";

const useHttp = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { state: errorState, handleErrors: Errors } = useHandleErrors();

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      dispatch(uiActions.isError({ boolean: false, msg: null }));

      const axiosMethod = requestConfig.method;
      const axiosUrl = requestConfig.url;
      const axiosData = requestConfig.data
        ? JSON.stringify(requestConfig.data)
        : null;
      const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};

      const typeOfHttp = requestConfig.typeOfHttp;

      try {
        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        if (response && typeOfHttp === "RegForm") {
          dispatch(uiActions.toggleRegForm());
        }
        console.log(response);
      } catch (err) {
        const error = err.response.data.error.message;

        Errors({
          type: error,
        });

        const { msg } = errorState;
        // ^^^^ This is because ErrorState returns all of the useReducers stats.  {msg: "", type:""}
        dispatch(uiActions.isError({ boolean: true, msg: msg }));

        if (typeOfHttp === "RegForm") {
          dispatch(uiActions.toggleRegForm());
        }
      }
    },
    [dispatch, Errors, errorState]
  );

  return { isLoading, sendRequest };
};

export default useHttp;
