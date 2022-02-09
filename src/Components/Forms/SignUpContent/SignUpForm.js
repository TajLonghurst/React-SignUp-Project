import "../../../index.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  const sumbitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className={classes.container}>
        <form onSubmit={sumbitFormHandler} autoComplete="off">
          <Input type={"text"} placeholder={"Enter your full name"} />
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

export default SignUpForm;
