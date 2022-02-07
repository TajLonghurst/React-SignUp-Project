import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

import Index from "./Pages/Index";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
