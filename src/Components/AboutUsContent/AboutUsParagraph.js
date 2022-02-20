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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        metus ac orci posuere accumsan sit amet non arcu. Praesent in odio at
        nulla posuere elementum ut rhoncus diam. Vestibulum tristique nec ipsum
        sed mollis. Curabitur feugiat malesuada neque. Suspendisse bibendum ante
        eu lectus efficitur, et efficitur est vulputate. Cras pellentesque
        dignissim dui, ac consectetur leo aliquam in. Etiam diam elit, tincidunt
        ut nulla sed, vestibulum euismod dui.
      </p>
    </motion.div>
  );
};

export default AboutUsParagraph;
