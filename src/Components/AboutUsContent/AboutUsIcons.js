import React, { Fragment } from "react";
import { BsTwitter, BsFacebook, BsBehance } from "react-icons/bs";
import classes from "./AboutUsIcons.module.css";
import { useSelector } from "react-redux";

const AboutUsIcons = () => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const switchClasses = toggle ? `${classes.iconWhite}` : `${classes.iconDark}`;
  return (
    <Fragment>
      <ul className={classes.iconLayout}>
        <li className={classes.iconItem}>
          <BsTwitter className={switchClasses} />
        </li>
        <li className={classes.iconItem}>
          <BsFacebook className={switchClasses} />
        </li>
        <li className={classes.iconItem}>
          <BsBehance className={switchClasses} />
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutUsIcons;
