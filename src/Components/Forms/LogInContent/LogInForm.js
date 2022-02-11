import "../../../index.css";
import Input from "../../UI/Input";
import classes from "./LogInForm.module.css";
import Button from "../../UI/Button";
import useInput from "../../../Hooks/use-Input";

const isNotEmpty = (value) => value.trim() !== "";
const isPassword = (value) => value.length >= 6;

const LoginForm = () => {
  const {
    value: entredNameValue,
    isValid: entredNameIsValid,
    hasError: entredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: entredPasswordValue,
    isValid: entredPasswordIsValid,
    hasError: entredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput(isPassword);

  const sumbitFormHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;

    if (entredNameIsValid && entredPasswordIsValid) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return; // Will return nothing
    }

    resetNameInput();
    resetPasswordInput();
  };

  const nameInputHasError = entredNameHasError
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
            value={entredNameValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            hasError={entredNameHasError}
          />
          <p className={nameInputHasError}>
            Please do not leave this field blank
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
            Please make sure your password includes 6 or more characters
          </p>
          <div className={classes.buttonContainer}>
            <Button name={"Log In"} type={"sumbit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
