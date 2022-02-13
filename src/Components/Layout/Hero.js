import { Fragment } from "react";

import "../../index.css";
import classes from "../Layout/Hero.module.css";
// import ImageBlueLady from "../../Images/BlueWhiteHeadSWL.png";
import ImageRedLady from "../../Assets/Images/RedBlackHeadSWL.png";
import ErrorMessage from "../UI/ErrorMessage";

const Hero = () => {
  return (
    <Fragment>
      <div className="containervh">
        <ErrorMessage />
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <img
              className={classes.imageSize}
              src={ImageRedLady}
              alt="Failed to Load"
            />
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
