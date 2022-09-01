import React, { Fragment } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { useSelector } from "react-redux";
import Index from "./Pages/Index";
import Aboutus from "./Pages/AboutUs";
import { RegForm } from "./Components/UI/Modals";
import Profile from "./Pages/Profile";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const switchClasses = toggle ? "darkbackground" : "whitebackground";

  return (
    <Fragment>
      <section className={switchClasses}>
        <Navigation />
        <main>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/aboutus" element={<Aboutus />} />
              {isLoggedIn && <Route path="/profile" element={<Profile />} />}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
        </main>
        <RegForm />
      </section>
    </Fragment>
  );
}

//use rafce snippet for quick arrow funtion component

export default App;
