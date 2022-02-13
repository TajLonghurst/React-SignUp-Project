import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //My FireB key AIzaSyB3y818Ygi0vgqBs5a-566AYxql_sUSy9I

  const sendRequest = useCallback(async (requestConfig) => {
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

      console.log(response);
      console.log("Worked in use-https.js hook");
      console.log();

      // const responseData = await response.json();
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
      alert(err);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
