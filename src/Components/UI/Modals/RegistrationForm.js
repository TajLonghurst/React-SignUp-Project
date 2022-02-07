import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";

import Button from "../Button";
import classes from "./RegistrationForm.module.css";
import "../../../index.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const RegClickHandler = () => {
    dispatch(uiActions.toggleRegForm());
  };

  const toggleForm = toggle ? `${classes.cardActive}` : `${classes.card}`;
  const switchName = toggle ? "Close" : "Open";

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={toggleForm}>
          <div className={classes.cardcontent}>
            <div className={classes.cardbutton}>
              <Button onClick={RegClickHandler} name={switchName} />
            </div>
          </div>
          {/* NewComponet */}
          {/* <div className="container">
            <div className="row">
              <div className="col-6">
                <p className={classes.center}>hay</p>
              </div>
              <div className="col-6">hay</div>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationForm;
