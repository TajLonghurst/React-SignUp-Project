import classes from "./Button.module.css";
import { useSelector } from "react-redux";

const Button = (props) => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const toggleClasses = toggle
    ? `${classes.whiteButton}`
    : `${classes.darkButton}`;

  return (
    <button onClick={props.onClick} type={props.type} className={toggleClasses}>
      {props.name}
    </button>
  );
};

export default Button;
