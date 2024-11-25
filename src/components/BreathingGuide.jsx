import React, { useEffect, useState } from "react";

const BreathingGuide = ({ isRunning, duration, isComplete }) => {
  const phases = [
    { name: "Inhale", duration: duration },
    { name: "Hold", duration: 4 },
    { name: "Exhale", duration: 4 },
  ];

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [timer, setTimer] = useState(phases[0].duration);

  //method for calculating and switching phase of breathing
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 1) {
            return prevTimer - 1;
          } else {
            // Move to the next phase and reset the timer
            const nextPhaseIndex = (phaseIndex + 1) % phases.length;
            setPhaseIndex(nextPhaseIndex);
            return phases[nextPhaseIndex].duration;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval); // Stop the timer if paused
    }

    return () => clearInterval(interval); // clean up and unmount
  }, [isRunning, setPhaseIndex, phases]);

  // Resets the guide when `isRunning` changes
  useEffect(() => {
    if (!isRunning && isComplete) {
      setPhaseIndex(0);
      setTimer(phases[0].duration);
    }
  }, [isRunning, phases, isComplete]);

  return (
    <div className="p-6 bg-white shadow rounded-lg text-center w-64 mt-5">
      <h2 className="text-2xl font-semibold text-gray-800">
        {isComplete ? "Done ✔" : phases[phaseIndex].name}
      </h2>
      <p className="text-lg text-gray-600">
        {" "}
        {isComplete ? "Great job! 🌹🌼🎊🎉" : `Time: ${timer}s`}
      </p>
    </div>
  );
};

export default BreathingGuide;
