import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";
import { uiActions } from "../Store/ui-slice";
import useHandleErrors from "./use-handleErrors";
import useHandleSuccessful from "./use-handleSucssful";

const useHttp = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { state: errorState, handleErrors: Errors } = useHandleErrors();
  const { state: succsessState, handleSuccess: Succsess } =
    useHandleSuccessful();

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      dispatch(uiActions.isFormNotification({ ErrorIs: false, msg: null }));

      const axiosMethod = requestConfig.method;
      const axiosUrl = requestConfig.url;
      const axiosData = requestConfig.data
        ? JSON.stringify(requestConfig.data)
        : null;
      const axiosHeaders = requestConfig.headers ? requestConfig.headers : {};
      const typeOfRequest = requestConfig.typeOfRequest;

      try {
        const response = await axios({
          method: axiosMethod,
          url: axiosUrl,
          data: axiosData,
          headers: axiosHeaders,
        });

        /* ------------------------------ Getting Data ------------------------------ */
        const { idToken, email, expiresIn, localId, refreshToken } =
          response.data;

        dispatch(
          authActions.Login({
            idToken: idToken,
            email: email,
            expiresIn: expiresIn,
            localId: localId,
            refreshToken: refreshToken,
          })
        );
        /* ------------------------------ Getting Data ------------------------------ */

        /* ----------------------- Handeling Succsess messages ---------------------- */
        if (response && (typeOfRequest === "SIGNUP" || "LOGIN")) {
          dispatch(uiActions.toggleRegForm());
        }
        Succsess({
          type: typeOfRequest,
        });
        const { msg } = succsessState;
        dispatch(uiActions.isFormNotification({ isSuccses: true, msg: msg }));
        /* ----------------------- Handeling Succsess messages ---------------------- */
      } catch (err) {
        /* ------------------------- Handling Error messages ------------------------ */
        if (typeOfRequest === "SIGNUP" || "LOGIN") {
          dispatch(uiActions.toggleRegForm());
        }
        const error = err.response.data.error.message;
        console.log(error);
        Errors({
          type: error,
        });
        const { msg } = errorState;
        dispatch(uiActions.isFormNotification({ ErrorIs: true, msg: msg }));
        /* ------------------------- Handling Error messages ------------------------ */
      }
    },
    [dispatch, Errors, Succsess, errorState, succsessState]
  );

  return { isLoading, sendRequest };
};

export default useHttp;
