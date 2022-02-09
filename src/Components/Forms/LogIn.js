import classes from "./LogIn.module.css";
import LogInHeader from "./LogInContent/LogInHeader";
import LoginForm from "./LogInContent/LogInForm";

const LogIn = () => {
  return (
    <div className={classes.container}>
      <LogInHeader />
      <LoginForm />
    </div>
  );
};

export default LogIn;
