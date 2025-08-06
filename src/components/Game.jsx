import React from "react";

// Game section with title and placeholder box
function Game() {
  return (
    <section className="flex flex-col items-center justify-center mb-12 px-4 w-full">
      {/* Game Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Game</h2>
      {/* Placeholder for game UI */}
      <div className="h-48 w-8/10 bg-red border-4 border-white flex items-center justify-center text-white">
        {/* Placeholder box for future game UI */}
        Game UI Placeholder
      </div>
    </section>
  );
}

export default Game;
