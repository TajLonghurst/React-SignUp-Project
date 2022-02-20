import { Fragment } from "react";
// import ImageBlueLady from "../../Images/BlueWhiteHeadSWL.png";
import ImageRedLady from "../../Assets/Images/RedBlackHeadSWL.png";
import { motion } from "framer-motion";
import classes from "./AboutUsHero.module.css";
import useWindowSize from "../../Hooks/use-windowSize";
import "../../index.css";

const pageTranstion = {
  hidden: {
    x: "-41.6vw",
  },
  visible: {
    x: "0vw",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-41.6vw",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const AboutsUsHero = () => {
  const { isDesktopView: isActive } = useWindowSize();
  return (
    <Fragment>
      <div className="containervh">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12"></div>
          {isActive && (
            <motion.div
              variants={pageTranstion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12"
            >
              <img
                className={classes.imageSize}
                src={ImageRedLady}
                alt="Failed to Load"
              />
            </motion.div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AboutsUsHero;
