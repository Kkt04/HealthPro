import React, { useState } from "react";

function MedicalConditionsSelector() {
  const [conditions, setConditions] = useState({
    pcos: false,
    endometriosis: false,
    lowReserve: false,
    maleInfertility: false,
  });

  const toggleCondition = (condition) => {
    setConditions((prev) => ({ ...prev, [condition]: !prev[condition] }));
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">Do you have any of these medical conditions?</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(conditions).map((condition) => (
          <label key={condition} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={conditions[condition]}
              onChange={() => toggleCondition(condition)}
              className="h-4 w-4 text-red-600"
            />
            <span className="capitalize text-gray-700">{condition}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default MedicalConditionsSelector;
