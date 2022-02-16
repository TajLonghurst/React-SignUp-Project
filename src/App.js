import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { useSelector } from "react-redux";
import Index from "./Pages/Index";
import AboutUs from "./Pages/AboutUs";
import { RegForm } from "./Components/UI/Modals";
import Profile from "./Pages/Profile";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const switchClasses = toggle ? "darkbackground" : "whitebackground";

  return (
    <Fragment>
      <section className={switchClasses}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {isLoggedIn && <Route path="/profile" element={<Profile />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <RegForm />
      </section>
    </Fragment>
  );
}

export default App;
