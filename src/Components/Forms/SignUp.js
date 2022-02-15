import classes from "./SignUp.module.css";
import SignUpHeader from "./SignUpContent/SignUpHeader";
import SignUpForm from "./SignUpContent/SignUpForm";
import SignUpFormPolicy from "./SignUpContent/SignUpFormPolicy";
import useHttp from "../../Hooks/use-http";

const SignUp = () => {
  const { isLoading, sendRequest: sendSignUpRequest } = useHttp();

  const SignUpRequest = async (enteredEmail, enteredPassword) => {
    sendSignUpRequest({
      typeOfHttp: "RegForm",
      method: "POST",
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_SIGNUP_FIREBASE_KEY}`,
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={classes.container}>
      <SignUpHeader />
      <SignUpForm onEnterDetails={SignUpRequest} isLoading={isLoading} />
      <SignUpFormPolicy />
    </div>
  );
};
export default SignUp;
