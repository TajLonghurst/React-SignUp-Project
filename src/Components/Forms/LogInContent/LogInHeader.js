import classes from "./LogInHeader.module.css";

const LogInHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Welcome Back</h1>
      <p className={classes.smallText}>
        Login to explore our current exhibits from around the world.
      </p>
    </div>
  );
};

export default LogInHeader;
