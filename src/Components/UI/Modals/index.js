import ReactDOM from "react-dom";
import { Fragment } from "react";
import RegistrationForm from "./RegistrationForm";

const portalElement = document.getElementById("registrationForm");

export const RegForm = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<RegistrationForm />, portalElement)}
    </Fragment>
  );
};
