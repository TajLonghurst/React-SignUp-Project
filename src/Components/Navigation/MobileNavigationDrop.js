import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import { authActions } from "../../Store/auth-slice";
import { useNavigate } from "react-router-dom";
import classes from "./MobileNavigationDrop.module.css";
import Button from "../../Components/UI/Button.js";
import { Fragment } from "react";

const MobileNavigationDrop = () => {
  const navigation = useNavigate();
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpened = useSelector((state) => state.ui.isMobileNavigation);
  const dispatch = useDispatch();

  const RegClickHandler = () => {
    if (!isLoggedIn) {
      dispatch(uiActions.toggleRegForm());
      dispatch(uiActions.isSignUp());
    } else {
      dispatch(authActions.Logout());
      navigation("/");
    }
    if (isOpened) {
      dispatch(uiActions.toggleMoblieNavigation({ activeType: false }));
    }
  };

  const closeOnClickHandler = () => {
    dispatch(uiActions.toggleMoblieNavigation({ activeType: false }));
  };

  const switchClasses = toggle
    ? `${classes.whitenavlink}`
    : `${classes.darknavlink}`;

  const switchName = isLoggedIn ? "Logout" : "Sign Up";

  return (
    <Fragment>
      <div className={classes.dropbody}>
        <div className={classes.container}>
          <ul className={classes.navbarnav}>
            <li className={classes.navitem}>
              <Link
                onClick={closeOnClickHandler}
                className={switchClasses}
                to="/"
              >
                Home
              </Link>
            </li>
            {isLoggedIn && (
              <li className={classes.navitem}>
                <Link
                  onClick={closeOnClickHandler}
                  className={switchClasses}
                  to="/Profile"
                >
                  profile
                </Link>
              </li>
            )}
            <li className={classes.navitem}>
              <Link
                onClick={closeOnClickHandler}
                className={switchClasses}
                to="/AboutUs"
              >
                About Us
              </Link>
            </li>
            <li className={classes.navitem}>
              <Button onClick={RegClickHandler} name={switchName} />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavigationDrop;
