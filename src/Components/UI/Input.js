import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={classes.inputForm}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};
export default Input;
