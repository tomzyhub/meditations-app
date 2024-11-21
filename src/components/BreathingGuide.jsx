import React, { useEffect, useState } from "react";

const BreathingGuide = () => {
  const [phase, setPhase] = useState("inhale");
  const [timer, setTimer] = useState(4);

  //method for calculating and switching phase of breathing
  useEffect(() => {
    const phases = ["Inhale", "Hold", "Exhale"];
    let phaseIndex = 0;

    const interval = setInterval(() => {
      setPhase(phases[phaseIndex]);
      phaseIndex = (phaseIndex + 1) % phases.length;
      setTimer(4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  //method for calculating the countdown
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 1 ? prevTimer - 1 : prevTimer));
    }, 1000);
    return () => clearInterval(countdown); // Cleanup on phase change
  }, [phase]);

  return (
    <div className="p-6 bg-white shadow rounded-lg text-center w-64 mt-5">
      <h2 className="text-2xl font-semibold text-gray-800">{phase}</h2>
      <p className="text-lg text-gray-600">Time: {timer}s</p>
    </div>
  );
};

export default BreathingGuide;
