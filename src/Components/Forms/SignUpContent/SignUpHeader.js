import classes from "./SignUpHeader.module.css";

const SignUpHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Welcome to URBAN</h1>
      <p className={classes.smallText}>
        Sign up for updates on exhibitions, artists and events.
      </p>
    </div>
  );
};

export default SignUpHeader;
