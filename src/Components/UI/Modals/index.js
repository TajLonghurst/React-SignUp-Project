import ReactDOM from "react-dom";
import { Fragment } from "react";
import RegistrationForm from "./RegistrationForm";
import FormStatusMessage from "./FormStatusMessage";

const portalForm = document.getElementById("registrationForm");
const portalErrorMsg = document.getElementById("errorMsg");

export const RegForm = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<RegistrationForm />, portalForm)}
      {ReactDOM.createPortal(<FormStatusMessage />, portalErrorMsg)}
    </Fragment>
  );
};
