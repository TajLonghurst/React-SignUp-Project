import classes from "./Input.module.css";

const Input = (props) => {
  const InputHasErrorChecker = props.hasError
    ? `${classes.inputError}`
    : `${classes.input}`;

  return (
    <input
      className={InputHasErrorChecker}
      autoComplete={props.autoComplete}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};
export default Input;
