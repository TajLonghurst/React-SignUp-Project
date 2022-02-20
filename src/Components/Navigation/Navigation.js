import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import NavigationItems from "./NavigationItems";
import { useSelector } from "react-redux";
import useWindowSize from "../../Hooks/use-windowSize";
import "../../index.css";
import MobileNavigationItems from "./MobileNavigationItems";

const Navigation = () => {
  const { isMobileView: moblie } = useWindowSize();
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const switchClasses = toggle
    ? `${classes.whitenavbarbrand}`
    : `${classes.darknavbarbrand}`;

  return (
    <nav className={classes.navbar}>
      <div>
        <Link className={switchClasses} to="/">
          URBAN
        </Link>
      </div>
      <div className={classes.navbarlenght}>
        {!moblie && <NavigationItems />}
        {moblie && <MobileNavigationItems />}
      </div>
    </nav>
  );
};

export default Navigation;
