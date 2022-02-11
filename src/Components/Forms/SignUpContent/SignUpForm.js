import "../../../index.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./SignUpForm.module.css";
import useInput from "../../../Hooks/use-Input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length >= 6;

const SignUpForm = () => {
  const {
    value: entredNameValue,
    isValid: entredNameIsValid,
    hasError: entredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: entredEmaiValue,
    isValid: entredEmailIsValid,
    hasError: entredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: entrePasswordValue,
    isValid: entredPasswordIsValid,
    hasError: entredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput(isPassword);

  const sumbitFormHandler = (event) => {
    event.preventDefault();

    let formIsValid = false;

    if (entredNameIsValid && entredEmailIsValid && entredPasswordIsValid) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return; // will return nothing
    }

    console.log(entredNameValue, entredEmaiValue, entrePasswordValue);

    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const nameInputHasError = entredNameHasError
    ? `${classes.errorMessage}`
    : `${classes.errorMessageHidden}`;

  const emailInputHasError = entredEmailHasError
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
            autoComplete={"name"}
            type={"text"}
            placeholder={"Enter your full name"}
            value={entredNameValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            hasError={entredNameHasError}
          />
          <p className={nameInputHasError}>
            Please do not leave this field blank
          </p>
          <Input
            autoComplete={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            value={entredEmaiValue}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            hasError={entredEmailHasError}
          />
          <p className={emailInputHasError}>
            Please Include an @ to your email
          </p>
          <Input
            autoComplete={"new-password"}
            type={"password"}
            placeholder={"Enter your password"}
            value={entrePasswordValue}
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            hasError={entredPasswordHasError}
          />
          <p className={passwordInputHasError}>
            Please make sure your password includes 6 or more characters
          </p>
          <div className={classes.buttonContainer}>
            <Button name={"Submit"} type={"sumbit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
