import classes from "./SignUpFormPolicy.module.css";
import "../../../index.css";

const SignUpFormPolicy = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-9">
          <p className={classes.policyText}>
            By signing up you agree to our privacy policy. You can unsubscribe
            or change your preferences at any time by clicking the link in any
            emails.
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default SignUpFormPolicy;
