import React from "react";
import Button from "./quick-components/Button";

// Top navigation bar with title and stats button
function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-red-light text-white flex items-center justify-between px-6 py-7 shadow-md z-50">
      {/* Title */}
      <div className="text-2xl font-bold tracking-wide">
        Battle-Pilinto Side
      </div>
      {/* Reveal Stats Button */}
      <Button size="sm" className="px-8">
        Reveal Stats
      </Button>
    </nav>
  );
}

export default Navbar;
