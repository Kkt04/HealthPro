import React, { useState } from "react";
import photo from "../pictures/photo.png";

export default function IVFSuccessRate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (64 / 100) * circumference;

  return (
    <div className="relative min-h-screen bg-gray-800 text-white">
      <header className="bg-white p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">iVF Pulse</h1>
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-900 hover:text-black">
              Donor Programme
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              Fertility Preservation
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              Advanced Treatments
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              Infertility Treatments
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              IVF Testing
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              About Us
            </a>
          </nav>
          <button className="hidden lg:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Talk to Us →
          </button>

          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white p-4">
            <nav className="space-y-4">
              <a href="#" className="block text-gray-900 hover:text-black">
                Donor Programme
              </a>
              <a href="#" className="block text-gray-900 hover:text-black">
                Fertility Preservation
              </a>
              <a href="#" className="block text-gray-900 hover:text-black">
                Advanced Treatments
              </a>
              <a href="#" className="block text-gray-900 hover:text-black">
                Infertility Treatments
              </a>
              <a href="#" className="block text-gray-900 hover:text-black">
                IVF Testing
              </a>
              <a href="#" className="block text-gray-900 hover:text-black">
                About Us
              </a>
            </nav>
            <button className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Talk to Us →
            </button>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8 lg:mb-0 lg:mr-8 lg:pl-10 text-center lg:text-left">
          <p className="text-white-400 mb-4">
            Home / IVF Success Rate Calculator / Result
          </p>
          <h2 className="text-4xl font-bold mb-8">
            Your estimated IVF Success Rate is
          </h2>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start items-center lg:pl-80 space-x-6">
        <div className="relative flex flex-col items-center lg:items-start">
          <svg
            className="rotate-[-90deg]"
            width="150"
            height="150"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r={circleRadius}
              fill="transparent"
              stroke="#4caf50"
              strokeWidth="20"
              className="opacity-30"
            />
            <circle
              cx="60"
              cy="60"
              r={circleRadius}
              fill="transparent"
              stroke="#4caf50"
              strokeWidth="20"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute flex items-center justify-center w-[100px] h-[100px] left-6 top-6 rounded-full bg-gray-800">
            <span className="text-white text-2xl font-bold">64%</span>
          </div>
          <p className="mt-4 text-gray-300">With 1 IVF Cycle</p>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-full lg:w-[800px] h-auto bg-gray-800 p-4 rounded-lg">
        <img src={photo} alt="Couple" className="w-full h-auto rounded-md" />
      </div>

      <div className="fixed bottom-4 left-0 w-full flex justify-center lg:hidden">
        <button className="bg-red-500 text-white text-lg font-bold px-6 py-3 rounded-lg w-auto max-w-xs">
          Start Private Communication
        </button>
      </div>
    </div>
  );
}