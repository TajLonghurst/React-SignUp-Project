import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import { authActions } from "../../Store/auth-slice";
import { useNavigate } from "react-router-dom";
import classes from "./NavigationItems.module.css";
import Button from "../../Components/UI/Button.js";

const NavigationItems = () => {
  const navigation = useNavigate();
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const RegClickHandler = () => {
    if (!isLoggedIn) {
      dispatch(uiActions.toggleRegForm());
      dispatch(uiActions.isSignUp());
    } else {
      dispatch(authActions.Logout());
      navigation("/");
    }
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

  const switchName = isLoggedIn ? "Logout" : "Sign Up";

  return (
    <ul className={classes.navbarnav}>
      {isLoggedIn && (
        <li className={classes.navitem}>
          <Link className={switchClasses} to="/Profile">
            profile
          </Link>
        </li>
      )}
      <li className={classes.navitem}>
        <Link className={switchClasses} to="/AboutUs">
          About Us
        </Link>
      </li>
      <li className={classes.navitem}>
        <Button onClick={Click} name={switchName} />
      </li>
    </ul>
  );
};

export default NavigationItems;
