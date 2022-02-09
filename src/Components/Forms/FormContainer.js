import { useSelector } from "react-redux";

import LogInForm from "./LogInContent/LogInForm";
import SignUpHeader from "./SignUpContent/SignUpHeader";
import SignUpForm from "./SignUpContent/SignUpForm";
import classes from "./FormContainer.module.css";
import "../../index.css";

const FormContainer = () => {
  const FormIsActive = useSelector((state) => state.ui.RegFormIsVisible);

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <SignUpHeader />
          {FormIsActive && <SignUpForm />}
          {/* {FormIsActive && <LogInForm />} */}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default FormContainer;
