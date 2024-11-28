import React, { useState } from "react";

function IvfCyclesSlider() {
  const [cycles, setCycles] = useState(1);

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">Number of IVF Cycles?</h2>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min="1"
          max="5"
          value={cycles}
          onChange={(e) => setCycles(e.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <span className="text-gray-700">{cycles}</span>
      </div>
    </div>
  );
}

export default IvfCyclesSlider;
