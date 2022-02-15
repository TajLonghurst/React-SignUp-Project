import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";

const useHttp = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      dispatch(uiActions.isError({ boolean: null }));

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
        /* --------------------------------- handle --------------------------------- */
        const error = err.response.data.error.message;

        if (error === "EMAIL_EXISTS") {
          console.log("Email has already been used");
        }
        alert(error);
        /* --------------------------------- handle --------------------------------- */

        dispatch(uiActions.isError({ boolean: true, errorMsg: "Failed" }));
        if (typeOfHttp === "RegForm") {
          dispatch(uiActions.toggleRegForm());
        }
      }
    },
    [dispatch]
  );

  return { isLoading, sendRequest };
};

export default useHttp;
