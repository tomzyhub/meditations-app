import React, { useState } from "react";

function TimerSettings({ setDuration }) {
  const [minutes, setMinutes] = useState(5);

  // Function to handle input changes
  const handleChange = (e) => {
    const value = Math.max(1, Math.min(60, Number(e.target.value)));
    setMinutes(value);
    setDuration(value);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-blue-50 shadow rounded-lg">
      <h3 className="font-mono text-2xl">Your Time⏰ {minutes}</h3>
      <input
        className="p-4 bg-white rounded w-24 border text-center"
        type="number"
        value={minutes}
        onChange={handleChange}
      />
    </div>
  );
}

export default TimerSettings;
