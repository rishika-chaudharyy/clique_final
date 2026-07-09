import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro.jsx";

import Home from "./pages/Home.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <CustomCursor />
      {!showHome ? (
        <Intro onComplete={() => setShowHome(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
