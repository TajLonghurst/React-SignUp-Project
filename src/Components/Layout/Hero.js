import { Fragment } from "react";

import "../../index.css";
import classes from "../Layout/Hero.module.css";
import ImageBlueLady from "../../Images/BlueWhiteHead.png";

const Hero = () => {
  return (
    <Fragment>
      <div className="containervh">
        <div className="row">
          <div className="col-7">
            <img
              className={classes.imageSize}
              src={ImageBlueLady}
              alt="Failed to Load"
            />
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
