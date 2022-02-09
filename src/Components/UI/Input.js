import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      autoComplete={props.autoComplete}
      className={classes.inputForm}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};
export default Input;
