import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={classes.navbarnav}>
      <li className={classes.navitem}>
        <Link className={classes.navlink} to="/store">
          Store
        </Link>
      </li>
      <li className={classes.navitem}>
        <Link className={classes.navlink} to="/">
          HOME
        </Link>
      </li>
      <li className={classes.navitem}>
        <Link className={classes.navlink} to="/UserProfile">
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default NavigationItems;
