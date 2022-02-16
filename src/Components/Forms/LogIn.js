import classes from "./LogIn.module.css";
import LogInHeader from "./LogInContent/LogInHeader";
import LoginForm from "./LogInContent/LogInForm";
import useHttp from "../../Hooks/use-http";

const LogIn = () => {
  const { isLoading, sendRequest: sendLoginRequest } = useHttp();

  const LoginRequest = async (enteredEmail, enteredPassword) => {
    sendLoginRequest({
      typeOfRequest: "LOGIN",
      method: "POST",
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_SIGNUP_FIREBASE_KEY}`,
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
      <LogInHeader />
      <LoginForm onEnterDetails={LoginRequest} isLoading={isLoading} />
    </div>
  );
};

export default LogIn;
