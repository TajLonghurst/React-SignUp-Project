import classes from "./Overlay.module.css";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 1,
      ease: "easeOut",
      timeConstant: 200,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

const Overlay = (props) => {
  return (
    <motion.div
      onClick={props.onClick}
      className={classes.overlay}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

export default Overlay;
