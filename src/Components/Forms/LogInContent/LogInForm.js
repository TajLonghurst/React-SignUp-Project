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
          <Input type={"email"} placeholder={"Enter your email"} />
          <Input type={"password"} placeholder={"Enter your password"} />
          <div className={classes.buttonContainer}>
            <Button name={"Submit"} type={"sumbit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
