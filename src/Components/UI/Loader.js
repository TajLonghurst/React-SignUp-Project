import classes from "./Loader.module.css";

const Loader = (props) => {
  const switchClasses = props.isLoading
    ? `${classes.ldsEllipsis}`
    : `${classes.ldsEllipsisHidden}`;

  return (
    <div className={switchClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
