import React, { useState } from "react";
import AgeRangeSelector from "./components/AgeRangeSelector";
import ProceduresSelector from "./components/ProceduresSelector";
import MedicalConditionsSelector from "./components/MedicalConditionsSelector";
import IVFSuccessRate from "./components/IVFSuccessRate";

function App() {
  const [ageRange, setAgeRange] = useState("");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [procedures, setProcedures] = useState({
    icsi: false,
    pgt: false,
  });
  const [medicalConditions, setMedicalConditions] = useState({
    pcos: false,
    endometriosis: false,
    lowOvarianReserve: false,
    maleFactorInfertility: false,
  });
  const [successRate, setSuccessRate] = useState(null);

  const handleCalculate = () => {
    const rate = calculateSuccessRate();
    setSuccessRate(rate);
  };

  const calculateSuccessRate = () => {
    let successRate = 0;

    // Age range logic
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
    if (medicalConditions.pcos) successRate -= 5;
    if (medicalConditions.endometriosis) successRate -= 5;
    if (medicalConditions.lowOvarianReserve) successRate -= 10;
    if (medicalConditions.maleFactorInfertility) successRate -= 5;

    if (ivfCycles > 1) {
      successRate += ivfCycles * 5;
    }

    // Cap the success rate between 0 and 100
    return Math.min(Math.max(successRate, 0), 100);
  };

  return (
    <>
      <IVFSuccessRate />
      <div className="max-w-2xl mx-auto p-6">
        <AgeRangeSelector onAgeRangeChange={setAgeRange} />
        <div className="mt-6">
          <label
            htmlFor="ivfCycles"
            className="block text-lg text-gray-800 mb-2"
          >
            Number of IVF Cycles?
          </label>
          <input
            type="number"
            id="ivfCycles"
            value={ivfCycles}
            onChange={(e) => setIvfCycles(e.target.value)}
            min="1"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mt-6">
          <ProceduresSelector onProceduresChange={setProcedures} />
        </div>
        <div className="mt-6">
          <MedicalConditionsSelector
            onConditionsChange={setMedicalConditions}
          />
        </div>
        <div className="mt-6">
          <button
            onClick={handleCalculate}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Calculate
          </button>
        </div>
        {successRate !== null && (
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-800 mb-3">
              Your IVF Success Rate
            </h2>
            <div className="text-lg font-semibold text-gray-800">
              Success Rate: {successRate}%
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;