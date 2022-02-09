import classes from "./LogInHeader.module.css";

const LogInHeader = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Login to URBAN</h1>
      <p className={classes.smallText}>
        Login to explore are current exhibits from around the world.
      </p>
    </div>
  );
};

export default LogInHeader;
