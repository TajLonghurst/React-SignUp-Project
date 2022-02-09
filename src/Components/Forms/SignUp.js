import classes from "./SignUp.module.css";
import SignUpHeader from "./SignUpContent/SignUpHeader";
import SignUpForm from "./SignUpContent/SignUpForm";
import SignUpFormPolicy from "./SignUpContent/SignUpFormPolicy";
import { useSelector } from "react-redux";

const SignUp = () => {
  const FormIsActive = useSelector((state) => state.ui.RegFormIsVisible);
  return (
    <div className={classes.container}>
      {FormIsActive && <SignUpHeader />}
      {FormIsActive && <SignUpForm />}
      {FormIsActive && <SignUpFormPolicy />}
    </div>
  );
};
export default SignUp;
