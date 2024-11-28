import React from "react";

function IvfSuccessRateCalculator({
  ageRange,
  ivfCycles,
  procedures,
}) {
  const calculateSuccessRate = () => {
    let successRate = 0;

    switch (ageRange) {
      case "Under 30":
        successRate = 60;
        break;
      case "Between 30 - 34":
        successRate = 55;
        break;
      case "Between 35 - 37":
        successRate = 45;
        break;
      case "Between 38 - 40":
        successRate = 40;
        break;
      case "Between 41 - 43":
        successRate = 30;
        break;
      case "Above 43":
        successRate = 20;
        break;
      default:
        successRate = 0;
    }

    if (procedures.icsi) successRate += 5; 
    if (procedures.pgt) successRate += 10;

    if (procedures.pcos) successRate -= 5;
    if (procedures.endometriosis) successRate -= 5; 
    if (procedures.lowOvarianReserve) successRate -= 10; 
    if (procedures.maleFactorInfertility) successRate -= 5; 

    if (ivfCycles > 1) {
      successRate += ivfCycles * 5;
    }
    return Math.min(Math.max(successRate, 0), 100);
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">
        Your IVF Success Rate
      </h2>
      <div className="text-lg font-semibold text-gray-800">
        Success Rate: {calculateSuccessRate()}%
      </div>
    </div>
  );
}

export default IvfSuccessRateCalculator;
