import React from "react";
import classes from "./AboutUs.module.css";
import AboutUsIcons from "./AboutUsIcons";
import AboutUsParagraph from "./AboutUsParagraph";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cardBody}>
        <p className={classes.smallText}>Location</p>
        <h1 className={classes.header}>Abouts Us</h1>
        <AboutUsParagraph />
      </div>
      <AboutUsIcons />
    </div>
  );
};

export default AboutUs;
