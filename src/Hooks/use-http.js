import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";

const useHttp = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);

      const axiosMethod = requestConfig.method;
      const axiosUrl = requestConfig.url;
      const axiosData = requestConfig.data
        ? JSON.stringify(requestConfig.data)
        : null;
      const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};

      try {
        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        if (response) {
          dispatch(uiActions.toggleRegForm());
        }

        console.log(response);

        // const responseData = await response.json();
      } catch (err) {
        setError(true);
        alert(err.message || "Something Went Wrong!");
        dispatch(uiActions.toggleRegForm());
      }
    },
    [dispatch]
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
