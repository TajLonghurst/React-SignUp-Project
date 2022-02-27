import React from "react";
import classes from "./AboutUsParagraph.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const paragraphTranstion = {
  hidden: {
    y: "-3vh",
    opacity: 0,
  },
  visible: {
    y: "0vw",
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const AboutUsParagraph = () => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const switchClasses = toggle
    ? `${classes.paragraphWhite}`
    : `${classes.paragraphDark}`;
  return (
    <motion.div
      className={classes.paragraphBody}
      variants={paragraphTranstion}
      initial="hidden"
      animate="visible"
    >
      <p className={switchClasses}>
        Urban is a leading New Zealand art gallery representing some of the most
        influential contemporary artists and estates from the past century.
        Since its founding by Taj Longhurst in 2021, Urban has developed a
        distinguished legacy as an artist-first establishment that mounts
        seminal historical and contemporary exhibitions. Under the current
        leadership of President and CEO Barry Goldfinger, Urban continues to
        support its artists and share their visionary work with audiences
        worldwide by remaining at the forefront of innovation.
      </p>
    </motion.div>
  );
};

export default AboutUsParagraph;
