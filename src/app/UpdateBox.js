


import React from 'react';
import { FaHtml5 } from "react-icons/fa";

const UpdateBox = ({
  newRank,
  setNewRank,
  newPercentile,
  setNewPercentile,
  newCorrectAnswers,
  setNewCorrectAnswers,
  handleUpdate,
  setShowUpdateBox,
}) => {

  // Function to handle numeric inputs, preventing invalid entries (e.g., letters)
  const handleNumberInput = (value, setter) => {
    const numericValue = value.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    setter(numericValue);  // Set the state with numeric value
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <FaHtml5 size={40} color="orangered" />
        </div>

        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg">
              1
            </span>
            <label className="font-bold text-lg">
              Update your <span className="text-black">Rank</span>
            </label>
          </div>
          <input
            type="number"
            value={newRank}
            onChange={(e) => handleNumberInput(e.target.value, setNewRank)}
            className="border border-blue-500 p-2 rounded-lg"
          />
        </div>

        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg">
              2
            </span>
            <label className="font-bold text-lg">
              Update your <span className="text-black">Percentile</span>
            </label>
          </div>
          <input
            type="number"
            value={newPercentile}
            onChange={(e) => handleNumberInput(e.target.value, setNewPercentile)}
            className="border border-blue-500 p-2 rounded-lg"
          />
        </div>

        <div className="mb-6 flex justify-between">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg">
              3
            </span>
            <label className="font-bold text-lg">
              Update your <span className="text-black">Current Score</span> (out of 15)
            </label>
          </div>
          <input
            type="number"
            value={newCorrectAnswers}
            onChange={(e) => handleNumberInput(e.target.value, setNewCorrectAnswers)}
            className="border border-blue-500 p-2 rounded-lg"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="text-blue-800 border border-blue-800 py-2 px-6 rounded-lg hover:bg-blue-50 transition duration-200"
            onClick={() => setShowUpdateBox(false)}
          >
            cancel
          </button>
          <button
            className="bg-blue-800 text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-200"
            onClick={handleUpdate}
          >
            save <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBox;
