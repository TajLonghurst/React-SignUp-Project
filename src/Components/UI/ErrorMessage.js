import classes from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textBody}>
        <p className={classes.text}>Failed to Sign In</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
