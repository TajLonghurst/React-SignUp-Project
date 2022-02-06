import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import "../../index.css";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarbrand}>
        <Link to="/">NAVBAR</Link>
      </div>
      <div className={classes.navbarlenght}>
        <NavigationItems />
      </div>
    </nav>
  );
};

export default Navigation;
