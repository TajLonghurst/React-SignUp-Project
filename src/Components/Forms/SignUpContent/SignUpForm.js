import React from "react";
import "../../../index.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./SignUpForm.module.css";
import useInput from "../../../Hooks/use-Input";

const SignUpForm = (props) => {
  const {
    value: entredNameValue,
    isValid: entredNameIsValid,
    hasError: entredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput("Name");

  const {
    value: entredEmaiValue,
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

    if (entredNameIsValid && entredEmailIsValid && entredPasswordIsValid) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return;
    } // will return nothing

    props.onEnterDetails(entredEmaiValue, entredPasswordValue);

    //use if useHttps redux error state to let the form close or not

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
            Your email should be a proper email
          </p>
          <Input
            autoComplete={"new-password"}
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
          <div className={classes.buttonContainer}>
            <Button name={"Submit"} type={"sumbit"} />

            {/* Add an onClick to button so that it displays a better error style in the button componet */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
