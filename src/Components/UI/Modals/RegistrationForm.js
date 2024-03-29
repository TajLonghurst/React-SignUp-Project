import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import FormContainer from "../../Forms/FormContainer";
import Button from "../Button";
import classes from "./RegistrationForm.module.css";
import "../../../index.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);
  const isMobileView = useSelector((state) => state.ui.isMobileNavigation);

  const RegClickHandler = () => {
    if (!isMobileView) {
      dispatch(uiActions.toggleRegForm());
      dispatch(uiActions.isLogin());
    } else {
      return;
    }
  };

  const toggleForm = toggle ? `${classes.cardActive}` : `${classes.card}`;
  const switchName = toggle ? "Close" : "Log In";

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={toggleForm}>
          <div className={classes.cardcontent}>
            <div className={classes.cardbutton}>
              <Button onClick={RegClickHandler} name={switchName} />
            </div>
          </div>
          <FormContainer />
          {/* <LogInForm/> */}
        </div>
      </div>
    </Fragment>
  );
};

export default RegistrationForm;
