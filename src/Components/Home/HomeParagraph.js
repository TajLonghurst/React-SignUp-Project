import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import classes from "./HomeParagraph.module.css";

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

const HomeParagraph = () => {
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
        An exploration in form, physique and colour
      </p>
    </motion.div>
  );
};

export default HomeParagraph;
