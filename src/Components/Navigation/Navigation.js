import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import NavigationItems from "./NavigationItems";
import { useSelector } from "react-redux";
import "../../index.css";

const Navigation = () => {
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
        <NavigationItems />
      </div>
    </nav>
  );
};

export default Navigation;
