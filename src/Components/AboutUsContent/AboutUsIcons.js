import React, { Fragment } from "react";
import { BsTwitter, BsFacebook, BsBehance } from "react-icons/bs";
import classes from "./AboutUsIcons.module.css";

const AboutUsIcons = () => {
  return (
    <Fragment>
      <ul className={classes.iconLayout}>
        <li className={classes.iconItem}>
          <BsTwitter className={classes.icon} />
        </li>
        <li className={classes.iconItem}>
          <BsFacebook className={classes.icon} />
        </li>
        <li className={classes.iconItem}>
          <BsBehance className={classes.icon} />
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutUsIcons;
