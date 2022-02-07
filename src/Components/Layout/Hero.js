import { Fragment } from "react";

import "../../index.css";
import classes from "../Layout/Hero.module.css";
import ImageBlueLady from "../../Images/BlueWhiteHeadSWL.png";

const Hero = () => {
  return (
    <Fragment>
      <div className="containervh">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <img
              className={classes.imageSize}
              src={ImageBlueLady}
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
