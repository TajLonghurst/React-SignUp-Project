import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

import Index from "./Pages/Index";
import StorePage from "./Pages/StorePage";
import UserProfile from "./Pages/UserProfile";
import Details from "./Pages/Details";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
