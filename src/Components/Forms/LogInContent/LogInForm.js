import "../../../index.css";
import Input from "../../UI/Input";
import classes from "./LogInForm.module.css";
import Button from "../../UI/Button";
import useInput from "../../../Hooks/use-Input";
import Loader from "../../UI/Loader";

const LoginForm = (props) => {
  const {
    value: entredEmailValue,
    isValid: entredEmailIsValid,
    hasError: entredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput("Email");

  const {
    value: entredPasswordValue,
    isValid: entredPasswordIsValid,
    hasError: entredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput("Password");

  const sumbitFormHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;

    if (entredEmailIsValid && entredPasswordIsValid) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return; // Will return nothing
    }

    props.onEnterDetails(entredEmailValue, entredPasswordValue);

    resetEmailInput();
    resetPasswordInput();
  };

  const nameInputHasError = entredEmailHasError
    ? `${classes.errorMessage}`
    : `${classes.errorMessageHidden}`;

  const passwordInputHasError = entredPasswordHasError
    ? `${classes.errorMessage}`
    : `${classes.errorMessageHidden}`;

  return (
    <div className="row">
      <div className={classes.container}>
        <form onSubmit={sumbitFormHandler} autoComplete="off">
          <Input
            autoComplete={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={entredEmailValue}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            hasError={entredEmailHasError}
          />
          <p className={nameInputHasError}>
            Your email should be a proper email
          </p>
          <Input
            autoComplete={"current-password"}
            type={"password"}
            placeholder={"Enter your password"}
            value={entredPasswordValue}
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            hasError={entredPasswordHasError}
          />
          <p className={passwordInputHasError}>
            Your password should contain a capatial letter a number and 8 or
            more characters.
          </p>
          <Loader isLoading={props.isLoading} />
          <div className={classes.buttonContainer}>
            <Button name={"Log In"} type={"sumbit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
