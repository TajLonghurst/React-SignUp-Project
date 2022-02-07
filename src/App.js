import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { useSelector } from "react-redux";

import Index from "./Pages/Index";
import AboutUs from "./Pages/AboutUs";
import { RegForm } from "./Components/UI/Modals";

function App() {
  const toggle = useSelector((state) => state.ui.RegFormIsVisible);

  const switchClasses = toggle ? "darkbackground" : "whitebackground";

  return (
    <Fragment>
      <section className={switchClasses}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>
        <RegForm />
      </section>
    </Fragment>
  );
}

export default App;
