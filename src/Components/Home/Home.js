import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";
import HomeParagraph from "./HomeParagraph";

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

// const smallTextTranstion = {
//   hidden: {
//     y: "3vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "0vw",
//     opacity: 1,
//     transition: {
//       delay: 1.8,
//       duration: 0.2,
//       ease: "easeOut",
//     },
//   },
// };

const Home = () => {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  //   const switchSmallTextClasses = toggle
  //     ? `${classes.smallTextWhite}`
  //     : `${classes.smallTextDark}`;

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
        {/* <motion.p
          className={switchSmallTextClasses}
          variants={smallTextTranstion}
          initial="hidden"
          animate="visible"
        ></motion.p> */}
        <h1 className={switchHeaderClasses}>Shades of Mind</h1>
        <HomeParagraph />
      </div>
    </motion.div>
  );
};

export default Home;
