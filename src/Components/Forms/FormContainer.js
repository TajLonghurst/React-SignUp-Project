import SignUp from "./SignUp";
import LogIn from "./LogIn";
import classes from "./FormContainer.module.css";
import "../../index.css";

const FormContainer = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
        <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-10 col-sm-12">
          <SignUp />
          {/* <LogIn /> */}
        </div>
        <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
      </div>
    </div>
  );
};

export default FormContainer;
