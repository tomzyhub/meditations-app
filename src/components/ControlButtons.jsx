import React from "react";

const ControlButtons = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="flex space-x-4 mt-6">
      {isRunning ? (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onPause}
        >
          Pause
        </button>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onStart}
        >
          Start
        </button>
      )}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
