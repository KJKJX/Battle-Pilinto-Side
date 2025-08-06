import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manual from "./components/Manual";
import Game from "./components/Game";
import Separator from "./components/quick-components/Separator";

// Main App layout
function App() {
  return (
    <div className="min-h-screen w-full bg-red flex flex-col items-center justify-start font-sans">
      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="w-full flex flex-col items-center justify-center pt-24 px-2 md:px-0">
        {/* Hero section: Title and description */}
        <Hero />

        {/* Dropdown manual section */}
        <Manual />

        {/* Horizontal line divider */}
        <Separator />
        {/* Game section with placeholder */}
        <Game />
      </main>
    </div>
  );
}

export default App;
