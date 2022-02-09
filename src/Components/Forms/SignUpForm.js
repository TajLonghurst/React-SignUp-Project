import "../../index.css";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <div className="row">
      <label className={classes.lableText}>Name</label>
      <input />
      <label>Email</label>
      <input />
      <label>Address</label>
      <input />
      <label>Password</label>
      <input />
    </div>
  );
};

export default SignUpForm;
