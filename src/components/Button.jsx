import React from "react";

function Button({ children }) {
  return (
    <button
      type="submit"
      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500"
    >
      {children}
    </button>
  );
}

export default Button;
