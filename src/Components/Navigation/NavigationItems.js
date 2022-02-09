import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../index.css";
import classes from "./NavigationItems.module.css";
import Button from "../../Components/UI/Button.js";
import { uiActions } from "../../Store/ui-slice";

const NavigationItems = () => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const dispatch = useDispatch();

  const RegClickHandler = () => {
    dispatch(uiActions.toggleRegForm());
    dispatch(uiActions.isSignUp());
  };

  let Click;

  if (toggle) {
    Click = null;
  }
  if (!toggle) {
    Click = RegClickHandler;
  }

  const switchClasses = toggle
    ? `${classes.whitenavlink}`
    : `${classes.darknavlink}`;

  return (
    <ul className={classes.navbarnav}>
      <li className={classes.navitem}>
        <Link className={switchClasses} to="/AboutUs">
          About Us
        </Link>
      </li>
      <li className={classes.navitem}>
        <Button onClick={Click} name={"Sign Up"} />
      </li>
    </ul>
  );
};

export default NavigationItems;
