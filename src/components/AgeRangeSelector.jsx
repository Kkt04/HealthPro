import React, { useState } from "react";

function AgeRangeSelector() {
  const [ageRange, setAgeRange] = useState("");

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">Which age range applies to you?</h2>
      <div className="space-y-2">
        {["Under 30", "Between 30 - 34", "Between 35 - 37", "Between 38 - 40", "Between 41 - 43", "Above 43"].map(
          (range) => (
            <label key={range} className="flex items-center space-x-2">
              <input
                type="radio"
                name="ageRange"
                value={range}
                checked={ageRange === range}
                onChange={() => setAgeRange(range)}
                className="h-4 w-4 text-red-600"
              />
              <span className="text-gray-700">{range}</span>
            </label>
          )
        )}
      </div>
    </div>
  );
}

export default AgeRangeSelector;
