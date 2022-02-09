import classes from "./SignUp.module.css";
import SignUpHeader from "./SignUpContent/SignUpHeader";
import SignUpForm from "./SignUpContent/SignUpForm";
import SignUpFormPolicy from "./SignUpContent/SignUpFormPolicy";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <SignUpHeader />
      <SignUpForm />
      <SignUpFormPolicy />
    </div>
  );
};
export default SignUp;
