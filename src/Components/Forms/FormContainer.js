import { useSelector } from "react-redux";

import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import classes from "./FormContainer.module.css";
import "../../index.css";

const FormContainer = () => {
  const FormIsActive = useSelector((state) => state.ui.RegFormIsVisible);

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-6">
          {FormIsActive && <SignUpForm />}
          {/* <LogInForm /> */}
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default FormContainer;
