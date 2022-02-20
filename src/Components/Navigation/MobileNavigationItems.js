import React, { Fragment } from "react";
import MobileNavigationDrop from "./MobileNavigationDrop";
import { useDispatch, useSelector } from "react-redux";
import { MdDehaze, MdClear } from "react-icons/md";
import { uiActions } from "../../Store/ui-slice";
import classes from "./MobileNavigationItems.module.css";
import "../../index.css";

const MobileNavigationItems = () => {
  const dispatch = useDispatch();
  const toggleMobileNav = useSelector((state) => state.ui.isMobileNavigation);

  const mobileonClickHandler = () => {
    if (toggleMobileNav) {
      dispatch(uiActions.toggleMoblieNavigation({ activeType: false }));
    } else {
      dispatch(uiActions.toggleRegForm({ activeType: false }));
      dispatch(uiActions.toggleMoblieNavigation({ activeType: true }));
    }
  };

  const switchIcons = toggleMobileNav ? (
    <MdClear onClick={mobileonClickHandler} className={classes.icon} />
  ) : (
    <MdDehaze onClick={mobileonClickHandler} className={classes.icon} />
  );

  return (
    <Fragment>
      <ul className={classes.navbarnav}>{switchIcons}</ul>
      {toggleMobileNav && <MobileNavigationDrop />}
    </Fragment>
  );
};

export default MobileNavigationItems;
