import "../../../index.css";
import Input from "../../UI/Input";
import classes from "./LogInForm.module.css";
import Button from "../../UI/Button";

const LoginForm = () => {
  const sumbitFormHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row">
      <div className={classes.container}>
        <form onSubmit={sumbitFormHandler} autoComplete="off">
          <Input
            autoComplete={"email"}
            type={"email"}
            placeholder={"Enter your email"}
          />
          <p className={classes.errorMessage}>Error</p>
          <Input
            autoComplete={"current-password"}
            type={"password"}
            placeholder={"Enter your password"}
          />
          <p className={classes.errorMessage}>Error</p>
          <div className={classes.buttonContainer}>
            <Button name={"Log In"} type={"sumbit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
