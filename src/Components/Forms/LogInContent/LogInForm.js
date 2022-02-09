import "../../../index.css";
import Input from "../../UI/Input";
import classes from "./LogInForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className={classes.container}>
          <form autoComplete="off">
            <Input type={"email"} placeholder={"Enter your email"} />
            <Input type={"password"} placeholder={"Enter your password"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
