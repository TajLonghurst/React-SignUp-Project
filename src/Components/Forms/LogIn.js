import classes from "./LogIn.module.css";
import { useSelector } from "react-redux";
import LogInHeader from "./LogInContent/LogInHeader";
import LoginForm from "./LogInContent/LogInForm";

const LogIn = () => {
  const FormIsActive = useSelector((state) => state.ui.RegFormIsVisible);
  return (
    <div className={classes.container}>
      {FormIsActive && <LogInHeader />}
      {FormIsActive && <LoginForm />}
    </div>
  );
};

export default LogIn;
