import classes from "./SignUp.module.css";
import SignUpHeader from "./SignUpContent/SignUpHeader";
import SignUpForm from "./SignUpContent/SignUpForm";
import SignUpFormPolicy from "./SignUpContent/SignUpFormPolicy";
import useHttp from "../../Hooks/use-http";

// method: "POST",
//       url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3y818Ygi0vgqBs5a-566AYxql_sUSy9I",
//       data: JSON.stringify({
//         email: requestConfig.email,
//         password: requestConfig.password,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },

const SignUp = () => {
  const { isLoading, error, sendRequest: sendSignUpRequest } = useHttp();

  const SignUpRequest = async (enteredEmail, enteredPassword) => {
    sendSignUpRequest({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3y818Ygi0vgqBs5a-566AYxql_sUSy9I",
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("WORKED IN SIGNUPREQUEST // SignUp.js");
  };

  return (
    <div className={classes.container}>
      <SignUpHeader />
      <SignUpForm
        onEnterDetails={SignUpRequest}
        isLoading={isLoading}
        error={error}
      />
      <SignUpFormPolicy />
    </div>
  );
};
export default SignUp;
