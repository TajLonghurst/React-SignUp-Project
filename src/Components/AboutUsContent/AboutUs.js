import React from "react";
import classes from "./AboutUs.module.css";
import AboutUsIcons from "./AboutUsIcons";
import AboutUsParagraph from "./AboutUsParagraph";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const textContentTranstion = {
  hidden: {
    y: "-6vh",
    opacity: 0,
  },
  visible: {
    y: "0vw",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    y: "-20vh",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const smallTextTranstion = {
  hidden: {
    y: "3vh",
    opacity: 0,
  },
  visible: {
    y: "0vw",
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const switchSmallTextClasses = toggle
    ? `${classes.smallTextWhite}`
    : `${classes.smallTextDark}`;

  const switchHeaderClasses = toggle
    ? `${classes.headerWhite}`
    : `${classes.headerDark}`;

  return (
    <motion.div
      className={classes.container}
      variants={textContentTranstion}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={classes.cardBody}>
        <motion.p
          className={switchSmallTextClasses}
          variants={smallTextTranstion}
          initial="hidden"
          animate="visible"
        >
          Location
        </motion.p>
        <h1 className={switchHeaderClasses}>About us</h1>
        <AboutUsParagraph />
      </div>
      <AboutUsIcons />
    </motion.div>
  );
};

export default AboutUs;
