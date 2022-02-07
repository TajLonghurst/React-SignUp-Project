import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

import Index from "./Pages/Index";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
