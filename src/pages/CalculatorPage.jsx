import React from "react";
import AgeRangeSelector from "../components/AgeRangeSelector";
import IvfCyclesSlider from "../components/IvfCyclesSlider";
import ProceduresSelector from "../components/ProceduresSelector";
import MedicalConditionsSelector from "../components/MedicalConditionsSelector";
import Button from "../components/Button";

function CalculatorPage() {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">IVF Success Rate Calculator</h1>
        <p className="text-sm text-gray-500">Home / IVF Success Rate Calculator</p>
      </header>

      <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <AgeRangeSelector />
        <IvfCyclesSlider />
        <ProceduresSelector />
        <MedicalConditionsSelector />
        <Button>Calculate</Button>
      </form>
    </div>
  );
}

export default CalculatorPage;
