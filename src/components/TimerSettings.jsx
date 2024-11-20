import React, { useState } from "react";

function TimerSettings({ setDuration }) {
  const [minutes, setMinutes] = useState(5);

  //the fucntion that handles input and identifys what changed and update the state
  const handleChange = (e) => {
    const value = Math.min(1, Math.max(60, Number(e.target.value)));
    setMinutes(value);
    setDuration(value);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow rounded-lg ">
      <h3 className="font-mono text-2xl">Your Time⏰ {minutes}</h3>
      <input
        className="p-4 bg-white rounded-lg w-64 border-4 "
        type="number"
        value={minutes}
        onChange={handleChange}
      />
    </div>
  );
}

export default TimerSettings;
