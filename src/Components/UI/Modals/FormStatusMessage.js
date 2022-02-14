import classes from "./FormStatusMessage.module.css";
import { MdError } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-5vh",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 1,
      ease: "easeOut",
      timeConstant: 200,
    },
  },
  exit: {
    y: "5vh",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const FormStatusMessage = () => {
  const OHere = true;
  const PHere = false;

  return (
    <div className={classes.container}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {OHere && (
          <motion.div
            className={classes.cardBodyWhite}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MdError className={classes.cardIcon} />
            <p className={classes.cardText}>
              Sign up form failed try again later
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormStatusMessage;
