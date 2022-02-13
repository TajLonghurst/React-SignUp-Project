import SignUp from "./SignUp";
import LogIn from "./LogIn";
import classes from "./FormContainer.module.css";
import { useSelector } from "react-redux";
import "../../index.css";

const FormContainer = () => {
  const FormIsActive = useSelector((state) => state.ui.RegFormIsVisible);
  const SignUpIsActive = useSelector((state) => state.ui.SignUpForm);
  const LoginIsActive = useSelector((state) => state.ui.LoginForm);

  const ActivateSignUp = FormIsActive && SignUpIsActive && !LoginIsActive;
  const ActivateLogin = FormIsActive && !SignUpIsActive && LoginIsActive;

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
        <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-10 col-sm-12">
          {ActivateSignUp && <SignUp />}
          {ActivateLogin && <LogIn />}
        </div>
        <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
      </div>
    </div>
  );
};

export default FormContainer;
