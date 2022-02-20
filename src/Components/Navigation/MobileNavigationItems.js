import React, { Fragment } from "react";
import MobileNavigationDrop from "./MobileNavigationDrop";
import { useDispatch, useSelector } from "react-redux";
import { MdDehaze, MdClear } from "react-icons/md";
import { uiActions } from "../../Store/ui-slice";
import classes from "./MobileNavigationItems.module.css";
import { AnimatePresence } from "framer-motion";
import "../../index.css";

const MobileNavigationItems = () => {
  const dispatch = useDispatch();
  const toggleMobileNav = useSelector((state) => state.ui.isMobileNavigation);
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const mobileonClickHandler = () => {
    if (toggleMobileNav) {
      dispatch(uiActions.toggleMoblieNavigation({ activeType: false }));
    } else {
      dispatch(uiActions.toggleRegForm({ activeType: false }));
      dispatch(uiActions.toggleMoblieNavigation({ activeType: true }));
    }
  };

  const switchClasses = toggle ? `${classes.iconWhite}` : `${classes.iconDark}`;

  const switchIcons = toggleMobileNav ? (
    <MdClear onClick={mobileonClickHandler} className={switchClasses} />
  ) : (
    <MdDehaze onClick={mobileonClickHandler} className={switchClasses} />
  );

  return (
    <Fragment>
      <ul className={classes.navbarnav}>{switchIcons}</ul>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {toggleMobileNav && <MobileNavigationDrop />}
      </AnimatePresence>
    </Fragment>
  );
};

export default MobileNavigationItems;
