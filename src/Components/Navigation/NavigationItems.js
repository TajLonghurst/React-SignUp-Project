import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";

import "../../index.css";
import Button from "../../Components/UI/Button.js";

const NavigationItems = () => {
  return (
    <ul className={classes.navbarnav}>
      <li className={classes.navitem}>
        <Link className={classes.navlink} to="/AboutUs">
          About Us
        </Link>
      </li>
      <li className={classes.navitem}>
        <Button name={"Sign Up"} />
      </li>
    </ul>
  );
};

export default NavigationItems;
