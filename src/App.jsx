import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Manual from "./components/Manual";
import HomePage from "./components/pages/HomePage.jsx";
import Separator from "./components/quick-components/Separator";
import {Route, Routes} from "react-router-dom";

// Main App layout
function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
