import classes from "./FormStatusMessage.module.css";
import { MdError, MdCheckCircle } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { uiActions } from "../../../Store/ui-slice";
import Overlay from "./Overlay";

const dropIn = {
  hidden: {
    y: "-5vh",
    opacity: 0,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: "easeOut",
      timeConstant: 200,
    },
  },
  exit: {
    y: "5vh",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const FormStatusMessage = () => {
  const [isAnimated, setIsisAnimated] = useState(false);
  const [overlayAnimated, setOverlayAnimated] = useState(false);
  const [isOverlayAnimated, setIsOverlayAnimated] = useState(false);
  const isError = useSelector((state) => state.ui.ErrorIs);
  const isSuccses = useSelector((state) => state.ui.isSuccses);
  const ErrorMsg = useSelector((state) => state.ui.ErrorMsg);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccses) {
      const timer = setTimeout(() => setIsisAnimated(false), 3000);
      setIsisAnimated(true);
      return () => clearTimeout(timer);
    }
    if (isError) {
      setIsisAnimated(true);
    }
  }, [isError, isSuccses]);

  useEffect(() => {
    if (overlayAnimated) {
      const timer = setTimeout(() => {
        setIsOverlayAnimated(true);
        setOverlayAnimated(false);
      }, 100);
      setIsOverlayAnimated(false);
      return () => clearTimeout(timer);
    }
  }, [overlayAnimated]);

  const btnOnClickhandler = () => {
    setIsisAnimated(false);
    dispatch(uiActions.toggleRegForm());
    dispatch(uiActions.isFormNotification({ ErrorIs: false }));
  };

  const OverlayOnclickHandler = () => {
    setOverlayAnimated(true);
  };

  const errorIcon = <MdError className={classes.errorCardIcon} />;
  const succsesIcon = <MdCheckCircle className={classes.succsesCardIcon} />;

  const overlayClasses = isOverlayAnimated
    ? `${classes.cardBodyWhiteAnimated}`
    : `${classes.cardBodyWhite}`;

  return (
    <Fragment>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isError && <Overlay onClick={OverlayOnclickHandler} />}
      </AnimatePresence>

      <div className={classes.container}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {isAnimated && (
            <motion.div
              className={overlayClasses}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {isError ? errorIcon : succsesIcon}
              <p className={classes.cardText}>{ErrorMsg}</p>
              {isError && (
                <button className={classes.Button} onClick={btnOnClickhandler}>
                  ok
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  );
};

export default FormStatusMessage;
