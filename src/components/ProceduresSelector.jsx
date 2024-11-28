import React, { useState } from "react";

function ProceduresSelector({ onProceduresChange }) {
  const [icsi, setIcsi] = useState(false);
  const [pgt, setPgt] = useState(false);

  const handleIcsiChange = (e) => {
    setIcsi(e.target.value === "Yes");
    onProceduresChange("icsi", e.target.value === "Yes");
  };

  const handlePgtChange = (e) => {
    setPgt(e.target.value === "Yes");
    onProceduresChange("pgt", e.target.value === "Yes");
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-3">
        Have you undergone these procedures before?
      </h2>

      <div className="flex space-x-4">
        <div className="flex items-center">
          <h4 className="mr-4">ICSI:</h4>
          <label className="mr-4">
            <input
              type="radio"
              name="icsi"
              value="Yes"
              checked={icsi === true}
              onChange={handleIcsiChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="icsi"
              value="No"
              checked={icsi === false}
              onChange={handleIcsiChange}
              className="mr-2"
            />
            No
          </label>
        </div>
        <div className="flex items-center">
          <h4 className="mr-4">PGT:</h4>
          <label className="mr-4">
            <input
              type="radio"
              name="pgt"
              value="Yes"
              checked={pgt === true}
              onChange={handlePgtChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="pgt"
              value="No"
              checked={pgt === false}
              onChange={handlePgtChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProceduresSelector;
